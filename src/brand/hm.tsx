import React from "react";
import { AbsoluteFill, Easing, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND, C3, FONT_NUM } from "./theme";

// ===================================================================
// HIDDEN MARGIN — общие блоки стиля с Ep03 (тёмно-зелёный фон, тонкие цифры,
// монета-детектив). Все ролики с Ep03 берут появления, иконки и раскладки отсюда.
// ===================================================================

export const ease = Easing.bezier(0.22, 1, 0.36, 1);
export const easeBack = Easing.out(Easing.back(1.5));
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

/** t — секунды от начала сцены; p(a,b) — плавный 0→1 между секундами a и b */
export const useT = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = f / fps;
  return { t, f, p: (a: number, b: number, e: (x: number) => number = ease) => interpolate(t, [a, b], [0, 1], { ...clamp, easing: e }) };
};

// ---------- фон ----------
export const Bg: React.FC = () => (
  <AbsoluteFill style={{ background: `radial-gradient(1300px 850px at 50% 45%, ${C3.bgCenter} 0%, ${C3.bgMid} 55%, ${C3.bgEdge} 100%)` }}>
    <AbsoluteFill style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)", backgroundSize: "80px 80px", maskImage: "radial-gradient(closest-side, black, transparent)" }} />
  </AbsoluteFill>
);

export const Bug: React.FC = () => (
  <div style={{ position: "absolute", right: 64, bottom: 48, fontFamily: FONT_NUM, fontWeight: 600, fontSize: 22, letterSpacing: "0.28em", color: "rgba(234,255,243,.45)" }}>
    <span style={{ color: C3.money }}>$</span> {BRAND.name}
  </div>
);

/** Обёртка сцены: медленный наезд 1.00→1.05, мягкий вход, полный уход в ноль */
export const Scene: React.FC<{ dur: number; zoom?: number; children: React.ReactNode }> = ({ dur, zoom = 0.05, children }) => {
  const { t, p } = useT();
  const inn = p(0, 0.22);
  const out = p(dur - 0.22, dur, Easing.in(Easing.cubic));
  const z = 1 + zoom * Math.min(1, t / Math.max(1, dur));
  return <AbsoluteFill style={{ opacity: Math.max(0.0001, inn) * (1 - out), scale: String(z), willChange: "transform" }}>{children}</AbsoluteFill>;
};

/** Абсолютное позиционирование по центру точки (x,y) */
export const At: React.FC<{ x: number; y: number; children: React.ReactNode; anchor?: "c" | "l" | "r" }> = ({ x, y, children, anchor = "c" }) => (
  <div style={{ position: "absolute", left: x, top: y, translate: anchor === "c" ? "-50% -50%" : anchor === "r" ? "-100% -50%" : "0 -50%" }}>{children}</div>
);

/** Появление элемента на секунде at (до неё — полностью невидим) */
export const In: React.FC<{ at: number; out?: number; from?: "up" | "down" | "left" | "right" | "zoom" | "fade"; dist?: number; children: React.ReactNode }> = ({ at, out, from = "up", dist = 40, children }) => {
  const { p } = useT();
  const k = p(at, at + 0.5, from === "zoom" ? easeBack : ease);
  const o = out !== undefined ? p(out, out + 0.35) : 0;
  const d = (1 - k) * dist;
  const tr = from === "up" ? `0 ${d}px` : from === "down" ? `0 ${-d}px` : from === "left" ? `${-d}px 0` : from === "right" ? `${d}px 0` : "0 0";
  return <div style={{ opacity: k * (1 - o), translate: tr, scale: from === "zoom" ? String(0.7 + 0.3 * k) : undefined }}>{children}</div>;
};

// ---------- типографика ----------
export const Kicker: React.FC<{ children: React.ReactNode; color?: string; size?: number }> = ({ children, color = "rgba(234,255,243,.6)", size = 26 }) => (
  <div style={{ fontFamily: FONT_NUM, fontWeight: 600, fontSize: size, letterSpacing: "0.3em", color, textTransform: "uppercase", whiteSpace: "nowrap" }}>{children}</div>
);

export const Num: React.FC<{ children: React.ReactNode; color?: string; size?: number; glow?: boolean }> = ({ children, color = C3.money, size = 200, glow = true }) => (
  <div style={{ fontFamily: FONT_NUM, fontWeight: 200, fontSize: size, lineHeight: 1, color, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums", textShadow: glow ? `0 0 60px ${color}55` : undefined, whiteSpace: "nowrap" }}>{children}</div>
);

/** Заголовок с выделенным словом (золотым) */
export const Title: React.FC<{ text: string; hl?: string[]; size?: number; at?: number; color?: string }> = ({ text, hl = [], size = 96, at = 0, color = C3.ink }) => {
  const { p } = useT();
  const words = text.split(" ");
  return (
    <div style={{ fontFamily: FONT_NUM, fontWeight: 300, fontSize: size, lineHeight: 1.1, textAlign: "center", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
      {words.map((w, i) => {
        const k = p(at + i * 0.06, at + i * 0.06 + 0.45);
        const isHl = hl.includes(w.replace(/[^\w$]/g, ""));
        return (
          <span key={i} style={{ display: "inline-block", margin: `0 ${size * 0.13}px`, opacity: k, translate: `0 ${(1 - k) * 24}px`, color: isHl ? C3.gold : color, fontWeight: isHl ? 400 : 300 }}>{w}</span>
        );
      })}
    </div>
  );
};

/** Счётчик: промежуточные значения размыты, на финале — резко */
export const Counter: React.FC<{ to: number; at: number; dur?: number; fmt: (v: number) => string; color?: string; size?: number }> = ({ to, at, dur = 1.0, fmt, color = C3.money, size = 200 }) => {
  const { p } = useT();
  const k = p(at, at + dur, Easing.out(Easing.cubic));
  const vis = p(at - 0.05, at + 0.15);
  const blur = k < 0.999 ? 6 + 10 * (1 - k) : 0;
  const v = k < 0.999 ? to * k : to;
  return (
    <div style={{ opacity: vis, filter: blur ? `blur(${blur}px)` : undefined }}>
      <Num color={color} size={size}>{fmt(v)}</Num>
    </div>
  );
};

/** Выноска с точкой-свечением и тонкой линией */
export const Callout: React.FC<{ at: number; label: string; value: string; sub?: string; side?: "l" | "r"; color?: string; line?: number; vsize?: number }> = ({ at, label, value, sub, side = "r", color = C3.money, line = 220, vsize = 72 }) => {
  const { p } = useT();
  const k = p(at, at + 0.6);
  const L = side === "l";
  return (
    <div style={{ position: "relative", opacity: k, display: "flex", flexDirection: L ? "row-reverse" : "row", alignItems: "center", gap: 18 }}>
      <div style={{ width: 12, height: 12, borderRadius: 6, background: color, boxShadow: `0 0 16px ${color}` }} />
      <div style={{ width: line * k, height: 1.5, background: `linear-gradient(${L ? 270 : 90}deg, ${color}cc, ${color}22)` }} />
      <div style={{ textAlign: L ? "right" : "left", translate: `${(1 - k) * (L ? -16 : 16)}px 0` }}>
        <Kicker size={24}>{label}</Kicker>
        <Num color={color} size={vsize} glow={false}>{value}</Num>
        {sub && <Kicker size={20} color={`${color}99`}>{sub}</Kicker>}
      </div>
    </div>
  );
};

/** Мелкая подпись источника внизу слева (держится всю сцену) */
export const Source: React.FC<{ children: React.ReactNode; at?: number }> = ({ children, at = 0.3 }) => {
  const { p } = useT();
  return <div style={{ position: "absolute", left: 90, bottom: 52, opacity: 0.8 * p(at, at + 0.5), fontFamily: FONT_NUM, fontWeight: 600, fontSize: 20, letterSpacing: "0.2em", color: "rgba(234,255,243,.45)", textTransform: "uppercase" }}>{children}</div>;
};

/** Табличка главы в левом верхнем углу */
export const Chapter: React.FC<{ n: number; title: string }> = ({ n, title }) => {
  const { p } = useT();
  const k = p(0, 0.6);
  return (
    <div style={{ position: "absolute", left: 90, top: 64, display: "flex", alignItems: "center", gap: 18, opacity: k, translate: `${(1 - k) * -20}px 0` }}>
      <div style={{ fontFamily: FONT_NUM, fontWeight: 200, fontSize: 44, color: C3.gold }}>{String(n).padStart(2, "0")}</div>
      <div style={{ width: 40 * k, height: 1.5, background: C3.gold }} />
      <Kicker>{title}</Kicker>
    </div>
  );
};

/** Горизонтальная полоса-сравнение (растёт слева направо) */
export const Bar: React.FC<{ at: number; w: number; label: string; value: string; color: string; h?: number }> = ({ at, w, label, value, color, h = 64 }) => {
  const { p } = useT();
  const k = p(at, at + 0.9);
  return (
    <div style={{ opacity: p(at - 0.02, at + 0.2) }}>
      <Kicker size={26}>{label}</Kicker>
      <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 12 }}>
        <div style={{ width: w * k, height: h, borderRadius: h / 2, background: `linear-gradient(90deg, ${color}55, ${color})`, boxShadow: `0 0 40px ${color}44` }} />
        <div style={{ opacity: p(at + 0.5, at + 0.9) }}><Num color={color} size={h * 1.25} glow={false}>{value}</Num></div>
      </div>
    </div>
  );
};

/** Подиум под главный объект */
export const Podium: React.FC<{ w?: number; glow?: number }> = ({ w = 640, glow = 1 }) => (
  <div style={{ width: w, height: w * 0.15, borderRadius: "50%", background: "radial-gradient(closest-side, #1d3a2e, #0c1814)", boxShadow: `0 0 90px rgba(47,220,127,${0.28 * glow})` }} />
);

// ---------- монета-детектив ----------
export type Pose = "neutral" | "point" | "shocked" | "wink" | "suspicious" | "shrug" | "sign" | "celebrate";
export const Coin: React.FC<{ timeline: { at: number; pose: Pose }[]; h?: number; enter?: number; leave?: number; sign?: string; flip?: boolean }> = ({ timeline, h = 380, enter = 0, leave, sign, flip }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = f / fps;
  let cur = timeline[0];
  for (const k of timeline) if (t >= k.at) cur = k;
  const since = f - Math.round(cur.at * fps);
  const inS = spring({ frame: f - Math.round(enter * fps), fps, config: { damping: 12, stiffness: 150 } });
  const outS = leave !== undefined ? interpolate(t, [leave, leave + 0.35], [0, 1], { ...clamp, easing: ease }) : 0;
  const pop = spring({ frame: since, fps, config: { damping: 9, stiffness: 220 } });
  const squash = cur.at > enter ? 1 + 0.07 * (1 - pop) : 1;
  const breathe = 1 + 0.01 * Math.sin(t * 3.0);
  const shake = cur.pose === "shocked" ? 6 * Math.sin(since * 2.4) * Math.max(0, 1 - since / 14) : 0;
  const jump = cur.pose === "celebrate" ? -36 * Math.abs(Math.sin(since / 8)) : 0;
  if (t < enter - 0.01) return null;
  return (
    <div style={{ position: "relative", height: h, transformOrigin: "50% 100%", translate: `${shake}px ${(1 - inS) * 220 + jump + outS * 240}px`, scale: `${(flip ? -1 : 1) * inS * squash * breathe} ${inS * (2 - squash) * breathe}`, opacity: Math.min(1, inS * 3) * (1 - outS) }}>
      <div style={{ position: "absolute", left: "15%", right: "15%", bottom: -12, height: 24, borderRadius: "50%", background: "radial-gradient(closest-side, rgba(0,0,0,.55), transparent)" }} />
      <Img src={staticFile(`mascot/coin-${cur.pose}.png`)} style={{ height: h, display: "block", filter: "drop-shadow(0 0 36px rgba(255,200,60,.16))" }} />
      {cur.pose === "sign" && sign && (
        <div style={{ position: "absolute", left: "6%", right: "6%", top: "60%", height: "25%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT_NUM, fontWeight: 700, fontSize: h * 0.07, color: "#0b1210", scale: flip ? "-1 1" : undefined }}>{sign}</div>
      )}
    </div>
  );
};

// ---------- нарисованные иконки (тонкая линия, палитра канала) ----------
export type IconName = "car" | "plane" | "ticket" | "garage" | "clock" | "calendar" | "gate" | "lock" | "bag" | "suitcase" | "store" | "cup" | "bottle" | "building" | "pin" | "receipt" | "cart" | "key" | "phone" | "hotel" | "billboard" | "warehouse" | "well" | "city" | "loop" | "flag";
export const Icon: React.FC<{ name: IconName; size?: number; color?: string; sw?: number }> = ({ name, size = 120, color = C3.ink, sw = 2.2 }) => {
  const s = { fill: "none", stroke: color, strokeWidth: sw, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const fillSoft = `${color}22`;
  const P: Record<IconName, React.ReactNode> = {
    car: (<><path d="M10 40 L16 26 Q18 22 23 22 L41 22 Q46 22 48 26 L54 40 Z" {...s} fill={fillSoft} /><rect x="8" y="38" width="48" height="12" rx="4" {...s} /><circle cx="19" cy="51" r="5" {...s} /><circle cx="45" cy="51" r="5" {...s} /><path d="M20 30 L44 30" {...s} /></>),
    plane: (<><path d="M32 6 Q36 6 36 14 L36 26 L58 38 L58 43 L36 36 L36 50 L43 55 L43 58 L32 55 L21 58 L21 55 L28 50 L28 36 L6 43 L6 38 L28 26 L28 14 Q28 6 32 6 Z" {...s} fill={fillSoft} /></>),
    ticket: (<><path d="M10 18 L54 18 L54 27 Q49 32 54 37 L54 46 L10 46 L10 37 Q15 32 10 27 Z" {...s} fill={fillSoft} /><path d="M40 20 L40 44" {...s} strokeDasharray="3 4" /></>),
    garage: (<><path d="M6 26 L32 10 L58 26 L58 56 L6 56 Z" {...s} fill={fillSoft} /><rect x="16" y="32" width="32" height="24" {...s} /><path d="M16 39 L48 39 M16 46 L48 46" {...s} /></>),
    clock: (<><circle cx="32" cy="32" r="22" {...s} fill={fillSoft} /><path d="M32 18 L32 32 L42 38" {...s} /></>),
    calendar: (<><rect x="10" y="14" width="44" height="40" rx="5" {...s} fill={fillSoft} /><path d="M10 24 L54 24 M21 9 L21 18 M43 9 L43 18" {...s} /></>),
    gate: (<><rect x="12" y="10" width="40" height="18" rx="3" {...s} fill={fillSoft} /><path d="M32 28 L32 56 M22 56 L42 56" {...s} /></>),
    lock: (<><rect x="14" y="28" width="36" height="28" rx="5" {...s} fill={fillSoft} /><path d="M21 28 L21 20 Q21 9 32 9 Q43 9 43 20 L43 28" {...s} /><circle cx="32" cy="41" r="3.5" {...s} /></>),
    bag: (<><path d="M20 22 Q16 12 26 12 L38 12 Q48 12 44 22" {...s} /><path d="M14 30 Q14 22 24 22 L40 22 Q50 22 50 30 L54 50 Q54 56 46 56 L18 56 Q10 56 10 50 Z" {...s} fill={fillSoft} /><text x="32" y="47" textAnchor="middle" fontFamily={FONT_NUM} fontWeight={600} fontSize="18" fill={color}>$</text></>),
    suitcase: (<><rect x="14" y="18" width="36" height="34" rx="5" {...s} fill={fillSoft} /><path d="M25 18 L25 11 L39 11 L39 18 M24 52 L24 57 M40 52 L40 57" {...s} /></>),
    store: (<><path d="M8 24 L12 12 L52 12 L56 24 Q50 30 44 24 Q38 30 32 24 Q26 30 20 24 Q14 30 8 24 Z" {...s} fill={fillSoft} /><path d="M12 28 L12 54 L52 54 L52 28 M26 54 L26 38 L38 38 L38 54" {...s} /></>),
    cup: (<><path d="M16 18 L48 18 L44 54 L20 54 Z" {...s} fill={fillSoft} /><path d="M14 18 L50 18 M28 10 L30 18" {...s} /></>),
    bottle: (<><path d="M27 6 L37 6 L37 14 Q44 18 44 28 L44 54 Q44 58 40 58 L24 58 Q20 58 20 54 L20 28 Q20 18 27 14 Z" {...s} fill={fillSoft} /><path d="M20 32 L44 32 M20 44 L44 44" {...s} /></>),
    building: (<><rect x="14" y="10" width="36" height="46" {...s} fill={fillSoft} /><path d="M22 18 L28 18 M36 18 L42 18 M22 28 L28 28 M36 28 L42 28 M22 38 L28 38 M36 38 L42 38 M28 56 L28 48 L36 48 L36 56" {...s} /></>),
    pin: (<><path d="M32 58 Q14 36 14 25 Q14 8 32 8 Q50 8 50 25 Q50 36 32 58 Z" {...s} fill={fillSoft} /><circle cx="32" cy="25" r="7" {...s} /></>),
    receipt: (<><path d="M14 8 L50 8 L50 56 L44 52 L38 56 L32 52 L26 56 L20 52 L14 56 Z" {...s} fill={fillSoft} /><path d="M21 20 L43 20 M21 29 L43 29 M21 38 L36 38" {...s} /></>),
    cart: (<><path d="M6 12 L14 12 L20 42 L50 42 L56 20 L17 20" {...s} fill={fillSoft} /><circle cx="24" cy="51" r="4" {...s} /><circle cx="46" cy="51" r="4" {...s} /></>),
    key: (<><circle cx="20" cy="32" r="10" {...s} fill={fillSoft} /><path d="M30 32 L56 32 M48 32 L48 40 M56 32 L56 40" {...s} /></>),
    phone: (<><rect x="18" y="6" width="28" height="52" rx="6" {...s} fill={fillSoft} /><path d="M28 50 L36 50" {...s} /></>),
    hotel: (<><rect x="12" y="14" width="40" height="42" {...s} fill={fillSoft} /><path d="M12 14 L32 6 L52 14 M20 24 L26 24 M38 24 L44 24 M20 34 L26 34 M38 34 L44 34 M27 56 L27 46 L37 46 L37 56" {...s} /></>),
    billboard: (<><rect x="8" y="10" width="48" height="28" rx="3" {...s} fill={fillSoft} /><path d="M20 38 L20 56 M44 38 L44 56" {...s} /></>),
    warehouse: (<><path d="M6 26 L32 12 L58 26 L58 56 L6 56 Z" {...s} fill={fillSoft} /><path d="M18 56 L18 36 L46 36 L46 56 M18 42 L46 42 M18 48 L46 48" {...s} /></>),
    well: (<><path d="M24 56 L32 10 L40 56 M27 38 L37 38 M26 46 L38 46 M29 26 L35 26" {...s} /><path d="M18 56 L46 56" {...s} /></>),
    city: (<><path d="M6 56 L6 30 L18 30 L18 20 L30 20 L30 56 M30 56 L30 12 L44 12 L44 56 M44 56 L44 32 L58 32 L58 56" {...s} fill={fillSoft} /></>),
    loop: (<><path d="M46 20 A18 18 0 1 0 50 36" {...s} /><path d="M50 12 L46 20 L54 23" {...s} /></>),
    flag: (<><path d="M16 58 L16 8" {...s} /><path d="M16 10 L50 10 L42 20 L50 30 L16 30" {...s} fill={fillSoft} /></>),
  };
  return <svg width={size} height={size} viewBox="0 0 64 64" style={{ display: "block", overflow: "visible", filter: `drop-shadow(0 0 18px ${color}33)` }}>{P[name]}</svg>;
};

/** Иконка с подписью и цифрой (цифра всегда с иконкой) */
export const Stat: React.FC<{ icon: IconName; at: number; label: string; value: React.ReactNode; color?: string; size?: number }> = ({ icon, at, label, value, color = C3.money, size = 150 }) => (
  <In at={at} from="up">
    <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
      <Icon name={icon} size={size} color={color} />
      <div>
        <Kicker size={26}>{label}</Kicker>
        <div style={{ marginTop: 6 }}>{value}</div>
      </div>
    </div>
  </In>
);
