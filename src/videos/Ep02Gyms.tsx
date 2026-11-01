import React from "react";
import { AbsoluteFill, Audio, Img, Sequence, staticFile, useVideoConfig, Video } from "remotion";
import { COLORS, FONT_BODY, FONT_HEAD } from "../brand/theme";
import {
  ChannelBug, ChapterTag, CompareBars, easeBack, easeExpo, easeInOut, easeOut, GridBg, Headline,
  MoneyCounter, PriceTag, useP,
} from "../brand/components";
import WORDS_RAW from "./ep02-gyms-words.json";
import { StickScene, type StickSpec } from "../stick/StickScene";

// ===================================================================
// Ep02 "How Gyms Make Money at Every Level ($15 to $400 a Month)"
// Стандарт монтажа из методички: новое событие на экране каждые ~3 с,
// три слоя (инфографика + человечки + реальные кадры), разрезы зданий.
// Каждый блок BEATS начинается, когда диктор (George) произносит фразу:
// тайминги из пословной расшифровки ep02-gyms-words.json.
// Чтобы сдвинуть сцену, меняйте её `from` / `to`.
// ===================================================================

export const WORDS = WORDS_RAW as { word: string; start: number; end: number }[];
export const GYMS_DURATION_SEC = 562;

// ---------- общая обёртка сцены ----------
const Wrap: React.FC<{ dur: number; children: React.ReactNode }> = ({ dur, children }) => {
  const { p } = useP();
  const i = p(0, 0.25, easeOut);
  const o = p(dur - 0.2, dur, easeInOut);
  return (
    <AbsoluteFill style={{ opacity: i * (1 - o), scale: String(0.98 + 0.02 * i), display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingBottom: 60 }}>
      {children}
    </AbsoluteFill>
  );
};

const Label: React.FC<{ children: React.ReactNode; color?: string; size?: number; at?: number }> = ({ children, color = COLORS.dim, size = 40, at = 0 }) => {
  const { p } = useP();
  const k = p(at, at + 0.4, easeOut);
  return (
    <div style={{ fontFamily: FONT_BODY, fontWeight: 800, fontSize: size, letterSpacing: "0.12em", textTransform: "uppercase", color, opacity: k, translate: `0px ${(1 - k) * 16}px`, textAlign: "center", textShadow: "0 3px 12px rgba(0,0,0,.6)", maxWidth: 1600 }}>
      {children}
    </div>
  );
};

const Big: React.FC<{ children: React.ReactNode; color?: string; size?: number; at?: number }> = ({ children, color = COLORS.ink, size = 200, at = 0 }) => {
  const { p } = useP();
  const k = p(at, at + 0.45, easeBack);
  return (
    <div style={{ fontFamily: FONT_HEAD, fontSize: size, lineHeight: 1, color, scale: String(0.6 + 0.4 * k), opacity: Math.min(1, k * 2), textShadow: `0 0 40px ${color}44, 0 8px 0 rgba(0,0,0,.35)`, textAlign: "center" }}>
      {children}
    </div>
  );
};

const Count: React.FC<{ to: number; at?: number; dur?: number; fmt: (v: number) => string; color?: string; size?: number }> = ({ to, at = 0, dur = 1.2, fmt, color = COLORS.ink, size = 200 }) => {
  const { p } = useP();
  const v = to * p(at, at + dur, easeExpo);
  return <Big color={color} size={size} at={at}>{fmt(v)}</Big>;
};
const int = (v: number) => Math.round(v).toLocaleString("en-US");
const mil = (d = 1) => (v: number) => (v / 1e6).toFixed(d) + "M";

const Pop: React.FC<{ at: number; children: React.ReactNode; from?: "up" | "left" | "right" | "zoom" }> = ({ at, children, from = "zoom" }) => {
  const { p } = useP();
  const k = p(at, at + 0.45, easeBack);
  const tr = from === "up" ? `0px ${(1 - k) * 60}px` : from === "left" ? `${(1 - k) * -80}px 0px` : from === "right" ? `${(1 - k) * 80}px 0px` : "0px 0px";
  return <div style={{ opacity: Math.min(1, k * 2), scale: String(from === "zoom" ? 0.6 + 0.4 * k : 1), translate: tr }}>{children}</div>;
};

const Row: React.FC<{ gap?: number; children: React.ReactNode; align?: "center" | "flex-end" | "flex-start" }> = ({ gap = 80, children, align = "center" }) => (
  <div style={{ display: "flex", alignItems: align, justifyContent: "center", gap }}>{children}</div>
);
const Col: React.FC<{ gap?: number; children: React.ReactNode }> = ({ gap = 24, children }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap }}>{children}</div>
);
const Sp: React.FC<{ h: number }> = ({ h }) => <div style={{ height: h }} />;

// ---------- нарисованные иконки (без эмодзи) ----------
type IconName = "card" | "people" | "gym" | "calendar" | "bike" | "dumbbell" | "towel" | "coach" | "printer" | "mail" | "truck"
  | "flag" | "money" | "pool" | "clock" | "receipt" | "star" | "sofa" | "treadmill" | "lock" | "door" | "spa" | "paper" | "gavel" | "crown" | "seat";
const IconPath: React.FC<{ name: IconName; c: string }> = ({ name, c }) => {
  const s = { fill: "none", stroke: c, strokeWidth: 6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "card": return <><rect x={10} y={24} width={80} height={52} rx={8} {...s} /><line x1={10} y1={40} x2={90} y2={40} {...s} /><line x1={22} y1={62} x2={46} y2={62} {...s} /></>;
    case "people": return <><circle cx={35} cy={32} r={12} {...s} /><path d="M14 80 q21-34 42 0" {...s} /><circle cx={66} cy={36} r={10} {...s} /><path d="M56 62 q14-14 32 18" {...s} /></>;
    case "gym": return <><path d="M12 84 V40 L50 16 L88 40 V84 Z" {...s} /><line x1={30} y1={60} x2={70} y2={60} {...s} /><rect x={24} y={52} width={8} height={16} {...s} /><rect x={68} y={52} width={8} height={16} {...s} /></>;
    case "calendar": return <><rect x={14} y={20} width={72} height={66} rx={8} {...s} /><line x1={14} y1={38} x2={86} y2={38} {...s} /><line x1={32} y1={12} x2={32} y2={26} {...s} /><line x1={68} y1={12} x2={68} y2={26} {...s} /><circle cx={50} cy={62} r={9} {...s} /></>;
    case "bike": return <><circle cx={26} cy={72} r={14} {...s} /><circle cx={76} cy={72} r={14} {...s} /><path d="M26 72 L44 40 L62 72 Z M44 40 L40 28 M58 40 L72 30" {...s} /></>;
    case "dumbbell": return <><line x1={26} y1={50} x2={74} y2={50} {...s} /><rect x={14} y={32} width={12} height={36} rx={3} {...s} /><rect x={74} y={32} width={12} height={36} rx={3} {...s} /></>;
    case "towel": return <><path d="M22 18 H78 V84 H22 Z" {...s} /><path d="M22 34 H78 M22 70 H78" {...s} /></>;
    case "coach": return <><circle cx={50} cy={26} r={13} {...s} /><path d="M24 86 V62 q26-24 52 0 V86" {...s} /><path d="M50 52 V70" {...s} /></>;
    case "printer": return <><rect x={14} y={38} width={72} height={30} rx={6} {...s} /><path d="M28 38 V16 H72 V38 M28 60 V86 H72 V60" {...s} /></>;
    case "mail": return <><rect x={12} y={26} width={76} height={50} rx={6} {...s} /><path d="M12 30 L50 56 L88 30" {...s} /></>;
    case "truck": return <><path d="M8 30 H58 V70 H8 Z M58 44 H78 L90 58 V70 H58" {...s} /><circle cx={26} cy={74} r={8} {...s} /><circle cx={74} cy={74} r={8} {...s} /></>;
    case "flag": return <><line x1={24} y1={88} x2={24} y2={12} {...s} /><path d="M24 16 H80 L68 32 L80 48 H24" {...s} /></>;
    case "money": return <><rect x={10} y={28} width={80} height={44} rx={6} {...s} /><circle cx={50} cy={50} r={11} {...s} /></>;
    case "pool": return <><path d="M10 64 q10-8 20 0 t20 0 t20 0 t20 0 M10 80 q10-8 20 0 t20 0 t20 0 t20 0" {...s} /><path d="M34 60 V18 h10 M62 60 V18 h10 M34 34 H62" {...s} /></>;
    case "clock": return <><circle cx={50} cy={50} r={36} {...s} /><path d="M50 28 V50 L66 60" {...s} /></>;
    case "receipt": return <><path d="M22 10 H78 V90 L68 82 L58 90 L48 82 L38 90 L28 82 L22 88 Z" {...s} /><path d="M34 32 H66 M34 48 H66 M34 64 H54" {...s} /></>;
    case "star": return <path d="M50 12 L61 38 L89 40 L67 58 L74 86 L50 70 L26 86 L33 58 L11 40 L39 38 Z" {...s} />;
    case "sofa": return <><path d="M14 52 V40 q0-10 10-10 H76 q10 0 10 10 V52" {...s} /><path d="M8 52 H92 V74 H8 Z M16 74 V84 M84 74 V84" {...s} /></>;
    case "treadmill": return <><path d="M10 76 L74 76 L86 62 M70 76 L80 30 H90" {...s} /><circle cx={20} cy={82} r={4} {...s} /></>;
    case "lock": return <><rect x={22} y={44} width={56} height={42} rx={6} {...s} /><path d="M32 44 V32 q18-28 36 0 V44" {...s} /></>;
    case "door": return <><rect x={26} y={10} width={48} height={80} rx={4} {...s} /><circle cx={62} cy={52} r={4} {...s} /></>;
    case "spa": return <><path d="M50 84 q-30-14-30-40 q22 4 30 26 q8-22 30-26 q0 26-30 40 Z" {...s} /><path d="M50 70 q-8-26 0-52 q8 26 0 52" {...s} /></>;
    case "paper": return <><path d="M24 10 H64 L80 26 V90 H24 Z M64 10 V26 H80" {...s} /><path d="M34 44 H70 M34 58 H70 M34 72 H58" {...s} /></>;
    case "gavel": return <><path d="M30 34 L54 10 L70 26 L46 50 Z M50 30 L84 64" {...s} /><path d="M14 88 H58" {...s} /></>;
    case "crown": return <path d="M12 74 L18 30 L36 50 L50 22 L64 50 L82 30 L88 74 Z" {...s} />;
    case "seat": return <><path d="M26 18 V60 H78 M26 60 L20 86 M78 60 L84 86" {...s} /><path d="M30 46 H76" {...s} /></>;
  }
};
const Icon: React.FC<{ name: IconName; color?: string; size?: number; ring?: boolean; at?: number }> = ({ name, color = COLORS.gold, size = 120, ring = true, at }) => {
  const { p } = useP();
  const k = at === undefined ? 1 : p(at, at + 0.4, easeBack);
  return (
    <div style={{ width: size, height: size, borderRadius: size, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
      background: ring ? `${color}1c` : "transparent", border: ring ? `4px solid ${color}` : "none", scale: String(0.5 + 0.5 * k), opacity: Math.min(1, k * 2) }}>
      <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 100 100"><IconPath name={name} c={color} /></svg>
    </div>
  );
};
// цифра всегда с иконкой
const Stat: React.FC<{ icon: IconName; value: React.ReactNode; label: string; color?: string; at?: number; size?: number }> = ({ icon, value, label, color = COLORS.gold, at = 0, size = 150 }) => (
  <Row gap={40}>
    <Icon name={icon} color={color} size={size} at={at} />
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      {value}
      <Label at={at + 0.2} color={COLORS.ink} size={38}>{label}</Label>
    </div>
  </Row>
);

// ---------- глава: табличка уровня ----------
const LevelPlate: React.FC<{ n: number; title: string; price: string; color?: string }> = ({ n, title, price, color = COLORS.gold }) => {
  const { p } = useP();
  return (
    <Col gap={20}>
      <div style={{ fontFamily: FONT_HEAD, fontSize: 64, color: COLORS.bg, background: color, borderRadius: 14, padding: "6px 30px", scale: String(p(0, 0.45, easeBack)) }}>LEVEL {n}</div>
      <Headline text={title} start={0.25} size={140} />
      <Pop at={1.0}><div style={{ fontFamily: FONT_HEAD, fontSize: 90, color }}>{price}</div></Pop>
    </Col>
  );
};

// ---------- лестница уровней ----------
const LADDER = [
  { label: "$15", sub: "budget gym" },
  { label: "~$70", sub: "full-service" },
  { label: "$35 / class", sub: "boutique studio" },
  { label: "$400", sub: "luxury club" },
];
const Ladder: React.FC<{ at?: number[]; active?: number; done?: number }> = ({ at = [0.2, 0.7, 1.2, 1.7], active = -1, done = -1 }) => {
  const { p, t } = useP();
  return (
    <div style={{ position: "relative", width: 1500, height: 640 }}>
      {LADDER.map((s, i) => {
        const k = p(at[i], at[i] + 0.5, easeBack);
        const on = i === active;
        const c = on ? COLORS.gold : i <= done ? COLORS.money : COLORS.blue;
        return (
          <div key={i} style={{ position: "absolute", left: i * 360, bottom: i * 140, width: 380, opacity: Math.min(1, k * 2), translate: `0px ${(1 - k) * 60}px` }}>
            <div style={{ fontFamily: FONT_HEAD, fontSize: on ? 92 : 74, color: c, textAlign: "center", textShadow: on ? `0 0 ${20 + 10 * Math.sin(t * 5)}px ${c}` : "none" }}>{s.label}</div>
            <div style={{ height: 34, background: c, borderRadius: 8, boxShadow: `0 10px 0 rgba(0,0,0,.35)` }} />
            <div style={{ fontFamily: FONT_BODY, fontWeight: 800, fontSize: 30, letterSpacing: "0.1em", color: COLORS.ink, textAlign: "center", marginTop: 14, textTransform: "uppercase" }}>{`${i + 1}. ${s.sub}`}</div>
          </div>
        );
      })}
    </div>
  );
};

// ---------- РАЗРЕЗ 1: зал на 300 мест и 7 100 членов ----------
const GymCutaway: React.FC<{ capAt: number; floodAt: number; badgeAt: number }> = ({ capAt, floodAt, badgeAt }) => {
  const { p } = useP();
  const roof = p(0, 0.8, easeOut);
  const inside = new Array(60).fill(0);
  const outside = new Array(220).fill(0);
  return (
    <div style={{ position: "relative", width: 1600, height: 760 }}>
      {/* здание со снятой крышей */}
      <svg width={1600} height={760} viewBox="0 0 1600 760" style={{ position: "absolute", inset: 0 }}>
        <rect x={420} y={260} width={760} height={420} fill={COLORS.bgSoft} stroke={COLORS.blue} strokeWidth={6} />
        <path d={`M400 ${260 - 140 * (1 - roof)} L800 ${120 - 300 * roof} L1200 ${260 - 140 * (1 - roof)}`} fill="none" stroke={COLORS.dim} strokeWidth={6} strokeDasharray="14 12" opacity={1 - roof * 0.7} />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i} transform={`translate(${470 + i * 118} 560)`}><path d="M0 60 L80 60 L95 40 M70 60 L80 10 H96" stroke={COLORS.dim} strokeWidth={5} fill="none" /></g>
        ))}
        <rect x={420} y={680} width={760} height={14} fill={COLORS.blue} />
      </svg>
      {/* люди внутри: вместимость ~300 */}
      <div style={{ position: "absolute", left: 450, top: 300, width: 700, display: "flex", flexWrap: "wrap", gap: 14 }}>
        {inside.map((_, i) => {
          const k = p(capAt + i * 0.012, capAt + 0.3 + i * 0.012, easeOut);
          return <div key={i} style={{ width: 30, height: 30, borderRadius: 15, background: COLORS.money, opacity: k, scale: String(k) }} />;
        })}
      </div>
      <div style={{ position: "absolute", left: 450, top: 210, fontFamily: FONT_HEAD, fontSize: 60, color: COLORS.money, opacity: p(capAt, capAt + 0.4, easeOut) }}>CAPACITY ≈ 300</div>
      {/* очередь снаружи: членов ~7 100 */}
      <div style={{ position: "absolute", left: 0, top: 0, width: 1600, height: 760 }}>
        {outside.map((_, i) => {
          const k = p(floodAt + i * 0.008, floodAt + 0.3 + i * 0.008, easeOut);
          const side = i % 2 === 0;
          const col = Math.floor(i / 2) % 10, row = Math.floor(i / 20);
          const x = side ? 30 + col * 36 : 1220 + col * 36;
          const y = 200 + row * 46;
          return <div key={i} style={{ position: "absolute", left: x, top: y, width: 26, height: 26, borderRadius: 13, background: COLORS.gold, opacity: 0.85 * k, scale: String(k) }} />;
        })}
      </div>
      <div style={{ position: "absolute", left: 0, width: 1600, top: 20, textAlign: "center", fontFamily: FONT_HEAD, fontSize: 70, color: COLORS.gold, opacity: p(floodAt, floodAt + 0.4, easeOut) }}>MEMBERS ≈ 7,100</div>
      <div style={{ position: "absolute", left: 650, top: 380, opacity: p(badgeAt, badgeAt + 0.4, easeOut), scale: String(0.6 + 0.4 * p(badgeAt, badgeAt + 0.45, easeBack)), rotate: "-6deg",
        fontFamily: FONT_HEAD, fontSize: 90, color: COLORS.bg, background: COLORS.loss, padding: "10px 34px", borderRadius: 16, boxShadow: "0 14px 0 rgba(0,0,0,.35)" }}>SOLD 24× OVER</div>
    </div>
  );
};

// ---------- календарь: визит раз в 12 дней ----------
const VisitCalendar: React.FC<{ at: number }> = ({ at }) => {
  const { p } = useP();
  const days = new Array(35).fill(0);
  const visits = new Set([3, 15, 27]);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 110px)", gap: 14 }}>
      {days.map((_, i) => {
        const k = p(at + i * 0.02, at + 0.3 + i * 0.02, easeOut);
        const v = visits.has(i);
        const g = v ? p(at + 0.9 + [...visits].indexOf(i) * 0.5, at + 1.3 + [...visits].indexOf(i) * 0.5, easeBack) : 0;
        return (
          <div key={i} style={{ height: 90, borderRadius: 14, background: v && g > 0 ? `${COLORS.money}33` : COLORS.bgSoft, border: `3px solid ${v && g > 0 ? COLORS.money : COLORS.line}`, opacity: k,
            display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT_BODY, fontWeight: 800, fontSize: 32, color: v && g > 0 ? COLORS.money : COLORS.dim, scale: String(v ? 1 + 0.2 * g * (1 - g) * 4 : 1) }}>
            {i + 1}
          </div>
        );
      })}
    </div>
  );
};

// ---------- чек: что на самом деле в карте за $15 ----------
const Receipt: React.FC<{ lines: { text: string; price: string; at: number; color?: string }[]; totalAt?: number; total?: string }> = ({ lines, totalAt, total }) => {
  const { p } = useP();
  return (
    <div style={{ width: 760, background: "#f5f1e8", borderRadius: "16px 16px 0 0", padding: "40px 50px 50px", boxShadow: "0 20px 0 rgba(0,0,0,.35)", color: COLORS.bg }}>
      <div style={{ fontFamily: FONT_HEAD, fontSize: 56, textAlign: "center", letterSpacing: "0.06em" }}>MEMBERSHIP</div>
      <div style={{ borderTop: `4px dashed ${COLORS.bg}55`, margin: "18px 0" }} />
      {lines.map((l) => (
        <div key={l.text} style={{ display: "flex", justifyContent: "space-between", fontFamily: FONT_BODY, fontWeight: 800, fontSize: 40, margin: "14px 0", opacity: p(l.at, l.at + 0.3, easeOut), translate: `${(1 - p(l.at, l.at + 0.3, easeOut)) * -30}px 0px`, color: l.color ?? COLORS.bg }}>
          <span>{l.text}</span><span style={{ fontFamily: FONT_HEAD, fontSize: 48 }}>{l.price}</span>
        </div>
      ))}
      {total && totalAt !== undefined && (
        <>
          <div style={{ borderTop: `4px dashed ${COLORS.bg}55`, margin: "18px 0", opacity: p(totalAt, totalAt + 0.3) }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: FONT_HEAD, fontSize: 64, color: COLORS.loss, opacity: p(totalAt, totalAt + 0.3, easeOut) }}><span>REALLY</span><span>{total}</span></div>
        </>
      )}
    </div>
  );
};

// ---------- карта: $15 переворачивается в $25 + $49 ----------
const FlipCard: React.FC<{ flipAt: number; front: string; back: string; backColor?: string }> = ({ flipAt, front, back, backColor = "#1b1b1f" }) => {
  const { p } = useP();
  const f = p(flipAt, flipAt + 0.6, easeInOut);
  const showBack = f > 0.5;
  return (
    <div style={{ width: 620, height: 380, borderRadius: 30, rotate: "-4deg", scale: String(1 - 0.08 * Math.sin(f * Math.PI)),
      transform: `perspective(1400px) rotateY(${f * 180}deg)`, background: showBack ? backColor : COLORS.blue, boxShadow: "0 24px 0 rgba(0,0,0,.35)",
      display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "40px 50px", boxSizing: "border-box" }}>
      <div style={{ transform: showBack ? "scaleX(-1)" : "none", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
        <div style={{ fontFamily: FONT_BODY, fontWeight: 800, fontSize: 34, letterSpacing: "0.2em", color: showBack ? COLORS.gold : COLORS.ink }}>{showBack ? "PREMIUM" : "MEMBER"}</div>
        <div style={{ fontFamily: FONT_HEAD, fontSize: 130, color: showBack ? COLORS.gold : COLORS.ink, lineHeight: 1 }}>{showBack ? back : front}</div>
        <div style={{ width: 90, height: 64, borderRadius: 10, background: showBack ? COLORS.gold : "#c9d6f0" }} />
      </div>
    </div>
  );
};

// ---------- карточка документа (исследование / иск) ----------
const DocCard: React.FC<{ kicker: string; title: string; lines: { t: string; at: number }[]; at?: number; stamp?: string; stampAt?: number; icon?: IconName }> = ({ kicker, title, lines, at = 0, stamp, stampAt = 99, icon = "paper" }) => {
  const { p } = useP();
  const k = p(at, at + 0.5, easeBack);
  return (
    <div style={{ position: "relative", width: 1150, background: "#efe6d2", borderRadius: 10, padding: "50px 70px", boxShadow: "0 24px 0 rgba(0,0,0,.35)", rotate: "-1.5deg", scale: String(0.8 + 0.2 * k), opacity: Math.min(1, k * 2), color: "#2a2418" }}>
      <Row gap={30} align="center">
        <svg width={90} height={90} viewBox="0 0 100 100"><IconPath name={icon} c="#5a4a30" /></svg>
        <div style={{ fontFamily: FONT_BODY, fontWeight: 800, fontSize: 30, letterSpacing: "0.16em", color: "#7a6640", textTransform: "uppercase" }}>{kicker}</div>
      </Row>
      <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700, fontSize: 70, lineHeight: 1.1, margin: "24px 0" }}>{title}</div>
      {lines.map(({ t: l, at: la }) => (
        <div key={l} style={{ fontFamily: "Georgia, serif", fontSize: 38, color: "#4a3f2c", margin: "8px 0", opacity: p(la, la + 0.3, easeOut), translate: `${(1 - p(la, la + 0.3, easeOut)) * -20}px 0px` }}>{l}</div>
      ))}
      {stamp && (
        <div style={{ position: "absolute", right: 60, bottom: 50, rotate: "-12deg", fontFamily: FONT_HEAD, fontSize: 64, color: COLORS.loss, border: `6px solid ${COLORS.loss}`, borderRadius: 12, padding: "4px 24px",
          opacity: p(stampAt, stampAt + 0.15), scale: String(1.6 - 0.6 * p(stampAt, stampAt + 0.25, easeOut)) }}>{stamp}</div>
      )}
    </div>
  );
};

// ---------- лабиринт отмены ----------
const CancelMaze: React.FC<{ steps: { icon: IconName; text: string; at: number }[]; endAt: number }> = ({ steps, endAt }) => {
  const { p } = useP();
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
      {steps.map((s, i) => {
        const k = p(s.at, s.at + 0.4, easeBack);
        return (
          <React.Fragment key={s.text}>
            {i > 0 && <div style={{ width: 60, height: 8, background: COLORS.dim, borderRadius: 4, opacity: k, scale: `${k} 1`, transformOrigin: "left" }} />}
            <div style={{ width: 250, display: "flex", flexDirection: "column", alignItems: "center", gap: 16, opacity: Math.min(1, k * 2), scale: String(0.6 + 0.4 * k) }}>
              <Icon name={s.icon} color={COLORS.ink} size={140} />
              <div style={{ fontFamily: FONT_BODY, fontWeight: 800, fontSize: 30, color: COLORS.ink, textAlign: "center", lineHeight: 1.2 }}>{s.text}</div>
            </div>
          </React.Fragment>
        );
      })}
      <div style={{ width: 60, height: 8, background: COLORS.loss, borderRadius: 4, opacity: p(endAt, endAt + 0.3) }} />
      <Pop at={endAt}><Icon name="lock" color={COLORS.loss} size={170} /></Pop>
    </div>
  );
};

// ---------- РАЗРЕЗ 2: студия сверху, места загораются ----------
const StudioTopView: React.FC<{ fillAt: number; emptyAt: number }> = ({ fillAt, emptyAt }) => {
  const { p } = useP();
  const rows = 4, cols = 9;
  const empty = new Set([4, 13, 30]);
  return (
    <div style={{ position: "relative", width: 1300, height: 640, borderRadius: 30, border: `6px solid ${COLORS.blue}`, background: `${COLORS.bgSoft}ee`, padding: 50, boxSizing: "border-box" }}>
            <div style={{ width: 300, height: 60, margin: "0 auto 40px", borderRadius: 12, background: COLORS.gold, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT_HEAD, fontSize: 40, color: COLORS.bg }}>COACH</div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 100px)`, gap: 30, justifyContent: "center" }}>
        {new Array(rows * cols).fill(0).map((_, i) => {
          const on = p(fillAt + i * 0.03, fillAt + 0.2 + i * 0.03, easeOut);
          const isEmpty = empty.has(i);
          const red = isEmpty ? p(emptyAt, emptyAt + 0.3, easeOut) : 0;
          const c = red > 0 ? COLORS.loss : on > 0.5 ? COLORS.money : COLORS.line;
          return (
            <div key={i} style={{ height: 70, borderRadius: 14, border: `4px solid ${c}`, background: `${c}${red > 0 ? "44" : on > 0.5 ? "33" : "00"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width={56} height={56} viewBox="0 0 100 100"><IconPath name="bike" c={c} /></svg>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ---------- РАЗРЕЗ 3: люкс-клуб по этажам ----------
const LuxuryCutaway: React.FC<{ arrowAt: number; priceAt: number }> = ({ arrowAt, priceAt }) => {
  const { p, t } = useP();
  const floors = [
    { name: "PERSONAL TRAINING", icon: "coach" as IconName, c: COLORS.gold },
    { name: "SPA & POOL", icon: "spa" as IconName, c: COLORS.blue },
    { name: "GYM FLOOR", icon: "dumbbell" as IconName, c: COLORS.blue },
    { name: "LOBBY · MEMBERSHIP", icon: "card" as IconName, c: COLORS.dim },
  ];
  return (
    <div style={{ position: "relative", width: 1400, height: 720 }}>
      {floors.map((f, i) => (
        <div key={f.name} style={{ position: "absolute", left: 300, top: 40 + i * 160, width: 800, height: 140, borderRadius: 16, background: COLORS.bgSoft, border: `5px solid ${f.c}`,
          display: "flex", alignItems: "center", gap: 30, padding: "0 40px", boxSizing: "border-box", opacity: p(i * 0.15, i * 0.15 + 0.4, easeOut) }}>
          <Icon name={f.icon} color={f.c} size={96} />
          <div style={{ fontFamily: FONT_HEAD, fontSize: 56, color: f.c }}>{f.name}</div>
        </div>
      ))}
      {[0, 1, 2].map((i) => {
        const k = p(arrowAt + i * 0.3, arrowAt + 0.6 + i * 0.3, easeOut);
        const y = 600 - 520 * ((t * 0.5 + i / 3) % 1);
        return (
          <div key={i} style={{ position: "absolute", left: 1150, top: y, opacity: k, fontFamily: FONT_HEAD, fontSize: 70, color: COLORS.money }}>$</div>
        );
      })}
      <div style={{ position: "absolute", left: 1150, top: 30, width: 8, height: 640, background: `${COLORS.money}55`, borderRadius: 4, opacity: p(arrowAt, arrowAt + 0.4) }} />
      <div style={{ position: "absolute", left: 1200, top: 50, opacity: p(priceAt, priceAt + 0.4, easeOut), scale: String(0.6 + 0.4 * p(priceAt, priceAt + 0.45, easeBack)) }}>
        <PriceTag label="Per session" price="$110–140" start={priceAt} rotate={5} />
      </div>
    </div>
  );
};

// ---------- карта клубов: франшиза против своих ----------
const ClubDots: React.FC<{ at: number; colorAt: number }> = ({ at, colorAt }) => {
  const { p } = useP();
  const n = 290; // 1 точка ≈ 10 клубов
  const own = new Set<number>();
  for (let i = 0; i < 29; i++) own.add((i * 97 + 13) % n);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(29, 36px)", gap: 10 }}>
      {new Array(n).fill(0).map((_, i) => {
        const k = p(at + i * 0.004, at + 0.25 + i * 0.004, easeOut);
        const c = p(colorAt + (i % 29) * 0.02, colorAt + 0.3 + (i % 29) * 0.02, easeOut);
        const color = own.has(i) ? COLORS.blue : c > 0.5 ? "#ff9f43" : COLORS.dim;
        return <div key={i} style={{ width: 36, height: 36, borderRadius: 18, background: color, opacity: k, scale: String(k) }} />;
      })}
    </div>
  );
};

// ---------- две колонки маржи ----------
const MarginBars: React.FC<{ rows: { label: string; rev: number; ebitda: number; at: number; pct: string; color: string }[] }> = ({ rows }) => {
  const { p } = useP();
  const max = 560;
  return (
    <div style={{ display: "flex", gap: 160, alignItems: "flex-end", height: 600 }}>
      {rows.map((r) => {
        const k = p(r.at, r.at + 1, easeExpo);
        const e = p(r.at + 0.8, r.at + 1.6, easeExpo);
        return (
          <div key={r.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: p(r.at - 0.2, r.at, easeOut) }}>
            <div style={{ fontFamily: FONT_HEAD, fontSize: 96, color: r.color, opacity: e }}>{r.pct}</div>
            <div style={{ position: "relative", width: 300, height: (r.rev / max) * 420 * k, background: `${COLORS.blue}55`, borderRadius: "14px 14px 0 0" }}>
              <div style={{ position: "absolute", bottom: 0, width: "100%", height: `${(r.ebitda / r.rev) * 100 * e}%`, background: r.color, borderRadius: "14px 14px 0 0", boxShadow: `0 0 30px ${r.color}66` }} />
            </div>
            <div style={{ fontFamily: FONT_BODY, fontWeight: 800, fontSize: 34, color: COLORS.ink, marginTop: 16, textAlign: "center", width: 420 }}>{r.label}</div>
            <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 28, color: COLORS.dim }}>${r.rev}M revenue · ${r.ebitda}M profit*</div>
          </div>
        );
      })}
    </div>
  );
};

// ---------- полоса: сколько платишь / сколько получает тренер ----------
const PaySplit: React.FC<{ at: number }> = ({ at }) => {
  const { p } = useP();
  const k = p(at, at + 1, easeInOut);
  const k2 = p(at + 1.2, at + 2, easeInOut);
  return (
    <div style={{ width: 1400 }}>
      <div style={{ fontFamily: FONT_BODY, fontWeight: 800, fontSize: 36, color: COLORS.ink, marginBottom: 14 }}>You pay ≈ $120</div>
      <div style={{ display: "flex", height: 110, borderRadius: 20, overflow: "hidden", background: COLORS.bgSoft }}>
        <div style={{ width: `${33 * k}%`, background: COLORS.money, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT_HEAD, fontSize: 52, color: COLORS.bg, whiteSpace: "nowrap", overflow: "hidden" }}>{k > 0.8 ? "TRAINER ~$40" : ""}</div>
        <div style={{ width: `${67 * k2}%`, background: COLORS.gold, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT_HEAD, fontSize: 52, color: COLORS.bg, whiteSpace: "nowrap", overflow: "hidden" }}>{k2 > 0.8 ? "THE CLUB KEEPS ~$80" : ""}</div>
      </div>
    </div>
  );
};

// ---------- калькулятор цены визита ----------
const Calc: React.FC<{ steps: { at: number }[] }> = ({ steps }) => {
  const [aAt, bAt, rAt] = steps.map((s) => s.at);
  const { p } = useP();
  const cell = (txt: string, at: number, color = COLORS.ink) => (
    <div style={{ fontFamily: FONT_HEAD, fontSize: 84, color, opacity: p(at, at + 0.35, easeOut), translate: `0px ${(1 - p(at, at + 0.35, easeOut)) * 30}px` }}>{txt}</div>
  );
  return (
    <div style={{ width: 1300, background: COLORS.bgSoft, borderRadius: 30, border: `4px solid ${COLORS.line}`, padding: "50px 70px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
      {cell("EVERYTHING YOU PAID LAST YEAR", aAt)}
      <div style={{ width: "90%", height: 10, background: COLORS.ink, borderRadius: 5, opacity: p(bAt, bAt + 0.3) }} />
      {cell("TIMES YOU ACTUALLY WENT", bAt)}
      {cell("= YOUR REAL PRICE PER VISIT", rAt, COLORS.gold)}
    </div>
  );
};

// ---------- «взрыв»: быстрые кадры-цифры ----------
const BurstCard: React.FC<{ icon: IconName; value: string; label: string; color: string }> = ({ icon, value, label, color }) => {
  const { p } = useP();
  const k = p(0, 0.25, easeBack);
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", background: `radial-gradient(circle at 50% 50%, ${color}33, transparent 60%)`, scale: String(1.15 - 0.15 * k) }}>
      <Row gap={60}>
        <Icon name={icon} color={color} size={220} />
        <Col gap={6}>
          <div style={{ fontFamily: FONT_HEAD, fontSize: 220, color, lineHeight: 1 }}>{value}</div>
          <Label color={COLORS.ink} size={44}>{label}</Label>
        </Col>
      </Row>
    </AbsoluteFill>
  );
};
const Burst: React.FC<{ cards: { icon: IconName; value: string; label: string; color: string; at: number }[]; dur: number }> = ({ cards, dur }) => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill>
      {cards.map((c, i) => {
        const end = i + 1 < cards.length ? cards[i + 1].at : dur;
        return (
          <Sequence key={i} from={Math.round(c.at * fps)} durationInFrames={Math.max(1, Math.round((end - c.at) * fps))} layout="none">
            <BurstCard {...c} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

// ---------- припев главы ----------
const Refrain: React.FC<{ n: number; not: string; is: React.ReactNode; at: number; markAt?: number }> = ({ n, not, is, at: isAt, markAt }) => {
  const { p } = useP();
  const s = p(1.2, 1.6, easeOut);
  return (
    <Col gap={36}>
      <Label color={COLORS.dim} size={36}>{`The trap at level ${n}`}</Label>
      <div style={{ position: "relative", fontFamily: FONT_HEAD, fontSize: 96, color: COLORS.dim, opacity: p(0.1, 0.5, easeOut) }}>
        {`ISN'T ${not}`}
        <div style={{ position: "absolute", left: "-2%", top: "52%", height: 10, width: `${104 * s}%`, background: COLORS.loss, borderRadius: 5, rotate: "-3deg" }} />
      </div>
      <Pop at={isAt}><div style={{ fontFamily: FONT_HEAD, fontSize: 120, color: COLORS.ink, textAlign: "center", maxWidth: 1600, lineHeight: 1.05 }}>{is}</div></Pop>
      {markAt !== undefined && <div style={{ height: 12, width: 900 * p(markAt, markAt + 0.6, easeInOut), background: COLORS.gold, borderRadius: 6, boxShadow: `0 0 24px ${COLORS.gold}` }} />}
    </Col>
  );
};
const Gold: React.FC<{ children: React.ReactNode }> = ({ children }) => <span style={{ color: COLORS.gold }}>{children}</span>;

// ---------- кнопка подписки ----------
const SubscribeBtn: React.FC<{ at: number; clickAt: number }> = ({ at, clickAt }) => {
  const { p } = useP();
  const c = p(clickAt, clickAt + 0.3, easeOut);
  return (
    <Pop at={at}>
      <div style={{ fontFamily: FONT_HEAD, fontSize: 80, color: c > 0.5 ? COLORS.ink : COLORS.bg, background: c > 0.5 ? COLORS.line : COLORS.loss, padding: "18px 70px", borderRadius: 18, scale: String(1 - 0.1 * Math.sin(c * Math.PI)) }}>
        {c > 0.5 ? "SUBSCRIBED" : "SUBSCRIBE"}
      </div>
    </Pop>
  );
};

// ---------- подпись-источник ----------
function Source({ at, children }: { at: number; children: React.ReactNode }) {
  const { p } = useP();
  return <div style={{ position: "absolute", left: 80, bottom: 50, fontFamily: FONT_BODY, fontWeight: 600, fontSize: 24, color: COLORS.dim, opacity: 0.85 * p(at, at + 0.5, easeOut) }}>{children}</div>;
}

// ---------- сцены по таймингу ----------
type Beat = { from: number; to: number; tag?: [number, string]; el?: React.ReactNode; stick?: StickSpec };

// главный герой-стикмен: один и тот же во всех роликах канала
const HERO = { id: "you", shirt: "#3b7be0", pants: "#2c3150", hair: "cap" as const, hairColor: "#2c3150" };

const BEATS: Beat[] = [
  { from: 0.0, to: 3.14, el: (<><Row gap={70}><Icon name="card" color={COLORS.blue} size={240} at={0.05} /><Col gap={10}><PriceTag label="Per month" price="$15" start={1.52} rotate={-5} /><Label at={2.32} color={COLORS.ink}>One gym membership</Label></Col></Row></>) },
  { from: 3.14, to: 6.74, el: (<><Headline text="They're betting you'll never use it" start={0.05} size={110} highlight={["never"]} /><Sp h={40} /><Icon name="gym" color={COLORS.loss} size={150} at={2.22} /></>) },
  { from: 6.74, to: 10.82, el: (<><Stat icon="people" at={0.05} label="members for every club" value={<Count to={7100} at={1.50} fmt={int} size={190} color={COLORS.gold} />} /><Sp h={30} /><Label at={0.3}>Planet Fitness · ~2,900 clubs</Label></>) },
  { from: 10.82, to: 15.70, el: (<><GymCutaway floodAt={0.05} capAt={2.02} badgeAt={2.86} /></>) },
  { from: 15.7, to: 18.82, el: (<><Headline text="That's not a mistake." start={0.05} size={120} /><Sp h={30} /><Headline text="That's the business." start={1.66} size={150} highlight={["business"]} /></>) },
  { from: 18.82, to: 23.78, stick: { location: "stage", time: "night", camera: { shot: "wide", move: "dolly-in", target: "you" }, screen: { lines: ["$15", "TO $400"] }, actors: [{ ...HERO, x: 1.8, z: 0.6, action: "point", face: "happy", facing: -30, talking: true }], title: { text: "THE GYM LADDER", at: 0.4, until: 4.6, position: "top" } } },
  { from: 23.78, to: 27.22, el: (<><Ladder at={[0.05, 0.45, 0.85, 1.25]} /><Label at={1.58} color={COLORS.ink}>4 levels · 4 different business models</Label></>) },
  { from: 27.22, to: 34.74, el: (<><Label at={0.05} color={COLORS.gold} size={46}>The twist</Label><Sp h={20} /><Headline text="America's biggest gym chain makes its best money" start={2.22} size={84} /><Sp h={30} /><Big at={5.42} color={COLORS.gold} size={150}>NOT FROM A GYM</Big></>) },
  { from: 34.74, to: 38.10, tag: [1, "Level 1 · The $15 gym"], el: (<><LevelPlate n={1} title="The $15 gym" price="$15 / MONTH" /></>) },
  { from: 38.1, to: 46.34, tag: [1, "Level 1 · The $15 gym"], el: (<><Label at={0.05}>Planet Fitness · end of 2025</Label><Sp h={50} /><Row gap={120}><Stat icon="people" at={3.02} label="members" value={<Count to={20.8e6} at={3.02} fmt={mil(1)} size={150} color={COLORS.gold} />} /><Stat icon="gym" color={COLORS.blue} at={5.22} label="clubs" value={<Count to={2896} at={5.22} fmt={int} size={150} color={COLORS.blue} />} /></Row><Source at={0.5}>Source: Planet Fitness 10-K, 2025</Source></>) },
  { from: 46.34, to: 52.02, tag: [1, "Level 1 · The $15 gym"], el: (<><Big at={0.05} size={110} color={COLORS.dim}>20.8M ÷ 2,896</Big><Sp h={40} /><Stat icon="people" at={2.02} label="members for every single club" value={<Count to={7182} at={2.02} fmt={int} size={180} color={COLORS.gold} />} /></>) },
  { from: 52.02, to: 58.98, stick: { location: "street", time: "sunset", camera: { shot: "wide", move: "dolly-in", target: "you" }, crowd: { count: 18, area: [-7, -3, 7, 1.2], action: "walk", facing: "camera", seed: 11, avoid: ["#3b7be0"] }, actors: [{ ...HERO, x: 0, z: 2, action: "idle", face: "surprised", beats: [{ at: 4.22, action: "facepalm", face: "worried" }] }], title: { text: "MONDAY · 6 P.M.", at: 0.3, until: 5.26, position: "top" } } },
  { from: 58.98, to: 66.42, tag: [1, "Level 1 · The $15 gym"], el: (<><Label at={0.05}>The company's own number</Label><Sp h={40} /><Stat icon="dumbbell" at={4.70} label="workouts logged in 2025" value={<Count to={650e6} at={4.70} fmt={mil(0)} size={190} color={COLORS.gold} />} /><Source at={0.5}>Source: Planet Fitness annual report, 2025</Source></>) },
  { from: 66.42, to: 72.10, tag: [1, "Level 1 · The $15 gym"], el: (<><Big at={0.05} size={110} color={COLORS.dim}>650M ÷ 20.8M</Big><Sp h={40} /><Stat icon="calendar" at={3.82} label="visits per member, per year" value={<Count to={31} at={3.82} fmt={int} size={200} color={COLORS.money} />} /></>) },
  { from: 72.1, to: 75.38, tag: [1, "Level 1 · The $15 gym"], el: (<><VisitCalendar at={0.05} /><Sp h={30} /><Label at={1.10} color={COLORS.money} size={48}>≈ once every 12 days</Label></>) },
  { from: 75.38, to: 82.50, tag: [1, "Level 1 · The $15 gym"], el: (<><Row gap={50}><Icon name="dumbbell" color={COLORS.money} size={140} at={0.05} /><Label at={0.2} color={COLORS.ink} size={50}>Includes regulars who come 5× a week</Label></Row><Sp h={60} /><Big at={5.70} color={COLORS.loss} size={130}>MANY BARELY COME AT ALL</Big></>) },
  { from: 82.5, to: 87.70, stick: { location: "room", camera: { shot: "wide", move: "dolly-in", target: [-3.5, 1, -6] }, actors: [{ ...HERO, x: -3.5, z: -6.2, action: "sit", face: "sleepy", facing: "camera", held: "phone" }], title: { text: "THE PERFECT MEMBER", at: 0.3, position: "top" } } },
  { from: 87.7, to: 91.70, tag: [1, "Level 1 · The $15 gym"], el: (<><Label at={0.05}>A member who stays home costs</Label><Sp h={50} /><Row gap={110}><Col><Icon name="dumbbell" color={COLORS.dim} size={170} at={0.1} /><Label at={0.1} color={COLORS.ink}>No sweat</Label></Col><Col><Icon name="towel" color={COLORS.dim} size={170} at={1.66} /><Label at={1.66} color={COLORS.ink}>No towels</Label></Col><Col><Icon name="people" color={COLORS.dim} size={170} at={2.62} /><Label at={2.62} color={COLORS.ink}>No crowd</Label></Col></Row></>) },
  { from: 91.7, to: 95.54, tag: [1, "Level 1 · The $15 gym"], el: (<><Row gap={70}><Icon name="card" color={COLORS.money} size={200} at={0.05} /><Col gap={10}><Big at={0.2} color={COLORS.money} size={190}>$15</Big><Label at={2.30} color={COLORS.ink} size={46}>Every month · on autopilot</Label></Col></Row></>) },
  { from: 95.54, to: 104.98, tag: [1, "Level 1 · The $15 gym"], el: (<><Row gap={90}><Receipt lines={[{ text: "Monthly dues", price: "$15", at: 0.1 }, { text: "Annual fee", price: "$49", at: 4.74, color: COLORS.loss }, { text: "Charged automatically", price: "1×/yr", at: 6.78 }]} /><Pop at={1.90}><PriceTag label="The bait" price="$15" start={1.90} color={COLORS.money} rotate={6} /></Pop></Row></>) },
  { from: 104.98, to: 113.38, tag: [1, "Level 1 · The $15 gym"], el: (<><Label at={0.05} color={COLORS.gold}>Then comes the upgrade</Label><Sp h={40} /><FlipCard flipAt={1.74} front="$15" back="$25" /><Sp h={50} /><Label at={5.18} color={COLORS.ink} size={42}>Any club · a guest · massage chairs</Label></>) },
  { from: 113.38, to: 120.34, tag: [1, "Level 1 · The $15 gym"], el: (<><Stat icon="star" at={0.05} label="of members had the premium card · mid-2025" value={<Count to={65.8} at={1.90} fmt={(v) => v.toFixed(1) + "%"} size={200} color={COLORS.gold} />} /><Sp h={40} /><Label at={4.86} color={COLORS.ink} size={50}>≈ 2 out of every 3 members</Label><Source at={0.5}>Source: Planet Fitness Q2 2025 earnings call</Source></>) },
  { from: 120.34, to: 124.50, stick: { location: "plaza", camera: { shot: "medium", move: "dolly-in", target: "you" }, actors: [{ ...HERO, x: 0, z: 0.6, held: "sign", heldText: "$15?", action: "idle", face: "worried", beats: [{ at: 2.2, action: "shrug", face: "smirk" }] }], title: { text: "NOT REALLY $15", at: 0.5, position: "top" } } },
  { from: 124.5, to: 129.62, tag: [1, "Level 1 · The $15 gym"], el: (<><Label at={0.05}>For most members</Label><Sp h={40} /><Row gap={60}><PriceTag label="A month" price="$25" start={1.42} rotate={-4} /><Big at={2.78} size={120} color={COLORS.dim}>+</Big><PriceTag label="Surprise" price="$49" start={3.98} color={COLORS.loss} rotate={5} /></Row></>) },
  { from: 129.62, to: 134.58, el: (<><Refrain n={1} not="THE PRICE" at={2.62} markAt={3.78} is={<>THE TRAP IS BELIEVING YOU'LL <Gold>GO</Gold></>} /></>) },
  { from: 134.58, to: 138.98, stick: { location: "street", variant: 2, camera: { shot: "wide", move: "pan-right", target: "you" }, actors: [{ ...HERO, x: -4, z: 0.6, action: "walk", face: "neutral", facing: "right", to: [5, 0.6] }], title: { text: "IT GETS WEIRD", at: 0.2, until: 3.6, position: "top" } } },
  { from: 138.98, to: 143.94, tag: [2, "Level 2 · The contract gym"], el: (<><Row gap={60}><Icon name="door" color={COLORS.loss} size={180} at={0.05} /><Headline text="It wants you to never leave" start={2.46} size={110} highlight={["leave"]} /></Row></>) },
  { from: 143.94, to: 146.98, tag: [2, "Level 2 · The contract gym"], el: (<><LevelPlate n={2} title="The full-service gym" price="~$70 / MONTH" color={COLORS.blue} /></>) },
  { from: 146.98, to: 152.10, tag: [2, "Level 2 · The contract gym"], el: (<><Row gap={90}><Col><Icon name="pool" color={COLORS.blue} size={160} at={0.05} /><Label at={0.05} color={COLORS.ink}>Pools</Label></Col><Col><Icon name="people" color={COLORS.blue} size={160} at={0.78} /><Label at={0.78} color={COLORS.ink}>Classes</Label></Col><Col><Icon name="dumbbell" color={COLORS.blue} size={160} at={1.58} /><Label at={1.58} color={COLORS.ink}>Courts</Label></Col><Col><Icon name="receipt" color={COLORS.loss} size={160} at={2.46} /><Label at={2.46} color={COLORS.loss}>Bigger bill</Label></Col></Row></>) },
  { from: 152.1, to: 164.50, tag: [2, "Level 2 · The contract gym"], el: (<><DocCard at={0.05} kicker="A study of three U.S. health clubs · 2006" title="Who pays for gyms they don't use?" lines={[{ t: "Stefano DellaVigna · UC Berkeley", at: 2.78 }, { t: "Ulrike Malmendier · Stanford", at: 5.22 }, { t: "3 years of swipe-card records", at: 8.18 }]} /></>) },
  { from: 164.5, to: 167.78, tag: [2, "Level 2 · The contract gym"], el: (<><Stat icon="people" at={0.05} label="members tracked" value={<Count to={7752} at={0.05} fmt={int} size={200} color={COLORS.gold} />} /></>) },
  { from: 167.78, to: 175.30, tag: [2, "Level 2 · The contract gym"], el: (<><Row gap={130}><Col gap={20}><Label at={0.05}>Monthly plan</Label><PriceTag label="A month" price="$70+" start={1.90} rotate={-4} /></Col><Stat icon="calendar" color={COLORS.money} at={5.50} label="visits a month" value={<Big at={5.50} size={190} color={COLORS.money}>4.3</Big>} /></Row></>) },
  { from: 175.3, to: 182.58, tag: [2, "Level 2 · The contract gym"], el: (<><Row gap={160}><Col gap={10}><Label at={0.05}>What they paid per visit</Label><MoneyCounter to={17} start={0.62} digits={0} size={220} color={COLORS.loss} /></Col><Col gap={10}><Label at={3.70}>A 10-visit pass</Label><MoneyCounter to={10} start={4.94} digits={0} size={220} color={COLORS.money} /></Col></Row><Source at={0.5}>Source: DellaVigna & Malmendier, American Economic Review, 2006</Source></>) },
  { from: 182.58, to: 186.58, tag: [2, "Level 2 · The contract gym"], el: (<><Label at={0.05}>The average member gave up</Label><Sp h={20} /><Row gap={50}><Icon name="money" color={COLORS.loss} size={170} at={0.2} /><MoneyCounter to={600} start={2.46} digits={0} size={230} color={COLORS.loss} /></Row></>) },
  { from: 186.58, to: 192.02, tag: [2, "Level 2 · The contract gym"], el: (<><DocCard at={0.05} kicker="American Economic Review · 2006" title="Paying Not to Go to the Gym" lines={[{ t: "DellaVigna & Malmendier", at: 1.0 }]} stamp="REAL TITLE" stampAt={3.02} /></>) },
  { from: 192.02, to: 196.58, stick: { location: "room", camera: { shot: "wide", move: "dolly-in", target: [-3.5, 1, -6] }, actors: [{ ...HERO, x: -3.5, z: -6.2, action: "sit", face: "neutral", facing: "camera", held: "phone", beats: [{ at: 2.6, face: "surprised" }] }], title: { text: "STILL PAYING", at: 2.90, position: "top" } } },
  { from: 196.58, to: 202.90, tag: [2, "Level 2 · The contract gym"], el: (<><Row gap={50} align="flex-end"><Col gap={14}><Icon name="door" color={COLORS.dim} size={150} at={0.05} /><Label at={0.05}>Last visit</Label></Col><PriceTag label="Billed" price="$70" start={1.74} color={COLORS.loss} rotate={-4} /><PriceTag label="Billed" price="$70" start={2.78} color={COLORS.loss} rotate={3} /><PriceTag label="Billed" price="$70" start={3.34} color={COLORS.loss} rotate={-2} /><Col gap={14}><Icon name="lock" color={COLORS.money} size={150} at={5.18} /><Label at={5.18} color={COLORS.money}>Cancelled</Label></Col></Row></>) },
  { from: 202.9, to: 206.10, tag: [2, "Level 2 · The contract gym"], el: (<><Headline text="Some gyms make leaving harder" start={0.05} size={120} highlight={["harder"]} /><Sp h={40} /><Icon name="lock" color={COLORS.loss} size={150} at={1.74} /></>) },
  { from: 206.1, to: 217.22, tag: [2, "Level 2 · The contract gym"], el: (<><DocCard at={0.05} icon="gavel" kicker="U.S. Federal Trade Commission · August 2025" title="FTC sues the operators of LA Fitness" lines={[{ t: "≈ 600 clubs", at: 7.42 }, { t: "≈ 3.7 million members", at: 8.78 }]} stamp="LAWSUIT" stampAt={3.90} /></>) },
  { from: 217.22, to: 229.94, tag: [2, "Level 2 · The contract gym"], el: (<><Label at={0.05}>To cancel, according to the FTC complaint</Label><Sp h={50} /><CancelMaze steps={[{ icon: "paper", text: "Find a hidden form", at: 2.54 }, { icon: "printer", text: "Print it", at: 5.54 }, { icon: "mail", text: "Certified mail", at: 7.34 }, { icon: "coach", text: "Or one specific employee", at: 9.42 }]} endAt={11.42} /><Sp h={40} /><Label at={11.42} color={COLORS.loss}>Business hours only</Label></>) },
  { from: 229.94, to: 236.18, tag: [2, "Level 2 · The contract gym"], el: (<><Label at={0.05}>The FTC says the hurdles kept</Label><Sp h={20} /><Row gap={50}><Icon name="money" color={COLORS.loss} size={170} at={2.46} /><Big at={2.46} color={COLORS.loss} size={150}>$100s OF MILLIONS</Big></Row><Sp h={20} /><Label at={4.30} color={COLORS.ink}>in unwanted fees flowing</Label></>) },
  { from: 236.18, to: 241.46, tag: [2, "Level 2 · The contract gym"], el: (<><Row gap={40}><Icon name="gavel" color={COLORS.dim} size={130} at={0.05} /><Label at={0.05} color={COLORS.ink} size={48}>Allegations · no verdict</Label></Row><Sp h={50} /><Headline text="But the pattern is easy to recognise" start={2.70} size={100} highlight={["pattern"]} /></>) },
  { from: 241.46, to: 248.02, stick: { split: { left: { bg: "#8fd6df", label: "Joining", camera: { shot: "medium" }, actors: [{ ...HERO, x: 0, z: 0, held: "sign", heldText: "5 MIN", action: "cheer", face: "grin" }] }, right: { bg: "#f2a7a0", label: "Leaving", camera: { shot: "medium", move: "dolly-in" }, actors: [{ id: "you2", x: 0, z: 0, shirt: "#3b7be0", pants: "#2c3150", hair: "cap", hairColor: "#2c3150", held: "sign", heldText: "PRINT · MAIL", action: "idle", face: "worried", beats: [{ at: 2.8, action: "facepalm", face: "sad" }] }] } } } },
  { from: 248.02, to: 254.34, el: (<><Refrain n={2} not="THE CONTRACT" at={2.78} markAt={5.10} is={<>QUITTING TAKES MORE <Gold>EFFORT</Gold> THAN PAYING</>} /></>) },
  { from: 254.34, to: 259.54, stick: { location: "stage", time: "night", camera: { shot: "medium", move: "dolly-in", target: "you" }, screen: { lines: ["SUBSCRIBE"] }, actors: [{ ...HERO, x: 0, z: 0.8, action: "wave", face: "grin", talking: true }], title: { text: "QUICK FAVOUR", at: 0.2, until: 3.5, position: "top" } } },
  { from: 259.54, to: 263.22, el: (<><Label at={0.05} color={COLORS.ink} size={48}>One everyday business · taken apart every week</Label><Sp h={50} /><SubscribeBtn at={0.2} clickAt={1.6} /></>) },
  { from: 263.22, to: 268.26, tag: [3, "Level 3 · The boutique studio"], el: (<><Headline text="So far you make them money by staying home" start={0.05} size={90} highlight={["home"]} /><Sp h={40} /><Big at={3.58} color={COLORS.gold} size={150}>NOW WE FLIP IT</Big></>) },
  { from: 268.26, to: 271.70, tag: [3, "Level 3 · The boutique studio"], el: (<><Row gap={50}><Icon name="star" color={COLORS.money} size={160} at={0.05} /><Headline text="Only pays if you show up" start={0.2} size={110} highlight={["show"]} /></Row></>) },
  { from: 271.7, to: 274.74, tag: [3, "Level 3 · The boutique studio"], el: (<><LevelPlate n={3} title="The boutique studio" price="PAY FOR THE CLASS" color={COLORS.money} /></>) },
  { from: 274.74, to: 278.90, tag: [3, "Level 3 · The boutique studio"], el: (<><Row gap={110}><Col><Icon name="bike" color={COLORS.money} size={170} at={0.05} /><Label at={0.05} color={COLORS.ink}>Spin</Label></Col><Col><Icon name="dumbbell" color={COLORS.money} size={170} at={0.86} /><Label at={0.86} color={COLORS.ink}>HIIT</Label></Col><Col><Icon name="seat" color={COLORS.money} size={170} at={2.46} /><Label at={2.46} color={COLORS.ink}>Reformer pilates</Label></Col></Row></>) },
  { from: 278.9, to: 286.66, tag: [3, "Level 3 · The boutique studio"], el: (<><Label at={0.05}>Unlimited plans at chains like Orangetheory</Label><Sp h={30} /><Row gap={50}><Icon name="calendar" color={COLORS.gold} size={170} at={4.18} /><Big at={4.18} color={COLORS.gold} size={170}>$160–$200+</Big></Row><Sp h={20} /><Label at={6.70} color={COLORS.ink}>a month · typical, varies by studio</Label></>) },
  { from: 286.66, to: 289.62, tag: [3, "Level 3 · The boutique studio"], el: (<><Headline text="The economics turn upside down" start={0.05} size={120} highlight={["upside"]} /></>) },
  { from: 289.62, to: 302.42, tag: [3, "Level 3 · The boutique studio"], el: (<><StudioTopView fillAt={2.14} emptyAt={6.86} /><Sp h={30} /><Row gap={80}><Label at={5.02} color={COLORS.ink}>50 minutes at a time</Label><Label at={10.70} color={COLORS.loss}>Like an empty hotel room</Label></Row></>) },
  { from: 302.42, to: 307.38, tag: [3, "Level 3 · The boutique studio"], el: (<><DocCard at={0.05} kicker="SoulCycle IPO filing (Form S-1) · 2015" title="The books, opened" lines={[{ t: "Average studio, 2014", at: 2.4 }]} /></>) },
  { from: 307.38, to: 316.34, tag: [3, "Level 3 · The boutique studio"], el: (<><Label at={0.05}>SoulCycle · average studio · 2014</Label><Sp h={40} /><Row gap={120}><Stat icon="money" at={3.50} label="a year" value={<Big at={3.50} size={170} color={COLORS.gold}>$4M</Big>} /><Stat icon="star" color={COLORS.money} at={6.66} label="studio margin" value={<Count to={53} at={6.66} fmt={(v) => Math.round(v) + "%"} size={170} color={COLORS.money} />} /></Row><Source at={0.5}>Source: SoulCycle Form S-1 (SEC), 2015</Source></>) },
  { from: 316.34, to: 318.82, tag: [3, "Level 3 · The boutique studio"], el: (<><Row gap={50}><Icon name="bike" color={COLORS.gold} size={180} at={0.05} /><Big at={0.1} size={170} color={COLORS.ink}>ONE ROOM.</Big></Row></>) },
  { from: 318.82, to: 328.50, stick: { location: "studio", bg: "#8fd6df", camera: { shot: "wide", move: "dolly-in", target: [0, 1, 0] }, actors: [{ id: "coach", x: 1.4, z: 0.4, shirt: "#ffd23f", pants: "#2b2b2b", hair: "headband", hairColor: "#5a3a2a", action: "wave", face: "grin", facing: -40, talking: true }, { ...HERO, x: -1.4, z: 0.6, action: "idle", face: "happy", facing: 40, beats: [{ at: 5.5, action: "wave", face: "grin" }] }], title: { text: "WE MISSED YOU, SAM!", at: 6.78, position: "top" } } },
  { from: 328.5, to: 332.42, tag: [3, "Level 3 · The boutique studio"], el: (<><Row gap={50}><Icon name="star" color={COLORS.gold} size={170} at={0.05} /><Headline text="Best customer: never misses a class" start={0.2} size={96} highlight={["never"]} /></Row></>) },
  { from: 332.42, to: 340.74, el: (<><Refrain n={3} not="THE PRICE PER CLASS" at={3.34} markAt={5.98} is={<>ONCE THEY KNOW YOUR <Gold>NAME</Gold>, YOU STOP COMPARING PRICES</>} /></>) },
  { from: 340.74, to: 352.42, el: (<><Burst dur={11.68} cards={[{ icon: "people", value: "7,100", label: "members per club", color: COLORS.gold, at: 0 }, { icon: "calendar", value: "31", label: "visits a year", color: COLORS.money, at: 2.46 }, { icon: "receipt", value: "$49", label: "annual fee", color: COLORS.loss, at: 4.30 }, { icon: "money", value: "$17", label: "per visit", color: COLORS.loss, at: 6.30 }, { icon: "bike", value: "$4M", label: "per studio", color: COLORS.gold, at: 8.30 }, { icon: "crown", value: "$400", label: "one more step", color: COLORS.blue, at: 10.30 }]} /></>) },
  { from: 352.42, to: 355.06, tag: [4, "Level 4 · The luxury club"], el: (<><LevelPlate n={4} title="The luxury club" price="$205–$395 / MONTH" color={COLORS.gold} /></>) },
  { from: 355.06, to: 365.54, tag: [4, "Level 4 · The luxury club"], el: (<><Label at={0.05}>Equinox · standard membership</Label><Sp h={30} /><Row gap={50}><Icon name="crown" color={COLORS.gold} size={170} at={3.34} /><Big at={3.34} size={180} color={COLORS.gold}>$205–$395</Big></Row><Sp h={20} /><Label at={7.10} color={COLORS.ink}>a month · depends on city & how many clubs</Label><Source at={0.5}>Source: NerdWallet survey of 10 U.S. clubs, 2025</Source></>) },
  { from: 365.54, to: 370.50, tag: [4, "Level 4 · The luxury club"], el: (<><Row gap={110}><Col><Icon name="towel" color={COLORS.gold} size={170} at={0.05} /><Label at={0.05} color={COLORS.ink}>Eucalyptus towels</Label></Col><Col><Icon name="spa" color={COLORS.gold} size={170} at={1.74} /><Label at={1.74} color={COLORS.ink}>A spa</Label></Col><Col><Icon name="pool" color={COLORS.gold} size={170} at={2.78} /><Label at={2.78} color={COLORS.ink}>A pool (used twice)</Label></Col></Row></>) },
  { from: 370.5, to: 374.98, tag: [4, "Level 4 · The luxury club"], el: (<><Headline text="The real product:" start={0.05} size={110} /><Sp h={20} /><Headline text="who isn't there" start={3.02} size={170} highlight={["isn't"]} /></>) },
  { from: 374.98, to: 382.90, stick: { location: "plaza", camera: { shot: "wide", move: "dolly-in", target: "you" }, crowd: { count: 3, area: [-6, -3, 6, -1.5], action: "idle", facing: "away", seed: 5, avoid: ["#3b7be0"] }, actors: [{ ...HERO, x: 0, z: 0.8, held: "cup", action: "idle", face: "smirk" }], title: { text: "A QUIETER FLOOR", at: 4.06, position: "top" } } },
  { from: 382.9, to: 397.78, tag: [4, "Level 4 · The luxury club"], el: (<><LuxuryCutaway arrowAt={2.86} priceAt={9.98} /><Sp h={20} /><Row gap={60}><Label size={30} at={5.50} color={COLORS.gold}>Real money: training</Label><Label size={30} at={6.70} color={COLORS.dim}>Big cities</Label><Label size={30} at={12.82} color={COLORS.ink}>Billed on top of dues</Label></Row></>) },
  { from: 397.78, to: 400.50, tag: [4, "Level 4 · The luxury club"], el: (<><Row gap={50}><Icon name="coach" color={COLORS.gold} size={170} at={0.05} /><Headline text="How much reaches the trainer?" start={0.15} size={110} highlight={["trainer"]} /></Row></>) },
  { from: 400.5, to: 412.82, tag: [4, "Level 4 · The luxury club"], el: (<><DocCard at={0.05} kicker="Equinox job ads · personal trainer" title="Pay transparency" lines={[{ t: "$39.50–$94 per session", at: 2.78 }, { t: "Depends on the trainer's tier", at: 6.14 }, { t: "≈ $16 an hour between clients", at: 8.38 }]} /></>) },
  { from: 412.82, to: 420.58, tag: [4, "Level 4 · The luxury club"], el: (<><Label at={0.05}>A newer trainer · one session</Label><Sp h={40} /><PaySplit at={1.74} /><Sp h={50} /><Big at={5.90} size={110} color={COLORS.gold}>THE CLUB KEEPS THE REST</Big></>) },
  { from: 420.58, to: 426.70, el: (<><Refrain n={4} not="THE MEMBERSHIP" at={2.78} markAt={4.70} is={<>THE MEMBERSHIP IS THE <Gold>CHEAP</Gold> PART</>} /></>) },
  { from: 426.7, to: 432.58, stick: { location: "stage", time: "night", camera: { shot: "wide", move: "dolly-in", target: "you" }, screen: { lines: ["BEST", "BUSINESS?"] }, actors: [{ ...HERO, x: 0, z: 0.8, action: "think", face: "worried", beats: [{ at: 2.50, action: "shrug", face: "smirk" }] }], title: { text: "NONE OF THE FOUR", at: 2.50, until: 3.86, position: "top" } } },
  { from: 432.58, to: 438.90, tag: [5, "The twist"], el: (<><Ladder at={[0.05, 0.05, 0.05, 0.05]} active={0} /><Headline text="Most clubs aren't theirs" start={2.30} size={100} highlight={["aren't"]} /></>) },
  { from: 438.9, to: 445.94, tag: [5, "The twist"], el: (<><Label at={0.05} color={COLORS.ink}>2,896 Planet Fitness clubs · 1 dot ≈ 10 clubs</Label><Sp h={30} /><ClubDots at={0.05} colorAt={3.26} /><Sp h={30} /><Row gap={60}><Label at={5.02} color="#ff9f43" size={44}>2,604 franchisee-owned</Label><Label at={5.02} color={COLORS.blue} size={44}>292 company-owned</Label></Row><Source at={0.5}>Source: Planet Fitness 10-K, 2025</Source></>) },
  { from: 445.94, to: 451.70, tag: [5, "The twist"], el: (<><Label at={0.05}>The franchise owner pays</Label><Sp h={40} /><Row gap={80}><Col><Icon name="gym" color={COLORS.loss} size={150} at={1.10} /><Label at={1.10} color={COLORS.ink}>Rent</Label></Col><Col><Icon name="people" color={COLORS.loss} size={150} at={1.78} /><Label at={1.78} color={COLORS.ink}>Staff</Label></Col><Col><Icon name="clock" color={COLORS.loss} size={150} at={2.58} /><Label at={2.58} color={COLORS.ink}>Electricity</Label></Col><Col><Icon name="treadmill" color={COLORS.loss} size={150} at={3.90} /><Label at={3.90} color={COLORS.ink}>Broken treadmills</Label></Col></Row></>) },
  { from: 451.7, to: 457.30, tag: [5, "The twist"], el: (<><Row gap={60}><Icon name="crown" color={COLORS.gold} size={200} at={0.05} /><Col gap={10}><Label at={0.2} color={COLORS.ink}>Royalty off the top</Label><Big at={3.50} size={240} color={COLORS.gold}>7%</Big><Label at={4.26}>of franchise sales</Label></Col></Row></>) },
  { from: 457.3, to: 467.54, tag: [5, "The twist"], el: (<><Label at={0.05}>Franchise business · 2025</Label><Sp h={40} /><Row gap={120}><Stat icon="money" color={COLORS.blue} at={3.42} label="revenue" value={<Count to={468} at={3.42} fmt={(v) => "$" + Math.round(v) + "M"} size={150} color={COLORS.blue} />} /><Stat icon="star" color={COLORS.money} at={6.22} label="adjusted EBITDA" value={<Count to={336.6} at={6.22} fmt={(v) => "$" + v.toFixed(1) + "M"} size={150} color={COLORS.money} />} /></Row><Source at={0.5}>Source: Planet Fitness 10-K & Q4 2025 results</Source></>) },
  { from: 467.54, to: 471.06, tag: [5, "The twist"], el: (<><Label at={0.05}>Franchise margin</Label><Row gap={50}><Icon name="crown" color={COLORS.money} size={190} at={0.1} /><Count to={72} at={0.1} dur={0.9} fmt={(v) => "~" + Math.round(v) + "%"} size={280} color={COLORS.money} /></Row></>) },
  { from: 471.06, to: 481.86, tag: [5, "The twist"], el: (<><MarginBars rows={[{ label: "Franchising", rev: 468, ebitda: 336.6, pct: "~72%", color: COLORS.money, at: 0.05 }, { label: "Clubs it runs itself", rev: 546, ebitda: 206.3, pct: "~38%", color: COLORS.blue, at: 3.06 }]} /><Label at={8.94} color={COLORS.blue} size={44}>Running gyms itself: ~38%</Label><Source at={0.5}>*adjusted EBITDA · Planet Fitness Q4 2025 results</Source></>) },
  { from: 481.86, to: 485.62, tag: [5, "The twist"], el: (<><DocCard at={0.05} icon="receipt" kicker="Planet Fitness 10-K · 2025" title="One more line in the report" lines={[{ t: "Revenue by segment", at: 0.8 }]} stamp="EQUIPMENT" stampAt={2.78} /></>) },
  { from: 485.62, to: 493.38, tag: [5, "The twist"], el: (<><Row gap={60}><Icon name="truck" color={COLORS.gold} size={200} at={0.05} /><Col gap={14}><Label at={0.2} color={COLORS.ink} size={48}>It sells the machines</Label><Label at={2.46} color={COLORS.gold} size={48}>to its own franchisees</Label><Label at={4.86} color={COLORS.ink} size={40}>new clubs + replacing old machines</Label></Col></Row></>) },
  { from: 493.38, to: 503.22, tag: [5, "The twist"], el: (<><Label at={0.05}>Equipment sales · 2025</Label><Row gap={50}><Icon name="treadmill" color={COLORS.gold} size={180} at={0.1} /><Count to={310} at={1.98} fmt={(v) => "$" + Math.round(v) + "M"} size={230} color={COLORS.gold} /></Row><Sp h={30} /><Big at={4.30} size={110} color={COLORS.ink}>≈ 1/4 OF ALL REVENUE</Big><Source at={0.5}>Source: Planet Fitness 10-K, 2025</Source></>) },
  { from: 503.22, to: 511.38, stick: { location: "street", time: "sunset", camera: { shot: "wide", move: "dolly-in", target: "you" }, props: [{ type: "box", x: -3, z: -1.5 }, { type: "box", x: -2.2, z: -1.8 }, { type: "box", x: 3, z: -1.6 }], crowd: { count: 6, area: [-6, -2.5, 6, -1], action: "walk", seed: 3, avoid: ["#3b7be0"] }, actors: [{ ...HERO, x: 0, z: 0.8, held: "sign", heldText: "BRAND", action: "idle", face: "smirk", beats: [{ at: 3.74, action: "cheer", face: "grin" }] }], title: { text: "OWN THE BRAND", at: 3.74, position: "top" } } },
  { from: 511.38, to: 513.70, tag: [6, "Your real price per visit"], el: (<><Row gap={50}><Icon name="money" color={COLORS.money} size={170} at={0.05} /><Headline text="Now: your money" start={0.15} size={130} highlight={["your"]} /></Row></>) },
  { from: 513.7, to: 524.26, tag: [6, "Your real price per visit"], el: (<><Calc steps={[{ at: 0.05 }, { at: 5.10 }, { at: 8.22 }]} /><Sp h={30} /><Label at={2.78} color={COLORS.dim}>Dues · fees · all of it</Label></>) },
  { from: 524.26, to: 540.98, tag: [6, "Your real price per visit"], el: (<><Label at={0.05} color={COLORS.ink} size={46}>Each level's favourite member</Label><Sp h={40} /><Col gap={26}><Pop at={3.90} from="left"><Row gap={30}><Icon name="sofa" color={COLORS.gold} size={100} /><Label color={COLORS.ink} size={44}>$15 gym · the one who never comes</Label></Row></Pop><Pop at={6.86} from="left"><Row gap={30}><Icon name="lock" color={COLORS.blue} size={100} /><Label color={COLORS.ink} size={44}>Contract gym · the one who can't leave</Label></Row></Pop><Pop at={9.98} from="left"><Row gap={30}><Icon name="star" color={COLORS.money} size={100} /><Label color={COLORS.ink} size={44}>Studio · the one who never misses</Label></Row></Pop><Pop at={13.02} from="left"><Row gap={30}><Icon name="coach" color={COLORS.gold} size={100} /><Label color={COLORS.ink} size={44}>Luxury club · the one who buys the trainer</Label></Row></Pop></Col></>) },
  { from: 540.98, to: 543.38, stick: { location: "plaza", camera: { shot: "wide", move: "dolly-in", target: "you" }, actors: [{ id: "a1", x: -3.6, z: 0, shirt: "#ffd23f", hair: "bob", hairColor: "#5a3a2a", held: "sign", heldText: "$15", action: "idle", face: "sleepy" }, { id: "a2", x: -1.2, z: 0, shirt: "#4da3ff", hair: "puff", hairColor: "#2b2b2b", held: "sign", heldText: "$70", action: "idle", face: "worried" }, { ...HERO, x: 1.2, z: 0.4, held: "sign", heldText: "CLASS", action: "cheer", face: "grin" }, { id: "a4", x: 3.6, z: 0, shirt: "#2fdc7f", hair: "bun", hairColor: "#7a4a2a", held: "sign", heldText: "$400", action: "idle", face: "smirk" }], title: { text: "WHICH ONE ARE YOU?", at: 0.1, position: "top" } } },
  { from: 543.38, to: 548.70, el: (<><Label at={0.05}>Next week</Label><Sp h={20} /><Row gap={50}><Icon name="flag" color={COLORS.gold} size={170} at={0.1} /><Headline text="How airports make money" start={1.06} size={120} highlight={["airports"]} /></Row><Sp h={30} /><Label at={2.94} color={COLORS.ink} size={46}>Hint: look at the parking lot</Label></>) },
  { from: 548.7, to: 555.46, el: (<><Label at={0.05} color={COLORS.ink}>While you watched this video…</Label><Sp h={30} /><MoneyCounter to={94500} start={0.6} dur={5} digits={0} size={230} color={COLORS.gold} /><Sp h={20} /><Label at={2.74} size={44}>billed to Planet Fitness members · dues & fees</Label><Source at={0.5}>$5.3B a year ÷ 31.5M seconds ≈ $168 a second · Planet Fitness 10-K, 2025</Source></>) },
  { from: 555.46, to: 562.00, stick: { location: "stage", time: "night", camera: { shot: "medium", move: "dolly-in", target: "you" }, screen: { lines: ["SEE YOU", "NEXT WEEK"] }, actors: [{ ...HERO, x: 0, z: 0.8, action: "wave", face: "grin" }], title: { text: "HIDDEN MARGIN", at: 0.6, position: "top" } } },
];

// ---------- реальные кадры под инфографикой: секунда начала сцены -> файл в public/broll ----------
// Видео: Pexels (бесплатная лицензия, указывать автора не нужно).
const BROLL: Record<number, string> = {
  0.0: "ep02/G05.mp4", 3.14: "ep02/G01.mp4", 6.74: "ep02/G03.mp4", 15.7: "ep02/G02.mp4", 27.22: "ep02/G29.mp4", 34.74: "ep02/G04.mp4", 38.1: "ep02/G25.mp4", 46.34: "ep02/G03.mp4", 58.98: "ep02/G27.mp4", 66.42: "ep02/G27.mp4", 72.1: "ep02/G24.mp4", 75.38: "ep02/G04.mp4", 87.7: "ep02/G06.mp4", 91.7: "ep02/G09.mp4", 104.98: "ep02/G26.mp4", 113.38: "ep02/G26.mp4", 124.5: "ep02/G10.mp4", 138.98: "ep02/G16.mp4", 146.98: "ep02/G15.mp4", 152.1: "ep02/G24.mp4", 164.5: "ep02/G25.mp4", 167.78: "ep02/G24.mp4", 182.58: "ep02/G10.mp4", 186.58: "ep02/G22.mp4", 196.58: "ep02/G08.mp4", 202.9: "ep02/G16.mp4", 206.1: "ep02/G16.mp4", 217.22: "ep02/G22.mp4", 229.94: "ep02/G22.mp4", 236.18: "ep02/G16.mp4", 263.22: "ep02/G12.mp4", 268.26: "ep02/G11.mp4", 274.74: "ep02/G13.mp4", 278.9: "ep02/G14.mp4", 286.66: "ep02/G28.mp4", 302.42: "ep02/G11.mp4", 307.38: "ep02/G12.mp4", 316.34: "ep02/G11.mp4", 328.5: "ep02/G13.mp4", 352.42: "ep02/G18.mp4", 355.06: "ep02/G18.mp4", 365.54: "ep02/G17.mp4", 370.5: "ep02/G30.mp4", 397.78: "ep02/G19.mp4", 400.5: "ep02/G19.mp4", 412.82: "ep02/G20.mp4", 432.58: "ep02/G01.mp4", 445.94: "ep02/G02.mp4", 451.7: "ep02/G25.mp4", 457.3: "ep02/G29.mp4", 467.54: "ep02/G29.mp4", 481.86: "ep02/G21.mp4", 485.62: "ep02/G21.mp4", 493.38: "ep02/G21.mp4", 511.38: "ep02/G08.mp4", 513.7: "ep02/G08.mp4", 524.26: "ep02/G25.mp4", 543.38: "ep02/G30.mp4", 548.7: "ep02/G01.mp4",
};
const BRoll: React.FC<{ file: string; dur: number }> = ({ file, dur }) => {
  const { p } = useP();
  const k = p(0, dur);
  return (
    <AbsoluteFill style={{ opacity: p(0, 0.2, easeOut) * (1 - p(dur - 0.2, dur, easeInOut)) }}>
      <Video src={staticFile(`broll/${file}`)} muted loop style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", scale: String(1.04 + 0.1 * k) }} />
      <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(13,19,34,.50) 0%, rgba(13,19,34,.62) 55%, rgba(13,19,34,.85) 100%)" }} />
    </AbsoluteFill>
  );
};

// ---------- звуковые эффекты: секунда начала сцены -> [звук, секунда от начала сцены, громкость?] ----------
type Sfx = [string, number, number?];
const SFX: Record<number, Sfx[]> = {
  0.0: [["pop", 1.52]],
  6.74: [["pop", 0.05]],
  10.82: [["tick", 2.02, 0.35], ["impact", 2.86, 0.22]],
  15.7: [["impact", 2.06, 0.25]],
  23.78: [["click", 0.05], ["click", 0.45], ["click", 0.85], ["click", 1.25]],
  27.22: [["ding", 5.42, 0.2]],
  34.74: [["pop", 0.05]],
  46.34: [["cash", 2.02, 0.18]],
  66.42: [["pop", 3.82]],
  72.1: [["tick", 1.0, 0.35], ["tick", 1.5, 0.35], ["tick", 2.0, 0.35]],
  87.7: [["click", 0.1], ["click", 1.66], ["click", 2.62]],
  91.7: [["cash", 0.3, 0.2]],
  95.54: [["pop", 1.90], ["cash", 4.74, 0.2]],
  104.98: [["sparkle", 1.74, 0.18]],
  124.5: [["pop", 1.42], ["pop", 3.98]],
  129.62: [["thud", 2.62, 0.3]],
  138.98: [["thud", 3.34, 0.25]],
  143.94: [["pop", 0.05]],
  146.98: [["click", 0.05], ["click", 0.78], ["click", 1.58], ["pop", 2.46]],
  152.1: [["scribble", 8.18, 0.15]],
  167.78: [["pop", 1.90], ["pop", 5.50]],
  175.3: [["cash", 0.62, 0.2], ["pop", 4.94]],
  182.58: [["cash", 2.46, 0.22]],
  186.58: [["thud", 3.02, 0.25]],
  196.58: [["cash", 1.74, 0.15], ["cash", 2.78, 0.15], ["cash", 3.34, 0.15]],
  206.1: [["thud", 3.90, 0.25]],
  217.22: [["click", 2.54], ["click", 5.54], ["click", 7.34], ["click", 9.42], ["buzz", 11.42, 0.16]],
  229.94: [["cash", 2.46, 0.2]],
  248.02: [["thud", 2.78, 0.3]],
  259.54: [["click", 1.6]],
  263.22: [["rise", 3.58, 0.2]],
  271.7: [["pop", 0.05]],
  274.74: [["click", 0.05], ["click", 0.86], ["click", 2.46]],
  278.9: [["cash", 4.18, 0.18]],
  289.62: [["pop", 2.14], ["buzz", 6.86, 0.16]],
  307.38: [["cash", 3.50, 0.2], ["ding", 6.66, 0.18]],
  332.42: [["thud", 3.34, 0.3]],
  340.74: [["impact", 0, 0.18], ["impact", 2.46, 0.18], ["impact", 4.30, 0.18], ["impact", 6.30, 0.18], ["impact", 8.30, 0.18], ["rise", 10.30, 0.2]],
  352.42: [["pop", 0.05]],
  355.06: [["cash", 3.34, 0.2]],
  365.54: [["click", 0.05], ["click", 1.74], ["click", 2.78]],
  370.5: [["ding", 3.02, 0.18]],
  382.9: [["rise", 2.86, 0.18], ["cash", 9.98, 0.2]],
  400.5: [["scribble", 2.78, 0.15]],
  412.82: [["cash", 5.90, 0.2]],
  420.58: [["thud", 2.78, 0.3]],
  438.9: [["pop", 5.02]],
  445.94: [["click", 1.10], ["click", 1.78], ["click", 2.58], ["click", 3.90]],
  451.7: [["ding", 3.50, 0.2]],
  457.3: [["cash", 6.22, 0.2]],
  467.54: [["ding", 0.9, 0.22]],
  471.06: [["pop", 3.06], ["thud", 8.94, 0.2]],
  481.86: [["thud", 2.78, 0.25]],
  493.38: [["cash", 1.98, 0.2], ["ding", 4.30, 0.2]],
  513.7: [["click", 5.10], ["ding", 8.22, 0.2]],
  524.26: [["click", 3.90], ["click", 6.86], ["click", 9.98], ["click", 13.02]],
  543.38: [["pop", 2.94]],
  548.7: [["cash", 1.6, 0.18], ["cash", 3.4, 0.18], ["ding", 5.7, 0.22]],
};
const SfxTrack: React.FC<{ beatFrom: number }> = ({ beatFrom }) => {
  const { fps } = useVideoConfig();
  const list: Sfx[] = SFX[beatFrom] ?? [];
  return (
    <>
      {list.map(([name, at, vol], i) => (
        <Sequence key={i} from={Math.round(at * fps)} durationInFrames={Math.round(2 * fps)} layout="none">
          <Audio src={staticFile(`sfx/${name}.wav`)} volume={vol ?? 0.22} />
        </Sequence>
      ))}
    </>
  );
};

function StickFade({ dur, children }: { dur: number; children: React.ReactNode }) {
  const { p } = useP();
  return <AbsoluteFill style={{ opacity: p(0, 0.2, easeOut) * (1 - p(dur - 0.2, dur, easeInOut)) }}>{children}</AbsoluteFill>;
}

// ---------- главный ролик ----------
export const Ep02Gyms: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: COLORS.bg }}>
      <GridBg />
      <Audio src={staticFile("audio/ep02-voiceover.mp3")} />
      <Audio src={staticFile("audio/ep02-music.mp3")} />
      {BEATS.map((b, i) => (
        <Sequence key={i} from={Math.round(b.from * fps)} durationInFrames={Math.max(1, Math.round((b.to - b.from) * fps))} name={`Beat ${i + 1}`}>
          {!b.stick && BROLL[b.from] && <BRoll file={BROLL[b.from]} dur={b.to - b.from} />}
          {b.stick ? <StickFade dur={b.to - b.from}><StickScene spec={b.stick} len={b.to - b.from} /></StickFade> : <Wrap dur={b.to - b.from}>{b.el}</Wrap>}
          {b.tag && <ChapterTag n={b.tag[0]} title={b.tag[1]} start={0} />}
          <SfxTrack beatFrom={b.from} />
        </Sequence>
      ))}
      <ChannelBug />
    </AbsoluteFill>
  );
};
