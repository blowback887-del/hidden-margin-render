import React from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT_BODY, FONT_HEAD } from "../brand/theme";
import { Ep02Gyms } from "./Ep02Gyms";
import WORDS from "./ep02-gyms-words.json";

// Shorts из Ep02: вертикаль 1080×1920. Кусок длинного ролика в центре,
// крючок-заголовок сверху, крупные субтитры (вшиты) снизу.

type W = { word: string; start: number; end: number };
const words = WORDS as W[];

export type ShortProps = { start: number; end: number; hook: string; accent: string };

export const SHORTS: (ShortProps & { id: string })[] = [
  { id: "Ep02-Short1", start: 0.0, end: 34.6, hook: "THIS $15 CARD IS A", accent: "BET AGAINST YOU" },
  { id: "Ep02-Short2", start: 98.3, end: 143.9, hook: "THE $15 GYM THAT", accent: "COSTS MORE" },
  { id: "Ep02-Short3", start: 196.5, end: 248.1, hook: "WHY CANCELLING YOUR GYM", accent: "IS SO HARD" },
  { id: "Ep02-Short4", start: 434.7, end: 482.0, hook: "PLANET FITNESS'S BEST BUSINESS", accent: "ISN'T A GYM" },
];
export const shortFrames = (s: ShortProps) => Math.ceil((s.end - s.start) * 30);

// группы по 1–3 слова, разрыв после точки/запятой
const chunks = (from: number, to: number) => {
  const list = words.filter((w) => w.start >= from - 0.05 && w.start < to);
  const out: W[][] = [];
  let cur: W[] = [];
  for (const w of list) {
    cur.push(w);
    if (cur.length >= 3 || /[.,!?:;]$/.test(w.word)) {
      out.push(cur);
      cur = [];
    }
  }
  if (cur.length) out.push(cur);
  return out;
};

const SCALE = 0.6; // 1920×1080 → 1152×648, края обрезаются на 36 px

export const Ep02Short: React.FC<ShortProps> = ({ start, end, hook, accent }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = start + frame / 30;
  const groups = React.useMemo(() => chunks(start, end), [start, end]);
  const g = groups.find((c) => t >= c[0].start - 0.05 && t < c[c.length - 1].end + 0.25) ?? null;
  const hookIn = interpolate(frame, [0, 8], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 10, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: `radial-gradient(900px 1200px at 50% 45%, #1a2647, ${COLORS.bg})`, opacity: fadeOut }} translate="no">
      {/* крючок */}
      <div style={{ position: "absolute", left: 60, right: 60, top: 190, textAlign: "center", fontFamily: FONT_HEAD, fontSize: 92, lineHeight: 1.02, color: COLORS.ink, textShadow: "0 8px 0 rgba(0,0,0,.45)", opacity: hookIn, scale: String(0.9 + 0.1 * hookIn) }}>
        {hook}
        <br />
        <span style={{ color: COLORS.gold }}>{accent}</span>
      </div>

      {/* кусок ролика */}
      <div style={{ position: "absolute", left: (1080 - 1152) / 2, top: 600, width: 1152, height: 648, overflow: "hidden", borderTop: `6px solid ${COLORS.gold}`, borderBottom: `6px solid ${COLORS.gold}` }}>
        <div style={{ position: "relative", width: 1920, height: 1080, transform: `scale(${SCALE})`, transformOrigin: "0 0" }}>
          <Sequence from={-Math.round(start * 30)} layout="none">
            <Ep02Gyms />
          </Sequence>
        </div>
      </div>

      {/* субтитры */}
      <div style={{ position: "absolute", left: 50, right: 50, top: 1330, textAlign: "center", fontFamily: FONT_HEAD, fontSize: 104, lineHeight: 1.05, textTransform: "uppercase", textShadow: "0 8px 0 rgba(0,0,0,.5)" }}>
        {g &&
          g.map((w, i) => (
            <span key={i} style={{ color: t >= w.start && t < w.end + 0.08 ? COLORS.gold : t >= w.start ? COLORS.ink : "rgba(245,241,232,.35)" }}>
              {w.word.replace(/[,;:]$/, "")}{" "}
            </span>
          ))}
      </div>

      {/* низ */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 230, textAlign: "center", fontFamily: FONT_BODY, fontWeight: 900, fontSize: 40, letterSpacing: "0.14em", color: COLORS.dim }}>
        FULL VIDEO ON <span style={{ color: COLORS.ink }}>HIDDEN MARGIN</span>
      </div>
    </AbsoluteFill>
  );
};
