import json,re,sys
sys.path.insert(0,'.')
from scenes import S
ALT={'So here':3,'Somebody':31,'To understand':18,'One day':11,'Sinegal meant':5,"In Jelinek":39,"And it's not":17,'And notice':18,"That's the first":24,"Here's a rule":25,'And it keeps':24,'So instead':28,'That fifteen':22,'In its latest':29,'Two dollars':44,'If you like':24,'To shop':23,'Now put':19,'Look at':18,'And the members':32,"Here's the difference":33,"That's why":5,'Even the last':47,"In the company":41,'At the end':43,'And that cash':44,'Put it all':38,"And here's the twist":18,'So the next':4,"What's the one":24}
norm=lambda t:re.sub(r"[^a-z0-9']","",t.lower().replace('’',"'"))
TOK=json.load(open('tokens.json'))
N=[t['n'] for t in TOK]
def toks(ph):
    out=[]
    for t in re.split(r"[\s—]+",ph):
        for u in t.split('-'):
            if norm(u): out.append(norm(u))
    return out
def find(ph,frm=0):
    q=toks(ph)
    for i in range(frm,len(N)-len(q)+1):
        if N[i:i+len(q)]==q: return i
    raise SystemExit(f'phrase not found: {ph!r} from {frm}')
cfg=json.load(open('/home/claude/hidden-margin-render/cloud/broll/ep04.json'))
broll={i+1:c['name'] for i,c in enumerate(cfg['clips'])}
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
        if k+1<len(starts) and i>=starts[k+1]: raise SystemExit(f'phrase {m.group(1)!r} beyond scene {k}')
        return str(max(0.05,round(TOK[i]['s']-t0-0.1,2)))
    el=re.sub(r"@\{([^}]+)\}",rep,sc['el']).replace('{DUR}','{%s}'%dur)
    ats=[float(x) for x in re.findall(r"(?<![A-Za-z])(?:at|v|loss|lock|e|j|s|c|sales|fees|goods|costs|wh|a|b|d|cut)=\{([\d.]+)",el)]+[float(x) for x in re.findall(r"\bat: ([\d.]+)",el)]
    pts=sorted(set([0.0]+ats+[dur])); gaps=[(pts[q+1]-pts[q],pts[q]) for q in range(len(pts)-1)]
    g,g0=max(gaps); alt=next((v for kk,v in ALT.items() if sc['start'].startswith(kk)),None); t2=None
    if g>4.0 and alt and g0+g/2 < dur-1.5: t2=round(g0+g/2,2)
    if t2 and not sc.get('back') and '<Stock n=' in el:
        el=re.sub(r"(<Stock n=\{\d+\} until=\{[\d.]+\}[^/]*/>)",r"\1\n<StockSwap n={%d} at={%s} until={%s} dim={-0.1} />"%(alt,t2,dur),el,count=1)
    for name,expr in sc.get('sfx',[]):
        v=eval(re.sub(r"@\{([^}]+)\}",rep,expr)); sfx.append((round(t0+v,2),name))
    back=(f"<Back n={{{sc['back']}}} dur={{{dur}}}"+(f" n2={{{alt}}} t2={{{t2}}}" if t2 and sc.get('back') else '')+" />") if sc.get('back') else ''
    tag=f"tag: [{sc['tag'][0]}, \"{sc['tag'][1]}\"], " if sc.get('tag') else ''
    beats.append(f"  {{ from: {t0}, to: {t1}, {tag}back: {('<>'+back+'</>') if back else 'null'}, el: (<>\n{el}\n</>) }},")
hdr=open('header.tsx').read().replace('__DURATION__',str(ends[-1])).replace('__BROLL__',json.dumps(broll)).replace('__LENS__',open('lens.json').read())
body=hdr+'''
// ---------- сцены ----------
type Beat = { from: number; to: number; tag?: [number, string]; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
'''+'\n'.join(beats)+'''
];

// звуковые эффекты только на смысловые события (секунды ролика)
const SFX: [number, string][] = '''+json.dumps(sfx)+''';

export const Ep04Costco: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C3.bgEdge }}>
      <Bg />
      <Audio src={staticFile("audio/ep04-voiceover.mp3")} />
      <Audio src={staticFile("audio/ep03-music.mp3")} volume={(f) => interpolate(f, [0, 30, EP04_DURATION_SEC * fps - 90, EP04_DURATION_SEC * fps], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />
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
open('/home/claude/hidden-margin-render/src/videos/Ep04Costco.tsx','w').write(body)
print('scenes',len(S),'duration',ends[-1])
durs=[round(ends[k]-times[k],1) for k in range(len(S))]
print('longest',sorted(durs)[-8:], 'avg',round(sum(durs)/len(durs),1))
print('sfx',len(sfx))
