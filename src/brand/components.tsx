import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND, COLORS, FONT_BODY, FONT_HEAD } from "./theme";

// ---------- время ----------
export const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
export const easeOut = Easing.out(Easing.cubic);
export const easeInOut = Easing.inOut(Easing.cubic);
export const easeBack = Easing.out(Easing.back(1.6));
export const easeExpo = Easing.out(Easing.exp);

/** 0→1 между секундами a и b */
export const useP = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;
  return {
    t,
    p: (a: number, b: number, easing: (x: number) => number = (x) => x) =>
      interpolate(t, [a, b], [0, 1], { ...clamp, easing }),
  };
};

export const money = (v: number, digits = 2) =>
  "$" + v.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });

// ---------- фон с сеткой ----------
export const GridBg: React.FC = () => {
  const { t } = useP();
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${COLORS.line} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.line} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          backgroundPosition: `${-t * 6}px ${-t * 6}px`,
          opacity: 0.35,
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(1100px 700px at 50% 45%, rgba(77,163,255,.10), transparent 70%),
                       radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,.55) 100%)`,
        }}
      />
    </AbsoluteFill>
  );
};

// ---------- заголовок, который «выбивается» по словам ----------
export const Headline: React.FC<{
  text: string;
  start: number;
  size?: number;
  highlight?: string[]; // слова, которые красим в золото
  color?: string;
}> = ({ text, start, size = 120, highlight = [], color = COLORS.ink }) => {
  const { p } = useP();
  const words = text.split(" ");
  return (
    <div style={{ fontFamily: FONT_HEAD, fontSize: size, lineHeight: 1, textTransform: "uppercase", textAlign: "center", letterSpacing: "0.01em" }}>
      {words.map((w, i) => {
        const k = p(start + i * 0.08, start + i * 0.08 + 0.35, easeBack);
        const hl = highlight.includes(w.replace(/[^\w$]/g, ""));
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              margin: `0 ${size * 0.12}px`,
              color: hl ? COLORS.gold : color,
              opacity: Math.min(1, k * 1.5),
              translate: `0px ${(1 - k) * size * 0.6}px`,
              scale: String(0.7 + 0.3 * k),
              textShadow: "0 8px 0 rgba(0,0,0,.35)",
            }}
          >
            {w}
          </span>
        );
      })}
    </div>
  );
};

// ---------- счётчик денег ----------
export const MoneyCounter: React.FC<{
  from?: number;
  to: number;
  start: number;
  dur?: number;
  size?: number;
  color?: string;
  digits?: number;
  prefix?: string;
}> = ({ from = 0, to, start, dur = 1.2, size = 160, color = COLORS.money, digits = 2, prefix = "" }) => {
  const { p } = useP();
  const k = p(start, start + dur, easeExpo);
  const v = from + (to - from) * k;
  const pop = p(start + dur - 0.05, start + dur + 0.3, easeBack);
  return (
    <div
      style={{
        fontFamily: FONT_HEAD, fontSize: size, color, fontVariantNumeric: "tabular-nums",
        scale: String(k >= 1 ? 1 + 0.12 * Math.sin(pop * Math.PI) : 1),
        textShadow: `0 0 40px ${color}55, 0 8px 0 rgba(0,0,0,.35)`,
        opacity: p(start - 0.2, start, easeOut),
      }}
    >
      {prefix}
      {money(v, digits)}
    </div>
  );
};

// ---------- ценник с зачёркиванием ----------
export const PriceTag: React.FC<{
  label: string;
  price: string;
  start: number;
  strike?: number; // секунда, когда зачеркнуть
  color?: string;
  rotate?: number;
}> = ({ label, price, start, strike, color = COLORS.gold, rotate = -6 }) => {
  const { p } = useP();
  const k = p(start, start + 0.45, easeBack);
  const s = strike !== undefined ? p(strike, strike + 0.3, easeOut) : 0;
  return (
    <div
      style={{
        position: "relative", display: "inline-flex", flexDirection: "column", alignItems: "center",
        background: color, color: COLORS.bg, borderRadius: 18, padding: "18px 40px 22px",
        rotate: `${rotate}deg`, scale: String(k), opacity: Math.min(1, k * 2),
        boxShadow: "0 16px 0 rgba(0,0,0,.3)",
      }}
    >
      <div style={{ fontFamily: FONT_BODY, fontWeight: 800, fontSize: 30, letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</div>
      <div style={{ fontFamily: FONT_HEAD, fontSize: 110, lineHeight: 1 }}>{price}</div>
      <div
        style={{
          position: "absolute", left: "8%", top: "58%", height: 12, borderRadius: 6,
          width: `${84 * s}%`, background: COLORS.loss, rotate: "-8deg",
        }}
      />
    </div>
  );
};

// ---------- полоса-разбивка (куда уходят деньги) ----------
export const SplitBar: React.FC<{
  parts: { label: string; value: number; color: string }[];
  start: number;
  width?: number;
}> = ({ parts, start, width = 1400 }) => {
  const { p } = useP();
  const total = parts.reduce((s, x) => s + x.value, 0);
  return (
    <div style={{ width }}>
      <div style={{ display: "flex", height: 110, borderRadius: 20, overflow: "hidden", background: COLORS.bgSoft }}>
        {parts.map((x, i) => {
          const k = p(start + i * 0.5, start + i * 0.5 + 0.8, easeInOut);
          return (
            <div
              key={x.label}
              style={{
                width: `${(x.value / total) * 100 * k}%`, background: x.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: FONT_HEAD, fontSize: 64, color: COLORS.bg, overflow: "hidden", whiteSpace: "nowrap",
              }}
            >
              {k > 0.8 ? money(x.value) : ""}
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", marginTop: 20 }}>
        {parts.map((x, i) => (
          <div
            key={x.label}
            style={{
              width: `${(x.value / total) * 100}%`, textAlign: "center", fontFamily: FONT_BODY, fontWeight: 700,
              fontSize: 34, color: x.color, opacity: p(start + i * 0.5 + 0.6, start + i * 0.5 + 1, easeOut),
            }}
          >
            {x.label}
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------- сравнение столбиками ----------
export const CompareBars: React.FC<{
  rows: { label: string; value: number; display: string; color: string }[];
  start: number;
  max: number;
  width?: number;
}> = ({ rows, start, max, width = 1300 }) => {
  const { p } = useP();
  return (
    <div style={{ width, display: "flex", flexDirection: "column", gap: 46 }}>
      {rows.map((r, i) => {
        const k = p(start + i * 0.6, start + i * 0.6 + 1, easeExpo);
        return (
          <div key={r.label} style={{ opacity: p(start + i * 0.6 - 0.2, start + i * 0.6, easeOut) }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: FONT_BODY, fontWeight: 700, fontSize: 38, color: COLORS.ink, marginBottom: 14 }}>
              <span>{r.label}</span>
              <span style={{ color: r.color, fontFamily: FONT_HEAD, fontSize: 50 }}>{r.display}</span>
            </div>
            <div style={{ height: 56, borderRadius: 28, background: COLORS.bgSoft, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${(r.value / max) * 100 * k}%`, background: r.color, borderRadius: 28, boxShadow: `0 0 30px ${r.color}66` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ---------- подпись главы (левый верх) ----------
export const ChapterTag: React.FC<{ n: number; title: string; start: number }> = ({ n, title, start }) => {
  const { p } = useP();
  const k = p(start, start + 0.5, easeOut);
  return (
    <div style={{ position: "absolute", left: 80, top: 70, display: "flex", alignItems: "center", gap: 20, opacity: k, translate: `${(1 - k) * -40}px 0px` }}>
      <div style={{ fontFamily: FONT_HEAD, fontSize: 44, color: COLORS.bg, background: COLORS.gold, borderRadius: 10, padding: "4px 16px" }}>
        {String(n).padStart(2, "0")}
      </div>
      <div style={{ fontFamily: FONT_BODY, fontWeight: 800, fontSize: 32, letterSpacing: "0.18em", color: COLORS.dim, textTransform: "uppercase" }}>{title}</div>
    </div>
  );
};

// ---------- значок канала (правый низ) ----------
export const ChannelBug: React.FC = () => (
  <div style={{ position: "absolute", right: 60, bottom: 50, fontFamily: FONT_HEAD, fontSize: 30, letterSpacing: "0.08em", color: COLORS.ink, opacity: 0.55 }}>
    <span style={{ color: COLORS.money }}>$</span> {BRAND.name}
  </div>
);

// ---------- иллюстрации (SVG) ----------
export const PopcornBucket: React.FC<{ size?: number }> = ({ size = 420 }) => {
  const { t } = useP();
  const puffs = [
    [60, 70, 34], [100, 50, 38], [145, 45, 40], [190, 52, 36], [235, 68, 32],
    [80, 30, 30], [125, 18, 32], [170, 20, 34], [215, 34, 28], [150, -5, 26],
  ];
  return (
    <svg width={size} height={size * 1.15} viewBox="0 -40 300 360">
      {puffs.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y + Math.sin(t * 3 + i) * 2} r={r} fill={i % 3 === 0 ? "#fff3c4" : "#fffaf0"} stroke="#e8c870" strokeWidth={3} />
      ))}
      <path d="M30 90 L270 90 L240 320 L60 320 Z" fill="#fff" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${30 + i * 48 + 6} 90 L${30 + i * 48 + 30} 90 L${60 + i * 36 + 22} 320 L${60 + i * 36 + 4} 320 Z`} fill={COLORS.loss} />
      ))}
      <rect x={22} y={80} width={256} height={26} rx={8} fill="#e8e1d0" />
      <text x={150} y={230} textAnchor="middle" fontFamily={FONT_HEAD} fontSize={54} fill={COLORS.gold} stroke={COLORS.bg} strokeWidth={6} paintOrder="stroke">POP</text>
    </svg>
  );
};

export const Ticket: React.FC<{ width?: number; price: string }> = ({ width = 560, price }) => (
  <svg width={width} height={width * 0.5} viewBox="0 0 560 280">
    <path
      d="M20 0 H540 a20 20 0 0 1 20 20 V105 a35 35 0 0 0 0 70 V260 a20 20 0 0 1 -20 20 H20 a20 20 0 0 1 -20 -20 V175 a35 35 0 0 0 0 -70 V20 a20 20 0 0 1 20 -20 Z"
      fill={COLORS.gold}
    />
    <line x1={400} y1={20} x2={400} y2={260} stroke={COLORS.bg} strokeWidth={4} strokeDasharray="10 10" opacity={0.5} />
    <text x={200} y={110} textAnchor="middle" fontFamily={FONT_BODY} fontWeight={800} fontSize={34} letterSpacing={6} fill={COLORS.bg}>ADMIT ONE</text>
    <text x={200} y={215} textAnchor="middle" fontFamily={FONT_HEAD} fontSize={110} fill={COLORS.bg}>{price}</text>
    <text x={480} y={150} textAnchor="middle" fontFamily={FONT_HEAD} fontSize={44} fill={COLORS.bg} transform="rotate(-90 480 150)">CINEMA</text>
  </svg>
);
