import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { Bg6, BigNum, C6, Donut6, In, Kicker6, Label6, MEME, Num6, Punch, Receipt6, SANS, SERIF, setClips, Stamp, Stock6, useT } from "../brand/hm6";
import WORDS from "./short01-words.json";

// ===================================================================
// Short01 — самостоятельный Shorts канала (с нуля, 09.11.2026): три «скрытые маржи»
// подряд (заправка → Starbucks → Thanksgiving 1939) и призыв смотреть длинные ролики.
// Вертикаль 1080×1920, стиль Ep06; важное — в центральной зоне 900×1400 (x 90–990, y 260–1660).
// Факты — claude/ep06-research.md (F3, F4, C4) и claude/ep05-research.md (F8, F14).
// ===================================================================

export const SHORT01_DURATION_SEC = 43;

const CL: Record<number, [string, number]> = {
  1: ["ep06/48-fuel-pump-close", 8.73], 2: ["ep06/02-pump-display-numbers", 10], 3: ["ep06/04-night-gas-station-neon", 10],
  4: ["ep06/34-shopping-aisle", 10], 5: ["ep06/31-night-gas-station-store", 10], 6: ["ep06/01-man-refueling-car", 10],
  7: ["ep06/25-store-automatic-doors", 10], 8: ["ep06/05-coffee-filling-cup", 10], 9: ["ep05/03-person-organizing-kitchen-drawer-with-fo", 7.07],
  10: ["ep05/15-turkey-for-the-thanksgiving-dinner", 10], 11: ["ep05/07-a-crowded-shopping-mall-decorated-with-c", 10],
  12: ["ep06/16-cashier", 10], 13: ["ep05/34-people-at-the-coffee-shop", 10], 14: ["ep06/37-pizza-out-of-oven", 7.2],
  15: ["ep05/25-bustling-indoor-shopping-mall-with-holid", 10], 16: ["ep06/45-cash-register", 10],
};
setClips((n) => ({ src: staticFile(`broll/${CL[n][0]}.mp4`), len: CL[n][1] }));

const X = 540;
const G = 840; // центр графики
const Pos: React.FC<{ y?: number; children: React.ReactNode }> = ({ y = G, children }) => (
  <div style={{ position: "absolute", left: X, top: y, translate: "-50% -50%" }}>{children}</div>
);

/** Рендерить слой только в своём окне (видео вне окна не декодируются) */
const Win: React.FC<{ a: number; b: number; children: React.ReactNode }> = ({ a, b, children }) => {
  const t = useCurrentFrame() / 30;
  return t >= a - 0.05 && t < b + 0.05 ? <>{children}</> : null;
};
const Clip: React.FC<{ n: number; a: number; b: number; dim?: number; sepia?: boolean }> = ({ n, a, b, dim = 0.05, sepia }) => (
  <Win a={a} b={b}><Stock6 n={n} from={a} dur={b + 0.2} dim={dim} sepia={sepia} /></Win>
);

// ---------- субтитры: 2–3 слова, цифры жёлтым, текущее слово мятным ----------
type W = { text: string; start: number; end: number };
const RAW = WORDS as W[];
const words: W[] = [];
for (const w of RAW) {
  if (/^[.%]/.test(w.text) && words.length) {
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
const NUM = /(\d|\$|%|¢)/;
const Captions: React.FC = () => {
  const { t } = useT();
  const g = groups.find((c) => t >= c[0].start - 0.06 && t < c[c.length - 1].end + 0.2);
  if (!g) return null;
  const k = interpolate(t, [g[0].start - 0.06, g[0].start + 0.06], [0.85, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ position: "absolute", left: 70, right: 70, top: 1400, translate: "0 -50%", textAlign: "center", fontFamily: MEME, fontSize: 96, lineHeight: 1.05, textTransform: "uppercase", WebkitTextStroke: "7px #000", paintOrder: "stroke fill", scale: String(k) }}>
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

const Tile: React.FC<{ at: number; title: string; sub: string }> = ({ at, title, sub }) => (
  <In at={at} from="zoom">
    <div style={{ width: 400, height: 190, borderRadius: 22, background: C6.panel, border: `3px solid ${C6.line}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
      <div style={{ fontFamily: SERIF, fontSize: 54, color: C6.ink, whiteSpace: "nowrap" }}>{title}</div>
      <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 22, letterSpacing: "0.2em", color: C6.mint }}>{sub}</div>
    </div>
  </In>
);

const SFX: [number, string, number][] = [
  [0.0, "ep06-pump", 0.3], [1.46, "ep06-coin", 0.4], [5.1, "ep06-kaching", 0.3], [5.9, "ep06-stamp", 0.4], [8.4, "ep06-boom", 0.3],
  [9.44, "ep06-pop", 0.35], [11.9, "ep06-counter", 0.3], [15.2, "ep06-stamp", 0.4], [15.8, "ep06-whoosh", 0.3], [18.52, "ep06-counter", 0.3],
  [21.86, "ep06-scratch", 0.3], [25.54, "ep06-pop", 0.35], [30.6, "ep06-kaching", 0.25], [32.14, "ep06-whoosh", 0.3], [33.9, "ep06-boom", 0.35],
  [35.0, "ep06-pop", 0.3], [38.68, "ep06-receipt", 0.3],
];

export const Short01: React.FC = () => {
  const { t, p } = useT();
  const fadeOut = 1 - p(SHORT01_DURATION_SEC - 0.4, SHORT01_DURATION_SEC);
  return (
    <AbsoluteFill style={{ background: C6.bgDeep, opacity: fadeOut }} translate="no">
      <Bg6 />

      {/* 1. 13 центов */}
      <Clip n={1} a={0} b={4.0} />
      <TopTag a={0} b={4.0}>THE GAS STATION MATH</TopTag>
      <Win a={0} b={4.0}><Pos><BigNum at={1.46} icon="pump" size={300} label="PROFIT PER GALLON">13¢</BigNum></Pos></Win>

      {/* 2. целый бак = $2.60 */}
      <Clip n={2} a={4.0} b={7.0} />
      <Win a={4.0} b={7.0}>
        <Pos y={760}><BigNum at={5.1} size={300} color={C6.money} label="ON A WHOLE TANK">$2.60</BigNum></Pos>
        <Pos y={1080}><Stamp at={5.9} text="THAT'S IT?" size={80} /></Pos>
      </Win>

      {/* 3. как она ещё открыта? */}
      <Win a={7.0} b={9.3}><Punch at={8.4} amount={0.1}><Stock6 n={3} from={7.0} dur={9.5} dim={0.05} /></Punch></Win>
      <Win a={7.0} b={9.3}><Pos><In at={8.4} from="zoom"><Num6 size={460}>?</Num6></In></Pos></Win>

      {/* 4. снеки: магазин ≈ 60% прибыли */}
      <Clip n={4} a={9.3} b={10.4} dim={0} />
      <Clip n={5} a={10.4} b={13.9} dim={0.1} />
      <TopTag a={10.4} b={13.9} color={C6.ink}>THE STORE INSIDE</TopTag>
      <Win a={10.4} b={13.9}><Pos><Donut6 at={11.9} pct={60} center="~60%" label="OF THE PROFIT" size={520} /></Pos></Win>

      {/* 5. колонки — наживка */}
      <Clip n={6} a={13.9} b={15.8} />
      <Win a={13.9} b={15.8}><Pos><Stamp at={15.2} text="THE BAIT" color={C6.accent} size={120} /></Pos></Win>

      {/* 6. не только заправки */}
      <Clip n={7} a={15.8} b={17.4} dim={0} />

      {/* 7. Starbucks: $200M за невыпитый кофе */}
      <Clip n={8} a={17.4} b={23.2} dim={0.1} />
      <TopTag a={17.4} b={23.2}>STARBUCKS · GIFT CARDS</TopTag>
      <Win a={17.4} b={23.2}>
        <Pos y={780}><BigNum at={18.52} icon="coffee" size={190} label="IN ONE YEAR">$200M+</BigNum></Pos>
        <Pos y={1090}><In at={21.46} from="up" dist={18}><div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 64, color: C6.ink, whiteSpace: "nowrap", textShadow: "0 4px 28px rgba(0,0,0,.6)" }}>for coffee nobody drank</div></In></Pos>
        <div style={{ position: "absolute", left: 0, right: 0, top: 1600, textAlign: "center" }}><Kicker6 size={20} color="rgba(247,244,236,.6)">SOURCE: STARBUCKS FY2025 ANNUAL REPORT</Kicker6></div>
      </Win>

      {/* 8. карты, которые никто не потратил */}
      <Clip n={9} a={23.2} b={25.3} dim={0.05} />
      <Win a={23.2} b={25.3}><Pos><Stamp at={24.42} text="NEVER SPENT" size={96} rotate={-6} /></Pos></Win>

      {/* 9. 1939: Thanksgiving на неделю раньше */}
      <Clip n={10} a={25.3} b={29.0} sepia dim={0.1} />
      <Win a={25.3} b={29.0}>
        <Pos y={780}><BigNum at={25.54} size={300} color={C6.ink}>1939</BigNum></Pos>
        <Pos y={1050}><Label6 at={27.5} size={34} color={C6.accent}>THANKSGIVING · ONE WEEK EARLIER</Label6></Pos>
      </Win>

      {/* 10. ради покупок */}
      <Clip n={11} a={29.0} b={32.0} />
      <Win a={29.0} b={32.0}><Pos><Stamp at={30.6} text="FOR SHOPPING" color={C6.accent} size={100} /></Pos></Win>

      {/* 11. взрыв: у каждого бизнеса скрытая маржа */}
      <Clip n={12} a={32.0} b={32.55} dim={0} />
      <Clip n={13} a={32.55} b={33.1} dim={0} />
      <Clip n={14} a={33.1} b={33.65} dim={0} />
      <Win a={33.65} b={34.8}><Punch at={33.9} amount={0.08}><Stock6 n={16} from={33.65} dur={35.0} dim={0.2} /></Punch></Win>
      <Win a={33.65} b={34.8}>
        <Pos><In at={33.85} from="zoom"><div style={{ textAlign: "center" }}><Num6 size={150} color={C6.ink}>HIDDEN</Num6><Num6 size={150}>MARGIN</Num6></div></In></Pos>
      </Win>

      {/* 12. призыв: полные истории на канале */}
      <Win a={34.8} b={38.6}>
        <Pos y={430}><In at={34.86} from="down"><div style={{ fontFamily: SERIF, fontSize: 84, color: C6.ink, textAlign: "center", lineHeight: 1.05 }}>Full stories<br /><span style={{ color: C6.accent }}>on the channel</span></div></In></Pos>
        <Pos y={850}>
          <div style={{ display: "grid", gridTemplateColumns: "400px 400px", gap: 28 }}>
            <Tile at={35.3} title="Gas Stations" sub="13¢ A GALLON" />
            <Tile at={35.6} title="Christmas" sub="WHO GETS PAID" />
            <Tile at={35.9} title="Costco" sub="THE $1.50 HOT DOG" />
            <Tile at={36.2} title="Airports" sub="WHERE MONEY LANDS" />
          </div>
        </Pos>
      </Win>

      {/* 13. финал: чек */}
      <Win a={38.6} b={SHORT01_DURATION_SEC}>
        <Pos y={820}><In at={38.6} from="fade"><div style={{ scale: "1.45" }}><Receipt6 at={38.7} step={0.35} w={640} lines={[["GAS", "13¢"], ["SNACKS", "$$$"], ["GIFT CARD", "UNSPENT"], ["HIDDEN MARGIN", "FOUND"]]} /></div></In></Pos>
        <Pos y={1640}><In at={41.2} from="up" dist={14}><div style={{ padding: "18px 40px", borderRadius: 50, background: C6.accent, color: "#063A47", fontFamily: SANS, fontWeight: 800, fontSize: 34, letterSpacing: "0.12em", whiteSpace: "nowrap" }}>WATCH THE FULL VIDEOS ↓</div></In></Pos>
      </Win>

      <Captions />

      {/* значок канала */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 200, textAlign: "center", fontFamily: SANS, fontWeight: 700, fontSize: 24, letterSpacing: "0.3em", color: "rgba(247,244,236,.7)", textShadow: "0 2px 10px rgba(0,0,0,.6)", opacity: t < 34.8 ? 1 : 0 }}>
        <span style={{ color: C6.accent }}>$</span> HIDDEN MARGIN
      </div>

      <Audio src={staticFile("audio/short01-voiceover.mp3")} />
      <Audio src={staticFile("audio/ep06/music-trailer.mp3")} volume={(f) => 0.14 * interpolate(f, [0, 20, SHORT01_DURATION_SEC * 30 - 30, SHORT01_DURATION_SEC * 30], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />
      {SFX.map(([s, n, v], i) => (
        <Sequence key={i} from={Math.round(s * 30)} durationInFrames={90}><Audio src={staticFile(`sfx/${n}.wav`)} volume={v} /></Sequence>
      ))}
    </AbsoluteFill>
  );
};
