import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  random,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// ---------- палитра и шрифт ----------
const C = {
  bg0: "#04060f",
  bg1: "#0a1030",
  dim: "#8b93b8",
  accent: "#ffcf5c",
  cyan: "#5ee6ff",
  violet: "#8a7dff",
};
const FONT = "'Inter Display', Inter, 'Segoe UI', Arial, sans-serif";

// ---------- помощники (время в секундах) ----------
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const eOut = Easing.out(Easing.cubic);
const eInOut = Easing.inOut(Easing.cubic);
const eBack = Easing.out(Easing.back(1.7));
const eExpo = Easing.out(Easing.exp);
const p = (t: number, a: number, b: number, easing = (x: number) => x) =>
  interpolate(t, [a, b], [0, 1], { ...clamp, easing });
const lerp = (a: number, b: number, x: number) => a + (b - a) * x;

// ---------- субтитры: [слово, начало, конец] ----------
const WORDS: [string, number, number][] = [
  ["In", 0.3, 0.55], ["1969,", 0.55, 1.2], ["a", 1.3, 1.45], ["computer", 1.45, 1.95],
  ["landed", 1.95, 2.4], ["us", 2.4, 2.6], ["on", 2.6, 2.8], ["the", 2.8, 2.95], ["Moon", 2.95, 3.6],
  ["It", 3.9, 4.1], ["had", 4.1, 4.35], ["just", 4.35, 4.7], ["4", 4.7, 5.1], ["kilobytes", 5.1, 5.8],
  ["of", 5.8, 5.95], ["memory", 5.95, 6.7],
  ["Your", 7.2, 7.45], ["phone", 7.45, 7.85], ["has", 7.85, 8.1], ["8", 8.1, 8.5], ["gigabytes", 8.5, 9.3],
  ["That's", 10.6, 10.95], ["2", 10.95, 11.25], ["million", 11.25, 11.75], ["times", 11.75, 12.15], ["more", 12.15, 12.8],
];
const GROUPS: (typeof WORDS)[] = (() => {
  const out: (typeof WORDS)[] = [];
  let g: typeof WORDS = [];
  WORDS.forEach((w, i) => {
    g.push(w);
    const next = WORDS[i + 1];
    if (g.length === 3 || /[.,!?]$/.test(w[0]) || !next || next[1] - w[2] > 0.25) {
      out.push(g);
      g = [];
    }
  });
  return out;
})();

// ---------- звёзды ----------
const STARS = new Array(420).fill(0).map((_, i) => ({
  x: random(`x${i}`) * 1080,
  y: random(`y${i}`) * 1920,
  z: 0.2 + random(`z${i}`) * 0.8,
  ph: random(`p${i}`) * 6.28,
  s: random(`s${i}`),
}));

const Stars: React.FC<{ t: number }> = ({ t }) => (
  <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
    {STARS.map((s, i) => {
      const y = (((s.y - t * 40 * s.z) % 1920) + 1920) % 1920;
      const a = (0.35 + 0.65 * s.z) * (0.6 + 0.4 * Math.sin(t * 2.2 + s.ph));
      const r = s.s > 0.97 ? 2.6 : 0.6 + s.z * 1.4;
      const fill = s.s > 0.9 ? "#cfe0ff" : "#ffffff";
      return (
        <g key={i}>
          {s.s > 0.97 && <circle cx={s.x} cy={y} r={r * 5} fill={fill} opacity={a * 0.25} />}
          <circle cx={s.x} cy={y} r={r} fill={fill} opacity={a} />
        </g>
      );
    })}
  </svg>
);

// ---------- сцена с плавным входом/выходом ----------
const Scene: React.FC<{ t: number; from: number; to: number; children: React.ReactNode }> = ({
  t, from, to, children,
}) => {
  const i = p(t, from, from + 0.45, eOut);
  const o = p(t, to - 0.45, to, eInOut);
  const v = i * (1 - o);
  if (v < 0.002) return null;
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: v,
        filter: `blur(${(1 - i) * 24 + o * 30}px)`,
        scale: String(lerp(1.12, 1, i) * lerp(1, 0.9, o)),
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

// ---------- общие стили ----------
const kicker: React.CSSProperties = {
  fontSize: 40, fontWeight: 600, letterSpacing: "0.32em", textTransform: "uppercase", color: C.dim,
};
const glowText: React.CSSProperties = {
  fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9,
  background: "linear-gradient(180deg,#fff 0%,#c9d2ff 55%,#7d88c9 100%)",
  WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
  filter: "drop-shadow(0 0 40px rgba(130,150,255,.45))",
  fontVariantNumeric: "tabular-nums",
};
const goldText: React.CSSProperties = {
  ...glowText,
  background: "linear-gradient(180deg,#fff3c4 0%,#ffcf5c 50%,#ff8a3d 100%)",
  WebkitBackgroundClip: "text", backgroundClip: "text",
  filter: "drop-shadow(0 0 50px rgba(255,170,60,.55))",
};
const unit = (color: string): React.CSSProperties => ({
  fontSize: 120, fontWeight: 800, marginLeft: 20, color,
});

const pinsBg = (dir: string) =>
  `repeating-linear-gradient(${dir}, transparent 0 62px, rgba(94,230,255,.7) 62px 72px, transparent 72px 96px)`;

// ---------- главный компонент ----------
export const Apollo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;

  // Луна: поднимается, потом уезжает вверх и уменьшается
  const m1 = p(t, 0, 2.6, eOut);
  const m2 = p(t, 3.2, 4.4, eInOut);
  const mx = lerp(560, 700, m2);
  const my = lerp(1150, 90, m1) + lerp(0, -160, m2);
  const ms = lerp(1.25, 1, m1) * lerp(1, 0.55, m2);
  const mo = Math.min(1, m1 * 1.4) * lerp(1, 0.75, p(t, 10.3, 11, eInOut));

  // Счётчики
  const kb = Math.round(4 * p(t, 4.6, 5.6, eExpo));
  const gb = Math.round(8 * p(t, 7.9, 8.9, eExpo));
  const times = Math.round(2_000_000 * p(t, 10.8, 12.4, eExpo));
  const chip = p(t, 3.7, 4.3, eBack);
  const pulse = t >= 12.3 ? lerp(1.25, 1, p(t, 12.3, 12.7, eBack)) : 1;

  // Субтитры
  const group = GROUPS.find((g) => t >= g[0][1] - 0.05 && t < g[g.length - 1][2] + 0.25);

  // Затемнение в начале и в конце
  const fade = Math.min(p(t, 0, 0.4, eOut), 1 - p(t, 13.6, 14));

  return (
    <AbsoluteFill style={{ backgroundColor: C.bg0, fontFamily: FONT, color: "#f4f6ff", opacity: fade }}>
      {/* Фон */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(1200px 900px at 50% 20%, #1a2266 0%, transparent 60%),
            radial-gradient(900px 900px at 80% 90%, #2a0f4d 0%, transparent 65%),
            linear-gradient(180deg, ${C.bg1}, ${C.bg0})`,
          scale: String(1.05 + 0.02 * Math.sin(t * 0.3)),
          translate: `0px ${-t * 4}px`,
        }}
      />
      <Stars t={t} />

      {/* Луна */}
      <div
        style={{
          position: "absolute", left: 0, top: 0, width: 520, height: 520, borderRadius: "50%",
          translate: `${mx - 260}px ${my}px`,
          scale: String(ms),
          rotate: `${t * 3}deg`,
          opacity: mo,
          background: `radial-gradient(circle at 30% 35%, rgba(0,0,0,.18) 0 38px, transparent 40px),
            radial-gradient(circle at 62% 28%, rgba(0,0,0,.14) 0 22px, transparent 24px),
            radial-gradient(circle at 55% 62%, rgba(0,0,0,.16) 0 56px, transparent 58px),
            radial-gradient(circle at 24% 70%, rgba(0,0,0,.12) 0 30px, transparent 32px),
            radial-gradient(circle at 78% 55%, rgba(0,0,0,.10) 0 18px, transparent 20px),
            radial-gradient(circle at 35% 30%, #fffdf3 0%, #e9e4d3 45%, #a9a493 80%, #6d6a60 100%)`,
          boxShadow: "0 0 120px 30px rgba(255,245,210,.25), inset -60px -40px 120px rgba(0,0,0,.55)",
        }}
      />

      {/* Лучи за финальной цифрой */}
      <div
        style={{
          position: "absolute", left: 540 - 1100, top: 1920 * 0.44 - 1100, width: 2200, height: 2200,
          borderRadius: "50%",
          background: "repeating-conic-gradient(from 0deg, rgba(255,207,92,.10) 0 6deg, transparent 6deg 18deg)",
          WebkitMaskImage: "radial-gradient(circle, #000 0%, transparent 60%)",
          maskImage: "radial-gradient(circle, #000 0%, transparent 60%)",
          opacity: p(t, 11, 12, eOut) * (1 - p(t, 13.6, 14, eInOut)),
          rotate: `${t * 8}deg`,
        }}
      />

      {/* Сцена 1: 1969 */}
      <Scene t={t} from={0.2} to={3.8}>
        <div style={kicker}>July 20</div>
        <div style={{ ...glowText, fontSize: 340 }}>1969</div>
      </Scene>

      {/* Сцена 2: чип и 4 KB */}
      <Scene t={t} from={3.6} to={7.2}>
        <div
          style={{
            width: 360, height: 360, position: "relative", marginBottom: 70,
            scale: String(lerp(0.4, 1, chip)), rotate: `${lerp(-25, 0, chip)}deg`,
          }}
        >
          <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 40, background: pinsBg("90deg") }} />
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 40, background: pinsBg("90deg") }} />
          <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 40, background: pinsBg("0deg") }} />
          <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: 40, background: pinsBg("0deg") }} />
          <div
            style={{
              position: "absolute", inset: 40, borderRadius: 36,
              background: "linear-gradient(145deg,#1d2350,#0c1030)",
              border: "3px solid rgba(94,230,255,.6)",
              boxShadow: "0 0 60px rgba(94,230,255,.35), inset 0 0 40px rgba(94,230,255,.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, fontSize: 64, letterSpacing: "0.08em", color: C.cyan,
            }}
          >
            AGC
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span style={{ ...glowText, fontSize: 300 }}>{kb}</span>
          <span style={unit(C.cyan)}>KB</span>
        </div>
        <div style={{ ...kicker, marginTop: 10 }}>of working memory</div>
      </Scene>

      {/* Сцена 3: телефон 8 GB и полоски */}
      <Scene t={t} from={7.0} to={10.6}>
        <div style={kicker}>your phone</div>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span style={{ ...glowText, fontSize: 300 }}>{gb}</span>
          <span style={unit(C.violet)}>GB</span>
        </div>
        <div style={{ width: 860, marginTop: 80, display: "flex", flexDirection: "column", gap: 44 }}>
          {[
            { l: "Apollo, 1969", v: "4 KB", w: Math.max(p(t, 8.0, 8.1) > 0 ? 0.5 : 0, 0.5 * p(t, 8.0, 8.6, eOut)), bg: C.cyan, sh: `0 0 24px ${C.cyan}` },
            { l: "Phone, today", v: "8 GB", w: 100 * p(t, 8.6, 9.9, eExpo), bg: `linear-gradient(90deg, ${C.violet}, ${C.cyan})`, sh: "0 0 40px rgba(138,125,255,.7)" },
          ].map((b) => (
            <div key={b.l}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 38, fontWeight: 600, color: "#cfd5f5", marginBottom: 16 }}>
                <span>{b.l}</span>
                <span>{b.v}</span>
              </div>
              <div style={{ height: 44, borderRadius: 22, background: "rgba(255,255,255,.07)", overflow: "hidden", position: "relative" }}>
                <div
                  style={{
                    position: "absolute", left: 0, top: 0, bottom: 0, borderRadius: 22,
                    width: `${b.w}%`, minWidth: b.w > 0 ? 4 : 0, background: b.bg, boxShadow: b.sh,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Scene>

      {/* Сцена 4: 2 000 000× */}
      <Scene t={t} from={10.4} to={14.6}>
        <div style={kicker}>roughly</div>
        <div style={{ ...goldText, fontSize: 180, scale: String(pulse) }}>
          {times.toLocaleString("en-US")}×
        </div>
        <div style={{ fontSize: 52, fontWeight: 600, color: "#cfd5f5", textAlign: "center", lineHeight: 1.25, maxWidth: 880, marginTop: 30 }}>
          more memory than the ship that reached the Moon
        </div>
      </Scene>

      {/* Субтитры */}
      <div
        style={{
          position: "absolute", left: 60, right: 60, top: 1470, textAlign: "center",
          fontWeight: 900, fontSize: 78, lineHeight: 1.12, textTransform: "uppercase",
        }}
      >
        {group?.map(([word, a, b]) => {
          const on = t >= a && t < b + 0.02;
          const k = p(t, a, a + 0.18, eBack);
          const s = t < a ? 0.92 : on ? lerp(0.92, 1.12, k) : 1;
          return (
            <span
              key={word + a}
              style={{
                display: "inline-block", margin: "0 18px", scale: String(s), opacity: t < a ? 0.55 : 1,
                color: on ? C.accent : "#fff",
                textShadow: "0 6px 0 rgba(0,0,0,.55), 0 0 30px rgba(0,0,0,.6)",
                WebkitTextStroke: "3px rgba(0,0,0,.65)", paintOrder: "stroke fill",
              }}
            >
              {word.replace(/,$/, "")}
            </span>
          );
        })}
      </div>

      {/* Зерно плёнки и виньетка */}
      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0, mixBlendMode: "overlay", opacity: 0.18 }}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} seed={Math.floor(t * 24) % 6} />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
      <AbsoluteFill style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,.65) 100%)" }} />
    </AbsoluteFill>
  );
};
