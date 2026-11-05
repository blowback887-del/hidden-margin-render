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

export const EP05_DURATION_SEC = 603.36;

const BROLL: Record<number, string> = {"1": "01-quiet-suburban-street-decorated-for-holi", "2": "02-peaceful-winter-snowfall-in-suburban-set", "3": "03-person-organizing-kitchen-drawer-with-fo", "4": "04-deliveries-and-mail-at-the-front-door", "5": "05-aerial-view-of-city-decorated-for-christ", "6": "06-snow-flakes-falling-at-night", "7": "07-a-crowded-shopping-mall-decorated-with-c", "8": "08-paying-with-card-on-card-reader", "9": "09-festive-shopping-mall-with-holiday-decor", "10": "10-a-sidewalk-covered-in-snow-brightened-by", "11": "11-calendar-hanged-on-a-wall", "12": "12-historic-shopping-arcade-with-shoppers-i", "13": "13-a-ringing-vintage-telephone", "14": "14-iconic-view-of-white-house-on-sunny-day", "15": "15-turkey-for-the-thanksgiving-dinner", "16": "16-family-in-a-thanksgiving-dinner", "17": "17-american-flags-at-washington-monument-ag", "18": "18-chicago-theatre-marquee-in-cityscape-vie", "19": "19-vintage-typewriter-typing-close-up", "20": "20-the-glowing-filament-of-a-light-bulb", "21": "21-traffic-jam-at-night", "22": "22-a-man-holding-black-friday-shopping-bags", "23": "23-promoting-black-friday-sale-on-a-board", "24": "24-defocused-footage-of-christmas-lights", "25": "25-bustling-indoor-shopping-mall-with-holid", "26": "26-efficient-warehouse-worker-organizing-pa", "27": "27-modern-automated-warehouse-conveyor-syst", "28": "28-delivery-truck-full-of-boxes", "29": "29-packages-moving-on-a-conveyor-belt", "30": "30-vintage-vinyl-record-playing-on-turntabl", "31": "31-close-up-on-hands-opening-wallet-and-sho", "32": "32-video-of-a-christmas-gifts", "33": "33-people-holding-a-coffee", "34": "34-people-at-the-coffee-shop", "35": "35-person-pouring-milk-in-a-cup", "36": "36-gifts-under-a-christmas-tree", "37": "37-close-up-video-of-a-boy-opening-a-gift", "38": "38-a-girl-sitting-on-a-sofa-rips-off-the-gi", "39": "39-person-wearing-reindeer-sweater", "40": "40-vibrant-christmas-village-display-in-mal", "41": "41-customer-service-interaction-at-store-co", "42": "42-opening-a-box-of-parcel", "43": "43-small-rocks-on-the-ground", "44": "44-a-woman-holding-a-billing-statement", "45": "45-a-person-computing-using-a-calculator", "46": "46-person-browsing-on-online-store", "47": "47-elderly-woman-looking-at-the-invoice-whi", "48": "48-close-up-of-an-analog-clock", "49": "49-coins-dropping-into-clear-glass-jar", "50": "50-ornate-architectural-interior-with-arche", "51": "51-sand-inside-an-hourglass", "52": "52-family-eating-together-at-christmas-day", "53": "53-a-person-using-a-vacuum", "54": "54-snow-falling", "55": "55-house-covered-with-christmas-lights"};
const LEN: Record<number, number> = {"1": 8.57, "2": 10.0, "3": 7.07, "4": 10.0, "5": 10.0, "6": 10.0, "7": 10.0, "8": 10.0, "9": 10.0, "10": 10.0, "11": 8.87, "12": 10.0, "13": 5.93, "14": 10.0, "15": 10.0, "16": 7.53, "17": 10.0, "18": 9.0, "19": 10.0, "20": 10.0, "21": 10.0, "22": 10.0, "23": 10.0, "24": 10.0, "25": 10.0, "26": 10.0, "27": 8.73, "28": 5.67, "29": 10.0, "30": 10.0, "31": 10.0, "32": 10.0, "33": 7.13, "34": 10.0, "35": 10.0, "36": 10.0, "37": 10.0, "38": 10.0, "39": 5.7, "40": 10.0, "41": 10.0, "42": 6.97, "43": 9.7, "44": 5.2, "45": 10.0, "46": 10.0, "47": 10.0, "48": 10.0, "49": 8.53, "50": 9.8, "51": 10.0, "52": 10.0, "53": 10.0, "54": 10.0, "55": 6.5};
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
const Top: React.FC<{ children: React.ReactNode; y?: number; at?: number }> = ({ children, y = 150, at = 0.05 }) => <At x={960} y={y}><In at={at} from="down"><Kicker size={34}>{children}</Kicker></In></At>;
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
      <div style={{ display: "flex", flexDirection: "column", gap: 46, paddingBottom: 20 }}>
        <div style={{ opacity: p(up + 0.4, up + 0.8) }}><Num color={C3.loss} size={96} glow={false}>+$44B</Num><div style={{ height: 10 }} /><Kicker size={24}>OCT–DEC 2025</Kicker></div>
        <div style={{ opacity: p(down + 0.4, down + 0.8) }}><Num color={C3.money} size={96} glow={false}>−$25B</Num><div style={{ height: 10 }} /><Kicker size={24}>BY END OF MARCH</Kicker></div>
        <div style={{ opacity: p(rest, rest + 0.4) }}><Num color={C3.gold} size={96} glow={false}>≈ $19B</Num><div style={{ height: 10 }} /><Kicker size={24} color={C3.gold}>STILL ON THE BOOKS</Kicker></div>
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

// ---------- сцены ----------
type Beat = { from: number; to: number; tag?: [number, string]; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 9.66, back: null, el: (<>
<Stock n={2} until={9.66} dim={-0.15} />
<Top at={0.05}>JANUARY 2</Top>
<Center y={560}><Col gap={22}><Big at={5.84} size={150} color={C3.money}>~7 YEARS</Big><Label at={5.84} size={30}>TO GROW A CHRISTMAS TREE</Label></Col></Center>
<Center y={860}><Label at={7.94} size={46} color={C3.gold}>5 WEEKS ON THE JOB</Label></Center>
<Source>National Christmas Tree Association</Source>
</>) },
  { from: 9.66, to: 15.96, back: null, el: (<>
<Stock n={3} until={6.3} dim={-0.05} />
<Center y={520}><GiftCard at={0.98} /></Center>
<Center y={900}><Label at={3.1} size={32}>INTO THE KITCHEN DRAWER</Label></Center>
</>) },
  { from: 15.96, to: 19.62, back: null, el: (<>
<Stock n={4} until={3.66} dim={0} />
<Center y={540}><Statement at={1.46} w={980} /></Center>
</>) },
  { from: 19.62, to: 25.12, back: <><Back n={55} dur={5.5} /></>, el: (<>
<Center y={420}><Title text="The magic is over." hl={["magic"]} size={96} at={0.1} /></Center>
<Center y={600}><Title text="The money is just getting started." hl={["money"]} size={80} at={2.56} /></Center>
<CoinAt x={1640} y={968} h={280} tl={[{ at: 0.2, pose: "suspicious" }, { at: 2.56, pose: "point" }]} />
</>) },
  { from: 25.12, to: 33.84, back: null, el: (<>
<Stock n={5} until={8.72} dim={-0.15} />
<StockSwap n={54} at={2.9} until={8.72} dim={0.2} />
<At x={960} y={300}><Label at={0.2} size={32}>THIS YEAR · NOVEMBER + DECEMBER</Label></At>
<Center y={500}><Counter to={1.013} at={5.6} dur={1.2} fmt={(v) => "$" + v.toFixed(3) + "T"} size={230} color={C3.gold} /></Center>
<Center y={720}><Label at={5.6} size={30}>U.S. RETAIL SALES · NOV + DEC 2026 · FORECAST</Label></Center>
<Source>NRF holiday forecast, Oct 2026</Source>
</>) },
  { from: 33.84, to: 37.06, back: <><Back n={24} dur={3.22} /></>, el: (<>
<Center y={440}><Title text="That's not a holiday." hl={["holiday."]} size={92} at={0.05} /></Center>
<Center y={620}><Title text="That's an economy." hl={["economy."]} size={110} at={1.68} /></Center>
</>) },
  { from: 37.06, to: 42.34, back: null, el: (<>
<Stock n={6} until={5.28} dim={0.05} />
<Center y={380}><Title text="It doesn't work the way you think." hl={["think."]} size={72} at={0.14} /></Center>
<Center y={600}><Col gap={20}><Big at={4.08} size={160} color={C3.gold}>◀◀ REWIND</Big></Col></Center>
</>) },
  { from: 42.34, to: 50.0, back: null, el: (<>
<Stock n={7} until={7.66} dim={-0.05} />
<StockSwap n={25} at={5.13} until={7.66} dim={0.2} />
<Top at={0.05}>DECEMBER 20, 2025</Top>
<Center y={560}><NameCard at={2.6} name="JENNA" role="NOT A REAL PERSON · VERY AVERAGE" /></Center>
</>) },
  { from: 50.0, to: 61.02, back: null, el: (<>
<Stock n={8} until={11.02} dim={0} />
<Center y={470}><Big at={4.2} size={220} color={C3.ink}>$1,223</Big></Center>
<Center y={690}><Label at={7.02} size={30} color={C3.gold}>AVERAGE HOLIDAY DEBT · AMONG THOSE WHO BORROWED</Label></Center>
<Source>LendingTree survey, Dec 2025</Source>
</>) },
  { from: 61.02, to: 71.72, back: <><Back n={9} dur={10.7} /></>, el: (<>
<Center y={520}><YearFlip at={3.34} stop={8.44} label="PAID OFF · JULY 2033" /></Center>
<Center y={860}><Label at={3.94} size={30} color={C3.loss}>IF SHE PAYS ONLY THE MINIMUM</Label></Center>
<CoinAt x={1640} y={968} h={280} tl={[{ at: 0.68, pose: "suspicious" }, { at: 8.44, pose: "shocked" }]} />
<At x={960} y={1000}><Label at={3.94} size={24} color={C3.ink}>*OUR CALCULATION · DETAILS LATER IN THE VIDEO</Label></At>
</>) },
  { from: 71.72, to: 77.68, back: null, el: (<>
<Stock n={10} until={5.96} dim={-0.1} />
<Center y={540}><Title text="Hold that thought." hl={["thought."]} size={88} at={0.05} /></Center>
<CoinAt x={1640} y={968} h={280} tl={[{ at: 4.0, pose: "wink" }]} />
</>) },
  { from: 77.68, to: 83.2, tag: [1, "August 1939"], back: null, el: (<>
<Center y={420}><Row gap={90}>
  <Col><IconAt at={0.05} name="card" size={190} color={C3.ink} /><Label at={0.05} size={30}>CREDIT CARDS</Label></Col>
  <Col><IconAt at={1.5} name="bag" size={190} color={C3.ink} /><Label at={1.5} size={30}>BLACK FRIDAY</Label></Col>
  <Col><IconAt at={2.82} name="truck" size={190} color={C3.ink} /><Label at={2.82} size={30}>AMAZON</Label></Col>
</Row></Center>
<Center y={760}><Row gap={24}><IconAt at={4.54} name="calendar" size={110} color={C3.gold} /><Label at={4.54} size={34} color={C3.gold}>A PROBLEM WITH THE CALENDAR</Label></Row></Center>
</>) },
  { from: 83.2, to: 90.66, back: null, el: (<>
<Stock n={11} until={7.46} dim={0.1} />
<Center y={540}><Nov1939 at={0.05} thu={3.16} last={6.28} /></Center>
</>) },
  { from: 90.66, to: 100.9, back: null, el: (<>
<Stock n={12} until={10.24} dim={0} />
<Center y={420}><Row gap={30}><Label at={0.2} size={32}>THANKSGIVING</Label><div style={{ width: 260, height: 6, borderRadius: 3, background: C3.loss }} /><Label at={0.2} size={32}>CHRISTMAS</Label></Row></Center>
<Center y={250}><IconAt at={1.12} name="calendar" size={90} color={C3.dim} /></Center>
<Center y={560}><Label at={5.76} size={40} color={C3.loss}>A SHORT SHOPPING SEASON</Label></Center>
<Center y={760}><Label at={8.88} size={30}>+ STILL CRAWLING OUT OF THE GREAT DEPRESSION</Label></Center>
</>) },
  { from: 100.9, to: 105.9, back: null, el: (<>
<Stock n={13} until={5.0} dim={0} />
<Center y={540}><Row gap={40}><IconAt at={0.2} name="store" size={150} color={C3.ink} /><Big at={3.2} size={110} color={C3.gold}>→</Big><IconAt at={3.5} name="building" size={150} color={C3.gold} /></Row></Center>
<Center y={760}><Label at={3.2} size={32}>RETAILERS LOBBIED THE PRESIDENT</Label></Center>
</>) },
  { from: 105.9, to: 118.58, back: null, el: (<>
<Stock n={14} until={12.68} dim={0.05} />
<At x={960} y={150}><Label at={0.15} size={28}>PRESIDENT FRANKLIN D. ROOSEVELT</Label></At>
<Center y={400}><In at={0} out={6.28} from="fade"><Quote at={2.9} who="FDR · AS REPORTED BY AP, 1939" size={110}>“Silly.”</Quote></In></Center>
<Center y={560}><Big at={6.28} size={150} color={C3.gold}>NOV 30 → NOV 23</Big></Center>
<Center y={740}><Label at={11.32} size={36} color={C3.loss}>A NATIONAL HOLIDAY · MOVED · FOR SHOPPING</Label></Center>
</>) },
  { from: 118.58, to: 128.56, back: null, el: (<>
<Stock n={15} until={9.98} dim={0} />
<Center y={300}><Title text="“Franksgiving”" hl={["“Franksgiving”"]} size={110} at={2.74} /></Center>
<Center y={620}><Row gap={160}>
  <Col><Big at={5.72} size={170} color={C3.money}>32</Big><Label at={5.72} size={26}>STATES FOLLOWED FDR</Label></Col>
  <Col><Big at={7.76} size={170} color={C3.loss}>16</Big><Label at={7.76} size={26}>KEPT THE OLD DATE</Label></Col>
</Row></Center>
<Source>1940 · Newspapers.com archive</Source>
</>) },
  { from: 128.56, to: 132.88, back: <><Back n={16} dur={4.32} /></>, el: (<>
<Center y={500}><Title text="Two Thanksgivings." hl={["Two"]} size={110} at={0.1} /></Center>
<CoinAt x={1640} y={968} h={280} tl={[{ at: 3.28, pose: "shrug" }]} />
</>) },
  { from: 132.88, to: 139.7, back: null, el: (<>
<Stock n={17} until={6.82} dim={0.05} />
<Center y={420}><Big at={2.12} size={150} color={C3.gold}>4TH THURSDAY</Big></Center>
<Center y={580}><Label at={1.12} size={28}>FIXED BY CONGRESS · 1941</Label></Center>
<Center y={800}><Label at={4.8} size={34} color={C3.money}>THE SHOPPING SEASON KEPT ITS HEAD START</Label></Center>
</>) },
  { from: 139.7, to: 154.32, back: null, el: (<>
<Stock n={18} until={14.62} dim={0.05} />
<At x={300} y={200}><IconAt at={2.98} name="store" size={110} color={C3.gold} /></At>
<Center y={360}><Label at={5.58} size={34} color={C3.gold}>MONTGOMERY WARD · CHICAGO · 1939</Label></Center>
<Center y={600}><NameCard at={9.76} name="ROBERT L. MAY" role="COPYWRITER · AGE 34" /></Center>
<Center y={840}><Label at={12.9} size={30}>JOB: A CHRISTMAS STORY TO GIVE AWAY TO SHOPPERS</Label></Center>
<Source>Smithsonian National Museum of American History</Source>
</>) },
  { from: 154.32, to: 157.06, back: null, el: (<>
<Stock n={19} until={2.74} dim={0.05} />
<Center y={420}><Title text="A freebie." hl={["freebie."]} size={100} at={0.05} /></Center>
<Center y={600}><Title text="A marketing gimmick." hl={["gimmick."]} size={100} at={1.08} /></Center>
</>) },
  { from: 157.06, to: 166.72, back: <><Back n={20} dur={9.66} /></>, el: (<>
<At x={620} y={540}><Booklets at={0.05} glow={3.3} /></At>
<At x={1380} y={480}><Counter to={2.4} at={6.18} dur={1.0} fmt={(v) => v.toFixed(1) + "M"} size={200} color={C3.gold} /></At>
<At x={1380} y={650}><Label at={6.18} size={28}>FREE COPIES · FIRST YEAR</Label></At>
<At x={1380} y={330}><Label at={5.56} size={26} color={C3.gold}>HANDED OUT IN THE STORE</Label></At>
</>) },
  { from: 166.72, to: 169.04, back: null, el: (<>
<Center y={500}><Big at={0.94} size={210} color={C3.loss}>RUDOLPH</Big></Center>
<CoinAt x={1640} y={968} h={280} tl={[{ at: 0.05, pose: "suspicious" }, { at: 0.94, pose: "shocked" }]} />
</>) },
  { from: 169.04, to: 179.02, back: <><Back n={40} dur={9.98} /></>, el: (<>
<Center y={420}><Title text="Christmas icon." hl={["icon."]} size={96} at={1.84} /></Center>
<Center y={600}><Title text="Store promotion." hl={["promotion."]} size={96} at={5.2} /></Center>
<CoinAt x={1640} y={968} h={280} tl={[{ at: 7.3, pose: "wink" }]} />
</>) },
  { from: 179.02, to: 188.4, back: null, el: (<>
<Stock n={21} until={9.38} dim={0} />
<Center y={360}><Label at={0.2} size={30}>PHILADELPHIA POLICE · EARLY 1960s</Label></Center>
<Center y={540}><Big at={4.44} size={170} color={C3.ink}>BLACK FRIDAY</Big></Center>
<Center y={720}><Label at={6.74} size={34} color={C3.loss}>BECAUSE OF THE TRAFFIC</Label></Center>
<Source>Vocabulary.com · Philadelphia Inquirer, 1994</Source>
</>) },
  { from: 188.4, to: 192.3, back: null, el: (<>
<Stock n={22} until={3.9} dim={0} />
<Center y={520}><div style={{ position: "relative" }}><Tag at={1.66} label="MERCHANTS' REBRAND" value="BIG FRIDAY" /><Strike at={3.2} w={560} /></div></Center>
</>) },
  { from: 192.3, to: 201.84, back: null, el: (<>
<Stock n={23} until={9.54} dim={0.38} />
<Center y={440}><Row gap={60}><Big at={1.44} size={130} color={C3.loss}>RED INK</Big><Big at={3.58} size={110} color={C3.dim}>→</Big><Big at={3.58} size={130} color={C3.ink}>BLACK INK</Big></Row></Center>
<Center y={700}><Label at={6.26} size={34} color={C3.gold}>NICE STORY · NOT THE ORIGINAL</Label></Center>
</>) },
  { from: 201.84, to: 213.24, back: <><Back n={24} dur={11.4} /></>, el: (<>
<At x={960} y={200}><Label at={0.05} size={34} color={C3.gold}>HERE'S THE THING</Label></At>
<Center y={400}><Row gap={110}>
  <Col><IconAt at={2.58} name="calendar" size={130} color={C3.gold} /><Label at={2.58} size={24}>A MOVED HOLIDAY</Label></Col>
  <Col><IconAt at={3.7} name="receipt" size={130} color={C3.gold} /><Label at={3.7} size={24}>A STORE GIVEAWAY</Label></Col>
  <Col><IconAt at={4.56} name="bag" size={130} color={C3.gold} /><Label at={4.56} size={24}>A RENAMED FRIDAY</Label></Col>
</Row></Center>
<Center y={720}><Title text="Built on purpose." hl={["purpose."]} size={100} at={6.76} /></Center>
</>) },
  { from: 213.24, to: 226.96, tag: [2, "November"], back: null, el: (<>
<Stock n={25} until={13.72} dim={0.18} />
<StockSwap n={7} at={2.63} until={13.72} dim={0.2} />
<At x={960} y={150}><Label at={0.1} size={30} color={C3.gold}>FAST FORWARD → TODAY</Label></At>
<Center y={480}><Donut at={5.16} pct={0.19} center="19%" color={C3.gold} size={470} /></Center>
<Center y={790}><Label at={5.16} size={28}>OF A YEAR'S RETAIL SALES · JUST NOV + DEC</Label></Center>
<Center y={250}><Label at={9.56} size={26}>ALMOST A FIFTH OF THE YEAR</Label></Center>
<Center y={850}><Label at={12.18} size={26} color={C3.gold}>IN THE DARKEST WEEKS OF THE YEAR</Label></Center>
<Source>NRF · 5-year average</Source>
</>) },
  { from: 226.96, to: 234.92, back: null, el: (<>
<Stock n={26} until={7.96} dim={0} />
<StockSwap n={9} at={4.29} until={7.96} dim={0.2} />
<Center y={460}><Counter to={300000} at={2.82} dur={1.2} fmt={(v) => Math.round(v).toLocaleString("en-US") + "+"} size={190} color={C3.ink} /></Center>
<Center y={650}><Label at={2.82} size={30}>AMAZON · HOLIDAY HIRES 2026</Label></Center>
<Center y={760}><Label at={5.76} size={34} color={C3.money}>+20% VS LAST YEAR</Label></Center>
<Source>Amazon via Reuters / GeekWire, Oct 2026</Source>
</>) },
  { from: 234.92, to: 237.44, back: null, el: (<>
<Stock n={28} until={2.52} dim={0} />
<Center y={500}><Big at={1.53} size={190} color={C3.ink}>≈100,000</Big></Center>
<Center y={680}><Label at={1.53} size={30}>UPS · SEASONAL WORKERS 2026</Label></Center>
</>) },
  { from: 237.44, to: 251.0, back: null, el: (<>
<Stock n={29} until={13.56} dim={0} />
<StockSwap n={27} at={2.94} until={13.56} dim={0} />
<At x={960} y={220}><Label at={0.1} size={32}>DELIVERY COMPANIES CHARGE EXTRA FOR THE RUSH</Label></At>
<Center y={460}><Tag at={4.98} label="EXTRA · PER PACKAGE" value="PEAK SURCHARGE" color={C3.loss} /></Center>
<Center y={680}><Label at={9.32} size={32}>FROM THE FALL → MID-JANUARY</Label></Center>
<Center y={820}><Label at={12.42} size={32} color={C3.gold}>EVEN DELIVERY HAS A CHRISTMAS MARKUP</Label></Center>
<Source>UPS · FedEx 2025 peak schedules</Source>
</>) },
  { from: 251.0, to: 263.94, back: null, el: (<>
<Stock n={30} until={12.94} dim={-0.1} />
<At x={960} y={200}><Label at={0.1} size={32} color={C3.gold}>EVEN THE SOUNDTRACK IS A BUSINESS</Label></At>
<Center y={360}><Big at={3.38} size={130} color={C3.dim}>ONE SONG · 1994</Big></Center>
<Center y={560}><Big at={6.78} size={170} color={C3.gold}>$2.5–3M</Big></Center>
<Center y={720}><Label at={6.78} size={30}>A YEAR · ESTIMATED ROYALTIES</Label></Center>
<CoinAt x={1640} y={968} h={280} tl={[{ at: 11.04, pose: "wink" }]} />
<Source>Estimates: The Economist, NY Post</Source>
</>) },
  { from: 263.94, to: 270.68, back: null, el: (<>
<Stock n={31} until={6.74} dim={0.1} />
<At x={960} y={220}><Label at={2.64} size={32}>NOT THE STUFF IN THE BOXES…</Label></At>
<Center y={540}><GiftCard at={4.92} /></Center>
</>) },
  { from: 270.68, to: 281.46, tag: [3, "December"], back: null, el: (<>
<Stock n={32} until={10.78} dim={0.05} />
<Center y={380}><Row gap={120}>
  <Col><Big at={4.36} size={120} color={C3.dim}>#1</Big><Label at={4.36} size={26}>CLOTHES · 50%</Label></Col>
  <Col><Big at={0.96} size={120} color={C3.gold}>#2</Big><Label at={0.96} size={26} color={C3.gold}>GIFT CARDS · 43%</Label></Col>
</Row></Center>
<Center y={680}><Counter to={29.1} at={8.02} dur={1.1} fmt={(v) => "$" + v.toFixed(1) + "B"} size={170} color={C3.money} /></Center>
<Center y={830}><Label at={8.02} size={28}>PLANNED GIFT CARD SPENDING · 2025 SEASON</Label></Center>
<Source>NRF, Nov 2025</Source>
</>) },
  { from: 281.46, to: 291.76, back: <><Back n={33} dur={10.3} /></>, el: (<>
<Center y={480}><Row gap={50}>
  <GiftCard at={0.1} w={420} tilt={false} />
  <Col><Big at={3.58} size={90} color={C3.money}>$50 →</Big><Label at={3.58} size={24}>TODAY</Label></Col>
  <Col><IconAt at={5.48} name="building" size={180} color={C3.ink} /><Label at={5.48} size={24}>THE COMPANY</Label></Col>
</Row></Center>
<Center y={820}><Label at={7.72} size={36} color={C3.gold}>OWES YOU: A COFFEE… SOMEDAY?</Label></Center>
</>) },
  { from: 291.76, to: 299.6, back: null, el: (<>
<At x={960} y={220}><Label at={0.05} size={30}>WHAT ACCOUNTANTS CALL IT</Label></At>
<Center y={380}><div style={{ position: "relative" }}><Big at={1.08} size={110} color={C3.dim}>“DEFERRED REVENUE”</Big><Strike at={2.3} w={900} /></div></Center>
<Center y={600}><Big at={4.04} size={130} color={C3.gold}>INTEREST-FREE LOAN</Big></Center>
<Center y={780}><Label at={5.14} size={34}>FROM YOU → TO A CORPORATION</Label></Center>
<CoinAt x={1640} y={968} h={260} tl={[{ at: 4.04, pose: "point" }]} />
</>) },
  { from: 299.6, to: 312.12, back: null, el: (<>
<Stock n={34} until={12.52} dim={0.05} />
<At x={960} y={200}><Title text="Someday never comes." hl={["never"]} size={70} at={0.1} /></At>
<Center y={420}><Label at={3.04} size={34}>STARBUCKS CARDS IN THE U.S. · NO EXPIRATION</Label></Center>
<Center y={600}><Label at={9.24} size={34} color={C3.gold}>BUT SOME MONEY IS NEVER SPENT</Label></Center>
<Center y={780}><Label at={10.88} size={30}>→ BOOKED AS REVENUE</Label></Center>
</>) },
  { from: 312.12, to: 327.78, back: <><Back n={35} dur={15.66} /></>, el: (<>
<Center y={300}><Title text="“Breakage.”" hl={["“Breakage.”"]} size={110} at={0.05} /></Center>
<Center y={540}><Big at={7.6} size={220} color={C3.money}>$200M+</Big></Center>
<Center y={720}><Label at={1.94} size={28}>STARBUCKS · FY2025 · COMPANY-OPERATED STORES</Label></Center>
<Center y={850}><Label at={13.14} size={36} color={C3.gold}>FOR COFFEE NOBODY DRANK</Label></Center>
<CoinAt x={1640} y={968} h={260} tl={[{ at: 9.16, pose: "shocked" }]} />
<Source>Starbucks FY2025 annual report (SEC)</Source>
</>) },
  { from: 327.78, to: 338.94, back: null, el: (<>
<Stock n={3} until={11.16} dim={-0.12} />
<At x={960} y={260}><Label at={0.1} size={32}>ACROSS THE COUNTRY</Label></At>
<Center y={480}><Counter to={27} at={3.86} dur={1.1} fmt={(v) => "$" + Math.round(v) + "B"} size={220} color={C3.gold} /></Center>
<Center y={680}><Label at={5.84} size={30}>IN UNUSED GIFT CARDS · U.S.</Label></Center>
<Center y={820}><Label at={9.8} size={32} color={C3.money}>INCLUDING ONE IN YOUR DRAWER</Label></Center>
<Source>Bankrate survey estimate, 2024</Source>
</>) },
  { from: 338.94, to: 348.43, back: null, el: (<>
<Stock n={37} until={9.49} dim={0.05} />
<At x={960} y={200}><Label at={0.1} size={30}>AND THE PRESENTS THAT DO GET OPENED?</Label></At>
<Center y={420}><NameCard at={3.22} name="JOEL WALDFOGEL" role="ECONOMIST" /></Center>
<Center y={700}><Quote at={6.58} who="HIS QUESTION" size={58}>“What is this gift actually worth to you?”</Quote></Center>
</>) },
  { from: 348.43, to: 355.12, back: <><Back n={36} dur={6.69} /></>, el: (<>
<Center y={500}><Row gap={110}>
  <Tag at={2.56} label="WHAT IT COST" value="$100" color={C3.ink} rotate={-3} />
  <Tag at={4.87} label="WORTH TO YOU" value="≈ $80" color={C3.loss} rotate={3} />
</Row></Center>
<Center y={800}><Label at={4.87} size={32}>ROUGHLY 20% LESS · IN HIS SURVEYS</Label></Center>
</>) },
  { from: 355.12, to: 367.66, back: null, el: (<>
<Stock n={38} until={12.54} dim={0.3} />
<Center y={420}><Counter to={13} at={1.9} dur={1.1} fmt={(v) => "UP TO $" + Math.round(v) + "B"} size={170} color={C3.loss} /></Center>
<Center y={600}><Label at={4.7} size={30}>OF VALUE · GONE IN ONE U.S. CHRISTMAS</Label></Center>
<Center y={780}><Label at={7.78} size={34} color={C3.gold}>NOT STOLEN · NOT SPENT · JUST GONE</Label></Center>
<Source>Waldfogel's estimate · Scroogenomics / AER 1993</Source>
</>) },
  { from: 367.66, to: 376.16, back: null, el: (<>
<Stock n={39} until={8.5} dim={0.05} />
<Center y={420}><Label at={0.2} size={34}>OTHER ECONOMISTS: A GIFT ISN'T ONLY MONEY</Label></Center>
<Center y={500}><Label at={4.36} size={28} color={C3.money}>AND THEY HAVE A POINT</Label></Center>
<Center y={660}><Big at={6.34} size={110} color={C3.gold}>SWEATER ≠ INVESTMENT</Big></Center>
<CoinAt x={1640} y={968} h={260} tl={[{ at: 6.34, pose: "shrug" }]} />
</>) },
  { from: 376.16, to: 386.5, back: <><Back n={40} dur={10.34} /></>, el: (<>
<Subscribe at={0.82} />
<CoinAt x={1640} y={968} h={340} tl={[{ at: 0.82, pose: "point" }, { at: 5.82, pose: "celebrate" }, { at: 8.6, pose: "wink" }]} />
</>) },
  { from: 386.5, to: 401.38, tag: [4, "December 26"], back: null, el: (<>
<Stock n={41} until={14.88} dim={0.22} />
<StockSwap n={8} at={7.74} until={14.88} dim={0.2} />
<Center y={400}><Big at={4.52} size={190} color={C3.loss}>17%</Big></Center>
<Center y={560}><Label at={4.52} size={28}>OF HOLIDAY SALES EXPECTED BACK · 2025</Label></Center>
<Center y={740}><Big at={10.96} size={120} color={C3.ink}>≈ $170B</Big></Center>
<Center y={860}><Label at={13.26} size={28}>TRAVELING BACKWARDS</Label></Center>
<Source>NRF / Happy Returns, Oct 2025</Source>
</>) },
  { from: 401.38, to: 414.56, back: null, el: (<>
<Stock n={42} until={13.18} dim={0.05} />
<StockSwap n={43} at={7.36} until={13.18} dim={0} />
<Center y={360}><Big at={0.44} size={170} color={C3.loss}>9%</Big></Center>
<Center y={500}><Label at={0.44} size={28}>OF ALL RETURNS ARE FRAUDULENT</Label></Center>
<Center y={600}><Label at={4.72} size={26}>RETAILERS EVEN HAVE A NAME FOR IT</Label></Center>
<Center y={720}><Big at={6.42} size={120} color={C3.gold}>“BOX OF ROCKS”</Big></Center>
<CoinAt x={1640} y={968} h={260} tl={[{ at: 6.72, pose: "shocked" }]} />
<At x={960} y={860}><Label at={11.84} size={32} color={C3.loss}>MERRY CHRISTMAS</Label></At>
<Source>NRF / Happy Returns, Oct 2025</Source>
</>) },
  { from: 414.56, to: 422.24, back: <><Back n={6} dur={7.68} dim={-0.2} /></>, el: (<>
<At x={960} y={260}><Title text="All of that is small change." hl={["small"]} size={64} at={0.1} /></At>
<Center y={430}><Title text="The biggest Christmas money" hl={["biggest"]} size={86} at={4.26} /></Center>
<Center y={580}><Title text="isn't made in December." hl={["December."]} size={86} at={5.36} /></Center>
</>) },
  { from: 422.24, to: 426.94, tag: [5, "January"], back: null, el: (<>
<Stock n={44} until={4.7} dim={0.05} />
<Center y={560}><Statement at={1.38} due={1.38 + 0.4} min={3.5} /></Center>
</>) },
  { from: 426.94, to: 444.32, back: <><Back n={47} dur={17.38} /></>, el: (<>
<At x={960} y={150}><Label at={3.12} size={30}>U.S. CREDIT CARD BALANCES</Label></At>
<At x={1500} y={300}><Big at={7.12} size={110} color={C3.gold}>$1.28T</Big></At>
<At x={1500} y={390}><Label at={7.12} size={26} color={C3.gold}>RECORD</Label></At>
<At x={760} y={620}><DebtBar up={4.76} down={11.24} rest={13.88} /></At>
<Source>New York Fed · Household Debt and Credit, Q4 2025 / Q1 2026</Source>
</>) },
  { from: 444.32, to: 455.06, back: null, el: (<>
<Stock n={46} until={10.74} dim={0.05} />
<Center y={420}><Label at={1.88} size={34}>BUY NOW, PAY LATER</Label></Center>
<Center y={880}><Label at={3.8} size={28} color={C3.ink}>SPLIT INTO SMALL INSTALLMENTS</Label></Center>
<Center y={600}><Counter to={20} at={7.1} dur={1.0} fmt={(v) => "$" + Math.round(v) + "B"} size={200} color={C3.loss} /></Center>
<Center y={780}><Label at={7.1} size={28}>ONLINE HOLIDAY SPENDING · 2025 · A RECORD</Label></Center>
<Source>Adobe Analytics, Jan 2026</Source>
</>) },
  { from: 455.06, to: 466.16, back: <><Back n={7} dur={11.1} /></>, el: (<>
<Center y={330}><Big at={1.12} size={170} color={C3.loss}>37%</Big></Center>
<Center y={470}><Label at={1.12} size={28}>OF AMERICANS TOOK ON HOLIDAY DEBT</Label></Center>
<Center y={650}><People at={4.78} n={4} hl={4.78 + 0.3} /></Center>
<Center y={790}><Label at={4.78} size={28}>4 IN 10 OF THEM · STILL PAYING THE CHRISTMAS BEFORE</Label></Center>
<Center y={880}><Label at={9.88} size={34} color={C3.gold}>CHRISTMAS IS A SUBSCRIPTION</Label></Center>
<Source>LendingTree survey, Dec 2025</Source>
</>) },
  { from: 466.16, to: 471.98, back: <><Back n={31} dur={5.82} /></>, el: (<>
<Center y={500}><Tag at={3.46} label="AVERAGE APR · CARDS WITH A BALANCE" value="22.36%" color={C3.loss} /></Center>
<Source>Federal Reserve G.19 · Aug 2026</Source>
</>) },
  { from: 471.98, to: 479.86, back: null, el: (<>
<Stock n={45} until={7.88} dim={0.22} />
<Center y={320}><Title text="Jenna's math." hl={["math."]} size={80} at={0.05} /></Center>
<Center y={480}><Big at={2.26} size={150} color={C3.ink}>$1,223</Big></Center>
<Center y={640}><Big at={4.59} size={120} color={C3.loss}>× 22%</Big></Center>
<Center y={800}><Label at={5.76} size={36} color={C3.gold}>MINIMUM PAYMENTS ONLY</Label></Center>
</>) },
  { from: 479.86, to: 488.2, back: <><Back n={48} dur={8.34} /></>, el: (<>
<At x={960} y={160}><Big at={0.36} size={110} color={C3.loss}>91 PAYMENTS</Big></At>
<Center y={480}><PayStrip at={0.36} dur={2.6} /></Center>
<Center y={760}><Label at={2.72} size={34}>≈ 7.5 YEARS</Label></Center>
<Center y={880}><Big at={4.4} size={110} color={C3.gold}>≈ $1,200 INTEREST</Big></Center>
<At x={960} y={1000}><Label at={0.36} size={24} color={C3.ink}>*OUR CALCULATION: INTEREST + 1% OF BALANCE · $25 MINIMUM · 22.36% APR · NO NEW PURCHASES</Label></At>
</>) },
  { from: 488.2, to: 494.36, back: null, el: (<>
<Center y={500}><Row gap={90}>
  <Receipt at={0.1} title="THE GIFTS" value="$1,223" />
  <Receipt at={1.88} title="THE INTEREST" value="≈$1,200" color="#b8182b" />
</Row></Center>
<Center y={860}><Label at={4.32} size={36} color={C3.gold}>THE SECOND TIME → THE BANK</Label></Center>
</>) },
  { from: 494.36, to: 509.16, back: null, el: (<>
<Stock n={9} until={14.8} dim={0.08} />
<StockSwap n={5} at={7.26} until={14.8} dim={0.2} />
<Center y={260}><Label at={1.4} size={28} color={C3.money}>MOST PEOPLE DON'T</Label></Center>
<Center y={420}><Big at={5.3} size={160} color={C3.ink}>≈ 1 IN 5</Big></Center>
<Center y={580}><Label at={5.3} size={28}>HOLIDAY BORROWERS PAID JUST THE MINIMUM</Label></Center>
<Center y={690}><Label at={9.22} size={28}>BUT THE SYSTEM ALLOWS IT</Label></Center>
<Center y={790}><Label at={11.68} size={34} color={C3.gold}>WHOEVER LENDS THE TIME GETS PAID</Label></Center>
<CoinAt x={1640} y={968} h={260} tl={[{ at: 11.68, pose: "point" }]} />
<Source>LendingTree holiday debt survey (2023)</Source>
</>) },
  { from: 509.16, to: 519.72, tag: [6, "December 1909"], back: null, el: (<>
<Stock n={50} until={10.56} dim={0.1} />
<Center y={360}><Label at={1.86} size={32} color={C3.gold}>CARLISLE, PENNSYLVANIA · 1909</Label></Center>
<Center y={580}><NameCard at={6.24} name="MERKEL LANDIS" role="TREASURER · CARLISLE TRUST CO." /></Center>
<Center y={820}><Big at={9.82} size={120} color={C3.money}>THE CHRISTMAS CLUB</Big></Center>
<Source>Rutgers NJ Digital Newspaper Project · Library of Congress</Source>
</>) },
  { from: 519.72, to: 530.5, back: null, el: (<>
<Stock n={49} until={10.78} dim={0.3} />
<StockSwap n={12} at={3.17} until={10.78} dim={0.2} />
<Center y={420}><Label at={0.2} size={38} color={C3.ink}>SMALL DEPOSITS · EVERY WEEK · ALL YEAR</Label></Center>
<Center y={620}><Label at={6.14} size={36} color={C3.money}>PAID BACK JUST BEFORE CHRISTMAS</Label></Center>
</>) },
  { from: 530.5, to: 542.52, back: <><Back n={24} dur={12.02} /></>, el: (<>
<Center y={520}><TwoEras left={0.1} right={5.88} /></Center>
<CoinAt x={1640} y={968} h={240} tl={[{ at: 3.76, pose: "neutral" }, { at: 9.04, pose: "shocked" }]} />
</>) },
  { from: 542.52, to: 547.48, back: <><Back n={36} dur={4.96} /></>, el: (<>
<Center y={430}><Title text="Same holiday. Same presents." hl={["Same"]} size={86} at={0.05} /></Center>
<Center y={640}><Label at={2.52} size={38} color={C3.gold}>THE MONEY FLOWS THE OTHER WAY</Label></Center>
</>) },
  { from: 547.48, to: 555.8, back: null, el: (<>
<Stock n={51} until={8.32} dim={0.1} />
<Center y={380}><Row gap={70}>
  <div style={{ position: "relative" }}><Label at={2.92} size={36}>TOYS</Label><Strike at={2.92 + 0.4} w={150} /></div>
  <div style={{ position: "relative" }}><Label at={4.1} size={36}>TREES</Label><Strike at={4.1 + 0.4} w={150} /></div>
  <div style={{ position: "relative" }}><Label at={5.8} size={36}>$1 TRILLION</Label><Strike at={5.8 + 0.4} w={260} /></div>
</Row></Center>
<Center y={620}><Big at={7.2} size={240} color={C3.gold}>TIME.</Big></Center>
</>) },
  { from: 555.8, to: 568.34, back: <><Back n={10} dur={12.54} dim={0.1} /></>, el: (<>
<Center y={280}><Label at={0.1} size={38}>THE GAP BETWEEN THE GIFT AND THE PAYMENT</Label></Center>
<Center y={560}><Row gap={120}>
  <Col><IconAt at={3.6} name="receipt" size={200} color={C3.money} /><Label at={3.6} size={32} color={C3.money}>GIFT CARD: YOU → STORE</Label></Col>
  <IconAt at={0.3} name="clock" size={220} color={C3.gold} />
  <Col><IconAt at={6.64} name="card" size={200} color={C3.loss} /><Label at={6.64} size={32} color={C3.loss}>CREDIT CARD: BANK → YOU</Label></Col>
</Row></Center>
<Center y={820}><Label at={10.28} size={36} color={C3.gold}>SOMEONE GETS PAID FOR THE WAIT</Label></Center>
</>) },
  { from: 568.34, to: 573.54, back: null, el: (<>
<Stock n={2} until={5.2} dim={0} />
<StockSwap n={53} at={4.0} until={5.2} dim={0} />
<Top at={0.05}>JANUARY 2 · AGAIN</Top>
</>) },
  { from: 573.54, to: 580.5, back: null, el: (<>
<Stock n={3} until={6.96} dim={0.08} />
<Center y={480}><GiftCard at={0.84} /></Center>
<Center y={850}><Label at={4.42} size={34} color={C3.gold}>THE MOST PROFITABLE PRESENT IN THE HOUSE</Label></Center>
</>) },
  { from: 580.5, to: 588.94, back: <><Back n={52} dur={8.44} dim={0.15} /></>, el: (<>
<Center y={540}><Col gap={46}>
  <Row gap={30}><IconAt at={0.05} name="calendar" size={130} color={C3.gold} /><Label at={0.05} size={42}>THANKSGIVING · MOVED FOR SHOPPING</Label></Row>
  <Row gap={30}><IconAt at={2.34} name="receipt" size={130} color={C3.gold} /><Label at={2.34} size={42}>RUDOLPH · A STORE GIVEAWAY</Label></Row>
  <Row gap={30}><IconAt at={4.46} name="card" size={130} color={C3.gold} /><Label at={4.46} size={42}>YOUR GIFT CARD · A FORGOTTEN LOAN</Label></Row>
</Col></Center>
</>) },
  { from: 588.94, to: 594.02, back: <><Back n={55} dur={5.08} /></>, el: (<>
<Center y={440}><Title text="Still paying for last Christmas?" hl={["paying"]} size={86} at={1.32} /></Center>
<Center y={620}><Label at={4.2} size={34} color={C3.gold}>TELL ME IN THE COMMENTS</Label></Center>
<CoinAt x={1640} y={968} h={300} tl={[{ at: 0.1, pose: "suspicious" }, { at: 4.2, pose: "point" }]} />
</>) },
  { from: 594.02, to: 603.36, back: null, el: (<>
<EndCard at={0.1} />
</>) },
];

// звуковые эффекты только на смысловые события (секунды ролика)
const SFX: [number, string][] = [[7.94, "pop"], [17.42, "swoosh"], [30.72, "cash"], [41.14, "whoosh"], [44.94, "click"], [54.2, "cash"], [69.46, "ding"], [86.36, "tick"], [89.48, "thud"], [116.28, "impact"], [160.36, "sparkle"], [163.24, "tick"], [167.66, "ding"], [191.6, "buzz"], [208.6, "ding"], [229.78, "tick"], [268.86, "sparkle"], [319.72, "cash"], [408.1, "thud"], [423.62, "swoosh"], [431.7, "rise"], [474.24, "click"], [476.57, "click"], [484.26, "cash"], [490.08, "ding"], [536.38, "swoosh"], [554.68, "impact"], [577.96, "sparkle"]];

export const Ep05Christmas: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C3.bgEdge }}>
      <Bg />
      <Audio src={staticFile("audio/ep05-voiceover.mp3")} />
      <Audio src={staticFile("audio/ep03-music.mp3")} volume={(f) => interpolate(f, [0, 30, EP05_DURATION_SEC * fps - 90, EP05_DURATION_SEC * fps], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />
      {SFX.map(([t, n], i) => (
        <Sequence key={"s" + i} from={Math.round(t * fps)} durationInFrames={45}><Audio src={staticFile(`sfx/${n}.wav`)} volume={0.35} /></Sequence>
      ))}
      {BEATS.map((b, i) => (
        <Sequence key={i} from={Math.round(b.from * fps)} durationInFrames={Math.max(1, Math.round((b.to - b.from) * fps))} name={`Beat ${i + 1}`}>
          {b.back}
          <Scene dur={b.to - b.from}>{b.el}</Scene>
          {b.tag && <Chapter n={b.tag[0]} title={b.tag[1]} />}
        </Sequence>
      ))}
      <Bug />
    </AbsoluteFill>
  );
};
