import React from "react";
import { AbsoluteFill, Img, Sequence, staticFile, useVideoConfig, Video } from "remotion";
import { Audio } from "remotion";
import { COLORS, FONT_BODY, FONT_HEAD } from "../brand/theme";
import {
  ChannelBug, ChapterTag, CompareBars, easeBack, easeExpo, easeInOut, easeOut, GridBg, Headline,
  MoneyCounter, PopcornBucket, PriceTag, SplitBar, Ticket, useP,
} from "../brand/components";
import WORDS_RAW from "./movie-words.json";
import { StickScene, type StickSpec } from "../stick/StickScene";

// ===================================================================
// "How Movie Theaters Actually Make Money" — сборка по озвучке.
// Каждый блок BEATS начинается в секунду, когда диктор произносит
// соответствующую фразу (тайминги из расшифровки ElevenLabs).
// Чтобы сдвинуть сцену, меняйте её `from` / `to`.
// ===================================================================

const WORDS = WORDS_RAW as [string, number, number][];
export const MOVIE_DURATION_SEC = 483;

// ---------- общая обёртка сцены ----------
const Wrap: React.FC<{ dur: number; children: React.ReactNode; align?: "center" | "start" }> = ({ dur, children, align = "center" }) => {
  const { p } = useP();
  const i = p(0, 0.35, easeOut);
  const o = p(dur - 0.35, dur, easeInOut);
  return (
    <AbsoluteFill
      style={{
        opacity: i * (1 - o),
        scale: String((0.97 + 0.03 * i) * (1 + 0.03 * o)),
        filter: `blur(${(1 - i) * 8 + o * 10}px)`,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: align === "center" ? "center" : "flex-start",
        paddingBottom: 120,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

const Label: React.FC<{ children: React.ReactNode; color?: string; size?: number; delay?: number }> = ({ children, color = COLORS.dim, size = 40, delay = 0 }) => {
  const { p } = useP();
  return (
    <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: size, letterSpacing: "0.14em", textTransform: "uppercase", color, opacity: p(delay, delay + 0.4, easeOut), textAlign: "center" }}>
      {children}
    </div>
  );
};

const Big: React.FC<{ children: React.ReactNode; color?: string; size?: number; delay?: number }> = ({ children, color = COLORS.ink, size = 200, delay = 0 }) => {
  const { p } = useP();
  const k = p(delay, delay + 0.5, easeBack);
  return (
    <div style={{ fontFamily: FONT_HEAD, fontSize: size, lineHeight: 1, color, scale: String(0.6 + 0.4 * k), opacity: Math.min(1, k * 2), textShadow: `0 0 40px ${color}44, 0 8px 0 rgba(0,0,0,.35)`, textAlign: "center" }}>
      {children}
    </div>
  );
};

const Counter: React.FC<{ to: number; delay?: number; dur?: number; fmt: (v: number) => string; color?: string; size?: number }> = ({ to, delay = 0, dur = 1.4, fmt, color = COLORS.ink, size = 200 }) => {
  const { p } = useP();
  const v = to * p(delay, delay + dur, easeExpo);
  return <Big color={color} size={size} delay={delay}>{fmt(v)}</Big>;
};
const int = (v: number) => Math.round(v).toLocaleString("en-US");

// значок-кружок с эмодзи
const Badge: React.FC<{ icon: string; color: string; size?: number }> = ({ icon, color, size = 120 }) => (
  <div style={{ width: size, height: size, borderRadius: size, background: `${color}22`, border: `4px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.5, flexShrink: 0 }}>
    {icon}
  </div>
);

// список, появляющийся по пунктам в нужные секунды
const ItemList: React.FC<{ items: { icon: string; text: string; at: number; color?: string; strike?: number }[]; width?: number }> = ({ items, width = 1100 }) => {
  const { p } = useP();
  return (
    <div style={{ width, display: "flex", flexDirection: "column", gap: 26 }}>
      {items.map((it) => {
        const k = p(it.at, it.at + 0.4, easeBack);
        const s = it.strike !== undefined ? p(it.strike, it.strike + 0.3, easeOut) : 0;
        return (
          <div key={it.text} style={{ display: "flex", alignItems: "center", gap: 30, opacity: Math.min(1, k * 2) * (1 - 0.6 * s), translate: `${(1 - k) * 60}px 0px` }}>
            <Badge icon={it.icon} color={it.color ?? COLORS.gold} size={92} />
            <div style={{ position: "relative", fontFamily: FONT_BODY, fontWeight: 800, fontSize: 52, color: COLORS.ink }}>
              {it.text}
              <div style={{ position: "absolute", left: 0, top: "52%", height: 8, width: `${100 * s}%`, background: COLORS.loss, borderRadius: 4 }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ---------- особые сцены ----------
const PeopleGrid: React.FC = () => {
  const { p } = useP();
  const cols = 40, rows = 12;
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 22px)`, gap: 10, marginTop: 50 }}>
      {new Array(cols * rows).fill(0).map((_, i) => {
        const k = p(0.2 + (i / (cols * rows)) * 2.2, 0.5 + (i / (cols * rows)) * 2.2, easeOut);
        return <div key={i} style={{ width: 22, height: 22, borderRadius: 11, background: i % 9 === 0 ? COLORS.gold : COLORS.blue, opacity: 0.25 + 0.75 * k, scale: String(k) }} />;
      })}
    </div>
  );
};

const SeatGrid: React.FC = () => {
  const { p } = useP();
  const filled = new Set([23, 58, 101, 137, 176]);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(20, 52px)", gap: 12 }}>
      {new Array(200).fill(0).map((_, i) => {
        const on = filled.has(i);
        const k = p(0.2 + i * 0.006, 0.5 + i * 0.006, easeOut);
        const glow = on ? p(1.6, 2.1, easeBack) : 0;
        return (
          <div key={i} style={{ width: 52, height: 40, borderRadius: "12px 12px 6px 6px", background: on ? COLORS.gold : "#232d4d", border: `2px solid ${on ? COLORS.gold : "#3a4670"}`, opacity: k, scale: String(on ? 1 + 0.25 * glow * (1 - glow) * 4 : 1), boxShadow: on ? `0 0 ${24 * glow}px ${COLORS.gold}` : "none" }} />
        );
      })}
    </div>
  );
};

const Timeline: React.FC<{ points: { year: string; text: string; at: number }[] }> = ({ points }) => {
  const { p } = useP();
  const line = p(0.2, 1.2, easeInOut);
  return (
    <div style={{ position: "relative", width: 1500, height: 360 }}>
      <div style={{ position: "absolute", left: 0, top: 120, height: 8, width: `${100 * line}%`, background: COLORS.gold, borderRadius: 4 }} />
      {points.map((pt, i) => {
        const k = p(pt.at, pt.at + 0.5, easeBack);
        const x = (i + 0.5) * (1500 / points.length);
        return (
          <div key={pt.year} style={{ position: "absolute", left: x - 200, width: 400, top: 0, textAlign: "center", opacity: Math.min(1, k * 2), translate: `0px ${(1 - k) * 30}px` }}>
            <div style={{ fontFamily: FONT_HEAD, fontSize: 84, color: COLORS.gold }}>{pt.year}</div>
            <div style={{ width: 34, height: 34, borderRadius: 17, background: COLORS.bg, border: `8px solid ${COLORS.gold}`, margin: "4px auto 20px" }} />
            <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 38, color: COLORS.ink, lineHeight: 1.25 }}>{pt.text}</div>
          </div>
        );
      })}
    </div>
  );
};

const TheaterRow: React.FC<{ n: number; color: string; label: string; at: number; result: string; resultAt: number; up: boolean }> = ({ n, color, label, at, result, resultAt, up }) => {
  const { p } = useP();
  const r = p(resultAt, resultAt + 0.5, easeBack);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 40, opacity: p(at, at + 0.4, easeOut) }}>
      <div style={{ width: 260, fontFamily: FONT_HEAD, fontSize: 72, color, textAlign: "right" }}>{label}</div>
      <div style={{ width: 900, display: "flex", flexWrap: "wrap", gap: 8 }}>
        {new Array(n).fill(0).map((_, i) => (
          <div key={i} style={{ width: 36, height: 30, background: color, borderRadius: "6px 6px 2px 2px", opacity: p(at + i * 0.01, at + i * 0.01 + 0.2, easeOut) }} />
        ))}
      </div>
      <div style={{ width: 280, fontFamily: FONT_HEAD, fontSize: 64, color: up ? COLORS.money : COLORS.loss, scale: String(r), opacity: Math.min(1, r * 2) }}>
        {up ? "▲ " : "▼ "}{result}
      </div>
    </div>
  );
};

const ShareBars: React.FC = () => {
  const { p } = useP();
  const rows = [
    { label: "Share of revenue", v: 34, at: 0.4 },
    { label: "Share of what's left after film & food costs", v: 49, at: 3.8 },
  ];
  return (
    <div style={{ width: 1400, display: "flex", flexDirection: "column", gap: 60 }}>
      {rows.map((r) => {
        const k = p(r.at, r.at + 1.2, easeExpo);
        return (
          <div key={r.label} style={{ opacity: p(r.at - 0.2, r.at, easeOut) }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: FONT_BODY, fontWeight: 700, fontSize: 40, color: COLORS.ink, marginBottom: 16 }}>
              <span>{r.label}</span>
              <span style={{ fontFamily: FONT_HEAD, fontSize: 60, color: COLORS.gold }}>~{Math.round(r.v * k)}%</span>
            </div>
            <div style={{ height: 70, borderRadius: 35, background: COLORS.bgSoft, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${r.v * k}%`, background: COLORS.gold, borderRadius: 35, boxShadow: `0 0 30px ${COLORS.gold}66` }} />
            </div>
          </div>
        );
      })}
      <div style={{ fontFamily: FONT_BODY, fontSize: 30, color: COLORS.dim, textAlign: "center", opacity: p(5, 5.5, easeOut) }}>
        Food &amp; drinks at AMC, 2025. Source: AMC annual results
      </div>
    </div>
  );
};

const Waterfall: React.FC = () => {
  const { p } = useP();
  const bars = [
    { label: "Rent", v: 887, color: COLORS.loss, at: 0.3, text: "$887M" },
    { label: "Interest on debt", v: 460, color: COLORS.loss, at: 10.9, text: "$460M" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 40 }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 120, height: 520 }}>
        {bars.map((b) => {
          const k = p(b.at, b.at + 1, easeExpo);
          return (
            <div key={b.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: p(b.at - 0.2, b.at, easeOut) }}>
              <div style={{ fontFamily: FONT_HEAD, fontSize: 80, color: b.color, marginBottom: 14 }}>{b.text}</div>
              <div style={{ width: 260, height: (b.v / 887) * 380 * k, background: b.color, borderRadius: "16px 16px 0 0", boxShadow: `0 0 40px ${b.color}55` }} />
              <div style={{ fontFamily: FONT_BODY, fontWeight: 800, fontSize: 36, color: COLORS.ink, marginTop: 16 }}>{b.label}</div>
            </div>
          );
        })}
      </div>
      <div style={{ fontFamily: FONT_BODY, fontWeight: 800, fontSize: 46, color: COLORS.ink, opacity: p(5.9, 6.3, easeOut) }}>
        Total debt: <span style={{ color: COLORS.loss, fontFamily: FONT_HEAD, fontSize: 64 }}>~$4 BILLION</span>
      </div>
    </div>
  );
};

const AttendanceBars: React.FC = () => {
  const { p } = useP();
  const rows = [
    { y: "2024", v: 224.2, at: 1.5 },
    { y: "2025", v: 219.4, at: 3.5 },
  ];
  return (
    <div style={{ display: "flex", gap: 120, alignItems: "flex-end", height: 560 }}>
      {rows.map((r) => {
        const k = p(r.at, r.at + 1, easeExpo);
        return (
          <div key={r.y} style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: p(r.at - 0.2, r.at, easeOut) }}>
            <div style={{ fontFamily: FONT_HEAD, fontSize: 70, color: r.y === "2025" ? COLORS.loss : COLORS.blue }}>{r.v}M</div>
            <div style={{ width: 240, height: ((r.v - 150) / 80) * 380 * k, background: r.y === "2025" ? COLORS.loss : COLORS.blue, borderRadius: "16px 16px 0 0" }} />
            <div style={{ fontFamily: FONT_HEAD, fontSize: 56, color: COLORS.ink, marginTop: 12 }}>{r.y}</div>
          </div>
        );
      })}
    </div>
  );
};

const Chapter: React.FC<{ n: number; title: string }> = ({ n, title }) => {
  const { p } = useP();
  return (
    <>
      <div style={{ fontFamily: FONT_HEAD, fontSize: 60, color: COLORS.bg, background: COLORS.gold, borderRadius: 14, padding: "6px 28px", scale: String(p(0, 0.5, easeBack)) }}>
        PART {n}
      </div>
      <div style={{ height: 30 }} />
      <Headline text={title} start={0.3} size={130} />
    </>
  );
};

// ---------- сцены по таймингу ----------
type Beat = { from: number; to: number; tag?: [number, string]; el?: React.ReactNode; stick?: StickSpec };

// главный герой-стикмен: один и тот же во всех сценах
const HERO = { id: "you", shirt: "#3b7be0", pants: "#2c3150", hair: "cap" as const, hairColor: "#2c3150" };

const BEATS: Beat[] = [
  { from: 0, to: 5.5, el: (<><Counter to={219000000} dur={2} fmt={int} size={170} /><Label delay={0.6}>people walked into an AMC theater in 2025</Label></>) },
  { from: 5.5, to: 9.2, el: (<><Label>They spent</Label><MoneyCounter to={4.85} start={0.2} dur={1.4} size={240} /><Label color={COLORS.money} size={56}>billion</Label></>) },
  { from: 9.2, to: 13.1, el: (<><Headline text="And AMC still lost" start={0} size={100} /><div style={{ height: 30 }} /><MoneyCounter to={632} start={0.8} dur={1.2} size={240} digits={0} color={COLORS.loss} prefix="−" /><Label color={COLORS.loss} size={56}>million</Label></>) },
  { from: 13.1, to: 20.2, stick: { location: "stage", time: "night", camera: { shot: "wide", move: "dolly-in" },
      crowd: { count: 14, area: [-6, -3.2, 6, -0.6], facing: "away", seed: 4 }, screen: { lines: ["NOW", "SHOWING"] },
      actors: [{ ...HERO, x: 3.4, z: 1.2, action: "idle", face: "neutral", beats: [{ at: 3.6, action: "shrug", face: "worried" }] }],
      title: { text: "NOT THE MOVIE.", at: 5, until: 7, position: "left" } } },
  { from: 20.2, to: 27.5, el: (<div style={{ display: "flex", alignItems: "center", gap: 140 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}><Ticket price="$12" width={480} /><Label>Just the cover charge</Label></div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}><SlideIn at={2.4}><PopcornBucket size={340} /></SlideIn><Label color={COLORS.gold} delay={2.6}>The real business</Label></div>
    </div>) },
  { from: 27.5, to: 31, el: (<><Label>This is</Label><Headline text="How movie theaters actually make money" start={0.2} size={130} highlight={["actually"]} /></>) },
  { from: 31, to: 41.7, tag: [1, "Where your ticket goes"], el: (<><SlideIn at={0.2}><Ticket price="$12.09" /></SlideIn><div style={{ height: 30 }} /><Label delay={0.5}>Average AMC ticket, 2025</Label><Label delay={4.6} color={COLORS.gold} size={46}>U.S. average: $12.78</Label></>) },
  { from: 41.7, to: 45.3, stick: { split: {
      left: { bg: "#f7c59f", label: "Theater", camera: { shot: "medium" }, actors: [{ ...HERO, x: 0, z: 0, face: "worried", action: "idle" }] },
      right: { bg: "#8fd6df", label: "Hollywood", camera: { shot: "medium" }, actors: [{ id: "studio", x: 0, z: 0, shirt: "#ee5b4a", hair: "bob", hairColor: "#2b2b2b", held: "coin", action: "cheer", face: "grin" }] } } } },
  { from: 45.3, to: 57.7, tag: [1, "Where your ticket goes"], el: (<><Headline text="48¢ of every $1 goes to Hollywood" start={0} size={96} highlight={["48¢"]} /><div style={{ height: 80 }} /><SplitBar start={0.9} parts={[{ label: "Goes to the studio", value: 5.81, color: COLORS.loss }, { label: "Theater keeps", value: 6.28, color: COLORS.money }]} /></>) },
  { from: 57.7, to: 75.8, tag: [1, "Where your ticket goes"], el: (<><Headline text="Blockbusters cost theaters more" start={0.2} size={90} /><div style={{ height: 70 }} />
      <CompareBars start={3.4} max={70} rows={[
        { label: "AMC average, 2025", value: 48, display: "48%", color: COLORS.blue },
        { label: "Star Wars: The Force Awakens (reported)", value: 60, display: "60%+", color: COLORS.loss },
        { label: "The Last Jedi (reported ask)", value: 65, display: "65%", color: COLORS.loss },
      ]} /><div style={{ height: 30 }} /><Label delay={1}>Studio's share of U.S. ticket sales</Label></>) },
  { from: 75.8, to: 83.8, stick: { location: "street", variant: 2, camera: { shot: "wide", move: "pan-right", target: "you" },
      actors: [{ ...HERO, x: -4, z: 0.6, action: "idle", face: "neutral", facing: "right", beats: [{ at: 2.6, action: "walk", face: "happy", to: [6, 0.6] }] }],
      title: { text: "THEY SAID YES.", at: 0.2, until: 2.4, position: "center" } } },
  { from: 83.8, to: 98.4, tag: [1, "Where your ticket goes"], el: (<div style={{ display: "flex", alignItems: "center", gap: 120 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><Label>Left per ticket</Label><MoneyCounter to={6.28} start={1.4} dur={1} size={170} /></div>
      <ItemList width={700} items={[
        { icon: "🏢", text: "Rent", at: 7, strike: 12.2 },
        { icon: "👥", text: "Staff", at: 7.6, strike: 12.4 },
        { icon: "⚡", text: "Electricity", at: 8.2, strike: 12.6 },
        { icon: "🧹", text: "Cleaning", at: 8.9, strike: 12.8 },
        { icon: "📽️", text: "Projectors", at: 9.8, strike: 13 },
      ]} /></div>) },
  { from: 98.4, to: 104.8, stick: { location: "stage", time: "night", camera: { shot: "medium", move: "dolly-in", target: "you" }, screen: { lines: ["$6", "LEFT"] },
      actors: [{ ...HERO, x: 1.6, z: 0.8, action: "think", face: "worried", facing: -20 }],
      title: { text: "LIGHTS ON?", at: 2.4, position: "left" } } },
  { from: 104.8, to: 120.8, tag: [2, "The popcorn machine"], el: (<div style={{ display: "flex", alignItems: "center", gap: 110 }}>
      <SlideIn at={0.2}><PopcornBucket size={440} /></SlideIn>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 46 }}>
        <PriceTag label="Costs the theater" price="$0.90" start={3} color={COLORS.ink} rotate={-5} />
        <PriceTag label="You pay" price="$8.00" start={10.3} color={COLORS.gold} rotate={4} />
        <Appear at={12.5}><Big size={96} color={COLORS.money}>≈ 800% MARKUP</Big></Appear>
      </div></div>) },
  { from: 120.8, to: 125.8, tag: [2, "The popcorn machine"], el: (<div style={{ display: "flex", alignItems: "center", gap: 80 }}>
      <Badge icon="🥤" color={COLORS.blue} size={220} />
      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <PriceTag label="Soda costs" price="< $1" start={1.5} color={COLORS.ink} rotate={-4} />
        <PriceTag label="You pay" price="$6" start={3.2} color={COLORS.gold} rotate={3} />
      </div></div>) },
  { from: 125.8, to: 141.7, tag: [2, "The popcorn machine"], el: (<><Label>AMC food &amp; drink spend per visitor, 2025</Label><MoneyCounter to={7.62} start={2.4} dur={1.2} size={220} color={COLORS.gold} /><Label delay={9.2} size={46} color={COLORS.gold}>U.S.: $8.57</Label><div style={{ height: 60 }} />
      <Appear at={11.6}><div style={{ fontFamily: FONT_BODY, fontWeight: 800, fontSize: 52, color: COLORS.ink }}>Cost of the food itself: <span style={{ color: COLORS.money, fontFamily: FONT_HEAD, fontSize: 70 }}>under 20%</span></div></Appear></>) },
  { from: 141.7, to: 153.84, tag: [3, "What AMC keeps per visitor"], el: (<>
      <CompareBars start={1.8} max={7} rows={[
        { label: "From the ticket (after paying the studio)", value: 6.28, display: "~$6", color: COLORS.blue },
        { label: "From snacks (after paying for the food)", value: 6.13, display: "~$6", color: COLORS.gold },
      ]} /></>) },
  { from: 153.84, to: 164, stick: { split: {
      left: { bg: "#8fd6df", label: "The movie", camera: { shot: "medium", move: "dolly-in" }, actors: [{ ...HERO, x: 0, z: 0, held: "sign", heldText: "$6", action: "idle", face: "happy" }] },
      right: { bg: "#f7d08a", label: "The corn", camera: { shot: "medium", move: "dolly-in" }, actors: [{ id: "you2", x: 0, z: 0, shirt: "#3b7be0", pants: "#2c3150", hair: "cap", hairColor: "#2c3150", held: "sign", heldText: "$6", action: "idle", face: "grin", beats: [{ at: 5.6, action: "cheer" }] }] } },
      title: { text: "SAME MONEY.", at: 1.4, until: 5, position: "bottom" } } },
  { from: 164, to: 174, tag: [3, "Snacks: small sales, big profit"], el: (<ShareBars />) },
  { from: 174, to: 180.2, el: (<div style={{ maxWidth: 1400, textAlign: "center" }}>
      <div style={{ fontFamily: FONT_HEAD, fontSize: 180, color: COLORS.gold, lineHeight: 0.6 }}>“</div>
      <Headline text="Without concessions, a ticket would cost about $20" start={0.4} size={92} highlight={["$20"]} />
      <div style={{ height: 30 }} /><Label delay={2.5}>— a theater chain CEO, 2008</Label></div>) },
  { from: 180.2, to: 186.5, el: (<><ItemList width={900} items={[
        { icon: "🌭", text: "Hot dogs", at: 2.5, color: COLORS.loss },
        { icon: "🧀", text: "Nachos", at: 3.2, color: COLORS.gold },
        { icon: "🍸", text: "Cocktails", at: 3.9, color: COLORS.blue },
        { icon: "🍿", text: "Collectible buckets", at: 4.7, color: COLORS.money },
      ]} /></>) },
  { from: 186.5, to: 191.8, stick: { location: "cafe", camera: { shot: "wide", move: "orbit" },
      props: [{ type: "table", x: 0, z: -0.6 }, { type: "chair", x: -1.4, z: -0.6, rotation: 90 }, { type: "chair", x: 1.4, z: -0.6, rotation: -90 }],
      actors: [{ ...HERO, x: -1.4, z: -0.35, action: "sit", face: "happy", facing: 90, held: "cup" }, { id: "friend", x: 1.4, z: -0.35, shirt: "#e86aa6", hair: "bun", hairColor: "#5a3a2a", action: "sit", face: "grin", facing: -90, talking: true }],
      title: { text: "A RESTAURANT.", at: 0.3, until: 4.6, position: "top" } } },
  { from: 191.8, to: 195.7, el: (<SepiaWrap><Chapter n={4} title="Theaters hated popcorn" /></SepiaWrap>) },
  { from: 195.7, to: 202, stick: { location: "stage", time: "sunset", camera: { shot: "wide", move: "dolly-in", target: "owner" },
      actors: [{ id: "owner", x: 0, z: 0.8, shirt: "#8a5cd8", pants: "#2b2b2b", hair: "none", held: "sign", heldText: "NO POPCORN", action: "angry", face: "angry" }],
      title: { text: "THEY HATED IT.", at: 0.2, until: 3.8, position: "left" } } },
  { from: 202, to: 210.9, el: (<SepiaWrap>
      <ItemList width={900} items={[
        { icon: "🎭", text: "Fancy “live theater” feel", at: 0.2, color: COLORS.gold },
        { icon: "🪑", text: "Velvet seats, nice carpets", at: 0.9, color: COLORS.gold },
        { icon: "🚫", text: "Popcorn = messy street food", at: 4, color: COLORS.loss },
      ]} /></SepiaWrap>) },
  { from: 210.9, to: 225.9, el: (<SepiaWrap><Headline text="Then two things happened" start={0} size={90} /><div style={{ height: 70 }} />
      <Timeline points={[{ year: "1927", text: "Movies get sound — anyone can enjoy them", at: 2 }, { year: "1930", text: "90 million Americans go every week", at: 9.1 }, { year: "1930s", text: "The Great Depression", at: 14.9 }]} /></SepiaWrap>) },
  { from: 225.9, to: 233.6, el: (<SepiaWrap><Label>During the Great Depression, a bag of popcorn cost</Label><div style={{ height: 20 }} /><Big size={260} color={COLORS.gold} delay={4.5}>5–10¢</Big></SepiaWrap>) },
  { from: 233.6, to: 237.6, stick: { location: "street", time: "sunset", camera: { shot: "medium", move: "dolly-in", target: "vendor" },
      crowd: { count: 8, area: [-6, -2.4, 6, -0.8], action: "walk", seed: 7 },
      actors: [{ id: "vendor", x: 0.6, z: 0.8, shirt: "#f2b632", pants: "#5a4a3a", hair: "cap", hairColor: "#7a4a2a", held: "sign", heldText: "POPCORN 5¢", action: "idle", talking: true, face: "grin" }],
      title: { text: "5¢ A BAG.", at: 0.3, position: "left" } } },
  { from: 237.6, to: 246.4, el: (<SepiaWrap><Headline text="Theater owners noticed" start={0} size={100} /><div style={{ height: 60 }} />
      <ItemList width={1100} items={[{ icon: "🎟️", text: "Step 1: charge vendors to sell in the lobby", at: 1.8 }, { icon: "🍿", text: "Step 2: pop it themselves", at: 5 }]} /></SepiaWrap>) },
  { from: 246.4, to: 265, el: (<SepiaWrap><Label>One Dallas theater chain</Label><div style={{ height: 60 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 50 }}>
        <TheaterRow n={80} color={COLORS.gold} label="80" at={2.6} result="Profits soared" resultAt={9.4} up />
        <TheaterRow n={5} color={COLORS.dim} label="5" at={5.6} result="In the red" resultAt={16.6} up={false} />
      </div>
      <div style={{ height: 40 }} /><Label delay={5.8}>Top: with popcorn · Bottom: its 5 best theaters, without</Label></SepiaWrap>) },
  { from: 265, to: 276.5, el: (<SepiaWrap><Label>By 1945</Label><Big size={240} color={COLORS.gold} delay={0.6}>50%+</Big><Label size={46} delay={1.5}>of all popcorn in America was eaten at the movies</Label></SepiaWrap>) },
  { from: 276.5, to: 288.9, el: (<><Chapter n={5} title="The money you don't see" /><div style={{ height: 50 }} /><MoneyCounter to={525} start={3.5} dur={1.2} size={180} digits={0} /><Label delay={3.6} size={44} color={COLORS.money}>million in “ancillary revenue”, 2025</Label></>) },
  { from: 288.9, to: 292.4, tag: [5, "The money you don't see"], el: (<HiddenCard n={1} icon="📺" title="On-screen ads" text="A captive audience that can't skip and isn't scrolling" color={COLORS.blue} />) },
  { from: 292.4, to: 301.7, stick: { location: "stage", time: "night", camera: { shot: "wide", move: "dolly-in", target: "you" }, screen: { lines: ["BUY", "SODA!"] },
      crowd: { count: 12, area: [-6, -3.2, 6, -0.6], facing: "away", seed: 9 },
      actors: [{ ...HERO, x: 3.6, z: 1.6, facing: "camera", action: "idle", face: "neutral", beats: [{ at: 5.5, action: "facepalm", face: "sad" }] }],
      title: { text: "CAN'T SKIP.", at: 1.6, until: 4.8, position: "left" } } },
  { from: 301.7, to: 311.2, tag: [5, "The money you don't see"], el: (<HiddenCard n={2} icon="💳" title="Online ticket fees" text="Small per order. Enormous across millions of orders" color={COLORS.gold} />) },
  { from: 311.2, to: 321.76, tag: [5, "The money you don't see"], el: (<HiddenCard n={3} icon="⭐" title="Loyalty & subscriptions" text="39 million households in AMC Stubs — about half of U.S. attendance" color={COLORS.money} />) },
  { from: 321.76, to: 331.6, stick: { location: "plaza", camera: { shot: "wide", move: "dolly-in", target: "you" }, screen: { lines: ["A MOVIE", "EVERY WEEK"], brand: false },
      actors: [{ ...HERO, x: -1.5, z: 0.5, held: "phone", action: "idle", face: "happy", beats: [{ at: 1.8, action: "cheer", face: "grin" }] }],
      title: { text: "STEADY MONEY.", at: 5.6, position: "right" } } },
  { from: 331.6, to: 342.8, tag: [5, "The money you don't see"], el: (<ItemList width={1000} items={[
        { icon: "🎬", text: "Private screenings", at: 2.2 }, { icon: "🎂", text: "Birthday parties", at: 3.3 }, { icon: "🏢", text: "Corporate events", at: 4.4 },
        { icon: "🎁", text: "Unspent gift cards", at: 5.6 }, { icon: "🛒", text: "Popcorn in grocery stores", at: 8.4 }]} />) },
  { from: 342.8, to: 353.4, el: (<><Headline text="The movie is the bait" start={0.3} size={130} highlight={["bait"]} /><div style={{ height: 50 }} /><Label delay={4.2} size={46}>Ads · Fees · Memberships · Snacks = the real product</Label></>) },
  { from: 353.4, to: 360.3, stick: { location: "office", camera: { shot: "wide", move: "dolly-in", target: [0.8, 1.2, 0] }, screen: { lines: ["-$632M"] },
      actors: [{ id: "ceo", x: 2.2, z: 0.6, shirt: "#ee5b4a", pants: "#2b2b2b", hair: "none", action: "idle", face: "worried", facing: -25, beats: [{ at: 1.4, action: "facepalm", face: "sad" }] }],
      title: { text: "HOW?", at: 2.6, position: "left", size: "big" } } },
  { from: 360.3, to: 379.6, el: (<><Chapter n={6} title="So why do they lose money?" /><div style={{ height: 70 }} />
      <div style={{ display: "flex", gap: 140 }}>
        <div style={{ textAlign: "center" }}><Counter to={855} delay={4.7} fmt={int} size={170} color={COLORS.gold} /><Label delay={4.7}>theaters</Label></div>
        <div style={{ textAlign: "center" }}><Counter to={9640} delay={6.9} fmt={int} size={170} color={COLORS.gold} /><Label delay={6.9}>screens</Label></div>
      </div></>) },
  { from: 379.6, to: 389.8, el: (<><Headline text="Five people. Two hundred seats." start={2.2} size={90} highlight={["Five"]} /><div style={{ height: 50 }} /><SeatGrid /></>) },
  { from: 389.8, to: 409.8, tag: [6, "The costs that never shrink"], el: (<Waterfall />) },
  { from: 409.8, to: 425.3, tag: [6, "The costs that never shrink"], el: (<><Label>AMC attendance, millions</Label><div style={{ height: 40 }} /><AttendanceBars /><div style={{ height: 40 }} /><Label delay={10.2} size={44} color={COLORS.loss}>Streaming brings movies home within weeks</Label></>) },
  { from: 425.3, to: 442.4, el: (<><Headline text="So theaters fight back" start={0.2} size={90} /><div style={{ height: 50 }} /><ItemList width={900} items={[
        { icon: "🛋️", text: "Recliner seats", at: 3.7 }, { icon: "🖥️", text: "Giant premium screens", at: 4.9 },
        { icon: "🍽️", text: "Dine-in menus", at: 6.5 }, { icon: "🍿", text: "Collectible buckets", at: 7.8 }]} /><div style={{ height: 50 }} />
      <Headline text="Get you to the counter" start={14} size={100} highlight={["counter"]} /></>) },
  { from: 442.4, to: 448.48, stick: { location: "cafe", camera: { shot: "wide", move: "dolly-in", target: "you" },
      actors: [{ ...HERO, x: 0, z: 0.8, held: "sign", heldText: "$9 POPCORN", action: "idle", face: "surprised", beats: [{ at: 3, action: "shrug", face: "smirk" }] }],
      title: { text: "$9 POPCORN?", at: 0.6, until: 5.6, position: "left" } } },
  { from: 448.48, to: 457.6, el: (<><Label>What one visit really earns the theater</Label><div style={{ height: 50 }} />
      <SplitBar start={0.4} width={1500} parts={[{ label: "Ticket (after the studio)", value: 6.28, color: COLORS.blue }, { label: "Snacks (after the food)", value: 6.13, color: COLORS.gold }]} />
      <div style={{ height: 60 }} /><Headline text="The bucket keeps the screen on" start={5.9} size={90} highlight={["bucket"]} /></>) },
  { from: 457.6, to: 471, el: (<><Label>Next video</Label><div style={{ height: 20 }} /><Headline text="Why your gym wants you to never show up" start={7.4} size={96} highlight={["never"]} /><div style={{ height: 60 }} />
      <Appear at={6.2}><div style={{ fontFamily: FONT_HEAD, fontSize: 64, color: COLORS.bg, background: COLORS.loss, padding: "14px 56px", borderRadius: 14 }}>SUBSCRIBE</div></Appear></>) },
  // бонус в конце: сколько AMC заработал на закусках, пока зритель смотрел ролик
  // (выручка F&B 2025 $1,671.3M / 31.5M секунд в году ≈ $53/с × 483 с ≈ $25,600)
  { from: 471, to: 478, el: (<><Label>While you watched this video…</Label><div style={{ height: 30 }} />
      <MoneyCounter to={25600} start={0.6} dur={4.6} size={230} digits={0} color={COLORS.gold} />
      <div style={{ height: 20 }} /><Label delay={1} size={44} color={COLORS.ink}>AMC sold about this much in snacks</Label></>) },
  { from: 478, to: 483, stick: { location: "stage", time: "night", camera: { shot: "medium", move: "dolly-in", target: "you" }, screen: { lines: ["THE END"] },
      actors: [{ ...HERO, x: 0, z: 0.8, held: "cup", action: "wave", face: "grin" }],
      title: { text: "ENJOY THE SHOW.", at: 0.4, position: "left" } } },
];

// ---------- мелкие помощники ----------
function StickFade({ dur, children }: { dur: number; children: React.ReactNode }) {
  const { p } = useP();
  return <AbsoluteFill style={{ opacity: p(0, 0.25, easeOut) * (1 - p(dur - 0.25, dur, easeInOut)) }}>{children}</AbsoluteFill>;
}

function SlideIn({ at, children }: { at: number; children: React.ReactNode }) {
  const { p } = useP();
  const k = p(at, at + 0.6, easeBack);
  return <div style={{ scale: String(0.5 + 0.5 * k), opacity: Math.min(1, k * 2), rotate: `${(1 - k) * -10}deg` }}>{children}</div>;
}
function Appear({ at, children }: { at: number; children: React.ReactNode }) {
  const { p } = useP();
  const k = p(at, at + 0.5, easeBack);
  return <div style={{ scale: String(0.7 + 0.3 * k), opacity: Math.min(1, k * 2) }}>{children}</div>;
}
function SepiaWrap({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AbsoluteFill style={{ background: "radial-gradient(ellipse at center, rgba(255,210,63,.10), rgba(60,35,10,.35) 75%)" }} />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>{children}</div>
    </>
  );
}
function HiddenCard({ n, icon, title, text, color }: { n: number; icon: string; title: string; text: string; color: string }) {
  const { p } = useP();
  const k = p(0.2, 0.8, easeBack);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 70, background: COLORS.bgSoft, border: `3px solid ${color}55`, borderRadius: 36, padding: "60px 80px", width: 1500, scale: String(0.85 + 0.15 * k), opacity: Math.min(1, k * 2) }}>
      <Badge icon={icon} color={color} size={240} />
      <div>
        <div style={{ fontFamily: FONT_BODY, fontWeight: 800, fontSize: 36, letterSpacing: "0.16em", color }}>HIDDEN REVENUE #{n}</div>
        <div style={{ fontFamily: FONT_HEAD, fontSize: 110, color: COLORS.ink, lineHeight: 1.05, margin: "10px 0 20px" }}>{title.toUpperCase()}</div>
        <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 44, color: COLORS.dim, lineHeight: 1.3 }}>{text}</div>
      </div>
    </div>
  );
}



// ---------- фоновые реальные кадры: секунда начала сцены -> файл в public/broll ----------
// Видео: Pexels (бесплатная лицензия). Фото 1930–40-х: Wikimedia Commons, общественное достояние.
const BROLL: Record<number, string> = {
  471: "C.mp4", 0: "A.mp4", 5.5: "K.mp4", 9.2: "G.mp4", 20.2: "F.mp4", 27.5: "O.mp4", 31: "P.mp4",
  45.3: "J.mp4", 57.7: "B.mp4", 83.8: "H.mp4", 104.8: "C.mp4", 120.8: "E.mp4", 125.8: "D.mp4",
  141.7: "B.mp4", 180.2: "F.mp4", 191.8: "H4.jpg", 202: "H3.jpg", 210.9: "H1.jpg", 225.9: "H2.jpg",
  237.6: "H4.jpg", 265: "H3.jpg", 276.5: "K.mp4", 301.7: "P.mp4", 311.2: "A.mp4", 331.6: "B.mp4",
  342.8: "C.mp4", 360.3: "O.mp4", 389.8: "M.mp4", 409.8: "L.mp4", 425.3: "N.mp4", 448.48: "B.mp4", 457.6: "A.mp4",
};
const BRoll: React.FC<{ file: string; dur: number }> = ({ file, dur }) => {
  const { p } = useP();
  const k = p(0, dur);
  const photo = file.endsWith(".jpg");
  const media: React.CSSProperties = { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", scale: String(1.04 + 0.1 * k) };
  return (
    <AbsoluteFill style={{ opacity: p(0, 0.35, easeOut) * (1 - p(dur - 0.35, dur, easeInOut)) }}>
      {photo ? (
        <Img src={staticFile(`broll/${file}`)} style={{ ...media, filter: "sepia(0.55) contrast(1.05)", translate: `${-20 * k}px ${-12 * k}px` }} />
      ) : (
        <Video src={staticFile(`broll/${file}`)} muted loop style={media} />
      )}
      <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(13,19,34,.45) 0%, rgba(13,19,34,.58) 55%, rgba(13,19,34,.8) 100%)" }} />
    </AbsoluteFill>
  );
};

// ---------- звуковые эффекты: секунда начала сцены -> [звук, секунда от начала сцены, громкость?] ----------
type Sfx = [string, number, number?];
const SFX: Record<number, Sfx[]> = {
  5.5: [["cash", 1.5]],
  9.2: [["impact", 1.9, 0.3]],
  20.2: [["pop", 2.4]],
  31: [["pop", 0.2]],
  41.7: [["cash", 0.6, 0.2]],
  57.7: [["click", 3.4], ["click", 4], ["click", 4.6]],
  83.8: [["click", 7], ["click", 7.6], ["click", 8.2], ["click", 8.9], ["click", 9.8], ["buzz", 12.2, 0.18]],
  104.8: [["pop", 0.2], ["pop", 3], ["cash", 10.3], ["ding", 12.5, 0.2]],
  120.8: [["pop", 1.5], ["pop", 3.2]],
  125.8: [["cash", 3.4]],
  153.84: [["ding", 1.4, 0.22]],
  174: [["scribble", 0.4, 0.15]],
  180.2: [["pop", 2.5], ["pop", 3.2], ["pop", 3.9], ["pop", 4.7]],
  210.9: [["tick", 2, 0.4], ["tick", 9.1, 0.4], ["tick", 14.9, 0.4]],
  225.9: [["cash", 4.5]],
  195.7: [["buzz", 0.4, 0.16]],
  237.6: [["pop", 1.8], ["pop", 5]],
  246.4: [["sparkle", 9.4, 0.2], ["buzz", 16.6, 0.18]],
  265: [["ding", 0.6, 0.22]],
  276.5: [["cash", 4.7]],
  288.9: [["pop", 0.3]],
  301.7: [["pop", 0.3]],
  311.2: [["pop", 0.3]],
  331.6: [["pop", 2.2], ["pop", 3.3], ["pop", 4.4], ["pop", 5.6], ["pop", 8.4]],
  342.8: [["impact", 0.3, 0.25]],
  353.4: [["impact", 2.6, 0.25]],
  360.3: [["click", 4.7], ["click", 6.9]],
  389.8: [["buzz", 0.3, 0.16], ["buzz", 10.9, 0.16]],
  409.8: [["thud", 3.5, 0.3]],
  425.3: [["pop", 3.7], ["pop", 4.9], ["pop", 6.5], ["pop", 7.8], ["ding", 14, 0.2]],
  448.48: [["ding", 5.9, 0.2]],
  457.6: [["pop", 6.2]],
  471: [["cash", 1.2, 0.2], ["cash", 3.0, 0.2], ["ding", 5.3, 0.22]],
  478: [["pop", 0.4]],
};
const SfxTrack: React.FC<{ beatFrom: number }> = ({ beatFrom }) => {
  const { fps } = useVideoConfig();
  const list: Sfx[] = SFX[beatFrom] ?? [];
  return (
    <>
      {list.map(([name, at, vol], i) => (
        <Sequence key={i} from={Math.round(at * fps)} durationInFrames={Math.round(2 * fps)} layout="none">
          <Audio src={staticFile(`sfx/${name}.wav`)} volume={vol ?? 0.25} />
        </Sequence>
      ))}
    </>
  );
};

// ---------- субтитры ----------
const GROUPS: { words: [string, number, number][] }[] = (() => {
  const out: { words: [string, number, number][] }[] = [];
  let g: [string, number, number][] = [];
  WORDS.forEach((w, i) => {
    g.push(w);
    const next = WORDS[i + 1];
    const len = g.reduce((s, x) => s + x[0].length + 1, 0);
    if (!next || /[.,!?:]$/.test(w[0]) && len > 18 || len > 38 || next[1] - w[2] > 0.5) {
      out.push({ words: g });
      g = [];
    }
  });
  return out;
})();

const Captions: React.FC = () => {
  const { t } = useP();
  const g = GROUPS.find((x) => t >= x.words[0][1] - 0.05 && t < x.words[x.words.length - 1][2] + 0.15);
  if (!g) return null;
  return (
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 70, display: "flex", justifyContent: "center" }}>
      <div style={{ background: "rgba(8,12,24,.72)", borderRadius: 14, padding: "10px 26px", fontFamily: FONT_BODY, fontWeight: 700, fontSize: 40, color: COLORS.ink }}>
        {g.words.map(([w, a], i) => (
          <span key={i} style={{ color: t >= a ? COLORS.ink : "rgba(245,241,232,.45)" }}>{w}{" "}</span>
        ))}
      </div>
    </div>
  );
};

// ---------- главный ролик ----------
export const MovieTheaters: React.FC<{ captions: boolean }> = ({ captions }) => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: COLORS.bg }}>
      <GridBg />
      <Audio src={staticFile("audio/voiceover.mp3")} />
      <Audio src={staticFile("audio/music.mp3")} volume={1} />
      <Sequence from={Math.round(470 * fps)} layout="none"><Audio src={staticFile("audio/music_tail.mp3")} /></Sequence>
      {BEATS.map((b, i) => (
        <Sequence key={i} from={Math.round(b.from * fps)} durationInFrames={Math.max(1, Math.round((b.to - b.from) * fps))} name={`Beat ${i + 1}`}>
          {!b.stick && BROLL[b.from] && <BRoll file={BROLL[b.from]} dur={b.to - b.from} />}
          {b.stick ? <StickFade dur={b.to - b.from}><StickScene spec={b.stick} len={b.to - b.from} /></StickFade> : <Wrap dur={b.to - b.from}>{b.el}</Wrap>}
          {b.tag && <ChapterTag n={b.tag[0]} title={b.tag[1]} start={0} />}
          {i > 0 && <SfxTrack beatFrom={b.from} />}
        </Sequence>
      ))}
      {/* субтитры отключены: на экране и так много текста */}
      <ChannelBug />
    </AbsoluteFill>
  );
};
