import React from "react";
import { AbsoluteFill, continueRender, delayRender, Easing, interpolate, Loop, OffthreadVideo, Sequence, staticFile, useVideoConfig } from "remotion";
import { At, In, useT, ease, easeBack, Icon, IconName } from "./hm";
import { BRAND } from "./theme";

// ===================================================================
// HIDDEN MARGIN — стиль с Ep06 (выбор Павла 05.11.2026, вариант D):
// глубокий бирюзовый фон, солнечный жёлтый акцент, заголовки и цифры DM Serif Display,
// текст Inter, мелкие подписи капсом с разрядкой. Один яркий акцент на кадр.
// Все ролики с Ep06 берут цвета, шрифты, появления и гэги отсюда.
// ===================================================================

export const C6 = {
  bgTop: "#0C5A6B",
  bgBottom: "#063A47",
  bgDeep: "#042a34",
  accent: "#FFD166", // главная цифра, ключевое слово, метки глав
  ink: "#F7F4EC", // основной текст
  mint: "#7FD1C7", // подписи, второстепенное
  money: "#5BE49B", // деньги, прибыль
  loss: "#FF6B5B", // убыток, расход
  blue: "#8EC5FF", // нейтральные данные
  panel: "rgba(4,42,52,.82)",
  line: "rgba(247,244,236,.16)",
};
export const SERIF = "'DM Serif Display', 'Playfair Display', Georgia, serif";
export const SANS = "'Inter', 'Segoe UI', Arial, sans-serif";
export const MEME = "'Anton', 'Oswald', Impact, 'Arial Black', sans-serif";

// ---------- шрифты: локальные файлы public/fonts, рендер ждёт их загрузки ----------
const FONTS: [string, string, string, string][] = [
  ["DM Serif Display", "dm-serif-display-latin-400-normal.woff2", "400", "normal"],
  ["DM Serif Display", "dm-serif-display-latin-400-italic.woff2", "400", "italic"],
  ["Inter", "inter-latin-400-normal.woff2", "400", "normal"],
  ["Inter", "inter-latin-500-normal.woff2", "500", "normal"],
  ["Inter", "inter-latin-600-normal.woff2", "600", "normal"],
  ["Inter", "inter-latin-700-normal.woff2", "700", "normal"],
  ["Inter", "inter-latin-800-normal.woff2", "800", "normal"],
  ["Anton", "anton-latin-400-normal.woff2", "400", "normal"],
  // кириллица (русские версии роликов): Inter того же семейства, вместо DM Serif — Playfair, вместо Anton — Oswald
  ["Inter", "inter-cyrillic-400-normal.woff2", "400", "normal"],
  ["Inter", "inter-cyrillic-500-normal.woff2", "500", "normal"],
  ["Inter", "inter-cyrillic-600-normal.woff2", "600", "normal"],
  ["Inter", "inter-cyrillic-700-normal.woff2", "700", "normal"],
  ["Inter", "inter-cyrillic-800-normal.woff2", "800", "normal"],
  ["Playfair Display", "playfair-display-cyrillic-500-normal.woff2", "400", "normal"],
  ["Oswald", "oswald-cyrillic-700-normal.woff2", "400", "normal"],
];
const CYR = "U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116";
let fontsRequested = false;
export const loadFonts6 = () => {
  if (fontsRequested || typeof document === "undefined") return;
  fontsRequested = true;
  const h = delayRender("fonts-hm6");
  Promise.all(
    FONTS.map(([fam, file, weight, style]) => {
      const ff = new FontFace(fam, `url(${staticFile(`fonts/${file}`)}) format('woff2')`, file.includes("cyrillic") ? { weight, style, unicodeRange: CYR } : { weight, style });
      return ff.load().then((f) => document.fonts.add(f));
    }),
  )
    .then(() => continueRender(h))
    .catch(() => continueRender(h));
};
loadFonts6();

// ---------- фон, значок канала ----------
export const Bg6: React.FC = () => (
  <AbsoluteFill style={{ background: `radial-gradient(1500px 1000px at 78% 18%, ${C6.bgTop} 0%, ${C6.bgBottom} 58%, ${C6.bgDeep} 100%)` }}>
    <AbsoluteFill style={{ background: "radial-gradient(900px 600px at 15% 90%, rgba(255,209,102,.05), transparent 70%)" }} />
  </AbsoluteFill>
);

export const Bug6: React.FC = () => (
  <div style={{ position: "absolute", right: 60, bottom: 44, fontFamily: SANS, fontWeight: 700, fontSize: 21, letterSpacing: "0.28em", color: "rgba(247,244,236,.55)", textShadow: "0 2px 10px rgba(0,0,0,.5)" }}>
    <span style={{ color: C6.accent }}>$</span> {BRAND.name}
  </div>
);

/** Обёртка сцены: мягкий вход, уход до полной прозрачности. Сама сцена не двигается. */
export const Scene6: React.FC<{ dur: number; children: React.ReactNode; hard?: boolean }> = ({ dur, children, hard }) => {
  const { p } = useT();
  const inn = hard ? 1 : p(0, 0.18);
  const out = p(dur - 0.2, dur, Easing.in(Easing.cubic));
  return <AbsoluteFill style={{ opacity: Math.max(0.0001, inn) * (1 - out) }}>{children}</AbsoluteFill>;
};

// ---------- раскладка ----------
export const Center: React.FC<{ y?: number; x?: number; children: React.ReactNode }> = ({ y = 540, x = 960, children }) => <At x={x} y={y}>{children}</At>;
export const Row: React.FC<{ gap?: number; children: React.ReactNode; align?: string }> = ({ gap = 80, children, align = "center" }) => <div style={{ display: "flex", alignItems: align, justifyContent: "center", gap }}>{children}</div>;
export const Col: React.FC<{ gap?: number; children: React.ReactNode; align?: string }> = ({ gap = 16, children, align = "center" }) => <div style={{ display: "flex", flexDirection: "column", alignItems: align, gap }}>{children}</div>;

// ---------- типографика ----------
const shadow = "0 4px 28px rgba(0,0,0,.55)";
export const Kicker6: React.FC<{ children: React.ReactNode; color?: string; size?: number }> = ({ children, color = C6.mint, size = 26 }) => (
  <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: size, letterSpacing: "0.24em", color, textTransform: "uppercase", whiteSpace: "nowrap", textShadow: shadow }}>{children}</div>
);
export const Num6: React.FC<{ children: React.ReactNode; color?: string; size?: number }> = ({ children, color = C6.accent, size = 200 }) => (
  <div style={{ fontFamily: SERIF, fontSize: size, lineHeight: 1, color, letterSpacing: "-0.01em", fontVariantNumeric: "lining-nums", textShadow: `0 6px 40px rgba(0,0,0,.45), 0 0 70px ${color}33`, whiteSpace: "nowrap" }}>{children}</div>
);

/** Появление по словам: подъём снизу и проявление из размытия. times — секунда каждого слова (или at + шаг). */
export const Words: React.FC<{ text: string; at?: number; times?: number[]; step?: number; hl?: string[]; size?: number; color?: string; serif?: boolean; maxW?: number; align?: "center" | "left" }> = ({ text, at = 0, times, step = 0.11, hl = [], size = 92, color = C6.ink, serif = true, maxW = 1600, align = "center" }) => {
  const { p } = useT();
  const words = text.split(" ");
  return (
    <div style={{ fontFamily: serif ? SERIF : SANS, fontWeight: serif ? 400 : 700, fontSize: size, lineHeight: 1.12, textAlign: align, width: "max-content", maxWidth: maxW, textShadow: shadow }}>
      {words.map((w, i) => {
        const t0 = times?.[i] ?? at + i * step;
        const k = p(t0 - 0.05, t0 + 0.38);
        const isHl = hl.includes(w.replace(/[^\w$¢%'.]/g, "").replace(/\.$/, ""));
        return (
          <span key={i} style={{ display: "inline-block", marginRight: size * 0.24, opacity: k, filter: k < 1 ? `blur(${(1 - k) * 10}px)` : undefined, translate: `0 ${(1 - k) * 22}px`, color: isHl ? C6.accent : color }}>{w}</span>
        );
      })}
    </div>
  );
};

/** Крупная цифра с иконкой рядом (цифра всегда с иконкой) */
export const BigNum: React.FC<{ at: number; children: React.ReactNode; icon?: IconName | Icon6Name; color?: string; size?: number; label?: string; labelColor?: string; punch?: boolean }> = ({ at, children, icon, color = C6.accent, size = 200, label, labelColor, punch = true }) => {
  const { p } = useT();
  const k = p(at - 0.04, at + 0.35, easeBack);
  const pk = punch ? 1 + 0.08 * Math.max(0, 1 - p(at, at + 0.35)) * k : 1;
  return (
    <div style={{ opacity: Math.min(1, k * 1.4), scale: String((0.82 + 0.18 * k) * pk), display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
      <div style={{ display: "flex", alignItems: "center", gap: size * 0.18 }}>
        {icon && <AnyIcon name={icon} size={size * 0.62} color={color} />}
        <Num6 color={color} size={size}>{children}</Num6>
      </div>
      {label && <Kicker6 size={Math.max(24, size * 0.15)} color={labelColor}>{label}</Kicker6>}
    </div>
  );
};

/** Подпись снизу вверх */
export const Label6: React.FC<{ at: number; children: React.ReactNode; color?: string; size?: number; out?: number }> = ({ at, children, color, size = 28, out }) => (
  <In at={at} out={out} from="up" dist={18}><Kicker6 size={size} color={color}>{children}</Kicker6></In>
);

/** Счётчик: промежуточные значения размыты, в конце — резко и с акцентом */
export const Counter6: React.FC<{ to: number; at: number; dur?: number; fmt: (v: number) => string; color?: string; size?: number; from?: number }> = ({ to, at, dur = 0.9, fmt, color = C6.accent, size = 200, from = 0 }) => {
  const { p } = useT();
  const k = p(at, at + dur, Easing.out(Easing.cubic));
  const vis = p(at - 0.04, at + 0.12);
  const blur = k < 0.999 ? 5 + 9 * (1 - k) : 0;
  const v = k < 0.999 ? from + (to - from) * k : to;
  return <div style={{ opacity: vis, filter: blur ? `blur(${blur}px)` : undefined }}><Num6 color={color} size={size}>{fmt(v)}</Num6></div>;
};

/** Источник внизу слева, держится всю сцену */
export const Source6: React.FC<{ children: React.ReactNode; at?: number }> = ({ children, at = 0.2 }) => {
  const { p } = useT();
  return <div style={{ position: "absolute", left: 80, bottom: 46, opacity: 0.85 * p(at, at + 0.4), fontFamily: SANS, fontWeight: 600, fontSize: 19, letterSpacing: "0.18em", color: "rgba(247,244,236,.62)", textTransform: "uppercase", textShadow: shadow }}>{children}</div>;
};

/** Табличка главы слева сверху (держится всю сцену) */
export const ChapterTag: React.FC<{ n: number; title: string }> = ({ n, title }) => {
  const { p } = useT();
  const k = p(0, 0.5);
  return (
    <div style={{ position: "absolute", left: 80, top: 60, display: "flex", alignItems: "center", gap: 16, opacity: k, translate: `${(1 - k) * -18}px 0` }}>
      <div style={{ fontFamily: SERIF, fontSize: 42, color: C6.accent, textShadow: shadow }}>{String(n).padStart(2, "0")}</div>
      <div style={{ width: 36 * k, height: 2, background: C6.accent }} />
      <Kicker6 size={22} color={C6.ink}>{title}</Kicker6>
    </div>
  );
};

/** Полноэкранная карточка главы «Chapter 2 — The Sign» */
export const ChapterCard: React.FC<{ n: number; title: string; at?: number; label?: string }> = ({ n, title, at = 0.05, label }) => {
  const { p } = useT();
  const k = p(at, at + 0.5);
  return (
    <Col gap={20}>
      <div style={{ opacity: k }}><Kicker6 size={28} color={C6.accent}>{label ?? `Chapter ${n}`}</Kicker6></div>
      <div style={{ width: 120 * k, height: 2, background: C6.accent, opacity: 0.8 }} />
      <Words text={title} at={at + 0.2} size={128} />
    </Col>
  );
};

// ---------- живые кадры ----------
export type ClipFn = (n: number) => { src: string; len: number };
let CLIP: ClipFn = () => ({ src: "", len: 10 });
export const setClips = (fn: ClipFn) => { CLIP = fn; };

/** Видео клипа на нужную длину: короткий клип замедляется (не меньше 0,6×), если всё равно короче — повторяется */
const Vid: React.FC<{ n: number; need: number; style: React.CSSProperties }> = ({ n, need, style }) => {
  const { fps } = useVideoConfig();
  const c = CLIP(n);
  const r = Math.max(0.6, Math.min(1, c.len / Math.max(0.1, need)));
  const loopFrames = Math.max(1, Math.floor((c.len / r) * fps) - 1);
  return <Loop durationInFrames={loopFrames}><OffthreadVideo src={c.src} muted playbackRate={r} style={style} /></Loop>;
};

// с 15.11.2026 (Павел): сток не затягиваем бирюзовой пеленой — видео видно чисто; только лёгкое затемнение снизу под подписи
const veil = (dim: number) => `linear-gradient(180deg, rgba(0,0,0,${dim}) 0%, rgba(0,0,0,${dim}) 55%, rgba(0,0,0,${0.4 + dim}) 100%)`;
const clean = (dim: number) => `linear-gradient(180deg, rgba(0,0,0,${0.05 + dim}) 0%, rgba(0,0,0,${0.12 + dim}) 60%, rgba(0,0,0,${0.35 + dim}) 100%)`;

/** Живой кадр на весь экран с медленным наездом 1.04 → 1.10. veilOn — подложка под графику; без неё — чистое видео. */
export const Stock6: React.FC<{ n: number; dur: number; from?: number; dim?: number; graphics?: boolean; sepia?: boolean }> = ({ n, dur, from = 0, dim = 0, graphics = true, sepia }) => {
  const { t, p } = useT();
  const len = Math.max(0.5, dur - from);
  const k = Math.min(1, Math.max(0, t - from) / len);
  const op = (from > 0 ? p(from, from + 0.35) : 1) * (1 - p(dur - 0.2, dur));
  return (
    <AbsoluteFill style={{ opacity: op }}>
      <Sequence from={Math.round(from * 30)}>
        <Vid n={n} need={len} style={{ width: "100%", height: "100%", objectFit: "cover", scale: String(1.04 + 0.06 * k), filter: sepia ? "sepia(.75) contrast(1.05) brightness(.95)" : undefined }} />
      </Sequence>
      <AbsoluteFill style={{ background: graphics ? veil(dim) : clean(dim) }} />
    </AbsoluteFill>
  );
};

// ---------- гэги (вспышка 1–2 с поверх спокойной основы) ----------
/** Мемная подпись: крупный белый текст с чёрной обводкой */
export const Meme: React.FC<{ at: number; out?: number; text: string; y?: number; size?: number }> = ({ at, out, text, y = 900, size = 76 }) => {
  const { p } = useT();
  const k = p(at, at + 0.12) * (out !== undefined ? 1 - p(out, out + 0.15) : 1);
  return (
    <div style={{ position: "absolute", left: 0, right: 0, top: y, translate: "0 -50%", textAlign: "center", opacity: k, fontFamily: MEME, fontSize: size, lineHeight: 1.05, color: "#fff", textTransform: "uppercase", WebkitTextStroke: `${size * 0.06}px #000`, paintOrder: "stroke fill", letterSpacing: "0.01em", padding: "0 120px" }}>{text}</div>
  );
};

/** Штамп, который «хлопает» в кадр */
export const Stamp: React.FC<{ at: number; text: string; color?: string; rotate?: number; size?: number; out?: number }> = ({ at, text, color = C6.loss, rotate = -8, size = 84, out }) => {
  const { p } = useT();
  const k = p(at, at + 0.18, Easing.out(Easing.cubic));
  const o = out !== undefined ? 1 - p(out, out + 0.2) : 1;
  return (
    <div style={{ opacity: Math.min(1, k * 2) * o, scale: String(1.6 - 0.6 * k), rotate: `${rotate}deg`, padding: "14px 36px", border: `6px solid ${color}`, borderRadius: 14, fontFamily: MEME, fontSize: size, color, letterSpacing: "0.04em", textTransform: "uppercase", background: "rgba(4,42,52,.35)", boxShadow: `0 0 40px ${color}55`, whiteSpace: "nowrap" }}>{text}</div>
  );
};

/** Красный кружок, который рисуется вокруг детали, + стрелка с подписью */
export const RedCircle: React.FC<{ at: number; x: number; y: number; w: number; h: number; note?: string; noteSide?: "l" | "r"; color?: string }> = ({ at, x, y, w, h, note, noteSide = "r", color = C6.loss }) => {
  const { p } = useT();
  const k = p(at, at + 0.45);
  const len = Math.PI * (w + h);
  return (
    <>
      <svg style={{ position: "absolute", left: x - w / 2 - 10, top: y - h / 2 - 10, overflow: "visible" }} width={w + 20} height={h + 20}>
        <ellipse cx={w / 2 + 10} cy={h / 2 + 10} rx={w / 2} ry={h / 2} fill="none" stroke={color} strokeWidth={9} strokeLinecap="round" strokeDasharray={len} strokeDashoffset={len * (1 - k)} transform={`rotate(-6 ${w / 2 + 10} ${h / 2 + 10})`} style={{ filter: `drop-shadow(0 0 10px ${color}88)` }} />
      </svg>
      {note && (
        <div style={{ position: "absolute", left: noteSide === "r" ? x + w / 2 + 40 : undefined, right: noteSide === "l" ? 1920 - (x - w / 2 - 40) : undefined, top: y - h / 2 - 70, opacity: p(at + 0.3, at + 0.55) }}>
          <div style={{ fontFamily: MEME, fontSize: 56, color: "#fff", WebkitTextStroke: "3px #000", paintOrder: "stroke fill", textTransform: "uppercase", whiteSpace: "nowrap" }}>{noteSide === "r" ? "← " : ""}{note}{noteSide === "l" ? " →" : ""}</div>
        </div>
      )}
    </>
  );
};

/** «Перевод с корпоративного»: субтитр-плашка */
export const CorpSub: React.FC<{ at: number; corp: string; human: string; label?: string; out?: number }> = ({ at, corp, human, label = "TRANSLATION FROM CORPORATE", out }) => {
  const { p } = useT();
  const k = p(at, at + 0.3) * (out !== undefined ? 1 - p(out, out + 0.25) : 1);
  return (
    <div style={{ position: "absolute", left: "50%", bottom: 150, translate: `-50% ${(1 - k) * 20}px`, opacity: k, padding: "28px 56px", borderRadius: 16, background: "rgba(0,0,0,.8)", textAlign: "center", minWidth: 1200 }}>
      <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 30, letterSpacing: "0.2em", color: C6.mint }}>{label}</div>
      <div style={{ fontFamily: SANS, fontWeight: 500, fontSize: 46, color: "rgba(247,244,236,.6)", marginTop: 10, textDecoration: "line-through" }}>{corp}</div>
      <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 68, color: C6.accent, marginTop: 6 }}>{human}</div>
    </div>
  );
};

/** Стоп-кадр с резким наездом и вспышкой: оборачивает живой кадр/графику на ключевом слове */
export const Punch: React.FC<{ at: number; amount?: number; children: React.ReactNode }> = ({ at, amount = 0.12, children }) => {
  const { p } = useT();
  const k = p(at, at + 0.12, Easing.out(Easing.cubic));
  const flash = Math.max(0, 1 - p(at, at + 0.25)) * (p(at - 0.01, at) > 0 ? 1 : 0);
  return (
    <AbsoluteFill style={{ scale: String(1 + amount * k) }}>
      {children}
      <AbsoluteFill style={{ background: "#fff", opacity: 0.35 * flash }} />
    </AbsoluteFill>
  );
};

// ---------- центральное устройство Ep06: «разрезанный галлон» ----------
export type Slice = { at: number; label: string; value: string; frac: number; color: string };
/** Галлон-канистра на «разделочной доске»: ломти отпадают вправо в столбик «Куда уходит ваш галлон». */
export const GallonCutter: React.FC<{ at: number; slices: Slice[]; title?: string; total?: string; x?: number; y?: number; shrink?: { at: number; to: number; label?: string } }> = ({ at, slices, title = "WHERE YOUR GALLON GOES", total = "$3.11", x = 960, y = 560, shrink }) => {
  const { p } = useT();
  const k = p(at, at + 0.45);
  const H = 560; // высота колонки
  let acc = 0;
  return (
    <div style={{ position: "absolute", left: x, top: y, translate: "-50% -50%", display: "flex", alignItems: "center", gap: 90, opacity: k }}>
      {/* канистра */}
      <svg width={300} height={380} viewBox="0 0 300 380" style={{ overflow: "visible", filter: "drop-shadow(0 30px 40px rgba(0,0,0,.45))" }}>
        <defs>
          <linearGradient id="jug" x1="0" x2="1"><stop offset="0" stopColor="#ffe2a1" /><stop offset=".5" stopColor={C6.accent} /><stop offset="1" stopColor="#c8962e" /></linearGradient>
        </defs>
        <rect x={20} y={300} width={260} height={18} rx={9} fill="rgba(0,0,0,.35)" />
        <path d="M60 70 L200 70 L250 120 L250 300 L40 300 L40 90 Q40 70 60 70 Z" fill="url(#jug)" stroke="#7a5a12" strokeWidth={4} />
        <rect x={150} y={30} width={60} height={44} rx={8} fill="#c8962e" stroke="#7a5a12" strokeWidth={4} />
        <path d="M70 110 L150 110 L150 160 L70 160 Z" fill="rgba(255,255,255,.25)" />
        <text x={145} y={235} textAnchor="middle" fontFamily={SERIF} fontSize={64} fill="#4a3608">{total}</text>
        <text x={145} y={272} textAnchor="middle" fontFamily={SANS} fontWeight={700} fontSize={20} letterSpacing="4" fill="#4a3608">1 GALLON</text>
      </svg>
      {/* колонка ломтей */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Kicker6 size={22} color={C6.mint}>{title}</Kicker6>
        <div style={{ display: "flex", gap: 26, alignItems: "flex-start" }}>
          <div style={{ width: 120, height: H, borderRadius: 14, background: "rgba(247,244,236,.07)", boxShadow: `inset 0 0 0 2px ${C6.line}`, overflow: "hidden", position: "relative" }}>
            {slices.map((s, i) => {
              const h0 = acc * H; acc += s.frac;
              const kk = p(s.at, s.at + 0.4, easeBack);
              const sh = shrink && i === slices.length - 1 ? 1 - (1 - shrink.to) * p(shrink.at, shrink.at + 0.8) : 1;
              return <div key={i} style={{ position: "absolute", left: 0, right: 0, top: h0, height: s.frac * H * sh, background: s.color, opacity: Math.min(1, kk * 1.3), translate: `${(1 - kk) * 120}px 0`, borderBottom: "2px solid rgba(4,42,52,.6)" }} />;
            })}
          </div>
          <div style={{ position: "relative", height: H, width: 560 }}>
            {(() => {
              let a2 = 0;
              return slices.map((s, i) => {
                const mid = (a2 + s.frac / 2) * H; a2 += s.frac;
                const kk = p(s.at + 0.1, s.at + 0.45);
                return (
                  <div key={i} style={{ position: "absolute", left: 0, top: mid, translate: `${(1 - kk) * 20}px -50%`, opacity: kk, display: "flex", alignItems: "baseline", gap: 18 }}>
                    <div style={{ fontFamily: SERIF, fontSize: 64, color: s.color, textShadow: shadow }}>{s.value}</div>
                    <Kicker6 size={22} color={C6.ink}>{s.label}</Kicker6>
                  </div>
                );
              });
            })()}
          </div>
        </div>
        {shrink?.label && <div style={{ opacity: p(shrink.at + 0.4, shrink.at + 0.8) }}><Kicker6 size={22} color={C6.loss}>{shrink.label}</Kicker6></div>}
      </div>
    </div>
  );
};

/** Табло заправки: «$4.16» и крошечные 9/10. hlFrac — подсветить дробь. */
export const PriceSign: React.FC<{ at: number; price: string; frac?: string; label?: string; hlFrac?: number; scale?: number; sepia?: boolean }> = ({ at, price, frac = "9", label = "REGULAR", hlFrac, scale = 1, sepia }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const glow = hlFrac !== undefined ? p(hlFrac, hlFrac + 0.3) : 0;
  const digit = sepia ? "#f1d9a6" : "#ffb347";
  return (
    <div style={{ scale: String(scale * (0.85 + 0.15 * k)), opacity: Math.min(1, k * 1.4), padding: "26px 40px 30px", borderRadius: 18, background: sepia ? "#2a2015" : "#0b1416", boxShadow: `inset 0 0 0 4px ${sepia ? "#6b5434" : "#1f3a40"}, 0 30px 60px rgba(0,0,0,.5)`, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, filter: sepia ? "sepia(.6)" : undefined }}>
      <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 26, letterSpacing: "0.3em", color: "#f7f4ec" }}>{label}</div>
      <div style={{ display: "flex", alignItems: "flex-start", fontFamily: "'DM Serif Display', serif", color: digit, textShadow: `0 0 30px ${digit}88` }}>
        <span style={{ fontSize: 170, lineHeight: 1 }}>{price}</span>
        {frac !== "" && <span style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: 8, marginTop: 14, padding: "0 6px", borderRadius: 8, color: glow > 0 ? C6.accent : digit, scale: String(1 + 0.35 * glow), boxShadow: glow > 0 ? `0 0 ${30 * glow}px ${C6.accent}` : undefined }}>
          <span style={{ fontSize: 64, lineHeight: 1 }}>{frac}</span>
          <span style={{ width: 40, height: 4, background: "currentColor", margin: "4px 0" }} />
          <span style={{ fontSize: 64, lineHeight: 1 }}>10</span>
        </span>}
      </div>
    </div>
  );
};

/** Сравнение двумя столбиками (например, $1,000 как думают — $65 на деле) */
export const TwoBars: React.FC<{ at: number; a: { label: string; value: string; v: number; color?: string }; b: { label: string; value: string; v: number; color?: string; at?: number }; h?: number }> = ({ at, a, b, h = 520 }) => {
  const { p } = useT();
  const max = Math.max(a.v, b.v);
  const bar = (x: typeof a, t0: number, def: string) => {
    const k = p(t0, t0 + 0.7);
    const c = x.color ?? def;
    return (
      <Col gap={14}>
        <div style={{ height: h + 120, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: 12 }}>
          <div style={{ opacity: p(t0 + 0.4, t0 + 0.7) }}><Num6 color={c} size={96}>{x.value}</Num6></div>
          <div style={{ width: 190, height: Math.max(6, (x.v / max) * h * k), borderRadius: "14px 14px 0 0", background: `linear-gradient(180deg, ${c}, ${c}99)`, boxShadow: `0 0 50px ${c}33` }} />
        </div>
        <Kicker6 size={30} color={C6.ink}>{x.label}</Kicker6>
      </Col>
    );
  };
  return <Row gap={160} align="flex-end">{bar(a, at, C6.loss)}{bar(b, b.at ?? at + 0.5, C6.money)}</Row>;
};

/** Разделённый экран: две половины с подписью и цифрой */
export const Split6: React.FC<{ at: number; left: { title: string; value: string; color?: string; icon?: IconName | Icon6Name }; right: { title: string; value: string; color?: string; icon?: IconName | Icon6Name; at?: number } }> = ({ at, left, right }) => {
  const { p } = useT();
  const side = (s: typeof left, t0: number, def: string) => (
    <div style={{ width: 760, height: 620, borderRadius: 26, background: C6.panel, boxShadow: `inset 0 0 0 2px ${C6.line}, 0 30px 60px rgba(0,0,0,.35)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 26, opacity: p(t0, t0 + 0.35), translate: `0 ${(1 - p(t0, t0 + 0.35)) * 24}px` }}>
      {s.icon && <AnyIcon name={s.icon} size={150} color={s.color ?? def} />}
      <Num6 color={s.color ?? def} size={150}>{s.value}</Num6>
      <Kicker6 size={26} color={C6.ink}>{s.title}</Kicker6>
    </div>
  );
  return <Row gap={60}>{side(left, at, C6.ink)}{side(right, right.at ?? at + 0.5, C6.accent)}</Row>;
};

/** Кольцевая диаграмма: доля прибыли */
export const Donut6: React.FC<{ at: number; pct: number; center: string; label?: string; color?: string; size?: number; base?: number }> = ({ at, pct, center, label, color = C6.accent, size = 440, base }) => {
  const { p } = useT();
  const k = p(at, at + 1.0);
  const r = 46, c = 2 * Math.PI * r;
  const shown = (base ?? 0) + (pct - (base ?? 0)) * k;
  return (
    <div style={{ position: "relative", width: size, height: size, opacity: p(at - 0.05, at + 0.2) }}>
      <svg viewBox="0 0 100 100" width={size} height={size} style={{ rotate: "-90deg", overflow: "visible" }}>
        <circle cx={50} cy={50} r={r} fill="none" stroke="rgba(247,244,236,.12)" strokeWidth={9} />
        <circle cx={50} cy={50} r={r} fill="none" stroke={color} strokeWidth={9} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - shown / 100)} style={{ filter: `drop-shadow(0 0 6px ${color})` }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <Num6 color={color} size={size * 0.27}>{center}</Num6>
        {label && <Kicker6 size={20} color={C6.ink}>{label}</Kicker6>}
      </div>
    </div>
  );
};

/** Линия цены: «ракета» вверх, «перо» вниз. rise/fall — секунды отрисовки участков */
export const RocketFeather: React.FC<{ at: number; fall: number; w?: number; h?: number; labels?: [string, string, string] }> = ({ at, fall, w = 1300, h = 520, labels = ["JAN · $2.79", "MAY · $4.56", "NOV 1 · $4.17"] }) => {
  const { p } = useT();
  const k1 = p(at, at + 1.0);
  const k2 = p(fall, fall + 2.6, (x) => x);
  const pts = [[0, h * 0.92], [w * 0.36, h * 0.08], [w, h * 0.3]];
  const x1 = pts[0][0] + (pts[1][0] - pts[0][0]) * k1, y1 = pts[0][1] + (pts[1][1] - pts[0][1]) * k1;
  const x2 = pts[1][0] + (pts[2][0] - pts[1][0]) * k2, y2 = pts[1][1] + (pts[2][1] - pts[1][1]) * k2;
  return (
    <div style={{ position: "relative", width: w, height: h }}>
      <svg width={w} height={h} style={{ overflow: "visible" }}>
        <line x1={0} y1={h} x2={w} y2={h} stroke={C6.line} strokeWidth={2} />
        <polyline points={`${pts[0][0]},${pts[0][1]} ${x1},${y1}`} fill="none" stroke={C6.loss} strokeWidth={8} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 10px ${C6.loss})` }} />
        {k2 > 0 && <polyline points={`${pts[1][0]},${pts[1][1]} ${x2},${y2}`} fill="none" stroke={C6.money} strokeWidth={8} strokeLinecap="round" strokeDasharray="2 14" />}
        <circle cx={k2 > 0 ? x2 : x1} cy={k2 > 0 ? y2 : y1} r={14} fill={k2 > 0 ? C6.money : C6.loss} />
      </svg>
      <div style={{ position: "absolute", left: pts[0][0], top: pts[0][1] + 26, opacity: p(at, at + 0.3) }}><Kicker6 size={40} color={C6.ink}>{labels[0]}</Kicker6></div>
      <div style={{ position: "absolute", left: pts[1][0], top: pts[1][1] - 84, translate: "-50% 0", opacity: k1 }}><Kicker6 size={40} color={C6.loss}>{labels[1]}</Kicker6></div>
      <div style={{ position: "absolute", right: 0, top: pts[2][1] + 34, opacity: p(fall + 2.2, fall + 2.6) }}><Kicker6 size={40} color={C6.money}>{labels[2]}</Kicker6></div>
    </div>
  );
};

/** Карточка героя: «MIKE — imaginary · numbers: real» */
export const NameCard6: React.FC<{ at: number; name: string; role: string; icon?: IconName | Icon6Name }> = ({ at, name, role, icon = "person" }) => (
  <In at={at} from="up">
    <div style={{ padding: "26px 40px", borderRadius: 18, background: C6.panel, boxShadow: `inset 0 0 0 2px ${C6.line}, 0 30px 60px rgba(0,0,0,.4)`, display: "flex", alignItems: "center", gap: 26 }}>
      <AnyIcon name={icon} size={100} color={C6.accent} />
      <div><div style={{ fontFamily: SERIF, fontSize: 64, color: C6.ink, lineHeight: 1 }}>{name}</div><div style={{ marginTop: 10 }}><Kicker6 size={20}>{role}</Kicker6></div></div>
    </div>
  </In>
);

/** Чек: строки печатаются по очереди, одну можно обвести */
export const Receipt6: React.FC<{ at: number; lines: [string, string][]; step?: number; w?: number }> = ({ at, lines, step = 0.25, w = 520 }) => {
  const { p } = useT();
  return (
    <div style={{ width: w, padding: "34px 40px 46px", background: "#f7f4ec", color: "#1b2b2f", fontFamily: "'Courier New', monospace", fontSize: 30, boxShadow: "0 30px 60px rgba(0,0,0,.45)", clipPath: `inset(0 0 ${100 - 100 * p(at, at + step * (lines.length + 1))}% 0)` }}>
      <div style={{ textAlign: "center", fontWeight: 700, letterSpacing: "0.2em", marginBottom: 18 }}>RECEIPT</div>
      {lines.map(([a, b], i) => <div key={i} style={{ display: "flex", justifyContent: "space-between", opacity: p(at + i * step, at + i * step + 0.15) }}><span>{a}</span><span>{b}</span></div>)}
    </div>
  );
};

/** Ep08: ценник-наклейка и три слоя под ним (сквозная карта выпуска). done — слой открыт, иначе «?» */
export const TagLayers: React.FC<{ at: number; price?: string; layers: { text: string; done?: boolean; at?: number }[]; note?: string }> = ({ at, price = "$228", layers, note }) => {
  const { p } = useT();
  const k = p(at, at + 0.45, easeBack);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 90 }}>
      <div style={{ opacity: Math.min(1, k * 1.5), scale: String(0.75 + 0.25 * k), rotate: "-5deg", width: 520, height: 330, borderRadius: 30, background: C6.accent, boxShadow: "0 34px 70px rgba(0,0,0,.45)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <div style={{ position: "absolute", left: 30, top: 30, width: 34, height: 34, borderRadius: 34, background: C6.bgBottom }} />
        <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 24, letterSpacing: "0.3em", color: "#063A47" }}>BLACK FRIDAY · 65"</div>
        <div style={{ fontFamily: SERIF, fontSize: 190, lineHeight: 1, color: "#063A47" }}>{price}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        {layers.map((l, i) => {
          const t0 = l.at ?? at + 0.35 + i * 0.25;
          const o = p(t0, t0 + 0.3);
          return (
            <div key={i} style={{ opacity: o, translate: `${(1 - o) * 30}px 0`, width: 820, padding: "24px 34px", borderRadius: 18, background: l.done ? C6.panel : "rgba(127,209,199,.12)", boxShadow: `inset 0 0 0 2px ${l.done ? C6.accent : C6.mint}`, display: "flex", alignItems: "center", gap: 26 }}>
              <div style={{ width: 62, height: 62, borderRadius: 62, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: l.done ? C6.accent : "transparent", boxShadow: l.done ? "none" : `inset 0 0 0 3px ${C6.mint}`, fontFamily: SERIF, fontSize: 38, color: l.done ? "#063A47" : C6.mint }}>{i + 1}</div>
              <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: l.done ? 40 : 34, letterSpacing: "0.08em", color: l.done ? C6.ink : C6.mint, textTransform: "uppercase", whiteSpace: "nowrap" }}>{l.done ? l.text : l.text && l.text !== "?" ? <><span style={{ color: C6.accent, fontSize: 46, marginRight: 18 }}>?</span>{l.text}</> : <span style={{ color: C6.accent, fontSize: 50 }}>?</span>}</div>
            </div>
          );
        })}
        {note && <div style={{ opacity: p(at + 1.2, at + 1.5), fontFamily: SANS, fontWeight: 600, fontSize: 26, letterSpacing: "0.14em", color: C6.accent, textTransform: "uppercase", paddingLeft: 10 }}>{note}</div>}
      </div>
    </div>
  );
};

/** Ep08: линия цены после распродажи — пунктир «цена чёрной пятницы», линия ныряет под него (форма условная) */
export const PriceLine: React.FC<{ at: number; top: string; low: string; days: string; lowAt?: number; daysAt?: number }> = ({ at, top, low, days, lowAt, daysAt }) => {
  const { p } = useT();
  const W = 1400, H = 520;
  const pts: [number, number][] = [[0, 150], [90, 150], [150, 190], [300, 185], [380, 150], [470, 250], [640, 240], [720, 330], [900, 320], [980, 420], [1130, 410], [1220, 300], [1400, 310]];
  const len = 2200;
  const tl = lowAt ?? at + 2.2, td = daysAt ?? at + 1.4;
  const k = p(at + 0.3, Math.max(at + 2.6, tl + 0.6));
  return (
    <div style={{ position: "relative", width: W, height: H + 60 }}>
      <svg width={W} height={H} style={{ overflow: "visible" }}>
        <path d={`M 90 150 ${pts.slice(2).map(([x, y]) => `L ${x} ${Math.max(y, 150)}`).join(" ")} L 1400 150 Z`} fill={C6.accent} opacity={0.14 * p(td, td + 0.4)} />
        <line x1={0} y1={150} x2={W} y2={150} stroke={C6.ink} strokeWidth={3} strokeDasharray="14 12" opacity={p(at, at + 0.3)} />
        <polyline points={pts.map(([x, y]) => `${x},${y}`).join(" ")} fill="none" stroke={C6.accent} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={len} strokeDashoffset={len * (1 - k)} />
        <circle cx={980} cy={420} r={16} fill={C6.money} opacity={p(tl - 0.3, tl)} />
      </svg>
      <div style={{ position: "absolute", left: 0, top: 84, opacity: p(at, at + 0.3), fontFamily: SANS, fontWeight: 800, fontSize: 30, letterSpacing: "0.12em", color: C6.ink }}>BLACK FRIDAY PRICE · {top}</div>
      <div style={{ position: "absolute", left: 1010, top: 395, opacity: p(tl - 0.3, tl), fontFamily: SERIF, fontSize: 84, color: C6.money, lineHeight: 1 }}>{low}</div>
      <div style={{ position: "absolute", left: 420, top: 20, opacity: p(td, td + 0.3), fontFamily: SANS, fontWeight: 800, fontSize: 34, letterSpacing: "0.1em", color: C6.accent }}>{days}</div>
      <div style={{ position: "absolute", right: 0, top: H + 20, opacity: 0.7 * p(at + 0.5, at + 0.8), fontFamily: SANS, fontWeight: 500, fontSize: 20, letterSpacing: "0.1em", color: C6.mint }}>LINE SHAPE IS ILLUSTRATIVE · FIGURES FROM WHICH?</div>
    </div>
  );
};

/** Ep08: «убыток против прибыли» — маленький красный столбик ниже нуля и высокий зелёный, крупные цифры */
export const LossGain: React.FC<{ at: number; a: { label: string; value: string }; b: { label: string; value: string; at?: number } }> = ({ at, a, b }) => {
  const { p } = useT();
  const ta = at, tb = b.at ?? at + 0.8;
  const ka = p(ta, ta + 0.4), kb = p(tb, tb + 0.7);
  return (
    <div style={{ position: "relative", width: 1500, height: 760 }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 560, height: 4, background: C6.ink, opacity: 0.55 }} />
      <div style={{ position: "absolute", left: 230, top: 564, width: 300, height: 46 * ka, background: C6.loss, borderRadius: "0 0 10px 10px" }} />
      <div style={{ position: "absolute", left: 0, width: 760, top: 380, textAlign: "center", opacity: ka, fontFamily: SERIF, fontSize: 140, lineHeight: 1, color: C6.loss }}>{a.value}</div>
      <div style={{ position: "absolute", left: 0, width: 760, top: 640, textAlign: "center", opacity: ka, fontFamily: SANS, fontWeight: 800, fontSize: 32, letterSpacing: "0.14em", color: C6.ink }}>{a.label}</div>
      <div style={{ position: "absolute", left: 970, top: 560 - 400 * kb, width: 300, height: 400 * kb, background: C6.money, borderRadius: "10px 10px 0 0" }} />
      <div style={{ position: "absolute", left: 740, width: 760, top: 0, textAlign: "center", opacity: kb, fontFamily: SERIF, fontSize: 140, lineHeight: 1, color: C6.money }}>{b.value}</div>
      <div style={{ position: "absolute", left: 740, width: 760, top: 640, textAlign: "center", opacity: p(tb, tb + 0.3), fontFamily: SANS, fontWeight: 800, fontSize: 32, letterSpacing: "0.14em", color: C6.ink }}>{b.label}</div>
    </div>
  );
};

/** Финальная заставка: сюда YouTube ставит карточки (последние 20 с без важных цифр) */
// ---------- Ep09: табло поединка «Дейл против заведения» (сквозная карта выпуска) ----------
/** lamps: "d" — раунд за Дейлом, "h" — за заведением, "c" — пустой стул, "" — ещё не сыгран. lampAt — когда зажигается последняя лампа. */
export const Scoreboard: React.FC<{ at: number; lamps: ("d" | "h" | "c" | "")[]; lampAt?: number; scale?: number; right?: string }> = ({ at, lamps, lampAt, scale = 1, right = "THE HOUSE" }) => {
  const { p } = useT();
  const k = p(at, at + 0.4, easeBack);
  const last = lamps.reduce((a, l, i) => (l ? i : a), -1);
  const on = (i: number) => (i === last && lampAt !== undefined ? p(lampAt, lampAt + 0.25) : 1);
  const d = lamps.filter((l, i) => l === "d" && on(i) > 0.5).length;
  const h = lamps.filter((l, i) => (l === "h" || l === "c") && on(i) > 0.5).length;
  const side = (name: string, n: number, col: string) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: 420 }}>
      <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 34, letterSpacing: "0.22em", color: C6.ink }}>{name}</div>
      <div style={{ fontFamily: SERIF, fontSize: 210, lineHeight: 1, color: col, textShadow: `0 0 60px ${col}55` }}>{n}</div>
    </div>
  );
  return (
    <div style={{ opacity: Math.min(1, k * 1.5), scale: String((0.8 + 0.2 * k) * scale), padding: "40px 60px 46px", borderRadius: 30, background: "rgba(3,30,38,.92)", boxShadow: `inset 0 0 0 4px ${C6.accent}, 0 40px 80px rgba(0,0,0,.5)`, display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
        {side("DALE", d, C6.accent)}
        <div style={{ fontFamily: SERIF, fontSize: 80, color: C6.mint }}>vs</div>
        {side(right, h, C6.money)}
      </div>
      <div style={{ display: "flex", gap: 26 }}>
        {lamps.map((l, i) => {
          const o = l ? on(i) : 0;
          const col = l === "d" ? C6.accent : l === "h" ? C6.money : l === "c" ? C6.loss : "transparent";
          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{ width: 74, height: 74, borderRadius: 74, boxShadow: `inset 0 0 0 4px ${C6.line}`, background: o > 0 ? col : "rgba(247,244,236,.06)", opacity: o > 0 ? 0.35 + 0.65 * o : 1, filter: o > 0 ? `drop-shadow(0 0 ${24 * o}px ${col})` : undefined }} />
              <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 22, letterSpacing: "0.2em", color: C6.mint }}>R{i + 1}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/** Ep09: зал как точки — n гостей, hot из них подсвечиваются (Дейлы) */
export const Dots: React.FC<{ at: number; n?: number; hot?: number; hotAt?: number; cols?: number }> = ({ at, n = 900, hot = 45, hotAt, cols = 45 }) => {
  const { p } = useT();
  const rows = Math.ceil(n / cols);
  const k = p(at, at + 1.2);
  const hk = hotAt !== undefined ? p(hotAt, hotAt + 0.5) : 0;
  const isHot = (i: number) => (i * 7919) % n < hot;
  return (
    <svg width={cols * 30} height={rows * 30} style={{ overflow: "visible" }}>
      {Array.from({ length: n }, (_, i) => {
        const x = (i % cols) * 30 + 15, y = Math.floor(i / cols) * 30 + 15;
        const vis = i / n < k ? 1 : 0;
        const h = isHot(i) ? hk : 0;
        return <circle key={i} cx={x} cy={y} r={7 + 4 * h} fill={h > 0.5 ? C6.loss : C6.blue} opacity={vis * (h > 0.5 ? 1 : 0.55)} />;
      })}
    </svg>
  );
};

/** Ep09: экран кухни — прогноз по 15-минутным блокам; mark — блок, где «ждут Дейла» */
export const KitchenBlocks: React.FC<{ at: number; markAt?: number }> = ({ at, markAt }) => {
  const { p } = useT();
  const slots = ["5:45", "6:00", "6:15", "6:30", "6:45"];
  const need = [38, 52, 61, 57, 44];
  return (
    <div style={{ padding: "34px 44px", borderRadius: 24, background: "rgba(3,30,38,.94)", boxShadow: `inset 0 0 0 3px ${C6.line}, 0 30px 70px rgba(0,0,0,.5)` }}>
      <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 26, letterSpacing: "0.26em", color: C6.mint, marginBottom: 22 }}>KITCHEN FORECAST · ILLUSTRATION</div>
      <div style={{ display: "flex", gap: 18, alignItems: "flex-end" }}>
        {slots.map((s, i) => {
          const o = p(at + i * 0.18, at + i * 0.18 + 0.3);
          const m = i === 2 && markAt !== undefined ? p(markAt, markAt + 0.3) : 0;
          return (
            <div key={s} style={{ opacity: o, width: 220, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 24, color: m > 0.5 ? C6.accent : C6.ink, letterSpacing: "0.1em", opacity: m > 0.5 ? 1 : 0.0001 }}>+1 DALE</div>
              <div style={{ width: 200, height: need[i] * 4.4 * o, borderRadius: 12, background: m > 0.5 ? C6.accent : C6.blue, opacity: 0.9 }} />
              <div style={{ fontFamily: SERIF, fontSize: 54, color: m > 0.5 ? C6.accent : C6.ink }}>{s}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/** Ep09: плашка-подложка под текст поверх живого кадра */
export const Plate6: React.FC<{ children: React.ReactNode; pad?: string; at?: number }> = ({ children, pad = "26px 50px", at = 0 }) => {
  const { p } = useT();
  return <div style={{ opacity: p(at - 0.12, at + 0.12), padding: pad, borderRadius: 22, background: C6.panel, display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>{children}</div>;
};

export const EndCard6: React.FC<{ at: number; next: string }> = ({ at, next }) => (
  <>
    <Center y={250}><Words text="Watch next" at={at} size={72} hl={["next"]} /></Center>
    <Center y={600}><In at={at + 0.3} from="zoom"><div style={{ width: 860, height: 484, borderRadius: 22, border: `3px dashed ${C6.accent}`, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(4,42,52,.5)" }}><Kicker6 size={30} color={C6.ink}>{next}</Kicker6></div></In></Center>
  </>
);

/** Подсказка «подпишитесь» в углу */
export const Subscribe6: React.FC<{ at: number; out?: number }> = ({ at, out }) => (
  <div style={{ position: "absolute", right: 80, top: 70 }}>
    <In at={at} out={out} from="right"><div style={{ padding: "16px 28px", borderRadius: 40, background: C6.accent, color: "#063A47", fontFamily: SANS, fontWeight: 800, fontSize: 28, letterSpacing: "0.12em" }}>SUBSCRIBE</div></In>
  </div>
);

/** Рамка трейлера: тонкая жёлтая рамка поверх быстрых кадров */
export const TrailerFrame: React.FC = () => (
  <AbsoluteFill style={{ boxShadow: `inset 0 0 0 10px rgba(255,209,102,.85), inset 0 0 0 11px rgba(0,0,0,.4)` }} />
);

/** Титр выпуска после трейлера */
export const TitleCard: React.FC<{ at: number; title: string; hl?: string[] }> = ({ at, title, hl }) => {
  const { p } = useT();
  return (
    <Col gap={28}>
      <div style={{ opacity: p(at, at + 0.4), fontFamily: SANS, fontWeight: 800, fontSize: 30, letterSpacing: "0.4em", color: C6.mint }}><span style={{ color: C6.accent }}>$</span> {BRAND.name}</div>
      <Words text={title} at={at + 0.25} size={150} hl={hl} />
    </Col>
  );
};

// ---------- иконки Ep06 (в дополнение к иконкам hm) ----------
export type Icon6Name = "pump" | "pizza" | "coffee" | "oven" | "gallon" | "coin" | "oil" | "refinery" | "taxes" | "rocket" | "feather" | "couch" | "pennant";
const isIcon6 = (n: string): n is Icon6Name => ["pump", "pizza", "coffee", "oven", "gallon", "coin", "oil", "refinery", "taxes", "rocket", "feather", "couch", "pennant"].includes(n);
export const Icon6: React.FC<{ name: Icon6Name; size?: number; color?: string; sw?: number }> = ({ name, size = 120, color = C6.ink, sw = 2.4 }) => {
  const s = { fill: "none", stroke: color, strokeWidth: sw, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const soft = `${color}26`;
  const P: Record<Icon6Name, React.ReactNode> = {
    pump: (<><rect x="12" y="10" width="26" height="46" rx="3" {...s} fill={soft} /><rect x="17" y="16" width="16" height="10" rx="1" {...s} /><path d="M38 22 L46 22 Q52 22 52 28 L52 44 Q52 48 48 48 Q44 48 44 44 L44 32" {...s} /><path d="M8 56 L42 56" {...s} /></>),
    pizza: (<><path d="M32 8 L56 54 Q32 62 8 54 Z" {...s} fill={soft} /><circle cx="30" cy="34" r="3.5" {...s} /><circle cx="38" cy="46" r="3.5" {...s} /><circle cx="24" cy="48" r="3.5" {...s} /><path d="M10 52 Q32 60 54 52" {...s} /></>),
    coffee: (<><path d="M14 20 L46 20 L42 56 L18 56 Z" {...s} fill={soft} /><path d="M12 20 L48 20 L46 14 L14 14 Z" {...s} /><path d="M20 36 L40 36" {...s} /></>),
    oven: (<><rect x="8" y="12" width="48" height="42" rx="4" {...s} fill={soft} /><rect x="14" y="22" width="36" height="24" rx="3" {...s} /><path d="M18 18 L24 18 M30 18 L34 18" {...s} /><path d="M22 40 Q28 34 32 40 Q36 34 42 40" {...s} /></>),
    gallon: (<><path d="M16 18 L40 18 L50 28 L50 56 L14 56 L14 22 Q14 18 16 18 Z" {...s} fill={soft} /><rect x="32" y="8" width="10" height="10" rx="2" {...s} /></>),
    coin: (<><ellipse cx="32" cy="46" rx="20" ry="7" {...s} fill={soft} /><path d="M12 38 L12 46 M52 38 L52 46" {...s} /><ellipse cx="32" cy="38" rx="20" ry="7" {...s} fill={soft} /><path d="M12 30 L12 38 M52 30 L52 38" {...s} /><ellipse cx="32" cy="30" rx="20" ry="7" {...s} fill={soft} /><path d="M12 22 L12 30 M52 22 L52 30" {...s} /><ellipse cx="32" cy="22" rx="20" ry="7" {...s} fill={soft} /></>),
    oil: (<><path d="M20 12 L44 12 L44 56 L20 56 Z" {...s} fill={soft} /><path d="M20 24 L44 24 M20 44 L44 44" {...s} /></>),
    refinery: (<><path d="M8 56 L8 34 L22 34 L22 18 L28 18 L28 34 L38 34 L38 10 L44 10 L44 34 L56 34 L56 56 Z" {...s} fill={soft} /><path d="M14 44 L18 44 M30 44 L34 44 M46 44 L50 44" {...s} /></>),
    taxes: (<><rect x="12" y="10" width="40" height="46" rx="3" {...s} fill={soft} /><path d="M20 22 L44 22 M20 31 L44 31 M20 40 L34 40" {...s} /><text x="44" y="52" textAnchor="middle" fontFamily={SERIF} fontSize="16" fill={color}>%</text></>),
    rocket: (<><path d="M32 6 Q46 18 44 40 L20 40 Q18 18 32 6 Z" {...s} fill={soft} /><circle cx="32" cy="24" r="5" {...s} /><path d="M20 34 L12 46 L22 44 M44 34 L52 46 L42 44 M26 44 L32 58 L38 44" {...s} /></>),
    feather: (<><path d="M50 8 Q20 14 16 48 L12 58" {...s} /><path d="M50 8 Q46 38 18 46" {...s} fill={soft} /><path d="M26 34 L36 30 M22 40 L32 38" {...s} /></>),
    couch: (<><path d="M10 30 Q10 22 18 22 L46 22 Q54 22 54 30 L54 44 L10 44 Z" {...s} fill={soft} /><path d="M6 32 L10 32 L10 48 L6 48 Z M54 32 L58 32 L58 48 L54 48 Z M14 48 L14 54 M50 48 L50 54" {...s} /></>),
    pennant: (<><path d="M14 58 L14 8" {...s} /><path d="M14 10 L52 20 L14 32" {...s} fill={soft} /></>),
  };
  return <svg width={size} height={size} viewBox="0 0 64 64" style={{ display: "block", overflow: "visible", filter: `drop-shadow(0 4px 18px rgba(0,0,0,.4))` }}>{P[name]}</svg>;
};
export const AnyIcon: React.FC<{ name: IconName | Icon6Name; size?: number; color?: string }> = ({ name, size, color }) =>
  isIcon6(name) ? <Icon6 name={name} size={size} color={color} /> : <Icon name={name as IconName} size={size} color={color} sw={2.4} />;
export const IconIn: React.FC<{ at: number; name: IconName | Icon6Name; size?: number; color?: string; out?: number }> = ({ at, name, size = 160, color = C6.ink, out }) => (
  <In at={at} out={out} from="zoom"><AnyIcon name={name} size={size} color={color} /></In>
);

export { At, In, useT, ease, interpolate };
