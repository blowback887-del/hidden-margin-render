import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { Bg6, BigNum, C6, In, Kicker6, Label6, MEME, Meme, Plate6, Receipt6, SANS, SERIF, setClips, Stamp, Stock6, useT, Words } from "../brand/hm6";
import { BRAND } from "../brand/theme";
import WORDS from "./t01s-words.json";

// ===================================================================
// T01Short — Shorts из T01 «You've Been Tipping the Owner, Not Your Waiter» (21.11.2026).
// Озвучка вырезана из готовой T01 (public/audio/t01s-voiceover.mp3), 4 куска:
// T01 0:00–0:21.3 (Джейк, чаевые дважды) · 0:39.1–0:47.6 (чек, service charge) ·
// 1:08.3–1:24.8 (IRS: это не чаевые, деньги ресторана) · 1:42.6–1:47.2 (правило «tip vs fee»).
// Факты — из T01 (фактчекер пройден), новых утверждений нет. Стоки — public/broll/t01.
// ===================================================================

export const T01SHORT_DURATION_SEC = 53.6;
const VOICE_END = 50.86;

const CLIPS: Record<number, string> = {
  1: "01-jake-burger", 53: "53-pub-burger-beer", 4: "04-card-terminal", 5: "05-waiter-bearded", 7: "07-receipt-cash",
  57: "57-boss-throwing-money", 2: "02-burger-fries", 13: "13-irs-1040", 14: "14-businessman-counting", 6: "06-boss-counting",
  15: "15-espresso-pour", 16: "16-waitress-cleaning", 10: "10-couple-shock-bills",
};
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/t01/${CLIPS[n]}.mp4`), len: 7 });
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
const TopTag: React.FC<{ a: number; b: number; children: React.ReactNode; color?: string; size?: number }> = ({ a, b, children, color = C6.accent, size = 34 }) => (
  <Win a={a} b={b}><Pos y={330}><In at={a} out={b - 0.3} from="down" dist={16}><Kicker6 size={size} color={color}>{children}</Kicker6></In></Pos></Win>
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
const RULE_AT = 46.2; // финальное правило показывает карточка, субтитры уходят
const Captions: React.FC = () => {
  const { t } = useT();
  if (t > RULE_AT) return null;
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

const SFX: [number, string, number][] = [
  [0.05, "ep06-whoosh", 0.25], [6.1, "ep06-kaching", 0.25], [8.4, "ep06-coin", 0.3], [13.7, "ep09-trombone", 0.2],
  [17.3, "ep06-stamp", 0.4], [20.6, "ep06-pop", 0.3], [21.42, "ep06-receipt", 0.3], [29.9, "ep06-whoosh", 0.25],
  [34.6, "ep06-stamp", 0.4], [37.5, "ep06-kaching", 0.25], [44.9, "ep06-pop", 0.3], [46.36, "ep06-boom", 0.3],
  [48.6, "ep06-boom", 0.3], [50.9, "ep06-whoosh", 0.25],
];

export const T01Short: React.FC = () => {
  setClips(CLIP_FN);
  const { t, p } = useT();
  const D = Math.round(T01SHORT_DURATION_SEC * 30);
  const fadeOut = 1 - p(T01SHORT_DURATION_SEC - 0.4, T01SHORT_DURATION_SEC);
  return (
    <AbsoluteFill style={{ background: C6.bgDeep, opacity: fadeOut }} translate="no" className="notranslate">
      <Bg6 />

      {/* 1. хук с первого кадра: вопрос из названия */}
      <Clip n={53} a={0} b={3.6} dim={0.25} />
      <Win a={0} b={3.6}>
        <Pos y={560}><div style={{ fontFamily: MEME, fontSize: 116, lineHeight: 1.0, color: "#fff", WebkitTextStroke: "8px #000", paintOrder: "stroke fill", textAlign: "center", textTransform: "uppercase" }}>Your tip went<br />to <span style={{ color: C6.accent }}>the owner?</span></div></Pos>
      </Win>

      {/* 2. $80 по меню */}
      <Clip n={1} a={3.6} b={7.9} dim={0.3} />
      <Win a={3.6} b={7.9}><Pos y={760}><BigNum at={6.16} size={260} icon="receipt" label="ON THE MENU">$80</BigNum></Pos></Win>

      {/* 3. +20% чаевых */}
      <Clip n={4} a={7.9} b={11.8} dim={0.3} />
      <Win a={7.9} b={11.8}><Pos y={760}><BigNum at={8.5} size={260} icon="percent" label="TIP">+20%</BigNum></Pos></Win>
      <Win a={9.8} b={11.8}><Meme at={10.6} text="certified good guy" y={420} size={84} /></Win>

      {/* 4. официант может не увидеть ни цента */}
      <Clip n={5} a={11.8} b={16.4} dim={0.2} />
      <TopTag a={11.8} b={16.4} color={C6.ink}>HERE'S WHAT JAKE DOESN'T KNOW</TopTag>
      <Win a={11.8} b={16.4}><Pos y={760}><Stamp at={14.6} text="not a cent?" color={C6.loss} size={100} /></Pos></Win>

      {/* 5. чаевые дважды, одни — владельцу */}
      <Clip n={7} a={16.4} b={18.4} dim={0.25} />
      <Clip n={57} a={18.4} b={21.3} dim={0.15} />
      <Win a={16.4} b={18.4}><Pos y={760}><Stamp at={17.3} text="tipped twice" size={110} /></Pos></Win>
      <Win a={18.4} b={21.3}><Meme at={20.6} text="the owner, probably" y={700} size={92} /></Win>

      {/* 6. чек: service charge 20% */}
      <Clip n={2} a={21.3} b={29.75} dim={0.45} />
      <TopTag a={21.3} b={29.75}>BOTTOM OF JAKE'S RECEIPT</TopTag>
      <Win a={21.3} b={29.75}><Pos y={780}><div style={{ scale: "1.45" }}><Receipt6 at={22.1} w={560} step={1.7} lines={[["FOOD", "$80.00"], ["SERVICE 20%", "$16.00"]]} /></div></Pos></Win>

      {/* 7. IRS: автоматическая «чаевая» — это сбор, не чаевые */}
      <Clip n={13} a={29.75} b={35.6} dim={0.35} />
      <TopTag a={29.75} b={35.6} color={C6.mint}>WHAT THE IRS SAYS</TopTag>
      <Win a={29.75} b={35.6}>
        <Pos y={660}><Plate6 at={31.9}><Words text="Automatic gratuity = service charge" at={31.9} size={70} hl={["service", "charge"]} maxW={760} /></Plate6></Pos>
        <Pos y={950}><Stamp at={34.6} text="not a tip" color={C6.loss} size={110} /></Pos>
      </Win>

      {/* 8. сбор принадлежит ресторану */}
      <Clip n={14} a={35.6} b={39.5} dim={0.3} />
      <Win a={35.6} b={39.5}><Pos y={760}><Plate6 at={37.0}><Words text="It belongs to the restaurant." at={37.0} size={72} hl={["restaurant."]} maxW={720} /></Plate6></Pos></Win>

      {/* 9. аренда, свет, кофемашина имени себя */}
      <Clip n={6} a={39.5} b={43.5} dim={0.3} />
      <Clip n={15} a={43.5} b={46.25} dim={0.15} />
      <TopTag a={39.5} b={43.5} color={C6.ink}>THE OWNER CAN SPEND IT ON</TopTag>
      <Win a={39.5} b={43.5}><Pos y={780}><Label6 at={41.7} size={56} color={C6.ink}>RENT · POWER BILL</Label6></Pos></Win>
      <Win a={43.5} b={46.25}><Meme at={44.9} text="named after himself" y={700} size={96} /></Win>

      {/* 10. правило: tip vs fee */}
      <Clip n={16} a={46.25} b={50.9} dim={0.55} />
      <Win a={46.25} b={50.9}>
        <Pos y={640}><In at={46.36} from="zoom"><div style={{ fontFamily: MEME, fontSize: 112, lineHeight: 1.02, color: "#fff", WebkitTextStroke: "8px #000", paintOrder: "stroke fill", textAlign: "center", textTransform: "uppercase" }}>A <span style={{ color: C6.money }}>tip</span> is money<br />you give.</div></In></Pos>
        <Pos y={1060}><In at={48.56} from="zoom"><div style={{ fontFamily: MEME, fontSize: 112, lineHeight: 1.02, color: "#fff", WebkitTextStroke: "8px #000", paintOrder: "stroke fill", textAlign: "center", textTransform: "uppercase" }}>A <span style={{ color: C6.loss }}>fee</span> is money<br />they take.</div></In></Pos>
      </Win>

      {/* 11. переход на полную версию: $80 → $128 */}
      <Clip n={10} a={50.9} b={T01SHORT_DURATION_SEC} dim={0.55} />
      <Win a={50.9} b={T01SHORT_DURATION_SEC}>
        <Pos y={620}><In at={50.95} from="zoom"><div style={{ fontFamily: SERIF, fontSize: 92, color: C6.ink, textAlign: "center", lineHeight: 1.08, textShadow: "0 4px 18px rgba(0,0,0,.6)" }}>How an <span style={{ color: C6.accent }}>$80</span> dinner<br />became a <span style={{ color: C6.loss }}>$128</span> bill</div></In></Pos>
        <Pos y={960}><Label6 at={51.5} size={38} color={C6.mint}>FULL STORY · LINK BELOW</Label6></Pos>
        <Pos y={1170}><In at={52.0} from="up" dist={14}><div style={{ padding: "18px 40px", borderRadius: 50, background: C6.accent, color: "#063A47", fontFamily: SANS, fontWeight: 800, fontSize: 34, letterSpacing: "0.12em", whiteSpace: "nowrap" }}>$ {BRAND.name}</div></In></Pos>
      </Win>

      <Captions />

      <div style={{ position: "absolute", left: 0, right: 0, top: 200, textAlign: "center", fontFamily: SANS, fontWeight: 700, fontSize: 24, letterSpacing: "0.3em", color: "rgba(247,244,236,.7)", textShadow: "0 2px 10px rgba(0,0,0,.6)", opacity: t > 3.6 && t < VOICE_END ? 1 : 0 }}>
        <span style={{ color: C6.accent }}>$</span> {BRAND.name}
      </div>

      <Audio src={staticFile("audio/t01s-voiceover.mp3")} />
      <Audio src={staticFile("audio/t01/music-c1.mp3")} volume={(f) => 0.09 * interpolate(f, [0, 20, D - 30, D], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />
      {SFX.map(([s, n, v], i) => (
        <Sequence key={i} from={Math.round(s * 30)} durationInFrames={90}><Audio src={staticFile(`sfx/${n}.wav`)} volume={v} /></Sequence>
      ))}
    </AbsoluteFill>
  );
};
