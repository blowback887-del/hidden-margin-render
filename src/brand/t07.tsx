import React from "react";
import { Easing } from "remotion";
import { useT } from "./hm";
import { C6, SANS, SERIF } from "./hm6";

// ===================================================================
// T07 «The Sign Said $3.99. Your Bank Said $175.» (23.11.2026) — графика выпуска.
// Визуальная идея: ТАБЛО КОЛОНКИ + «СЛЕД ДЕНЕГ». Одна заправка (12 галлонов, $47.88) и банковское
//   уведомление «Pending −$175.00» — в начале и в финале. Сквозная карта MoneyTrail: копилка станции
//   (10–15¢) и карманы, которые открываются по главам (карта, 9/10, магазин, премиум, время, алгоритм).
// Нормы (урок T04): размеры блоков заданы заранее, новое только проявляется (opacity/clip/transform);
//   соседние элементы не сдвигаются; движение — только transform.
// Цифры — из cloud/voice/t07-text/research.md.
// ===================================================================

const easeBack = Easing.out(Easing.back(1.4));
const LCD = "'Courier New', 'DejaVu Sans Mono', monospace";
const MONO = "'Courier New', 'DejaVu Sans Mono', monospace";
const AMBER = "#FFB347";

const Note: React.FC<{ children: React.ReactNode; o?: number; color?: string; size?: number }> = ({ children, o = 1, color = C6.mint, size = 22 }) => (
  <div style={{ opacity: 0.92 * o, fontFamily: SANS, fontWeight: 600, fontSize: size, letterSpacing: "0.18em", color, textTransform: "uppercase", textAlign: "center" }}>{children}</div>
);

/** Дробь 9/10 столбиком, как на вывеске. */
export const Frac: React.FC<{ size?: number; color?: string }> = ({ size = 60, color = AMBER }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", marginLeft: size * 0.15, fontFamily: SERIF, color, lineHeight: 1 }}>
    <span style={{ fontSize: size }}>9</span>
    <span style={{ width: size * 0.7, height: Math.max(3, size * 0.07), background: "currentColor", margin: `${size * 0.06}px 0` }} />
    <span style={{ fontSize: size }}>10</span>
  </span>
);

const fmt = (v: number, d: number) => v.toFixed(d);

/** Табло колонки: SALE $ / GALLONS / PRICE PER GALLON. Цифры набегают от at до at+dur. */
export const PumpLCD: React.FC<{ at?: number; dur?: number; sale?: number; gal?: number; ppg?: string; w?: number; hlSaleAt?: number; frac?: boolean }> = ({ at = 0.05, dur = 1.6, sale = 47.88, gal = 12, ppg = "3.99", w = 620, hlSaleAt, frac = true }) => {
  const { p } = useT();
  const k = p(at, at + dur, Easing.out(Easing.cubic));
  const o = p(at - 0.15, at + 0.15);
  const hl = hlSaleAt !== undefined ? p(hlSaleAt, hlSaleAt + 0.3) : 0;
  const fs = w * 0.13;
  const row = (label: string, val: string, big: boolean, glow = 0, fr = false) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: fs * (big ? 1.5 : 1.15), padding: `0 ${w * 0.05}px`, borderRadius: 10, background: "#07100f", boxShadow: `inset 0 0 0 2px #1d3a36${glow > 0 ? `, 0 0 ${40 * glow}px ${C6.accent}` : ""}` }}>
      <span style={{ fontFamily: SANS, fontWeight: 800, fontSize: w * 0.034, letterSpacing: "0.2em", color: "#9fb7b0" }}>{label}</span>
      <span style={{ fontFamily: LCD, fontWeight: 700, fontSize: fs * (big ? 1 : 0.72), color: glow > 0 ? C6.accent : AMBER, textShadow: `0 0 18px ${AMBER}88`, fontVariantNumeric: "tabular-nums", display: "flex", alignItems: "flex-start" }}>{val}{fr && <Frac size={fs * 0.3} color={AMBER} />}</span>
    </div>
  );
  return (
    <div style={{ opacity: o, width: w, padding: w * 0.05, borderRadius: 26, background: "linear-gradient(180deg,#26343a,#172227)", boxShadow: "inset 0 0 0 3px #3b4d54, 0 30px 60px rgba(0,0,0,.5)", display: "flex", flexDirection: "column", gap: w * 0.03 }}>
      {row("SALE $", fmt(sale * k, 2), true, hl)}
      {row("GALLONS", fmt(gal * k, 3), false)}
      {row("PRICE / GAL", ppg, false, 0, frac)}
    </div>
  );
};

/** Банковское уведомление на телефоне. lockAt — замок «HOLD»; postAt — меняется на списание (−$47.88 POSTED). */
export const BankPush: React.FC<{ at?: number; amount?: string; title?: string; sub?: string; lockAt?: number; postAt?: number; posted?: string; w?: number }> = ({ at = 0.05, amount = "−$175.00", title = "PENDING", sub = "FUEL PUMP · PRE-AUTHORIZATION", lockAt, postAt, posted = "−$47.88", w = 720 }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const lk = lockAt !== undefined ? p(lockAt, lockAt + 0.35, easeBack) : 0;
  const ps = postAt !== undefined ? p(postAt, postAt + 0.3) : 0;
  return (
    <div style={{ opacity: Math.min(1, k * 1.5), translate: `0 ${(1 - k) * -60}px`, width: w, borderRadius: 34, padding: "30px 36px", background: "rgba(247,244,236,.96)", color: "#13262b", boxShadow: "0 40px 80px rgba(0,0,0,.5)", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ width: 64, height: 64, borderRadius: 16, background: "#0C5A6B", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width={38} height={38} viewBox="0 0 24 24"><path d="M3 9 L12 4 L21 9 Z M5 10 h14 v1 H5z M6 12 h2 v6 H6z M11 12 h2 v6 h-2z M16 12 h2 v6 h-2z M4 19 h16 v2 H4z" fill="#F7F4EC" /></svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 24, letterSpacing: "0.16em", color: "#4a5d61" }}>YOUR BANK · NOW</div>
          <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 30, marginTop: 4 }}>{ps > 0.5 ? "POSTED" : title}</div>
        </div>
      </div>
      <div style={{ position: "relative", height: 130, marginTop: 14 }}>
        <div style={{ position: "absolute", inset: 0, opacity: 1 - ps, fontFamily: SERIF, fontSize: 112, lineHeight: "130px", color: "#B3261E" }}>{amount}</div>
        <div style={{ position: "absolute", inset: 0, opacity: ps, fontFamily: SERIF, fontSize: 112, lineHeight: "130px", color: "#13262b" }}>{posted}</div>
      </div>
      <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 22, letterSpacing: "0.14em", color: "#4a5d61" }}>{ps > 0.5 ? "FUEL · NO HOLD" : sub}</div>
      {lockAt !== undefined && (
        <div style={{ position: "absolute", right: 30, top: 30, opacity: lk * (1 - ps), scale: String(0.6 + 0.4 * lk), display: "flex", alignItems: "center", gap: 10, padding: "10px 18px", borderRadius: 14, background: "#B3261E", color: "#fff", fontFamily: SANS, fontWeight: 800, fontSize: 26, letterSpacing: "0.14em" }}>
          <svg width={28} height={28} viewBox="0 0 24 24"><path d="M7 10V7a5 5 0 0 1 10 0v3h1v11H6V10zm2 0h6V7a3 3 0 0 0-6 0z" fill="#fff" /></svg>
          ON HOLD
        </div>
      )}
    </div>
  );
};

/** Баланс дебетовой карты: $160 → после холда «−$15 · Insufficient funds». */
export const Balance: React.FC<{ at?: number; from?: string; hitAt: number; to?: string; w?: number }> = ({ at = 0.05, from = "$160.00", hitAt, to = "−$15.00", w = 640 }) => {
  const { p } = useT();
  const k = p(at, at + 0.35);
  const h = p(hitAt, hitAt + 0.3);
  return (
    <div style={{ opacity: k, width: w, padding: "34px 40px", borderRadius: 28, background: C6.panel, boxShadow: `inset 0 0 0 2px ${C6.line}, 0 30px 60px rgba(0,0,0,.4)` }}>
      <Note size={22}>DEBIT CARD · AVAILABLE</Note>
      <div style={{ position: "relative", height: 150, marginTop: 10 }}>
        <div style={{ position: "absolute", inset: 0, textAlign: "center", fontFamily: SERIF, fontSize: 130, lineHeight: "150px", color: C6.money, opacity: 1 - h }}>{from}</div>
        <div style={{ position: "absolute", inset: 0, textAlign: "center", fontFamily: SERIF, fontSize: 130, lineHeight: "150px", color: C6.loss, opacity: h }}>{to}</div>
      </div>
      <div style={{ opacity: h, marginTop: 6 }}><Note size={22} color={C6.loss}>INSUFFICIENT FUNDS</Note></div>
    </div>
  );
};

export type Pocket = { label: string; value: string; at?: number; color?: string };

/** Сквозная карта выпуска: копилка станции (10–15¢) и карманы, которые открываются по главам.
 *  Все строки занимают место с начала; неоткрытые — «?». hl — индекс строки для подсветки. */
export const MoneyTrail: React.FC<{ at?: number; pockets: Pocket[]; hl?: number; hlAt?: number; w?: number; title?: string }> = ({ at = 0.05, pockets, hl, hlAt, w = 760, title = "WHO GETS PAID WHEN YOU FILL UP" }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const rh = 74;
  return (
    <div style={{ opacity: Math.min(1, k * 1.4), translate: `0 ${(1 - k) * 30}px`, width: w, padding: "30px 38px", borderRadius: 28, background: C6.panel, boxShadow: `inset 0 0 0 2px ${C6.line}, 0 30px 60px rgba(0,0,0,.4)` }}>
      <Note size={22} color={C6.accent}>{title}</Note>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: rh, marginTop: 18, padding: "0 20px", borderRadius: 14, background: "rgba(91,228,155,.12)", boxShadow: `inset 0 0 0 2px ${C6.money}55` }}>
        <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: 30, color: C6.ink }}>The station, on fuel</span>
        <span style={{ fontFamily: SERIF, fontSize: 46, color: C6.money }}>10–15¢ / gal</span>
      </div>
      {pockets.map((r, i) => {
        const o = r.at !== undefined ? p(r.at, r.at + 0.3) : 0;
        const h = hl === i && hlAt !== undefined ? p(hlAt, hlAt + 0.3) : 0;
        return (
          <div key={i} style={{ position: "relative", height: rh, marginTop: 10, borderRadius: 14, boxShadow: `inset 0 0 0 2px ${h > 0 ? C6.accent : C6.line}`, background: h > 0 ? `rgba(255,209,102,${0.14 * h})` : "transparent" }}>
            <div style={{ position: "absolute", inset: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", opacity: 1 - o }}>
              <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: 28, color: "rgba(247,244,236,.35)" }}>Pocket #{i + 1}</span>
              <span style={{ fontFamily: SERIF, fontSize: 46, color: "rgba(247,244,236,.35)" }}>?</span>
            </div>
            <div style={{ position: "absolute", inset: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", opacity: o }}>
              <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: 30, color: C6.ink }}>{r.label}</span>
              <span style={{ fontFamily: SERIF, fontSize: 44, color: r.color ?? C6.loss }}>{r.value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/** Вывеска с двумя ценами. same=false: CASH крупно, CREDIT мелко; same=true — одинаково (закон Мэриленда). */
export const CashCredit: React.FC<{ at?: number; cash?: string; credit?: string; creditAt?: number; same?: boolean; sameAt?: number; scale?: number }> = ({ at = 0.05, cash = "3.99", credit = "4.09", creditAt, same, sameAt, scale = 1 }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const c = creditAt !== undefined ? p(creditAt, creditAt + 0.35) : 1;
  const s = same ? (sameAt !== undefined ? p(sameAt, sameAt + 0.5, easeBack) : 1) : 0;
  const cs = 0.42 + 0.58 * s; // масштаб строки CREDIT
  const line = (label: string, v: string, sc: number, o: number, color: string) => (
    <div style={{ display: "flex", alignItems: "center", gap: 26, height: 190, opacity: o }}>
      <div style={{ width: 230, textAlign: "right", fontFamily: SANS, fontWeight: 800, fontSize: 40, letterSpacing: "0.22em", color: "#f7f4ec" }}>{label}</div>
      <div style={{ width: 460, transformOrigin: "left center", scale: String(sc), display: "flex", alignItems: "flex-start", fontFamily: SERIF, color, textShadow: `0 0 30px ${color}88` }}>
        <span style={{ fontSize: 180, lineHeight: 1 }}>{v}</span>
        <span style={{ marginLeft: 10, marginTop: 14 }}><Frac size={60} color={color} /></span>
      </div>
    </div>
  );
  return (
    <div style={{ scale: String(scale * (0.85 + 0.15 * k)), opacity: Math.min(1, k * 1.4), padding: "30px 60px 30px 30px", borderRadius: 22, background: "#0b1416", boxShadow: "inset 0 0 0 5px #1f3a40, 0 30px 60px rgba(0,0,0,.5)" }}>
      {line("CASH", cash, 1, 1, AMBER)}
      {line("CREDIT", credit, cs, c, AMBER)}
    </div>
  );
};

/** Выручка против валовой прибыли: доля топлива 65% → 38.8%. */
export const SalesVsProfit: React.FC<{ at?: number; profitAt: number; w?: number }> = ({ at = 0.05, profitAt, w = 1300 }) => {
  const { p } = useT();
  const bar = (label: string, pct: number, t0: number, val: string) => {
    const k = p(t0, t0 + 0.8);
    return (
      <div style={{ opacity: p(t0 - 0.1, t0 + 0.2) }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ fontFamily: SANS, fontWeight: 800, fontSize: 32, letterSpacing: "0.16em", color: C6.ink }}>{label}</span>
          <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: 26, letterSpacing: "0.14em", color: C6.mint }}>FUEL · STORE</span>
        </div>
        <div style={{ position: "relative", width: w, height: 110, borderRadius: 18, background: "rgba(127,209,199,.22)", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: w * pct / 100, transformOrigin: "left", transform: `scaleX(${k})`, background: `linear-gradient(90deg, ${AMBER}, ${AMBER}cc)` }} />
          <div style={{ position: "absolute", left: 30, top: 0, bottom: 0, display: "flex", alignItems: "center", fontFamily: SERIF, fontSize: 70, color: "#1b1405", opacity: p(t0 + 0.5, t0 + 0.8) }}>{val}</div>
        </div>
      </div>
    );
  };
  return <div style={{ display: "flex", flexDirection: "column", gap: 60 }}>{bar("SALES", 65, at, "65%")}{bar("GROSS PROFIT", 38.8, profitAt, "38.8%")}</div>;
};

/** План магазина сверху: дверь внизу, касса у двери, холодильник у дальней стены; путь покупателя рисуется пунктиром. */
export const StoreMap: React.FC<{ at?: number; pathAt: number; grabAt?: number; w?: number; h?: number }> = ({ at = 0.05, pathAt, grabAt, w = 1100, h = 640 }) => {
  const { p } = useT();
  const k = p(at, at + 0.4);
  const d = p(pathAt, pathAt + 2.4, (x) => x);
  const g = grabAt !== undefined ? p(grabAt, grabAt + 0.3, easeBack) : 0;
  const path = `M ${w * 0.18} ${h * 0.95} L ${w * 0.18} ${h * 0.6} L ${w * 0.5} ${h * 0.6} L ${w * 0.5} ${h * 0.2} L ${w * 0.82} ${h * 0.2} L ${w * 0.82} ${h * 0.12} L ${w * 0.82} ${h * 0.45} L ${w * 0.66} ${h * 0.45} L ${w * 0.66} ${h * 0.82} L ${w * 0.3} ${h * 0.82}`;
  const len = 3600;
  const shelf = (x: number, y: number, ww: number, hh: number) => <rect x={x} y={y} width={ww} height={hh} rx={8} fill="rgba(247,244,236,.10)" stroke="rgba(247,244,236,.28)" strokeWidth={2} />;
  return (
    <div style={{ opacity: k, position: "relative", width: w, height: h }}>
      <svg width={w} height={h} style={{ overflow: "visible" }}>
        <rect x={2} y={2} width={w - 4} height={h - 4} rx={18} fill="rgba(4,42,52,.85)" stroke={C6.line} strokeWidth={3} />
        <rect x={w * 0.08} y={h * 0.03} width={w * 0.84} height={h * 0.06} rx={6} fill="rgba(142,197,255,.35)" stroke={C6.blue} strokeWidth={3} />
        {shelf(w * 0.3, h * 0.3, w * 0.12, h * 0.42)}{shelf(w * 0.55, h * 0.3, w * 0.08, h * 0.42)}{shelf(w * 0.72, h * 0.55, w * 0.18, h * 0.12)}
        <rect x={w * 0.04} y={h * 0.62} width={w * 0.1} height={h * 0.3} rx={8} fill="rgba(255,209,102,.25)" stroke={C6.accent} strokeWidth={3} />
        <rect x={w * 0.13} y={h - 8} width={w * 0.12} height={10} fill={C6.ink} />
        <path d={path} fill="none" stroke={C6.accent} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={`${len}`} strokeDashoffset={len * (1 - d)} style={{ filter: `drop-shadow(0 0 8px ${C6.accent})` }} />
        <circle cx={w * 0.66} cy={h * 0.45} r={26} fill={C6.loss} opacity={g} />
      </svg>
      <div style={{ position: "absolute", left: w * 0.5, top: h * 0.11, translate: "-50% 0" }}><Note size={30} color={C6.blue}>DRINK COOLER · BACK WALL</Note></div>
      <div style={{ position: "absolute", left: w * 0.09, top: h * 0.53, translate: "-50% 0" }}><Note size={28} color={C6.accent}>REGISTER</Note></div>
      <div style={{ position: "absolute", left: w * 0.19, top: h + 14, translate: "-50% 0" }}><Note size={28}>DOOR</Note></div>
      <div style={{ position: "absolute", left: w * 0.66 - 60, top: h * 0.45 - 80, opacity: g }}><Note size={30} color={C6.loss}>+ SNACK</Note></div>
    </div>
  );
};

/** Три кнопки колонки; Premium — со звездой; hlAt — подсветка премиума. */
export const GradeButtons: React.FC<{ at?: number; hlAt?: number; prices?: [string, string, string]; pricesAt?: number }> = ({ at = 0.05, hlAt, prices, pricesAt }) => {
  const { p } = useT();
  const names = ["REGULAR", "PLUS", "PREMIUM"];
  const oct = ["87", "89", "91+"];
  const h = hlAt !== undefined ? p(hlAt, hlAt + 0.35) : 0;
  const po = pricesAt !== undefined ? p(pricesAt, pricesAt + 0.3) : 0;
  return (
    <div style={{ display: "flex", gap: 46 }}>
      {names.map((n, i) => {
        const k = p(at + i * 0.18, at + i * 0.18 + 0.35, easeBack);
        const isP = i === 2;
        return (
          <div key={n} style={{ opacity: Math.min(1, k * 1.4), scale: String((0.8 + 0.2 * k) * (isP ? 1 + 0.06 * h : 1)), width: 330, height: 330, borderRadius: 30, background: isP ? `linear-gradient(160deg, #2b2a1c, #141308)` : "linear-gradient(160deg,#26343a,#172227)", boxShadow: `inset 0 0 0 4px ${isP && h > 0 ? C6.accent : "#3b4d54"}, 0 30px 60px rgba(0,0,0,.5)${isP ? `, 0 0 ${60 * h}px ${C6.accent}` : ""}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, position: "relative" }}>
            {isP && <svg width={70} height={70} viewBox="0 0 24 24" style={{ position: "absolute", top: 20, right: 20, opacity: 0.4 + 0.6 * h }}><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7.1L12 17.3 5.8 21l1.6-7.1L2 9.2l7.1-.6z" fill={C6.accent} /></svg>}
            <div style={{ fontFamily: SERIF, fontSize: 110, color: isP ? C6.accent : AMBER, lineHeight: 1 }}>{oct[i]}</div>
            <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 30, letterSpacing: "0.2em", color: C6.ink }}>{n}</div>
            {prices && <div style={{ opacity: po, fontFamily: SANS, fontWeight: 700, fontSize: 34, color: isP ? C6.loss : C6.mint }}>{prices[i]}</div>}
          </div>
        );
      })}
    </div>
  );
};

/** Лестница разрыва премиум − обычный: 20¢ → 40¢ → 60¢ → 80¢ → ≈$1. times — моменты появления ступеней. */
export const GapLadder: React.FC<{ times: number[]; h?: number }> = ({ times, h = 520 }) => {
  const { p } = useT();
  const steps: [string, string, number][] = [["DECADES", "20¢", 20], ["2015", "40¢", 40], ["2018", "60¢", 60], ["2022", "80¢+", 82], ["2026", "≈$1", 95]];
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 60 }}>
      {steps.map(([yr, v, c], i) => {
        const t0 = times[i] ?? times[times.length - 1];
        const k = p(t0, t0 + 0.5, Easing.out(Easing.cubic));
        const last = i === steps.length - 1;
        const col = last ? C6.loss : AMBER;
        return (
          <div key={yr} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <div style={{ height: h + 110, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: 12 }}>
              <div style={{ opacity: p(t0 + 0.25, t0 + 0.5), fontFamily: SERIF, fontSize: 64, color: col }}>{v}</div>
              <div style={{ width: 170, height: (c / 95) * h, transform: `scaleY(${k})`, transformOrigin: "bottom", borderRadius: "14px 14px 0 0", background: `linear-gradient(180deg, ${col}, ${col}88)`, boxShadow: `0 0 40px ${col}33` }} />
            </div>
            <div style={{ opacity: p(t0, t0 + 0.3) }}><Note size={26} color={C6.ink}>{yr}</Note></div>
          </div>
        );
      })}
    </div>
  );
};

/** Опт против розницы с 2007: оптовый разрыв почти плоский (+20¢), розничный взлетает. */
export const WholesaleRetail: React.FC<{ at?: number; retailAt: number; w?: number; h?: number }> = ({ at = 0.05, retailAt, w = 1300, h = 520 }) => {
  const { p } = useT();
  const k1 = p(at, at + 1.2);
  const k2 = p(retailAt, retailAt + 1.6);
  const L = 2000;
  const ws = `M 0 ${h * 0.8} C ${w * 0.3} ${h * 0.78}, ${w * 0.6} ${h * 0.74}, ${w} ${h * 0.68}`;
  const rt = `M 0 ${h * 0.78} C ${w * 0.35} ${h * 0.7}, ${w * 0.6} ${h * 0.4}, ${w} ${h * 0.06}`;
  return (
    <div style={{ position: "relative", width: w, height: h }}>
      <svg width={w} height={h} style={{ overflow: "visible" }}>
        <line x1={0} y1={h} x2={w} y2={h} stroke={C6.line} strokeWidth={2} />
        <path d={ws} fill="none" stroke={C6.blue} strokeWidth={8} strokeLinecap="round" strokeDasharray={L} strokeDashoffset={L * (1 - k1)} />
        <path d={rt} fill="none" stroke={C6.loss} strokeWidth={8} strokeLinecap="round" strokeDasharray={L} strokeDashoffset={L * (1 - k2)} style={{ filter: `drop-shadow(0 0 10px ${C6.loss})` }} />
      </svg>
      <div style={{ position: "absolute", left: 0, top: h + 20, opacity: p(at, at + 0.3) }}><Note size={26} color={C6.ink}>2007</Note></div>
      <div style={{ position: "absolute", right: 0, top: h + 20, opacity: p(at, at + 0.3) }}><Note size={26} color={C6.ink}>2026</Note></div>
      <div style={{ position: "absolute", right: 0, top: h * 0.68 + 22, opacity: p(at + 1.0, at + 1.3) }}><Note size={28} color={C6.blue}>WHOLESALE GAP · GREW ~20¢</Note></div>
      <div style={{ position: "absolute", right: 0, top: h * 0.06 - 56, opacity: p(retailAt + 1.3, retailAt + 1.6) }}><Note size={28} color={C6.loss}>WHAT YOU PAY · GAP NOW ≈ $1</Note></div>
    </div>
  );
};

/** Сеть: один сервер в центре, линии к станциям; в syncAt цены на всех вывесках меняются одновременно. */
export const AlgoHub: React.FC<{ at?: number; syncAt?: number; n?: number; w?: number; h?: number; from?: string; to?: string; pair?: boolean }> = ({ at = 0.05, syncAt, n = 6, w = 1400, h = 640, from = "4.59", to = "4.79", pair }) => {
  const { p } = useT();
  const k = p(at, at + 0.6);
  const s = syncAt !== undefined ? p(syncAt, syncAt + 0.25) : 0;
  const cx = w / 2, cy = pair ? h * 0.18 : h / 2;
  const pts = pair ? [[w * 0.25, h * 0.75], [w * 0.75, h * 0.75]] : Array.from({ length: n }).map((_, i) => { const a = (i / n) * Math.PI * 2 - Math.PI / 2; return [cx + Math.cos(a) * w * 0.38, cy + Math.sin(a) * h * 0.38]; });
  return (
    <div style={{ position: "relative", width: w, height: h, opacity: k }}>
      <svg width={w} height={h} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
        {pts.map(([x, y], i) => <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={C6.accent} strokeOpacity={0.5} strokeWidth={4} strokeDasharray="6 12" strokeDashoffset={-p(at, at + 6, (t) => t) * 300} />)}
      </svg>
      <div style={{ position: "absolute", left: cx, top: cy, translate: "-50% -50%", width: 230, height: 150, borderRadius: 26, background: "rgba(4,42,52,.95)", boxShadow: `inset 0 0 0 3px ${C6.accent}, 0 0 60px ${C6.accent}44`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
        <svg width={70} height={50} viewBox="0 0 24 16"><path d="M6 15a5 5 0 0 1-.6-10A6.5 6.5 0 0 1 18 4a4.5 4.5 0 0 1 0 11z" fill={C6.accent} /></svg>
        <Note size={18} color={C6.accent}>PRICING SOFTWARE</Note>
      </div>
      {pts.map(([x, y], i) => (
        <div key={i} style={{ position: "absolute", left: x, top: y, translate: "-50% -50%", width: 190, padding: "12px 0", borderRadius: 14, background: "#0b1416", boxShadow: "inset 0 0 0 3px #1f3a40", textAlign: "center" }}>
          <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 18, letterSpacing: "0.2em", color: C6.mint }}>STATION {String.fromCharCode(65 + i)}</div>
          <div style={{ position: "relative", height: 70 }}>
            <div style={{ position: "absolute", inset: 0, fontFamily: SERIF, fontSize: 62, lineHeight: "70px", color: AMBER, opacity: 1 - s }}>{from}</div>
            <div style={{ position: "absolute", inset: 0, fontFamily: SERIF, fontSize: 62, lineHeight: "70px", color: C6.loss, opacity: s }}>{to}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

/** Реконструкция окна ПО: предупреждение «Downward spiral» при цене ниже конкурента. */
export const SpiralWarn: React.FC<{ at?: number; warnAt: number; w?: number }> = ({ at = 0.05, warnAt, w = 900 }) => {
  const { p } = useT();
  const sc = w / 900;
  const k = p(at, at + 0.4, easeBack);
  const wk = p(warnAt, warnAt + 0.3, easeBack);
  return (
    <div style={{ opacity: Math.min(1, k * 1.4), scale: String((0.9 + 0.1 * k) * sc), width: 900, borderRadius: 18, overflow: "hidden", background: "#eef1f2", boxShadow: "0 40px 80px rgba(0,0,0,.5)", fontFamily: SANS, color: "#1d2a2e" }}>
      <div style={{ height: 50, background: "#d4dadc", display: "flex", alignItems: "center", gap: 10, padding: "0 18px" }}>
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => <div key={c} style={{ width: 16, height: 16, borderRadius: 8, background: c }} />)}
        <div style={{ marginLeft: 14, fontWeight: 700, fontSize: 20, letterSpacing: "0.1em", color: "#4a5d61" }}>PRICE RECOMMENDATION</div>
      </div>
      <div style={{ padding: "30px 40px", display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 32 }}><span>Competitor across the street</span><b>$4.79</b></div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 32 }}><span>Your new price</span><b style={{ color: "#0a7a46" }}>$4.69</b></div>
        <div style={{ opacity: wk, scale: String(0.9 + 0.1 * wk), marginTop: 8, padding: "22px 26px", borderRadius: 14, background: "#fff4e5", boxShadow: "inset 0 0 0 3px #e07a00", display: "flex", alignItems: "center", gap: 20 }}>
          <svg width={60} height={54} viewBox="0 0 24 22"><path d="M12 1 L23 21 H1 Z" fill="#e07a00" /><rect x={11} y={8} width={2} height={7} fill="#fff" /><rect x={11} y={17} width={2} height={2} fill="#fff" /></svg>
          <div><div style={{ fontWeight: 800, fontSize: 34, color: "#b35c00" }}>Risk: downward spiral</div><div style={{ fontSize: 24, color: "#6b4a1f", marginTop: 4 }}>Pricing below rivals may trigger a price war</div></div>
        </div>
      </div>
    </div>
  );
};

/** Маленькая копилка «10–15¢» против высокой башни «up to 30¢» (по иску). */
export const JarVsTower: React.FC<{ at?: number; towerAt: number; h?: number }> = ({ at = 0.05, towerAt, h = 560 }) => {
  const { p } = useT();
  const k1 = p(at, at + 0.5, Easing.out(Easing.cubic));
  const k2 = p(towerAt, towerAt + 0.8, Easing.out(Easing.cubic));
  const col = (label: string, v: string, hh: number, k: number, c: string, t0: number) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <div style={{ height: h + 110, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: 12 }}>
        <div style={{ opacity: p(t0 + 0.3, t0 + 0.6), fontFamily: SERIF, fontSize: 84, color: c }}>{v}</div>
        <div style={{ width: 230, height: hh, transform: `scaleY(${k})`, transformOrigin: "bottom", borderRadius: "16px 16px 0 0", background: `linear-gradient(180deg, ${c}, ${c}88)`, boxShadow: `0 0 50px ${c}33` }} />
      </div>
      <Note size={26} color={C6.ink}>{label}</Note>
    </div>
  );
  return <div style={{ display: "flex", gap: 180, alignItems: "flex-end" }}>{col("A STATION'S MARGIN", "10–15¢", h * 0.45, k1, C6.money, at)}{col("ALLEGED, AT MOST", "up to 30¢", h, k2, C6.loss, towerAt)}</div>;
};

/** Чек-лист финала: пункты ставятся галочкой в свои моменты. */
export const Checklist: React.FC<{ items: { text: string; at: number }[]; w?: number }> = ({ items, w = 1080 }) => {
  const { p } = useT();
  return (
    <div style={{ width: w, padding: "36px 46px", borderRadius: 28, background: C6.panel, boxShadow: `inset 0 0 0 2px ${C6.line}, 0 30px 60px rgba(0,0,0,.4)`, display: "flex", flexDirection: "column", gap: 26 }}>
      {items.map((it, i) => {
        const k = p(it.at, it.at + 0.3, easeBack);
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 28, height: 92, opacity: 0.35 + 0.65 * p(it.at - 0.05, it.at + 0.2) }}>
            <div style={{ width: 74, height: 74, flexShrink: 0, borderRadius: 16, boxShadow: `inset 0 0 0 4px ${k > 0 ? C6.money : C6.line}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width={52} height={52} viewBox="0 0 24 24" style={{ scale: String(k), opacity: k }}><path d="M4 12.5 L9.5 18 L20 6.5" fill="none" stroke={C6.money} strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 44, color: C6.ink }}>{it.text}</div>
          </div>
        );
      })}
    </div>
  );
};

/** Ценник «плюс за галлон»: «$3.15 → +$1.00 on a card», с возможностью сменить на 90¢ и обратно. */
export const CardGap: React.FC<{ at?: number; times?: [number, number, number]; base?: string }> = ({ at = 0.05, times, base = "$3.15" }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const v = !times ? "+$1.00" : null;
  const s1 = times ? p(times[0], times[0] + 0.25) : 0; // → 0.90
  const s2 = times ? p(times[1], times[1] + 0.25) : 0; // ← 1.00
  const showNinety = s1 * (1 - s2);
  return (
    <div style={{ opacity: Math.min(1, k * 1.4), scale: String(0.9 + 0.1 * k), display: "flex", alignItems: "center", gap: 50, padding: "40px 60px", borderRadius: 26, background: C6.panel, boxShadow: `inset 0 0 0 2px ${C6.line}, 0 30px 60px rgba(0,0,0,.4)` }}>
      <div style={{ textAlign: "center" }}><Note size={24} color={C6.mint}>ON THE SIGN</Note><div style={{ fontFamily: SERIF, fontSize: 130, color: AMBER }}>{base}</div></div>
      <svg width={90} height={60} viewBox="0 0 30 20"><path d="M0 10 H24 M18 3 L26 10 L18 17" fill="none" stroke={C6.ink} strokeWidth={2.4} strokeLinecap="round" /></svg>
      <div style={{ textAlign: "center", width: 420 }}>
        <Note size={24} color={C6.mint}>ON A CARD, PER GALLON</Note>
        <div style={{ position: "relative", height: 160 }}>
          <div style={{ position: "absolute", inset: 0, fontFamily: SERIF, fontSize: 130, lineHeight: "160px", color: C6.loss, opacity: v ? 1 : 1 - showNinety }}>+$1.00</div>
          <div style={{ position: "absolute", inset: 0, fontFamily: SERIF, fontSize: 130, lineHeight: "160px", color: C6.accent, opacity: v ? 0 : showNinety }}>+$0.90</div>
        </div>
      </div>
    </div>
  );
};

/** Пометка «RECONSTRUCTION · BASED ON THE COMPLAINT» и подобные — мелкая плашка-ярлык. */
export const Tag7: React.FC<{ children: React.ReactNode; at?: number; color?: string }> = ({ children, at = 0.2, color = C6.mint }) => {
  const { p } = useT();
  return <div style={{ opacity: p(at, at + 0.3), padding: "8px 18px", borderRadius: 10, background: "rgba(4,42,52,.85)", boxShadow: `inset 0 0 0 2px ${color}66`, fontFamily: MONO, fontWeight: 700, fontSize: 22, letterSpacing: "0.12em", color }}>{children}</div>;
};
