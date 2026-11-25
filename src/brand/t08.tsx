import React from "react";
import { Easing } from "remotion";
import { useT } from "./hm";
import { C6, SANS, SERIF } from "./hm6";

// ===================================================================
// T08 «McDonald's Said $9. The Menu Said $18.» (25.11.2026) — графика выпуска.
// Визуальная идея: ТАБЛО МЕНЮ (MenuBoard) — тёмное цифровое табло фастфуда без чужих логотипов.
//   Оно появляется в начале ($17.59), растёт по ценам, теряет строку «Extra Value Meals» (2019),
//   получает её обратно с «−15%» (2025) и в финале гаснет рядом с $9.29.
// Нормы (урок T04): размеры заданы заранее, новое только проявляется (opacity/transform), соседи не двигаются.
// Цифры — из cloud/voice/t08-text/research.md.
// ===================================================================

const easeBack = Easing.out(Easing.back(1.4));
const BOARD = "#0b0d0e";
const AMBER = "#FFC94A";

const Note: React.FC<{ children: React.ReactNode; o?: number; color?: string; size?: number }> = ({ children, o = 1, color = C6.mint, size = 22 }) => (
  <div style={{ opacity: 0.92 * o, fontFamily: SANS, fontWeight: 600, fontSize: size, letterSpacing: "0.18em", color, textTransform: "uppercase", textAlign: "center" }}>{children}</div>
);

export type BoardRow = {
  name: string; price: string; at?: number;      // появление строки (по умолчанию — вместе с табло)
  to?: string; toAt?: number;                    // цена меняется на to в момент toAt
  goneAt?: number;                               // строка гаснет (остаётся пустое место)
  tag?: string; tagAt?: number;                  // ярлык справа («−15%», «LIMITED»)
  hlAt?: number;                                 // подсветка строки
  dim?: boolean;
};

/** Табло меню: заголовок + строки «название … цена». Без логотипов брендов. */
export const MenuBoard: React.FC<{ at?: number; rows: BoardRow[]; title?: string; w?: number; rh?: number; foot?: string; footAt?: number; offAt?: number }> = ({ at = 0.05, rows, title = "MENU", w = 900, rh = 96, foot, footAt, offAt }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const off = offAt !== undefined ? p(offAt, offAt + 0.6) : 0;
  return (
    <div style={{ opacity: Math.min(1, k * 1.4) * (1 - 0.85 * off), scale: String(0.94 + 0.06 * k), width: w, padding: "28px 36px 30px", borderRadius: 22, background: `linear-gradient(180deg,#15191b,${BOARD})`, boxShadow: "inset 0 0 0 3px #2a3134, 0 40px 80px rgba(0,0,0,.55)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 14, borderBottom: "2px solid #2a3134" }}>
        <span style={{ fontFamily: SANS, fontWeight: 800, fontSize: 26, letterSpacing: "0.3em", color: AMBER }}>{title}</span>
        <span style={{ width: 14, height: 14, borderRadius: 7, background: "#58e08f", boxShadow: "0 0 12px #58e08f" }} />
      </div>
      {rows.map((r, i) => {
        const o = r.at !== undefined ? p(r.at, r.at + 0.3) : 1;
        const g = r.goneAt !== undefined ? p(r.goneAt, r.goneAt + 0.9) : 0;
        const ch = r.toAt !== undefined ? p(r.toAt, r.toAt + 0.25) : 0;
        const tg = r.tagAt !== undefined ? p(r.tagAt, r.tagAt + 0.3, easeBack) : 0;
        const hl = r.hlAt !== undefined ? p(r.hlAt, r.hlAt + 0.3) : 0;
        const col = r.dim ? "rgba(247,244,236,.45)" : C6.ink;
        return (
          <div key={i} style={{ position: "relative", height: rh, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 18px", marginTop: 8, borderRadius: 12, opacity: o * (1 - g), filter: g > 0 ? `blur(${6 * g}px)` : undefined, background: hl > 0 ? `rgba(255,201,74,${0.16 * hl})` : "transparent", boxShadow: hl > 0 ? `inset 0 0 0 2px rgba(255,201,74,${hl})` : undefined }}>
            <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: rh * 0.36, color: col }}>{r.name}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 18 }}>
              {r.tag && <span style={{ opacity: tg, scale: String(0.6 + 0.4 * tg), padding: "6px 14px", borderRadius: 10, background: C6.accent, color: "#13262b", fontFamily: SANS, fontWeight: 800, fontSize: rh * 0.26, letterSpacing: "0.08em" }}>{r.tag}</span>}
              <span style={{ position: "relative", display: "inline-block", minWidth: rh * 2.1, height: rh * 0.7, textAlign: "right" }}>
                <span style={{ position: "absolute", right: 0, top: 0, opacity: 1 - ch, fontFamily: SERIF, fontSize: rh * 0.58, lineHeight: `${rh * 0.7}px`, color: AMBER }}>{r.price}</span>
                {r.to && <span style={{ position: "absolute", right: 0, top: 0, opacity: ch, translate: `0 ${(1 - ch) * -12}px`, fontFamily: SERIF, fontSize: rh * 0.58, lineHeight: `${rh * 0.7}px`, color: C6.loss }}>{r.to}</span>}
              </span>
            </span>
          </div>
        );
      })}
      {foot && <div style={{ marginTop: 16, opacity: footAt !== undefined ? p(footAt, footAt + 0.3) : 1 }}><Note size={20} color="rgba(247,244,236,.6)">{foot}</Note></div>}
    </div>
  );
};

/** Две цены рядом: «$9.29 — McDonald's average» против «$17.59 — one menu board». */
export const PriceDuel: React.FC<{ at?: number; a: { label: string; value: string; color?: string }; b: { label: string; value: string; color?: string; at: number }; w?: number }> = ({ at = 0.05, a, b, w = 1500 }) => {
  const { p } = useT();
  const ka = p(at, at + 0.35, easeBack);
  const kb = p(b.at, b.at + 0.35, easeBack);
  const card = (s: { label: string; value: string; color?: string }, k: number) => (
    <div style={{ opacity: Math.min(1, k * 1.4), translate: `0 ${(1 - k) * 30}px`, width: w * 0.44, padding: "40px 30px", borderRadius: 28, background: C6.panel, boxShadow: `inset 0 0 0 2px ${C6.line}, 0 30px 60px rgba(0,0,0,.4)`, textAlign: "center" }}>
      <div style={{ fontFamily: SERIF, fontSize: 190, lineHeight: 1, color: s.color ?? C6.accent }}>{s.value}</div>
      <div style={{ marginTop: 18 }}><Note size={26}>{s.label}</Note></div>
    </div>
  );
  return (
    <div style={{ width: w, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      {card(a, ka)}
      <div style={{ opacity: kb, fontFamily: SERIF, fontSize: 80, color: "rgba(247,244,236,.6)" }}>vs</div>
      {card(b, kb)}
    </div>
  );
};

/** Наш расчёт столбиком: $1.00 → +40% → $1.40 → −15% → $1.19. steps[i].at — момент шага. */
export const CalcSteps: React.FC<{ steps: { op?: string; value: string; at: number; final?: boolean }[]; w?: number; note?: string; noteAt?: number }> = ({ steps, w = 760, note, noteAt }) => {
  const { p } = useT();
  const k = p(Math.min(steps[0].at, noteAt ?? 99) - 0.2, Math.min(steps[0].at, noteAt ?? 99) + 0.2);
  return (
    <div style={{ opacity: k, width: w, padding: "30px 40px", borderRadius: 28, background: C6.panel, boxShadow: `inset 0 0 0 2px ${C6.line}, 0 30px 60px rgba(0,0,0,.4)` }}>
      {steps.map((s, i) => {
        const o = p(s.at, s.at + 0.3, easeBack);
        return (
          <div key={i} style={{ height: 130, display: "flex", alignItems: "center", justifyContent: "space-between", opacity: Math.min(1, o * 1.3), translate: `${(1 - o) * 40}px 0`, borderTop: i ? `2px solid ${C6.line}` : undefined }}>
            <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: 40, color: s.op?.startsWith("−") ? C6.money : s.op ? C6.loss : C6.mint, letterSpacing: "0.06em" }}>{s.op ?? "2019 PRICE"}</span>
            <span style={{ fontFamily: SERIF, fontSize: s.final ? 120 : 100, color: s.final ? C6.accent : C6.ink }}>{s.value}</span>
          </div>
        );
      })}
      {note && <div style={{ marginTop: 10, opacity: noteAt !== undefined ? p(noteAt, noteAt + 0.3) : 1 }}><Note size={20} color="rgba(247,244,236,.6)">{note}</Note></div>}
    </div>
  );
};

/** «Ножницы»: визиты людей с низким доходом вниз, с высоким — вверх. Линии рисуются через clip (transform-only). */
export const Scissors: React.FC<{ at?: number; w?: number; h?: number; lowLabel?: string; highLabel?: string; highAt?: number }> = ({ at = 0.1, w = 1100, h = 520, lowLabel = "LOWER-INCOME VISITS", highLabel = "HIGHER-INCOME VISITS", highAt }) => {
  const { p } = useT();
  const k = p(at - 0.2, at + 0.2);
  const lo = p(at, at + 1.4, Easing.inOut(Easing.cubic));
  const hi = p(highAt ?? at + 0.6, (highAt ?? at + 0.6) + 1.4, Easing.inOut(Easing.cubic));
  const mid = h / 2;
  return (
    <div style={{ opacity: k, width: w, height: h + 80, position: "relative" }}>
      <svg width={w} height={h} style={{ position: "absolute", top: 0, left: 0 }}>
        <line x1={0} y1={mid} x2={w} y2={mid} stroke="rgba(247,244,236,.25)" strokeWidth={2} strokeDasharray="8 10" />
        <path d={`M0 ${mid} C ${w * 0.4} ${mid} ${w * 0.6} ${h * 0.86} ${w} ${h * 0.9}`} stroke={C6.loss} strokeWidth={10} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - lo} />
        <path d={`M0 ${mid} C ${w * 0.4} ${mid} ${w * 0.6} ${h * 0.14} ${w} ${h * 0.1}`} stroke={C6.money} strokeWidth={10} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - hi} />
      </svg>
      <div style={{ position: "absolute", right: 0, top: h * 0.1 - 70, opacity: hi }}><Note size={26} color={C6.money}>{highLabel} ↑</Note></div>
      <div style={{ position: "absolute", right: 0, top: h * 0.9 + 26, opacity: lo }}><Note size={26} color={C6.loss}>{lowLabel} ↓</Note></div>
      <div style={{ position: "absolute", left: 0, top: h + 30 }}><Note size={20} color="rgba(247,244,236,.55)">US fast food · ~2 years · illustration</Note></div>
    </div>
  );
};

const Lock: React.FC<{ label: string; k: number; size?: number }> = ({ label, k, size = 220 }) => (
  <div style={{ opacity: Math.min(1, k * 1.4), scale: String(0.6 + 0.4 * k), display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
    <svg width={size} height={size} viewBox="0 0 24 24"><path d="M7 10V7a5 5 0 0 1 10 0v3h1.5v11h-13V10zm2 0h6V7a3 3 0 0 0-6 0z" fill={C6.accent} /></svg>
    <div style={{ padding: "8px 18px", borderRadius: 12, background: "rgba(0,0,0,.45)", fontFamily: SANS, fontWeight: 800, fontSize: 32, letterSpacing: "0.14em", color: C6.ink }}>{label}</div>
  </div>
);

/** Два замка на дешёвом обеде: «APP» и «IF AVAILABLE». */
export const TwoLocks: React.FC<{ aAt: number; bAt: number; a?: string; b?: string }> = ({ aAt, bAt, a = "THE APP", b = "IF THE DEAL IS STILL THERE" }) => {
  const { p } = useT();
  return (
    <div style={{ display: "flex", gap: 160, alignItems: "flex-end" }}>
      <Lock label={a} k={p(aAt, aAt + 0.35, easeBack)} />
      <Lock label={b} k={p(bAt, bAt + 0.35, easeBack)} />
    </div>
  );
};

/** Три шага схемы: RAISE → REMOVE → RESELL (каждый на своём слове). */
export const ThreeMoves: React.FC<{ steps: { word: string; sub: string; at: number }[] }> = ({ steps }) => {
  const { p } = useT();
  return (
    <div style={{ display: "flex", gap: 40, alignItems: "stretch" }}>
      {steps.map((s, i) => {
        const k = p(s.at, s.at + 0.35, easeBack);
        return (
          <React.Fragment key={i}>
            {i > 0 && <div style={{ opacity: k, alignSelf: "center", fontFamily: SERIF, fontSize: 90, color: "rgba(247,244,236,.5)" }}>→</div>}
            <div style={{ opacity: Math.min(1, k * 1.4), translate: `0 ${(1 - k) * 30}px`, width: 430, padding: "40px 26px", borderRadius: 26, background: C6.panel, boxShadow: `inset 0 0 0 2px ${i === 2 ? C6.accent : C6.line}`, textAlign: "center" }}>
              <div style={{ fontFamily: SERIF, fontSize: 96, color: i === 2 ? C6.accent : C6.ink }}>{s.word}</div>
              <div style={{ marginTop: 12 }}><Note size={24}>{s.sub}</Note></div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

/** Таблички-названия «акций дешёвой еды» сменяют друг друга на одном месте; последняя — «?». */
export const NameCarousel: React.FC<{ names: { text: string; year: string; at: number }[]; w?: number }> = ({ names, w = 1000 }) => {
  const { p } = useT();
  return (
    <div style={{ position: "relative", width: w, height: 300 }}>
      {names.map((n, i) => {
        const kin = p(n.at, n.at + 0.3, easeBack);
        const nx = names[i + 1];
        const kout = nx ? p(nx.at - 0.05, nx.at + 0.2) : 0;
        return (
          <div key={i} style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", opacity: Math.min(1, kin * 1.4) * (1 - kout), scale: String(0.8 + 0.2 * kin), borderRadius: 30, background: BOARD, boxShadow: "inset 0 0 0 3px #2a3134" }}>
            <div style={{ fontFamily: SERIF, fontSize: 130, color: AMBER, lineHeight: 1 }}>{n.text}</div>
            <div style={{ marginTop: 16 }}><Note size={26}>{n.year}</Note></div>
          </div>
        );
      })}
    </div>
  );
};
