import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { COLORS, FONT_BODY, FONT_HEAD } from "./theme";

// Обложки Ep02 (1280×720) — три разных типа для Test & Compare.
// A: человек + провокация, B: лестница цен (инфографика), C: зал + шок-цифра.

const shadow = "0 8px 0 rgba(0,0,0,.45), 0 0 30px rgba(0,0,0,.5)";

const Tag: React.FC<{ children: React.ReactNode; bg: string; color?: string; rotate?: number; size?: number; style?: React.CSSProperties }> = ({ children, bg, color = COLORS.bg, rotate = 0, size = 90, style }) => (
  <div style={{ position: "absolute", background: bg, color, fontFamily: FONT_HEAD, fontSize: size, lineHeight: 1, padding: "8px 26px 4px", borderRadius: 14, rotate: `${rotate}deg`, boxShadow: "0 10px 0 rgba(0,0,0,.35)", ...style }}>
    {children}
  </div>
);

// A — «Они хотят, чтобы ты остался дома»
export const ThumbA: React.FC = () => (
  <AbsoluteFill style={{ background: COLORS.bg, overflow: "hidden" }}>
    <Img src={staticFile("thumbs/ep02/sofa.jpg")} style={{ position: "absolute", right: -40, top: 0, height: 720, width: 1280, objectFit: "cover", objectPosition: "70% 50%", filter: "saturate(1.15) contrast(1.05)" }} />
    <AbsoluteFill style={{ background: "linear-gradient(90deg, rgba(13,19,34,.97) 0%, rgba(13,19,34,.9) 34%, rgba(13,19,34,.2) 62%, rgba(13,19,34,0) 100%)" }} />
    <div style={{ position: "absolute", left: 48, top: 70, fontFamily: FONT_HEAD, fontSize: 150, lineHeight: 0.92, color: COLORS.ink, textShadow: shadow }}>
      THEY WANT
      <br />
      YOU <span style={{ color: COLORS.gold }}>HOME</span>
    </div>
    <Tag bg={COLORS.money} rotate={-5} size={110} style={{ left: 60, top: 440 }}>$15/mo</Tag>
    <div style={{ position: "absolute", left: 60, top: 600, fontFamily: FONT_BODY, fontWeight: 900, fontSize: 34, letterSpacing: "0.08em", color: COLORS.ink, textShadow: shadow }}>
      THE GYM BUSINESS MODEL
    </div>
  </AbsoluteFill>
);

// B — лестница цен $15 → $400
export const ThumbB: React.FC = () => {
  const steps = [
    { p: "$15", c: COLORS.money },
    { p: "$70", c: COLORS.blue },
    { p: "$35", c: COLORS.gold, s: "/CLASS" },
    { p: "$400", c: COLORS.loss },
  ];
  return (
    <AbsoluteFill style={{ background: `radial-gradient(900px 600px at 70% 80%, #23356a, ${COLORS.bg})`, overflow: "hidden" }}>
      <AbsoluteFill style={{ background: "repeating-conic-gradient(from 0deg at 80% 100%, rgba(255,210,63,.07) 0 7deg, transparent 7deg 20deg)" }} />
      <div style={{ position: "absolute", left: 44, top: 34, fontFamily: FONT_HEAD, fontSize: 132, lineHeight: 0.95, color: COLORS.ink, textShadow: shadow }}>
        WHO <span style={{ color: COLORS.gold }}>REALLY</span>
        <br />
        PROFITS?
      </div>
      {steps.map((st, i) => (
        <div key={i} style={{ position: "absolute", left: 90 + i * 290, bottom: 0, width: 250, height: 170 + i * 105, background: `linear-gradient(180deg, ${st.c}, ${st.c}aa)`, borderRadius: "16px 16px 0 0", boxShadow: "0 0 0 6px rgba(0,0,0,.25)" }}>
          <div style={{ position: "absolute", top: 18, left: 0, right: 0, textAlign: "center", fontFamily: FONT_HEAD, fontSize: st.p.length > 3 ? 96 : 104, color: COLORS.bg, lineHeight: 1 }}>
            {st.p}
            {st.s && <div style={{ fontFamily: FONT_BODY, fontWeight: 900, fontSize: 26, letterSpacing: "0.08em" }}>{st.s}</div>}
          </div>
        </div>
      ))}
    </AbsoluteFill>
  );
};

// C — пустой зал + «продано в 24 раза»
export const ThumbC: React.FC = () => (
  <AbsoluteFill style={{ background: COLORS.bg, overflow: "hidden" }}>
    <Img src={staticFile("thumbs/ep02/treadmills.jpg")} style={{ position: "absolute", inset: 0, width: 1280, height: 720, objectFit: "cover", filter: "blur(2.5px) brightness(.55) saturate(1.1)" }} />
    <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(13,19,34,.25), rgba(13,19,34,.75))" }} />
    <div style={{ position: "absolute", left: 0, right: 0, top: 60, textAlign: "center", fontFamily: FONT_HEAD, fontSize: 210, lineHeight: 0.9, color: COLORS.ink, textShadow: shadow }}>
      7,100
    </div>
    <div style={{ position: "absolute", left: 0, right: 0, top: 255, textAlign: "center", fontFamily: FONT_BODY, fontWeight: 900, fontSize: 44, letterSpacing: "0.12em", color: COLORS.ink, textShadow: shadow }}>
      MEMBERS · ROOM FOR <span style={{ color: COLORS.gold }}>300</span>
    </div>
    <Tag bg={COLORS.loss} color={COLORS.ink} rotate={-6} size={130} style={{ left: 250, top: 400 }}>SOLD 24× OVER</Tag>
  </AbsoluteFill>
);
