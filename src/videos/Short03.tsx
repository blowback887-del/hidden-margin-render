import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { Bg6, BigNum, C6, Dots, In, Kicker6, Label6, MEME, Meme, NameCard6, Plate6, SANS, SERIF, setClips, Stamp, Stock6, useT, Words } from "../brand/hm6";
import WORDS from "./short03-words.json";

// ===================================================================
// Short03 — из Ep09 «Why Golden Corral Doesn't Care How Much Steak You Eat» (14.11.2026).
// Мини-история: Дейл «обыграл» буфет на $6 → буфет считает среднего гостя → бабушка платит за его стейк.
// Озвучка вырезана из готовой (4 куска, 0 кредитов). Факты — claude/ep09-research.md.
// ===================================================================

export const SHORT03_DURATION_SEC = 58.8;
const VOICE_END = 56.3;

const CL: Record<number, [string, number]> = {
  1: ["ep09/01-dale-big-burger", 8.6], 2: ["ep09/17-steak-flames", 10], 3: ["ep09/04-dale-sitting-food", 10],
  4: ["ep09/25-man-screaming-happy", 7.5], 5: ["ep09/11-buffet-warm", 10], 6: ["ep09/103-gc-colonie", 10],
  7: ["ep09/71-family-eating", 9.9], 8: ["ep09/40-grandma-restaurant", 10], 9: ["ep09/42-girl-ice-cream", 10],
  10: ["ep09/39-grandma-cutting-food", 10], 11: ["ep09/74-bearded-man-eating", 10], 12: ["ep09/108-gc-plates", 10],
};
setClips((n) => ({ src: staticFile(`broll/${CL[n][0]}.mp4`), len: CL[n][1] }));

const X = 540;
const Pos: React.FC<{ y?: number; children: React.ReactNode }> = ({ y = 840, children }) => (
  <div style={{ position: "absolute", left: X, top: y, translate: "-50% -50%", width: "max-content" }}>{children}</div>
);
const Win: React.FC<{ a: number; b: number; children: React.ReactNode }> = ({ a, b, children }) => {
  const t = useCurrentFrame() / 30;
  return t >= a - 0.05 && t < b + 0.05 ? <>{children}</> : null;
};
const Clip: React.FC<{ n: number; a: number; b: number; dim?: number }> = ({ n, a, b, dim = 0.05 }) => (
  <Win a={a} b={b}><Stock6 n={n} from={a} dur={b + 0.2} dim={dim} /></Win>
);

// ---------- субтитры ----------
type W = { text: string; start: number; end: number };
const words: W[] = [];
for (const w of WORDS as W[]) {
  if (/^(?!\.\.\.)[-.,%]/.test(w.text) && words.length) {
    const last = words[words.length - 1];
    words[words.length - 1] = { ...last, text: last.text + w.text, end: w.end };
  } else words.push({ ...w });
}
const groups: W[][] = [];
{
  let cur: W[] = [];
  for (const w of words) {
    cur.push(w);
    if (cur.length >= 3 || /[.,!?]$/.test(w.text)) { groups.push(cur); cur = []; }
  }
  if (cur.length) groups.push(cur);
}
const NUM = /(\d|\$|%|¢)/i;
const Captions: React.FC = () => {
  const { t } = useT();
  if (t > 53.6) return null; // финальную фразу показывает крупная надпись
  const g = groups.find((c) => t >= c[0].start - 0.06 && t < c[c.length - 1].end + 0.2);
  if (!g) return null;
  const k = interpolate(t, [g[0].start - 0.06, g[0].start + 0.06], [0.85, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ position: "absolute", left: 60, right: 60, top: 1400, translate: "0 -50%", textAlign: "center", fontFamily: MEME, fontSize: 92, lineHeight: 1.05, textTransform: "uppercase", WebkitTextStroke: "7px #000", paintOrder: "stroke fill", scale: String(k) }}>
      {g.map((w, i) => {
        const said = t >= w.start - 0.03;
        const color = NUM.test(w.text) ? C6.accent : t < w.end + 0.05 && said ? C6.money : "#fff";
        return <span key={i} style={{ color, opacity: said ? 1 : 0 }}>{w.text.replace(/[,]$/, "").replace(/^\.\.\./, "")} </span>;
      })}
    </div>
  );
};

const TopTag: React.FC<{ a: number; b: number; children: React.ReactNode; color?: string; size?: number }> = ({ a, b, children, color = C6.accent, size = 34 }) => (
  <Win a={a} b={b}><Pos y={330}><In at={a} out={b - 0.3} from="down" dist={16}><Kicker6 size={size} color={color}>{children}</Kicker6></In></Pos></Win>
);

const SFX: [number, string, number][] = [
  [0.0, "ep09-sizzle", 0.22], [0.6, "ep06-pop", 0.3], [4.24, "ep06-kaching", 0.25], [8.53, "ep06-kaching", 0.25],
  [11.99, "ep09-cheer", 0.28], [14.01, "ep09-trombone", 0.3], [16.31, "ep06-stamp", 0.35], [21.3, "ep06-whoosh", 0.25],
  [24.04, "ep06-counter", 0.3], [26.44, "ep06-whoosh", 0.25], [30.3, "ep06-pop", 0.3], [32.96, "ep06-boom", 0.28],
  [34.82, "ep06-pop", 0.3], [38.1, "ep06-whoosh", 0.22], [44.02, "ep06-pop", 0.3], [46.1, "ep06-coin", 0.3],
  [47.92, "ep06-coin", 0.35], [53.72, "ep06-kaching", 0.28], [56.4, "ep06-whoosh", 0.3],
];

export const Short03: React.FC = () => {
  const { t, p } = useT();
  const fadeOut = 1 - p(SHORT03_DURATION_SEC - 0.4, SHORT03_DURATION_SEC);
  return (
    <AbsoluteFill style={{ background: C6.bgDeep, opacity: fadeOut }} translate="no">
      <Bg6 />

      {/* 1. Дейл: 6'4", без обеда, $18.99 за весь стейк */}
      <Clip n={1} a={0} b={3.9} dim={0.15} />
      <Clip n={2} a={3.9} b={7.65} dim={0.15} />
      <Win a={0} b={7.65}>
        <Pos y={300}><In at={0} from="down" dist={16}><div style={{ fontFamily: MEME, fontSize: 84, lineHeight: 1.0, color: "#fff", WebkitTextStroke: "7px #000", paintOrder: "stroke fill", textAlign: "center", textTransform: "uppercase" }}>Who pays for<br /><span style={{ color: C6.accent }}>his steak?</span></div></In></Pos>
      </Win>
      <Win a={0} b={3.95}><Pos y={800}><BigNum at={0.6} size={240} color={C6.ink} label="SKIPPED LUNCH">6'4"</BigNum></Pos></Win>
      <Win a={3.95} b={7.65}><Pos y={800}><BigNum at={4.24} size={240} label="ALL THE STEAK HE CAN EAT">$18.99</BigNum></Pos></Win>

      {/* 2. заплатил $19, съел на $25 */}
      <Clip n={3} a={7.65} b={11.9} dim={0.3} />
      <TopTag a={7.65} b={11.9} color={C6.mint}>SAY HE EATS FOUR PLATES</TopTag>
      <Win a={7.65} b={11.9}>
        <Pos y={680}><BigNum at={7.8} size={180} color={C6.ink} label="HE PAID">$19</BigNum></Pos>
        <Pos y={1040}><BigNum at={8.53} size={200} label="HE ATE">$25</BigNum></Pos>
      </Win>

      {/* 3. он обыграл заведение… на $6 */}
      <Clip n={4} a={11.9} b={15.75} dim={0.1} />
      <Win a={11.9} b={13.95}><Meme at={12.0} text="he beat the house!" y={760} size={96} /></Win>
      <Win a={13.95} b={15.75}><Pos y={780}><Stamp at={14.05} text="…by $6" color={C6.accent} size={150} /></Pos></Win>

      {/* 4. заведению всё равно: оно играло не против Дейла */}
      <Clip n={5} a={15.75} b={21.25} dim={0.35} />
      <TopTag a={15.75} b={21.25}>THE HOUSE</TopTag>
      <Win a={15.75} b={21.25}>
        <Pos y={640}><Stamp at={16.4} text="does not care" color={C6.loss} size={96} /></Pos>
        <Pos y={960}><Plate6 at={18.75}><Words text="It never played against Dale." at={18.75} size={80} hl={["never"]} maxW={900} /></Plate6></Pos>
      </Win>

      {/* 5. Golden Corral: 6 000+ гостей в неделю */}
      <Clip n={6} a={21.25} b={26.3} dim={0.25} />
      <TopTag a={21.25} b={26.3} color={C6.ink}>A TYPICAL GOLDEN CORRAL</TopTag>
      <Win a={21.25} b={26.3}><Pos y={800}><BigNum at={23.9} size={230} label="GUESTS A WEEK">6,000+</BigNum></Pos></Win>

      {/* 6–7. 900 точек в день → 1 из 20 — Дейл → 45 Дейлов */}
      <Win a={26.3} b={34.7}>
        <Pos y={330}><Label6 at={26.44} size={44} color={C6.ink}>≈ 900 GUESTS A DAY</Label6></Pos>
        <Pos y={820}><div style={{ scale: "0.8" }}><Dots at={26.44} n={900} hot={45} hotAt={30.3} cols={30} /></div></Pos>
        <Pos y={1180}><Label6 at={29.76} out={32.8} size={46} color={C6.accent}>1 IN 20 IS A DALE</Label6></Pos>
        <Pos y={1250}><Label6 at={29.76} out={32.8} size={28} color={C6.ink}>THE HUSTLE'S ESTIMATE</Label6></Pos>
        <Pos y={820}><Plate6 at={32.96}><BigNum at={32.96} size={220} color={C6.loss} label="DALES TONIGHT">45</BigNum></Plate6></Pos>
      </Win>

      {/* 8. и 855 — не Дейлы */}
      <Clip n={7} a={34.7} b={38.0} dim={0.3} />
      <Win a={34.7} b={38.0}><Pos y={800}><BigNum at={34.82} size={240} color={C6.money} label="PEOPLE WHO ARE NOT DALE">855</BigNum></Pos></Win>

      {/* 9. бабушка: суп, салат, полбулочки */}
      <Clip n={8} a={38.0} b={41.6} dim={0.15} />
      <Win a={38.0} b={41.6}><Pos y={760}><div style={{ scale: "1.45" }}><NameCard6 at={38.15} name="Grandma" role="SOUP · SALAD · HALF A ROLL" icon="person" /></div></Pos></Win>

      {/* 10. 7-летка: на ужин десерт */}
      <Clip n={9} a={41.6} b={44.7} dim={0.05} />
      <Win a={41.6} b={44.7}><Meme at={44.02} text="dinner: dessert" y={760} size={96} /></Win>

      {/* 11. бабушка заплатила $18.99, съела на $4–5 */}
      <Clip n={10} a={44.7} b={51.4} dim={0.3} />
      <TopTag a={44.7} b={51.4} color={C6.ink}>SAME TICKET</TopTag>
      <Win a={44.7} b={51.4}>
        <Pos y={660}><BigNum at={46.1} size={180} color={C6.ink} label="GRANDMA PAID">$18.99</BigNum></Pos>
        <Pos y={1030}><BigNum at={48.3} size={200} color={C6.money} label="GRANDMA ATE">$4–5</BigNum></Pos>
      </Win>

      {/* 12. Дейл ест бабушкину сдачу */}
      <Clip n={11} a={51.4} b={VOICE_END} dim={0.4} />
      <Win a={51.4} b={VOICE_END}>
        <Pos y={560}><Label6 at={51.56} size={38} color={C6.mint}>DALE ISN'T ROBBING GOLDEN CORRAL</Label6></Pos>
        <Pos y={900}><Words text="Dale is eating Grandma's change." at={53.72} size={112} hl={["Grandma's", "change."]} maxW={900} /></Pos>
      </Win>

      {/* 13. полный ролик */}
      <Clip n={12} a={VOICE_END} b={SHORT03_DURATION_SEC} dim={0.55} />
      <Win a={VOICE_END} b={SHORT03_DURATION_SEC}>
        <Pos y={520}><In at={VOICE_END} from="down"><div style={{ fontFamily: SERIF, fontSize: 80, color: C6.ink, textAlign: "center", lineHeight: 1.05 }}>Who else pays<br /><span style={{ color: C6.accent }}>for Dale's steak?</span></div></In></Pos>
        <Pos y={900}><In at={VOICE_END + 0.4} from="zoom">
          <div style={{ width: 840, padding: "38px 30px", borderRadius: 26, background: C6.panel, border: `4px solid ${C6.accent}`, boxShadow: `0 0 60px ${C6.accent}44`, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <Kicker6 size={26} color={C6.mint}>FULL VIDEO · HIDDEN MARGIN</Kicker6>
            <div style={{ fontFamily: SERIF, fontSize: 58, color: C6.ink, textAlign: "center", lineHeight: 1.08 }}>Why Golden Corral doesn't<br />care how much steak<br />you eat</div>
          </div>
        </In></Pos>
        <Pos y={1400}><In at={VOICE_END + 0.9} from="up" dist={14}><div style={{ padding: "18px 40px", borderRadius: 50, background: C6.accent, color: "#063A47", fontFamily: SANS, fontWeight: 800, fontSize: 34, letterSpacing: "0.12em", whiteSpace: "nowrap" }}>WATCH THE FULL VIDEO ↓</div></In></Pos>
      </Win>

      <Captions />

      <div style={{ position: "absolute", left: 0, right: 0, top: 200, textAlign: "center", fontFamily: SANS, fontWeight: 700, fontSize: 24, letterSpacing: "0.3em", color: "rgba(247,244,236,.7)", textShadow: "0 2px 10px rgba(0,0,0,.6)", opacity: t > 7.65 && t < VOICE_END ? 1 : 0 }}>
        <span style={{ color: C6.accent }}>$</span> HIDDEN MARGIN
      </div>

      <Audio src={staticFile("audio/short03-voiceover.mp3")} />
      <Audio src={staticFile("audio/ep09/music-r4.mp3")} volume={(f) => 0.13 * interpolate(f, [0, 20, SHORT03_DURATION_SEC * 30 - 30, SHORT03_DURATION_SEC * 30], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />
      {SFX.map(([s, n, v], i) => (
        <Sequence key={i} from={Math.round(s * 30)} durationInFrames={90}><Audio src={staticFile(`sfx/${n}.wav`)} volume={v} /></Sequence>
      ))}
    </AbsoluteFill>
  );
};
