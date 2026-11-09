"""Общий генератор сцен HIDDEN MARGIN (с Ep06): align → build → check.

Запуск: python3 cloud/gen/build.py ep06            — весь ролик
        python3 cloud/gen/build.py ep06 --pilot 30 — только первые 30 с (пилот нового стиля)

План ролика — cloud/gen/<ep>.py: словарь EP и список сцен S.
  EP = dict(comp="Ep06Gas", words="src/videos/ep06-gas-words.json", text="cloud/voice/ep06-text",
            parts=7, broll="cloud/broll/ep06.json", music=[...], next="...")
  Сцена: dict(start="первые слова сцены", el='''JSX''', stock=N | None, alt=(N, "фраза") , dim=0.0,
              clean=False (чистое видео без подложки), tag=(номер, "Глава"), hard=False, sfx=[("name","@{фраза}")])
  В el: @{фраза} → секунды от начала сцены до первого слова фразы; {DUR} → длина сцены.
"""
import json, re, sys, difflib, importlib.util, os

R = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
ep = sys.argv[1]
pilot = float(sys.argv[sys.argv.index("--pilot") + 1]) if "--pilot" in sys.argv else None
spec = importlib.util.spec_from_file_location("plan", f"{R}/cloud/gen/{ep}.py")
plan = importlib.util.module_from_spec(spec); spec.loader.exec_module(plan)
EP, S = plan.EP, plan.S
norm = lambda t: re.sub(r"[^a-z0-9']", "", t.lower().replace("’", "'"))

# ---------- align: слова сценария → пословная расшифровка (числа словами против цифр — по блокам) ----------
W = json.load(open(f"{R}/{EP['words']}"))
W = W if isinstance(W, list) else W.get("words", W)
gt = [(norm(w["text"]), w["start"], w["end"]) for w in W if norm(w["text"])]
toks = []
for i in range(1, EP["parts"] + 1):
    for t in re.split(r"[\s—]+", open(f"{R}/{EP['text']}/part{i}.txt").read()):
        for u in t.split("-"):
            if norm(u): toks.append((i, u, norm(u)))
a = [t[2] for t in toks]; b = [g[0] for g in gt]
sm = difflib.SequenceMatcher(a=a, b=b, autojunk=False)
st = [None] * len(a); en = [None] * len(a)
for i, j, n in sm.get_matching_blocks():
    for k in range(n): st[i + k] = gt[j + k][1]; en[i + k] = gt[j + k][2]
for op, i1, i2, j1, j2 in sm.get_opcodes():
    if op == "replace" and j2 > j1:
        s0, e0 = gt[j1][1], gt[j2 - 1][2]
        for k in range(i1, i2):
            st[k] = round(s0 + (e0 - s0) * (k - i1) / (i2 - i1), 2); en[k] = round(s0 + (e0 - s0) * (k - i1 + 1) / (i2 - i1), 2)
idx = [i for i in range(len(a)) if st[i] is not None]
miss = 0
for i in range(len(a)):
    if st[i] is None:
        miss += 1
        p_ = max([x for x in idx if x < i], default=None); q_ = min([x for x in idx if x > i], default=None)
        if p_ is None: st[i] = en[i] = 0
        elif q_ is None: st[i] = en[i] = en[p_]
        else: st[i] = en[p_] + (st[q_] - en[p_]) * (i - p_) / (q_ - p_); en[i] = st[i]
TOK = [{"w": t[1], "n": t[2], "s": round(st[i], 2), "e": round(en[i], 2)} for i, t in enumerate(toks)]
N = [t["n"] for t in TOK]

def tk(ph): return [norm(u) for t in re.split(r"[\s—]+", ph) for u in t.split("-") if norm(u)]
def find(ph, frm=0):
    q = tk(ph)
    for i in range(frm, len(N) - len(q) + 1):
        if N[i:i + len(q)] == q: return i
    raise SystemExit(f"phrase not found: {ph!r} from token {frm} ({' '.join(N[frm:frm+8])} …)")

# ---------- build ----------
cfg = json.load(open(f"{R}/{EP['broll']}"))
clips = {i + 1: c["name"] for i, c in enumerate(cfg["clips"])}
lens = EP.get("lens", {})
starts = []; idx_ = 0
for sc in S:
    i = find(sc["start"], idx_); starts.append(i); idx_ = i + 1
times = [0.0] + [round(TOK[i]["s"] - 0.1, 2) for i in starts[1:]]
END = TOK[-1]["e"]
ends = times[1:] + [round(END + S[-1].get("end_pad", 6.0), 2)]
if pilot:
    keep = [k for k in range(len(S)) if times[k] < pilot]
    S = [S[k] for k in keep]; times = times[:len(S)]; ends = ends[:len(S)]; starts = starts[:len(S)]
beats, sfx, used = [], [], []
for k, sc in enumerate(S):
    t0, t1 = times[k], ends[k]; dur = round(t1 - t0, 2)
    def rep(m):
        i = find(m.group(1), starts[k])
        if k + 1 < len(starts) and i >= starts[k + 1]: raise SystemExit(f"phrase {m.group(1)!r} beyond scene {k+1} ({sc['start']})")
        return str(max(0.05, round(TOK[i]["s"] - t0 - 0.08, 2)))
    el = re.sub(r"@\{([^}]+)\}", rep, sc.get("el", "")).replace("{DUR}", "{%s}" % dur)
    for name, expr in sc.get("sfx", []):
        sfx.append((round(t0 + eval(re.sub(r"@\{([^}]+)\}", rep, expr)), 2), name))
    back = ""
    if sc.get("stock"):
        used.append(sc["stock"])
        back = f'<Stock6 n={{{sc["stock"]}}} dur={{{dur}}} dim={{{sc.get("dim", 0)}}} graphics={{{"false" if sc.get("clean") else "true"}}}{" sepia" if sc.get("sepia") else ""} />'
        if sc.get("alt"):
            n2, ph = sc["alt"]; used.append(n2)
            t2 = float(rep(re.match(r"(.*)", ph))) if not isinstance(ph, (int, float)) else ph
            back += f'\n<Stock6 n={{{n2}}} from={{{t2}}} dur={{{dur}}} dim={{{sc.get("dim", 0)}}} graphics={{{"false" if sc.get("clean") else "true"}}}{" sepia" if sc.get("sepia") else ""} />'
    tag = f'tag: [{sc["tag"][0]}, "{sc["tag"][1]}"], ' if sc.get("tag") else ""
    hard = "hard: true, " if sc.get("hard") else ""
    beats.append(f"  {{ from: {t0}, to: {t1}, {tag}{hard}back: {('(<>' + back + '</>)') if back else 'null'}, el: (<>\n{el}\n</>) }},")

dur_total = ends[-1]
comp = EP["comp"] + ("Pilot" if pilot else "")
music = EP.get("music", [])
hdr = f'''import React from "react";
import {{ AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate }} from "remotion";
import {{ At, Bg6, BigNum, Bug6, C6, Center, ChapterCard, ChapterTag, Col, CorpSub, Counter6, Donut6, EndCard6, GallonCutter, IconIn, In, Kicker6, Label6, Meme, NameCard6, Num6, PriceSign, Punch, Receipt6, RedCircle, RocketFeather, Row, Scene6, setClips, Source6, Split6, Stamp, Stock6, Subscribe6, TitleCard, TrailerFrame, TwoBars, Words }} from "../brand/hm6";

// ===================================================================
// {EP["comp"]} — сгенерировано cloud/gen/build.py из плана cloud/gen/{ep}.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const {comp.upper()}_DURATION_SEC = {dur_total};
const CLIPS: Record<number, string> = {json.dumps(clips)};
const LENS: Record<number, number> = {json.dumps(lens)};
setClips((n) => ({{ src: staticFile(`{cfg["out"].replace("public/", "")}/${{CLIPS[n]}}.mp4`), len: LENS[n] ?? 10 }}));

type Beat = {{ from: number; to: number; tag?: [number, string]; hard?: boolean; back: React.ReactNode; el: React.ReactNode }};
const BEATS: Beat[] = [
'''
mus = "\n".join(
    f'      <Sequence from={{{round(m["from"]*30)}}} durationInFrames={{{round((min(m["to"], dur_total)-m["from"])*30)}}}><Audio src={{staticFile("{m["file"]}")}} volume={{(f) => {m.get("vol", 0.12)} * interpolate(f, [0, 30, {round((min(m["to"], dur_total)-m["from"])*30)-30}, {round((min(m["to"], dur_total)-m["from"])*30)}], [0, 1, 1, 0], {{ extrapolateLeft: "clamp", extrapolateRight: "clamp" }})}} /></Sequence>'
    for m in music if m["from"] < dur_total)
body = hdr + "\n".join(beats) + f'''
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string][] = {json.dumps(sfx)};

export const {comp}: React.FC = () => {{
  const {{ fps }} = useVideoConfig();
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{{{ backgroundColor: C6.bgDeep }}}}>
      <Bg6 />
      <Audio src={{staticFile("{EP["audio"]}")}} />
{mus}
      {{SFX.map(([t, n], i) => (
        <Sequence key={{"s" + i}} from={{Math.round(t * fps)}} durationInFrames={{60}}><Audio src={{staticFile(`sfx/${{n}}.wav`)}} volume={{0.3}} /></Sequence>
      ))}}
      {{BEATS.map((b, i) => (
        <Sequence key={{i}} from={{Math.round(b.from * fps)}} durationInFrames={{Math.max(1, Math.round((b.to - b.from) * fps))}} name={{`Beat ${{i + 1}}`}}>
          {{b.back}}
          <Scene6 dur={{b.to - b.from}} hard={{b.hard}}>{{b.el}}</Scene6>
          {{b.tag && <ChapterTag n={{b.tag[0]}} title={{b.tag[1]}} />}}
        </Sequence>
      ))}}
      <Bug6 />
    </AbsoluteFill>
  );
}};
'''
# импортируем только то, что реально используется
names = "At Bg6 BigNum Bug6 C6 Center ChapterCard ChapterTag Col CorpSub Counter6 Donut6 EndCard6 GallonCutter IconIn In Kicker6 Label6 Meme NameCard6 Num6 PriceSign Punch Receipt6 RedCircle RocketFeather Row Scene6 setClips Source6 Split6 Stamp Stock6 Subscribe6 TitleCard TrailerFrame TwoBars Words".split()
rest = body.split("type Beat =", 1)[1]
need = [n for n in names if n in ("Bg6", "Bug6", "C6", "Scene6", "ChapterTag", "setClips") or re.search(r"[<{\s]" + n + r"[\s/>({]", rest)]
body = re.sub(r'import \{ At, Bg6[^}]*\} from "../brand/hm6";', "import { " + ", ".join(need) + ' } from "../brand/hm6";', body)
if not mus: body = body.replace("useVideoConfig, interpolate }", "useVideoConfig }")
out = f"{R}/src/videos/{comp}.tsx"
open(out, "w").write(body)
durs = [round(ends[k] - times[k], 1) for k in range(len(S))]
# повтор стока подряд
rep_ = [i for i in range(1, len(used)) if used[i] == used[i - 1]]
print(f"{comp}: scenes {len(S)}, duration {dur_total}s, avg {round(sum(durs)/len(durs),1)}s, longest {sorted(durs)[-5:]}, sfx {len(sfx)}, unaligned tokens {miss}, stock used {len(set(used))}, repeats-in-a-row {rep_}")
print("wrote", out)
