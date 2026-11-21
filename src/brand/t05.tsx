import React from "react";
import { Easing } from "remotion";
import { useT } from "./hm";
import { C6, SANS, SERIF } from "./hm6";

// ===================================================================
// T05 «Your Neighbor Paid Less for the Same Groceries» (персональные цены, 21.11.2026) — графика выпуска.
// Визуальная идея: «ценник, который смотрит» — электронный ценник (e-ink, красный огонёк),
//   на котором одна и та же вещь показывает разные цены. Появляется в начале (яйца), в главе 1 (тест),
//   в главе 3 (Walmart), в финале (яйца снова). Талисман: дюжина яиц с пятью ценами.
// Всё нарисованное — схемы; цифры только из исследования (cloud/voice/t05-text/research.md).
// ===================================================================

const easeBack = Easing.out(Easing.back(1.5));
const INK = "#111417";

const Note: React.FC<{ children: React.ReactNode; o?: number; color?: string; size?: number }> = ({ children, o = 1, color = C6.mint, size = 22 }) => (
  <div style={{ opacity: 0.9 * o, fontFamily: SANS, fontWeight: 600, fontSize: size, letterSpacing: "0.18em", color, textTransform: "uppercase", textAlign: "center" }}>{children}</div>
);

/** Электронный ценник: белый e-ink, крупная цена, мигающий красный огонёк. */
export const ESL: React.FC<{ at: number; price: string; top?: string; bottom?: string; w?: number; led?: boolean; hot?: boolean; flipAt?: number; flipTo?: string }> = ({ at, price, top = "", bottom = "", w = 300, led = true, hot = false, flipAt, flipTo }) => {
  const { t, p } = useT();
  const k = p(at, at + 0.35, easeBack);
  const f = flipAt !== undefined ? p(flipAt, flipAt + 0.12) : 0;
  const shown = f > 0.5 && flipTo ? flipTo : price;
  const blink = led ? (Math.sin((t - at) * 6) > 0 ? 1 : 0.25) : 0;
  return (
    <div style={{ opacity: Math.min(1, k * 1.3), scale: String(0.85 + 0.15 * k), width: w, padding: `${w * 0.06}px ${w * 0.08}px`, borderRadius: w * 0.05, background: "#EEF0EC", border: `${Math.max(3, w * 0.015)}px solid ${hot ? C6.loss : "#2a2f33"}`, boxShadow: "0 20px 50px rgba(0,0,0,.5)", position: "relative" }}>
      {top && <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: w * 0.075, color: "#4b5257", letterSpacing: "0.08em", textTransform: "uppercase" }}>{top}</div>}
      <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: w * 0.26, color: hot ? "#C0281C" : INK, lineHeight: 1.05, filter: `blur(${f > 0 && f < 1 ? 3 : 0}px)` }}>{shown}</div>
      {bottom && <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: w * 0.065, color: "#4b5257", marginTop: 4 }}>{bottom}</div>}
      {led && <div style={{ position: "absolute", right: w * 0.06, top: w * 0.06, width: w * 0.045, height: w * 0.045, borderRadius: "50%", background: "#ff2a1a", opacity: 0.3 + 0.7 * blink, boxShadow: `0 0 ${w * 0.05}px #ff2a1a` }} />}
    </div>
  );
};

/** Ряд ценников: одна вещь, несколько цен; каждый ценник появляется в свой момент. */
export const TagRow: React.FC<{ prices: string[]; times: number[]; title?: string; titleAt?: number; w?: number; note?: string }> = ({ prices, times, title, titleAt = 0.05, w = 250, note }) => {
  const { p } = useT();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 34 }}>
      {title && <div style={{ opacity: p(titleAt, titleAt + 0.3), fontFamily: SERIF, fontSize: 64, color: C6.ink }}>{title}</div>}
      <div style={{ display: "flex", gap: 28 }}>
        {prices.map((pr, i) => <ESL key={i} at={times[i] ?? times[times.length - 1]} price={pr} top={`Shopper ${i + 1}`} w={w} hot={i === prices.length - 1} led={i === prices.length - 1} />)}
      </div>
      {note && <div style={{ opacity: p(times[times.length - 1], times[times.length - 1] + 0.4) }}><Note>{note}</Note></div>}
    </div>
  );
};

/** Пять итогов одной корзины: от дешёвого к дорогому, крайние подсвечены, разница внизу. */
export const FiveTotals: React.FC<{ at: number; totals: string[]; lowAt?: number; highAt?: number; diff?: string; diffAt?: number; head?: string }> = ({ at, totals, lowAt, highAt, diff, diffAt, head = "SAME 20 ITEMS · SAME STORE · SAME TIME" }) => {
  const { p } = useT();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
      <div style={{ opacity: p(at, at + 0.3) }}><Note size={26} color={C6.mint}>{head}</Note></div>
      <div style={{ display: "flex", gap: 22 }}>
        {totals.map((v, i) => {
          const k = p(at + 0.15 * i, at + 0.15 * i + 0.35, easeBack);
          const lo = i === 0 && lowAt !== undefined ? p(lowAt, lowAt + 0.3) : 0;
          const hi = i === totals.length - 1 && highAt !== undefined ? p(highAt, highAt + 0.3) : 0;
          const col = hi > 0.5 ? C6.loss : lo > 0.5 ? C6.money : C6.ink;
          return (
            <div key={i} style={{ opacity: Math.min(1, k * 1.3), scale: String(0.85 + 0.15 * k + 0.12 * Math.max(lo, hi)), width: 250, padding: "26px 0", borderRadius: 18, background: C6.panel, border: `3px solid ${hi > 0.5 || lo > 0.5 ? col : C6.line}`, textAlign: "center" }}>
              <Note size={18}>{`CART ${i + 1}`}</Note>
              <div style={{ fontFamily: SERIF, fontSize: 62, color: col, marginTop: 8 }}>{v}</div>
            </div>
          );
        })}
      </div>
      {diff && diffAt !== undefined && <div style={{ opacity: p(diffAt, diffAt + 0.3), scale: String(0.9 + 0.1 * p(diffAt, diffAt + 0.35, easeBack)), fontFamily: SERIF, fontSize: 86, color: C6.accent }}>{diff}</div>}
    </div>
  );
};

/** Одна распродажа — разная «старая» цена над ней. */
export const SaleTwins: React.FC<{ at: number; sale: string; olds: string[]; oldAt?: number; item?: string }> = ({ at, sale, olds, oldAt, item = "SAME KETCHUP · SAME SALE" }) => {
  const { p } = useT();
  const ko = oldAt !== undefined ? p(oldAt, oldAt + 0.35) : 1;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
      <div style={{ opacity: p(at, at + 0.3) }}><Note size={26}>{item}</Note></div>
      <div style={{ display: "flex", gap: 90 }}>
        {olds.map((o, i) => {
          const k = p(at + 0.2 * i, at + 0.2 * i + 0.35, easeBack);
          return (
            <div key={i} style={{ opacity: Math.min(1, k * 1.3), scale: String(0.85 + 0.15 * k), width: 470, padding: "34px 36px", borderRadius: 22, background: "#FFF6D6", border: "6px solid #D7141A", textAlign: "center", boxShadow: "0 18px 44px rgba(0,0,0,.45)" }}>
              <div style={{ fontFamily: SANS, fontWeight: 900, fontSize: 50, color: "#D7141A", letterSpacing: "0.1em" }}>SALE</div>
              <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 50, color: "#6b6b6b", textDecoration: "line-through", opacity: ko, marginTop: 6 }}>{`was ${o}`}</div>
              <div style={{ fontFamily: SANS, fontWeight: 900, fontSize: 130, color: INK, lineHeight: 1 }}>{sale}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/** Плашка-раскрытие закона Нью-Йорка под ценой. */
export const Disclosure: React.FC<{ at: number; price?: string; item?: string; w?: number }> = ({ at, price = "$4.29", item = "Milk, 1 gal", w = 1100 }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  return (
    <div style={{ width: w, borderRadius: 18, background: "#fff", boxShadow: "0 24px 60px rgba(0,0,0,.5)", overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "26px 36px" }}>
        <div style={{ fontFamily: SANS, fontSize: 40, color: "#333" }}>{item}</div>
        <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 64, color: INK }}>{price}</div>
      </div>
      <div style={{ opacity: Math.min(1, k * 1.3), transform: `translateY(${(1 - k) * 30}px)`, background: "#FFE9A8", borderTop: "3px solid #E0B000", padding: "20px 36px", fontFamily: SANS, fontWeight: 800, fontSize: 30, letterSpacing: "0.04em", color: "#3a2a00" }}>
        THIS PRICE WAS SET BY AN ALGORITHM USING YOUR PERSONAL DATA
      </div>
    </div>
  );
};

/** Список по пунктам (что могут учитывать / что запрещено). Пункт появляется на своё слово. */
export const ListReveal: React.FC<{ title: string; items: { text: string; at: number; hot?: boolean }[]; titleAt?: number; strike?: boolean; w?: number }> = ({ title, items, titleAt = 0.05, strike = false, w = 900 }) => {
  const { p } = useT();
  return (
    <div style={{ width: w, padding: "34px 44px", borderRadius: 22, background: C6.panel, border: `2px solid ${C6.line}` }}>
      <div style={{ opacity: p(titleAt, titleAt + 0.3) }}><Note size={24} color={C6.accent}>{title}</Note></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 22 }}>
        {items.map((it, i) => {
          const k = p(it.at, it.at + 0.3);
          return (
            <div key={i} style={{ opacity: k, transform: `translateX(${(1 - k) * -20}px)`, display: "flex", alignItems: "center", gap: 18, fontFamily: SANS, fontWeight: it.hot ? 800 : 600, fontSize: it.hot ? 46 : 40, color: it.hot ? C6.accent : C6.ink }}>
              <span style={{ width: 34, height: 34, borderRadius: 8, border: `3px solid ${strike ? C6.loss : C6.mint}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 26, color: strike ? C6.loss : C6.mint }}>{strike ? "✕" : "•"}</span>
              {it.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/** Телефон с приложением магазина: цена прыгает, когда точка доходит до парковки. */
export const PhoneJump: React.FC<{ at: number; from: string; to: string; jumpAt: number; item?: string; label?: string }> = ({ at, from, to, jumpAt, item = "Samsung 55\" TV", label = "STORE APP · KARE 11 TEST, 2019" }) => {
  const { p } = useT();
  const k = p(at, at + 0.35, easeBack);
  const j = p(jumpAt, jumpAt + 0.15);
  const pin = p(at + 0.2, jumpAt, Easing.inOut(Easing.cubic));
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 90, opacity: Math.min(1, k * 1.3) }}>
      <div style={{ width: 360, height: 680, borderRadius: 48, background: "#0d1114", border: "10px solid #2b3238", padding: 26, boxShadow: "0 30px 70px rgba(0,0,0,.55)", display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ height: 230, borderRadius: 18, background: "linear-gradient(135deg,#2a3a44,#16232b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 200, height: 120, border: "6px solid #8EC5FF", borderRadius: 8 }} />
        </div>
        <div style={{ fontFamily: SANS, fontSize: 30, color: "#cfd6da" }}>{item}</div>
        <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 76, color: j > 0.5 ? C6.loss : C6.ink, scale: String(1 + 0.12 * (j > 0 && j < 1 ? 1 : 0)) }}>{j > 0.5 ? to : from}</div>
        <div style={{ marginTop: "auto", padding: "16px 0", borderRadius: 14, background: "#CC0000", color: "#fff", fontFamily: SANS, fontWeight: 700, fontSize: 30, textAlign: "center" }}>Add to cart</div>
      </div>
      <div style={{ position: "relative", width: 560, height: 560, borderRadius: 24, background: "rgba(4,42,52,.85)", border: `2px solid ${C6.line}`, overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 300, top: 60, width: 220, height: 160, borderRadius: 10, background: "rgba(247,244,236,.12)", border: `3px solid ${C6.mint}` }} />
        <div style={{ position: "absolute", left: 300, top: 238, width: 220, textAlign: "center" }}><Note size={18}>STORE + LOT</Note></div>
        <div style={{ position: "absolute", left: 60 + 350 * pin, top: 470 - 340 * pin, width: 34, height: 34, borderRadius: "50%", background: j > 0.5 ? C6.loss : C6.accent, boxShadow: `0 0 24px ${j > 0.5 ? C6.loss : C6.accent}`, translate: "-50% -50%" }} />
        <div style={{ position: "absolute", left: 24, bottom: 18 }}><Note size={18}>YOUR PHONE</Note></div>
      </div>
      <div style={{ position: "absolute", bottom: -70, left: 0, right: 0 }}><Note size={20}>{label}</Note></div>
    </div>
  );
};

/** Две цены рядом с подписью (степлер, отели): A против B. */
export const PricePair: React.FC<{ at: number; a: [string, string]; b: [string, string]; bAt?: number; note?: string }> = ({ at, a, b, bAt, note }) => {
  const { p } = useT();
  const ka = p(at, at + 0.35, easeBack), kb = p(bAt ?? at + 0.3, (bAt ?? at + 0.3) + 0.35, easeBack);
  const box = (k: number, [label, value]: [string, string], col: string) => (
    <div style={{ opacity: Math.min(1, k * 1.3), scale: String(0.85 + 0.15 * k), width: 470, padding: "30px 0", borderRadius: 20, background: C6.panel, border: `3px solid ${col}`, textAlign: "center" }}>
      <Note size={22}>{label}</Note>
      <div style={{ fontFamily: SERIF, fontSize: 110, color: col, marginTop: 6 }}>{value}</div>
    </div>
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
      <div style={{ display: "flex", gap: 70 }}>{box(ka, a, C6.money)}{box(kb, b, C6.loss)}</div>
      {note && <div style={{ opacity: p(bAt ?? at, (bAt ?? at) + 0.4) }}><Note size={20}>{note}</Note></div>}
    </div>
  );
};
