import React from "react";
import { AbsoluteFill, Easing, Img, staticFile, useCurrentFrame } from "remotion";
import { useT } from "./hm";
import { C6, Kicker6, SANS, SERIF, Source6 } from "./hm6";

// ===================================================================
// Доказательства на экране (17.11.2026): документы, скриншоты, реклама против правды, архив.
// Картинки и координаты строк готовит cloud/broll/fetch.py (раздел "evidence"),
// в плане сцен их удобно вставлять через cloud/gen/evid.py → ev(...).
// ===================================================================

export type Box = { x: number; y: number; w: number; h: number };
export type Mark = Box & { at: number; spot?: boolean }; // spot: false — без затемнения вокруг

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;

/** Строка браузера над скриншотом (координаты картинки, масштабируется вместе с ней) */
const BrowserBar: React.FC<{ w: number; url?: string }> = ({ w, url }) => {
  const h = Math.max(44, w * 0.032);
  return (
    <div style={{ position: "absolute", left: 0, top: -h, width: w, height: h, background: "#1d2427", borderRadius: `${h * 0.35}px ${h * 0.35}px 0 0`, display: "flex", alignItems: "center", gap: h * 0.22, padding: `0 ${h * 0.4}px`, boxSizing: "border-box" }}>
      {["#ff5f57", "#febc2e", "#28c840"].map((c) => <div key={c} style={{ width: h * 0.26, height: h * 0.26, borderRadius: "50%", background: c, opacity: 0.85 }} />)}
      {url && <div style={{ marginLeft: h * 0.3, flex: 1, height: h * 0.56, borderRadius: h * 0.28, background: "#2c3539", color: "rgba(247,244,236,.7)", fontFamily: SANS, fontSize: h * 0.3, display: "flex", alignItems: "center", padding: `0 ${h * 0.35}px`, overflow: "hidden", whiteSpace: "nowrap" }}>{url}</div>}
    </div>
  );
};

/**
 * Улика: документ или скриншот на весь кадр.
 * Сначала виден весь лист, потом камера плавно едет к нужной строке и маркер подсвечивает её
 * ровно в момент, когда голос её произносит (at — секунды от начала сцены, как @{фраза} в плане).
 * size — [ширина, высота] картинки в px; marks и focus — в координатах картинки.
 * frame: "paper" — лист документа, "screen" — окно браузера (сайт, статья, реклама).
 */
export const Evidence: React.FC<{
  src: string; size: [number, number]; dur: number; marks?: Mark[]; focus?: Box; zoom?: number;
  frame?: "paper" | "screen"; url?: string; source?: string; color?: string;
  /** уменьшенный общий план в углу, пока камера у строки (урок T02): верх статьи (шапка + фото) или сама страница документа */
  inset?: { src: string; size: [number, number] } | true;
}> = ({ src, size, dur, marks = [], focus, zoom, frame = "paper", url, source, color = "rgba(255,209,102,.62)", inset }) => {
  const { t, p } = useT();
  const [W, H] = size;
  const bar = frame === "screen" ? Math.max(44, W * 0.032) : 0;
  // общий план: лист целиком с полями
  const s0 = Math.min(1640 / W, 940 / (H + bar));
  const box = focus ?? (marks.length ? marks.reduce<Box>((a, m) => ({ x: Math.min(a.x, m.x), y: Math.min(a.y, m.y), w: Math.max(a.x + a.w, m.x + m.w) - Math.min(a.x, m.x), h: Math.max(a.y + a.h, m.y + m.h) - Math.min(a.y, m.y) }), marks[0]) : null);
  // документ: наезд не сильнее ширины листа — строки целиком (пилот 17.11); сайт: наезд к строке, у сайтов колонки узкие
  let s1 = box ? Math.max(s0, zoom ?? Math.min(1380 / (box.w + 80), 520 / (box.h + 60), s0 * 5, frame === "paper" ? 1840 / W : 99)) : s0;
  // сайт: полоса браузера с адресом остаётся в кадре (урок T02 — «белый лист из Word»): верх кадра не ниже полосы
  // если строка высоко — держим и полосу браузера; если низко (полоса съела бы весь наезд) — наезжаем, а шапку статьи даёт inset
  const sBar = box ? 1080 / (box.y + box.h + bar + 90) : s0;
  const keepBar = frame === "screen" && sBar >= s0 * 1.5;
  if (box && frame === "screen") s1 = Math.max(s0, Math.min(s1, 1920 / (box.w + 360), keepBar ? sBar : 99));
  const firstAt = marks.length ? Math.min(...marks.map((m) => m.at)) : 1.6;
  const spotMarks = marks.filter((m) => m.spot !== false);
  const spotBox = spotMarks.length ? spotMarks.reduce<Box>((a, m) => ({ x: Math.min(a.x, m.x), y: Math.min(a.y, m.y), w: Math.max(a.x + a.w, m.x + m.w) - Math.min(a.x, m.x), h: Math.max(a.y + a.h, m.y + m.h) - Math.min(a.y, m.y) }), spotMarks[0]) : null;
  const arrive = Math.max(1.2, Math.min(firstAt - 0.05, 1.9, dur - 0.6)); // камера у строки заранее, маркер — на слове голоса
  const hold = Math.min(1.3, Math.max(0.25, arrive - 0.9)); // сначала общий план страницы, потом подъезд
  const k = box ? p(hold, arrive, Easing.inOut(Easing.cubic)) : 0;
  const drift = 1 + 0.035 * Math.min(1, t / Math.max(1, dur)); // в стоящем кадре есть жизнь
  const s = lerp(s0, s1, k) * drift;
  // строку не режем по краям: если она помещается при центре страницы — держим страницу по центру
  const bcx = box ? box.x + box.w / 2 : W / 2;
  const cxT = box && Math.abs(W / 2 - bcx) + box.w / 2 + 50 <= 960 / s1 ? W / 2 : bcx;
  const cx = box ? lerp(W / 2, cxT, k) : W / 2;
  const cyT = box ? (keepBar ? Math.min(box.y + box.h / 2, 540 / s1 - bar - 14) : box.y + box.h / 2) : 0;
  const cy = box ? lerp((H - bar) / 2, cyT, k) : (H - bar) / 2;
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: 0, top: 0, width: W, height: H, transformOrigin: "0 0", transform: `translate(${960 - cx * s}px, ${540 - cy * s}px) scale(${s})` }}>
        {frame === "screen" && <BrowserBar w={W} url={url} />}
        <Img src={staticFile(src)} style={{ position: "absolute", left: 0, top: 0, width: W, height: H, borderRadius: frame === "screen" ? `0 0 ${W * 0.008}px ${W * 0.008}px` : 2, boxShadow: frame === "paper" ? "0 2px 0 #d9d2c3, 0 4px 0 #cfc7b6, 0 40px 120px rgba(0,0,0,.65)" : "0 30px 120px rgba(0,0,0,.6)" }} />
        {frame === "paper" && <PaperGrain w={W} h={H} />}
        {spotBox && (() => {
          const kk = p(firstAt, firstAt + 0.45, Easing.out(Easing.cubic));
          const pad = Math.max(6, spotBox.h * 0.6);
          // одно затемнение вокруг всех подсвеченных строк — подсветки остаются чистыми
          return <div style={{ position: "absolute", left: spotBox.x - pad * 2, top: spotBox.y - pad, width: spotBox.w + pad * 4, height: spotBox.h + pad * 2, borderRadius: pad, boxShadow: `0 0 0 ${W * 3}px rgba(4,30,38,${0.34 * kk})`, pointerEvents: "none" }} />;
        })()}
        {marks.map((m, i) => {
          const kk = p(m.at, m.at + 0.45, Easing.out(Easing.cubic));
          const pad = Math.max(4, m.h * 0.18);
          return <div key={i} style={{ position: "absolute", left: m.x - pad, top: m.y - pad * 0.6, width: (m.w + pad * 2) * kk, height: m.h + pad * 1.2, background: color, mixBlendMode: "multiply", borderRadius: pad * 0.6 }} />;
        })}
      </div>
      {inset && box && (() => {
        const ki = p(arrive + 0.1, arrive + 0.5, Easing.out(Easing.cubic));
        const isrc = inset === true ? src : inset.src;
        const [iw, ih] = inset === true ? [W, H] : inset.size;
        const tw = 360, th = Math.min(inset === true ? 470 : 250, tw * ih / iw);
        const sc = tw / iw;
        return (
          <div style={{ position: "absolute", right: 56, top: 120, width: tw, height: th, overflow: "hidden", borderRadius: 10, opacity: ki, translate: `0 ${(1 - ki) * 20}px`, boxShadow: "0 18px 50px rgba(0,0,0,.6)", border: "3px solid rgba(247,244,236,.9)", background: "#fff" }}>
            <Img src={staticFile(isrc)} style={{ position: "absolute", left: 0, top: 0, width: tw, height: ih * sc }} />
            {inset === true && <div style={{ position: "absolute", left: box.x * sc - 6, top: box.y * sc - 6, width: box.w * sc + 12, height: box.h * sc + 12, border: "3px solid #e8463a", borderRadius: 4 }} />}
          </div>
        );
      })()}
      {source && <SourcePill at={0.3}>{source}</SourcePill>}
    </AbsoluteFill>
  );
};

/** Бумага: лёгкое зерно и тёплый тон, чтобы PDF выглядел листом, а не экраном (урок T02) */
const PaperGrain: React.FC<{ w: number; h: number }> = ({ w, h }) => (
  <svg width={w} height={h} style={{ position: "absolute", left: 0, top: 0, mixBlendMode: "multiply", opacity: 0.22, pointerEvents: "none" }}>
    <filter id="paperg"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed={7} /><feColorMatrix type="matrix" values="0 0 0 0 0.93  0 0 0 0 0.88  0 0 0 0 0.78  0 0 0 0.9 0" /></filter>
    <rect width={w} height={h} filter="url(#paperg)" />
    <rect width={w} height={h} fill="none" stroke="rgba(120,100,70,.35)" strokeWidth={w * 0.004} />
  </svg>
);

/** Подпись источника на тёмной плашке — читается и поверх белого документа */
const SourcePill: React.FC<{ children: React.ReactNode; at: number }> = ({ children, at }) => {
  const { p } = useT();
  return <div style={{ position: "absolute", left: 64, bottom: 34, opacity: p(at, at + 0.4), padding: "8px 16px", borderRadius: 8, background: "rgba(4,30,38,.78)", fontFamily: SANS, fontWeight: 600, fontSize: 19, letterSpacing: "0.18em", color: "rgba(247,244,236,.85)", textTransform: "uppercase" }}>{children}</div>;
};

/** Заголовок СМИ: скриншот статьи в окне браузера, камера к заголовку, заголовок подсвечен. */
export const Headline: React.FC<React.ComponentProps<typeof Evidence>> = (props) => <Evidence frame="screen" {...props} />;

type Side = { label: string; img?: string; quote?: string; fit?: "cover" | "contain"; who?: string };

const Card: React.FC<{ side: Side; paper: boolean; k: number; dimmed: number }> = ({ side, paper, k, dimmed }) => (
  <div style={{ width: 780, height: 560, borderRadius: 18, overflow: "hidden", position: "relative", background: paper ? "#f6f1e7" : "#0b1e24", boxShadow: "0 30px 90px rgba(0,0,0,.55)", opacity: k, filter: dimmed ? `saturate(${1 - 0.6 * dimmed}) brightness(${1 - 0.35 * dimmed})` : undefined }}>
    {side.img && <Img src={staticFile(side.img)} style={{ width: "100%", height: "100%", objectFit: side.fit ?? (paper ? "contain" : "cover") }} />}
    {side.quote && (
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 64px", background: side.img ? (paper ? "rgba(246,241,231,.86)" : "rgba(4,30,38,.62)") : undefined }}>
        <div style={{ fontFamily: paper ? "Georgia, 'Times New Roman', serif" : SERIF, fontSize: paper ? 46 : 58, lineHeight: 1.22, color: paper ? "#1b1b1b" : C6.ink }}>
          {paper ? side.quote : `“${side.quote}”`}
        </div>
        {side.who && <div style={{ marginTop: 26, fontFamily: SANS, fontWeight: 700, fontSize: 22, letterSpacing: "0.16em", textTransform: "uppercase", color: paper ? "#6b5d48" : C6.mint }}>{side.who}</div>}
      </div>
    )}
  </div>
);

/**
 * Реклама против правды: слева обещание компании (скриншот рекламы или цитата), справа строка из иска, чека или договора.
 * Правая половина появляется на right.at — в момент разоблачения; левая тускнеет.
 */
export const AdVsTruth: React.FC<{ at?: number; left: Side; right: Side & { at: number }; source?: string }> = ({ at = 0.1, left, right, source }) => {
  const { p } = useT();
  const kl = p(at, at + 0.5);
  const kr = p(right.at, right.at + 0.5, Easing.out(Easing.cubic));
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: 120, top: 210, translate: `${(1 - kl) * -30}px 0`, display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ opacity: kl }}><Kicker6 color={C6.mint}>{left.label}</Kicker6></div>
        <Card side={left} paper={false} k={kl} dimmed={kr} />
      </div>
      <div style={{ position: "absolute", left: 1020, top: 210, translate: `${(1 - kr) * 60}px 0`, display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ opacity: kr }}><Kicker6 color={C6.accent}>{right.label}</Kicker6></div>
        <Card side={right} paper k={kr} dimmed={0} />
      </div>
      <div style={{ position: "absolute", left: 958, top: 250 + 260 * (1 - kr), width: 4, height: 520 * kr, background: C6.accent, opacity: 0.8, borderRadius: 2 }} />
      {source && <Source6 at={right.at}>{source}</Source6>}
    </AbsoluteFill>
  );
};

/** Архив: зерно плёнки, виньетка, лёгкое мерцание — поверх Stock6 с sepia. В плане: sepia=True (или archive=True). */
export const ArchiveFx: React.FC<{ grain?: number }> = ({ grain = 0.16 }) => {
  const f = useCurrentFrame();
  const seed = f % 9;
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <svg width="1920" height="1080" style={{ position: "absolute", inset: 0, mixBlendMode: "overlay", opacity: grain }}>
        <filter id={`grain${seed}`}><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed={seed} stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
        <rect width="1920" height="1080" filter={`url(#grain${seed})`} />
      </svg>
      <AbsoluteFill style={{ background: "radial-gradient(ellipse at center, transparent 52%, rgba(28,16,6,.6) 100%)" }} />
      <AbsoluteFill style={{ background: `rgba(60,38,14,${0.05 + 0.03 * Math.abs(Math.sin(f * 0.9))})`, mixBlendMode: "multiply" }} />
    </AbsoluteFill>
  );
};

/**
 * Доска расследования (T02, 18.11.2026): точки-дела появляются по одной, от каждой тянется красная нить
 * к центру (hub), когда он появляется. Координаты — пиксели кадра 1920×1080; at — секунды от начала сцены.
 * Сквозная схема выпуска: в начале центр — «?», в главе про дистрибьютора — имя.
 */
type Pin = { label: string; sub?: string; x: number; y: number; at: number; color?: string };
export const CaseBoard: React.FC<{ pins: Pin[]; hub?: Pin & { q?: number }; title?: string; dim?: number }> = ({ pins, hub, title, dim = 0.55 }) => {
  const { p } = useT();
  const hk = hub ? p(hub.at, hub.at + 0.5, Easing.out(Easing.cubic)) : 0;
  const qk = hub?.q !== undefined ? p(hub.q, hub.q + 0.4) : 1; // q — когда «?» сменяется настоящим именем
  return (
    <AbsoluteFill style={{ background: `rgba(2,22,28,${dim})` }}>
      <svg width="1920" height="1080" style={{ position: "absolute", inset: 0 }}>
        {hub && pins.map((n, i) => {
          const k = p(Math.max(n.at, hub.at) + 0.1 + i * 0.12, Math.max(n.at, hub.at) + 0.8 + i * 0.12, Easing.inOut(Easing.cubic));
          return <line key={i} x1={n.x} y1={n.y} x2={lerp(n.x, hub.x, k)} y2={lerp(n.y, hub.y, k)} stroke="#e8463a" strokeWidth={4} strokeLinecap="round" opacity={0.9} />;
        })}
      </svg>
      {title && <div style={{ position: "absolute", left: 80, top: 64, opacity: p(0, 0.4) }}><Kicker6 color={C6.accent} size={36}>{title}</Kicker6></div>}
      {pins.map((n, i) => {
        const k = p(n.at, n.at + 0.35, Easing.out(Easing.back(1.6)));
        return (
          <div key={i} style={{ position: "absolute", left: n.x, top: n.y, translate: "-50% -50%", scale: String(0.6 + 0.4 * k), opacity: Math.min(1, k * 1.5), display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <div style={{ width: 26, height: 26, borderRadius: "50%", background: n.color ?? "#e8463a", boxShadow: "0 0 0 6px rgba(232,70,58,.25), 0 6px 18px rgba(0,0,0,.5)" }} />
            <div style={{ background: "#f6f1e7", color: "#1b1b1b", padding: "12px 26px", borderRadius: 10, boxShadow: "0 12px 34px rgba(0,0,0,.45)", textAlign: "center", rotate: `${(i % 2 ? 1 : -1) * 1.5}deg` }}>
              <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 44, letterSpacing: "0.02em" }}>{n.label}</div>
              {n.sub && <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 34, color: "#a1271d", marginTop: 2 }}>{n.sub}</div>}
            </div>
          </div>
        );
      })}
      {hub && (
        <div style={{ position: "absolute", left: hub.x, top: hub.y, translate: "-50% -50%", scale: String(0.7 + 0.3 * hk), opacity: hk, background: "#0b1e24", border: `4px solid ${C6.accent}`, borderRadius: 14, padding: "18px 40px", textAlign: "center", boxShadow: `0 0 60px ${C6.accent}44, 0 20px 50px rgba(0,0,0,.6)` }}>
          <div style={{ fontFamily: SERIF, fontSize: 64, color: C6.accent, lineHeight: 1.05 }}>{qk < 1 ? "?" : hub.label}</div>
          {hub.sub && qk >= 1 && <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 26, letterSpacing: "0.14em", textTransform: "uppercase", color: C6.mint, marginTop: 6 }}>{hub.sub}</div>}
        </div>
      )}
    </AbsoluteFill>
  );
};
