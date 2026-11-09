import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { Bg6, BigNum, C6, Donut6, In, Kicker6, Label6, MEME, Num6, PriceSign, Punch, SANS, SERIF, setClips, Stamp, Stock6, useT } from "../brand/hm6";
import WORDS from "./short02-words.json";

// ===================================================================
// Short02 — «Почему цена бензина заканчивается на 9/10 цента?» (с нуля, 09.11.2026).
// Одна бытовая загадка → история (Депрессия, Айова 1985–1989) → 10% прибыли → полный ролик Ep06.
// Вертикаль 1080×1920, стиль Ep06. Факты: NACS «Why gas is priced using fractions of a penny»
// (claude/ep06-research.md, F10).
// ===================================================================

export const SHORT02_DURATION_SEC = 47.5;

const CL: Record<number, [string, number]> = {
  1: ["ep06/03-gas-price-signage", 10], 2: ["ep06/09-man-counting-pennies", 10], 3: ["ep06/48-fuel-pump-close", 8.73],
  4: ["ep06/19-vintage-gas-station", 9.77], 5: ["ep06/02-pump-display-numbers", 10], 6: ["ep06/20-filling-car-gasoline", 10],
  7: ["ep06/39-silos-farm-field", 10], 8: ["ep06/32-grain-elevator", 10], 9: ["ep06/31-night-gas-station-store", 10],
};
setClips((n) => ({ src: staticFile(`broll/${CL[n][0]}.mp4`), len: CL[n][1] }));

const X = 540;
const G = 840;
const Pos: React.FC<{ y?: number; children: React.ReactNode }> = ({ y = G, children }) => (
  <div style={{ position: "absolute", left: X, top: y, translate: "-50% -50%", width: "max-content" }}>{children}</div>
);
const Win: React.FC<{ a: number; b: number; children: React.ReactNode }> = ({ a, b, children }) => {
  const t = useCurrentFrame() / 30;
  return t >= a - 0.05 && t < b + 0.05 ? <>{children}</> : null;
};
const Clip: React.FC<{ n: number; a: number; b: number; dim?: number; sepia?: boolean }> = ({ n, a, b, dim = 0.05, sepia }) => (
  <Win a={a} b={b}><Stock6 n={n} from={a} dur={b + 0.2} dim={dim} sepia={sepia} /></Win>
);

// ---------- субтитры ----------
type W = { text: string; start: number; end: number };
const words: W[] = [];
for (const w of WORDS as W[]) {
  if (/^[-.%]/.test(w.text) && words.length) {
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
const NUM = /(\d|\$|%|¢|nine-tenths)/i;
const Captions: React.FC = () => {
  const { t } = useT();
  const g = groups.find((c) => t >= c[0].start - 0.06 && t < c[c.length - 1].end + 0.2);
  if (!g) return null;
  const k = interpolate(t, [g[0].start - 0.06, g[0].start + 0.06], [0.85, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ position: "absolute", left: 60, right: 60, top: 1400, translate: "0 -50%", textAlign: "center", fontFamily: MEME, fontSize: 96, lineHeight: 1.05, textTransform: "uppercase", WebkitTextStroke: "7px #000", paintOrder: "stroke fill", scale: String(k) }}>
      {g.map((w, i) => {
        const said = t >= w.start - 0.03;
        const color = NUM.test(w.text) ? C6.accent : t < w.end + 0.05 && said ? C6.money : "#fff";
        return <span key={i} style={{ color, opacity: said ? 1 : 0 }}>{w.text.replace(/[,]$/, "")} </span>;
      })}
    </div>
  );
};

const TopTag: React.FC<{ a: number; b: number; children: React.ReactNode; color?: string }> = ({ a, b, children, color = C6.accent }) => (
  <Win a={a} b={b}><Pos y={330}><In at={a} out={b - 0.3} from="down" dist={16}><Kicker6 size={34} color={color}>{children}</Kicker6></In></Pos></Win>
);

/** Большая «9/10» — главный объект загадки */
const NineTenths: React.FC<{ at: number; size?: number }> = ({ at, size = 220 }) => (
  <In at={at} from="zoom">
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontFamily: SERIF, color: C6.accent, textShadow: `0 0 50px ${C6.accent}66` }}>
      <span style={{ fontSize: size, lineHeight: 1 }}>9</span>
      <span style={{ width: size * 0.9, height: size * 0.07, background: C6.accent, margin: `${size * 0.06}px 0` }} />
      <span style={{ fontSize: size, lineHeight: 1 }}>10</span>
    </div>
  </In>
);

const SFX: [number, string, number][] = [
  [0.0, "ep06-pump", 0.3], [3.3, "ep06-pop", 0.4], [5.26, "ep06-coin", 0.4], [8.48, "ep06-boom", 0.3],
  [9.38, "ep06-whoosh", 0.3], [12.2, "ep06-counter", 0.3], [17.54, "ep06-stamp", 0.4], [23.16, "ep06-counter", 0.25],
  [25.76, "ep06-scratch", 0.3], [29.18, "ep06-stamp", 0.45], [31.92, "ep06-boom", 0.3], [34.16, "ep06-fall", 0.25],
  [38.26, "ep06-kaching", 0.3], [41.16, "ep06-whoosh", 0.3], [43.4, "ep06-pop", 0.35],
];

export const Short02: React.FC = () => {
  const { t, p } = useT();
  const fadeOut = 1 - p(SHORT02_DURATION_SEC - 0.4, SHORT02_DURATION_SEC);
  return (
    <AbsoluteFill style={{ background: C6.bgDeep, opacity: fadeOut }} translate="no">
      <Bg6 />

      {/* 1. любая цена в Америке… заканчивается на 9/10 */}
      <Clip n={1} a={0} b={4.9} dim={0.1} />
      <TopTag a={0} b={4.9}>LOOK CLOSER</TopTag>
      <Win a={0} b={4.9}><Pos y={800}><div style={{ scale: "1.25" }}><PriceSign at={0} price="$3.99" frac="9" hlFrac={3.3} /></div></Pos></Win>

      {/* 2. монеты в 9/10 цента не бывает */}
      <Clip n={2} a={4.9} b={7.4} />
      <Win a={4.9} b={7.4}>
        <Pos y={760}><NineTenths at={4.95} size={200} /></Pos>
        <Pos y={1120}><Stamp at={5.26} text="NO SUCH COIN" size={84} /></Pos>
      </Win>

      {/* 3. так зачем она там? */}
      <Win a={7.4} b={9.3}><Punch at={8.48} amount={0.1}><Stock6 n={3} from={7.4} dur={9.5} dim={0.1} /></Punch></Win>
      <Win a={7.4} b={9.3}><Pos><In at={8.48} from="zoom"><Num6 size={460}>?</Num6></In></Pos></Win>

      {/* 4. Великая депрессия: 20¢ за галлон, местами меньше 10¢ */}
      <Clip n={4} a={9.3} b={15.5} sepia dim={0.1} />
      <TopTag a={9.3} b={15.5} color={C6.ink}>THE GREAT DEPRESSION</TopTag>
      <Win a={9.3} b={15.5}>
        <Pos y={760}><BigNum at={12.2} icon="pump" size={260} color={C6.ink} label="A GALLON">20¢</BigNum></Pos>
        <Pos y={1080}><Label6 at={14.48} size={40} color={C6.accent}>SOME PLACES: UNDER 10¢</Label6></Pos>
      </Win>

      {/* 5. один цент = 10% */}
      <Win a={15.5} b={18.4}>
        <Pos y={480}><Label6 at={15.62} size={36} color={C6.mint}>WHEN GAS COST 10–20¢</Label6></Pos>
        <Pos y={720}><In at={16.82} from="zoom"><Num6 size={230} color={C6.ink}>1¢</Num6></In></Pos>
        <Pos y={900}><In at={17.2} from="fade"><Kicker6 size={40} color={C6.mint}>=</Kicker6></In></Pos>
        <Pos y={1080}><BigNum at={17.54} size={230}>10%</BigNum></Pos>
      </Win>

      {/* 6. цены в долях цента */}
      <Clip n={5} a={18.4} b={21.3} dim={0.1} />
      <Win a={18.4} b={21.3}><Pos><Stamp at={20.5} text="FRACTIONS" color={C6.accent} size={110} /></Pos></Win>

      {/* 7. $3.99⁹ выглядит дешевле $4 */}
      <Clip n={6} a={21.3} b={26.3} dim={0.2} />
      <TopTag a={21.3} b={26.3}>WHY 9/10 STUCK</TopTag>
      <Win a={21.3} b={26.3}>
        <Pos y={700}><PriceSign at={23.16} price="$3.99" frac="9" label="LOOKS LIKE" scale={1.1} /></Pos>
        <Pos y={1060}><In at={25.76} from="zoom"><div style={{ position: "relative" }}><Num6 size={170} color={C6.ink}>$4.00</Num6><div style={{ position: "absolute", left: -20, right: -20, top: "50%", height: 14, background: C6.loss, rotate: "-8deg", borderRadius: 7, opacity: p(25.9, 26.05) }} /></div></In></Pos>
      </Win>

      {/* 8. Айова запретила в 1985 */}
      <Clip n={7} a={26.3} b={30.8} dim={0.1} />
      <TopTag a={26.3} b={30.8} color={C6.ink}>IOWA</TopTag>
      <Win a={26.3} b={30.8}>
        <Pos y={760}><BigNum at={29.64} size={280} color={C6.ink}>1985</BigNum></Pos>
        <Pos y={1060}><Stamp at={28.8} text="BANNED" size={110} /></Pos>
      </Win>

      {/* 9. до месяца тюрьмы → отменили через 4 года */}
      <Clip n={8} a={30.8} b={35.2} dim={0.15} />
      <Win a={30.8} b={35.2}>
        <Pos y={700}><In at={31.4} out={33.0} from="zoom"><div style={{ fontFamily: MEME, fontSize: 120, lineHeight: 1.0, color: "#fff", WebkitTextStroke: "8px #000", paintOrder: "stroke fill", textAlign: "center" }}>JAIL.<br /><span style={{ color: C6.accent }}>FOR A DECIMAL.</span></div></In></Pos>
        <Pos y={780}><BigNum at={34.16} size={260} color={C6.ink} label="REPEALED">1989</BigNum></Pos>
      </Win>

      {/* 10. сегодня: до 10% прибыли с топлива */}
      <Clip n={9} a={35.2} b={41.0} dim={0.15} />
      <TopTag a={35.2} b={41.0}>TODAY</TopTag>
      <Win a={35.2} b={41.0}>
        <Pos y={600}><NineTenths at={36.82} size={120} /></Pos>
        <Pos y={1020}><Donut6 at={38.26} pct={10} center="10%" label="UP TO · OF FUEL PROFIT" size={460} /></Pos>
      </Win>

      {/* 11. полный ролик на канале */}
      <Win a={41.0} b={SHORT02_DURATION_SEC}>
        <Pos y={470}><In at={41.16} from="down"><div style={{ fontFamily: SERIF, fontSize: 84, color: C6.ink, textAlign: "center", lineHeight: 1.05 }}>The rest of the<br /><span style={{ color: C6.accent }}>gas station's secrets</span></div></In></Pos>
        <Pos y={860}><In at={43.4} from="zoom">
          <div style={{ width: 820, padding: "40px 30px", borderRadius: 26, background: C6.panel, border: `4px solid ${C6.accent}`, boxShadow: `0 0 60px ${C6.accent}44`, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <Kicker6 size={26} color={C6.mint}>FULL VIDEO · HIDDEN MARGIN</Kicker6>
            <div style={{ fontFamily: SERIF, fontSize: 70, color: C6.ink, textAlign: "center", lineHeight: 1.05 }}>How gas stations<br />really make money</div>
          </div>
        </In></Pos>
        <Pos y={1640}><In at={44.6} from="up" dist={14}><div style={{ padding: "18px 40px", borderRadius: 50, background: C6.accent, color: "#063A47", fontFamily: SANS, fontWeight: 800, fontSize: 34, letterSpacing: "0.12em", whiteSpace: "nowrap" }}>WATCH THE FULL VIDEO ↓</div></In></Pos>
      </Win>

      <Captions />

      <div style={{ position: "absolute", left: 0, right: 0, top: 200, textAlign: "center", fontFamily: SANS, fontWeight: 700, fontSize: 24, letterSpacing: "0.3em", color: "rgba(247,244,236,.7)", textShadow: "0 2px 10px rgba(0,0,0,.6)", opacity: t < 41.0 ? 1 : 0 }}>
        <span style={{ color: C6.accent }}>$</span> HIDDEN MARGIN
      </div>

      <Audio src={staticFile("audio/short02-voiceover.mp3")} />
      <Audio src={staticFile("audio/ep06/music-ch2.mp3")} volume={(f) => 0.13 * interpolate(f, [0, 20, SHORT02_DURATION_SEC * 30 - 30, SHORT02_DURATION_SEC * 30], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />
      {SFX.map(([s, n, v], i) => (
        <Sequence key={i} from={Math.round(s * 30)} durationInFrames={90}><Audio src={staticFile(`sfx/${n}.wav`)} volume={v} /></Sequence>
      ))}
    </AbsoluteFill>
  );
};
