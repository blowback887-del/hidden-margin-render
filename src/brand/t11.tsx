import React from "react";
import { Easing } from "remotion";
import { useT } from "./hm";
import { C6, SANS, SERIF } from "./hm6";

// ===================================================================
// T11 «The Big Mac Costs the Same as 1968. So Why Can't You Afford It?» (28.11.2026) — графика выпуска.
// Визуальная идея: ТРИ СЕКУНДОМЕРА — цена Big Mac в минутах работы:
//   10 MIN (1968, средний рядовой работник) · 11 MIN (сегодня) · 51 MIN (федеральный минимум $7.25).
//   Третий секундомер размыт с первой минуты до разгадки в PART 9; в финале — «10 MIN / 51 MIN».
//   Отличие от T06 (чек), T07 (след денег), T08 (табло), T09 (бирка), T10 (зал сверху).
// Нормы (урок T04): размеры заданы заранее; новое только проявляется (opacity/transform), соседи не двигаются.
// Все цифры — из cloud/voice/t11-text/script.md (источники — research.md).
// ===================================================================

const easeBack = Easing.out(Easing.back(1.4));
const easeOut = Easing.out(Easing.cubic);
const PAPER = "#F4EEDD";
const INK = "#1E2326";
const BILL = "#7E9A78";

const Note: React.FC<{ children: React.ReactNode; o?: number; color?: string; size?: number }> = ({ children, o = 1, color = C6.mint, size = 22 }) => (
  <div style={{ opacity: 0.92 * o, fontFamily: SANS, fontWeight: 600, fontSize: size, letterSpacing: "0.18em", color, textTransform: "uppercase", textAlign: "center", whiteSpace: "nowrap" }}>{children}</div>
);

export type Watch = {
  min: number;            // до какой минуты бежит стрелка
  label: string;          // «1968»
  sub?: string;           // «AVERAGE WORKER»
  at?: number;            // появление
  spinAt?: number;        // старт стрелки (по умолчанию at + 0.25)
  spin?: number;          // длительность пробега, с
  color?: string;         // цвет дуги
  redAt?: number;         // дуга и цифра становятся красными
  blurAt?: number;        // секундомер уходит в размытие (тайна)
  revealAt?: number;      // размытие снимается
  blurred?: boolean;      // размыт с самого начала
  still?: boolean;        // уже стоит на своей минуте (без пробега)
  q?: boolean;            // в размытом виде вместо цифры — «?»
};

/** Секундомер: циферблат на 60 минут, дуга пройденных минут, стрелка, цифра в центре. Ничего не дрожит. */
export const Stopwatch: React.FC<Watch & { size?: number }> = ({ min, label, sub, at = 0.05, spinAt, spin = 1.4, color = C6.accent, redAt, blurAt, revealAt, blurred, still, q, size = 380 }) => {
  const { p } = useT();
  const k = p(at, at + 0.35, easeBack);
  const s0 = spinAt ?? at + 0.25;
  const run = still ? 1 : p(s0, s0 + spin, easeOut);
  const m = Math.min(60, min) * run;
  const red = redAt !== undefined ? p(redAt, redAt + 0.3) : 0;
  const blurK = blurred ? 1 - (revealAt !== undefined ? p(revealAt, revealAt + 0.7) : 0)
    : blurAt !== undefined ? p(blurAt, blurAt + 0.6) * (1 - (revealAt !== undefined ? p(revealAt, revealAt + 0.7) : 0)) : 0;
  const col = red > 0 ? C6.loss : color;
  const R = size / 2 - 18;
  const c = size / 2;
  const ticks = Array.from({ length: 60 }, (_, i) => i);
  const ang = (m / 60) * 360;
  const shown = run < 0.999 ? Math.floor(m) : min;
  const hideNum = q && blurK > 0.5;
  const preSpin = !still && spinAt !== undefined && run <= 0.001; // до пробега стрелки цифры нет (контролёр: «0 MIN» под «WHO?»)
  const gid = "face" + label.replace(/[^A-Za-z0-9]/g, "") + min;
  return (
    <div style={{ opacity: Math.min(1, k * 1.4), scale: String(0.86 + 0.14 * k), display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
      <div style={{ position: "relative", width: size, height: size + 34, filter: blurK > 0.01 ? `blur(${16 * blurK}px)` : undefined }}>
        {/* кнопка-заводка */}
        <div style={{ position: "absolute", left: c - 26, top: 0, width: 52, height: 26, borderRadius: 8, background: "#d9d4c6", boxShadow: "inset 0 -4px 0 rgba(0,0,0,.25)" }} />
        <div style={{ position: "absolute", left: c - 12, top: 22, width: 24, height: 16, background: "#bfb9aa" }} />
        <svg width={size} height={size} style={{ position: "absolute", top: 34, left: 0, overflow: "visible" }}>
          <defs>
            <radialGradient id={gid} cx="50%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#fbf8f0" />
              <stop offset="100%" stopColor="#e4ddcb" />
            </radialGradient>
          </defs>
          <circle cx={c} cy={c} r={R + 14} fill="#2b3134" />
          <circle cx={c} cy={c} r={R + 14} fill="none" stroke="rgba(255,255,255,.14)" strokeWidth={3} />
          <circle cx={c} cy={c} r={R} fill={`url(#${gid})`} />
          {/* дуга пройденных минут */}
          <circle cx={c} cy={c} r={R * 0.78} fill="none" stroke={col} strokeOpacity={0.9} strokeWidth={R * 0.2} pathLength={60} strokeDasharray={`${m} 60`} transform={`rotate(-90 ${c} ${c})`} />
          {ticks.map((i) => {
            const big = i % 5 === 0;
            const a = (i / 60) * Math.PI * 2;
            const r1 = R - 6, r2 = R - (big ? 26 : 14);
            return <line key={i} x1={c + r1 * Math.sin(a)} y1={c - r1 * Math.cos(a)} x2={c + r2 * Math.sin(a)} y2={c - r2 * Math.cos(a)} stroke={INK} strokeOpacity={big ? 0.85 : 0.4} strokeWidth={big ? 4 : 2} />;
          })}
          {[0, 15, 30, 45].map((v) => {
            const a = (v / 60) * Math.PI * 2;
            return <text key={v} x={c + (R - 50) * Math.sin(a)} y={c - (R - 50) * Math.cos(a) + 9} textAnchor="middle" fontFamily={SANS} fontWeight={700} fontSize={size * 0.06} fill={INK} fillOpacity={0.55}>{v === 0 ? 60 : v}</text>;
          })}
          {/* стрелка */}
          <g transform={`rotate(${ang} ${c} ${c})`}>
            <line x1={c} y1={c + R * 0.12} x2={c} y2={c - R * 0.86} stroke={red > 0 ? C6.loss : "#c0392b"} strokeWidth={5} strokeLinecap="round" />
          </g>
          <circle cx={c} cy={c} r={11} fill={INK} />
        </svg>
        {/* цифра в центре */}
        <div style={{ position: "absolute", left: 0, top: 34 + c - size * 0.14, width: size, textAlign: "center", pointerEvents: "none" }}>
          <div style={{ display: "inline-block", padding: `${size * 0.01}px ${size * 0.05}px`, borderRadius: size * 0.04, background: "rgba(30,35,38,.9)" }}>
            <span style={{ fontFamily: SERIF, fontSize: size * 0.2, lineHeight: 1.05, color: red > 0 ? C6.loss : "#fff", filter: run < 0.999 ? "blur(2px)" : undefined }}>{hideNum || preSpin ? "?" : shown}</span>
            <span style={{ fontFamily: SANS, fontWeight: 800, fontSize: size * 0.065, letterSpacing: "0.12em", color: "rgba(255,255,255,.75)", marginLeft: size * 0.02 }}>MIN</span>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", filter: blurK > 0.01 ? `blur(${10 * blurK}px)` : undefined }}>
        <div style={{ fontFamily: SERIF, fontSize: size * 0.13, lineHeight: 1, color: red > 0 ? C6.loss : C6.ink }}>{hideNum ? "???" : label}</div>
        {sub && <div style={{ marginTop: 10 }}><Note size={Math.max(18, size * 0.05)}>{hideNum ? "WHO?" : sub}</Note></div>}
      </div>
    </div>
  );
};

/** Ряд секундомеров (2–3). gap — расстояние между ними. */
export const Watches: React.FC<{ items: Watch[]; size?: number; gap?: number; note?: string; noteAt?: number }> = ({ items, size = 380, gap = 110, note, noteAt }) => {
  const { p } = useT();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap }}>
        {items.map((w, i) => <Stopwatch key={i} {...w} size={size} />)}
      </div>
      {note && <Note size={24} o={noteAt !== undefined ? p(noteAt, noteAt + 0.3) : 1} color="rgba(247,244,236,.7)">{note}</Note>}
    </div>
  );
};

/** Ценник на верёвочке: 45¢ переворачивается в $6.22. */
export const PriceFlip: React.FC<{ at?: number; from: string; to: string; flipAt?: number; fromNote?: string; toNote?: string; head?: string; w?: number }> = ({ at = 0.05, from, to, flipAt, fromNote, toNote, head = "BIG MAC", w = 560 }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const f = flipAt !== undefined ? p(flipAt, flipAt + 0.55, Easing.inOut(Easing.cubic)) : 0;
  const rot = f * 180;
  const front = rot < 90;
  const h = w * 0.62;
  const face = (price: string, note: string | undefined, back: boolean) => (
    <div style={{ position: "absolute", inset: 0, borderRadius: 26, background: PAPER, boxShadow: "0 30px 60px rgba(0,0,0,.45), inset 0 0 0 3px rgba(0,0,0,.08)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: back ? "rotateX(180deg)" : undefined, backfaceVisibility: "hidden" }}>
      <div style={{ position: "absolute", left: w / 2 - 14, top: 16, width: 28, height: 28, borderRadius: 16, background: "#0b3a45", boxShadow: "inset 0 0 0 4px rgba(0,0,0,.2)" }} />
      <div style={{ marginTop: 30, fontFamily: SANS, fontWeight: 800, fontSize: w * 0.05, letterSpacing: "0.3em", color: "rgba(30,35,38,.6)" }}>{head}</div>
      <div style={{ fontFamily: SERIF, fontSize: w * 0.32, lineHeight: 1.05, color: back ? "#b8372b" : INK }}>{price}</div>
      {note && <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: w * 0.042, letterSpacing: "0.2em", color: "rgba(30,35,38,.6)" }}>{note}</div>}
    </div>
  );
  return (
    <div style={{ opacity: Math.min(1, k * 1.4), translate: `0 ${(1 - k) * -40}px`, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: 3, height: 90, background: "rgba(247,244,236,.5)" }} />
      <div style={{ position: "relative", width: w, height: h, perspective: 1600 }}>
        <div style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d", transform: `rotateX(${rot}deg)` }}>
          {front ? face(from, fromNote, false) : face(to, toNote, true)}
        </div>
      </div>
    </div>
  );
};

/** $10 на подносе → четыре стопки: еда и бумага / люди / здание и всё остальное / остаток. growAt — все стопки медленно растут (PART 8). */
export const TenSplit: React.FC<{ at?: number; stacks: { label: string; value: string; pct: number; at: number; color?: string }[]; growAt?: number; w?: number; note?: string; noteAt?: number; hlLast?: number }> = ({ at = 0.05, stacks, growAt, w = 1400, note, noteAt, hlLast }) => {
  const { p } = useT();
  const k = p(at, at + 0.35, easeBack);
  const H = 360;
  const grow = growAt !== undefined ? p(growAt, growAt + 3.5, Easing.inOut(Easing.cubic)) : 0;
  const hl = hlLast !== undefined ? p(hlLast, hlLast + 0.3) : 0;
  const colW = (w - 120) / stacks.length;
  return (
    <div style={{ width: w, display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
      <div style={{ opacity: Math.min(1, k * 1.4), scale: String(0.9 + 0.1 * k), width: 420, height: 170, borderRadius: 14, background: `linear-gradient(135deg, ${BILL}, #5d7a5a)`, boxShadow: "inset 0 0 0 6px rgba(255,255,255,.18), 0 24px 50px rgba(0,0,0,.4)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 34px" }}>
        <span style={{ fontFamily: SERIF, fontSize: 96, color: "#f2f5ec" }}>$10</span>
        <div style={{ width: 110, height: 110, borderRadius: 55, boxShadow: "inset 0 0 0 4px rgba(255,255,255,.35)", background: "rgba(255,255,255,.12)" }} />
        <span style={{ fontFamily: SERIF, fontSize: 64, color: "#f2f5ec" }}>10</span>
      </div>
      <div style={{ display: "flex", gap: 40, alignItems: "flex-end", height: H + 150 }}>
        {stacks.map((s, i) => {
          const o = p(s.at, s.at + 0.5, easeOut);
          const last = i === stacks.length - 1;
          const g = 1 + (last ? 0 : 0.22) * grow;
          const col = s.color ?? (last ? C6.money : C6.blue);
          return (
            <div key={i} style={{ width: colW, display: "flex", flexDirection: "column", alignItems: "center", gap: 12, opacity: Math.min(1, o * 2) }}>
              <div style={{ width: colW * 0.62, height: H * s.pct / 31 * 0.75, transformOrigin: "bottom", transform: `scaleY(${o * g})`, borderRadius: 10, background: `repeating-linear-gradient(180deg, ${col} 0 16px, rgba(0,0,0,.25) 16px 19px)`, boxShadow: last && hl > 0 ? `0 0 0 4px ${C6.accent}` : "0 18px 40px rgba(0,0,0,.35)" }} />
              <div style={{ fontFamily: SERIF, fontSize: 64, lineHeight: 1, color: last && hl > 0 ? C6.accent : C6.ink }}>{s.value}</div>
              <Note size={22} color={last ? C6.money : C6.mint}>{s.label}</Note>
            </div>
          );
        })}
      </div>
      {note && <Note size={20} o={noteAt !== undefined ? p(noteAt, noteAt + 0.3) : 1} color="rgba(247,244,236,.6)">{note}</Note>}
    </div>
  );
};

/** Две банки: KITCHEN 15¢ против LANDLORD 84¢ с каждого доллара. */
export const Jars: React.FC<{ at?: number; aAt: number; bAt: number; a?: [string, string, number]; b?: [string, string, number]; h?: number }> = ({ at = 0.05, aAt, bAt, a = ["COOKING BURGERS", "15¢", 0.15], b = ["COLLECTING RENT", "84¢", 0.84], h = 520 }) => {
  const { p } = useT();
  const k = p(at, at + 0.4);
  const jar = (lab: string, val: string, frac: number, t: number, col: string) => {
    const f = p(t, t + 1.1, easeOut);
    const o = p(t - 0.05, t + 0.25);
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ fontFamily: SERIF, fontSize: 110, lineHeight: 1, color: col, opacity: o }}>{val}</div>
        <div style={{ position: "relative", width: 330, height: h }}>
          <div style={{ position: "absolute", left: 40, right: 40, top: 0, height: 34, borderRadius: 8, background: "#9aa3a6", boxShadow: "inset 0 -5px 0 rgba(0,0,0,.25)" }} />
          <div style={{ position: "absolute", left: 0, right: 0, top: 30, bottom: 0, borderRadius: "40px 40px 46px 46px", background: "rgba(255,255,255,.06)", boxShadow: "inset 0 0 0 4px rgba(247,244,236,.55)", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: (h - 30) * frac, transformOrigin: "bottom", transform: `scaleY(${f})`, background: `repeating-linear-gradient(180deg, ${col} 0 14px, rgba(0,0,0,.22) 14px 17px)` }} />
          </div>
        </div>
        <Note size={26} color={C6.ink}>{lab}</Note>
      </div>
    );
  };
  return (
    <div style={{ opacity: k, display: "flex", gap: 200, alignItems: "flex-end" }}>
      {jar(a[0], a[1], a[2], aAt, C6.blue)}
      {jar(b[0], b[1], b[2], bAt, C6.accent)}
    </div>
  );
};

/** Одно табло, разрезанное пополам: UNDER $3 слева, BIG ARCH справа. «One menu. Two Americas.» */
export const MenuSplit: React.FC<{ at?: number; rightAt: number; footAt?: number; left?: string[]; w?: number }> = ({ at = 0.05, rightAt, footAt, left = ["McCHICKEN", "McDOUBLE", "SMALL FRIES", "4 McNUGGETS"], w = 1500 }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const r = p(rightAt, rightAt + 0.45, easeBack);
  const f = footAt !== undefined ? p(footAt, footAt + 0.4) : 0;
  const AMBER = "#FFC94A";
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 34 }}>
      <div style={{ opacity: Math.min(1, k * 1.4), width: w, height: 560, borderRadius: 26, background: "linear-gradient(180deg,#15191b,#0d1012)", boxShadow: "inset 0 0 0 3px #2a3134, 0 40px 80px rgba(0,0,0,.55)", display: "flex", overflow: "hidden" }}>
        <div style={{ flex: 1, padding: "40px 50px" }}>
          <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 40, letterSpacing: "0.2em", color: AMBER }}>UNDER $3</div>
          {left.map((it, i) => (
            <div key={i} style={{ marginTop: 26, height: 70, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid #22292c" }}>
              <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: 38, color: C6.ink }}>{it}</span>
              <span style={{ fontFamily: SERIF, fontSize: 40, color: AMBER }}>{"< $3"}</span>
            </div>
          ))}
        </div>
        <div style={{ width: 4, background: "#2a3134" }} />
        <div style={{ flex: 1, padding: "40px 50px", opacity: r, translate: `${(1 - r) * 40}px 0`, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "radial-gradient(70% 60% at 50% 50%, rgba(255,107,91,.14), transparent)" }}>
          <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 40, letterSpacing: "0.2em", color: C6.loss }}>BIG ARCH</div>
          <div style={{ marginTop: 26, fontFamily: SERIF, fontSize: 150, lineHeight: 1, color: C6.ink }}>$8–10</div>
          <div style={{ marginTop: 22 }}><Note size={24} color="rgba(247,244,236,.65)">sandwich alone · in a lot of places</Note></div>
        </div>
      </div>
      <div style={{ opacity: f, translate: `0 ${(1 - f) * 16}px`, fontFamily: SERIF, fontSize: 84, color: C6.accent, textShadow: "0 6px 30px rgba(0,0,0,.5)" }}>One menu. Two Americas.</div>
    </div>
  );
};

/** Простая цена против цены со звёздочкой: «$1» и «55¢*» с длинной сноской. */
export const TwoTags: React.FC<{ at?: number; bAt: number; noteAt?: number }> = ({ at = 0.05, bAt, noteAt }) => {
  const { p } = useT();
  const ka = p(at, at + 0.35, easeBack);
  const kb = p(bAt, bAt + 0.35, easeBack);
  const kn = noteAt !== undefined ? p(noteAt, noteAt + 0.5) : kb;
  const tag = (price: string, k: number, col: string) => (
    <div style={{ opacity: Math.min(1, k * 1.4), scale: String(0.8 + 0.2 * k), width: 460, height: 300, borderRadius: 24, background: PAPER, boxShadow: "0 30px 60px rgba(0,0,0,.45)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontFamily: SERIF, fontSize: 200, color: col }}>{price}</span>
    </div>
  );
  return (
    <div style={{ display: "flex", gap: 140, alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>{tag("$1", ka, INK)}<Note size={26} color={C6.money}>A NUMBER YOU CAN TRUST</Note></div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        {tag("55¢*", kb, "#b8372b")}
        <div style={{ opacity: kn, width: 520, fontFamily: SANS, fontSize: 22, lineHeight: 1.45, color: "rgba(247,244,236,.75)", textAlign: "center" }}>*with purchase of fries and a drink · featured sandwich varies · times vary · participation may vary · not valid with any other offer</div>
      </div>
    </div>
  );
};

/** Два бургера в разрезе: двойной чизбургер (2 ломтика) и McDouble — один ломтик улетает. */
export const CheeseStack: React.FC<{ at?: number; liftAt: number; noteAt?: number }> = ({ at = 0.05, liftAt, noteAt }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const lift = p(liftAt, liftAt + 1.2, Easing.inOut(Easing.cubic));
  const n = noteAt !== undefined ? p(noteAt, noteAt + 0.4, easeBack) : 0;
  const layer = (h: number, bg: string, r = 18, extra: React.CSSProperties = {}) => <div style={{ width: 380, height: h, borderRadius: r, background: bg, marginTop: 6, ...extra }} />;
  const cheese = (style: React.CSSProperties = {}) => <div style={{ width: 400, height: 22, marginTop: 6, marginLeft: -10, background: "#F5B92E", clipPath: "polygon(0 0,100% 0,96% 100%,70% 60%,50% 100%,30% 60%,4% 100%)", ...style }} />;
  const burger = (two: boolean, label: string, price: string) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {layer(70, "linear-gradient(180deg,#e0a35a,#b8742e)", 0, { borderRadius: "190px 190px 18px 18px" })}
        {cheese()}
        {layer(46, "#5a3a26")}
        {two ? cheese() : cheese({ opacity: 1 - lift, transform: `translate(${lift * 260}px, ${-lift * 220}px) rotate(${lift * 25}deg)` })}
        {layer(46, "#5a3a26")}
        {layer(44, "linear-gradient(180deg,#c98a42,#a8682a)", 18)}
      </div>
      <div style={{ marginTop: 26, fontFamily: SERIF, fontSize: 64, color: C6.ink }}>{price}</div>
      <Note size={24}>{label}</Note>
    </div>
  );
  return (
    <div style={{ opacity: Math.min(1, k * 1.4), display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
      <div style={{ display: "flex", gap: 220, alignItems: "flex-end" }}>
        {burger(true, "DOUBLE CHEESEBURGER", "$1.19")}
        {burger(false, "McDOUBLE · ONE SLICE", "$1")}
      </div>
      <div style={{ opacity: n, scale: String(0.8 + 0.2 * n), padding: "10px 30px", borderRadius: 14, background: C6.accent, color: "#13262b", fontFamily: SANS, fontWeight: 800, fontSize: 34, letterSpacing: "0.1em" }}>−1 SLICE ≈ 6¢ A SANDWICH · ANALYST ESTIMATE</div>
    </div>
  );
};

/** Доллар на вход, $1.10–1.15 на выход, «−10¢» на каждом. */
export const DimeLoss: React.FC<{ at?: number; costAt: number; lossAt: number }> = ({ at = 0.05, costAt, lossAt }) => {
  const { p } = useT();
  const a = p(at, at + 0.35, easeBack), b = p(costAt, costAt + 0.35, easeBack), c = p(lossAt, lossAt + 0.35, easeBack);
  const box = (k: number, top: string, val: string, col: string) => (
    <div style={{ opacity: Math.min(1, k * 1.4), translate: `0 ${(1 - k) * 30}px`, width: 520, padding: "34px 20px", borderRadius: 26, background: C6.panel, boxShadow: `inset 0 0 0 2px ${C6.line}`, textAlign: "center" }}>
      <Note size={26}>{top}</Note>
      <div style={{ marginTop: 12, fontFamily: SERIF, fontSize: 130, lineHeight: 1, color: col }}>{val}</div>
    </div>
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 40 }}>
      <div style={{ display: "flex", gap: 90, alignItems: "center" }}>
        {box(a, "THE PRICE", "$1.00", C6.ink)}
        <div style={{ opacity: b, fontFamily: SERIF, fontSize: 90, color: "rgba(247,244,236,.6)" }}>→</div>
        {box(b, "COST TO SELL IT", "$1.10–1.15", C6.loss)}
      </div>
      <div style={{ opacity: c, scale: String(0.7 + 0.3 * c), fontFamily: SERIF, fontSize: 120, color: C6.loss }}>−10¢ <span style={{ fontFamily: SANS, fontWeight: 800, fontSize: 40, letterSpacing: "0.12em", color: C6.ink }}>ON EVERY ONE</span></div>
    </div>
  );
};

/** Доллар и груз: цена на табличке та же, а сверху ложатся «плашки» расходов. */
export const DollarPress: React.FC<{ at?: number; items: { text: string; at: number }[]; stayAt?: number }> = ({ at = 0.05, items, stayAt }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const s = stayAt !== undefined ? p(stayAt, stayAt + 0.4) : 0;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <div style={{ display: "flex", flexDirection: "column-reverse", alignItems: "center", gap: 10, height: 430, justifyContent: "flex-start" }}>
        {items.map((it, i) => {
          const o = p(it.at, it.at + 0.35, Easing.out(Easing.bounce));
          return <div key={i} style={{ opacity: Math.min(1, o * 2), translate: `0 ${(1 - o) * -120}px`, width: 520 - i * 30, height: 66, borderRadius: 12, background: i % 2 ? "#2d4f57" : "#365f68", boxShadow: "inset 0 0 0 2px rgba(247,244,236,.18)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SANS, fontWeight: 800, fontSize: 30, letterSpacing: "0.2em", color: C6.ink }}>{it.text}</div>;
        })}
      </div>
      <div style={{ opacity: Math.min(1, k * 1.4), width: 620, height: 230, borderRadius: 14, background: `linear-gradient(135deg, ${BILL}, #5d7a5a)`, boxShadow: "inset 0 0 0 6px rgba(255,255,255,.18), 0 24px 50px rgba(0,0,0,.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: SERIF, fontSize: 150, color: "#f2f5ec" }}>$1.00</span>
      </div>
      <div style={{ marginTop: 14 }}><Note size={28} o={s} color={C6.accent}>THE PRICE ON THE SIGN · SAME EVERY YEAR</Note></div>
    </div>
  );
};

/** Деление «цена ÷ зарплата в час = минуты работы» в одну строку. */
export const Division: React.FC<{ price: string; wage: string; res: string; times: [number, number, number]; label?: string; resColor?: string }> = ({ price, wage, res, times, label, resColor = C6.accent }) => {
  const { p } = useT();
  const o = times.map((t) => p(t, t + 0.35, easeBack));
  const cell = (k: number, v: string, sub: string, col = C6.ink) => (
    <div style={{ opacity: Math.min(1, k * 1.4), translate: `0 ${(1 - k) * 24}px`, textAlign: "center" }}>
      <div style={{ fontFamily: SERIF, fontSize: 150, lineHeight: 1, color: col }}>{v}</div>
      <div style={{ marginTop: 12 }}><Note size={24}>{sub}</Note></div>
    </div>
  );
  const op = (k: number, s: string) => <div style={{ opacity: k, fontFamily: SERIF, fontSize: 110, color: "rgba(247,244,236,.5)", marginTop: -40 }}>{s}</div>;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 40 }}>
      {label && <Note size={28} color={C6.accent} o={o[0]}>{label}</Note>}
      <div style={{ display: "flex", alignItems: "center", gap: 50 }}>
        {cell(o[0], price, "BIG MAC")}
        {op(o[1], "÷")}
        {cell(o[1], wage, "AN HOUR")}
        {op(o[2], "≈")}
        {cell(o[2], res, "OF WORK", resColor)}
      </div>
    </div>
  );
};

/** Плоская линия $7.25 с июля 2009 против всего остального, что растёт. Линии рисуются через dashoffset. */
export const FloorLine: React.FC<{ at?: number; riseAt?: number; w?: number; h?: number }> = ({ at = 0.1, riseAt, w = 1300, h = 500 }) => {
  const { p } = useT();
  const k = p(at - 0.2, at + 0.2);
  const flat = p(at, at + 1.4, Easing.inOut(Easing.cubic));
  const rise = p(riseAt ?? at + 0.8, (riseAt ?? at + 0.8) + 1.6, Easing.inOut(Easing.cubic));
  const y0 = h * 0.72;
  return (
    <div style={{ opacity: k, width: w, height: h + 80, position: "relative" }}>
      <svg width={w} height={h} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={0} y1={h} x2={w} y2={h} stroke="rgba(247,244,236,.3)" strokeWidth={2} />
        <path d={`M0 ${y0} L${w} ${y0}`} stroke={C6.loss} strokeWidth={10} strokeLinecap="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - flat} />
        <path d={`M0 ${y0} C ${w * 0.35} ${y0 - 40} ${w * 0.6} ${h * 0.35} ${w} ${h * 0.08}`} stroke={C6.blue} strokeWidth={8} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - rise} />
      </svg>
      <div style={{ position: "absolute", right: 0, top: y0 + 18, opacity: flat }}><Note size={28} color={C6.loss}>FEDERAL MINIMUM · $7.25 · SINCE JULY 2009</Note></div>
      <div style={{ position: "absolute", right: 0, top: h * 0.08 - 60, opacity: rise }}><Note size={26} color={C6.blue}>EVERYTHING ELSE ↑</Note></div>
      <div style={{ position: "absolute", left: 0, top: h + 18 }}><Note size={24} color="rgba(247,244,236,.6)">2009</Note></div>
      <div style={{ position: "absolute", right: 0, top: h + 18 }}><Note size={24} color="rgba(247,244,236,.6)">2026</Note></div>
      <div style={{ position: "absolute", left: 0, top: -50 }}><Note size={20} color="rgba(247,244,236,.5)">illustration · not to scale</Note></div>
    </div>
  );
};

/** Слово AVERAGE трескается пополам. */
export const CrackWord: React.FC<{ at?: number; crackAt: number; word?: string }> = ({ at = 0.05, crackAt, word = "AVERAGE" }) => {
  const { p } = useT();
  const k = p(at, at + 0.4);
  const c = p(crackAt, crackAt + 0.5, Easing.out(Easing.cubic));
  const txt = (clip: string, tx: number, ty: number, rot: number) => (
    <div style={{ position: "absolute", inset: 0, clipPath: clip, transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg)`, fontFamily: SERIF, fontSize: 260, lineHeight: "320px", textAlign: "center", color: C6.ink }}>{word}</div>
  );
  return (
    <div style={{ opacity: k, position: "relative", width: 1400, height: 320 }}>
      {txt("polygon(0 0, 52% 0, 47% 45%, 54% 60%, 48% 100%, 0 100%)", -40 * c, 14 * c, -3 * c)}
      {txt("polygon(52% 0, 100% 0, 100% 100%, 48% 100%, 54% 60%, 47% 45%)", 40 * c, -10 * c, 3 * c)}
    </div>
  );
};

/** Меню 25 → 9: лишние строки гаснут. */
export const MenuShrink: React.FC<{ at?: number; cutAt: number }> = ({ at = 0.05, cutAt }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const keep = new Set([0, 3, 6, 9, 12, 15, 18, 21, 24]);
  const c = p(cutAt, cutAt + 1.0, Easing.inOut(Easing.cubic));
  return (
    <div style={{ opacity: Math.min(1, k * 1.4), display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
      <div style={{ width: 1100, padding: 30, borderRadius: 22, background: PAPER, boxShadow: "0 30px 60px rgba(0,0,0,.45)", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
        {Array.from({ length: 25 }, (_, i) => {
          const on = keep.has(i);
          return <div key={i} style={{ height: 46, borderRadius: 8, background: on ? "#c0392b" : "rgba(30,35,38,.22)", opacity: on ? 1 : 1 - 0.88 * c }} />;
        })}
      </div>
      <div style={{ position: "relative", height: 90, width: 600 }}>
        <div style={{ position: "absolute", inset: 0, textAlign: "center", opacity: 1 - c, fontFamily: SERIF, fontSize: 80, color: C6.ink }}>~25 ITEMS</div>
        <div style={{ position: "absolute", inset: 0, textAlign: "center", opacity: c, fontFamily: SERIF, fontSize: 80, color: C6.accent }}>9 ITEMS</div>
      </div>
    </div>
  );
};

/** Пост из соцсети без имени автора: серый прямоугольник вместо ника, наш набор текста. */
export const PostCard: React.FC<{ at?: number; text: string; site: string; note?: string; w?: number }> = ({ at = 0.05, text, site, note, w = 1200 }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  return (
    <div style={{ opacity: Math.min(1, k * 1.4), translate: `0 ${(1 - k) * 30}px`, width: w, padding: "40px 50px", borderRadius: 24, background: "#fbfaf6", boxShadow: "0 30px 60px rgba(0,0,0,.45)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ width: 64, height: 64, borderRadius: 32, background: "#d8d4ca" }} />
        <div style={{ width: 240, height: 22, borderRadius: 11, background: "#d8d4ca", filter: "blur(2px)" }} />
        <div style={{ marginLeft: "auto", fontFamily: SANS, fontWeight: 800, fontSize: 24, letterSpacing: "0.16em", color: "#ff4500" }}>{site}</div>
      </div>
      <div style={{ marginTop: 30, fontFamily: SANS, fontWeight: 600, fontSize: 54, lineHeight: 1.3, color: INK }}>{text}</div>
      {note && <div style={{ marginTop: 26, fontFamily: SANS, fontWeight: 700, fontSize: 20, letterSpacing: "0.16em", color: "rgba(30,35,38,.5)" }}>{note}</div>}
    </div>
  );
};

/** Полноэкранная карточка главы (~1,5 с): номер + название, уходит в прозрачность к out. strong — крупнее и с акцентной линией. */
export const ChapterFlash: React.FC<{ n: number; title: string; out?: number; strong?: boolean }> = ({ n, title, out = 1.5, strong }) => {
  const { p } = useT();
  const k = p(0, 0.25, easeOut);
  const o = 1 - p(out, out + 0.06); // быстрый уход: полупрозрачная карточка поверх занятого кадра не видна
  const s = strong ? 1.25 : 1;
  return (
    <div style={{ position: "absolute", inset: 0, opacity: o, background: `radial-gradient(1400px 900px at 70% 20%, ${C6.bgTop}, ${C6.bgDeep})`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 22 }}>
      <div style={{ opacity: k, fontFamily: SANS, fontWeight: 800, fontSize: 30 * s, letterSpacing: "0.4em", color: C6.accent }}>CHAPTER {n}</div>
      <div style={{ width: 160 * s, height: 3, background: C6.accent, transform: `scaleX(${k})` }} />
      <div style={{ opacity: k, translate: `0 ${(1 - k) * 20}px`, fontFamily: SERIF, fontSize: 130 * s, lineHeight: 1, color: C6.ink, textShadow: "0 6px 40px rgba(0,0,0,.5)" }}>{title}</div>
    </div>
  );
};

/** Круг «машины»: три шага по кругу, стрелки между ними; каждый шаг загорается в свой момент и остаётся. */
export const Flywheel: React.FC<{ steps: { word: string; at: number }[]; r?: number }> = ({ steps, r = 300 }) => {
  const { p } = useT();
  const k0 = 1;
  const pos = [[0, -1], [0.87, 0.5], [-0.87, 0.5]];
  return (
    <div style={{ position: "relative", width: r * 2 + 520, height: r * 2 + 220, opacity: Math.max(0.35, k0) }}>
      <svg width={r * 2 + 520} height={r * 2 + 220} style={{ position: "absolute", left: 0, top: 0 }}>
        <circle cx={r + 260} cy={r + 110} r={r} fill="none" stroke="rgba(247,244,236,.22)" strokeWidth={6} strokeDasharray="18 16" />
      </svg>
      {steps.map((s, i) => {
        const k = p(s.at, s.at + 0.35, easeBack);
        const [dx, dy] = pos[i];
        return (
          <div key={i} style={{ position: "absolute", left: r + 260 + dx * r, top: r + 110 + dy * r, translate: "-50% -50%", opacity: 0.25 + 0.75 * Math.min(1, k), scale: String(0.85 + 0.15 * k), padding: "22px 34px", borderRadius: 22, background: C6.panel, boxShadow: `inset 0 0 0 3px ${k > 0.5 ? C6.accent : C6.line}`, fontFamily: SERIF, fontSize: 64, color: k > 0.5 ? C6.accent : C6.ink, whiteSpace: "nowrap" }}>{s.word}</div>
        );
      })}
    </div>
  );
};

/** Ряд «фишек» по центру: каждая встаёт на своём слове и остаётся. */
export const Chips: React.FC<{ items: { text: string; at: number }[]; size?: number }> = ({ items, size = 64 }) => {
  const { p } = useT();
  return (
    <div style={{ display: "flex", gap: 36, justifyContent: "center" }}>
      {items.map((it, i) => {
        const k = p(it.at, it.at + 0.3, easeBack);
        if (k <= 0) return null; // ещё не сказанные фишки не занимают место: ряд всегда по центру
        return <div key={i} style={{ opacity: Math.min(1, k * 1.4), scale: String(0.8 + 0.2 * k), padding: "18px 40px", borderRadius: 20, background: C6.panel, boxShadow: `inset 0 0 0 3px ${C6.accent}`, fontFamily: SERIF, fontSize: size, color: C6.ink, whiteSpace: "nowrap" }}>{it.text}</div>;
      })}
    </div>
  );
};

/** Две линии: низкий доход вниз (коралл), высокий вверх (зелёный). Рисуются через dashoffset, подписи справа. */
export const TwoWay: React.FC<{ at?: number; upAt: number; w?: number; h?: number; note?: string }> = ({ at = 0.05, upAt, w = 1200, h = 420, note = "U.S. fast food visits · direction only · illustration" }) => {
  const { p } = useT();
  const lo = p(at, at + 1.4, Easing.inOut(Easing.cubic));
  const hi = p(upAt, upAt + 1.4, Easing.inOut(Easing.cubic));
  const mid = h / 2;
  return (
    <div style={{ width: w, height: h + 70, position: "relative" }}>
      <svg width={w} height={h} style={{ position: "absolute", top: 0, left: 0 }}>
        <line x1={0} y1={mid} x2={w} y2={mid} stroke="rgba(247,244,236,.3)" strokeWidth={2} strokeDasharray="8 10" />
        <path d={`M0 ${mid} C ${w * 0.4} ${mid} ${w * 0.6} ${h * 0.86} ${w * 0.78} ${h * 0.9}`} stroke={C6.loss} strokeWidth={10} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - lo} />
        <path d={`M0 ${mid} C ${w * 0.4} ${mid} ${w * 0.6} ${h * 0.14} ${w * 0.78} ${h * 0.1}`} stroke={C6.money} strokeWidth={10} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - hi} />
      </svg>
      <div style={{ position: "absolute", left: w * 0.8, top: h * 0.1 - 18, opacity: hi }}><Note size={24} color={C6.money}>HIGHER-INCOME ↑</Note></div>
      <div style={{ position: "absolute", left: w * 0.8, top: h * 0.9 - 18, opacity: lo }}><Note size={24} color={C6.loss}>LOW-INCOME ↓</Note></div>
      <div style={{ position: "absolute", left: 0, top: h + 24 }}><Note size={18} color="rgba(247,244,236,.55)">{note}</Note></div>
    </div>
  );
};

/** Полосы «минуты работы» за один и тот же комбо-обед (LendingTree): не секундомеры, чтобы не путать с Big Mac. */
export const MinuteBars: React.FC<{ title: string; rows: { label: string; min: number; value: string; at: number; color?: string }[]; max?: number; w?: number }> = ({ title, rows, max = 50, w = 1400 }) => {
  const { p } = useT();
  const k0 = p(rows[0].at - 0.3, rows[0].at);
  return (
    <div style={{ width: w, opacity: Math.max(k0, 0.001), padding: "40px 50px", borderRadius: 28, background: C6.panel, boxShadow: `inset 0 0 0 2px ${C6.line}` }}>
      <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 30, letterSpacing: "0.22em", color: C6.accent, marginBottom: 30 }}>{title}</div>
      {rows.map((r, i) => {
        const k = p(r.at, r.at + 1.0, easeOut);
        const bw = (w - 100 - 420) * r.min / max;
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", height: 120, gap: 30 }}>
            <div style={{ width: 360, fontFamily: SANS, fontWeight: 700, fontSize: 36, color: C6.ink }}>{r.label}</div>
            <div style={{ width: bw, height: 56, borderRadius: 10, transformOrigin: "left", transform: `scaleX(${k})`, background: r.color ?? C6.blue }} />
            <div style={{ opacity: p(r.at + 0.1, r.at + 0.4), fontFamily: SERIF, fontSize: 70, color: r.color ?? C6.ink, whiteSpace: "nowrap" }}>{r.value}</div>
          </div>
        );
      })}
    </div>
  );
};
