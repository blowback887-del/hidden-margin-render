import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { BRAND, COLORS, FONT_BODY, FONT_HEAD } from "./theme";
import {
  ChannelBug, ChapterTag, CompareBars, easeBack, easeInOut, easeOut, GridBg, Headline,
  MoneyCounter, PopcornBucket, PriceTag, SplitBar, Ticket, useP,
} from "./components";

// Плавный вход/выход сцены
const SceneWrap: React.FC<{ dur: number; children: React.ReactNode }> = ({ dur, children }) => {
  const { p } = useP();
  const i = p(0, 0.4, easeOut);
  const o = p(dur - 0.4, dur, easeInOut);
  return (
    <AbsoluteFill
      style={{
        opacity: i * (1 - o),
        scale: String((0.96 + 0.04 * i) * (1 + 0.04 * o)),
        filter: `blur(${(1 - i) * 10 + o * 14}px)`,
        display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

// 1. Заставка канала
const Intro: React.FC = () => {
  const { p } = useP();
  const k = p(0.2, 0.9, easeBack);
  const line = p(0.6, 1.3, easeInOut);
  return (
    <SceneWrap dur={3}>
      <div style={{ fontFamily: FONT_HEAD, fontSize: 170, color: COLORS.ink, scale: String(k), letterSpacing: "0.02em" }}>
        <span style={{ color: COLORS.money, marginRight: 24 }}>$</span>
        {BRAND.name}
      </div>
      <div style={{ width: 900 * line, height: 8, background: COLORS.gold, borderRadius: 4, margin: "20px 0 30px" }} />
      <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 44, color: COLORS.dim, opacity: p(1, 1.6, easeOut) }}>{BRAND.tagline}</div>
    </SceneWrap>
  );
};

// 2. Хук: выручка и убыток
const Hook: React.FC = () => (
  <SceneWrap dur={5}>
    <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 40, letterSpacing: "0.2em", color: COLORS.dim }}>AMC · 2025 REVENUE</div>
    <MoneyCounter to={4.85} start={0.3} dur={1.3} size={220} digits={2} />
    <div style={{ marginTop: -30, fontFamily: FONT_HEAD, fontSize: 70, color: COLORS.money }}>BILLION</div>
    <div style={{ height: 40 }} />
    <Headline text="And still lost" start={2.2} size={90} />
    <MoneyCounter to={632} start={2.8} dur={1} size={180} digits={0} color={COLORS.loss} prefix="−" />
    <div style={{ marginTop: -24, fontFamily: FONT_HEAD, fontSize: 60, color: COLORS.loss }}>MILLION</div>
  </SceneWrap>
);

// 3. Куда уходит билет
const TicketSplit: React.FC = () => {
  const { p } = useP();
  return (
    <SceneWrap dur={6}>
      <ChapterTag n={1} title="Where your ticket goes" start={0.2} />
      <div style={{ scale: String(p(0.3, 0.9, easeBack)), rotate: `${(1 - p(0.3, 0.9, easeBack)) * -12}deg`, marginBottom: 60 }}>
        <Ticket price="$12.09" />
      </div>
      <SplitBar
        start={1.6}
        parts={[
          { label: "Goes to the studio", value: 5.81, color: COLORS.loss },
          { label: "Theater keeps", value: 6.28, color: COLORS.money },
        ]}
      />
    </SceneWrap>
  );
};

// 4. Попкорн
const Popcorn: React.FC = () => {
  const { p } = useP();
  return (
    <SceneWrap dur={6}>
      <ChapterTag n={2} title="The popcorn machine" start={0.2} />
      <div style={{ display: "flex", alignItems: "center", gap: 120 }}>
        <div style={{ scale: String(p(0.2, 0.8, easeBack)) }}>
          <PopcornBucket size={440} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 50 }}>
          <PriceTag label="Costs the theater" price="$0.90" start={0.9} color={COLORS.ink} rotate={-5} />
          <PriceTag label="You pay" price="$8.00" start={1.8} color={COLORS.gold} rotate={4} />
          <div style={{ fontFamily: FONT_HEAD, fontSize: 96, color: COLORS.money, opacity: p(3, 3.4, easeOut), scale: String(p(3, 3.5, easeBack)) }}>
            ≈ 800% MARKUP
          </div>
        </div>
      </div>
    </SceneWrap>
  );
};

// 5. Сравнение: что театр оставляет себе
const Compare: React.FC = () => (
  <SceneWrap dur={5}>
    <ChapterTag n={3} title="What AMC keeps per visitor" start={0.2} />
    <Headline text="Same money. One is corn." start={0.3} size={100} highlight={["corn"]} />
    <div style={{ height: 80 }} />
    <CompareBars
      start={1.2}
      max={7}
      rows={[
        { label: "From the ticket (after the studio)", value: 6.28, display: "$6.28", color: COLORS.blue },
        { label: "From snacks (after the food)", value: 6.13, display: "$6.13", color: COLORS.gold },
      ]}
    />
  </SceneWrap>
);

// 6. Финальная карточка
const EndCard: React.FC = () => {
  const { p } = useP();
  return (
    <SceneWrap dur={3}>
      <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 38, letterSpacing: "0.2em", color: COLORS.dim }}>NEXT VIDEO</div>
      <Headline text="Why your gym wants you to never show up" start={0.2} size={86} highlight={["never"]} />
      <div
        style={{
          marginTop: 70, fontFamily: FONT_HEAD, fontSize: 56, color: COLORS.bg, background: COLORS.loss,
          padding: "14px 50px", borderRadius: 14, scale: String(p(1, 1.5, easeBack)),
        }}
      >
        SUBSCRIBE
      </div>
    </SceneWrap>
  );
};

const SCENES: [React.FC, number][] = [
  [Intro, 3],
  [Hook, 5],
  [TicketSplit, 6],
  [Popcorn, 6],
  [Compare, 5],
  [EndCard, 3],
];
export const BRAND_REEL_SECONDS = SCENES.reduce((s, [, d]) => s + d, 0);

export const BrandReel: React.FC = () => {
  const { fps } = useVideoConfig();
  let from = 0;
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      <GridBg />
      {SCENES.map(([Scene, d], i) => {
        const el = (
          <Sequence key={i} from={Math.round(from * fps)} durationInFrames={Math.round(d * fps)}>
            <Scene />
          </Sequence>
        );
        from += d;
        return el;
      })}
      <ChannelBug />
    </AbsoluteFill>
  );
};
