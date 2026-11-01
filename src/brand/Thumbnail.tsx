import React from "react";
import { AbsoluteFill } from "remotion";
import { COLORS, FONT_BODY, FONT_HEAD } from "./theme";
import { PopcornBucket } from "./components";

// Обложка 1280×720. Формула конкурентов: 2–3 слова КРУПНО, одно слово акцентом,
// один главный предмет в центре, ценники и стрелки денег.
export const Thumbnail: React.FC<{ line1: string; line2: string }> = ({ line1, line2 }) => (
  <AbsoluteFill style={{ background: `radial-gradient(800px 500px at 60% 60%, #1f2d55, ${COLORS.bg})`, overflow: "hidden" }}>
    {/* лучи */}
    <AbsoluteFill
      style={{
        background: "repeating-conic-gradient(from 0deg at 62% 62%, rgba(255,210,63,.10) 0 8deg, transparent 8deg 22deg)",
      }}
    />
    {/* заголовок */}
    <div style={{ position: "absolute", left: 40, top: 30, fontFamily: FONT_HEAD, fontSize: 140, lineHeight: 0.95, color: COLORS.ink, textShadow: "0 10px 0 rgba(0,0,0,.45)" }}>
      {line1}
      <br />
      <span style={{ color: COLORS.gold }}>{line2}</span>
    </div>
    {/* ведро */}
    <div style={{ position: "absolute", left: 620, top: 150, rotate: "6deg" }}>
      <PopcornBucket size={470} />
    </div>
    {/* ценники */}
    <div style={{ position: "absolute", left: 60, top: 410, rotate: "-6deg", background: COLORS.ink, borderRadius: 16, padding: "6px 30px" }}>
      <div style={{ fontFamily: FONT_HEAD, fontSize: 110, color: COLORS.bg, position: "relative" }}>
        $0.90
        <div style={{ position: "absolute", left: -6, right: -6, top: "48%", height: 14, background: COLORS.loss, rotate: "-8deg", borderRadius: 7 }} />
      </div>
    </div>
    <div style={{ position: "absolute", left: 370, top: 470, fontFamily: FONT_HEAD, fontSize: 120, color: COLORS.money, textShadow: "0 8px 0 rgba(0,0,0,.4)" }}>→</div>
    <div style={{ position: "absolute", left: 1010, top: 70, rotate: "8deg", background: COLORS.gold, borderRadius: 16, padding: "4px 26px", boxShadow: "0 10px 0 rgba(0,0,0,.35)" }}>
      <div style={{ fontFamily: FONT_HEAD, fontSize: 120, color: COLORS.bg }}>$8</div>
    </div>
    <div style={{ position: "absolute", right: 30, bottom: 24, fontFamily: FONT_BODY, fontWeight: 800, fontSize: 26, color: COLORS.dim, letterSpacing: "0.1em" }}>
      AMC · 2025
    </div>
  </AbsoluteFill>
);
