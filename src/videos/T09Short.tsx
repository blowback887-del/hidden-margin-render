import React from "react";
import { AbsoluteFill, Audio, Img, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { Bg6, BigNum, C6, In, Kicker6, Label6, MEME, Meme, SANS, SERIF, setClips, Stamp, Stock6, useT } from "../brand/hm6";
import { HangTag, PriceCeiling } from "../brand/t09";
import { BRAND } from "../brand/theme";
import WORDS from "./t09s-words.json";

// ===================================================================
// T09Short — Shorts из T09 «Why Is the Outlet Selling a $499 Bag for $169?» (26.11.2026).
// Озвучка вырезана из готовой T09 (public/audio/t09s-voiceover.mp3), 5 кусков:
// T09 11.55–22.50 («You just saved $330… at that store») · 22.66–37.40 (цены из иска; Michael Kors $95.20) ·
// 38.02–43.72 («So who wrote $499…») · 56.32–69.06 (приём «закрой большую цифру») ·
// 719.12–727.24 («But it was never a $499 bag on sale…»).
// Факты — из T09 (фактчекер пройден), новых утверждений нет. Бирка — реконструкция по иску (подпись в кадре).
// Свой старт (не начало длинного): бирка $499 / $169 с первого кадра + «You just saved $330».
// ===================================================================

export const T09SHORT_DURATION_SEC = 56.4;
const VOICE_END = 53.5;

const CLIPS: Record<number, string> = {
  16: "16-bags-sale-tag", 1: "01-mall-skylight", 13: "13-women-bags", 69: "69-pen-paper", 50: "50-woman-rack",
  78: "78-shocked-woman", 90: "90-woman-bag-walk", 12: "12-friends-bags", 55: "55-gavel",
};
const LENS: Record<number, number> = { 16: 10.33, 1: 10.4, 13: 14, 69: 4.27, 50: 13.53, 78: 9.73, 90: 10, 12: 10, 55: 12.13 };
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/t09/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 });
setClips(CLIP_FN);

const X = 540;
const Pos: React.FC<{ y?: number; children: React.ReactNode }> = ({ y = 840, children }) => (
  <div style={{ position: "absolute", left: X, top: y, translate: "-50% -50%", width: "max-content" }}>{children}</div>
);
const Win: React.FC<{ a: number; b: number; children: React.ReactNode }> = ({ a, b, children }) => {
  const t = useCurrentFrame() / 30;
  return t >= a - 0.05 && t < b + 0.05 ? <>{children}</> : null;
};
const Clip: React.FC<{ n: number; a: number; b: number; dim?: number }> = ({ n, a, b, dim = 0.05 }) => (
  <Win a={a} b={b}><Stock6 n={n} from={a} dur={b + 0.2} dim={dim} graphics={false} /></Win>
);
const TopTag: React.FC<{ a: number; b: number; children: React.ReactNode; color?: string; size?: number; y?: number }> = ({ a, b, children, color = C6.accent, size = 34, y = 330 }) => (
  <Win a={a} b={b}><Pos y={y}><In at={a} out={b - 0.3} from="down" dist={16}><Kicker6 size={size} color={color}>{children}</Kicker6></In></Pos></Win>
);
const Note: React.FC<{ a: number; b: number; y: number; children: React.ReactNode }> = ({ a, b, y, children }) => (
  <Win a={a} b={b}><Pos y={y}><Label6 at={a + 0.2} size={22} color={C6.mint}>{children}</Label6></Pos></Win>
);
const BigText: React.FC<{ children: React.ReactNode; size?: number }> = ({ children, size = 104 }) => (
  <div style={{ fontFamily: MEME, fontSize: size, lineHeight: 1.02, color: "#fff", WebkitTextStroke: "8px #000", paintOrder: "stroke fill", textAlign: "center", textTransform: "uppercase" }}>{children}</div>
);
const Tag: React.FC<{ at: number; scale?: number; tilt?: number } & Partial<React.ComponentProps<typeof HangTag>>> = ({ at, scale = 1.25, tilt = -4, ...rest }) => (
  <HangTag at={at} brand="KATE SPADE OUTLET" top={{ label: "COMPARABLE VALUE", value: "$499" }} price={{ value: "$169" }} scale={scale} tilt={tilt} {...rest} />
);

// ---------- лист иска: шапка суда, подсветка «CLASS ACTION ALLEGATION COMPLAINT» ----------
const LawsuitPage: React.FC<{ at: number; hlAt: number }> = ({ at, hlAt }) => {
  const { p } = useT();
  const k = p(at, at + 0.4);
  const z = 1 + 0.06 * p(at, at + 7.5);
  const h = p(hlAt, hlAt + 0.35);
  const S = 960 / 1700; // масштаб страницы
  const top = 300; // верх вырезки в координатах страницы
  return (
    <div style={{ width: 960, height: 1150 * S, overflow: "hidden", borderRadius: 8, background: "#fbfaf6", boxShadow: "0 40px 90px rgba(0,0,0,.55)", opacity: k, scale: String(z) }}>
      <div style={{ position: "relative", width: 960, height: 2200 * S, translate: `0 ${-top * S}px` }}>
        <Img src={staticFile("evidence/t09/curry-tina-p1.png")} style={{ width: 960, height: 2200 * S, display: "block" }} />
        <div style={{ position: "absolute", left: 840 * S, top: 1000 * S, width: 500 * S, height: 90 * S, background: `rgba(255,209,102,${0.5 * h})`, borderRadius: 6, mixBlendMode: "multiply" }} />
      </div>
    </div>
  );
};

// ---------- субтитры (вшитые, по 2–3 слова) ----------
type W = { text: string; start: number; end: number };
const words: W[] = [];
for (const w of WORDS as W[]) {
  if (/^[-.,%]/.test(w.text) && words.length) {
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
const NUM = /(\d|\$|%)/;
const Captions: React.FC = () => {
  const { t } = useT();
  if (t > VOICE_END) return null;
  const g = groups.find((c) => t >= c[0].start - 0.06 && t < c[c.length - 1].end + 0.2);
  if (!g) return null;
  const k = interpolate(t, [g[0].start - 0.06, g[0].start + 0.06], [0.85, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ position: "absolute", left: 60, right: 60, top: 1430, translate: "0 -50%", textAlign: "center", fontFamily: MEME, fontSize: 86, lineHeight: 1.05, textTransform: "uppercase", WebkitTextStroke: "7px #000", paintOrder: "stroke fill", scale: String(k) }}>
      {g.map((w, i) => {
        const said = t >= w.start - 0.03;
        const color = NUM.test(w.text) ? C6.accent : t < w.end + 0.05 && said ? C6.money : "#fff";
        return <span key={i} style={{ color, opacity: said ? 1 : 0 }}>{w.text.replace(/,$/, "")} </span>;
      })}
    </div>
  );
};

const SFX: [number, string, number][] = [
  [0.05, "t02-paper", 0.3], [1.22, "ep06-kaching", 0.28], [3.7, "t02-paper", 0.3], [7.98, "ep06-stamp", 0.35],
  [11.6, "ep06-whoosh", 0.2], [15.4, "ep06-fall", 0.25], [17.3, "ep06-whoosh", 0.2], [24.72, "ep06-pop", 0.3],
  [26.6, "rise", 0.25], [28.04, "ep06-pop", 0.25], [31.36, "ding", 0.25], [33.0, "ep06-pop", 0.3],
  [35.78, "ding", 0.28], [42.08, "ep06-stamp", 0.35], [43.2, "ep06-scratch", 0.25], [47.22, "ep06-fall", 0.3],
  [50.3, "ding", 0.3], [53.6, "ep06-whoosh", 0.25],
];

export const T09Short: React.FC = () => {
  setClips(CLIP_FN);
  const { t, p } = useT();
  const D = Math.round(T09SHORT_DURATION_SEC * 30);
  const fadeOut = 1 - p(T09SHORT_DURATION_SEC - 0.4, T09SHORT_DURATION_SEC);
  return (
    <AbsoluteFill style={{ background: C6.bgDeep, opacity: fadeOut }} translate="no" className="notranslate">
      <Bg6 />

      {/* 1. хук с первого кадра: обе цены на бирке + «you saved $330?» */}
      <Clip n={16} a={0} b={3.6} dim={0.6} />
      <Win a={0} b={3.6}>
        <Pos y={215}><In at={0.9} from="zoom"><BigText size={100}>You saved <span style={{ color: C6.money }}>$330</span>?</BigText></In></Pos>
        <Pos y={880}><Tag at={0} /></Pos>
      </Win>
      <Note a={0} b={3.6} y={1300}>RECONSTRUCTION · AS DESCRIBED IN THE LAWSUIT</Note>

      {/* 2. иск 2026: $499 — «rarely, if ever» реальная цена */}
      <Clip n={55} a={3.6} b={11.45} dim={0.7} />
      <TopTag a={3.6} b={11.45}>A LAWSUIT FILED THIS YEAR</TopTag>
      <Win a={3.6} b={11.45}>
        <Pos y={780}><LawsuitPage at={3.65} hlAt={5.22} /></Pos>
        <Pos y={1130}><Stamp at={7.98} text="rarely, if ever" color={C6.loss} size={92} /></Pos>
      </Win>
      <Note a={3.6} b={11.45} y={1250}>CURRY v. TAPESTRY · D. OR. · 2026</Note>

      {/* 3. цены из иска ни разу не дошли до $499 */}
      <Win a={11.45} b={17.15}>
        <Pos y={330}><In at={11.5} from="down" dist={16}><Kicker6 size={34} color={C6.accent}>PRICES LISTED IN THE LAWSUIT</Kicker6></In></Pos>
        <Pos y={800}><PriceCeiling at={11.5} ceil="$499" ceilLabel="COMP. VALUE" low="never reached it" lowLabel="ACTUAL PRICES" drawAt={12.0} w={960} h={560} /></Pos>
      </Win>
      <Note a={11.45} b={17.15} y={1250}>ILLUSTRATION OF THE LAWSUIT'S CLAIM</Note>

      {/* 4. тот же день, тот же аутлет-центр в Орегоне: Michael Kors — $95.20 */}
      <Clip n={1} a={17.15} b={21.6} dim={0.25} />
      <Clip n={13} a={21.6} b={26.45} dim={0.4} />
      <TopTag a={17.15} b={26.45} color={C6.ink}>SAME DAY · SAME OUTLET CENTER</TopTag>
      <Win a={21.6} b={26.45}><Pos y={800}><BigNum at={24.72} size={230} icon="bag" label="SIMILAR TOTE NEXT DOOR">$95.20</BigNum></Pos></Win>
      <Note a={17.15} b={26.45} y={1250}>ILLUSTRATIVE FOOTAGE · PRICES PER THE LAWSUIT</Note>

      {/* 5. кто написал $499? и с чем «сравнимо»? */}
      <Clip n={69} a={26.45} b={32.45} dim={0.6} />
      <Win a={26.45} b={32.45}>
        <Pos y={900}><Tag at={26.5} scale={1.15} tilt={3} hlTopAt={28.04} /></Pos>
        <Pos y={235}><In at={30.9} from="zoom"><BigText size={92}>Comparable<br />to <span style={{ color: C6.accent }}>what?</span></BigText></In></Pos>
      </Win>

      {/* 6. приём: закрой большую цифру пальцем */}
      <Clip n={50} a={32.45} b={43.15} dim={0.65} />
      <TopTag a={32.45} b={43.15} color={C6.mint} y={230}>TRICK · COVER THE BIG NUMBER</TopTag>
      <Win a={32.45} b={43.15}>
        <Pos y={880}><Tag at={32.5} coverAt={33.0} hlPriceAt={35.78} /></Pos>
        <Pos y={1275}><Stamp at={42.08} text="real price" color={C6.money} size={74} /></Pos>
      </Win>
      <Clip n={78} a={43.15} b={45.55} dim={0.15} />
      <Win a={43.15} b={45.55}><Meme at={43.2} text="me, seeing $499 crossed out" y={560} size={84} /></Win>

      {/* 7. развязка: $499 тает, остаётся $169 */}
      <Clip n={90} a={45.55} b={53.6} dim={0.6} />
      <Win a={45.55} b={53.6}><Pos y={880}><Tag at={45.6} meltAt={47.22} hlPriceAt={50.3} priceColor={C6.money} priceColorAt={50.3} /></Pos></Win>

      {/* 8. переход на полную версию: CEO, который пытался это прекратить */}
      <Clip n={12} a={53.6} b={T09SHORT_DURATION_SEC} dim={0.6} />
      <Win a={53.6} b={T09SHORT_DURATION_SEC}>
        <Pos y={640}><In at={53.65} from="zoom"><div style={{ fontFamily: SERIF, fontSize: 86, color: C6.ink, textAlign: "center", lineHeight: 1.1, textShadow: "0 4px 18px rgba(0,0,0,.6)" }}>The CEO who tried<br />to <span style={{ color: C6.accent }}>kill fake prices</span>.<br />What happened?</div></In></Pos>
        <Pos y={1000}><Label6 at={54.2} size={38} color={C6.mint}>FULL STORY · LINK BELOW</Label6></Pos>
        <Pos y={1200}><In at={54.7} from="up" dist={14}><div style={{ padding: "18px 40px", borderRadius: 50, background: C6.accent, color: "#063A47", fontFamily: SANS, fontWeight: 800, fontSize: 34, letterSpacing: "0.12em", whiteSpace: "nowrap" }}>$ {BRAND.name}</div></In></Pos>
      </Win>

      <Captions />

      <div style={{ position: "absolute", left: 0, right: 0, top: 200, textAlign: "center", fontFamily: SANS, fontWeight: 700, fontSize: 24, letterSpacing: "0.3em", color: "rgba(247,244,236,.7)", textShadow: "0 2px 10px rgba(0,0,0,.6)", opacity: t > 3.6 && t < VOICE_END && !(t > 26.45 && t < 43.15) ? 1 : 0 }}>
        <span style={{ color: C6.accent }}>$</span> {BRAND.name}
      </div>

      <Audio src={staticFile("audio/t09s-voiceover.mp3")} volume={0.9} />
      <Audio src={staticFile("audio/t04/music-c0-open.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 20, D - 30, D], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />
      {SFX.map(([s, n, v], i) => (
        <Sequence key={i} from={Math.round(s * 30)} durationInFrames={90}><Audio src={staticFile(`sfx/${n}.wav`)} volume={v} /></Sequence>
      ))}
    </AbsoluteFill>
  );
};
