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

export const EP04_DURATION_SEC = __DURATION__;

const BROLL: Record<number, string> = __BROLL__;
const LEN: Record<number, number> = __LENS__;
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
