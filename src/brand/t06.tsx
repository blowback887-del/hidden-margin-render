import React from "react";
import { Easing } from "remotion";
import { useT } from "./hm";
import { C6, SANS, SERIF } from "./hm6";

// ===================================================================
// T06 «The Menu Said $14. The Bill Said $31.» (22.11.2026) — графика выпуска.
// Визуальная идея: чек, который растёт по строке. Один и тот же условный заказ (пример из реальных сборов)
//   печатается строка за строкой от меню до терминала: бургер → бекон → картошка → газировка → сбор →
//   налог → плата за карту → чаевые. Чек появляется в начале, в конце каждой главы и в финале.
// Нормы (урок T04): размеры всех блоков заданы заранее — новые строки только проявляются (opacity/clip),
//   соседние элементы не сдвигаются; движение — только transform.
// Все цифры — из cloud/voice/t06-text/research.md («Наш расчёт»).
// ===================================================================

const easeBack = Easing.out(Easing.back(1.4));
const MONO = "'Courier New', 'DejaVu Sans Mono', monospace";
const PAPER = "#F7F3E8";
const INK = "#1E2326";

const Note: React.FC<{ children: React.ReactNode; o?: number; color?: string; size?: number }> = ({ children, o = 1, color = C6.mint, size = 22 }) => (
  <div style={{ opacity: 0.92 * o, fontFamily: SANS, fontWeight: 600, fontSize: size, letterSpacing: "0.18em", color, textTransform: "uppercase", textAlign: "center" }}>{children}</div>
);

export type BillLine = { label: string; value: string; at?: number; kind?: "food" | "fee" | "tax" | "tip" | "blur"; tag?: "yes" | "no"; tagAt?: number; hlAt?: number };

/** Чек выпуска. Все строки занимают место с самого начала; строка «печатается» в свой момент at.
 *  hlAt — жёлтая подсветка строки; tag — штамп «you said yes» / «nobody asked»; kind="blur" — строка ещё размыта. */
export const Bill: React.FC<{ lines: BillLine[]; total?: { value: string; at: number; label?: string }; head?: string; w?: number; note?: string; noteAt?: number; at?: number; rows?: number }> = ({ lines, total, head = "TABLE 7 · 1 GUEST", w = 620, note, noteAt, at = 0.05, rows }) => {
  const { p } = useT();
  const n = Math.max(rows ?? lines.length, lines.length);
  const fs = w * 0.05;
  const k = p(at, at + 0.35, easeBack);
  const color = (kind?: string) => (kind === "fee" ? "#B3261E" : kind === "tip" ? "#8a5a00" : INK);
  return (
    <div style={{ opacity: Math.min(1, k * 1.4), translate: `0 ${(1 - k) * 40}px`, width: w, position: "relative" }}>
      <div style={{ position: "relative", color: INK, fontFamily: MONO, padding: `${w * 0.06}px ${w * 0.07}px ${w * 0.05}px`, rotate: "-1.2deg", filter: "drop-shadow(0 30px 40px rgba(0,0,0,.45))" }}>
        <div style={{ position: "absolute", inset: 0, background: PAPER, clipPath: "polygon(0 0, 100% 0, 100% 100%, 95% 98.6%, 90% 100%, 85% 98.6%, 80% 100%, 75% 98.6%, 70% 100%, 65% 98.6%, 60% 100%, 55% 98.6%, 50% 100%, 45% 98.6%, 40% 100%, 35% 98.6%, 30% 100%, 25% 98.6%, 20% 100%, 15% 98.6%, 10% 100%, 5% 98.6%, 0 100%)" }} />
        <div style={{ position: "relative", textAlign: "center", fontWeight: 700, fontSize: fs * 1.05, letterSpacing: "0.22em" }}>THE CORNER GRILL</div>
        <div style={{ position: "relative", textAlign: "center", fontSize: fs * 0.72, letterSpacing: "0.12em", opacity: 0.7, marginTop: 4, paddingBottom: fs * 0.6, borderBottom: "2px dashed #9a9384" }}>{head}</div>
        <div style={{ position: "relative", paddingTop: fs * 0.5 }}>
          {Array.from({ length: n }).map((_, i) => {
            const l = lines[i];
            if (!l) return <div key={i} style={{ height: fs * 1.55 }} />;
            const t0 = l.at ?? 0.05;
            const o = p(t0, t0 + 0.25);
            const hl = l.hlAt !== undefined ? p(l.hlAt, l.hlAt + 0.25) : 0;
            const tg = l.tag && l.tagAt !== undefined ? p(l.tagAt, l.tagAt + 0.3, easeBack) : 0;
            return (
              <div key={i} style={{ height: fs * 1.55, fontSize: fs, position: "relative", color: color(l.kind) }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "space-between", clipPath: `inset(-4px ${100 - 100 * o}% -4px -12px)`, filter: l.kind === "blur" ? "blur(7px)" : undefined }}>
                  <div style={{ position: "absolute", left: -10, right: -10, top: 2, bottom: 2, background: "#FFD166", opacity: 0.75 * hl, borderRadius: 4 }} />
                  <span style={{ position: "relative", fontWeight: l.kind === "fee" || l.kind === "tip" ? 700 : 400 }}>{l.label}</span>
                  <span style={{ position: "relative", fontWeight: 700 }}>{l.value}</span>
                </div>
                {l.tag && (
                  <div style={{ position: "absolute", right: -w * 0.42, top: "50%", translate: "0 -50%", opacity: tg, scale: String(0.7 + 0.3 * tg), rotate: "-6deg",
                    padding: "4px 14px", border: `3px solid ${l.tag === "yes" ? C6.money : C6.loss}`, color: l.tag === "yes" ? C6.money : C6.loss,
                    fontFamily: SANS, fontWeight: 800, fontSize: fs * 0.62, letterSpacing: "0.12em", whiteSpace: "nowrap", textTransform: "uppercase", background: "rgba(6,58,71,.85)" }}>
                    {l.tag === "yes" ? "you said yes" : "nobody asked"}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {total && (
          <div style={{ position: "relative", marginTop: fs * 0.4, borderTop: "2px dashed #9a9384", paddingTop: fs * 0.45, display: "flex", justifyContent: "space-between", fontSize: fs * 1.3, fontWeight: 700, opacity: p(total.at, total.at + 0.25), color: "#B3261E" }}>
            <span>{total.label ?? "TOTAL"}</span><span>{total.value}</span>
          </div>
        )}
      </div>
      {note && <div style={{ marginTop: 26, opacity: p(noteAt ?? at, (noteAt ?? at) + 0.4) }}><Note size={20}>{note}</Note></div>}
    </div>
  );
};

/** Бумажное меню: позиции с ценами без знака доллара; anchor — дорогая «приманка» в рамке, hlAt — подсветка строки. */
export const MenuCard: React.FC<{ items: { name: string; desc?: string; price: string; anchor?: boolean; hlAt?: number; at?: number }[]; w?: number; title?: string; at?: number; column?: boolean }> = ({ items, w = 640, title = "MAINS", at = 0.05, column = false }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  return (
    <div style={{ opacity: Math.min(1, k * 1.4), translate: `0 ${(1 - k) * 30}px`, width: w, padding: `${w * 0.07}px ${w * 0.08}px`, background: "#FBF7EE", color: "#2a2a26", boxShadow: "0 30px 60px rgba(0,0,0,.45)", borderRadius: 6, outline: "2px solid #d9cfb8", outlineOffset: -14 }}>
      <div style={{ textAlign: "center", fontFamily: SERIF, fontSize: w * 0.085, letterSpacing: "0.06em" }}>{title}</div>
      <div style={{ width: w * 0.2, height: 2, background: "#b9ab88", margin: `${w * 0.02}px auto ${w * 0.05}px` }} />
      {items.map((it, i) => {
        const hl = it.hlAt !== undefined ? p(it.hlAt, it.hlAt + 0.3) : 0;
        const o = it.at !== undefined ? p(it.at, it.at + 0.3) : 1;
        return (
          <div key={i} style={{ opacity: o, position: "relative", marginBottom: w * 0.04, padding: it.anchor ? `${w * 0.02}px ${w * 0.03}px` : `0 ${w * 0.03}px`, boxShadow: it.anchor ? "inset 0 0 0 2px #8a7a55" : undefined, display: column ? "flex" : "block", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ position: "absolute", inset: -6, background: "#FFD166", opacity: 0.6 * hl, borderRadius: 4 }} />
            <span style={{ position: "relative", fontFamily: SERIF, fontSize: w * 0.058 }}>{it.name}</span>
            {!column && <span style={{ position: "relative", fontFamily: SANS, fontSize: w * 0.04, color: "#6b6555" }}>{"  "}{it.desc ?? ""}{"  "}</span>}
            <span style={{ position: "relative", fontFamily: SANS, fontWeight: 700, fontSize: w * 0.05, marginLeft: column ? 0 : 12 }}>{it.price}</span>
          </div>
        );
      })}
    </div>
  );
};

/** Три версии меню из опыта Cornell: «$20», «20», «twenty dollars»; над «20» в момент winAt — «+8%». */
export const ThreeMenus: React.FC<{ at: number; winAt: number }> = ({ at, winAt }) => {
  const { p } = useT();
  const cards = ["$20.00", "20", "twenty dollars"];
  const w = p(winAt, winAt + 0.35, easeBack);
  return (
    <div style={{ display: "flex", gap: 46, alignItems: "flex-end" }}>
      {cards.map((c, i) => {
        const k = p(at + i * 0.25, at + i * 0.25 + 0.35, easeBack);
        const win = i === 1;
        return (
          <div key={i} style={{ position: "relative", opacity: Math.min(1, k * 1.4), translate: `0 ${(1 - k) * 30}px` }}>
            {win && <div style={{ position: "absolute", left: "50%", top: -110, translate: "-50% 0", opacity: w, scale: String(0.6 + 0.4 * w), fontFamily: SERIF, fontSize: 92, color: C6.accent }}>+8%</div>}
            <div style={{ width: 400, height: 300, background: "#FBF7EE", borderRadius: 6, boxShadow: win ? `0 0 0 ${6 * w}px ${C6.accent}, 0 30px 60px rgba(0,0,0,.45)` : "0 30px 60px rgba(0,0,0,.45)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18 }}>
              <div style={{ fontFamily: SERIF, fontSize: 44, color: "#2a2a26" }}>Same dish</div>
              <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: c.length > 8 ? 46 : 74, color: "#2a2a26" }}>{c}</div>
            </div>
            <div style={{ marginTop: 18 }}><Note size={20} color={win ? C6.accent : C6.mint}>{["dollar sign", "no dollar sign", "spelled out"][i]}</Note></div>
          </div>
        );
      })}
    </div>
  );
};

/** Качели-якорь: тяжёлое «58» тянет вниз, «14» подлетает вверх и получает подпись «bargain?». */
export const AnchorSeesaw: React.FC<{ at: number; tiltAt: number; heavy?: string; light?: string }> = ({ at, tiltAt, heavy = "58", light = "14" }) => {
  const { p } = useT();
  const k = p(at, at + 0.4);
  const tl = p(tiltAt, tiltAt + 0.8, Easing.out(Easing.back(1.2)));
  const ang = 14 * tl;
  const box = (txt: string, sub: string, col: string, big: boolean) => (
    <div style={{ width: big ? 260 : 200, height: big ? 200 : 150, borderRadius: 18, background: col, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 20px 40px rgba(0,0,0,.4)" }}>
      <div style={{ fontFamily: SERIF, fontSize: big ? 110 : 84, color: "#063A47", lineHeight: 1 }}>{txt}</div>
      <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 20, letterSpacing: "0.14em", color: "#063A47" }}>{sub}</div>
    </div>
  );
  return (
    <div style={{ opacity: k, width: 1100, height: 560, position: "relative" }}>
      <div style={{ position: "absolute", left: 550 - 70, top: 400, width: 0, height: 0, borderLeft: "70px solid transparent", borderRight: "70px solid transparent", borderBottom: `120px solid ${C6.mint}` }} />
      <div style={{ position: "absolute", left: 100, top: 390, width: 900, height: 14, borderRadius: 7, background: C6.ink, transformOrigin: "450px 7px", rotate: `${ang}deg` }}>
        <div style={{ position: "absolute", left: 10, bottom: 14 }}>{box(light, "BURGER", C6.accent, false)}</div>
        <div style={{ position: "absolute", right: 10, bottom: 14 }}>{box(heavy, "TOMAHAWK", "#FF8A7A", true)}</div>
      </div>
      <div style={{ position: "absolute", left: 40, top: 20, opacity: p(tiltAt + 0.6, tiltAt + 1.0), fontFamily: SERIF, fontSize: 60, color: C6.accent, rotate: "-6deg" }}>bargain?</div>
    </div>
  );
};

/** Таблица лидеров по допродажам (условная, имена-заглушки); полоска «бекона» едет вверх. */
export const Leaderboard: React.FC<{ at: number; topAt: number }> = ({ at, topAt }) => {
  const { p } = useT();
  const rows: [string, number][] = [["Server A", 41], ["Server B", 33], ["Server C", 27], ["Server D", 19]];
  const up = p(topAt, topAt + 0.6, easeBack);
  return (
    <div style={{ width: 860, padding: "34px 44px", borderRadius: 22, background: C6.panel, border: `2px solid ${C6.line}`, opacity: p(at, at + 0.35) }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: SANS, fontWeight: 800, fontSize: 26, letterSpacing: "0.16em", color: C6.mint, marginBottom: 22 }}><span>LEADERBOARD</span><span>ADD-ONS SOLD</span></div>
      {rows.map(([n, v], i) => {
        const o = p(at + 0.2 + i * 0.12, at + 0.45 + i * 0.12);
        const top = i === 0;
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 22, height: 70, opacity: o }}>
            <div style={{ width: 48, fontFamily: SERIF, fontSize: 44, color: top ? C6.accent : C6.ink }}>{i + 1}</div>
            <div style={{ width: 200, fontFamily: SANS, fontWeight: 700, fontSize: 32, color: C6.ink }}>{n}</div>
            <div style={{ flex: 1, height: 26, borderRadius: 13, background: "rgba(255,255,255,.08)", overflow: "hidden" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: 13, background: top ? "linear-gradient(90deg,#c0563a,#e98a5a,#c0563a)" : C6.mint, transformOrigin: "left", scale: `${(v / 45) * (top ? 0.4 + 0.6 * up : o)} 1` }} />
            </div>
            <div style={{ width: 70, textAlign: "right", fontFamily: SANS, fontWeight: 800, fontSize: 32, color: top ? C6.accent : C6.ink }}>{v}</div>
          </div>
        );
      })}
      <div style={{ marginTop: 14, opacity: p(topAt, topAt + 0.4) }}><Note size={18}>ILLUSTRATION · TOAST'S BLOG SUGGESTS A LEADERBOARD</Note></div>
    </div>
  );
};

/** Газировка в разрезе: из $2.50 — $2.15 валовой прибыли (≈86¢ с доллара). */
export const SodaMargin: React.FC<{ at: number; pctAt: number }> = ({ at, pctAt }) => {
  const { p } = useT();
  const k = p(at, at + 0.6, Easing.out(Easing.cubic));
  const parts: [string, number, string][] = [["syrup, water, ice, cup", 0.14, "#8EC5FF"], ["gross profit", 0.86, C6.money]];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
      <div style={{ fontFamily: SERIF, fontSize: 64, color: C6.ink, opacity: p(at, at + 0.3) }}>A $2.50 fountain soda</div>
      <div style={{ width: 1100, height: 110, display: "flex", borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,.35)" }}>
        {parts.map(([l, v, c], i) => (
          <div key={i} style={{ width: `${v * 100}%`, height: "100%", background: c, transformOrigin: "left", scale: `${i === 0 ? Math.min(1, k * 2) : k} 1`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SANS, fontWeight: 800, fontSize: i ? 34 : 20, color: "#063A47", letterSpacing: "0.06em", textTransform: "uppercase" }}>{k > 0.9 ? (i ? `${l} · $2.15` : "$0.35") : ""}</div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 60, alignItems: "baseline", opacity: p(pctAt, pctAt + 0.35) }}>
        <div style={{ fontFamily: SERIF, fontSize: 120, color: C6.accent, lineHeight: 1 }}>≈86¢</div>
        <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 34, color: C6.mint, letterSpacing: "0.12em" }}>OF EVERY $1 · GROSS PROFIT</div>
      </div>
    </div>
  );
};

/** Экран терминала с кнопками чаевых; pressAt — палец жмёт кнопку press. */
export const TipScreen: React.FC<{ at: number; opts?: string[]; press?: number; pressAt?: number; total?: string; sub?: string; w?: number; label?: string; amounts?: string[] }> = ({ at, opts = ["20%", "22%", "25%"], press, pressAt, total = "$25.90", sub = "ADD A TIP", w = 560, label, amounts }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const pr = pressAt !== undefined ? p(pressAt, pressAt + 0.25) : 0;
  return (
    <div style={{ opacity: Math.min(1, k * 1.4), scale: String(0.9 + 0.1 * k), width: w, padding: w * 0.05, borderRadius: w * 0.07, background: "#1d2226", boxShadow: "0 40px 80px rgba(0,0,0,.55), inset 0 0 0 3px #3a4248" }}>
      <div style={{ borderRadius: w * 0.03, background: "#F4F6F5", padding: `${w * 0.05}px ${w * 0.05}px ${w * 0.06}px`, color: "#16191b" }}>
        <div style={{ textAlign: "center", fontFamily: SANS, fontWeight: 600, fontSize: w * 0.04, letterSpacing: "0.16em", color: "#5b6268" }}>{label ?? "TOTAL"}</div>
        <div style={{ textAlign: "center", fontFamily: SANS, fontWeight: 800, fontSize: w * 0.12, lineHeight: 1.1 }}>{total}</div>
        <div style={{ textAlign: "center", fontFamily: SANS, fontWeight: 700, fontSize: w * 0.045, margin: `${w * 0.03}px 0 ${w * 0.04}px` }}>{sub}</div>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${opts.length}, 1fr)`, gap: w * 0.03 }}>
          {opts.map((o, i) => {
            const on = press === i ? pr : 0;
            return (
              <div key={i} style={{ height: w * 0.22, borderRadius: w * 0.03, background: on > 0.5 ? "#0E7C66" : "#ffffff", color: on > 0.5 ? "#fff" : "#16191b", boxShadow: "0 0 0 2px #cfd6da", scale: String(1 - 0.06 * Math.sin(on * Math.PI)), display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: w * 0.075 }}>{o}</div>
                {amounts && <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: w * 0.038, opacity: 0.75 }}>{amounts[i]}</div>}
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: w * 0.03, height: w * 0.1, borderRadius: w * 0.03, boxShadow: "0 0 0 2px #cfd6da", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SANS, fontWeight: 700, fontSize: w * 0.045, color: "#5b6268" }}>Custom</div>
      </div>
    </div>
  );
};

/** Из чего посчитаны 20%: строки «food / kitchen fee / tax / card fee» сходятся в кнопку; лишние подсвечены красным. */
export const TipBase: React.FC<{ at: number; feeAt: number }> = ({ at, feeAt }) => {
  const { p } = useT();
  const rows: [string, string, boolean][] = [["Food & soda", "$22.50", false], ["Kitchen fee", "$0.79", true], ["Tax", "$1.86", true], ["Card fee", "$0.75", true]];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {rows.map(([l, v, bad], i) => {
          const o = p(at + i * 0.18, at + i * 0.18 + 0.3);
          const b = bad ? p(feeAt, feeAt + 0.3) : 0;
          return (
            <div key={i} style={{ opacity: o, width: 520, padding: "18px 28px", borderRadius: 14, background: C6.panel, boxShadow: `inset 0 0 0 3px ${b > 0.5 ? C6.loss : C6.line}`, display: "flex", justifyContent: "space-between", fontFamily: SANS, fontWeight: 700, fontSize: 36, color: b > 0.5 ? "#FFB4AA" : C6.ink }}>
              <span>{l}</span><span>{v}</span>
            </div>
          );
        })}
      </div>
      <div style={{ fontFamily: SERIF, fontSize: 90, color: C6.mint, opacity: p(at + 0.7, at + 1) }}>→</div>
      <div style={{ opacity: p(at + 0.8, at + 1.1), width: 260, height: 220, borderRadius: 24, background: "#0E7C66", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 30px 60px rgba(0,0,0,.45)" }}>
        <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 80, color: "#fff" }}>20%</div>
        <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 32, color: "#d8fff4" }}>= $5.18</div>
      </div>
    </div>
  );
};

/** Путь сбора $0.99: онлайн-заказ → строка сбора уходит стрелкой мимо ресторана к Toast (по иску). */
export const FeeRoute: React.FC<{ at: number; feeAt: number; goAt: number }> = ({ at, feeAt, goAt }) => {
  const { p } = useT();
  const f = p(feeAt, feeAt + 0.3, easeBack);
  const g = p(goAt, goAt + 0.9, Easing.inOut(Easing.cubic));
  const box = (title: string, sub: string, col: string, o: number, dim = false) => (
    <div style={{ opacity: o * (dim ? 0.55 : 1), width: 330, height: 190, borderRadius: 22, background: C6.panel, boxShadow: `inset 0 0 0 3px ${col}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
      <div style={{ fontFamily: SERIF, fontSize: 54, color: C6.ink }}>{title}</div>
      <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 22, letterSpacing: "0.14em", color: col }}>{sub}</div>
    </div>
  );
  return (
    <div style={{ width: 1500, height: 520, position: "relative" }}>
      <div style={{ position: "absolute", left: 0, top: 120, opacity: p(at, at + 0.35) }}>
        <div style={{ width: 420, padding: "28px 34px", borderRadius: 18, background: "#F4F6F5", color: "#16191b", fontFamily: SANS, boxShadow: "0 30px 60px rgba(0,0,0,.45)" }}>
          <div style={{ fontWeight: 600, fontSize: 22, letterSpacing: "0.14em", color: "#5b6268" }}>ONLINE ORDER</div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 34, fontWeight: 700, marginTop: 10 }}><span>Subtotal</span><span>$10.50</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 34, fontWeight: 800, marginTop: 8, color: "#B3261E", opacity: f, scale: String(0.8 + 0.2 * f) }}><span>Fee</span><span>$0.99</span></div>
        </div>
      </div>
      <div style={{ position: "absolute", left: 620, top: 0 }}>{box("Restaurant", "GOT NONE OF IT", C6.mint, p(at + 0.2, at + 0.5), g > 0.5)}</div>
      <div style={{ position: "absolute", left: 620, top: 300 }}>{box("Toast", "WHERE IT WENT", C6.accent, p(at + 0.3, at + 0.6))}</div>
      <div style={{ position: "absolute", left: 430, top: 250, width: 230, height: 8, background: C6.accent, borderRadius: 4, rotate: "38deg", transformOrigin: "left center", scale: `${g} 1` }} />
      <div style={{ position: "absolute", left: 1000, top: 150, width: 460, opacity: p(goAt + 0.6, goAt + 1) }}><Note size={20} color={C6.mint}>ACCORDING TO THE FTC COMPLAINT · TOAST DISPUTES IT · SEPT 2021 – JULY 2023</Note></div>
    </div>
  );
};

/** Два чека рядом в финале: как было и «честно». */
export const TwoReceipts: React.FC<{ at: number; bAt: number }> = ({ at, bAt }) => {
  const { p } = useT();
  const card = (k: number, title: string, rows: [string, string][], total: string, col: string) => (
    <div style={{ opacity: Math.min(1, k * 1.4), translate: `0 ${(1 - k) * 30}px`, width: 520, padding: "34px 40px", background: PAPER, color: INK, fontFamily: MONO, boxShadow: "0 30px 60px rgba(0,0,0,.45)" }}>
      <div style={{ textAlign: "center", fontWeight: 700, fontSize: 26, letterSpacing: "0.18em", paddingBottom: 12, borderBottom: "2px dashed #9a9384" }}>{title}</div>
      {rows.map(([a, b], i) => <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 28, lineHeight: 1.6 }}><span>{a}</span><span>{b}</span></div>)}
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 44, fontWeight: 700, color: col, borderTop: "2px dashed #9a9384", marginTop: 10, paddingTop: 10 }}><span>TOTAL</span><span>{total}</span></div>
    </div>
  );
  return (
    <div style={{ display: "flex", gap: 90, alignItems: "flex-start" }}>
      {card(p(at, at + 0.4, easeBack), "THE WAY IT WENT", [["Burger", "14.00"], ["Add-ons", "5.00"], ["Soda", "3.50"], ["Fees & tax", "3.40"], ["Tip on all", "5.18"]], "$31.08", "#B3261E")}
      {card(p(bAt, bAt + 0.4, easeBack), "THE WAY BACK", [["Burger", "14.00"], ["Tap water", "0.00"], ["Fee & tax", "1.65"], ["Debit, no surcharge", "0.00"], ["Tip on food", "2.80"]], "≈$18.45", "#0E7C66")}
    </div>
  );
};
