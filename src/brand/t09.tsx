import React from "react";
import { Easing } from "remotion";
import { useT } from "./hm";
import { C6, SANS, SERIF } from "./hm6";

// ===================================================================
// T09 «Why the Outlet Sells a $499 Bag for $169» (26.11.2026) — графика выпуска.
// Визуальная идея: БУМАЖНАЯ БИРКА (HangTag) — одна бирка аутлета, которую мы разбираем весь ролик:
//   в начале «COMPARABLE VALUE $499 · $169», палец закрывает верхнюю цифру, MSRP → VALUE, в развязке $499 тает.
//   Отличие от T06 (чек растёт), T07 (след денег), T08 (табло меню).
// Нормы (урок T04): размеры заданы заранее; новое только проявляется (opacity/transform), соседи не двигаются.
// Бирки — реконструкции по описанию в исках (подпись «as described in the lawsuit» ставит план сцен).
// ===================================================================

const easeBack = Easing.out(Easing.back(1.4));
const PAPER = "#F3EEE2";
const INKD = "#1d2a2e";
const RED = "#C8372D";

const Note: React.FC<{ children: React.ReactNode; o?: number; color?: string; size?: number }> = ({ children, o = 1, color = C6.mint, size = 22 }) => (
  <div style={{ opacity: 0.92 * o, fontFamily: SANS, fontWeight: 600, fontSize: size, letterSpacing: "0.18em", color, textTransform: "uppercase", textAlign: "center" }}>{children}</div>
);

/** Бумажная бирка с дыркой и верёвкой.
 *  top — верхняя строка (label + value), price — нижняя (наша цена).
 *  strikeAt — зачеркнуть верхнюю цифру; swap — заменить слово label на другое (MSRP → VALUE) в момент swapAt;
 *  coverAt — палец (плашка-«большой палец») закрывает верхнюю строку; meltAt — верхняя цифра тает;
 *  hlTopAt / hlPriceAt — подсветка строки; priceColorAt + priceColor — цена меняет цвет. */
export const HangTag: React.FC<{
  at?: number; brand?: string; top: { label: string; value: string; at?: number }; price: { label?: string; value: string; at?: number };
  extra?: { label: string; value: string; at: number }; strikeAt?: number; swap?: { word: string; at: number }; coverAt?: number; meltAt?: number;
  hlTopAt?: number; hlPriceAt?: number; priceColor?: string; priceColorAt?: number; scale?: number; tilt?: number; cutAt?: number;
}> = ({ at = 0.05, brand = "OUTLET", top, price, extra, strikeAt, swap, coverAt, meltAt, hlTopAt, hlPriceAt, priceColor, priceColorAt, scale = 1, tilt = -4, cutAt }) => {
  const { p, t } = useT();
  const k = p(at, at + 0.45, easeBack);
  const kt = top.at !== undefined ? p(top.at, top.at + 0.3) : 1;
  const kp = price.at !== undefined ? p(price.at, price.at + 0.35, easeBack) : 1;
  const st = strikeAt !== undefined ? p(strikeAt, strikeAt + 0.3) : 0;
  const sw = swap ? p(swap.at, swap.at + 0.35) : 0;
  const cv = coverAt !== undefined ? p(coverAt, coverAt + 0.4, easeBack) : 0;
  const ml = meltAt !== undefined ? p(meltAt, meltAt + 1.4) : 0;
  const ht = hlTopAt !== undefined ? p(hlTopAt, hlTopAt + 0.3) : 0;
  const hp = hlPriceAt !== undefined ? p(hlPriceAt, hlPriceAt + 0.3) : 0;
  const pc = priceColorAt !== undefined ? p(priceColorAt, priceColorAt + 0.3) : 0;
  const cut = cutAt !== undefined ? p(cutAt, cutAt + 0.5) : 0;
  const ex = extra ? p(extra.at, extra.at + 0.35, easeBack) : 0;
  const sway = Math.sin(t * 1.1) * 0.6 * (1 - cut); // лёгкое покачивание бирки на верёвке (только поворот)
  const W = 560 * scale;
  return (
    <div style={{ position: "relative", width: W, opacity: Math.min(1, k * 1.4), scale: String(0.92 + 0.08 * k), rotate: `${tilt + sway + cut * 18}deg`, translate: `0 ${cut * 120}px`, transformOrigin: "50% 0%" }}>
      {/* верёвка */}
      <div style={{ position: "absolute", left: W / 2 - 2, top: -150 * scale, width: 4 * scale, height: 170 * scale, background: "linear-gradient(#cfc6b2,#9c917a)", opacity: 1 - cut, borderRadius: 2 }} />
      <div style={{ position: "relative", background: PAPER, borderRadius: `${70 * scale}px ${70 * scale}px ${22 * scale}px ${22 * scale}px`, padding: `${90 * scale}px ${48 * scale}px ${44 * scale}px`, boxShadow: "0 40px 90px rgba(0,0,0,.5), inset 0 0 0 2px rgba(0,0,0,.06)", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: W / 2 - 18 * scale, top: 28 * scale, width: 36 * scale, height: 36 * scale, borderRadius: "50%", background: "#0a3742", boxShadow: "inset 0 0 0 5px #c9b98f" }} />
        <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 24 * scale, letterSpacing: "0.34em", color: "#6d6a60", textAlign: "center" }}>{brand}</div>
        <div style={{ height: 2, background: "rgba(0,0,0,.12)", margin: `${20 * scale}px 0 ${22 * scale}px` }} />
        {/* верхняя строка */}
        <div style={{ position: "relative", opacity: kt * (1 - ml), filter: ml > 0 ? `blur(${10 * ml}px)` : undefined, translate: `0 ${ml * 30}px`, borderRadius: 12, padding: `${6 * scale}px ${10 * scale}px`, background: ht > 0 ? `rgba(255,209,102,${0.45 * ht})` : "transparent" }}>
          <div style={{ position: "relative", height: 30 * scale, fontFamily: SANS, fontWeight: 700, fontSize: 24 * scale, letterSpacing: "0.2em", color: "#57544b", textAlign: "center" }}>
            <span style={{ position: "absolute", left: 0, right: 0, opacity: 1 - sw }}>{top.label}</span>
            {swap && <span style={{ position: "absolute", left: 0, right: 0, opacity: sw, color: RED }}>{swap.word}</span>}
          </div>
          <div style={{ position: "relative", fontFamily: SERIF, fontSize: 120 * scale, lineHeight: 1.05, color: INKD, textAlign: "center" }}>
            {top.value}
            <div style={{ position: "absolute", left: "18%", top: "52%", height: 9 * scale, width: "64%", background: RED, borderRadius: 5, transformOrigin: "0% 50%", scale: `${st} 1`, rotate: "-6deg" }} />
          </div>
          {/* палец закрывает цифру */}
          <div style={{ position: "absolute", inset: `${-8 * scale}px ${-30 * scale}px`, borderRadius: 60 * scale, opacity: cv, translate: `${(1 - cv) * 380}px 0`, background: "linear-gradient(160deg,#e6b895,#c98e6b)", boxShadow: "0 18px 40px rgba(0,0,0,.35), inset 0 -10px 24px rgba(120,60,40,.35)" }}>
            <div style={{ position: "absolute", right: 26 * scale, top: 18 * scale, width: 110 * scale, height: 80 * scale, borderRadius: 30 * scale, background: "rgba(255,228,210,.55)" }} />
          </div>
        </div>
        {extra && (
          <div style={{ opacity: ex, textAlign: "center", marginTop: 8 * scale, fontFamily: SANS, fontWeight: 700, fontSize: 26 * scale, letterSpacing: "0.12em", color: RED }}>{extra.label} <span style={{ fontFamily: SERIF, fontSize: 44 * scale }}>{extra.value}</span></div>
        )}
        <div style={{ height: 2, background: "rgba(0,0,0,.12)", margin: `${18 * scale}px 0 ${16 * scale}px` }} />
        {/* наша цена */}
        <div style={{ opacity: kp, scale: String(0.85 + 0.15 * kp), borderRadius: 12, padding: `${4 * scale}px 0`, background: hp > 0 ? `rgba(91,228,155,${0.35 * hp})` : "transparent" }}>
          {price.label && <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 24 * scale, letterSpacing: "0.2em", color: "#57544b", textAlign: "center" }}>{price.label}</div>}
          <div style={{ fontFamily: SERIF, fontSize: 150 * scale, lineHeight: 1.05, textAlign: "center", color: pc > 0 && priceColor ? priceColor : RED, opacity: 1 }}>{price.value}</div>
        </div>
      </div>
    </div>
  );
};

/** Цена-«пила» под потолком: линия реальных цен ни разу не доходит до верхней планки (comparable value / original). */
export const PriceCeiling: React.FC<{ at?: number; ceil: string; ceilLabel: string; low: string; lowLabel?: string; pts?: number[]; drawAt?: number; w?: number; h?: number; noteAt?: number; note?: string }> = ({ at = 0.05, ceil, ceilLabel, low, lowLabel, pts = [0.42, 0.55, 0.38, 0.6, 0.45, 0.52, 0.36, 0.58, 0.44, 0.5, 0.4], drawAt, w = 1500, h = 560, noteAt, note }) => {
  const { p } = useT();
  const k = p(at, at + 0.4);
  const d = p(drawAt ?? at + 0.3, (drawAt ?? at + 0.3) + 2.2, Easing.inOut(Easing.cubic));
  const n = pts.length;
  const xy = pts.map((v, i) => [40 + (i / (n - 1)) * (w - 80), h - 40 - v * (h - 120)] as const);
  const path = xy.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const ceilY = 70;
  const nt = noteAt !== undefined ? p(noteAt, noteAt + 0.4) : 0;
  return (
    <div style={{ position: "relative", width: w, height: h + 60, opacity: k }}>
      <svg width={w} height={h} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
        <line x1={20} x2={w - 20} y1={ceilY} y2={ceilY} stroke={C6.accent} strokeWidth={4} strokeDasharray="16 12" />
        <line x1={20} x2={w - 20} y1={h - 30} y2={h - 30} stroke="rgba(247,244,236,.25)" strokeWidth={2} />
        <path d={path} fill="none" stroke={C6.mint} strokeWidth={10} strokeLinejoin="round" strokeLinecap="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - d} />
      </svg>
      <div style={{ position: "absolute", left: 30, top: ceilY - 78, fontFamily: SANS, fontWeight: 800, fontSize: 36, letterSpacing: "0.14em", color: C6.accent }}>{ceilLabel} · <span style={{ fontFamily: SERIF, fontSize: 76, letterSpacing: 0 }}>{ceil}</span></div>
      <div style={{ position: "absolute", left: 0, right: 0, top: h - 10, opacity: d, fontFamily: SANS, fontWeight: 700, fontSize: 32, letterSpacing: "0.12em", color: C6.mint, textAlign: "center" }}>{lowLabel ?? "WHAT IT ACTUALLY SOLD FOR"} · <span style={{ fontFamily: SERIF, fontSize: 60, letterSpacing: 0, color: C6.ink }}>{low}</span></div>
      {note && <div style={{ position: "absolute", left: 0, right: 0, top: h + 80 }}><Note o={nt} color={C6.accent} size={28}>{note}</Note></div>}
    </div>
  );
};

/** Три бирки в ряд (метки и цены), вопрос над средней. */
export const TagTrio: React.FC<{ tags: { label: string; value: string; at: number; color?: string; q?: boolean }[]; qAt?: number }> = ({ tags, qAt }) => {
  const { p } = useT();
  const q = qAt !== undefined ? p(qAt, qAt + 0.35, easeBack) : 0;
  return (
    <div style={{ display: "flex", gap: 70, alignItems: "flex-end" }}>
      {tags.map((g, i) => {
        const k = p(g.at, g.at + 0.35, easeBack);
        return (
          <div key={i} style={{ position: "relative", width: 440, opacity: Math.min(1, k * 1.4), scale: String(0.9 + 0.1 * k), background: PAPER, borderRadius: "46px 46px 16px 16px", padding: "64px 26px 30px", boxShadow: "0 30px 70px rgba(0,0,0,.45)", rotate: `${(i - 1) * 3}deg` }}>
            <div style={{ position: "absolute", left: 202, top: 20, width: 28, height: 28, borderRadius: "50%", background: "#0a3742", boxShadow: "inset 0 0 0 4px #c9b98f" }} />
            {g.q && <div style={{ position: "absolute", left: 0, right: 0, top: -150, opacity: q, scale: String(0.6 + 0.4 * q), textAlign: "center", fontFamily: SERIF, fontSize: 140, color: C6.accent }}>?</div>}
            <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 24, letterSpacing: "0.16em", color: "#57544b", textAlign: "center" }}>{g.label}</div>
            <div style={{ fontFamily: SERIF, fontSize: 130, lineHeight: 1.1, color: g.color ?? INKD, textAlign: "center" }}>{g.value}</div>
          </div>
        );
      })}
    </div>
  );
};

/** Календарь листается 2022 → 2025, табличка SALE не снимается. */
export const NeverEndingSale: React.FC<{ at?: number; years?: string[]; step?: number; label?: string }> = ({ at = 0.05, years = ["2022", "2023", "2024", "2025"], step = 0.9, label = "SALE" }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  return (
    <div style={{ display: "flex", gap: 90, alignItems: "center", opacity: Math.min(1, k * 1.4) }}>
      <div style={{ position: "relative", width: 420, height: 400, borderRadius: 26, background: PAPER, boxShadow: "0 30px 70px rgba(0,0,0,.45)", overflow: "hidden" }}>
        <div style={{ height: 96, background: C6.loss, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SANS, fontWeight: 800, fontSize: 30, letterSpacing: "0.3em", color: "#fff" }}>YEAR</div>
        {years.map((y, i) => {
          const a = p(at + 0.3 + i * step, at + 0.3 + i * step + 0.25);
          const b = i < years.length - 1 ? p(at + 0.3 + (i + 1) * step, at + 0.3 + (i + 1) * step + 0.25) : 0;
          return <div key={y} style={{ position: "absolute", left: 0, right: 0, top: 130, textAlign: "center", fontFamily: SERIF, fontSize: 190, color: INKD, opacity: a * (1 - b), translate: `0 ${(1 - a) * 30 - b * 30}px` }}>{y}</div>;
        })}
      </div>
      <div style={{ position: "relative", padding: "40px 70px", borderRadius: 20, background: C6.loss, rotate: "-5deg", boxShadow: "0 30px 70px rgba(0,0,0,.45)" }}>
        {[[18, 18], [18, -18], [-18, 18], [-18, -18]].map(([x, y], i) => (
          <div key={i} style={{ position: "absolute", width: 22, height: 22, borderRadius: "50%", background: "radial-gradient(#ddd,#777)", left: x > 0 ? 16 : undefined, right: x < 0 ? 16 : undefined, top: y > 0 ? 16 : undefined, bottom: y < 0 ? 16 : undefined }} />
        ))}
        <div style={{ fontFamily: SERIF, fontSize: 150, lineHeight: 1, color: "#fff" }}>{label}</div>
      </div>
    </div>
  );
};

/** Одна цена рядом с разными «соседями»: $169 рядом с $499 — выигрыш, рядом с $95.20 — ошибка. */
export const Anchor: React.FC<{ at?: number; mid: string; left: string; right: string; rightAt: number; leftNote?: string; rightNote?: string }> = ({ at = 0.05, mid, left, right, rightAt, leftNote = "FEELS LIKE A WIN", rightNote = "FEELS LIKE A MISTAKE" }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const r = p(rightAt, rightAt + 0.45, easeBack);
  const box = (v: string, c: string, o: number, note: string) => (
    <div style={{ width: 460, opacity: o, textAlign: "center" }}>
      <div style={{ fontFamily: SERIF, fontSize: 150, color: c, lineHeight: 1 }}>{v}</div>
      <Note color={c} size={30}>{note}</Note>
    </div>
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 70, alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 40, opacity: Math.min(1, k * 1.4) }}>
        {box(left, "rgba(247,244,236,.55)", 1, "NEXT TO")}
        <div style={{ fontFamily: SERIF, fontSize: 210, color: C6.money, width: 440, textAlign: "center" }}>{mid}</div>
        <div style={{ width: 420, fontFamily: SANS, fontWeight: 800, fontSize: 40, letterSpacing: "0.12em", color: C6.money }}>{leftNote}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 40, opacity: r, translate: `0 ${(1 - r) * 30}px` }}>
        {box(right, "rgba(247,244,236,.55)", 1, "NEXT TO")}
        <div style={{ fontFamily: SERIF, fontSize: 210, color: C6.loss, width: 440, textAlign: "center" }}>{mid}</div>
        <div style={{ width: 420, fontFamily: SANS, fontWeight: 800, fontSize: 40, letterSpacing: "0.12em", color: C6.loss }}>{rightNote}</div>
      </div>
    </div>
  );
};

/** 40 конвертов, ответил один. */
export const Envelopes: React.FC<{ at?: number; n?: number; oneAt: number; cols?: number }> = ({ at = 0.05, n = 40, oneAt, cols = 10 }) => {
  const { p } = useT();
  const one = p(oneAt, oneAt + 0.4, easeBack);
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 120px)`, gap: 22 }}>
      {Array.from({ length: n }).map((_, i) => {
        const k = p(at + i * 0.025, at + i * 0.025 + 0.25);
        const hot = i === 13;
        return (
          <div key={i} style={{ position: "relative", width: 120, height: 80, borderRadius: 8, opacity: k * (hot ? 1 : 1 - 0.55 * one), background: hot && one > 0 ? C6.accent : PAPER, boxShadow: "0 8px 18px rgba(0,0,0,.35)", scale: hot ? String(1 + 0.25 * one) : "1" }}>
            <svg width={120} height={80} style={{ position: "absolute", inset: 0 }}><path d="M4,6 L60,46 L116,6" fill="none" stroke="rgba(0,0,0,.25)" strokeWidth={3} /></svg>
          </div>
        );
      })}
    </div>
  );
};

/** Две этикетки состава рядом (по иску): слева магазин, справа аутлет. */
export const FabricLabels: React.FC<{ at?: number; a: { title: string; lines: string[] }; b: { title: string; lines: string[]; at: number }; hlAt?: number }> = ({ at = 0.05, a, b, hlAt }) => {
  const { p } = useT();
  const ka = p(at, at + 0.35, easeBack);
  const kb = p(b.at, b.at + 0.35, easeBack);
  const hl = hlAt !== undefined ? p(hlAt, hlAt + 0.3) : 0;
  const lab = (x: { title: string; lines: string[] }, k: number, mark: boolean) => (
    <div style={{ width: 720, opacity: Math.min(1, k * 1.4), scale: String(0.9 + 0.1 * k), background: "#fbfaf6", borderRadius: 14, padding: "44px 40px", boxShadow: "0 30px 70px rgba(0,0,0,.45)", border: "2px dashed rgba(0,0,0,.18)" }}>
      <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 34, letterSpacing: "0.2em", color: "#57544b", textAlign: "center", marginBottom: 22 }}>{x.title}</div>
      {x.lines.map((l, i) => (
        <div key={i} style={{ fontFamily: SANS, fontWeight: 700, fontSize: 50, lineHeight: 1.45, color: INKD, whiteSpace: "nowrap", textAlign: "center", borderRadius: 8, background: mark && i === 0 && hl > 0 ? `rgba(255,107,91,${0.35 * hl})` : "transparent" }}>{l}</div>
      ))}
    </div>
  );
  return <div style={{ display: "flex", gap: 80 }}>{lab(a, ka, false)}{lab(b, kb, true)}</div>;
};
