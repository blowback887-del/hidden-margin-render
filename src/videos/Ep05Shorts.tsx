import React from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C3, FONT_NUM } from "../brand/theme";
import { Ep05Christmas } from "./Ep05Christmas";
import WORDS from "./ep05-christmas-words.json";

// Shorts из Ep05 (стиль C3): вертикаль 1080×1920. Кусок длинного ролика в центре,
// крючок сверху, крупные субтитры по словам (вшиты), цифры — золотом.

type W = { text: string; start: number; end: number };
const words = WORDS as W[];

export type Ep05ShortProps = { start: number; end: number; hook: string; accent: string };

export const EP05_SHORTS: (Ep05ShortProps & { id: string })[] = [
  { id: "Ep05-Short1", start: 284.2, end: 339.3, hook: "$200 MILLION FOR", accent: "COFFEE NOBODY DRANK" },
];
export const ep05ShortFrames = (s: Ep05ShortProps) => Math.ceil((s.end - s.start) * 30);

const NUMERIC = /(\d|\$|%|^(two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|fifteen|sixteen|eighteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|billion|percent|dollars?|cents?)\b)/i;

// группы по 1–3 слова, разрыв после знака препинания
const chunks = (from: number, to: number) => {
  const list = words.filter((w) => w.start >= from - 0.05 && w.start < to);
  const out: W[][] = [];
  let cur: W[] = [];
  for (const w of list) {
    cur.push(w);
    if (cur.length >= 3 || /[.,!?:;]$/.test(w.text)) {
      out.push(cur);
      cur = [];
    }
  }
  if (cur.length) out.push(cur);
  return out;
};

const SCALE = 0.6; // 1920×1080 → 1152×648, края обрезаются на 36 px

export const Ep05Short: React.FC<Ep05ShortProps> = ({ start, end, hook, accent }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = start + frame / 30;
  const groups = React.useMemo(() => chunks(start, end), [start, end]);
  const g = groups.find((c) => t >= c[0].start - 0.05 && t < c[c.length - 1].end + 0.25) ?? null;
  const hookIn = interpolate(frame, [0, 8], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 10, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: `radial-gradient(1000px 1300px at 50% 45%, ${C3.bgCenter}, ${C3.bgMid} 60%, ${C3.bgEdge})`, opacity: fadeOut }} translate="no">
      {/* крючок */}
      <div style={{ position: "absolute", left: 60, right: 60, top: 220, textAlign: "center", fontFamily: FONT_NUM, fontWeight: 800, fontSize: 84, lineHeight: 1.06, letterSpacing: "-0.01em", color: C3.ink, opacity: hookIn, scale: String(0.92 + 0.08 * hookIn) }}>
        {hook}
        <br />
        <span style={{ color: C3.gold }}>{accent}</span>
      </div>

      {/* кусок ролика */}
      <div style={{ position: "absolute", left: (1080 - 1152) / 2, top: 600, width: 1152, height: 648, overflow: "hidden", borderTop: `4px solid ${C3.money}`, borderBottom: `4px solid ${C3.money}`, boxShadow: `0 0 60px ${C3.money}33` }}>
        <div style={{ position: "relative", width: 1920, height: 1080, transform: `scale(${SCALE})`, transformOrigin: "0 0" }}>
          <Sequence from={-Math.round(start * 30)} layout="none">
            <Ep05Christmas />
          </Sequence>
        </div>
      </div>

      {/* субтитры */}
      <div style={{ position: "absolute", left: 50, right: 50, top: 1290, textAlign: "center", fontFamily: FONT_NUM, fontWeight: 800, fontSize: 92, lineHeight: 1.08, textTransform: "uppercase", textShadow: "0 6px 0 rgba(0,0,0,.55)" }}>
        {g &&
          g.map((w, i) => {
            const said = t >= w.start;
            const num = NUMERIC.test(w.text);
            const color = !said ? "rgba(245,241,232,.3)" : num ? C3.gold : t < w.end + 0.08 ? C3.money : C3.ink;
            return (
              <span key={i} style={{ color }}>
                {w.text.replace(/[,;:]$/, "")}{" "}
              </span>
            );
          })}
      </div>

      {/* низ */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 330, textAlign: "center", fontFamily: FONT_NUM, fontWeight: 700, fontSize: 36, letterSpacing: "0.16em", color: C3.dim }}>
        FULL VIDEO ON <span style={{ color: C3.ink }}>HIDDEN MARGIN</span>
      </div>
    </AbsoluteFill>
  );
};
