import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Easing } from "remotion";
import { COLORS, FONT_BODY, FONT_HEAD } from "../brand/theme";

// Пример нового стиля (с Ep03): премиальная инфографика + монета-детектив вместо человечков.
// 9 секунд, без звука. Цифры — из Ep02 (Planet Fitness 10-K 2025).

const GREEN = "#2fdc7f";
const ease = Easing.bezier(0.22, 1, 0.36, 1);

const useP = () => {
  const f = useCurrentFrame();
  return (a: number, b: number) => interpolate(f / 30, [a, b], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease });
};

// ---------- монета ----------
type Pose = "neutral" | "point" | "shocked" | "wink" | "suspicious" | "shrug" | "sign" | "celebrate";
const Coin: React.FC<{ timeline: { at: number; pose: Pose }[]; x: number; y: number; h: number; enter: number; sign?: string }> = ({ timeline, x, y, h, enter, sign }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = f / 30;
  let cur = timeline[0];
  for (const k of timeline) if (t >= k.at) cur = k;
  const sinceSwap = f - Math.round(cur.at * 30);
  // появление с отскоком
  const inS = spring({ frame: f - Math.round(enter * 30), fps, config: { damping: 11, stiffness: 140 } });
  // «удар» при смене позы
  const pop = spring({ frame: sinceSwap, fps, config: { damping: 9, stiffness: 220 } });
  const squash = cur.at > enter ? 1 + 0.08 * (1 - pop) : 1;
  // дыхание + лёгкое покачивание
  const breathe = 1 + 0.012 * Math.sin(t * 3.2);
  const sway = 2.2 * Math.sin(t * 1.7);
  const shake = cur.pose === "shocked" ? 6 * Math.sin(sinceSwap * 2.4) * Math.max(0, 1 - sinceSwap / 14) : 0;
  const jump = cur.pose === "celebrate" ? -40 * Math.abs(Math.sin(sinceSwap / 8)) : 0;
  return (
    <div style={{ position: "absolute", left: x, top: y, height: h, transformOrigin: "50% 100%", translate: `${shake}px ${(1 - inS) * 260 + jump}px`, scale: `${inS * squash * breathe} ${inS * (2 - squash) * breathe}`, rotate: `${sway}deg`, opacity: Math.min(1, inS * 3) }}>
      {/* тень */}
      <div style={{ position: "absolute", left: "15%", right: "15%", bottom: -14, height: 26, borderRadius: "50%", background: "radial-gradient(closest-side, rgba(0,0,0,.55), transparent)" }} />
      <Img src={staticFile(`mascot/coin-${cur.pose}.png`)} style={{ height: h, display: "block", filter: "drop-shadow(0 0 40px rgba(255,200,60,.18))" }} />
      {cur.pose === "sign" && sign && (
        <div style={{ position: "absolute", left: "4%", right: "4%", top: "60%", height: "25%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT_HEAD, fontSize: h * 0.085, color: COLORS.bg, letterSpacing: "0.02em" }}>{sign}</div>
      )}
    </div>
  );
};

// ---------- глянцевая карта ----------
const Card: React.FC<{ p: number; tilt: number }> = ({ p, tilt }) => (
  <div style={{ perspective: 1400 }}>
    <div style={{ width: 560, height: 350, borderRadius: 30, transform: `rotateY(${tilt}deg) rotateX(${14}deg)`, background: "linear-gradient(135deg, #1d5b3d 0%, #0f2f22 45%, #0a1f17 100%)", boxShadow: `0 60px 80px rgba(0,0,0,.55), 0 0 0 2px rgba(47,220,127,.35) inset, 0 0 120px rgba(47,220,127,${0.25 * p})`, position: "relative", overflow: "hidden" }}>
      {/* блик */}
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(105deg, transparent ${20 + p * 40}%, rgba(255,255,255,.22) ${28 + p * 40}%, transparent ${36 + p * 40}%)` }} />
      {/* чип */}
      <div style={{ position: "absolute", left: 44, top: 70, width: 78, height: 58, borderRadius: 12, background: "linear-gradient(135deg,#f6e7a8,#c9a63e 60%,#8a6d1f)", boxShadow: "inset 0 0 0 2px rgba(0,0,0,.2)" }} />
      <div style={{ position: "absolute", left: 44, bottom: 46, fontFamily: FONT_BODY, fontWeight: 300, fontSize: 30, letterSpacing: "0.3em", color: "rgba(220,255,235,.85)" }}>MEMBER</div>
      <div style={{ position: "absolute", right: 44, top: 52, fontFamily: FONT_BODY, fontWeight: 200, fontSize: 92, color: "#eafff3", letterSpacing: "-0.02em" }}>$15</div>
    </div>
  </div>
);

// ---------- выноска ----------
const Callout: React.FC<{ p: number; side: "l" | "r"; y: number; label: string; value: string; sub: string }> = ({ p, side, y, label, value, sub }) => {
  const L = side === "l";
  const lineW = 270 * p;
  return (
    <div style={{ position: "absolute", top: y, [L ? "right" : "left"]: 960 + 400, opacity: p } as React.CSSProperties}>
      <div style={{ position: "absolute", top: 34, [L ? "right" : "left"]: -lineW - 16, width: lineW, height: 1.5, background: `linear-gradient(${L ? 90 : 270}deg, rgba(47,220,127,.8), rgba(47,220,127,.15))` } as React.CSSProperties} />
      <div style={{ position: "absolute", top: 29, [L ? "right" : "left"]: -lineW - 22, width: 11, height: 11, borderRadius: 6, background: GREEN, boxShadow: `0 0 14px ${GREEN}` } as React.CSSProperties} />
      <div style={{ textAlign: L ? "right" : "left", translate: `${(L ? -1 : 1) * (1 - p) * -20}px 0` }}>
        <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 18, letterSpacing: "0.22em", color: "rgba(234,255,243,.6)" }}>{label}</div>
        <div style={{ fontFamily: FONT_BODY, fontWeight: 200, fontSize: 88, lineHeight: 1, color: GREEN, letterSpacing: "-0.02em" }}>{value}</div>
        <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 15, letterSpacing: "0.22em", color: "rgba(47,220,127,.55)" }}>{sub}</div>
      </div>
    </div>
  );
};

export const EP03_DEMO_SEC = 9;

export const Ep03Demo: React.FC = () => {
  const f = useCurrentFrame();
  const p = useP();
  const t = f / 30;
  const scene2 = t >= 4.6;
  const cardIn = p(0.1, 1.2);
  const c1 = p(0.9, 1.5), c2 = p(1.6, 2.2), c3 = p(2.3, 2.9);
  const s2 = p(4.6, 5.2);
  const count = Math.round(7100 * interpolate(t, [4.8, 6.0], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease }));
  const out = 1 - p(8.5, 9);

  return (
    <AbsoluteFill translate="no" style={{ background: "radial-gradient(1200px 800px at 50% 45%, #13261f 0%, #0b1210 55%, #070a0b 100%)", opacity: out }}>
      {/* тонкая сетка */}
      <AbsoluteFill style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)", backgroundSize: "80px 80px", maskImage: "radial-gradient(closest-side, black, transparent)" }} />

      {!scene2 && (
        <>
          <div style={{ position: "absolute", left: 90, top: 70, fontFamily: FONT_BODY, fontWeight: 600, fontSize: 20, letterSpacing: "0.3em", color: "rgba(234,255,243,.55)", opacity: cardIn }}>THE $15 GYM · WHAT YOU REALLY PAY</div>
          {/* подиум */}
          <div style={{ position: "absolute", left: 960 - 300, top: 700, width: 600, height: 90, borderRadius: "50%", background: "radial-gradient(closest-side, #1d3a2e, #0c1814)", boxShadow: `0 0 80px rgba(47,220,127,${0.25 * cardIn})`, opacity: cardIn }} />
          <div style={{ position: "absolute", left: 960 - 280, top: 300 + (1 - cardIn) * 80, opacity: cardIn }}>
            <Card p={cardIn} tilt={-14 + 6 * Math.sin(t * 0.8)} />
          </div>
          <Callout p={c1} side="l" y={250} label="MONTHLY DUES" value="$15" sub="PER MONTH" />
          <Callout p={c2} side="l" y={500} label="ANNUAL FEE" value="$49" sub="ONCE A YEAR, AUTOMATIC" />
          <Callout p={c3} side="r" y={370} label="BLACK CARD" value="$25" sub="65.8% OF MEMBERS PICK IT" />
        </>
      )}

      {scene2 && (
        <div style={{ position: "absolute", left: 0, right: 600, top: 300, textAlign: "center", opacity: s2, translate: `0 ${(1 - s2) * 30}px` }}>
          <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 22, letterSpacing: "0.3em", color: "rgba(234,255,243,.55)" }}>MEMBERS PER CLUB</div>
          <div style={{ fontFamily: FONT_BODY, fontWeight: 200, fontSize: 260, lineHeight: 1, color: GREEN, textShadow: `0 0 60px rgba(47,220,127,.35)` }}>{count.toLocaleString("en-US")}</div>
          <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 18, letterSpacing: "0.3em", color: "rgba(47,220,127,.55)" }}>SOURCE: PLANET FITNESS 10-K, 2025</div>
        </div>
      )}

      <Coin
        x={scene2 ? 1270 : 1460}
        y={scene2 ? 330 : 600}
        h={scene2 ? 560 : 400}
        enter={scene2 ? 4.6 : 1.1}
        sign="ROOM FOR 300"
        timeline={scene2 ? [{ at: 4.6, pose: "suspicious" }, { at: 6.0, pose: "shocked" }, { at: 7.2, pose: "sign" }, { at: 8.2, pose: "wink" }] : [{ at: 1.1, pose: "neutral" }, { at: 2.4, pose: "point" }]}
      />
    </AbsoluteFill>
  );
};
