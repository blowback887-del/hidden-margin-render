import React from "react";
import { AbsoluteFill, Audio, Loop, OffthreadVideo, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { C3, FONT_NUM } from "../brand/theme";
import { At, Bar, Bg, Bug, Callout, Chapter, Coin, Counter, Icon, IconName, In, Kicker, Num, Pose, Scene, Source, Stat, Title, useT } from "../brand/hm";

// ===================================================================
// Ep04 «Costco: who really pays for the $1.50 hot dog» — история одного предмета, 5 глав.
// Сгенерировано build.py (у Claude) из сценария + пословной расшифровки ep04-costco-words.json.
// Правила с 02–04.11.2026: живые кадры ~80% экрана; наезд только у фона; текст неподвижен;
// логотипы брендов в стоке не размываем (решение Павла 04.11.2026).
// ===================================================================

export const EP04_DURATION_SEC = 535.02;

const BROLL: Record<number, string> = {"1": "01-american-flag-atop-costco-wholesale-stor", "2": "02-drone-footage-of-a-costco-wholesaler-sto", "3": "03-aerial-view-of-busy-retail-parking-lot", "4": "04-close-up-of-holding-a-hot-dog-outdoors", "5": "05-person-grilling-hot-dogs", "6": "06-hot-dog-sandwiches", "7": "07-supermarket-aisle-with-shoppers-in-new-z", "8": "08-vibrant-indoor-food-court-in-busy-shoppi", "9": "09-aerial-view-of-seattle-skyline-on-a-clea", "10": "10-taking-notes", "11": "11-street-food-vendor-serving-hotdogs-in-ur", "12": "12-expert-butcher-slicing-fresh-beef-meat", "13": "13-food-on-conveyor-belt-in-factory", "14": "14-packaged-goods-in-industrial-line", "15": "15-street-food-delights-rotisserie-chicken-", "16": "16-chicken-rotisserie-for-thanksgiving-dinn", "17": "17-expansive-poultry-farm-with-numerous-chi", "18": "18-people-shopping-at-a-supermarket", "19": "19-spacious-modern-retail-store-interior", "20": "20-a-kid-having-fun-while-in-front-of-a-big", "21": "21-elegant-display-of-gold-jewelry-in-store", "22": "22-assorted-dried-fruits-in-market-stall-di", "23": "23-people-going-inside-a-store-with-automat", "24": "24-a-shopping-cart-roaming-the-supermarket", "25": "25-shopping-cart-journey-through-grocery-ai", "26": "26-tomatoes-and-a-ketchup-bottle", "27": "27-shopping-aisle-perspective-on-supermarke", "28": "28-variety-of-foods-in-display-at-a-superma", "29": "29-people-at-the-cashier-counter", "30": "30-close-up-shot-of-dollar-bills", "31": "31-people-holding-and-counting-dollar-bills", "32": "32-man-holding-a-credit-card", "33": "33-paying-with-card-on-card-reader", "34": "34-a-person-marking-on-calendar", "35": "35-couple-pushing-the-shopping-cart-in-the-", "36": "36-person-holding-payment-terminal-and-rece", "37": "37-close-up-of-cola-drink-in-a-glass-with-i", "38": "38-warehouse-forklift-moving-through-storag", "39": "39-forklift-in-a-warehouse", "40": "40-warehouse-loading-with-forklift-and-truc", "41": "41-aerial-shot-of-interior-of-the-warehouse", "42": "42-a-man-looking-at-the-invoice-while-on-th", "43": "43-close-up-footage-of-a-vault", "44": "44-close-up-shot-of-flying-dollar-bills", "45": "45-an-empty-gym", "46": "46-a-person-walking-on-a-treadmill-in-a-gym", "47": "47-efficient-grocery-checkout-in-a-supermar", "48": "48-a-man-dragging-a-pallet-cart"};
const LEN: Record<number, number> = {"1": 3.4, "2": 10.0, "3": 10.0, "4": 10.0, "5": 10.0, "6": 2.23, "7": 10.0, "8": 5.17, "9": 10.0, "10": 7.43, "11": 10.0, "12": 10.0, "13": 7.67, "14": 10.0, "15": 6.9, "16": 10.0, "17": 10.0, "18": 10.0, "19": 8.13, "20": 4.9, "21": 6.7, "22": 10.0, "23": 10.0, "24": 10.0, "25": 10.0, "26": 10.0, "27": 10.0, "28": 6.53, "29": 8.43, "30": 2.0, "31": 10.0, "32": 10.0, "33": 10.0, "34": 10.0, "35": 10.0, "36": 6.6, "37": 10.0, "38": 10.0, "39": 10.0, "40": 10.0, "41": 10.0, "42": 5.8, "43": 8.33, "44": 10.0, "45": 10.0, "46": 7.33, "47": 10.0, "48": 9.4};
const clip = (n: number) => staticFile(`broll/ep04/${BROLL[n]}.mp4`);

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

/** «Взрыв»: несколько живых кадров подряд, каждый со своего слова */
const Burst: React.FC<{ clips: [number, number][] }> = ({ clips }) => {
  const { t } = useT();
  let cur = clips[0][0];
  let since = 0;
  for (const [n, at] of clips) if (t >= at) { cur = n; since = t - at; }
  return (
    <AbsoluteFill>
      {clips.map(([n]) => (
        <AbsoluteFill key={n} style={{ opacity: n === cur ? 1 : 0 }}>
          <Vid n={n} need={4} rate={1} style={{ width: "100%", height: "100%", objectFit: "cover", scale: String(1.04 + 0.05 * Math.min(1, since / 2.5)), translate: `${-12 * Math.min(1, since / 2.5)}px 0` }} />
        </AbsoluteFill>
      ))}
      <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(7,10,11,.15) 0%, rgba(7,10,11,.35) 60%, rgba(7,10,11,.8) 100%)" }} />
    </AbsoluteFill>
  );
};

/** Два живых кадра рядом (сравнение) */
const Split: React.FC<{ left: number; right: number }> = ({ left, right }) => (
  <AbsoluteFill style={{ flexDirection: "row" }}>
    {[left, right].map((n, i) => (
      <div key={n} style={{ width: 960, height: 1080, overflow: "hidden", position: "relative", borderLeft: i ? `3px solid ${C3.gold}` : undefined }}>
        <Vid n={n} need={12} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(7,10,11,.35), rgba(7,10,11,.85))" }} />
      </div>
    ))}
  </AbsoluteFill>
);

/** Полоса, у которой цифра появляется на своём слове (v), а не вместе с полосой */
const BarV: React.FC<{ at: number; v?: number; w: number; label: string; value: string; color: string; h?: number }> = ({ at, v, w, label, value, color, h = 64 }) => {
  const { p } = useT();
  const k = p(at, at + 0.9);
  const vv = v ?? at + 0.5;
  return (
    <div style={{ opacity: p(at - 0.02, at + 0.2) }}>
      <Kicker size={26}>{label}</Kicker>
      <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 12 }}>
        <div style={{ width: w * k, height: h, borderRadius: h / 2, background: `linear-gradient(90deg, ${color}55, ${color})`, boxShadow: `0 0 40px ${color}44` }} />
        <div style={{ opacity: p(vv, vv + 0.35) }}><Num color={color} size={h * 1.25} glow={false}>{value}</Num></div>
      </div>
    </div>
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

/** Главный предмет ролика: ценник хот-дога $1.50 */
const HotDogTag: React.FC<{ at: number; small?: boolean; loss?: number; out?: number }> = ({ at, small, loss, out }) => {
  const { p } = useT();
  const s = small ? 0.62 : 1;
  const l = loss !== undefined ? p(loss, loss + 0.4) : 0;
  const o = out !== undefined ? p(out - 0.3, out) : 0;
  return (
    <div style={{ opacity: 1 - o }}>
      <In at={at} from="zoom">
        <div style={{ display: "flex", alignItems: "center", gap: 40 * s, padding: `${30 * s}px ${56 * s}px`, borderRadius: 30 * s, background: "rgba(13,32,24,.9)", boxShadow: `inset 0 0 0 3px ${C3.gold}aa, 0 40px 80px rgba(0,0,0,.5), 0 0 80px ${C3.gold}33` }}>
          <Icon name="hotdog" size={190 * s} color={C3.gold} />
          <div>
            <Kicker size={30 * s} color={`${C3.gold}cc`}>HOT DOG + SODA</Kicker>
            <Num color={C3.gold} size={190 * s}>$1.50</Num>
          </div>
          {loss !== undefined && <div style={{ opacity: l }}><Num color={C3.loss} size={150 * s}>−</Num></div>}
        </div>
      </In>
    </div>
  );
};

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

const MenuBoard: React.FC<{ at: number; lock: number }> = ({ at, lock }) => (
  <In at={at} from="zoom">
    <div style={{ position: "relative", width: 760, padding: "34px 48px", borderRadius: 18, background: "#0d1a15", boxShadow: `inset 0 0 0 3px ${C3.line}, 0 40px 80px rgba(0,0,0,.5)` }}>
      <Kicker size={26} color={C3.dim}>FOOD COURT · MENU</Kicker>
      {[["HOT DOG + SODA", "$1.50", C3.gold], ["PIZZA SLICE", "—", C3.dim], ["SUNDAE", "—", C3.dim]].map(([a, b, c]) => (
        <div key={a} style={{ display: "flex", justifyContent: "space-between", marginTop: 18, fontFamily: FONT_NUM, fontSize: 48, fontWeight: 300, color: c as string }}><span>{a}</span><span>{b}</span></div>
      ))}
      <div style={{ position: "absolute", right: -60, top: 40 }}><IconAt at={lock} name="lock" size={130} color={C3.money} /></div>
    </div>
  </In>
);

/** CUTAWAY: план склада сверху — путь к курице мимо отделов */
const FloorPlan: React.FC<{ at: number; e: number; j: number; s: number; c: number }> = ({ at, e, j, s, c }) => {
  const { p } = useT();
  const prog = p(e - 0.3, Math.max(s + 1.2, e + 1));
  const zones: [string, number, number, number, IconName][] = [["ELECTRONICS", 520, 360, e, "phone"], ["JEWELRY", 860, 580, j, "bag"], ["BULK SNACKS", 1180, 360, s, "cart"]];
  return (
    <>
      <At x={960} y={130}><In at={at} from="down"><Kicker>CUTAWAY · THE LONG WALK TO THE CHICKEN</Kicker></In></At>
      <svg width={1920} height={1080} style={{ position: "absolute", inset: 0, opacity: p(at, at + 0.5) }}>
        <rect x={260} y={210} width={1400} height={700} rx={24} fill="rgba(13,32,24,.55)" stroke={C3.line} strokeWidth={3} />
        {Array.from({ length: 6 }).map((_, i) => <rect key={i} x={360 + i * 210} y={460} width={120} height={20} rx={6} fill="rgba(234,255,243,.08)" />)}
        <polyline points="330,860 520,700 860,780 1180,700 1540,330" fill="none" stroke={C3.gold} strokeWidth={6} strokeDasharray="14 14" pathLength={1} style={{ strokeDasharray: `${prog} 1` }} />
        <circle cx={330} cy={860} r={14} fill={C3.money} />
      </svg>
      <At x={330} y={930}><Label at={at} size={24} color={C3.money}>ENTRANCE</Label></At>
      {zones.map(([l, x, y, t, ic]) => <At key={l} x={x} y={y}><Col gap={6}><IconAt at={t} name={ic} size={110} color={C3.ink} /><Label at={t} size={24}>{l}</Label></Col></At>)}
      <At x={1540} y={300}><Col gap={6}><IconAt at={c} name="chicken" size={130} color={C3.gold} /><Label at={c} size={26} color={C3.gold}>$4.99 CHICKEN</Label><Label at={c} size={22} color={C3.gold}>AT THE VERY BACK</Label></Col></At>
    </>
  );
};

/** Водопад: продажи → минус товары → минус расходы → остаток */
const Waterfall: React.FC<{ sales: number; fees: number; goods: number; costs: number; wh: number }> = ({ sales, fees, goods, costs, wh }) => (
  <>
    <At x={960} y={130}><In at={0.05} from="down"><Kicker>THE WHOLE STORE · ONE YEAR</Kicker></In></At>
    <At x={300} y={560} anchor="l"><Col gap={44} align="flex-start">
      <Bar at={sales} w={1000} label="SALES" value="$297B" color={C3.blue} />
      <Bar at={goods} w={889} label="− WHAT COSTCO PAID FOR THE GOODS" value="$264B" color={C3.loss} />
      <Bar at={costs} w={92} label="− WAGES, RENT, ELECTRICITY…" value="$27B" color={C3.loss} />
    </Col></At>
    <At x={1560} y={300}><Label at={fees} size={24} color={C3.gold}>MEMBERSHIP FEES: SET ASIDE</Label></At>
    <At x={1560} y={900}><Row gap={14}><IconAt at={wh} name="warehouse" size={80} color={C3.ink} /><Label at={wh} size={26}>939 WAREHOUSES</Label></Row></At>
  </>
);

/** Купюра $100, от которой остаётся ≈ $2 */
const HundredBill: React.FC<{ at: number; cut: number }> = ({ at, cut }) => {
  const { p } = useT();
  const k = p(cut, cut + 1.0);
  return (
    <In at={at} from="zoom">
      <div style={{ position: "relative", width: 900, height: 380 }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: 18, background: "linear-gradient(135deg,#1e3d2d,#12261c)", boxShadow: `inset 0 0 0 3px ${C3.money}66`, opacity: 1 - 0.8 * k, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Num color={C3.money} size={200} glow={false}>$100</Num>
        </div>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 18 + 0 * k, borderRadius: 6, background: C3.gold, boxShadow: `0 0 40px ${C3.gold}`, opacity: k }} />
        <div style={{ position: "absolute", right: 60, top: -40, opacity: k }}><Num color={C3.gold} size={150}>≈ $2</Num></div>
      </div>
    </In>
  );
};

const Subscribe: React.FC<{ at: number }> = ({ at }) => (
  <At x={760} y={540}><In at={at} from="zoom">
    <Col gap={26}>
      <Title text="Like this kind of math?" hl={["math?"]} size={84} at={at} />
      <div style={{ padding: "24px 70px", borderRadius: 60, background: C3.loss, boxShadow: `0 0 50px ${C3.loss}66`, fontFamily: FONT_NUM, fontWeight: 700, fontSize: 48, letterSpacing: "0.12em", color: "#fff" }}>SUBSCRIBE</div>
      <Kicker size={26}>A BUSINESS YOU USE, PULLED APART — EVERY WEEK</Kicker>
    </Col>
  </In></At>
);

/** Членская карта (стилизованная, без логотипа): глянцевая, наклонённая — 3D-акцент */
const MemberCard: React.FC<{ at: number; price?: string }> = ({ at, price }) => {
  const { t, p } = useT();
  const k = p(at, at + 0.9);
  const sway = Math.sin((t - at) * 0.9) * 6 * k;
  return (
    <div style={{ perspective: 1400, opacity: p(at - 0.02, at + 0.25) }}>
      <div style={{ width: 720, height: 450, borderRadius: 34, transform: `rotateX(${18 - 8 * k}deg) rotateY(${-28 + 18 * k + sway}deg) scale(${0.7 + 0.3 * k})`, background: "linear-gradient(135deg, #f7e3a1 0%, #d9b24c 35%, #a87b1d 60%, #f1d27a 100%)", boxShadow: "0 60px 120px rgba(0,0,0,.6), 0 0 90px rgba(255,210,63,.35), inset 0 0 0 2px rgba(255,255,255,.4)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(105deg, transparent ${20 + 60 * k}%, rgba(255,255,255,.55) ${28 + 60 * k}%, transparent ${36 + 60 * k}%)` }} />
        <div style={{ position: "absolute", left: 50, top: 50, fontFamily: FONT_NUM, fontWeight: 700, fontSize: 44, letterSpacing: "0.25em", color: "#3a2a05" }}>MEMBER</div>
        <div style={{ position: "absolute", left: 50, top: 150, width: 110, height: 80, borderRadius: 12, background: "linear-gradient(135deg,#e9e3cf,#9c8a55)" }} />
        <div style={{ position: "absolute", left: 50, bottom: 50, fontFamily: "'Courier New', monospace", fontSize: 34, color: "#3a2a05", letterSpacing: "0.2em" }}>•••• •••• 2026</div>
        {price && <div style={{ position: "absolute", right: 50, bottom: 40, fontFamily: FONT_NUM, fontWeight: 300, fontSize: 96, color: "#3a2a05" }}>{price}</div>}
      </div>
    </div>
  );
};

/** Вертикальный столбик */
const VBar: React.FC<{ at: number; h: number; value: string; label: string; color: string; w?: number }> = ({ at, h, value, label, color, w = 170 }) => {
  const { p } = useT();
  const k = p(at, at + 0.9);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, opacity: p(at - 0.02, at + 0.2) }}>
      <div style={{ opacity: p(at + 0.5, at + 0.9) }}><Num color={color} size={72} glow={false}>{value}</Num></div>
      <div style={{ width: w, height: h * k, borderRadius: 14, background: `linear-gradient(0deg, ${color}44, ${color})`, boxShadow: `0 0 40px ${color}33` }} />
      <Kicker size={26}>{label}</Kicker>
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

/** 43 хот-дога = одна карта */
const HotDogGrid: React.FC<{ at: number }> = ({ at }) => {
  const { p } = useT();
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(11, 90px)", gap: 14 }}>
      {Array.from({ length: 43 }).map((_, i) => {
        const k = p(at + i * 0.035, at + i * 0.035 + 0.3);
        return <div key={i} style={{ opacity: k, scale: String(0.6 + 0.4 * k) }}><Icon name="hotdog" size={90} color={C3.gold} sw={2.6} /></div>;
      })}
    </div>
  );
};

/** CUTAWAY 2: машина Costco — 4 звена по кругу */
const Machine: React.FC<{ a: number; b: number; c: number; d: number }> = ({ a, b, c, d }) => {
  const { p } = useT();
  const R = 300;
  const nodes: [number, string, IconName, number, string][] = [[-90, "THE PROMISE · HOT DOG", "hotdog", a, C3.gold], [0, "TINY MARKUPS", "percent", b, C3.blue], [90, "SUPPLIERS’ MONEY", "truck", c, C3.blue], [180, "THE CARD ≈ HALF THE PROFIT", "card", d, C3.money]];
  return (
    <>
      <At x={960} y={110}><In at={0.05} from="down"><Kicker>CUTAWAY · THE COSTCO MACHINE</Kicker></In></At>
      <svg width={1920} height={1080} style={{ position: "absolute", inset: 0 }}>
        <circle cx={960} cy={570} r={R} fill="none" stroke="rgba(255,210,63,.45)" strokeWidth={4} strokeDasharray={`${2 * Math.PI * R * p(a, d + 0.8)} 4000`} style={{ rotate: "-90deg", transformOrigin: "960px 570px" }} />
      </svg>
      {nodes.map(([ang, l, ic, t, col]) => { const r = (ang * Math.PI) / 180; return (
        <At key={l} x={960 + R * Math.cos(r)} y={570 + R * Math.sin(r)}><In at={t} from="zoom"><Col gap={8}>
          <div style={{ width: 150, height: 150, borderRadius: 75, background: "rgba(13,32,24,.95)", boxShadow: `inset 0 0 0 2px ${col}99`, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={ic} size={90} color={col} /></div>
          <div style={{ padding: "6px 14px", borderRadius: 10, background: "rgba(7,10,11,.75)" }}><Kicker size={28} color={col}>{l}</Kicker></div>
        </Col></In></At>); })}
    </>
  );
};

/** Финал: хот-дог превращается в чек за обещание */
const PromiseReceipt: React.FC<{ at: number }> = ({ at }) => {
  const { p } = useT();
  return (
    <In at={at} from="up">
      <div style={{ width: 820, padding: "54px 64px", borderRadius: 10, background: "#f2efe6", color: "#0b1210", fontFamily: "'Courier New', monospace", fontSize: 44, boxShadow: "0 40px 80px rgba(0,0,0,.5)" }}>
        <div style={{ textAlign: "center", fontWeight: 700, letterSpacing: "0.2em" }}>RECEIPT</div>
        <div style={{ marginTop: 26, display: "flex", justifyContent: "space-between" }}><span>Hot dog + soda</span><span>$1.50</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#9a7b00", opacity: p(at + 1.2, at + 1.8) }}><span>A promise</span><span>PAID</span></div>
        <div style={{ marginTop: 22, borderTop: "2px dashed #0b1210", paddingTop: 18, textAlign: "center", opacity: p(at + 1.8, at + 2.4) }}>paid in advance · at the door</div>
      </div>
    </In>
  );
};

const EndCard: React.FC<{ at: number }> = ({ at }) => (
  <>
    <At x={960} y={130}><In at={at} from="down"><Kicker>NEXT · THE OPPOSITE BUSINESS MODEL</Kicker></In></At>
    <At x={720} y={540}>
      <In at={at + 0.2} from="zoom">
        <div style={{ width: 820, height: 461, borderRadius: 24, background: "linear-gradient(160deg,#1d3a2e,#0c1814)", boxShadow: "0 50px 90px rgba(0,0,0,.55), inset 0 0 0 2px rgba(255,210,63,.4)", display: "flex", alignItems: "center", justifyContent: "center", gap: 30 }}>
          <Icon name="gym" size={220} color={C3.gold} />
          <Col align="flex-start" gap={8}><Kicker size={26} color={C3.gold}>HIDDEN MARGIN · EP. 2</Kicker><div style={{ fontFamily: FONT_NUM, fontWeight: 300, fontSize: 48, color: C3.ink, lineHeight: 1.1, width: 400 }}>How Gyms Make Money at Every Level</div></Col>
        </div>
      </In>
    </At>
    <At x={1560} y={780}><Coin enter={at + 0.6} h={360} timeline={[{ at: at + 0.6, pose: "point" }]} flip /></At>
  </>
);

// ---------- сцены ----------
type Beat = { from: number; to: number; tag?: [number, string]; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 5.14, back: null, el: (<>
<Stock n={4} until={5.14} dim={-0.3} />
<Center y={560}><HotDogTag at={0.05} /></Center>
<At x={1440} y={800}><Label at={2.36} size={36}>+ SODA</Label></At>
<At x={1440} y={860}><Label at={3.7} size={36} color={C3.money}>FREE REFILLS</Label></At>
</>) },
  { from: 5.14, to: 8.46, back: <><Back n={5} dur={3.32} /></>, el: (<>
<Center y={430}><HotDogTag at={0.05} small /></Center>
<Center y={760}><Big at={1.55} size={200} color={C3.gold}>1985</Big></Center>
<Center y={900}><Label at={2.1} size={30}>SAME PRICE · STILL TODAY</Label></Center>
</>) },
  { from: 8.46, to: 16.26, back: <><Back n={7} dur={7.8} /></>, el: (<>
<Top>WHAT IT SHOULD COST</Top>
<Center y={520}><Row gap={200}>
  <Col><Label at={0.1} size={26}>1985</Label><Big at={0.15} color={C3.money} size={170}>$1.50</Big></Col>
  <Col><Label at={5.62} size={26} color={C3.loss}>TODAY · WITH INFLATION</Label><Big at={5.62} color={C3.loss} size={170}>$4+</Big></Col>
</Row></Center>
<Center y={820}><Label at={2.28} size={32}>PRICES IN GENERAL: ROUGHLY ×3</Label></Center>
<Source>Inflation-adjusted estimates · CNN, CPI calculators</Source>
</>) },
  { from: 16.26, to: 20.94, back: null, el: (<>
<Stock n={8} until={4.68} dim={-0.15} />
<Center y={480}><Row gap={50}><IconAt at={0.1} name="hotdog" size={170} color={C3.gold} /><Counter to={245.1} at={2.19} dur={1.2} fmt={(v) => Math.round(v) + "M"} color={C3.ink} size={190} /></Row></Center>
<Center y={720}><Label at={2.19} size={30}>HOT DOG COMBOS SOLD IN ONE YEAR</Label></Center>
<Source>Costco annual meeting 2026 · fiscal 2025</Source>
</>) },
  { from: 20.94, to: 25.14, back: <><Back n={11} dur={4.2} /></>, el: (<>
<Center y={470}><HotDogTag at={0.05} loss={2.76} /></Center>
<Center y={800}><Label at={2.76} size={34} color={C3.loss}>“WE ARE LOSING…”</Label></Center>
<CoinAt x={1530} y={980} tl={[{ at: 1.8, pose: "shocked" }]} />
</>) },
  { from: 25.14, to: 34.24, back: null, el: (<>
<Stock n={2} until={9.1} dim={-0.1} />
<StockSwap n={3} at={2.86} until={9.1} dim={-0.1} />
<Center y={300}><Title text="Sells cheap. Earns billions." hl={["billions."]} size={84} at={0.2} /></Center>
<Center y={560}><Counter to={9.226} at={5.52} dur={1.1} fmt={(v) => "$" + v.toFixed(1) + "B"} size={220} /></Center>
<Center y={760}><Label at={5.52} size={28}>NET PROFIT · LATEST FISCAL YEAR</Label></Center>
<Source>Costco FY2026 results (year ended Aug 30, 2026)</Source>
</>) },
  { from: 34.24, to: 46.0, back: <><Back n={44} dur={11.76} n2={31} t2={3.6} /></>, el: (<>
<Center y={300}><Title text="Who pays for the hot dog?" hl={["pays"]} size={88} at={0.1} /></Center>
<Center y={620}><In at={7.1} from="zoom"><div style={{ position: "relative" }}><Icon name="receipt" size={200} color={C3.ink} /><Strike at={10.62} w={300} /></div></In></Center>
<Center y={880}><Label at={7.1} size={32} color={C3.gold}>HINT: YOU’VE ALREADY PAID</Label></Center>
<CoinAt x={1560} y={1000} tl={[{ at: 0.1, pose: "suspicious" }, { at: 8.14, pose: "wink" }]} />
</>) },
  { from: 46.0, to: 57.58, tag: [1, "The threat"], back: null, el: (<>
<Stock n={9} until={11.58} dim={0.08} />
<StockSwap n={18} at={9.56} until={11.58} dim={-0.1} />
<Center y={300}><Label at={0.2} size={34}>MEET TWO MEN</Label></Center>
<Center y={600}><Row gap={120}>
  <NameCard at={3.64} name="JIM SINEGAL" role="CO-FOUNDED COSTCO · SEATTLE · 1983" />
  <NameCard at={7.54} name="CRAIG JELINEK" role="LATER CEO" />
</Row></Center>
</>) },
  { from: 57.58, to: 69.28, back: <><Back n={10} dur={11.7} n2={11} t2={2.99} /></>, el: (<>
<Center y={520}><Quote at={5.98} who="CRAIG JELINEK · AS HE RECALLED IN 2018" size={64}>“Jim, we can’t sell this hot dog for a buck fifty. We are losing our rear ends.”</Quote></Center>
</>) },
  { from: 69.28, to: 78.24, back: <><Back n={10} dur={8.96} /></>, el: (<>
<Center y={230}><Label at={0.1} size={32}>SINEGAL’S ANSWER</Label></Center>
<Center y={470}><Quote at={3.62} who="JIM SINEGAL · AS JELINEK TOLD IT" size={78}>“If you raise the effing hot dog, I will kill you.”</Quote></Center>
<Center y={800}><Big at={7.04} color={C3.gold} size={130}>Figure it out.</Big></Center>
<CoinAt x={1640} y={1010} h={260} tl={[{ at: 5.94, pose: "shocked" }]} />
</>) },
  { from: 78.24, to: 87.84, back: <><Back n={10} dur={9.6} n2={5} t2={6.19} /></>, el: (<>
<Center y={330}><Label at={0.2} size={30}>YEARS EARLIER · A REPORTER ASKED</Label></Center>
<Center y={470}><Label at={3.9} size={34} color={C3.ink}>“If the price ever goes up, what will it mean?”</Label></Center>
<Center y={720}><Big at={8.48} color={C3.gold} size={150}>“That I’m dead.”</Big></Center>
<Source>Jim Sinegal to The Seattle Times, 2009</Source>
</>) },
  { from: 87.84, to: 104.16, back: null, el: (<>
<Stock n={38} until={16.32} dim={0} />
<StockSwap n={39} at={3.37} until={16.32} dim={-0.1} />
<Top>CUTAWAY · HOW THEY FIGURED IT OUT</Top>
<Center y={470}><Row gap={110}>
  <Col><In at={6.74} from="zoom"><div style={{ position: "relative" }}><Icon name="truck" size={170} color={C3.dim} /><Strike at={6.74 + 0.6} w={240} /></div></In><Label at={6.74} size={26}>OLD SUPPLIER</Label></Col>
  <Col><IconAt at={10.62} name="factory" size={170} color={C3.money} /><Label at={10.62} size={26} color={C3.money}>OWN PLANT · CALIFORNIA</Label></Col>
  <Col><IconAt at={15.12} name="factory" size={170} color={C3.money} /><Label at={15.12} size={26} color={C3.money}>2ND PLANT · ILLINOIS</Label></Col>
</Row></Center>
</>) },
  { from: 104.16, to: 111.78, back: <><Back n={8} dur={7.62} /></>, el: (<>
<Center y={430}><MenuBoard at={0.1} lock={5.66} /></Center>
<Center y={800}><Label at={3.48} size={30}>A MEAT PLANT · TO PROTECT ONE NUMBER</Label></Center>
</>) },
  { from: 111.78, to: 121.8, back: <><Back n={5} dur={10.02} /></>, el: (<>
<Center y={480}><Row gap={40}>
  <Big at={0.05} color={C3.ink} size={130}>245M</Big><Big at={3.09} color={C3.dim} size={90}>×</Big><Big at={3.09} color={C3.ink} size={130}>$1.50</Big>
  <Big at={4.65} color={C3.dim} size={90}>≈</Big><Big at={4.65} color={C3.money} size={150}>$368M</Big>
</Row></Center>
<Center y={760}><Label at={7.84} size={32} color={C3.gold}>THE GOAL ISN’T TO PROFIT FROM IT</Label></Center>
<Source>Our math · 245.1M combos × $1.50</Source>
</>) },
  { from: 121.8, to: 128.72, back: null, el: (<>
<Stock n={16} until={6.92} dim={-0.1} />
<StockSwap n={17} at={2.15} until={6.92} dim={-0.1} />
<Center y={480}><Tag at={4.3} label="ROTISSERIE CHICKEN" value="$4.99" /></Center>
<Center y={720}><Label at={5.79} size={32}>SAME PRICE SINCE 2009</Label></Center>
</>) },
  { from: 128.72, to: 134.74, back: null, el: (<>
<Stock n={17} until={6.02} dim={-0.1} />
<At x={330} y={760} anchor="l"><Callout at={2.69} label="NEBRASKA POULTRY COMPLEX" value="$450M" sub="BUILT BY COSTCO · OPENED 2019" color={C3.gold} line={140} vsize={110} /></At>
<Source>CNN · The Hustle</Source>
</>) },
  { from: 134.74, to: 143.7, back: <><Back n={17} dur={8.96} /></>, el: (<>
<Center y={300}><Label at={0.1} size={30}>COSTCO’S FINANCE CHIEF, ON THE $4.99 CHICKEN</Label></Center>
<Center y={540}><Big at={3.96} color={C3.loss} size={200}>−$30–40M</Big></Center>
<Center y={760}><Label at={5.46} size={30}>MARGIN GIVEN UP · EVERY YEAR</Label></Center>
<Source>CFO Richard Galanti, via CNN</Source>
</>) },
  { from: 143.7, to: 153.46, back: <><Back n={41} dur={9.76} n2={18} t2={4.59} /></>, el: (<>
<FloorPlan at={0.1} e={6.64} j={7.57} s={8.42} c={2.54} />
</>) },
  { from: 153.46, to: 162.16, back: <><Back n={18} dur={8.7} /></>, el: (<>
<Center y={420}><Title text="Not products." size={110} at={2.88} /></Center>
<Center y={600}><Title text="Promises." hl={["Promises."]} size={150} at={4.28} /></Center>
<Center y={830}><Label at={7.8} size={30}>ONLY PAYS OFF IF YOU KEEP COMING BACK</Label></Center>
<CoinAt x={1700} y={1000} h={260} tl={[{ at: 0.1, pose: "point" }]} flip />
</>) },
  { from: 162.16, to: 169.2, tag: [2, "The cap"], back: null, el: (<>
<Stock n={23} until={7.04} dim={-0.1} />
<Center y={520}><Row gap={60}><IconAt at={0.2} name="hotdog" size={160} color={C3.gold} /><Big at={0.4} color={C3.loss} size={120}>≠</Big><Big at={2.76} color={C3.money} size={150}>$9.2B</Big></Row></Center>
<Center y={780}><Label at={4.74} size={30}>SO, INSIDE THE WAREHOUSE</Label></Center>
</>) },
  { from: 169.2, to: 183.18, back: <><Back n={27} dur={13.98} n2={25} t2={10.15} /></>, el: (<>
<Top>THE RULE MOST SHOPPERS NEVER HEARD OF</Top>
<Center y={540}><Row gap={140}>
  <Tag at={7.61} label="NAME BRANDS · MAX MARKUP" value="≈14%" rotate={-3} />
  <Tag at={12.7} label="KIRKLAND · MAX MARKUP" value="≈15%" rotate={3} color={C3.money} />
</Row></Center>
<Center y={840}><Label at={3.78} size={28}>PAID $100 → YOU PAY ABOUT $114 AT MOST</Label></Center>
<Source>Widely reported Costco pricing rule (Clark Howard, RetailWire)</Source>
</>) },
  { from: 183.18, to: 190.38, back: null, el: (<>
<Stock n={25} until={7.2} dim={-0.1} />
<StockSwap n={24} at={2.6} until={7.2} dim={-0.1} />
<Center y={500}><Stat icon="cart" at={5.2} label="DIFFERENT ITEMS IN A WAREHOUSE" value={<Num color={C3.gold} size={170}>&lt; 4,000</Num>} color={C3.gold} /></Center>
<Source>Costco 10-K · fewer than 4,000 active items per warehouse</Source>
</>) },
  { from: 190.38, to: 201.26, back: null, el: (<>
<Stock n={26} until={10.88} dim={0.1} />
<StockSwap n={28} at={6.09} until={10.88} dim={-0.1} />
<Center y={380}><Label at={3.5} size={34}>A FEW BRANDS · ENORMOUS VOLUME</Label></Center>
<Center y={760}><Label at={8.68} size={40} color={C3.gold}>SUPPLIERS FIGHT FOR THE SHELF</Label></Center>
</>) },
  { from: 201.26, to: 220.34, back: <><Back n={28} dur={19.08} n2={22} t2={4.05} /></>, el: (<>
<Center y={260}><Label at={0.1} size={30}>KIRKLAND SIGNATURE · SALES IN 2024</Label></Center>
<Center y={480}><Counter to={86} at={8.01} dur={1.0} fmt={(v) => "$" + Math.round(v) + "B"} size={220} /></Center>
<Center y={700}><Label at={11.8} size={32} color={C3.gold}>BIGGER THAN PROCTER &amp; GAMBLE</Label></Center>
<Center y={850}><Label at={17.36} size={28}>KEEPS THE BIG BRANDS HONEST ON PRICE</Label></Center>
<Source>The Wall Street Journal, 2025</Source>
</>) },
  { from: 220.34, to: 224.94, back: <><Back n={29} dur={4.6} /></>, el: (<>
<CoinAt x={960} y={980} h={480} tl={[{ at: 0.1, pose: "sign" }]} sign="DO THE MATH" />
<Center y={200}><Title text="Let’s do the math." hl={["math."]} size={80} at={2.8} /></Center>
</>) },
  { from: 224.94, to: 242.58, back: <><Back n={47} dur={17.64} n2={29} t2={13.64} /></>, el: (<>
<Waterfall sales={2.34} fees={5.98} goods={9.04} costs={11.42} wh={15.86} />
</>) },
  { from: 242.58, to: 249.19, back: <><Back n={30} dur={6.61} /></>, el: (<>
<Center y={300}><Label at={0.1} size={34}>WHAT’S LEFT FROM EVERY $100 YOU SPEND</Label></Center>
<Center y={560}><HundredBill at={0.15} cut={2.98} /></Center>
<Center y={830}><Label at={2.98} size={28} color={C3.gold}>BY OUR MATH · OPERATING PROFIT, FEES SET ASIDE</Label></Center>
<Source>Costco FY2026: $297.2B sales − $264.3B goods − $27.2B costs</Source>
</>) },
  { from: 249.19, to: 259.58, back: <><Back n={31} dur={10.39} n2={44} t2={2.64} /></>, el: (<>
<Center y={330}><Big at={0.1} color={C3.gold} size={170}>≈ $2</Big></Center>
<Center y={560}><Label at={5.17} size={40} color={C3.ink}>BASICALLY BREAKING EVEN ON THE SHELVES</Label></Center>
<Center y={760}><Title text="So where do the billions come from?" hl={["billions"]} size={64} at={7.47} /></Center>
<CoinAt x={1640} y={1010} h={260} tl={[{ at: 7.47, pose: "shrug" }]} />
</>) },
  { from: 259.58, to: 265.28, back: <><Back n={18} dur={5.7} n2={24} t2={3.05} /></>, el: (<>
<Subscribe at={0.1} />
<CoinAt x={1640} y={1000} h={300} tl={[{ at: 0.4, pose: "wink" }]} flip />
</>) },
  { from: 265.28, to: 270.4, tag: [3, "The card"], back: <><Back n={32} dur={5.12} /></>, el: (<>
<Center y={300}><Label at={0.1} size={34}>REMEMBER THE HINT? YOU’VE ALREADY PAID</Label></Center>
<Center y={620}><MemberCard at={3.34} /></Center>
</>) },
  { from: 270.4, to: 280.28, back: <><Back n={35} dur={9.88} n2={23} t2={2.53} /></>, el: (<>
<Center y={300}><Label at={0.1} size={32}>NO MEMBERSHIP · NO SHOPPING</Label></Center>
<Center y={600}><Row gap={120}>
  <Tag at={4.96} label="BASIC · PER YEAR (U.S.)" value="$65" rotate={-3} />
  <Tag at={8.98} label="EXECUTIVE · PER YEAR" value="$130" rotate={3} color={C3.money} />
</Row></Center>
</>) },
  { from: 280.28, to: 285.18, back: null, el: (<>
<Stock n={33} until={4.9} dim={0.12} />
<Center y={480}><Counter to={5.907} at={2.73} dur={1.1} fmt={(v) => "$" + v.toFixed(1) + "B"} size={230} /></Center>
<Center y={700}><Label at={2.73} size={30}>MEMBERSHIP FEES · ONE YEAR</Label></Center>
<Source>Costco FY2026 results</Source>
</>) },
  { from: 285.18, to: 300.84, back: <><Back n={41} dur={15.66} n2={19} t2={4.24} /></>, el: (<>
<Top>BY OUR MATH · OPERATING PROFIT</Top>
<Center y={600}><Row gap={160} align="flex-end">
  <VBar at={8.48} h={380} value="$5.8B" label="THE WHOLE STORE" color={C3.blue} />
  <VBar at={10.9} h={388} value="$5.9B" label="THE PLASTIC CARD" color={C3.gold} />
</Row></Center>
<Source>FY2026: operating income $11.7B − fees $5.9B = store $5.8B</Source>
</>) },
  { from: 300.84, to: 309.16, back: <><Back n={19} dur={8.32} /></>, el: (<>
<Center y={500}><Row gap={220}>
  <Col><IconAt at={3.94} name="warehouse" size={200} color={C3.blue} /><Label at={3.94} size={30}>SELLS YOU EVERYTHING</Label></Col>
  <Col><IconAt at={5.74} name="card" size={200} color={C3.gold} /><Label at={5.74} size={30} color={C3.gold}>SELLS YOU PERMISSION</Label></Col>
</Row></Center>
<Center y={820}><Label at={0.1} size={28}>TWO BUSINESSES · ABOUT THE SAME SIZE</Label></Center>
</>) },
  { from: 309.16, to: 322.22, back: <><Back n={35} dur={13.06} n2={18} t2={5.14} /></>, el: (<>
<Center y={260}><Row gap={30}><IconAt at={0.1} name="person" size={110} color={C3.ink} /><Big at={2.79} color={C3.ink} size={120}>84M</Big></Row></Center>
<Center y={380}><Label at={2.79} size={26}>PAYING MEMBERS</Label></Center>
<Center y={640}><Row gap={160} align="flex-end">
  <VBar at={7.49} h={250} value="≈ $70" label="FEES PER MEMBER" color={C3.gold} />
  <VBar at={10.36} h={245} value="≈ $70" label="STORE PROFIT PER MEMBER" color={C3.blue} />
</Row></Center>
<Source>Our math · Costco 10-K FY2026</Source>
</>) },
  { from: 322.22, to: 337.44, back: <><Back n={36} dur={15.22} n2={32} t2={9.38} /></>, el: (<>
<Center y={500}><Row gap={200}>
  <Donut at={1.98} pct={0.503} color={C3.gold} size={340} label="OF MEMBERS PAY FOR EXECUTIVE" center="½" />
  <Donut at={12.26} pct={0.752} color={C3.money} size={340} label="OF ALL SALES" center="75%" />
</Row></Center>
<Center y={880}><Label at={6.51} size={28}>EXECUTIVE: 2% BACK · UP TO $1,250 A YEAR</Label></Center>
<Source>Costco 10-K FY2026</Source>
</>) },
  { from: 337.44, to: 352.14, back: <><Back n={34} dur={14.7} n2={33} t2={9.77} /></>, el: (<>
<Center y={480}><Row gap={180}>
  <Col><Label at={2.04} size={28} color={C3.blue}>STORE PROFIT DEPENDS ON</Label><Label at={2.78} size={26}>PRICES · WAGES · FREIGHT</Label></Col>
  <Col><IconAt at={6.43} name="card" size={150} color={C3.gold} /><Label at={6.43} size={28} color={C3.gold}>THE FEE: PAID UP FRONT</Label></Col>
</Row></Center>
<Center y={800}><Row gap={30}><Big at={13.12} color={C3.money} size={120}>92%</Big><Label at={13.12} size={26}>RENEW · U.S. &amp; CANADA</Label></Row></Center>
<Source>Costco 10-K FY2026 · 92.3% U.S./Canada</Source>
</>) },
  { from: 352.14, to: 366.22, back: <><Back n={41} dur={14.08} n2={5} t2={2.57} /></>, el: (<>
<Center y={430}><HotDogGrid at={5.14} /></Center>
<Center y={180}><Label at={5.14} size={32} color={C3.gold}>$65 ≈ 43 HOT DOG COMBOS</Label></Center>
<Center y={850}><Label at={9.68} size={34}>“COSTCO NEVER RAISED THE HOT DOG.”</Label></Center>
</>) },
  { from: 366.22, to: 381.12, back: <><Back n={29} dur={14.9} n2={47} t2={5.8} /></>, el: (<>
<Center y={300}><Label at={2.56} size={30}>SEPT 2024 · FIRST FEE HIKE SINCE 2017</Label></Center>
<Center y={540}><Row gap={50}><Big at={9.04} color={C3.dim} size={150}>$60</Big><Big at={9.97} color={C3.ink} size={110}>→</Big><Big at={9.97} color={C3.gold} size={150}>$65</Big></Row></Center>
<Center y={760}><Label at={11.14} size={30} color={C3.money}>FEE INCOME KEPT CLIMBING</Label></Center>
<Center y={900}><HotDogTag at={13.26} small /></Center>
</>) },
  { from: 381.12, to: 389.24, tag: [4, "Other people's money"], back: <><Back n={42} dur={8.12} /></>, el: (<>
<Center y={480}><Title text="One more trick." hl={["trick."]} size={110} at={3.1} /></Center>
<Center y={700}><Label at={6.84} size={30}>HIDING IN PLAIN SIGHT · THE ANNUAL REPORT</Label></Center>
<CoinAt x={1580} y={1000} tl={[{ at: 0.2, pose: "suspicious" }]} flip />
</>) },
  { from: 389.24, to: 395.08, back: <><Back n={42} dur={5.84} n2={41} t2={2.97} /></>, el: (<>
<Center y={520}><Quote at={0.1} who="COSTCO 10-K · FISCAL 2026" size={70}>“We often sell inventory before we are required to pay for it.”</Quote></Center>
</>) },
  { from: 395.08, to: 404.9, back: null, el: (<>
<Burst clips={[[38, 0], [39, 3.3], [48, 4.7], [40, 6.42], [41, 8.42]]} />
<Center y={860}><Label at={6.42} size={36} color={C3.gold}>GOODS LEAVE BEFORE THE BILL COMES DUE</Label></Center>
</>) },
  { from: 404.9, to: 424.72, back: <><Back n={39} dur={19.82} n2={43} t2={2.19} /></>, el: (<>
<Top>END OF FISCAL 2026</Top>
<At x={300} y={420} anchor="l"><Col gap={50} align="flex-start">
  <BarV at={4.38} w={980} label="COSTCO OWED ITS SUPPLIERS" value="$22.6B" color={C3.loss} />
  <BarV at={6.92} v={9.48} w={838} label="EVERYTHING ON ITS SHELVES" value="$19.3B" color={C3.blue} />
</Col></At>
<Center y={760}><Row gap={40}><Big at={14.7} color={C3.gold} size={150}>+$3.3B</Big><Label at={12.46} size={28}>SUPPLIERS PAY FOR THE SHELVES</Label></Row></Center>
<Center y={900}><Label at={17.94} size={28} color={C3.gold}>AND COSTCO HOLDS THE CASH IN THE MEANTIME</Label></Center>
<Source>Costco FY2026 balance sheet</Source>
</>) },
  { from: 424.72, to: 439.2, back: <><Back n={31} dur={14.48} n2={44} t2={6.85} /></>, el: (<>
<Center y={420}><Row gap={160}>
  <Callout at={4.42} label="INTEREST & OTHER INCOME" value="+$711M" color={C3.money} line={80} vsize={110} />
  <Callout at={9.29} label="INTEREST PAID ON DEBT" value="−$145M" color={C3.loss} line={80} vsize={110} />
</Row></Center>
<Center y={760}><Title text="Even its money makes money." hl={["money."]} size={76} at={12.52} /></Center>
<Source>Costco FY2026 results</Source>
</>) },
  { from: 439.2, to: 456.78, back: <><Back n={41} dur={17.58} n2={38} t2={14.93} /></>, el: (<>
<Machine a={3.1} b={6.36} c={9.64} d={12.28} />
</>) },
  { from: 456.78, to: 460.22, tag: [5, "Who really pays"], back: null, el: (<>
<Stock n={4} until={3.44} dim={0.12} />
<Center y={520}><Title text="Who really pays?" hl={["pays?"]} size={120} at={0.1} /></Center>
</>) },
  { from: 460.22, to: 471.3, back: <><Back n={16} dur={11.08} /></>, el: (<>
<Center y={480}><Row gap={180}>
  <Col><IconAt at={3.26} name="chicken" size={180} color={C3.loss} /><Label at={3.26} size={28} color={C3.loss}>LOSES MONEY ON THE CHICKEN</Label></Col>
  <Col><IconAt at={7.02} name="hotdog" size={180} color={C3.loss} /><Label at={7.02} size={28} color={C3.loss}>AND ON THE HOT DOG</Label></Col>
</Row></Center>
<Center y={800}><Label at={8.3} size={28}>AT LEAST BEFORE IT STARTED MAKING ITS OWN</Label></Center>
</>) },
  { from: 471.3, to: 476.38, back: null, el: (<>
<Stock n={40} until={5.08} dim={-0.1} />
<Center y={520}><Row gap={40}><IconAt at={0.1} name="truck" size={180} color={C3.blue} /><IconAt at={2.28} name="clock" size={150} color={C3.gold} /></Row></Center>
<Center y={760}><Label at={2.28} size={32}>SUPPLIERS WAIT · THEIR MONEY WORKS FOR COSTCO</Label></Center>
</>) },
  { from: 476.38, to: 484.4, back: null, el: (<>
<Stock n={1} until={8.02} dim={-0.1} />
<Center y={640}><MemberCard at={5.98} price="$65" /></Center>
<Center y={260}><Title text="Largely, you do." hl={["you"]} size={100} at={0.15} /></Center>
<CoinAt x={1620} y={1010} h={280} tl={[{ at: 3.5, pose: "wink" }]} />
</>) },
  { from: 484.4, to: 497.28, back: <><Back n={35} dur={12.88} n2={18} t2={8.32} /></>, el: (<>
<Center y={260}><Title text="Costco needs the deal to feel good." hl={["needs"]} size={68} at={2.6} /></Center>
<Center y={580}><Donut at={6.29} pct={0.923} color={C3.money} size={320} label="RENEW · U.S. & CANADA" center="92%" /></Center>
<Center y={900}><Label at={10.36} size={30} color={C3.loss}>OR HALF THE PROFIT WALKS OUT</Label></Center>
</>) },
  { from: 497.28, to: 506.0, back: null, el: (<>
<Split left={45} right={24} />
<At x={480} y={700}><Col gap={10}><Big at={3.12} color={C3.ink} size={110}>GYM</Big><Label at={4.66} size={26}>PROFITS WHEN YOU DON’T SHOW UP</Label></Col></At>
<At x={1440} y={700}><Col gap={10}><Big at={5.96} color={C3.gold} size={110}>COSTCO</Big><Label at={5.96} size={26} color={C3.gold}>ONLY IF YOU DO</Label></Col></At>
</>) },
  { from: 506.0, to: 516.96, back: null, el: (<>
<Stock n={11} until={10.96} dim={-0.1} />
<StockSwap n={4} at={3.55} until={10.96} dim={-0.1} />
<Center y={480}><HotDogTag at={0.1} out={7.0} /></Center>
<Center y={540}><PromiseReceipt at={7.0} /></Center>
</>) },
  { from: 516.96, to: 522.5, back: <><Back n={18} dur={5.54} n2={24} t2={2.39} /></>, el: (<>
<Center y={240}><Title text="Which Costco price would you never forgive?" hl={["never"]} size={60} at={0.2} /></Center>
<CoinAt x={960} y={1000} h={440} tl={[{ at: 0.2, pose: "sign" }]} sign="YOUR PICK?" />
<At x={1560} y={900}><Row gap={16}><IconAt at={4.58} name="phone" size={100} color={C3.money} /><Label at={4.58} color={C3.money}>Tell me in the comments</Label></Row></At>
</>) },
  { from: 522.5, to: 535.02, back: <><Back n={45} dur={12.52} /></>, el: (<>
<EndCard at={0.2} />
</>) },
];

// звуковые эффекты только на смысловые события (секунды ролика)
const SFX: [number, string][] = [[0.05, "pop"], [14.08, "rise"], [18.45, "tick"], [23.7, "buzz"], [30.66, "cash"], [42.38, "ding"], [49.64, "click"], [53.54, "click"], [75.22, "impact"], [95.18, "thud"], [98.46, "pop"], [102.96, "pop"], [116.43, "cash"], [131.41, "cash"], [138.7, "buzz"], [157.74, "ding"], [209.27, "cash"], [220.44, "pop"], [227.28, "cash"], [245.56, "ding"], [268.62, "impact"], [283.01, "cash"], [296.08, "ding"], [350.56, "ding"], [399.78, "whoosh"], [419.6, "cash"], [442.3, "click"], [445.56, "click"], [448.84, "click"], [451.48, "ding"], [482.36, "ding"], [513.0, "ding"]];

export const Ep04Costco: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C3.bgEdge }}>
      <Bg />
      <Audio src={staticFile("audio/ep04-voiceover.mp3")} />
      <Audio src={staticFile("audio/ep03-music.mp3")} volume={(f) => interpolate(f, [0, 30, EP04_DURATION_SEC * fps - 90, EP04_DURATION_SEC * fps], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />
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
