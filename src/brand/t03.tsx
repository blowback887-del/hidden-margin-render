import React from "react";
import { AbsoluteFill, Easing } from "remotion";
import { useT } from "./hm";
import { C6, SANS, SERIF } from "./hm6";

// ===================================================================
// T03 «The Price Tag at Dollar General Isn't the Price» (19.11.2026) — графика выпуска.
// Визуальная идея: «ценник против кассы» — жёлтый полочный ценник слева, табло кассы справа.
// Сквозная карта: «ведомость» — мировые соглашения складываются в одну сумму, потом в часы продаж.
// Всё нарисованное — реконструкция; на кадре всегда подпись ILLUSTRATION / RECONSTRUCTION.
// ===================================================================

const easeBack = Easing.out(Easing.back(1.5));
const MONO = "'Courier New', 'DejaVu Sans Mono', monospace";

const Note: React.FC<{ children: React.ReactNode; o?: number }> = ({ children, o = 1 }) => (
  <div style={{ opacity: 0.85 * o, fontFamily: SANS, fontWeight: 600, fontSize: 24, letterSpacing: "0.2em", color: C6.mint, textTransform: "uppercase" }}>{children}</div>
);

/** Полочный ценник (жёлтая наклейка с ценой) */
export const ShelfTag: React.FC<{ at: number; item: string; price: string; scale?: number; fade?: number; label?: string }> = ({ at, item, price, scale = 1, fade, label = "SHELF PRICE" }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const f = fade !== undefined ? 1 - 0.75 * p(fade, fade + 1.6) : 1;
  return (
    <div style={{ opacity: Math.min(1, k * 1.4) * f, scale: String((0.8 + 0.2 * k) * scale), rotate: "-2deg", width: 520, height: 300, borderRadius: 10, background: "#FFE14D", boxShadow: "0 30px 70px rgba(0,0,0,.5)", position: "relative", overflow: "hidden", filter: f < 1 ? `saturate(${f})` : undefined }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 56, background: "#111", color: "#FFE14D", fontFamily: SANS, fontWeight: 800, fontSize: 26, letterSpacing: "0.22em", display: "flex", alignItems: "center", paddingLeft: 28 }}>{label}</div>
      <div style={{ position: "absolute", left: 28, top: 74, fontFamily: SANS, fontWeight: 700, fontSize: 28, color: "#222", textTransform: "uppercase", letterSpacing: "0.04em" }}>{item}</div>
      <div style={{ position: "absolute", right: 30, bottom: 6, fontFamily: SANS, fontWeight: 900, fontSize: 150, color: "#111", letterSpacing: "-0.02em" }}>{price}</div>
      <div style={{ position: "absolute", left: 28, bottom: 26, display: "flex", gap: 3 }}>
        {Array.from({ length: 22 }, (_, i) => <div key={i} style={{ width: i % 3 ? 3 : 6, height: 54, background: "#111" }} />)}
      </div>
    </div>
  );
};

/** Табло кассы: зелёные цифры на тёмном экране */
export const RegisterScreen: React.FC<{ at: number; item: string; price: string; scale?: number }> = ({ at, item, price, scale = 1 }) => {
  const { p } = useT();
  const k = p(at, at + 0.35, easeBack);
  const blink = p(at, at + 0.12) * (1 - p(at + 0.12, at + 0.3)) * 0.5;
  return (
    <div style={{ opacity: Math.min(1, k * 1.4), scale: String((0.85 + 0.15 * k) * scale), width: 560, height: 300, borderRadius: 22, background: "#1b2326", padding: 18, boxSizing: "border-box", boxShadow: "0 30px 70px rgba(0,0,0,.55), inset 0 0 0 3px #39464b" }}>
      <div style={{ width: "100%", height: "100%", borderRadius: 10, background: `rgba(10,40,24,${1 - blink})`, boxShadow: "inset 0 0 40px rgba(0,0,0,.7)", fontFamily: MONO, color: "#6CFF9A", textShadow: "0 0 14px rgba(108,255,154,.6)", padding: "18px 26px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, letterSpacing: "0.08em" }}><span>REGISTER</span><span>1 @</span></div>
        <div style={{ fontSize: 30, textTransform: "uppercase" }}>{item}</div>
        <div style={{ textAlign: "right", fontSize: 120, fontWeight: 700, lineHeight: 1 }}>{price}</div>
      </div>
    </div>
  );
};

/** Устройство выпуска: ценник против кассы. regAt — когда «пробивается» касса. */
export const ShelfVsRegister: React.FC<{ at: number; item: string; shelf: string; reg: string; regAt: number; note?: string; scale?: number; delta?: string; deltaAt?: number; fade?: number; label?: string }> = ({ at, item, shelf, reg, regAt, note = "ILLUSTRATION · PRICES FROM THE INSPECTION", scale = 1, delta, deltaAt, label }) => {
  const { p } = useT();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 34, scale: String(scale) }}>
      <div style={{ display: "flex", alignItems: "center", gap: 70 }}>
        <ShelfTag at={at} item={item} price={shelf} label={label} />
        <div style={{ opacity: p(regAt - 0.2, regAt), fontFamily: SERIF, fontSize: 110, color: C6.accent }}>→</div>
        <RegisterScreen at={regAt} item={item} price={reg} />
      </div>
      {delta && <div style={{ opacity: p(deltaAt ?? regAt + 0.6, (deltaAt ?? regAt + 0.6) + 0.3), scale: String(0.8 + 0.2 * p(deltaAt ?? regAt + 0.6, (deltaAt ?? regAt + 0.6) + 0.35, easeBack)), fontFamily: SANS, fontWeight: 900, fontSize: 130, color: C6.loss, lineHeight: 1, textShadow: "0 6px 24px rgba(0,0,0,.45)" }}>{delta}</div>}
      <Note o={p(at + 0.3, at + 0.7)}>{note}</Note>
    </div>
  );
};

/** Табличка у кассы (реконструкция по жалобе Андерсона). stampAt — штамп поверх. */
export const FinalSign: React.FC<{ at: number; hlAt?: number; stamp?: string; stampAt?: number; scale?: number; tilt?: number }> = ({ at, hlAt, stamp, stampAt, scale = 1, tilt = -1.5 }) => {
  const { p } = useT();
  const k = p(at, at + 0.45, easeBack);
  const hk = hlAt !== undefined ? p(hlAt, hlAt + 0.5, Easing.out(Easing.cubic)) : 0;
  const sk = stampAt !== undefined ? p(stampAt, stampAt + 0.25, Easing.out(Easing.back(2.2))) : 0;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26, scale: String(scale) }}>
      <div style={{ position: "relative", opacity: Math.min(1, k * 1.4), scale: String(0.85 + 0.15 * k), rotate: `${tilt}deg`, width: 980, padding: "70px 80px 64px", background: "#fbfaf6", boxShadow: "0 40px 90px rgba(0,0,0,.55)", borderRadius: 6, textAlign: "center" }}>
        {/* скотч по углам */}
        {[[-30, -18, -38], [930, -18, 38]].map(([x, y, r], i) => <div key={i} style={{ position: "absolute", left: x, top: y, width: 110, height: 40, background: "rgba(235,228,200,.75)", rotate: `${r}deg` }} />)}
        <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 58, lineHeight: 1.18, color: "#151515" }}>Prices cannot be changed at the register.</div>
        <div style={{ marginTop: 34, display: "inline-block", position: "relative", fontFamily: SANS, fontWeight: 900, fontSize: 84, color: "#151515", letterSpacing: "0.01em" }}>
          <div style={{ position: "absolute", left: -14, top: 8, height: "86%", width: `calc(${hk * 100}% + 28px)`, background: "rgba(255,209,102,.8)", zIndex: 0, borderRadius: 6 }} />
          <span style={{ position: "relative" }}>ALL PRICES ARE FINAL.</span>
        </div>
        {stamp && <div style={{ position: "absolute", left: "72%", top: "88%", translate: "-50% -50%", rotate: "-12deg", opacity: sk, scale: String(2 - sk), border: `10px solid ${C6.loss}`, borderRadius: 18, padding: "8px 36px", fontFamily: SANS, fontWeight: 900, fontSize: 76, color: C6.loss, letterSpacing: "0.06em", whiteSpace: "nowrap", background: "rgba(251,250,246,.35)" }}>{stamp}</div>}
      </div>
      <Note o={p(at + 0.3, at + 0.7)}>RECONSTRUCTION · SIGN TEXT AS QUOTED BY WCPO</Note>
    </div>
  );
};

/** Сетка ценников: n штук, bad — сколько красных (по одному с шагом), failAt — штамп FAIL */
export const TagGrid: React.FC<{ at: number; n?: number; cols?: number; bad?: number; badAt?: number; badTimes?: number[]; step?: number; fail?: string; failAt?: number; label?: string; cell?: number }> = ({ at, n = 100, cols = 20, bad = 3, badAt, badTimes, step = 0.5, fail = "FAIL", failAt, label, cell = 58 }) => {
  const { p } = useT();
  const rows = Math.ceil(n / cols);
  const t0 = badAt ?? at + 0.8;
  const nb = badTimes?.length ?? bad;
  const badIdx = Array.from({ length: nb }, (_, i) => n <= 30 ? i : (i * 37 + 11) % n);
  const fk = failAt !== undefined ? p(failAt, failAt + 0.25, Easing.out(Easing.back(2))) : 0;
  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, ${cell}px)`, gap: cell * 0.22 }}>
        {Array.from({ length: n }, (_, i) => {
          const vis = p(at + (i / n) * 0.8, at + (i / n) * 0.8 + 0.2);
          const bi = badIdx.indexOf(i);
          const tb = bi >= 0 ? (badTimes?.[bi] ?? t0 + bi * step) : 0;
          const r = bi >= 0 ? p(tb, tb + 0.2) : 0;
          return <div key={i} style={{ width: cell, height: cell * 0.62, borderRadius: 6, opacity: vis, background: r > 0.5 ? C6.loss : "#FFE14D", boxShadow: r > 0.5 ? `0 0 18px ${C6.loss}` : "0 4px 10px rgba(0,0,0,.35)", scale: String(1 + 0.25 * r * (1 - p(tb + 0.2, tb + 0.5))) }} />;
        })}
      </div>
      {label && <div style={{ opacity: p(at + 0.4, at + 0.8), fontFamily: SANS, fontWeight: 800, fontSize: 30, letterSpacing: "0.16em", color: C6.ink }}>{label}</div>}
      {failAt !== undefined && <div style={{ position: "absolute", left: "50%", top: `${(rows * cell * 0.84) / 2}px`, translate: "-50% -50%", rotate: "-10deg", opacity: fk, scale: String(1.8 - 0.8 * fk), border: `10px solid ${C6.loss}`, borderRadius: 16, padding: "4px 34px", fontFamily: SANS, fontWeight: 900, fontSize: 120, color: C6.loss, background: "rgba(6,58,71,.82)" }}>{fail}</div>}
    </div>
  );
};

/** 20 магазинов округа точками: краснеют по одной с redAt; green — индекс точки, которая станет зелёной */
export const StorePins: React.FC<{ at: number; redAt: number; dur?: number; green?: number; greenAt?: number; title?: string }> = ({ at, redAt, dur = 2.2, green, greenAt, title }) => {
  const { p } = useT();
  // рассыпь точек «как на карте округа» (координаты условные)
  const pts: [number, number][] = [[120, 90], [260, 60], [400, 120], [560, 80], [700, 140], [160, 230], [320, 200], [470, 260], [620, 230], [760, 290], [90, 360], [240, 340], [390, 400], [540, 370], [690, 430], [180, 500], [330, 540], [480, 510], [630, 560], [780, 520]];
  return (
    <div style={{ position: "relative", width: 880, height: 680 }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: 40, border: `3px dashed ${C6.line}`, opacity: p(at, at + 0.4) }} />
      {title && <div style={{ position: "absolute", left: 0, right: 0, top: -64, textAlign: "center", opacity: p(at, at + 0.4), fontFamily: SANS, fontWeight: 800, fontSize: 30, letterSpacing: "0.2em", color: C6.ink }}>{title}</div>}
      {pts.map(([x, y], i) => {
        const vis = p(at + i * 0.04, at + i * 0.04 + 0.25);
        const tr = redAt + (i / pts.length) * dur;
        const r = p(tr, tr + 0.15);
        const g = green === i && greenAt !== undefined ? p(greenAt, greenAt + 0.3) : 0;
        const col = g > 0.5 ? C6.money : r > 0.5 ? C6.loss : C6.ink;
        return (
          <div key={i} style={{ position: "absolute", left: x + 40, top: y + 50, translate: "-50% -50%", opacity: vis, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 38, height: 38, borderRadius: "50% 50% 50% 0", rotate: "-45deg", background: col, boxShadow: `0 0 ${r > 0.5 || g > 0.5 ? 22 : 6}px ${col}`, scale: String(1 + 0.3 * (r - p(tr + 0.15, tr + 0.4)) + 0.4 * g) }} />
          </div>
        );
      })}
    </div>
  );
};

/** Ведомость мировых: строки появляются в свои моменты, итог — отдельно (сквозная карта выпуска) */
export const Ledger: React.FC<{ rows: { label: string; value: string; at: number }[]; total?: { label: string; value: string; at: number }; title?: string; w?: number }> = ({ rows, total, title = "PRICING SETTLEMENTS · STATES", w = 760 }) => {
  const { p } = useT();
  const at0 = 0.05; // ведомость видна с начала сцены, строки дописываются
  return (
    <div style={{ width: w, padding: "34px 44px 40px", background: "#f6f1e7", color: "#1b2b2f", fontFamily: MONO, boxShadow: "0 30px 70px rgba(0,0,0,.5)", opacity: p(at0, at0 + 0.3), rotate: "1deg" }}>
      <div style={{ textAlign: "center", fontWeight: 700, fontSize: 26, letterSpacing: "0.18em", marginBottom: 18, borderBottom: "2px dashed #9a8f7a", paddingBottom: 14 }}>{title}</div>
      {rows.map((r, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 32, lineHeight: 1.5, opacity: p(r.at, r.at + 0.2), translate: `${(1 - p(r.at, r.at + 0.25)) * 18}px 0` }}><span>{r.label}</span><span>{r.value}</span></div>
      ))}
      {total && (
        <div style={{ marginTop: 14, borderTop: "2px dashed #9a8f7a", paddingTop: 14, display: "flex", justifyContent: "space-between", fontSize: 40, fontWeight: 700, opacity: p(total.at, total.at + 0.25), color: "#a1271d" }}><span>{total.label}</span><span>{total.value}</span></div>
      )}
    </div>
  );
};

/** Часы продаж: стрелка обегает круг и останавливается на stop минут; подпись — расчёт */
export const SalesClock: React.FC<{ at: number; stopAt: number; minutes: number; label?: string; sub?: string }> = ({ at, stopAt, minutes, label, sub }) => {
  const { p } = useT();
  const k = p(at, stopAt, Easing.inOut(Easing.cubic));
  const m = minutes * k;
  const R = 230;
  const ang = (m / 60) * 360; // минутная стрелка
  const hAng = (m / 720) * 360;
  const arc = (a: number) => { const r = (a - 90) * Math.PI / 180; return [260 + R * Math.cos(r), 260 + R * Math.sin(r)]; };
  const sweep = Math.min(359.9, (Math.min(m, 60) / 60) * 360);
  const [ex, ey] = arc(sweep);
  const hh = Math.floor(m / 60), mm = Math.floor(m % 60);
  const done = p(stopAt, stopAt + 0.3);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 70, opacity: p(at - 0.2, at + 0.2) }}>
      <svg width={520} height={520}>
        <circle cx={260} cy={260} r={R + 14} fill="#0b1e24" stroke={C6.line} strokeWidth={6} />
        {m >= 60 && <circle cx={260} cy={260} r={R - 30} fill="none" stroke={C6.money} strokeWidth={36} opacity={0.28} />}
        <path d={`M 260 260 L 260 ${260 - R} A ${R} ${R} 0 ${sweep > 180 ? 1 : 0} 1 ${ex} ${ey} Z`} fill={C6.money} opacity={0.35} />
        {Array.from({ length: 12 }, (_, i) => { const [x1, y1] = arc(i * 30); const r2 = (i * 30 - 90) * Math.PI / 180; return <line key={i} x1={x1} y1={y1} x2={260 + (R - 26) * Math.cos(r2)} y2={260 + (R - 26) * Math.sin(r2)} stroke={C6.ink} strokeWidth={6} />; })}
        <line x1={260} y1={260} x2={260 + 120 * Math.cos((hAng - 90) * Math.PI / 180)} y2={260 + 120 * Math.sin((hAng - 90) * Math.PI / 180)} stroke={C6.ink} strokeWidth={14} strokeLinecap="round" />
        <line x1={260} y1={260} x2={260 + 200 * Math.cos((ang - 90) * Math.PI / 180)} y2={260 + 200 * Math.sin((ang - 90) * Math.PI / 180)} stroke={C6.accent} strokeWidth={8} strokeLinecap="round" />
        <circle cx={260} cy={260} r={14} fill={C6.accent} />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontFamily: SERIF, fontSize: 170, lineHeight: 1, color: done > 0.5 ? C6.accent : C6.ink }}>{hh}:{String(mm).padStart(2, "0")}</div>
        {label && <div style={{ opacity: done, fontFamily: SANS, fontWeight: 800, fontSize: 36, letterSpacing: "0.08em", color: C6.ink, maxWidth: 760 }}>{label}</div>}
        {sub && <div style={{ opacity: done, fontFamily: SANS, fontWeight: 600, fontSize: 26, letterSpacing: "0.16em", color: C6.mint, textTransform: "uppercase" }}>{sub}</div>}
      </div>
    </div>
  );
};

/** Карточки штатов: правило и источник; каждая появляется в свой момент */
export const StateCards: React.FC<{ cards: { state: string; rule: string; src: string; at: number }[] }> = ({ cards }) => {
  const { p } = useT();
  return (
    <div style={{ display: "flex", gap: 36 }}>
      {cards.map((c, i) => {
        const k = p(c.at, c.at + 0.4, easeBack);
        return (
          <div key={i} style={{ opacity: Math.min(1, k * 1.4), translate: `0 ${(1 - k) * 40}px`, width: 520, minHeight: 360, padding: "34px 36px", borderRadius: 22, background: "rgba(3,30,38,.92)", boxShadow: `inset 0 0 0 3px ${C6.accent}55, 0 26px 60px rgba(0,0,0,.5)`, display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontFamily: SERIF, fontSize: 64, color: C6.accent, lineHeight: 1 }}>{c.state}</div>
            <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 40, lineHeight: 1.22, color: C6.ink }}>{c.rule}</div>
            <div style={{ marginTop: "auto", fontFamily: SANS, fontWeight: 600, fontSize: 22, letterSpacing: "0.12em", color: C6.mint, textTransform: "uppercase" }}>{c.src}</div>
          </div>
        );
      })}
    </div>
  );
};

/** Весы: чаша SHELF вверху, REGISTER внизу (наклон нарастает к tiltAt) */
export const ScaleTilt: React.FC<{ at: number; tiltAt: number }> = ({ at, tiltAt }) => {
  const { p } = useT();
  const k = p(tiltAt, tiltAt + 0.9, Easing.out(Easing.back(1.4)));
  const a = 14 * k; // градусы: правая чаша (REGISTER) опускается
  const L = 360;
  const rad = (a * Math.PI) / 180;
  const lx = -L * Math.cos(rad), ly = -L * Math.sin(rad), rx = L * Math.cos(rad), ry = L * Math.sin(rad);
  const pan = (x: number, y: number, label: string, col: string) => (
    <div style={{ position: "absolute", left: 480 + x, top: 200 + y, translate: "-50% 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: 3, height: 120, background: C6.ink, opacity: 0.7 }} />
      <div style={{ width: 260, height: 40, borderRadius: "0 0 130px 130px", background: col }} />
      <div style={{ marginTop: 16, fontFamily: SANS, fontWeight: 800, fontSize: 32, letterSpacing: "0.18em", color: col }}>{label}</div>
    </div>
  );
  return (
    <div style={{ position: "relative", width: 960, height: 620, opacity: p(at, at + 0.4) }}>
      <div style={{ position: "absolute", left: 474, top: 200, width: 12, height: 380, background: C6.ink, opacity: 0.8, borderRadius: 6 }} />
      <div style={{ position: "absolute", left: 380, top: 570, width: 200, height: 16, background: C6.ink, opacity: 0.8, borderRadius: 8 }} />
      <svg width={960} height={620} style={{ position: "absolute", inset: 0 }}><line x1={480 + lx} y1={200 + ly} x2={480 + rx} y2={200 + ry} stroke={C6.ink} strokeWidth={12} strokeLinecap="round" /></svg>
      {pan(lx, ly, "SHELF", C6.accent)}
      {pan(rx, ry, "REGISTER", C6.loss)}
    </div>
  );
};

/**
 * Жизнь в графической сцене без видео: движется только мягкий свет на ФОНЕ, текст и цифры стоят на месте.
 * (Урок T04, Павел 19.11.2026: прежний наезд на всю сцену заставлял буквы и цифры «плавать».)
 */
export const Drift: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useT();
  const x = 30 + 45 * Math.sin(t * 0.3), y = 35 + 30 * Math.cos(t * 0.22);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ background: `radial-gradient(circle at ${x}% ${y}%, rgba(127,209,199,.16), rgba(127,209,199,0) 50%)`, pointerEvents: "none" }} />
      {children}
    </AbsoluteFill>
  );
};
