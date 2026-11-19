import React from "react";
import { AbsoluteFill, Easing, Img, staticFile } from "remotion";
import { useT } from "./hm";
import { C6, SANS, SERIF } from "./hm6";

// ===================================================================
// T04 «They Advertised $146. The Checkout Said $649.» (Lens.com, 19.11.2026) — графика выпуска.
// Визуальная идея: «под кнопкой» — красная кнопка Continue, а под ней то, чего покупатель не видит.
// Игра со зрителем: значок FIND THE $273.44 в углу, пока идём по экранам; в главе 3 — FOUND.
// Талисман: бейдж NO HIDDEN FEES (вырезан из Fig. 3 иска) — улетает в угол и в финале сползает под кнопку.
// Нарисованное — схемы и реконструкции; на кадре подпись ILLUSTRATION, где это не скриншот из иска.
// ===================================================================

const easeBack = Easing.out(Easing.back(1.5));
const RED = "#D7141A"; // красный кнопок lens.com (по скриншотам иска)

const Note: React.FC<{ children: React.ReactNode; o?: number; color?: string }> = ({ children, o = 1, color = C6.mint }) => (
  <div style={{ opacity: 0.85 * o, fontFamily: SANS, fontWeight: 600, fontSize: 22, letterSpacing: "0.2em", color, textTransform: "uppercase" }}>{children}</div>
);

const Magnifier: React.FC<{ size?: number; color?: string }> = ({ size = 34, color = C6.ink }) => (
  <svg width={size} height={size} viewBox="0 0 40 40"><circle cx="16" cy="16" r="11" fill="none" stroke={color} strokeWidth="4" /><line x1="24.5" y1="24.5" x2="36" y2="36" stroke={color} strokeWidth="5" strokeLinecap="round" /></svg>
);

/** Значок игры в углу: FIND THE $273.44 → (foundAt) FOUND */
export const FindBadge: React.FC<{ at?: number; foundAt?: number; out?: number }> = ({ at = 0.1, foundAt, out }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const f = foundAt !== undefined ? p(foundAt, foundAt + 0.35, easeBack) : 0;
  const o = out !== undefined ? 1 - p(out, out + 0.3) : 1;
  return (
    <div style={{ position: "absolute", right: 60, top: 54, opacity: Math.min(1, k) * o, scale: String(0.85 + 0.15 * k), display: "flex", alignItems: "center", gap: 14, padding: "12px 22px", borderRadius: 40, background: f > 0.5 ? "rgba(91,228,155,.95)" : "rgba(4,30,38,.82)", border: `3px solid ${f > 0.5 ? "#5BE49B" : C6.accent}`, boxShadow: "0 12px 34px rgba(0,0,0,.45)" }}>
      <Magnifier size={30} color={f > 0.5 ? "#06251c" : C6.accent} />
      <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 26, letterSpacing: "0.12em", color: f > 0.5 ? "#06251c" : C6.ink }}>{f > 0.5 ? "FOUND: $273.44" : "FIND THE $273.44"}</div>
    </div>
  );
};

/** Бейдж NO HIDDEN FEES (вырезка из Fig. 3 иска). Летит из from в to; в углу лежит маленьким. */
export const FeeBadge: React.FC<{ at: number; from: [number, number, number]; to?: [number, number, number]; moveAt?: number; moveDur?: number; tilt?: number; fade?: number }> = ({ at, from, to, moveAt, moveDur = 0.8, tilt = 0, fade }) => {
  const { p } = useT();
  const k = p(at, at + 0.35, easeBack);
  const m = to && moveAt !== undefined ? p(moveAt, moveAt + moveDur, Easing.inOut(Easing.cubic)) : 0;
  const [x0, y0, s0] = from;
  const [x1, y1, s1] = to ?? from;
  const x = x0 + (x1 - x0) * m, y = y0 + (y1 - y0) * m, s = s0 + (s1 - s0) * m;
  const o = fade !== undefined ? 1 - 0.6 * p(fade, fade + 0.8) : 1;
  return (
    <div style={{ position: "absolute", left: x, top: y, translate: "-50% -50%", opacity: Math.min(1, k * 1.3) * o, scale: String(s * (0.85 + 0.15 * k)), rotate: `${tilt * m}deg` }}>
      <div style={{ padding: 14, borderRadius: 16, background: "#fff", boxShadow: "0 24px 60px rgba(0,0,0,.5)", border: `4px solid ${C6.accent}` }}>
        <Img src={staticFile("evidence/t04/badge-nofees.png")} style={{ width: 300, display: "block" }} />
      </div>
      <div style={{ marginTop: 10, textAlign: "center" }}><Note o={1}>LENS.COM · FTC COMPLAINT, FIG. 3</Note></div>
    </div>
  );
};

/** Красная кнопка Continue (как на сайте в Fig. 9; наша перерисовка) с курсором, который её нажимает */
export const ContinueBtn: React.FC<{ at: number; pressAt?: number; label?: string; w?: number; cursor?: boolean }> = ({ at, pressAt, label = "Continue", w = 620, cursor = true }) => {
  const { p } = useT();
  const k = p(at, at + 0.35, easeBack);
  const c = pressAt !== undefined ? p(pressAt - 0.7, pressAt, Easing.inOut(Easing.cubic)) : 0;
  const press = pressAt !== undefined ? p(pressAt, pressAt + 0.08) * (1 - p(pressAt + 0.08, pressAt + 0.25)) : 0;
  return (
    <div style={{ position: "relative", opacity: Math.min(1, k * 1.3), scale: String((0.9 + 0.1 * k) * (1 - 0.05 * press)) }}>
      <div style={{ width: w, height: w * 0.15, borderRadius: 8, background: RED, color: "#fff", fontFamily: SANS, fontSize: w * 0.065, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 ${18 - 12 * press}px 40px rgba(0,0,0,.45)` }}>{label}</div>
      {cursor && pressAt !== undefined && (
        <svg width={56} height={56} viewBox="0 0 24 24" style={{ position: "absolute", left: w * 0.5 + 260 * (1 - c), top: w * 0.07 + 180 * (1 - c), opacity: p(pressAt - 0.8, pressAt - 0.6) }}>
          <path d="M4 2 L4 20 L9 15 L12.5 22 L15.5 20.5 L12 13.5 L19 13.5 Z" fill="#fff" stroke="#111" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
};

/** Сложение в столбик: строки появляются по очереди, итог подчёркнут */
export const SumColumn: React.FC<{ rows: { label: string; value: string; at: number; color?: string }[]; total: { label: string; value: string; at: number }; note?: string; w?: number }> = ({ rows, total, note = "OUR CALCULATION · FIGURES FROM THE FTC COMPLAINT", w = 900 }) => {
  const { p } = useT();
  const kt = p(total.at, total.at + 0.4, easeBack);
  return (
    <div style={{ width: w, padding: "40px 56px", borderRadius: 22, background: "rgba(4,30,38,.78)", boxShadow: "0 30px 80px rgba(0,0,0,.5)", display: "flex", flexDirection: "column", gap: 14 }}>
      {rows.map((r, i) => {
        const k = p(r.at, r.at + 0.35, Easing.out(Easing.cubic));
        return (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", opacity: k, translate: `${(1 - k) * 30}px 0` }}>
            <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 34, letterSpacing: "0.12em", color: C6.mint, textTransform: "uppercase" }}>{i ? "+ " : ""}{r.label}</div>
            <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 64, color: r.color ?? C6.ink, fontVariantNumeric: "tabular-nums" }}>{r.value}</div>
          </div>
        );
      })}
      <div style={{ height: 4, background: C6.accent, borderRadius: 2, width: `${100 * p(total.at - 0.3, total.at)}%`, marginTop: 6 }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", opacity: kt, scale: String(0.9 + 0.1 * kt), transformOrigin: "right center" }}>
        <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 34, letterSpacing: "0.12em", color: C6.accent, textTransform: "uppercase" }}>{total.label}</div>
        <div style={{ fontFamily: SERIF, fontSize: 104, color: C6.accent, lineHeight: 1 }}>{total.value}</div>
      </div>
      <div style={{ marginTop: 8 }}><Note o={p(rows[0].at, rows[0].at + 0.5)}>{note}</Note></div>
    </div>
  );
};

/** Две колонки: цена коробки против сбора на коробку */
export const BoxVsFee: React.FC<{ at: number; feeAt: number; left: [string, string]; right: [string, string]; note?: string; mult?: string; multAt?: number; ratio?: number }> = ({ at, feeAt, left, right, note = "OUR CALCULATION · $273.44 ÷ 8 BOXES", mult, multAt, ratio = 1.87 }) => {
  const { p } = useT();
  const kl = p(at, at + 0.4, easeBack);
  const kr = p(feeAt, feeAt + 0.45, easeBack);
  const hr = 560, hl = hr / ratio;
  const col = (lab: string, val: string, h: number, k: number, color: string) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, opacity: Math.min(1, k * 1.3) }}>
      <div style={{ fontFamily: SANS, fontWeight: 900, fontSize: 92, color }}>{val}</div>
      <div style={{ width: 230, height: h * k, background: color, borderRadius: "14px 14px 0 0", boxShadow: "0 20px 50px rgba(0,0,0,.4)" }} />
      <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 30, letterSpacing: "0.16em", color: C6.ink, textTransform: "uppercase" }}>{lab}</div>
    </div>
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 160, height: 760, position: "relative" }}>
        {col(left[0], left[1], hl, kl, "#8EC5FF")}
        {col(right[0], right[1], hr, kr, C6.loss)}
        {mult && multAt !== undefined && <div style={{ position: "absolute", left: "50%", top: 120, translate: "-50% 0", opacity: p(multAt, multAt + 0.3), scale: String(0.8 + 0.2 * p(multAt, multAt + 0.35, easeBack)), fontFamily: SERIF, fontSize: 96, color: C6.accent }}>{mult}</div>}
      </div>
      <Note o={kl}>{note}</Note>
    </div>
  );
};

/** Восемь штатов: без налога с продаж / линзы освобождены — строку «Taxes & fees» брали везде */
export const StatesBoard: React.FC<{ a: { st: string; at: number }[]; b: { st: string; at: number }[]; stampAt?: number }> = ({ a, b, stampAt }) => {
  const { p } = useT();
  const tile = (s: { st: string; at: number }, color: string) => {
    const k = p(s.at, s.at + 0.3, easeBack);
    return <div key={s.st} style={{ opacity: Math.min(1, k * 1.4), scale: String(0.8 + 0.2 * k), padding: "18px 26px", minWidth: 340, borderRadius: 12, background: "rgba(4,30,38,.82)", borderLeft: `8px solid ${color}`, fontFamily: SERIF, fontSize: 52, color: C6.ink }}>{s.st}</div>;
  };
  const ks = stampAt !== undefined ? p(stampAt, stampAt + 0.3, easeBack) : 0;
  return (
    <div style={{ position: "relative", display: "flex", gap: 90, alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <Note o={p(a[0].at - 0.3, a[0].at)} color={C6.accent}>NO STATE SALES TAX</Note>
        {a.map((s) => tile(s, C6.accent))}
      </div>
      {b.length > 0 && <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <Note o={p(b[0].at - 0.3, b[0].at)} color="#8EC5FF">CONTACT LENSES EXEMPT*</Note>
        {b.map((s) => tile(s, "#8EC5FF"))}
        <div style={{ marginTop: 10 }}><Note o={p(b[0].at, b[0].at + 0.4)}>* ACCORDING TO THE FTC COMPLAINT, ¶49</Note></div>
      </div>}
      {stampAt !== undefined && (
        <div style={{ position: "absolute", left: "50%", top: "52%", translate: "-50% -50%", rotate: "-7deg", opacity: Math.min(1, ks * 1.5), scale: String(1.6 - 0.6 * ks), padding: "14px 34px", border: `7px solid ${C6.loss}`, borderRadius: 14, color: C6.loss, background: "rgba(4,30,38,.7)", fontFamily: SANS, fontWeight: 900, fontSize: 58, letterSpacing: "0.06em", whiteSpace: "nowrap" }}>“TAXES &amp; FEES” CHARGED ANYWAY</div>
      )}
    </div>
  );
};

/** Письмо с вложенной презентацией — реконструкция (иск не публикует письмо) */
export const EmailCard: React.FC<{ at: number; slideAt?: number }> = ({ at, slideAt }) => {
  const { p } = useT();
  const k = p(at, at + 0.45, easeBack);
  const ks = slideAt !== undefined ? p(slideAt, slideAt + 0.5, Easing.out(Easing.cubic)) : 0;
  return (
    <div style={{ position: "relative", width: 1300, height: 700 }}>
      <div style={{ position: "absolute", left: 0, top: 0, width: 900, opacity: Math.min(1, k * 1.3), scale: String(0.92 + 0.08 * k), borderRadius: 16, background: "#f7f6f2", boxShadow: "0 30px 90px rgba(0,0,0,.55)", overflow: "hidden", fontFamily: SANS, color: "#222" }}>
        <div style={{ background: "#2b3a40", color: "#fff", padding: "16px 26px", fontSize: 24, fontWeight: 700, letterSpacing: "0.06em" }}>INBOX</div>
        <div style={{ padding: "26px 34px", display: "flex", flexDirection: "column", gap: 12, fontSize: 30 }}>
          <div><b>Date:</b> Wed, Aug 31, 2022</div>
          <div><b>To:</b> Cary Samourkachian <span style={{ color: "#777", fontSize: 24 }}>(Speed Commerce address)</span></div>
          <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 16, padding: "14px 18px", border: "2px solid #ccc", borderRadius: 10, width: 470, background: "#fff" }}>
            <div style={{ width: 54, height: 64, borderRadius: 6, background: "#C9472B", color: "#fff", fontWeight: 900, fontSize: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>P</div>
            <div style={{ fontSize: 26 }}>presentation.pptx<div style={{ fontSize: 20, color: "#777" }}>PowerPoint attachment</div></div>
          </div>
        </div>
      </div>
      {slideAt !== undefined && (
        <div style={{ position: "absolute", left: 560, top: 230, width: 740, height: 440, opacity: ks, translate: `${(1 - ks) * 60}px 0`, borderRadius: 10, background: "#fff", boxShadow: "0 30px 90px rgba(0,0,0,.6)", padding: 30, boxSizing: "border-box", fontFamily: SANS }}>
          <div style={{ fontSize: 34, fontWeight: 800, color: "#222" }}>“Current Checkout Process”</div>
          <div style={{ marginTop: 22, width: 380, height: 54, borderRadius: 6, background: RED, color: "#fff", fontSize: 26, display: "flex", alignItems: "center", justifyContent: "center" }}>Continue</div>
          <div style={{ marginTop: 22, width: 380, padding: "10px 14px", border: "2px dashed #999", borderRadius: 6, fontSize: 22, color: "#555", position: "relative" }}>
            Order Summary · Taxes &amp; fees · Total
            <div style={{ position: "absolute", inset: -14, border: `5px solid ${C6.loss}`, borderRadius: 40, opacity: p(slideAt + 0.8, slideAt + 1.1) }} />
          </div>
          <div style={{ marginTop: 26, fontSize: 22, color: "#555" }}>total visible only after scrolling below “Continue”</div>
        </div>
      )}
      <div style={{ position: "absolute", left: 0, top: 690 }}><Note o={k}>ILLUSTRATION · DESCRIBED IN THE FTC COMPLAINT, ¶85</Note></div>
    </div>
  );
};

/** Схема: кто стоит за Lens.com (по иску ¶18–19) */
export const OrgChart: React.FC<{ at: number; ownerAt: number; speedAt: number; callAt: number }> = ({ at, ownerAt, speedAt, callAt }) => {
  const { p } = useT();
  const box = (label: string, sub: string, k: number, color: string, w = 420) => (
    <div style={{ opacity: Math.min(1, k * 1.4), scale: String(0.85 + 0.15 * k), width: w, padding: "22px 26px", borderRadius: 16, background: "rgba(4,30,38,.85)", border: `3px solid ${color}`, textAlign: "center" }}>
      <div style={{ fontFamily: SERIF, fontSize: 48, color: C6.ink }}>{label}</div>
      <div style={{ marginTop: 6, fontFamily: SANS, fontWeight: 600, fontSize: 22, letterSpacing: "0.14em", color, textTransform: "uppercase" }}>{sub}</div>
    </div>
  );
  const line = (k: number) => <div style={{ width: 6, height: 70 * k, background: C6.mint, opacity: 0.7, borderRadius: 3, alignSelf: "center" }} />;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
      {box("Cary Samourkachian", "sole owner · officer · employee of Lens.com", p(ownerAt, ownerAt + 0.4, easeBack), C6.accent, 760)}
      <div style={{ display: "flex", gap: 260 }}>{line(p(at, at + 0.4))}{line(p(speedAt, speedAt + 0.4))}</div>
      <div style={{ display: "flex", gap: 80, alignItems: "flex-start" }}>
        {box("Lens.com", "the store", p(at, at + 0.4, easeBack), C6.mint)}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {box("Speed Commerce", "his other company · customer service", p(speedAt, speedAt + 0.4, easeBack), C6.mint)}
          {line(p(callAt, callAt + 0.4))}
          {box("Call center", "outside vendor · Philippines", p(callAt, callAt + 0.4, easeBack), "#8EC5FF")}
        </div>
      </div>
      <div style={{ marginTop: 22 }}><Note o={p(at, at + 0.5)}>SOURCE: FTC v. LENS.COM COMPLAINT, ¶18–19</Note></div>
    </div>
  );
};

/** Годы поверх красной кнопки: ничего не изменилось */
export const YearsOverButton: React.FC<{ at: number; years: { y: string; at: number }[]; label?: string }> = ({ at, years, label }) => {
  const { p } = useT();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 50 }}>
      <div style={{ display: "flex", gap: 34 }}>
        {years.map((y) => {
          const k = p(y.at, y.at + 0.3, easeBack);
          return <div key={y.y} style={{ opacity: Math.min(1, k * 1.4), scale: String(0.7 + 0.3 * k), fontFamily: SERIF, fontSize: 90, color: C6.ink }}>{y.y}</div>;
        })}
      </div>
      <ContinueBtn at={at} cursor={false} />
      {label && <Note o={p(years[years.length - 1].at, years[years.length - 1].at + 0.4)} color={C6.accent}>{label}</Note>}
    </div>
  );
};

/** Финал: кнопка Continue, а под ней — пустое место, куда сползает бейдж NO HIDDEN FEES */
export const UnderTheButton: React.FC<{ at: number; badgeAt?: number; slideAt?: number; empty?: boolean; caption?: string; capAt?: number }> = ({ at, badgeAt, slideAt, empty = true, caption, capAt }) => {
  const { p } = useT();
  const ke = p(at + 0.3, at + 0.8);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: 960, top: 300, translate: "-50% -50%" }}><ContinueBtn at={at} cursor={false} /></div>
      {empty && <div style={{ position: "absolute", left: 960, top: 560, translate: "-50% -50%", width: 620, height: 260, borderRadius: 14, border: `4px dashed rgba(247,244,236,${0.45 * ke})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 26, letterSpacing: "0.2em", color: C6.mint, opacity: ke }}>BELOW THE BUTTON</div>
      </div>}
      {badgeAt !== undefined && <FeeBadge at={badgeAt} from={[1460, 300, 0.75]} to={[960, 580, 0.55]} moveAt={slideAt} moveDur={1.6} tilt={-6} />}
      {caption && capAt !== undefined && <div style={{ position: "absolute", left: 0, right: 0, top: 860, textAlign: "center", opacity: p(capAt, capAt + 0.4), fontFamily: SERIF, fontSize: 58, color: C6.ink }}>{caption}</div>}
    </AbsoluteFill>
  );
};

/** Минус 5 % против плюс 75 % */
export const PctVs: React.FC<{ at: number; bAt: number }> = ({ at, bAt }) => {
  const { p } = useT();
  const ka = p(at, at + 0.35, easeBack), kb = p(bAt, bAt + 0.4, easeBack);
  const card = (big: string, lab: string, k: number, color: string) => (
    <div style={{ opacity: Math.min(1, k * 1.4), scale: String(0.8 + 0.2 * k), display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "30px 60px", borderRadius: 20, background: "rgba(4,30,38,.82)", border: `4px solid ${color}` }}>
      <div style={{ fontFamily: SANS, fontWeight: 900, fontSize: 170, color, lineHeight: 1 }}>{big}</div>
      <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 28, letterSpacing: "0.16em", color: C6.ink, textTransform: "uppercase" }}>{lab}</div>
    </div>
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
      <div style={{ display: "flex", gap: 90 }}>
        {card("−5%", "AutoRefill discount", ka, "#5BE49B")}
        {card("+75%", "fee vs. subtotal, Feb. order", kb, C6.loss)}
      </div>
      <Note o={kb}>OUR CALCULATION · $273.44 ÷ $366.32 = 74.6%</Note>
    </div>
  );
};

/** Таблица «ребейт»: оплата сегодня, деньги — когда-нибудь по почте */
export const RebateWait: React.FC<{ at: number; mailAt: number }> = ({ at, mailAt }) => {
  const { p } = useT();
  const k1 = p(at, at + 0.35, easeBack), k2 = p(mailAt, mailAt + 0.4, easeBack);
  const row = (a: string, b: string, k: number, color: string) => (
    <div style={{ opacity: Math.min(1, k * 1.4), translate: `${(1 - k) * 30}px 0`, display: "flex", justifyContent: "space-between", alignItems: "baseline", width: 980, padding: "18px 30px", borderRadius: 14, background: "rgba(4,30,38,.8)", borderLeft: `8px solid ${color}` }}>
      <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 32, letterSpacing: "0.12em", color: C6.mint, textTransform: "uppercase" }}>{a}</div>
      <div style={{ fontFamily: SANS, fontWeight: 900, fontSize: 70, color }}>{b}</div>
    </div>
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {row("Charged when you order", "$649.71", k1, C6.loss)}
      {row("Mail-in rebate · prepaid card, later", "−$220.00", k2, "#5BE49B")}
      <div style={{ marginTop: 6 }}><Note o={k1}>FTC COMPLAINT ¶37, ¶43 · REBATE CARD: LENS.COM FAQ</Note></div>
    </div>
  );
};

/** Холодный вход: обещание ($146.32 за год) против итога на экране оформления (вырезка Fig. 12) */
export const OpenFlip: React.FC<{ at: number; totalAt: number }> = ({ at, totalAt }) => {
  const { p } = useT();
  const kl = p(at, at + 0.4, easeBack), kr = p(totalAt, totalAt + 0.35, easeBack);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: 140, top: 250, width: 680, opacity: Math.min(1, kl * 1.4) * (1 - 0.45 * kr), scale: String(0.9 + 0.1 * kl), display: "flex", flexDirection: "column", gap: 16 }}>
        <Note color={C6.mint}>ADVERTISED · A YEAR OF LENSES</Note>
        <div style={{ fontFamily: SERIF, fontSize: 230, color: C6.ink, lineHeight: 1 }}>$146<span style={{ fontSize: 120 }}>.32</span></div>
        <Note>8 BOXES · AFTER REBATE · FEB. 2026</Note>
      </div>
      <div style={{ position: "absolute", left: 930, top: 210, opacity: Math.min(1, kr * 1.4), translate: `${(1 - kr) * 80}px 0`, display: "flex", flexDirection: "column", gap: 16 }}>
        <Note color={C6.accent}>CHECKOUT TOTAL · SAME ORDER</Note>
        <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", boxShadow: "0 30px 90px rgba(0,0,0,.6)", border: "3px solid rgba(247,244,236,.9)" }}>
          <Img src={staticFile("evidence/t04/crop-fig12-total.png")} style={{ width: 850, display: "block" }} />
          <div style={{ position: "absolute", left: 850 * (575 / 690) - 14, top: 850 * (248 / 410) - 6, width: 850 * (85 / 690) + 28, height: 850 * (30 / 410) + 12, border: `5px solid ${C6.loss}`, borderRadius: 10, opacity: p(totalAt + 0.3, totalAt + 0.6) }} />
        </div>
        <Note o={kr}>SCREENSHOT · FTC COMPLAINT, FIG. 12</Note>
      </div>
    </AbsoluteFill>
  );
};

/** Кнопка сверху, а под ней — настоящая строка из Fig. 11 */
export const ButtonOverSummary: React.FC<{ at: number; downAt: number }> = ({ at, downAt }) => {
  const { p } = useT();
  const k = p(downAt, downAt + 0.5, Easing.out(Easing.cubic));
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: 960, top: 230, translate: "-50% -50%" }}><ContinueBtn at={at} cursor={false} /></div>
      <svg width={80} height={200} style={{ position: "absolute", left: 920, top: 310, opacity: k }}><path d={`M40 0 L40 ${150 * k}`} stroke={C6.accent} strokeWidth="8" strokeLinecap="round" /><path d={`M15 ${125 * k} L40 ${160 * k} L65 ${125 * k}`} stroke={C6.accent} strokeWidth="8" fill="none" strokeLinecap="round" /></svg>
      <div style={{ position: "absolute", left: 960, top: 690, translate: "-50% -50%", opacity: k, scale: String(0.92 + 0.08 * k), borderRadius: 12, overflow: "hidden", border: `4px solid ${C6.loss}`, boxShadow: "0 30px 90px rgba(0,0,0,.6)" }}>
        <Img src={staticFile("evidence/t04/crop-fig11-summary.png")} style={{ width: 900, display: "block" }} />
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 960, textAlign: "center" }}><Note o={k}>SCREENSHOTS · FTC COMPLAINT, FIG. 9–11 · BUTTON REDRAWN</Note></div>
    </AbsoluteFill>
  );
};
