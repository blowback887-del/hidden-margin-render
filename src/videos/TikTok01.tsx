import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { Bg6, BigNum, C6, In, Kicker6, Label6, MEME, Meme, SANS, SERIF, setClips, Stamp, Stock6, useT, Words, Plate6 } from "../brand/hm6";
import WORDS from "./tiktok01-words.json";

// ===================================================================
// TikTok01 — «Why Mattress Stores Are Always Empty (But Never Close)» (15.11.2026).
// Вертикальный ролик для TikTok, своя озвучка Haven Sands (960 кредитов).
// Факты — cloud/tiktok01/research.md (фактчекер пройден).
// MUSIC=false: для TikTok без музыки (лицензия Фонотеки не называет TikTok) — звук Павел добавляет в приложении.
// ===================================================================

export const TIKTOK01_DURATION_SEC = 64.5;
const VOICE_END = 62.3;

const CL: Record<number, [string, number]> = {
  1: ["01-showroom-bedroom", 10], 2: ["28-turning-sign", 10], 3: ["03-phone-scroll", 10], 4: ["05-man-shaking-head", 10],
  5: ["06-man-yawning", 10], 6: ["26-man-funny-face", 10], 7: ["08-couple-bed-talking", 10], 8: ["10-calculator", 10],
  9: ["11-counting-cash", 10], 10: ["02-showroom-deals", 10], 11: ["13-aerial-retail-center", 10], 12: ["15-city-street-stores", 10],
  13: ["17-abandoned-outlet", 10], 14: ["18-aerial-center-sunny", 10], 15: ["21-salesperson-client", 10], 16: ["19-percent-tag", 10],
  17: ["24-man-surprised", 10], 18: ["22-suit-computer", 10], 19: ["25-man-lying-bed", 10],
};
setClips((n) => ({ src: staticFile(`broll/tiktok01/${CL[n][0]}.mp4`), len: CL[n][1] }));

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
const Src: React.FC<{ a: number; b: number; children: React.ReactNode }> = ({ a, b, children }) => (
  <Win a={a} b={b}><Pos y={1080}><In at={a + 0.2} from="fade"><div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 24, letterSpacing: "0.16em", color: "rgba(247,244,236,.85)", textShadow: "0 2px 8px rgba(0,0,0,.8)", textTransform: "uppercase" }}>{children}</div></In></Pos></Win>
);

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
  if (t > 60.9) return null; // финальный вопрос показывает карточка
  const g = groups.find((c) => t >= c[0].start - 0.06 && t < c[c.length - 1].end + 0.2);
  if (!g) return null;
  const k = interpolate(t, [g[0].start - 0.06, g[0].start + 0.06], [0.85, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ position: "absolute", left: 60, right: 60, top: 1290, translate: "0 -50%", textAlign: "center", fontFamily: MEME, fontSize: 88, lineHeight: 1.05, textTransform: "uppercase", WebkitTextStroke: "7px #000", paintOrder: "stroke fill", scale: String(k) }}>
      {g.map((w, i) => {
        const said = t >= w.start - 0.03;
        const color = NUM.test(w.text) ? C6.accent : t < w.end + 0.05 && said ? C6.money : "#fff";
        return <span key={i} style={{ color, opacity: said ? 1 : 0 }}>{w.text.replace(/,$/, "")} </span>;
      })}
    </div>
  );
};

const TopTag: React.FC<{ a: number; b: number; children: React.ReactNode; color?: string; size?: number }> = ({ a, b, children, color = C6.accent, size = 34 }) => (
  <Win a={a} b={b}><Pos y={330}><In at={a} out={b - 0.3} from="down" dist={16}><Kicker6 size={size} color={color}>{children}</Kicker6></In></Pos></Win>
);

// звуки — библиотека ElevenLabs (public/sfx), каждый на смысловое событие
const SFX: [number, string, number][] = [
  [0.05, "ep06-whoosh", 0.25], [3.6, "click", 0.35], [6.3, "ep06-pop", 0.3], [9.18, "ep06-stamp", 0.35],
  [11.84, "ep09-trombone", 0.22], [16.46, "ep06-counter", 0.3], [20.88, "ep06-pop", 0.3], [23.64, "cash", 0.3],
  [24.9, "ep06-kaching", 0.22], [28.08, "ep06-coin", 0.35], [34.3, "ep06-scratch", 0.28], [37.38, "ep06-boom", 0.3],
  [38.74, "ep06-stamp", 0.3], [41.3, "rise", 0.25], [45.1, "ep06-receipt", 0.3], [48.92, "ep06-fall", 0.28],
  [52.06, "ep06-pop", 0.3], [59.5, "ep06-stamp", 0.35], [60.96, "ep06-whoosh", 0.25],
];

export const TikTok01: React.FC<{ music?: boolean }> = ({ music = false }) => {
  const { t, p } = useT();
  const fadeOut = 1 - p(TIKTOK01_DURATION_SEC - 0.4, TIKTOK01_DURATION_SEC);
  const D = TIKTOK01_DURATION_SEC * 30;
  return (
    <AbsoluteFill style={{ background: C6.bgDeep, opacity: fadeOut }} translate="no">
      <Bg6 />

      {/* 1. хук: пустой салон, обещание обложки с первого кадра */}
      <Clip n={1} a={0} b={3.55} dim={0.2} />
      <Clip n={2} a={3.55} b={5.6} dim={0.2} />
      <Win a={0} b={5.6}>
        <Pos y={560}><div style={{ fontFamily: MEME, fontSize: 118, lineHeight: 1.0, color: "#fff", WebkitTextStroke: "8px #000", paintOrder: "stroke fill", textAlign: "center", textTransform: "uppercase" }}>Nobody buys.<br /><span style={{ color: C6.accent }}>Still open.</span></div></Pos>
      </Win>

      {/* 2. Reddit: отмывание денег? */}
      <Clip n={3} a={5.6} b={7.95} dim={0.25} />
      <TopTag a={5.6} b={7.95} color={C6.mint}>THE REDDIT THEORY</TopTag>
      <Win a={5.6} b={7.95}><Meme at={6.34} text="money laundering?" y={760} size={104} /></Win>

      {/* 3. Planet Money: доказательств нет */}
      <Clip n={4} a={7.95} b={10.3} dim={0.2} />
      <TopTag a={7.95} b={10.3} color={C6.ink}>NPR'S PLANET MONEY LOOKED</TopTag>
      <Win a={7.95} b={10.3}><Pos y={760}><Stamp at={9.18} text="no evidence" color={C6.loss} size={110} /></Pos></Win>

      {/* 4. скучнее и обиднее (гэг: зевок → гримаса) */}
      <Clip n={5} a={10.3} b={12.85} dim={0.05} />
      <Clip n={6} a={12.85} b={14.35} dim={0.05} />
      <Win a={10.3} b={12.85}><Meme at={11.84} text="more boring" y={720} size={100} /></Win>
      <Win a={12.85} b={14.35}><Meme at={13.28} text="more annoying" y={720} size={100} /></Win>

      {/* 5. 12–20 продаж в месяц покрывают расходы */}
      <Clip n={7} a={14.35} b={17.5} dim={0.35} />
      <Clip n={8} a={17.5} b={22.15} dim={0.45} />
      <TopTag a={14.35} b={20.1} color={C6.ink}>WHAT STORE OWNERS SAY</TopTag>
      <Win a={14.35} b={20.1}><Pos y={760}><BigNum at={16.46} size={250} icon="store" label="SALES A MONTH = COSTS COVERED">12–20</BigNum></Pos></Win>
      <Src a={16.5} b={20.1}>via Prof. Utpal Dholakia · Freakonomics</Src>

      {/* 6. меньше одной в день → остальное сверху */}
      <Clip n={9} a={22.15} b={24.45} dim={0.15} />
      <Win a={20.1} b={22.15}><Pos y={760}><BigNum at={20.88} size={280} icon="calendar" label="SALE A DAY">{"< 1"}</BigNum></Pos></Win>
      <Win a={22.15} b={24.45}><Meme at={23.64} text="the rest = gravy" y={720} size={100} /></Win>

      {/* 7. $1,000 → магазин оставляет ~$600 до аренды */}
      <Clip n={10} a={24.45} b={30.0} dim={0.45} />
      <TopTag a={24.45} b={30.0} color={C6.ink}>ONE $1,000 MATTRESS</TopTag>
      <Win a={24.45} b={30.0}>
        <Pos y={600}><BigNum at={24.88} size={190} color={C6.ink} icon="receipt" label="YOU PAY">$1,000</BigNum></Pos>
        <Pos y={900}><BigNum at={28.08} size={230} color={C6.money} label="STORE KEEPS (BEFORE RENT)">≈$600</BigNum></Pos>
      </Win>
      <Src a={28.1} b={30.0}>KeyBanc analyst · Freakonomics</Src>

      {/* 8. Mattress Firm скупила конкурентов: магазины через дорогу друг от друга */}
      <Clip n={11} a={30.0} b={33.5} dim={0.3} />
      <Clip n={12} a={33.5} b={35.95} dim={0.2} />
      <TopTag a={30.0} b={35.95}>MATTRESS FIRM · BIGGEST CHAIN</TopTag>
      <Win a={30.0} b={33.5}><Pos y={760}><Plate6 at={31.96}><Words text="Bought its rivals." at={31.96} size={84} hl={["rivals."]} maxW={900} /></Plate6></Pos></Win>
      <Win a={33.5} b={35.95}><Meme at={34.3} text="across the street from itself" y={720} size={92} /></Win>

      {/* 9. 2018: банкротство, 600+ закрыто */}
      <Clip n={13} a={35.95} b={40.1} dim={0.35} />
      <Win a={35.95} b={40.1}>
        <Pos y={560}><Stamp at={37.38} text="bankrupt · 2018" color={C6.loss} size={92} /></Pos>
        <Pos y={880}><BigNum at={38.74} size={220} color={C6.loss} label="STORES CLOSED">600+</BigNum></Pos>
      </Win>
      <Src a={38.8} b={40.1}>NPR Planet Money</Src>

      {/* 10. и всё равно 2 100 магазинов сегодня */}
      <Clip n={14} a={40.1} b={43.5} dim={0.3} />
      <TopTag a={40.1} b={43.5} color={C6.mint}>STILL HERE, THOUGH</TopTag>
      <Win a={40.1} b={43.5}><Pos y={760}><BigNum at={41.38} size={250} icon="store" label="MATTRESS FIRM STORES TODAY">2,100+</BigNum></Pos></Win>
      <Src a={41.5} b={43.5}>Somnigroup Investor Day · 2026</Src>

      {/* 11. урок: не платить по ценнику */}
      <Clip n={15} a={43.5} b={46.95} dim={0.35} />
      <TopTag a={43.5} b={46.95}>HOW TO BEAT IT</TopTag>
      <Win a={43.5} b={46.95}><Pos y={760}><Plate6 at={45.1}><Words text="Never pay the sticker price." at={45.1} size={84} hl={["Never"]} maxW={900} /></Plate6></Pos></Win>

      {/* 12. −50% на распродаже */}
      <Clip n={16} a={46.95} b={50.9} dim={0.3} />
      <Win a={46.95} b={50.9}><Pos y={760}><BigNum at={48.92} size={280} icon="percent" label="IN A SALE">−50%</BigNum></Pos></Win>
      <Src a={49.0} b={50.9}>Consumer Reports</Src>

      {/* 13. только 22% торгуются (гэг: лицо в ладонях) */}
      <Clip n={17} a={50.9} b={55.0} dim={0.3} />
      <Win a={50.9} b={55.0}><Pos y={760}><BigNum at={52.06} size={280} label="EVEN TRIED TO HAGGLE">22%</BigNum></Pos></Win>
      <Src a={52.1} b={55.0}>Consumer Reports survey · 6,000+ members</Src>

      {/* 14. пустой магазин ждёт тебя */}
      <Clip n={18} a={55.0} b={60.9} dim={0.2} />
      <Win a={55.0} b={60.9}><Meme at={58.16} text="waiting for you" y={640} size={96} /></Win>
      <Win a={59.45} b={60.9}><Pos y={860}><Stamp at={59.5} text="to not haggle" color={C6.accent} size={92} /></Pos></Win>

      {/* 15. вопрос в комментарии + подписка */}
      <Clip n={19} a={60.9} b={TIKTOK01_DURATION_SEC} dim={0.5} />
      <Win a={60.9} b={TIKTOK01_DURATION_SEC}>
        <Pos y={640}><In at={60.96} from="zoom"><div style={{ fontFamily: SERIF, fontSize: 104, color: C6.ink, textAlign: "center", lineHeight: 1.05, textShadow: "0 4px 18px rgba(0,0,0,.6)" }}>How old is<br /><span style={{ color: C6.accent }}>your mattress?</span></div></In></Pos>
        <Pos y={960}><Label6 at={61.6} size={34} color={C6.mint}>TELL ME IN THE COMMENTS</Label6></Pos>
        <Pos y={1180}><In at={62.4} from="up" dist={14}><div style={{ padding: "18px 40px", borderRadius: 50, background: C6.accent, color: "#063A47", fontFamily: SANS, fontWeight: 800, fontSize: 34, letterSpacing: "0.12em", whiteSpace: "nowrap" }}>FOLLOW · $ HIDDEN MARGIN</div></In></Pos>
      </Win>

      <Captions />

      <div style={{ position: "absolute", left: 0, right: 0, top: 200, textAlign: "center", fontFamily: SANS, fontWeight: 700, fontSize: 24, letterSpacing: "0.3em", color: "rgba(247,244,236,.7)", textShadow: "0 2px 10px rgba(0,0,0,.6)", opacity: t > 5.6 && t < VOICE_END ? 1 : 0 }}>
        <span style={{ color: C6.accent }}>$</span> HIDDEN MARGIN
      </div>

      <Audio src={staticFile("audio/tiktok01-voiceover.mp3")} />
      {music && <Audio src={staticFile("audio/tiktok01-music.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 20, D - 30, D], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />}
      {SFX.map(([s, n, v], i) => (
        <Sequence key={i} from={Math.round(s * 30)} durationInFrames={90}><Audio src={staticFile(`sfx/${n}.wav`)} volume={v} /></Sequence>
      ))}
    </AbsoluteFill>
  );
};
