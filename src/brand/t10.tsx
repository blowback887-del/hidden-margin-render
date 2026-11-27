import React from "react";
import { Easing } from "remotion";
import { useT } from "./hm";
import { C6, SANS, SERIF } from "./hm6";

// ===================================================================
// T10 «Restaurants Got Greedy. Now They're Empty.» (27.11.2026) — графика выпуска.
// Визуальная идея: ЗАЛ РЕСТОРАНА СВЕРХУ (DiningRoom) — план зала с местами-точками. Тёплые места гаснут
//   по ходу истории (Gallup 53 → 39 %, закрытия — свет в зале гаснет целиком), на повороте с Chili's зал
//   снова заполняется. Отличие от T06 (чек растёт), T07 (след денег), T08 (табло), T09 (бирка).
// Нормы (урок T04): размеры заданы заранее; новое только проявляется (opacity/transform), соседи не двигаются.
// Все цифры — из cloud/voice/t10-text/script.md (исследование — проект claude/t10-research.md).
// ===================================================================

const easeBack = Easing.out(Easing.back(1.4));
const MONO = "'Courier New', 'DejaVu Sans Mono', monospace";
const PAPER = "#F7F3E8";
const INK = "#1E2326";
const WARM = "#FFC56B";

const Note: React.FC<{ children: React.ReactNode; o?: number; color?: string; size?: number }> = ({ children, o = 1, color = C6.mint, size = 22 }) => (
  <div style={{ opacity: 0.92 * o, fontFamily: SANS, fontWeight: 600, fontSize: size, letterSpacing: "0.18em", color, textTransform: "uppercase", textAlign: "center" }}>{children}</div>
);

// детерминированный порядок, в котором места пустеют/заполняются
const ORDER = (n: number) => Array.from({ length: n }, (_, i) => i).sort((a, b) => ((a * 37) % 101) - ((b * 37) % 101));

/** Зал сверху: 12 столов по 4 места = 48 мест.
 *  from — доля занятых мест в начале, to — доля после toAt; darkAt — свет в зале гаснет (закрытие);
 *  fillAt — зал заполняется полностью (тёплый свет); label/labelAt — подпись снизу; pct — показать проценты. */
export const DiningRoom: React.FC<{ at?: number; from?: number; to?: number; toAt?: number; darkAt?: number; fillAt?: number; label?: string; labelAt?: number; pctFrom?: string; pctTo?: string; w?: number; sign?: string }> = ({ at = 0.05, from = 0.9, to, toAt, darkAt, fillAt, label, labelAt, pctFrom, pctTo, w = 1100, sign }) => {
  const { p } = useT();
  const N = 48, cols = 4, rows = 3;
  const k = p(at, at + 0.4);
  const ord = ORDER(N);
  const rank: number[] = []; ord.forEach((s, i) => (rank[s] = i / N));
  const go = toAt !== undefined ? p(toAt, toAt + 1.2, Easing.inOut(Easing.cubic)) : 0;
  const level = from + ((to ?? from) - from) * go;
  const fill = fillAt !== undefined ? p(fillAt, fillAt + 1.4, Easing.inOut(Easing.cubic)) : 0;
  const dark = darkAt !== undefined ? p(darkAt, darkAt + 0.6) : 0;
  const h = w * 0.56;
  const tw = w / cols, th = h / rows;
  const pctShow = pctFrom ? (toAt !== undefined && go > 0.5 ? pctTo : pctFrom) : undefined;
  return (
    <div style={{ opacity: k, translate: `0 ${(1 - k) * 30}px`, width: w, position: "relative" }}>
      <div style={{ position: "relative", width: w, height: h, borderRadius: 26, background: "rgba(4,30,38,.72)", boxShadow: `inset 0 0 0 2px ${C6.line}, 0 30px 60px rgba(0,0,0,.45)`, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(70% 80% at 50% 45%, rgba(255,197,107,${0.16 * (1 - dark) + 0.1 * fill}), transparent 70%)` }} />
        {Array.from({ length: rows * cols }).map((_, t) => {
          const cx = (t % cols + 0.5) * tw, cy = (Math.floor(t / cols) + 0.5) * th;
          const R = Math.min(tw, th) * 0.2;
          return (
            <React.Fragment key={t}>
              <div style={{ position: "absolute", left: cx - R, top: cy - R, width: R * 2, height: R * 2, borderRadius: 14, background: "rgba(247,244,236,.10)", boxShadow: "inset 0 0 0 2px rgba(247,244,236,.18)" }} />
              {[[-1, 0], [1, 0], [0, -1], [0, 1]].map(([dx, dy], j) => {
                const s = t * 4 + j;
                const on = rank[s] < level ? 1 : 0;
                const filled = Math.max(on, rank[s] < fill ? 1 : 0);
                const o = filled * (1 - dark);
                const x = cx + dx * R * 1.75, y = cy + dy * R * 1.75, r = R * 0.42;
                return (
                  <div key={j} style={{ position: "absolute", left: x - r, top: y - r, width: r * 2, height: r * 2, borderRadius: "50%",
                    background: o > 0 ? WARM : "transparent", opacity: o > 0 ? 0.25 + 0.75 * o : 1,
                    boxShadow: o > 0 ? `0 0 ${r * 1.4}px rgba(255,197,107,${0.55 * o})` : "inset 0 0 0 2px rgba(247,244,236,.22)" }} />
                );
              })}
            </React.Fragment>
          );
        })}
        <div style={{ position: "absolute", inset: 0, background: "#020c10", opacity: 0.72 * dark }} />
        {sign && (
          <div style={{ position: "absolute", left: "50%", top: "50%", translate: "-50% -50%", rotate: "-6deg", opacity: dark, scale: String(0.8 + 0.2 * dark),
            padding: "14px 40px", border: `6px solid ${C6.loss}`, color: C6.loss, fontFamily: SANS, fontWeight: 900, fontSize: w * 0.075, letterSpacing: "0.12em", background: "rgba(6,20,26,.8)" }}>{sign}</div>
        )}
        {pctShow && (
          <div style={{ position: "absolute", right: 26, top: 18, fontFamily: SERIF, fontSize: w * 0.09, color: go > 0.5 ? C6.loss : WARM, opacity: 1 - dark }}>{pctShow}</div>
        )}
      </div>
      {label && <div style={{ marginTop: 22, opacity: p(labelAt ?? at, (labelAt ?? at) + 0.4) }}><Note size={24}>{label}</Note></div>}
    </div>
  );
};

export type RLine = { label: string; value: string; at?: number; fee?: boolean; hlAt?: number };

/** Чек выпуска (наша перерисовка опубликованного чека, подпись «as posted» ставит план сцен). */
export const Receipt10: React.FC<{ lines: RLine[]; head?: string; sub?: string; total?: { label: string; value: string; at: number }; w?: number; at?: number; circleAt?: number; circleLine?: number }> = ({ lines, head = "EARLS KITCHEN + BAR", sub = "DENVER, CO", total, w = 600, at = 0.05, circleAt, circleLine }) => {
  const { p } = useT();
  const fs = w * 0.052;
  const k = p(at, at + 0.35, easeBack);
  const lh = fs * 1.6;
  const ci = circleAt !== undefined ? p(circleAt, circleAt + 0.45) : 0;
  return (
    <div style={{ opacity: Math.min(1, k * 1.4), translate: `0 ${(1 - k) * 40}px`, width: w, position: "relative" }}>
      <div style={{ position: "relative", color: INK, fontFamily: MONO, padding: `${w * 0.06}px ${w * 0.07}px ${w * 0.05}px`, rotate: "1deg", filter: "drop-shadow(0 30px 40px rgba(0,0,0,.45))" }}>
        <div style={{ position: "absolute", inset: 0, background: PAPER, clipPath: "polygon(0 0, 100% 0, 100% 100%, 95% 98.6%, 90% 100%, 85% 98.6%, 80% 100%, 75% 98.6%, 70% 100%, 65% 98.6%, 60% 100%, 55% 98.6%, 50% 100%, 45% 98.6%, 40% 100%, 35% 98.6%, 30% 100%, 25% 98.6%, 20% 100%, 15% 98.6%, 10% 100%, 5% 98.6%, 0 100%)" }} />
        <div style={{ position: "relative", textAlign: "center", fontWeight: 700, fontSize: fs * 1.05, letterSpacing: "0.16em" }}>{head}</div>
        <div style={{ position: "relative", textAlign: "center", fontSize: fs * 0.72, letterSpacing: "0.12em", opacity: 0.7, marginTop: 4, paddingBottom: fs * 0.6, borderBottom: "2px dashed #9a9384" }}>{sub}</div>
        <div style={{ position: "relative", paddingTop: fs * 0.5 }}>
          {lines.map((l, i) => {
            const t0 = l.at ?? 0.05;
            const o = p(t0, t0 + 0.25);
            const hl = l.hlAt !== undefined ? p(l.hlAt, l.hlAt + 0.25) : 0;
            return (
              <div key={i} style={{ height: lh, fontSize: fs, position: "relative", color: l.fee ? "#B3261E" : INK }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "space-between", clipPath: `inset(-4px ${100 - 100 * o}% -4px -12px)` }}>
                  <div style={{ position: "absolute", left: -10, right: -10, top: 2, bottom: 2, background: "#FFD166", opacity: 0.75 * hl, borderRadius: 4 }} />
                  <span style={{ position: "relative", fontWeight: l.fee ? 700 : 400 }}>{l.label}</span>
                  <span style={{ position: "relative", fontWeight: 700 }}>{l.value}</span>
                </div>
                {circleLine === i && ci > 0 && (
                  <svg style={{ position: "absolute", left: -w * 0.06, top: -lh * 0.35, overflow: "visible" }} width={w * 0.98} height={lh * 1.7}>
                    <ellipse cx={w * 0.47} cy={lh * 0.85} rx={w * 0.47} ry={lh * 0.8} fill="none" stroke={C6.loss} strokeWidth={6} pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - ci} />
                  </svg>
                )}
              </div>
            );
          })}
        </div>
        {total && (
          <div style={{ position: "relative", marginTop: fs * 0.4, borderTop: "2px dashed #9a9384", paddingTop: fs * 0.45, display: "flex", justifyContent: "space-between", fontSize: fs * 1.2, fontWeight: 700, opacity: p(total.at, total.at + 0.25) }}>
            <span>{total.label}</span><span>{total.value}</span>
          </div>
        )}
      </div>
    </div>
  );
};

/** Развилка владельца: две таблички, вторая загорается в hlAt. */
export const ForkRoad: React.FC<{ at?: number; a?: string; b?: string; aSub?: string; bSub?: string; bAt?: number; hlAt?: number }> = ({ at = 0.05, a = "RAISE THE MENU", b = "ADD A LINE", aSub = "everybody sees it", bSub = "somewhere you won't look", bAt, hlAt }) => {
  const { p } = useT();
  const ka = p(at, at + 0.4, easeBack), kb = p(bAt ?? at + 0.3, (bAt ?? at + 0.3) + 0.4, easeBack);
  const hl = hlAt !== undefined ? p(hlAt, hlAt + 0.35) : 0;
  const card = (t: string, s: string, k: number, on: number, rot: number, dim: number) => (
    <div style={{ opacity: Math.min(1, k * 1.4) * (1 - 0.55 * dim), scale: String((0.7 + 0.3 * k) * (1 + 0.06 * on)), rotate: `${rot}deg`, width: 620, padding: "34px 30px", borderRadius: 24, textAlign: "center",
      background: on ? "rgba(255,209,102,.14)" : C6.panel, boxShadow: `inset 0 0 0 ${on ? 4 : 2}px ${on ? C6.accent : C6.line}, 0 30px 60px rgba(0,0,0,.4)` }}>
      <div style={{ fontFamily: SERIF, fontSize: 70, color: on ? C6.accent : C6.ink, lineHeight: 1.05 }}>{t}</div>
      <div style={{ marginTop: 16 }}><Note size={24}>{s}</Note></div>
    </div>
  );
  return (
    <div style={{ display: "flex", gap: 90, alignItems: "center" }}>
      {card(a, aSub, ka, 0, -3, hl)}
      {card(b, bSub, kb, hl, 3, 0)}
    </div>
  );
};

/** Названия сборов падают штампами в столбик; каждое — в свой момент. */
export const FeeStamps: React.FC<{ fees: { text: string; at: number; red?: boolean }[]; w?: number }> = ({ fees, w = 900 }) => {
  const { p } = useT();
  return (
    <div style={{ width: w, display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
      {fees.map((f, i) => {
        const k = p(f.at, f.at + 0.28, easeBack);
        return (
          <div key={i} style={{ opacity: Math.min(1, k * 1.6), scale: String(1.5 - 0.5 * k), rotate: `${(i % 2 ? 2.5 : -2.5)}deg`, padding: "10px 34px",
            border: `5px solid ${f.red ? C6.loss : C6.accent}`, color: f.red ? C6.loss : C6.accent, fontFamily: SANS, fontWeight: 900, fontSize: 52, letterSpacing: "0.1em", textTransform: "uppercase", background: "rgba(6,30,38,.78)" }}>
            {f.text}
          </div>
        );
      })}
    </div>
  );
};

/** «Один из N»: ряд из 10 человечков-кружков, отмеченные светятся; во второй момент отмеченных становится больше. */
export const OneInN: React.FC<{ at?: number; a: number; b: number; bAt: number; aLabel: string; bLabel: string; color?: string }> = ({ at = 0.05, a, b, bAt, aLabel, bLabel, color = C6.loss }) => {
  const { p } = useT();
  const k = p(at, at + 0.4);
  const g = p(bAt, bAt + 0.6);
  const n = 10;
  return (
    <div style={{ opacity: k, display: "flex", flexDirection: "column", alignItems: "center", gap: 34 }}>
      <div style={{ display: "flex", gap: 26 }}>
        {Array.from({ length: n }).map((_, i) => {
          const hot = i < a ? 1 : i < b ? g : 0;
          return (
            <svg key={i} width={96} height={150} viewBox="0 0 24 38">
              <circle cx={12} cy={7} r={6} fill={hot > 0 ? color : "rgba(247,244,236,.25)"} opacity={hot > 0 ? 0.35 + 0.65 * hot : 1} />
              <path d="M2 36 C2 20 6 15 12 15 C18 15 22 20 22 36 Z" fill={hot > 0 ? color : "rgba(247,244,236,.25)"} opacity={hot > 0 ? 0.35 + 0.65 * hot : 1} />
            </svg>
          );
        })}
      </div>
      <div style={{ position: "relative", height: 80, width: 1300 }}>
        <div style={{ position: "absolute", inset: 0, opacity: 1 - g, fontFamily: SERIF, fontSize: 64, color: C6.ink, textAlign: "center" }}>{aLabel}</div>
        <div style={{ position: "absolute", inset: 0, opacity: g, fontFamily: SERIF, fontSize: 64, color, textAlign: "center" }}>{bLabel}</div>
      </div>
    </div>
  );
};

/** Две линии цен: меню растёт быстрее продуктов; расходятся «ножницами» вверх. */
export const TwoLines: React.FC<{ at?: number; w?: number; h?: number; a?: string; b?: string; aAt?: number; bAt?: number; note?: string }> = ({ at = 0.1, w = 1200, h = 480, a = "MENU PRICES +3.4%", b = "GROCERIES +2.2%", aAt, bAt, note = "USDA ERS · AUGUST 2026 · YEAR OVER YEAR" }) => {
  const { p } = useT();
  const k = p(at - 0.2, at + 0.2);
  const la = p(aAt ?? at, (aAt ?? at) + 1.3, Easing.inOut(Easing.cubic));
  const lb = p(bAt ?? at + 0.4, (bAt ?? at + 0.4) + 1.3, Easing.inOut(Easing.cubic));
  return (
    <div style={{ opacity: k, width: w, height: h + 80, position: "relative" }}>
      <svg width={w} height={h} style={{ position: "absolute", top: 0, left: 0 }}>
        <path d={`M0 ${h * 0.92} C ${w * 0.45} ${h * 0.8} ${w * 0.7} ${h * 0.35} ${w} ${h * 0.08}`} stroke={C6.loss} strokeWidth={10} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - la} />
        <path d={`M0 ${h * 0.92} C ${w * 0.45} ${h * 0.86} ${w * 0.7} ${h * 0.62} ${w} ${h * 0.48}`} stroke={C6.blue} strokeWidth={10} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - lb} />
      </svg>
      <div style={{ position: "absolute", right: 0, top: h * 0.08 - 64, opacity: la }}><Note size={30} color={C6.loss}>{a}</Note></div>
      <div style={{ position: "absolute", right: 0, top: h * 0.48 + 22, opacity: lb }}><Note size={30} color={C6.blue}>{b}</Note></div>
      <div style={{ position: "absolute", left: 0, top: h + 30 }}><Note size={20} color="rgba(247,244,236,.55)">{note}</Note></div>
    </div>
  );
};

/** Счётчик просмотров ответа (5 млн+): крупная цифра набегает. */
export const ViewCount: React.FC<{ at?: number; to?: number; label?: string }> = ({ at = 0.1, to = 5, label = "VIEWS ON CHILI'S REPLY" }) => {
  const { p } = useT();
  const g = p(at, at + 1.3, Easing.out(Easing.cubic));
  const v = to * g;
  return (
    <div style={{ opacity: p(at - 0.2, at + 0.1), display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <div style={{ fontFamily: SERIF, fontSize: 220, color: C6.accent, lineHeight: 1, filter: g < 1 ? `blur(${(1 - g) * 3}px)` : undefined }}>{v >= to ? `${to}M+` : `${v.toFixed(1)}M`}</div>
      <Note size={28}>{label}</Note>
    </div>
  );
};
