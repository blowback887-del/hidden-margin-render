import json,re,sys
sys.path.insert(0,'.')
from scenes import S
R='/home/claude/hidden-margin-render'
norm=lambda t:re.sub(r"[^a-z0-9']","",t.lower().replace('’',"'"))
TOK=json.load(open('/home/claude/ep05/gen/tokens.json'))
N=[t['n'] for t in TOK]
def toks(ph):
    return [norm(u) for t in re.split(r"[\s—]+",ph) for u in t.split('-') if norm(u)]
def find(ph,frm=0):
    q=toks(ph)
    for i in range(frm,len(N)-len(q)+1):
        if N[i:i+len(q)]==q: return i
    raise SystemExit(f'phrase not found: {ph!r} from {frm}')
cfg=json.load(open(f'{R}/cloud/broll/ep05.json'))
broll={i+1:c['name'] for i,c in enumerate(cfg['clips'])}
lens=json.load(open('lens.json')) if open('lens.json').read().strip() else {}
starts=[];idx=0
for sc in S:
    i=find(sc['start'],idx); starts.append(i); idx=i+1
times=[0.0]+[round(TOK[i]['s']-0.12,2) for i in starts[1:]]
END=TOK[-1]['e']
ends=times[1:]+[round(END+S[-1].get('end_pad',3.0),2)]
beats=[];sfx=[]
for k,sc in enumerate(S):
    t0,t1=times[k],ends[k]; dur=round(t1-t0,2)
    def rep(m):
        i=find(m.group(1),starts[k])
        if k+1<len(starts) and i>=starts[k+1]: raise SystemExit(f'phrase {m.group(1)!r} beyond scene {k+1} ({sc["start"]})')
        return str(max(0.05,round(TOK[i]['s']-t0-0.1,2)))
    el=re.sub(r"@\{([^}]+)\}",rep,sc['el']).replace('{DUR}','{%s}'%dur)
    for name,expr in sc.get('sfx',[]):
        v=eval(re.sub(r"@\{([^}]+)\}",rep,expr)); sfx.append((round(t0+v,2),name))
    if sc.get('alt'):
        ats=sorted(set([0.0]+[float(x) for x in re.findall(r"(?:\bat|\bstop|\bthu|\blast|\bglow|\bup|\bdown|\brest|\bleft|\bright|\bhl|\bdue|\bmin)=\{([\d.]+)",el)]+[float(x) for x in re.findall(r"\bat: ([\d.]+)",el)]+[dur]))
        gaps=[(ats[q+1]-ats[q],ats[q]) for q in range(len(ats)-1)]; g,g0=max(gaps)
        t2=round(min(dur-1.5,max(1.5,g0+g/2)),2)
        el=re.sub(r"(<Stock n=\{\d+\} until=\{[\d.]+\}[^/]*/>)",r"\1\n<StockSwap n={%d} at={%s} until={%s} dim={0} />"%(sc['alt'],t2,dur),el,count=1)
    back=f"<Back n={{{sc['back']}}} dur={{{dur}}}"+(f" dim={{{sc['backdim']}}}" if sc.get('backdim') is not None else '')+" />" if sc.get('back') else ''
    tag=f"tag: [{sc['tag'][0]}, \"{sc['tag'][1]}\"], " if sc.get('tag') else ''
    beats.append(f"  {{ from: {t0}, to: {t1}, {tag}back: {('<>'+back+'</>') if back else 'null'}, el: (<>\n{el}\n</>) }},")
hdr=open('header.tsx').read().replace('__DURATION__',str(ends[-1])).replace('__BROLL__',json.dumps(broll)).replace('__LENS__',json.dumps(lens))
body=hdr+'''
// ---------- сцены ----------
type Beat = { from: number; to: number; tag?: [number, string]; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
'''+'\n'.join(beats)+'''
];

// звуковые эффекты только на смысловые события (секунды ролика)
const SFX: [number, string][] = '''+json.dumps(sfx)+''';

export const Ep05Christmas: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C3.bgEdge }}>
      <Bg />
      <Audio src={staticFile("audio/ep05-voiceover.mp3")} />
      <Audio src={staticFile("audio/ep03-music.mp3")} volume={(f) => interpolate(f, [0, 30, EP05_DURATION_SEC * fps - 90, EP05_DURATION_SEC * fps], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />
      {SFX.map(([t, n], i) => (
        <Sequence key={"s" + i} from={Math.round(t * fps)} durationInFrames={45}><Audio src={staticFile(`sfx/${n}.wav`)} volume={0.35} /></Sequence>
      ))}
      {BEATS.map((b, i) => (
        <Sequence key={i} from={Math.round(b.from * fps)} durationInFrames={Math.max(1, Math.round((b.to - b.from) * fps))} name={`Beat ${i + 1}`}>
          {b.back}
          <Scene dur={b.to - b.from}>{b.el}</Scene>
          {b.tag && <Chapter n={b.tag[0]} title={b.tag[1]} />}
        </Sequence>
      ))}
      <Bug />
    </AbsoluteFill>
  );
};
'''
open(f'{R}/src/videos/Ep05Christmas.tsx','w').write(body)
durs=[round(ends[k]-times[k],1) for k in range(len(S))]
print('scenes',len(S),'duration',ends[-1],'longest',sorted(durs)[-6:],'avg',round(sum(durs)/len(durs),1),'sfx',len(sfx))
