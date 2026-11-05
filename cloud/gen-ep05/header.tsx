import React from "react";
import { AbsoluteFill, Audio, Loop, OffthreadVideo, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { C3, FONT_NUM } from "../brand/theme";
import { At, Bg, Bug, Chapter, Coin, Counter, Icon, IconName, In, Kicker, Num, Pose, Scene, Source, Title, useT } from "../brand/hm";

// ===================================================================
// Ep05 «Who Really Gets Paid for Christmas?» — обратный порядок времени, главы-даты.
// Сгенерировано build.py (у Claude) из сценария + пословной расшифровки ep05-christmas-words.json.
// Правила с 02–04.11.2026: живые кадры ~80% экрана; наезд только у фона; текст неподвижен;
// логотипы брендов в стоке не размываем (решение Павла 04.11.2026).
// ===================================================================

export const EP05_DURATION_SEC = __DURATION__;

const BROLL: Record<number, string> = __BROLL__;
const LEN: Record<number, number> = __LENS__;
const clip = (n: number) => staticFile(`broll/ep05/${BROLL[n]}.mp4`);

/** Видео клипа на нужную длину: короткий клип замедляется (не меньше 0,5×), если всё равно короче — повторяется */
const Vid: React.FC<{ n: number; need: number; style: React.CSSProperties; rate?: number }> = ({ n, need, style, rate }) => {
  const { fps } = useVideoConfig();
  const len = LEN[n] ?? 10;
  const r = rate ?? Math.max(0.5, Math.min(1, len / Math.max(0.1, need)));
  const loopFrames = Math.max(1, Math.floor((len / r) * fps) - 1);
  return (
    <Loop durationInFrames={loopFrames}>
      <OffthreadVideo src={clip(n)} muted playbackRate={r} style={style} />
    </Loop>
  );
};

// ---------- общие куски ----------
const Center: React.FC<{ y?: number; children: React.ReactNode }> = ({ y = 540, children }) => <At x={960} y={y}>{children}</At>;
const Top: React.FC<{ children: React.ReactNode; y?: number; at?: number }> = ({ children, y = 150, at = 0.05 }) => <At x={960} y={y}><In at={at} from="down"><Kicker>{children}</Kicker></In></At>;
const Row: React.FC<{ gap?: number; children: React.ReactNode; align?: string }> = ({ gap = 80, children, align = "center" }) => <div style={{ display: "flex", alignItems: align, justifyContent: "center", gap }}>{children}</div>;
const Col: React.FC<{ gap?: number; children: React.ReactNode; align?: string }> = ({ gap = 18, children, align = "center" }) => <div style={{ display: "flex", flexDirection: "column", alignItems: align, gap }}>{children}</div>;
const Big: React.FC<{ at: number; color?: string; size?: number; children: React.ReactNode }> = ({ at, color = C3.ink, size = 160, children }) => <In at={at} from="zoom"><Num color={color} size={size}>{children}</Num></In>;
const Label: React.FC<{ at: number; color?: string; size?: number; children: React.ReactNode; out?: number }> = ({ at, color, size = 30, children, out }) => <In at={at} out={out} from="up" dist={20}><Kicker size={size} color={color}>{children}</Kicker></In>;
const IconAt: React.FC<{ at: number; name: IconName; size?: number; color?: string; out?: number }> = ({ at, name, size = 160, color = C3.ink, out }) => <In at={at} out={out} from="zoom"><Icon name={name} size={size} color={color} /></In>;
const CoinAt: React.FC<{ x: number; y: number; h?: number; tl: { at: number; pose: Pose }[]; sign?: string; flip?: boolean }> = ({ x, y, h = 300, tl, sign, flip }) => (
  <div style={{ position: "absolute", left: x, top: y - h, translate: "-50% 0" }}><Coin enter={tl[0].at} h={h} timeline={tl} sign={sign} flip={flip} /></div>
);
const Strike: React.FC<{ at: number; w?: number; color?: string }> = ({ at, w = 420, color = C3.loss }) => {
  const { p } = useT();
  return <div style={{ position: "absolute", left: "50%", top: "50%", width: w * p(at, at + 0.3), height: 6, borderRadius: 3, background: color, translate: `-${w / 2}px -3px`, rotate: "-12deg", boxShadow: `0 0 18px ${color}` }} />;
};

/** Живые кадры на весь экран (основной слой ~80% ролика). dim < 0 — светлее, чтобы видео было видно. */
const Stock: React.FC<{ n: number; until: number; dim?: number; rate?: number }> = ({ n, until, dim = 0, rate }) => {
  const { t, p } = useT();
  const k = Math.min(1, t / Math.max(1, until));
  const op = 1 - p(until - 0.25, until);
  return (
    <AbsoluteFill style={{ opacity: op }}>
      <Vid n={n} need={until} rate={rate} style={{ width: "100%", height: "100%", objectFit: "cover", scale: String(1.04 + 0.06 * k) }} />
      <AbsoluteFill style={{ background: `linear-gradient(180deg, rgba(7,10,11,${0.5 + dim}) 0%, rgba(7,10,11,${0.62 + dim}) 55%, rgba(7,10,11,${0.82 + dim}) 100%)` }} />
    </AbsoluteFill>
  );
};

/** Смена живого кадра посреди длинной сцены (новое визуальное событие без лишней графики) */
const StockSwap: React.FC<{ n: number; at: number; until: number; dim?: number }> = ({ n, at, until, dim = 0 }) => {
  const { p } = useT();
  const op = p(at, at + 0.5) * (1 - p(until - 0.25, until));
  return (
    <AbsoluteFill style={{ opacity: op }}>
      <Sequence from={Math.round(at * 30)}><Vid n={n} need={until - at} style={{ width: "100%", height: "100%", objectFit: "cover", scale: "1.06" }} /></Sequence>
      <AbsoluteFill style={{ background: `linear-gradient(180deg, rgba(7,10,11,${0.5 + dim}) 0%, rgba(7,10,11,${0.62 + dim}) 55%, rgba(7,10,11,${0.82 + dim}) 100%)` }} />
    </AbsoluteFill>
  );
};

/** Фон-подложка под графикой: размытое затемнённое видео со своим медленным наездом. */
const Back: React.FC<{ n: number; dur: number; dim?: number; n2?: number; t2?: number }> = ({ n, dur, dim = 0, n2, t2 }) => {
  const { t, p } = useT();
  const k = Math.min(1, t / Math.max(1, dur));
  const op = p(0, 0.3) * (1 - p(dur - 0.25, dur));
  const sw = n2 !== undefined && t2 !== undefined ? p(t2, t2 + 0.5) : 0;
  const st = { width: "100%", height: "100%", objectFit: "cover" as const, filter: "blur(2px) saturate(0.85)", scale: String(1.04 + 0.06 * k) };
  return (
    <AbsoluteFill style={{ opacity: op }}>
      <AbsoluteFill style={{ opacity: 1 - sw }}><Vid n={n} need={t2 ?? dur} style={st} /></AbsoluteFill>
      {n2 !== undefined && t2 !== undefined && <Sequence from={Math.round(t2 * 30)}><AbsoluteFill style={{ opacity: sw }}><Vid n={n2} need={dur - t2} style={st} /></AbsoluteFill></Sequence>}
      <AbsoluteFill style={{ background: `radial-gradient(ellipse at 50% 50%, rgba(7,10,11,${0.62 + dim}) 0%, rgba(7,10,11,${0.76 + dim}) 70%, rgba(7,10,11,${0.88 + dim}) 100%)` }} />
    </AbsoluteFill>
  );
};

/** Ценник-плашка */
const Tag: React.FC<{ at: number; label: string; value: string; color?: string; rotate?: number }> = ({ at, label, value, color = C3.gold, rotate = -4 }) => (
  <In at={at} from="zoom">
    <div style={{ rotate: `${rotate}deg`, padding: "18px 38px 22px", borderRadius: 22, background: "rgba(13,32,24,.92)", boxShadow: `inset 0 0 0 2px ${color}88, 0 30px 60px rgba(0,0,0,.45), 0 0 50px ${color}22`, textAlign: "center" }}>
      <Kicker size={26} color={`${color}cc`}>{label}</Kicker>
      <Num color={color} size={110} glow={false}>{value}</Num>
    </div>
  </In>
);

const NameCard: React.FC<{ at: number; name: string; role: string }> = ({ at, name, role }) => (
  <In at={at} from="up">
    <div style={{ padding: "30px 44px", borderRadius: 18, background: "rgba(13,32,24,.88)", boxShadow: `inset 0 0 0 2px ${C3.line}, 0 30px 60px rgba(0,0,0,.4)`, display: "flex", alignItems: "center", gap: 28 }}>
      <Icon name="person" size={110} color={C3.gold} />
      <div><div style={{ fontFamily: FONT_NUM, fontWeight: 300, fontSize: 56, color: C3.ink, whiteSpace: "nowrap" }}>{name}</div><Kicker size={22}>{role}</Kicker></div>
    </div>
  </In>
);

const Quote: React.FC<{ at: number; who: string; size?: number; children: React.ReactNode }> = ({ at, who, size = 66, children }) => {
  const { p } = useT();
  const k = p(at, at + 0.7);
  return (
    <div style={{ width: 1500, opacity: k, translate: `0 ${(1 - k) * 24}px`, textAlign: "center" }}>
      <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", fontSize: size, lineHeight: 1.25, color: C3.ink, textShadow: "0 4px 30px rgba(0,0,0,.6)" }}>{children}</div>
      <div style={{ marginTop: 34, display: "flex", justifyContent: "center" }}><Kicker size={24} color={`${C3.gold}cc`}>{who}</Kicker></div>
    </div>
  );
};

const Donut: React.FC<{ at: number; pct: number; color?: string; size?: number; label?: string; center: string }> = ({ at, pct, color = C3.money, size = 420, label, center }) => {
  const { p } = useT();
  const k = p(at, at + 1.1);
  const r = 42, c = 2 * Math.PI * r;
  return (
    <In at={at} from="zoom">
      <div style={{ position: "relative", width: size, height: size }}>
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ rotate: "-90deg" }}>
          <circle cx={50} cy={50} r={r} fill="none" stroke="rgba(234,255,243,.1)" strokeWidth={9} />
          <circle cx={50} cy={50} r={r} fill="none" stroke={color} strokeWidth={9} strokeLinecap="round" strokeDasharray={`${c * pct * k} ${c}`} />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}><Num color={color} size={size * 0.26}>{center}</Num></div>
      </div>
      {label && <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}><Kicker size={26}>{label}</Kicker></div>}
    </In>
  );
};


// ---------- компоненты Ep05 ----------

/** Предмет-талисман: подарочная карта $50 (стилизованная, без логотипа), глянец + лёгкий 3D-наклон */
const GiftCard: React.FC<{ at: number; value?: string; w?: number; tilt?: boolean; out?: number }> = ({ at, value = "$50", w = 640, tilt = true, out }) => {
  const { t, p } = useT();
  const k = p(at, at + 0.9);
  const o = out !== undefined ? p(out - 0.3, out) : 0;
  const sway = tilt ? Math.sin((t - at) * 0.8) * 5 * k : 0;
  const h = w * 0.62;
  return (
    <div style={{ perspective: 1400, opacity: p(at - 0.02, at + 0.25) * (1 - o) }}>
      <div style={{ width: w, height: h, borderRadius: w * 0.05, transform: tilt ? `rotateX(${16 - 8 * k}deg) rotateY(${-26 + 16 * k + sway}deg) scale(${0.72 + 0.28 * k})` : `scale(${0.8 + 0.2 * k})`, background: "linear-gradient(135deg, #1f5c3c 0%, #2fae6a 38%, #17402b 70%, #2c8f5a 100%)", boxShadow: "0 60px 120px rgba(0,0,0,.6), 0 0 90px rgba(47,220,127,.28), inset 0 0 0 2px rgba(255,255,255,.35)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(105deg, transparent ${20 + 60 * k}%, rgba(255,255,255,.45) ${28 + 60 * k}%, transparent ${36 + 60 * k}%)` }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: h * 0.44, height: h * 0.1, background: "linear-gradient(90deg,#b8182b,#ff4d4d,#b8182b)" }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, left: w * 0.7, width: w * 0.06, background: "linear-gradient(180deg,#b8182b,#ff4d4d,#b8182b)" }} />
        <div style={{ position: "absolute", left: w * 0.07, top: w * 0.06, fontFamily: FONT_NUM, fontWeight: 700, fontSize: w * 0.06, letterSpacing: "0.25em", color: "#eafff3" }}>GIFT CARD</div>
        <div style={{ position: "absolute", left: w * 0.07, bottom: w * 0.05, fontFamily: FONT_NUM, fontWeight: 200, fontSize: w * 0.2, color: "#fff", textShadow: "0 0 30px rgba(255,255,255,.4)" }}>{value}</div>
      </div>
    </div>
  );
};

/** Выписка по кредитке */
const Statement: React.FC<{ at: number; due?: number; min?: number; w?: number }> = ({ at, due, min, w = 760 }) => {
  const { p } = useT();
  return (
    <In at={at} from="up">
      <div style={{ width: w, padding: "44px 56px", borderRadius: 10, background: "#f2efe6", color: "#0b1210", fontFamily: "'Courier New', monospace", fontSize: 38, boxShadow: "0 40px 80px rgba(0,0,0,.5)" }}>
        <div style={{ fontWeight: 700, letterSpacing: "0.18em", fontSize: 34 }}>CREDIT CARD STATEMENT</div>
        <div style={{ marginTop: 10, fontSize: 26, color: "#555" }}>Holiday purchases · December</div>
        <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", opacity: due !== undefined ? p(due, due + 0.4) : 1 }}><span>New balance</span><b>$1,223.00</b></div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#b8182b", opacity: min !== undefined ? p(min, min + 0.4) : 1 }}><span>Minimum due</span><b>$25.00</b></div>
      </div>
    </In>
  );
};

/** Календарь: листы года летят, останавливаются на целевой дате */
const YearFlip: React.FC<{ at: number; stop: number; from?: number; to?: number; label: string }> = ({ at, stop, from = 2026, to = 2033, label }) => {
  const { p } = useT();
  const k = p(at, stop, (x) => x);
  const year = Math.round(from + (to - from) * k);
  const done = p(stop, stop + 0.3);
  return (
    <In at={at} from="zoom">
      <div style={{ width: 640, borderRadius: 26, overflow: "hidden", background: "#f2efe6", boxShadow: "0 50px 100px rgba(0,0,0,.55)" }}>
        <div style={{ height: 96, background: "#b8182b", display: "flex", alignItems: "center", justifyContent: "center" }}><Kicker size={28} color="#fff">{done > 0.5 ? label : "PAYING…"}</Kicker></div>
        <div style={{ height: 260, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT_NUM, fontWeight: 200, fontSize: 190, color: "#0b1210", filter: k < 0.999 ? "blur(2px)" : undefined }}>{year}</div>
      </div>
    </In>
  );
};

/** Ноябрь 1939: пять четвергов, 30 зачёркнуто, 23 обведено */
const Nov1939: React.FC<{ at: number; thu: number; last?: number; move?: number }> = ({ at, thu, last, move }) => {
  const { p } = useT();
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const cells: (number | null)[] = [null, null, null];
  for (let d = 1; d <= 30; d++) cells.push(d);
  while (cells.length % 7) cells.push(null);
  const S = 92;
  return (
    <In at={at} from="zoom">
      <div style={{ padding: "34px 40px 40px", borderRadius: 18, background: "#efe6cf", boxShadow: "0 50px 100px rgba(0,0,0,.55)", filter: "sepia(.25)" }}>
        <div style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: 54, color: "#3a2a05", letterSpacing: "0.12em" }}>NOVEMBER 1939</div>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(7, ${S}px)`, gap: 6, marginTop: 18 }}>
          {days.map((d, i) => <div key={"h" + i} style={{ textAlign: "center", fontFamily: FONT_NUM, fontWeight: 700, fontSize: 26, color: i === 4 ? "#b8182b" : "#6b5a35" }}>{d}</div>)}
          {cells.map((c, i) => {
            const isThu = i % 7 === 4 && c !== null;
            const hl = isThu ? p(thu + Math.floor(i / 7) * 0.12, thu + Math.floor(i / 7) * 0.12 + 0.3) : 0;
            return (
              <div key={i} style={{ position: "relative", height: S * 0.8, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: hl ? `rgba(255,210,63,${0.45 * hl})` : "transparent", fontFamily: FONT_NUM, fontWeight: 300, fontSize: 40, color: "#2a2006" }}>
                {c}
                {c === 30 && last !== undefined && <div style={{ position: "absolute", width: 80 * p(last, last + 0.3), height: 5, background: "#b8182b", rotate: "-20deg" }} />}
                {c === 23 && move !== undefined && <div style={{ position: "absolute", inset: -4, borderRadius: 40, border: "5px solid #b8182b", opacity: p(move, move + 0.3), scale: String(0.6 + 0.4 * p(move, move + 0.3)) }} />}
              </div>
            );
          })}
        </div>
      </div>
    </In>
  );
};

/** Брошюра-раздача с красной лампочкой (сам персонаж не рисуется) */
const Booklets: React.FC<{ at: number; glow: number }> = ({ at, glow }) => {
  const { t, p } = useT();
  const g = p(glow, glow + 0.6);
  const pulse = 0.85 + 0.15 * Math.sin((t - glow) * 4);
  return (
    <In at={at} from="up">
      <div style={{ position: "relative", width: 620, height: 470 }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={{ position: "absolute", left: 60 + i * 26, top: 60 + i * 18, width: 380, height: 300, borderRadius: 12, background: "linear-gradient(160deg,#e9dcc0,#cdb78d)", boxShadow: "0 20px 40px rgba(0,0,0,.45)", rotate: `${-6 + i * 3}deg` }}>
            {i === 3 && <div style={{ position: "absolute", left: 30, top: 34, fontFamily: "Georgia, serif", fontSize: 30, color: "#5b4520", letterSpacing: "0.1em" }}>A CHRISTMAS STORY · FREE</div>}
            {i === 3 && <div style={{ position: "absolute", left: 160, top: 140, width: 56, height: 56, borderRadius: 28, background: "#ff3b3b", opacity: g, boxShadow: `0 0 ${60 * g * pulse}px ${30 * g}px rgba(255,59,59,.6)` }} />}
          </div>
        ))}
      </div>
    </In>
  );
};

/** Десять человечков, n из них подсвечены */
const People: React.FC<{ at: number; n: number; hl: number; color?: string }> = ({ at, n, hl, color = C3.loss }) => {
  const { p } = useT();
  return (
    <div style={{ display: "flex", gap: 22 }}>
      {Array.from({ length: 10 }).map((_, i) => {
        const k = p(at + i * 0.05, at + i * 0.05 + 0.3);
        const on = i < n ? p(hl + i * 0.08, hl + i * 0.08 + 0.3) : 0;
        return <div key={i} style={{ opacity: k }}><Icon name="person" size={120} color={on > 0.5 ? color : C3.dim} sw={2.6} /></div>;
      })}
    </div>
  );
};

/** Лента платежей: 91 квадратик-месяц, заполняется до 2033 */
const PayStrip: React.FC<{ at: number; dur?: number; n?: number }> = ({ at, dur = 2.4, n = 91 }) => {
  const { p } = useT();
  const k = p(at, at + dur, (x) => x);
  const filled = Math.floor(n * k);
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(13, 64px)", gap: 10 }}>
        {Array.from({ length: n }).map((_, i) => (
          <div key={i} style={{ height: 44, borderRadius: 7, background: i < filled ? C3.loss : "rgba(234,255,243,.08)", boxShadow: i < filled ? `0 0 14px ${C3.loss}55` : undefined }} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18, opacity: p(at, at + 0.4) }}>
        <Kicker size={24}>JAN 2026</Kicker><Kicker size={24} color={k > 0.99 ? C3.gold : undefined}>JULY 2033</Kicker>
      </div>
    </div>
  );
};

/** Чек (бумажный) */
const Receipt: React.FC<{ at: number; title: string; value: string; color?: string }> = ({ at, title, value, color = "#0b1210" }) => (
  <In at={at} from="up">
    <div style={{ width: 520, padding: "40px 46px", borderRadius: 8, background: "#f2efe6", fontFamily: "'Courier New', monospace", boxShadow: "0 40px 80px rgba(0,0,0,.5)", textAlign: "center" }}>
      <div style={{ fontSize: 30, letterSpacing: "0.2em", color: "#555" }}>RECEIPT</div>
      <div style={{ marginTop: 20, fontSize: 36, color: "#0b1210" }}>{title}</div>
      <div style={{ marginTop: 10, fontSize: 84, fontWeight: 700, color }}>{value}</div>
    </div>
  </In>
);

/** Столбик долга: +44 → −25, остаток 19 подсвечен */
const DebtBar: React.FC<{ up: number; down: number; rest: number }> = ({ up, down, rest }) => {
  const { p } = useT();
  const H = 44 * 9, k1 = p(up, up + 0.9), k2 = p(down, down + 0.9);
  const h = H * k1 - (25 * 9) * k2;
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 60 }}>
      <div style={{ position: "relative", width: 220, height: H, display: "flex", alignItems: "flex-end" }}>
        <div style={{ width: 220, height: H * k1, borderRadius: 14, border: `2px dashed ${C3.loss}66`, position: "absolute", bottom: 0, opacity: k2 }} />
        <div style={{ width: 220, height: Math.max(0, h), borderRadius: 14, background: `linear-gradient(0deg, ${C3.loss}55, ${C3.loss})`, boxShadow: `0 0 40px ${C3.loss}44` }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingBottom: 20 }}>
        <div style={{ opacity: p(up + 0.4, up + 0.8) }}><Num color={C3.loss} size={96} glow={false}>+$44B</Num><Kicker size={22}>OCT–DEC 2025</Kicker></div>
        <div style={{ opacity: p(down + 0.4, down + 0.8) }}><Num color={C3.money} size={96} glow={false}>−$25B</Num><Kicker size={22}>BY END OF MARCH</Kicker></div>
        <div style={{ opacity: p(rest, rest + 0.4) }}><Num color={C3.gold} size={96} glow={false}>≈ $19B</Num><Kicker size={22} color={C3.gold}>STILL ON THE BOOKS</Kicker></div>
      </div>
    </div>
  );
};

/** 1909 против сегодня: две стрелки денег */
const TwoEras: React.FC<{ left: number; right: number }> = ({ left, right }) => {
  const { p } = useT();
  const Lane: React.FC<{ at: number; year: string; a: string; b: string; note: string; color: string }> = ({ at, year, a, b, note, color }) => {
    const k = p(at + 0.3, at + 1.1);
    return (
      <In at={at} from="up">
        <Col gap={22}>
          <Num color={color} size={110}>{year}</Num>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Kicker size={30} color={C3.ink}>{a}</Kicker>
            <div style={{ width: 160 * k, height: 4, background: color, boxShadow: `0 0 16px ${color}` }} /><div style={{ opacity: k, width: 0, height: 0, borderTop: "14px solid transparent", borderBottom: "14px solid transparent", borderLeft: `22px solid ${color}` }} />
            <Kicker size={30} color={C3.ink}>{b}</Kicker>
          </div>
          <Kicker size={24} color={color}>{note}</Kicker>
        </Col>
      </In>
    );
  };
  return (
    <Row gap={180}>
      <Lane at={left} year="1909" a="SAVE" b="CHRISTMAS" note="THE BANK HOLDS YOUR SAVINGS" color={C3.money} />
      <Lane at={right} year="TODAY" a="CHRISTMAS" b="PAY" note="THE BANK HOLDS YOUR FUTURE" color={C3.loss} />
    </Row>
  );
};

const Subscribe: React.FC<{ at: number }> = ({ at }) => (
  <At x={760} y={540}><In at={at} from="zoom">
    <Col gap={26}>
      <Title text="Money hiding in ordinary things?" hl={["ordinary"]} size={76} at={at} />
      <div style={{ padding: "24px 70px", borderRadius: 60, background: C3.loss, boxShadow: `0 0 50px ${C3.loss}66`, fontFamily: FONT_NUM, fontWeight: 700, fontSize: 48, letterSpacing: "0.12em", color: "#fff" }}>SUBSCRIBE</div>
      <Kicker size={26}>COSTS LESS THAN A GIFT CARD · NEVER EXPIRES</Kicker>
    </Col>
  </In></At>
);

const EndCard: React.FC<{ at: number }> = ({ at }) => (
  <>
    <At x={960} y={130}><In at={at} from="down"><Kicker>NEXT · THE OTHER SIDE OF THE STATEMENT</Kicker></In></At>
    <At x={720} y={540}>
      <In at={at + 0.2} from="zoom">
        <div style={{ width: 820, height: 461, borderRadius: 24, background: "linear-gradient(160deg,#1d3a2e,#0c1814)", boxShadow: "0 50px 90px rgba(0,0,0,.55), inset 0 0 0 2px rgba(255,210,63,.4)", display: "flex", alignItems: "center", justifyContent: "center", gap: 30 }}>
          <Icon name="card" size={220} color={C3.gold} />
          <Col align="flex-start" gap={8}><Kicker size={26} color={C3.gold}>HIDDEN MARGIN · COMING UP</Kicker><div style={{ fontFamily: FONT_NUM, fontWeight: 300, fontSize: 48, color: C3.ink, lineHeight: 1.1, width: 400 }}>How Credit Card Companies Make Money</div></Col>
        </div>
      </In>
    </At>
    <At x={1560} y={780}><Coin enter={at + 0.6} h={360} timeline={[{ at: at + 0.6, pose: "point" }]} flip /></At>
  </>
);
