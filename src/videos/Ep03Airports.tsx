import React from "react";
import { AbsoluteFill, Audio, Img, OffthreadVideo, Sequence, staticFile, useVideoConfig } from "remotion";
import { C3, FONT_NUM } from "../brand/theme";
import { At, Bar, Bg, Bug, Callout, Chapter, Coin, Counter, Icon, IconName, In, Kicker, Num, Pose, Scene, Source, Title, useT } from "../brand/hm";
import { PopcornBucket } from "../brand/components";
import WORDS_RAW from "./ep03-airports-words.json";

// ===================================================================
// Ep03 «Why Airports Make More From Your Car Than From Landing Planes»
// Структура «одна поездка»: бордюр → полоса → билет → терминал → всё остальное → куда уходит прибыль.
// Тайминги — из пословной расшифровки ep03-airports-words.json.
// В BEATS from/to — секунды ролика; внутри сцены все at: … — секунды от начала сцены.
// Реальные кадры: Pexels (public/broll/ep03), короткий фон ≤ 6 с под нашей графикой.
// ===================================================================

export const WORDS = WORDS_RAW as { text: string; start: number; end: number }[];
export const EP03_DURATION_SEC = 594;
export const EP03_PILOT_SEC = 46.4;

const usd2 = (v: number) => "$" + v.toFixed(2);
const bil = (d = 1) => (v: number) => "$" + v.toFixed(d) + "B";
const mil = (v: number) => "$" + Math.round(v) + "M";

// ---------- общие куски ----------
const Center: React.FC<{ y?: number; children: React.ReactNode }> = ({ y = 540, children }) => <At x={960} y={y}>{children}</At>;
const Top: React.FC<{ children: React.ReactNode; y?: number; at?: number }> = ({ children, y = 150, at = 0.05 }) => <At x={960} y={y}><In at={at} from="down"><Kicker>{children}</Kicker></In></At>;
const Row: React.FC<{ gap?: number; children: React.ReactNode; align?: string }> = ({ gap = 80, children, align = "center" }) => <div style={{ display: "flex", alignItems: align, justifyContent: "center", gap }}>{children}</div>;
const Col: React.FC<{ gap?: number; children: React.ReactNode; align?: string }> = ({ gap = 18, children, align = "center" }) => <div style={{ display: "flex", flexDirection: "column", alignItems: align, gap }}>{children}</div>;
const Big: React.FC<{ at: number; color?: string; size?: number; children: React.ReactNode }> = ({ at, color = C3.ink, size = 160, children }) => <In at={at} from="zoom"><Num color={color} size={size}>{children}</Num></In>;
const Label: React.FC<{ at: number; color?: string; size?: number; children: React.ReactNode; out?: number }> = ({ at, color, size = 30, children, out }) => <In at={at} out={out} from="up" dist={20}><Kicker size={size} color={color}>{children}</Kicker></In>;
const IconAt: React.FC<{ at: number; name: IconName; size?: number; color?: string; out?: number; from?: "up" | "zoom" | "left" | "right" | "fade" }> = ({ at, name, size = 160, color = C3.ink, out, from = "zoom" }) => <In at={at} out={out} from={from}><Icon name={name} size={size} color={color} /></In>;
const CoinAt: React.FC<{ x: number; y: number; h?: number; tl: { at: number; pose: Pose }[]; sign?: string; flip?: boolean }> = ({ x, y, h = 300, tl, sign, flip }) => (
  <div style={{ position: "absolute", left: x, top: y - h, translate: "-50% 0" }}><Coin enter={tl[0].at} h={h} timeline={tl} sign={sign} flip={flip} /></div>
);
/** Перечёркивание поверх элемента */
const Strike: React.FC<{ at: number; w?: number; color?: string }> = ({ at, w = 420, color = C3.loss }) => {
  const { p } = useT();
  return <div style={{ position: "absolute", left: "50%", top: "50%", width: w * p(at, at + 0.3), height: 6, borderRadius: 3, background: color, translate: `-${w / 2}px -3px`, rotate: "-12deg", boxShadow: `0 0 18px ${color}` }} />;
};

/** Реальные кадры фоном: затемнение сверху вниз 45% → 80%, наезд 1.04 → 1.14, без звука, видны до until */
const Stock: React.FC<{ file: string; until?: number; dim?: number; blur?: number }> = ({ file, until = 5.5, dim = 0, blur = 0 }) => {
  const { t, p } = useT();
  const k = Math.min(1, t / Math.max(1, until));
  const op = 1 - p(until - 0.4, until);
  return (
    <AbsoluteFill style={{ opacity: op }}>
      <OffthreadVideo src={staticFile(`broll/ep03/${file}.mp4`)} muted style={{ width: "100%", height: "100%", objectFit: "cover", scale: String(1.04 + 0.1 * k), filter: blur ? `blur(${blur}px)` : undefined }} />
      <AbsoluteFill style={{ background: `linear-gradient(180deg, rgba(7,10,11,${0.58 + dim}) 0%, rgba(7,10,11,${0.7 + dim}) 55%, rgba(7,10,11,${0.84 + dim}) 100%)` }} />
    </AbsoluteFill>
  );
};


/** Фон-подложка на всю сцену: стоковое видео (V..) или фото (P..) под графикой. Затемнён, чтобы главное — цифры и иконки — читалось. */
const Back: React.FC<{ file: string; dur: number; rate?: number; dim?: number }> = ({ file, dur, rate = 1, dim = 0 }) => {
  const { t, p } = useT();
  const k = Math.min(1, t / Math.max(1, dur));
  const op = p(0, 0.35) * (1 - p(dur - 0.3, dur));
  const media = { width: "100%", height: "100%", objectFit: "cover" as const, filter: "blur(1.5px) saturate(0.85)" };
  return (
    <AbsoluteFill style={{ opacity: op }}>
      {file.startsWith("P")
        ? <Img src={staticFile(`broll/ep03/${file}.jpg`)} style={{ ...media, scale: String(1.06 + 0.08 * k), translate: `${-14 + 28 * k}px 0` }} />
        : <OffthreadVideo src={staticFile(`broll/ep03/${file}.mp4`)} muted playbackRate={rate} style={{ ...media, scale: String(1.04 + 0.06 * k) }} />}
      <AbsoluteFill style={{ background: `radial-gradient(ellipse at 50% 50%, rgba(7,10,11,${0.66 + dim}) 0%, rgba(7,10,11,${0.8 + dim}) 70%, rgba(7,10,11,${0.9 + dim}) 100%)` }} />
    </AbsoluteFill>
  );
};

/** Какая подложка под какой сценой: ключ — from сцены. */
const BACKS: Record<string, { file: string; rate?: number; dim?: number }> = {
  "6.3": { file: "V01" }, "25.95": { file: "V02" }, "35.45": { file: "V03" }, "46.4": { file: "P11" },
  "52.75": { file: "V04" }, "63.55": { file: "P16" }, "69.3": { file: "V05", rate: 0.58 }, 
  "116.55": { file: "P01" }, "140.15": { file: "V07" }, "159": { file: "V08" }, "180.65": { file: "V09" },
  "213.75": { file: "V10" }, "255.95": { file: "P14" }, "270.7": { file: "S06" },
  "284.3": { file: "P03" }, "299.45": { file: "P05" }, "310.25": { file: "P13" }, "317.75": { file: "P04" },
  "325.15": { file: "V17" }, "345.55": { file: "V11" }, "357.95": { file: "V12" }, "367.05": { file: "P06" },
  "395.55": { file: "V13", rate: 0.75 }, "423.7": { file: "P07" }, "434.25": { file: "V18" }, "474.35": { file: "V14" },
  "479.25": { file: "P12" }, "508.95": { file: "P08" }, "517.35": { file: "P10" }, "530.65": { file: "P09" },
  "563.35": { file: "S04" }, "577.25": { file: "V16" },
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

/** Кольцевая диаграмма с одной долей */
const Donut: React.FC<{ at: number; pct: number; color?: string; size?: number; label?: string; center: string }> = ({ at, pct, color = C3.money, size = 420, label, center }) => {
  const { p } = useT();
  const k = p(at, at + 1.1);
  const r = 42, c = 2 * Math.PI * r;
  return (
    <In at={at} from="zoom">
      <div style={{ position: "relative", width: size, height: size }}>
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ rotate: "-90deg" }}>
          <circle cx={50} cy={50} r={r} fill="none" stroke="rgba(234,255,243,.1)" strokeWidth={9} />
          <circle cx={50} cy={50} r={r} fill="none" stroke={color} strokeWidth={9} strokeLinecap="round" strokeDasharray={`${c * pct * k} ${c}`} style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Num color={color} size={size * 0.24}>{center}</Num>
        </div>
      </div>
      {label && <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}><Kicker size={28}>{label}</Kicker></div>}
    </In>
  );
};

/** Вертикальный столбик с подписью */
const VBar: React.FC<{ at: number; h: number; value: string; label: string; color: string; w?: number }> = ({ at, h, value, label, color, w = 150 }) => {
  const { p } = useT();
  const k = p(at, at + 0.9);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, opacity: p(at - 0.02, at + 0.2) }}>
      <div style={{ opacity: p(at + 0.5, at + 0.9) }}><Num color={color} size={64} glow={false}>{value}</Num></div>
      <div style={{ width: w, height: h * k, borderRadius: 14, background: `linear-gradient(0deg, ${color}44, ${color})`, boxShadow: `0 0 40px ${color}33` }} />
      <Kicker size={26}>{label}</Kicker>
    </div>
  );
};

// ================= ХУК =================

const PayMachine: React.FC = () => {
  const { p } = useT();
  const days = Math.min(4, 1 + Math.floor(p(0.1, 1.6) * 4));
  return (
    <>
      <At x={560} y={540}>
        <In at={0.05} from="up">
          <Col gap={14}>
            <Icon name="calendar" size={170} color={C3.blue} />
            <Num color={C3.ink} size={110} glow={false}>DAY {days}</Num>
            <Kicker>FOUR DAYS LATER</Kicker>
          </Col>
        </In>
      </At>
      <At x={1220} y={540}>
        <In at={2.15} from="right">
          <div style={{ width: 620, height: 640, borderRadius: 34, background: "linear-gradient(160deg,#1d3a2e,#0c1814)", boxShadow: "0 50px 90px rgba(0,0,0,.55), inset 0 0 0 2px rgba(47,220,127,.25)", padding: 46, boxSizing: "border-box" }}>
            <Kicker size={28}>PAY STATION · HOURLY GARAGE</Kicker>
            <div style={{ marginTop: 26, height: 250, borderRadius: 18, background: "#050807", boxShadow: "inset 0 0 0 2px rgba(255,77,77,.25)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <Kicker size={24} color="rgba(255,77,77,.7)">AMOUNT DUE</Kicker>
              <Counter to={275} at={3.3} dur={1.45} fmt={usd2} color={C3.loss} size={130} />
            </div>
            <div style={{ display: "flex", gap: 18, marginTop: 40, justifyContent: "center" }}>
              {[0, 1, 2].map((i) => <div key={i} style={{ width: 120, height: 70, borderRadius: 12, background: "rgba(234,255,243,.06)" }} />)}
            </div>
            <div style={{ marginTop: 34, height: 12, borderRadius: 6, background: "rgba(234,255,243,.12)", width: "60%", marginLeft: "20%" }} />
          </div>
        </In>
      </At>
      <CoinAt x={1640} y={930} tl={[{ at: 4.8, pose: "shocked" }]} />
    </>
  );
};

const CarVsJet: React.FC = () => (
  <>
    <Top>SAME AIRPORT · SAME TRIP</Top>
    <Center y={470}>
      <Col gap={56} align="flex-start">
        <Row gap={30}><In at={0.1} from="left"><Icon name="car" size={130} color={C3.loss} /></In><Bar at={0.15} w={700} label="Your car · 4 days in the hourly garage" value="$275" color={C3.loss} /></Row>
        <Row gap={30}><In at={1.9} from="left"><Icon name="plane" size={130} color={C3.gold} /></In><Bar at={1.95} w={605} label="A Boeing 737 · one landing" value="$238" color={C3.gold} /></Row>
      </Col>
    </Center>
    <Center y={880}><Title text="The airport planned it that way." hl={["planned"]} size={72} at={3.6} /></Center>
  </>
);

const CarsVsLanding: React.FC = () => (
  <>
    <Top>WHAT NOBODY TELLS YOU AT THE GATE</Top>
    <Center y={560}><In at={0.15} out={2.15} from="zoom"><Col><Icon name="gate" size={260} color={C3.gold} /><Kicker size={26} color={C3.gold}>GATE A1 · BOARDING</Kicker></Col></In></Center>
    <Center y={300}><Title text="U.S. airports, one year" size={64} at={2.4} color="rgba(234,255,243,.85)" /></Center>
    <At x={300} y={600} anchor="l">
      <Col gap={60} align="flex-start">
        <Row gap={30}><In at={4.9} from="left"><Icon name="car" size={120} color={C3.money} /></In><Bar at={4.95} w={760} label="Cars · parking + rides" value="$6.0B" color={C3.money} /></Row>
        <Row gap={30}><In at={6.05} from="left"><Icon name="plane" size={120} color={C3.blue} /></In><Bar at={6.1} w={545} label="Landing fees · every passenger airline" value="$4.3B" color={C3.blue} /></Row>
      </Col>
    </At>
    <CoinAt x={1690} y={900} tl={[{ at: 7.4, pose: "point" }]} flip />
    <Source>Source: FAA CATS Report 127, FY2023, via ACI-NA</Source>
  </>
);

const STOPS: { name: string; icon: IconName }[] = [
  { name: "CURB", icon: "car" }, { name: "PARKING", icon: "garage" }, { name: "TICKET", icon: "ticket" }, { name: "TERMINAL", icon: "store" }, { name: "GATE", icon: "gate" },
];
const TripMap: React.FC = () => {
  const { p } = useT();
  const draw = p(0.2, 2.9);
  const x0 = 260, step = 350, y = 560;
  return (
    <>
      <Top y={170}>ONE TRIP · WHO GETS PAID</Top>
      <svg width={1920} height={1080} style={{ position: "absolute", inset: 0 }}>
        <line x1={x0} y1={y} x2={x0 + step * 4 * draw} y2={y} stroke="rgba(47,220,127,.6)" strokeWidth={3} strokeDasharray="10 12" />
      </svg>
      <At x={x0 + step * 4 * draw} y={y - 120}><In at={0.1} out={2.9} from="zoom"><Icon name="suitcase" size={110} color={C3.money} /></In></At>
      {STOPS.map((s, i) => (
        <At key={s.name} x={x0 + i * step} y={y}>
          <In at={2.25 + i * 0.13} from="zoom">
            <Col>
              <div style={{ width: 150, height: 150, borderRadius: 75, background: "rgba(13,32,24,.9)", boxShadow: "inset 0 0 0 2px rgba(47,220,127,.45), 0 0 40px rgba(47,220,127,.18)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={s.icon} size={90} color={C3.ink} /></div>
              <Kicker size={28}>{s.name}</Kicker>
            </Col>
          </In>
          <div style={{ position: "absolute", left: "50%", top: -150, translate: "-50% 0" }}><In at={4.8 + i * 0.12} from="up"><Num color={C3.gold} size={70}>$</Num></In></div>
        </At>
      ))}
    </>
  );
};

const LockedBag: React.FC<{ title?: string; shutAt?: number }> = ({ title = "Why can't the airport keep it?", shutAt = 3.0 }) => {
  const { p } = useT();
  const shut = p(shutAt, shutAt + 0.25);
  return (
    <>
      <Center y={500}>
        <In at={0.05} from="zoom">
          <div style={{ position: "relative" }}>
            <Icon name="bag" size={380} color={C3.money} />
            <div style={{ position: "absolute", left: "50%", top: "62%", translate: `-50% ${-60 * (1 - shut)}px`, opacity: p(shutAt - 2, shutAt - 1.6) }}><Icon name="lock" size={170} color={C3.gold} /></div>
          </div>
        </In>
      </Center>
      <Center y={860}><Title text={title} hl={["keep", "home."]} size={64} at={1.1} /></Center>
    </>
  );
};

// ================= ГЛАВА 1 · БОРДЮР =================

const Landlord: React.FC = () => (
  <>
    <Center y={470}>
      <Row gap={200}>
        <div style={{ position: "relative" }}><Col><IconAt at={0.1} name="plane" size={220} color={C3.dim} /><Label at={0.4}>Airplane business?</Label></Col><Strike at={3.7} w={360} /></div>
        <Col><IconAt at={4.8} name="key" size={220} color={C3.gold} /><Label at={4.9} color={C3.gold}>Landlord business</Label></Col>
      </Row>
    </Center>
  </>
);

/** Торговый центр: якорный магазин дёшево, деньги — с потока людей */
const Mall: React.FC<{ airport?: boolean }> = ({ airport }) => {
  const { t, p } = useT();
  const crowdK = airport ? p(4.0, 4.6) : p(5.2, 5.8);
  return (
    <>
      <Center y={540}>
        <In at={0.1} from="fade">
          <svg width={1300} height={640} viewBox="0 0 1300 640" style={{ overflow: "visible" }}>
            {/* здание */}
            <rect x={150} y={120} width={1000} height={330} rx={18} fill="rgba(234,255,243,.04)" stroke="rgba(234,255,243,.35)" strokeWidth={3} />
            {/* маленькие лавки */}
            {[0, 1, 2, 3].map((i) => <rect key={i} x={560 + i * 140} y={260} width={110} height={190} rx={8} fill="rgba(234,255,243,.05)" stroke="rgba(234,255,243,.25)" strokeWidth={2} />)}
            {/* якорный магазин */}
            <rect x={190} y={160} width={330} height={290} rx={12} fill="rgba(77,163,255,.12)" stroke={C3.blue} strokeWidth={3} opacity={p(airport ? 0 : 2.4, airport ? 0.3 : 2.8)} />
            <text x={355} y={215} textAnchor="middle" fontFamily={FONT_NUM} fontWeight={600} fontSize={24} letterSpacing="5" fill={C3.blue} opacity={p(airport ? 0 : 2.4, airport ? 0.3 : 2.8)}>{airport ? "AIRLINES" : "ANCHOR STORE"}</text>
            {/* парковка */}
            <rect x={150} y={500} width={1000} height={120} rx={12} fill="rgba(47,220,127,.06)" stroke="rgba(47,220,127,.35)" strokeWidth={2} />
            {Array.from({ length: 14 }).map((_, i) => <line key={i} x1={190 + i * 70} y1={510} x2={190 + i * 70} y2={610} stroke="rgba(47,220,127,.25)" strokeWidth={2} />)}
            {/* поток людей или машин */}
            {Array.from({ length: 12 }).map((_, i) => {
              const ph = (t * 0.35 + i / 12) % 1;
              const x = 200 + ph * 900;
              return airport
                ? <g key={i} opacity={crowdK} transform={`translate(${x - 18} ${545 + (i % 2) * 30})`}><rect width={36} height={18} rx={6} fill={C3.money} /></g>
                : <circle key={i} cx={x} cy={560 + (i % 3) * 18} r={9} fill={C3.ink} opacity={crowdK} />;
            })}
          </svg>
        </In>
      </Center>
      <At x={665} y={330}>{!airport && <Tag at={3.5} label="Cheap rent" value="LOW" color={C3.blue} rotate={-6} />}</At>
      <At x={1540} y={790}>{!airport && <In at={7.2} from="zoom"><Num color={C3.gold} size={150}>$</Num></In>}</At>
      {!airport && <Center y={1000}><Label at={7.3} color={C3.gold}>The real money comes from the crowd</Label></Center>}
      {airport && <Center y={1000}><Label at={4.0} color={C3.money}>You, with your car = the crowd</Label></Center>}
      {airport && <Top>AT AN AIRPORT · AIRLINES = THE ANCHOR</Top>}
      {airport && <CoinAt x={1700} y={980} h={260} tl={[{ at: 4.1, pose: "point" }]} flip />}
      {!airport && <Top>THINK OF A SHOPPING MALL</Top>}
    </>
  );
};

const Stacks: React.FC = () => {
  const { p } = useT();
  const col = (at: number, h: number, color: string, st = 0.05) => (
    <div style={{ display: "flex", flexDirection: "column-reverse", gap: 6, height: 420 }}>
      {Array.from({ length: h }).map((_, i) => <div key={i} style={{ width: 230, height: 22, borderRadius: 11, background: color, opacity: p(at + i * st, at + i * st + 0.2), boxShadow: `0 0 18px ${color}55` }} />)}
    </div>
  );
  return (
    <>
      <Top>HOW BIG IS THE CROWD?</Top>
      <Center y={250}><Label at={2.6} size={30} color="rgba(234,255,243,.85)">U.S. airports · fiscal 2023</Label></Center>
      <Center y={620}>
        <Row gap={260} align="flex-end">
          <Col>{col(2.8, 15, C3.blue, 0.2)}<Counter to={15.4} at={5.9} dur={0.9} fmt={bil(1)} color={C3.blue} size={96} /><Label at={8.2}>From flying</Label><Row gap={20}><IconAt at={9.6} name="plane" size={60} color={C3.blue} /><IconAt at={9.9} name="warehouse" size={60} color={C3.blue} /></Row></Col>
          <Col>{col(12.6, 13, C3.money)}<Counter to={13.2} at={12.6} dur={0.9} fmt={bil(1)} color={C3.money} size={96} /><Label at={12.9}>From everything else</Label></Col>
        </Row>
      </Center>
      <Source>Source: FAA CATS Report 127, FY2023, via ACI-NA</Source>
    </>
  );
};

const HalfDonut: React.FC = () => (
  <>
    <Center y={480}><Donut at={0.1} pct={0.46} center="46%" label="NOT FROM FLYING" /></Center>
    <Center y={880}><Title text="Almost half doesn't come from flying" hl={["half"]} size={60} at={2.2} /></Center>
  </>
);

const ParkingStock: React.FC = () => (
  <>
    <Stock file="S01" until={6.2} />
    <Top>THE BIGGEST PIECE</Top>
    <Center y={460}><Title text="Parking + rides" hl={["Parking"]} size={110} at={2.0} /></Center>
    <Center y={680}><Big at={4.5} color={C3.money} size={190}>$6.0B</Big></Center>
    <Source>U.S. airports, FY2023 · FAA CATS</Source>
  </>
);

const MoreThanCombined: React.FC = () => {
  const { p } = useT();
  return (
    <>
      <At x={260} y={540} anchor="l">
        <Col gap={34} align="flex-start">
          <Bar at={0.15} w={900} label="Parking + rides" value="$6.0B" color={C3.money} h={58} />
          <Bar at={0.8} w={358} label="Rental cars" value="$2.4B" color={C3.blue} h={40} />
          <Bar at={1.8} w={147} label="Restaurants" value="$0.98B" color={C3.blue} h={40} />
          <Bar at={2.7} w={114} label="Every shop" value="$0.76B" color={C3.blue} h={40} />
        </Col>
      </At>
      <At x={1440} y={720}>
        <div style={{ opacity: p(4.4, 4.8) }}><Col gap={6}><Kicker size={28}>Combined</Kicker><Num color={C3.blue} size={110}>$4.1B</Num><Kicker size={26} color={C3.money}>Still less than parking</Kicker></Col></div>
      </At>
      <Source>Source: FAA CATS Report 127, FY2023, via ACI-NA</Source>
    </>
  );
};

const PerPassenger: React.FC = () => (
  <>
    <Stock file="S06" until={5.8} dim={0.12} />
    <Top>PER DEPARTING PASSENGER</Top>
    <Center y={500}><Row gap={50}><IconAt at={0.4} name="suitcase" size={170} color={C3.money} /><Big at={2.6} color={C3.money} size={220}>$6.40</Big></Row></Center>
    <Center y={760}><Label at={4.8} size={28}>Every single time someone flies out</Label></Center>
    <Source>Parking + rides, FY2023 · FAA CATS via ACI-NA</Source>
  </>
);

const CantPack: React.FC = () => (
  <>
    <Center y={230}><Title text="Why does parking win?" hl={["win?"]} size={84} at={0.15} /></Center>
    <Center y={600}>
      <Row gap={180}>
        <Col><Row gap={20}><IconAt at={4.8} name="bag" size={150} color={C3.money} /><IconAt at={5.1} name="bottle" size={150} color={C3.money} /></Row><Label at={5.1} color={C3.money}>Pack it from home ✓</Label></Col>
        <div style={{ position: "relative" }}><Col><IconAt at={0.7} name="car" size={220} color={C3.loss} /><Label at={6.3} color={C3.loss}>Can't pack a parking spot</Label></Col></div>
      </Row>
    </Center>
    <Center y={880}><Label at={1.9} size={32}>The one thing you can't bring from home</Label></Center>
  </>
);

const PriceLadder: React.FC = () => {
  const steps = [
    { at: 3.5, label: "Economy lot", value: "$20 / day", h: 160, c: C3.money },
    { at: 8.3, label: "Garage · first day", value: "up to $50", h: 300, c: C3.gold },
    { at: 10.1, label: "Garage · each extra day", value: "$75", h: 440, c: C3.loss },
  ];
  return (
    <>
      <Top>PRICED LIKE A HOTEL ROOM</Top>
      <At x={300} y={300}><IconAt at={0.3} name="hotel" size={150} color={C3.gold} /></At>
      <At x={1160} y={260}><In at={6.1} from="zoom"><Col gap={6}><Icon name="garage" size={110} color={C3.gold} /><Kicker size={24}>Right by the terminal</Kicker></Col></In></At>
      <Center y={640}>
        <Row gap={60} align="flex-end">
          {steps.map((s) => <VBar key={s.label} at={s.at} h={s.h} value={s.value} label={s.label} color={s.c} w={230} />)}
        </Row>
      </Center>
      <CoinAt x={1640} y={960} tl={[{ at: 10.5, pose: "point" }]} flip />
      <Source>Source: ATL parking rates, atl.com</Source>
    </>
  );
};

/** Разрез гаража у терминала: чем ближе к двери, тем дороже (CUTAWAY №1) */
const GarageCutaway: React.FC = () => {
  const { p } = useT();
  const levels = [0, 1, 2, 3];
  const heat = p(1.3, 2.4);
  return (
    <>
      <Top>CUTAWAY · THE TERMINAL GARAGE</Top>
      <Center y={560}>
        <In at={0.1} from="fade">
          <svg width={1500} height={620} viewBox="0 0 1500 620" style={{ overflow: "visible" }}>
            {/* терминал справа */}
            <rect x={1180} y={60} width={280} height={520} rx={16} fill="rgba(77,163,255,.08)" stroke={C3.blue} strokeWidth={3} />
            <text x={1320} y={110} textAnchor="middle" fontFamily={FONT_NUM} fontWeight={600} fontSize={24} letterSpacing="5" fill={C3.blue}>TERMINAL</text>
            <rect x={1180} y={470} width={60} height={110} fill="rgba(255,210,63,.25)" stroke={C3.gold} strokeWidth={2} />
            {/* этажи гаража: 4 яруса, каждый разбит на 6 зон от дальней к ближней */}
            {levels.map((l) => (
              <g key={l} transform={`translate(60 ${120 + l * 115})`} opacity={p(0.1 + l * 0.15, 0.5 + l * 0.15)}>
                <rect x={0} y={0} width={1100} height={95} rx={8} fill="rgba(234,255,243,.03)" stroke="rgba(234,255,243,.3)" strokeWidth={2} />
                {Array.from({ length: 6 }).map((_, z) => {
                  const k = z / 5;
                  const col = k < 0.5 ? C3.money : k < 0.84 ? C3.gold : C3.loss;
                  return <rect key={z} x={10 + z * 182} y={10} width={170} height={75} rx={6} fill={col} opacity={0.08 + 0.32 * k * heat} />;
                })}
                {Array.from({ length: 6 }).map((_, z) => <rect key={`c${z}`} x={60 + z * 182} y={40} width={60} height={28} rx={8} fill="rgba(234,255,243,.55)" />)}
              </g>
            ))}
            {/* стрелка к двери */}
            <line x1={80} y1={600} x2={80 + 1080 * p(1.2, 2.2)} y2={600} stroke={C3.gold} strokeWidth={4} />
            <text x={1120} y={600 - 14} textAnchor="end" fontFamily={FONT_NUM} fontWeight={600} fontSize={30} letterSpacing="5" fill={C3.gold} opacity={p(2.0, 2.4)}>CLOSER TO THE DOOR = MORE $</text>
          </svg>
        </In>
      </Center>
      <Center y={960}><Label at={4.7} color={C3.gold} size={34}>= the ocean-view room</Label></Center>
    </>
  );
};

const WeakSpot: React.FC = () => (
  <>
    <Center y={460}><Row gap={120}><IconAt at={0.1} name="garage" size={220} color={C3.money} /><IconAt at={2.9} name="car" size={170} color={C3.gold} /></Row></Center>
    <Center y={240}><Title text="One weak spot" hl={["weak"]} size={84} at={1.6} /></Center>
    <Center y={760}><Label at={2.9} size={30}>It only works when people drive</Label></Center>
  </>
);

const Drop: React.FC = () => (
  <>
    <Top>PARKING + RIDES · ALL U.S. AIRPORTS</Top>
    <Center y={250}><Label at={2.0} size={30}>Revenue by fiscal year</Label></Center>
    <Center y={620}>
      <Row gap={140} align="flex-end">
        <VBar at={3.0} h={420} value="$4.8B" label="FY2019" color={C3.money} />
        <VBar at={9.4} h={235} value="$2.7B" label="FY2021" color={C3.loss} />
      </Row>
    </Center>
    <At x={1330} y={330}><Label at={6.7} color={C3.loss} size={30}>Travel shut down</Label></At>
    <At x={1460} y={560}><Big at={10.9} color={C3.loss} size={150}>−44%</Big></At>
    <Source>Source: FAA CATS Report 127, via ACI-NA</Source>
  </>
);

const EmptyDeck: React.FC = () => (
  <>
    <Stock file="S08" until={5.8} dim={0.05} />
    <Top>WHEN THE CROWD STOPS COMING</Top>
    <Center y={560}><In at={1.9} out={4.6} from="zoom"><Icon name="car" size={260} color={C3.ink} /></In></Center>
    <Center y={820}><Label at={1.9} size={26}>The best tenant disappears</Label></Center>
  </>
);

const Recovery: React.FC = () => (
  <>
    <Top>IT CAME BACK FAST</Top>
    <Center y={260}><Label at={2.0} size={30}>Per passenger · 2024 early figures</Label></Center>
    <Center y={600}>
      <Row gap={140} align="flex-end">
        <VBar at={9.3} h={250} value="$5.10" label="Before the pandemic" color={C3.dim} />
        <VBar at={5.5} h={330} value="$6.60" label="2024" color={C3.money} />
      </Row>
    </Center>
    <At x={1500} y={520}><Label at={6.4} color={C3.money}>Parking + rides</Label></At>
    <Source>Source: FAA CATS Report 127, via ACI-NA (2024 incomplete)</Source>
  </>
);

const Rideshare: React.FC = () => {
  const { p } = useT();
  return (
    <>
      <Stock file="S07" until={5.5} blur={6} />
      <Top>NO CAR? TAKE A RIDE-SHARE</Top>
      <Center y={520}>
        <Row gap={140}>
          <IconAt at={1.9} name="phone" size={200} color={C3.blue} />
          <div style={{ width: 300 * p(3.9, 4.6), height: 4, background: C3.gold, boxShadow: `0 0 16px ${C3.gold}` }} />
          <IconAt at={4.4} name="building" size={200} color={C3.money} />
        </Row>
      </Center>
      <Center y={780}><Label at={3.9} color={C3.gold} size={28}>The airport still gets paid</Label></Center>
      <Center y={860}><Label at={7.0} size={30}>A fee for every pickup at the curb</Label></Center>
      <CoinAt x={1660} y={960} tl={[{ at: 8.4, pose: "wink" }]} flip />
    </>
  );
};

// ================= ГЛАВА 2 · ПОЛОСА =================

const StrangePart: React.FC = () => (
  <>
    <Center y={260}><Title text="But here's the strange part" hl={["strange"]} size={80} at={0.1} /></Center>
    <Center y={600}><Row gap={60}><IconAt at={4.4} name="plane" size={200} color={C3.gold} /><Tag at={4.6} label="Landing a jet" value="$238" /></Row></Center>
    <CoinAt x={1560} y={960} tl={[{ at: 0.7, pose: "suspicious" }]} flip />
  </>
);

const NotRandom: React.FC = () => (
  <>
    <Stock file="S05" until={4.5} blur={5} />
    <Center y={460}><Big at={0.4} color={C3.gold} size={240}>$238</Big></Center>
    <Center y={700}><Label at={0.6}>Not a random number</Label></Center>
    <Center y={800}><Label at={3.7} color={C3.gold} size={30}>It's math</Label></Center>
  </>
);

const Formula: React.FC = () => {
  const { p } = useT();
  return (
    <>
      <Stock file="S05" until={3.2} dim={0.1} blur={5} />
      <Top>ATLANTA · LANDING FEE FORMULA · FY2026</Top>
      <Center y={430}>
        <Row gap={34}>
          <In at={3.2} from="zoom"><Col gap={4}><Num color={C3.gold} size={130}>$1.63</Num><Kicker size={24}>per 1,000 lb</Kicker></Col></In>
          <In at={6.2} from="zoom"><Num color={C3.dim} size={110} glow={false}>×</Num></In>
          <In at={6.2} from="zoom"><Col gap={4}><Num color={C3.blue} size={130}>146.3</Num><Kicker size={24}>thousand lb</Kicker><Kicker size={24}>max landing weight</Kicker></Col></In>
          <In at={11.9} from="zoom"><Num color={C3.dim} size={110} glow={false}>=</Num></In>
          <In at={11.9} from="zoom"><Num color={C3.gold} size={150}>$238</Num></In>
        </Row>
      </Center>
      {/* весы */}
      <Center y={790}>
        <In at={8.1} from="up">
          <svg width={700} height={240} viewBox="0 0 700 240" style={{ overflow: "visible" }}>
            <rect x={100} y={150} width={500} height={24} rx={12} fill="rgba(77,163,255,.25)" stroke={C3.blue} strokeWidth={2} />
            <rect x={320} y={174} width={60} height={50} fill="rgba(77,163,255,.2)" />
            <g transform={`translate(230 ${40 + 20 * (1 - p(8.1, 8.8))})`}><path d="M120 10 Q128 10 128 26 L128 52 L200 76 L200 86 L128 72 L128 100 L144 110 L144 116 L120 110 L96 116 L96 110 L112 100 L112 72 L40 86 L40 76 L112 52 L112 26 Q112 10 120 10 Z" fill="rgba(234,255,243,.12)" stroke={C3.ink} strokeWidth={3} transform="rotate(90 120 63)" /></g>
            <text x={350} y={-30} textAnchor="middle" fontFamily={FONT_NUM} fontWeight={600} fontSize={30} letterSpacing="5" fill={C3.blue} opacity={p(11.1, 11.5)}>BOEING 737-800 · 146,300 LB</text>
          </svg>
        </In>
      </Center>
      <Source>Sources: ATL FY2026 rates & charges · Boeing airport planning data</Source>
    </>
  );
};

const Seats: React.FC = () => {
  const { p } = useT();
  const rows = 27, cols = 6;
  return (
    <>
      <Stock file="S04" until={3.6} dim={0.15} blur={4} />
      <Top>SPREAD ACROSS ~160 PEOPLE ON BOARD</Top>
      <Center y={470}>
        <In at={0.4} from="fade">
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${rows}, 34px)`, gap: 10 }}>
            {Array.from({ length: rows * cols }).slice(0, 160).map((_, i) => {
              const hot = i === 85;
              return <div key={i} style={{ width: 34, height: 34, borderRadius: 8, background: hot ? C3.gold : "rgba(234,255,243,.12)", opacity: p(0.4 + (i % rows) * 0.02, 0.7 + (i % rows) * 0.02), boxShadow: hot ? `0 0 ${30 * p(4.0, 4.5)}px ${C3.gold}` : undefined }} />;
            })}
          </div>
        </In>
      </Center>
      <At x={760} y={800}><Col gap={4}><Label at={4.0} color={C3.gold}>Per seat</Label><Big at={4.0} color={C3.gold} size={140}>≈$1.50</Big></Col></At>
      <At x={1330} y={800}><Row gap={20}><IconAt at={6.4} name="bottle" size={150} color={C3.loss} /><Label at={6.5} color={C3.loss}>Less than gate water</Label></Row></At>
    </>
  );
};

const CostRecovery: React.FC = () => (
  <>
    <Top>THE AIRLINE DEAL</Top>
    <Center y={360}><Row gap={60}><IconAt at={0.1} name="building" size={150} color={C3.money} /><In at={1.8} from="fade"><Num color={C3.dim} size={90} glow={false}>⇄</Num></In><IconAt at={1.8} name="plane" size={150} color={C3.blue} /></Row></Center>
    <Center y={720}>
      <Row gap={160}>
        <div style={{ position: "relative" }}><Col><Label at={4.0} size={30}>Runway priced for</Label><Big at={4.0} color={C3.dim} size={120}>PROFIT</Big></Col><Strike at={5.3} w={420} /></div>
        <Col><Label at={8.1} size={30} color={C3.money}>Runway priced to</Label><Big at={8.1} color={C3.money} size={120}>RECOVER COSTS</Big></Col>
      </Row>
    </Center>
  </>
);

/** «Остаточный» метод: из расходов вычитают всё, что принесла земля; остаток платят авиакомпании */
const Residual: React.FC = () => {
  const { p } = useT();
  const fill = p(3.4, 4.4);
  const cuts = [{ at: 7.5, label: "PARKING", h: 140, c: C3.money }, { at: 8.1, label: "SHOPS", h: 60, c: C3.money }, { at: 8.8, label: "EVERYTHING ELSE", h: 80, c: C3.money }];
  const removed = cuts.reduce((s, c) => s + c.h * p(c.at, c.at + 0.5), 0);
  return (
    <>
      <Top>THE SIMPLEST VERSION · "RESIDUAL"</Top>
      <Center y={590}>
        <Row gap={140} align="flex-end">
          <Col>
            <div style={{ position: "relative", width: 400, height: 420, borderRadius: "0 0 40px 40px", boxShadow: "inset 0 0 0 3px rgba(234,255,243,.4)", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: (380 - removed) * fill, background: `linear-gradient(0deg, ${C3.blue}55, ${C3.blue}aa)` }} />
              <div style={{ position: "absolute", left: 0, right: 0, bottom: 10, textAlign: "center", opacity: p(10.2, 10.6) }}><Kicker size={22} color={C3.ink}>AIRLINES PAY THIS</Kicker></div>
            </div>
            <Label at={3.4}>Airport costs</Label>
          </Col>
          <In at={5.6} from="fade"><Num color={C3.dim} size={120} glow={false}>−</Num></In>
          <Col gap={12}>
            {cuts.map((c) => <In key={c.label} at={c.at} from="right"><div style={{ width: 400, height: c.h, borderRadius: 12, background: `${c.c}33`, boxShadow: `inset 0 0 0 2px ${c.c}`, display: "flex", alignItems: "center", justifyContent: "center" }}><Kicker size={24} color={c.c}>{c.label}</Kicker></div></In>)}
          </Col>
        </Row>
      </Center>
    </>
  );
};

const Seesaw: React.FC = () => {
  const { p } = useT();
  const tilt = 14 * p(1.9, 3.6);
  return (
    <>
      <Top>READ THAT AGAIN</Top>
      <Center y={480}>
        <div style={{ position: "relative", width: 1100, height: 400 }}>
          <div style={{ position: "absolute", left: 520, top: 260, width: 0, height: 0, borderLeft: "40px solid transparent", borderRight: "40px solid transparent", borderBottom: `90px solid ${C3.dim}` }} />
          <div style={{ position: "absolute", left: 0, top: 250, width: 1100, height: 14, borderRadius: 7, background: C3.ink, rotate: `${-tilt}deg` }}>
            <div style={{ position: "absolute", left: 30, top: -215, rotate: `${tilt}deg` }}><Col gap={6}><Label at={1.9} color={C3.money} size={28}>You spend more on parking</Label><Icon name="car" size={130} color={C3.money} /></Col></div>
            <div style={{ position: "absolute", right: 30, top: -215, rotate: `${tilt}deg` }}><Col gap={6}><Label at={3.3} color={C3.blue} size={28}>The airline pays less</Label><Icon name="plane" size={130} color={C3.blue} /></Col></div>
          </div>
        </div>
      </Center>
      <Center y={860}><Row gap={30}><IconAt at={5.9} name="ticket" size={90} color={C3.gold} /><Label at={6.0} color={C3.gold} size={26}>Your parking ticket subsidizes someone else's runway</Label></Row></Center>
    </>
  );
};

const Slider: React.FC = () => {
  const { p } = useT();
  const pos = 0.02 + 0.96 * p(4.2, 4.9) - 0.48 * p(8.8, 9.5);
  return (
    <>
      <Top>NOT EVERY AIRPORT WORKS THE SAME</Top>
      <Center y={480}>
        <In at={0.1} from="fade">
          <div style={{ position: "relative", width: 1200, height: 160 }}>
            <div style={{ position: "absolute", top: 70, left: 0, right: 0, height: 8, borderRadius: 4, background: `linear-gradient(90deg, ${C3.blue}, ${C3.gold})` }} />
            <div style={{ position: "absolute", top: 46, left: pos * 1200 - 28, width: 56, height: 56, borderRadius: 28, background: C3.ink, boxShadow: `0 0 30px ${C3.ink}88` }} />
            <div style={{ position: "absolute", top: 120, left: 0 }}><Kicker size={28} color={C3.blue}>Residual</Kicker></div>
            <div style={{ position: "absolute", top: -14, left: 600, translate: "-50% 0", opacity: p(8.8, 9.2) }}><Kicker size={28}>Hybrid · many land here</Kicker></div>
            <div style={{ position: "absolute", top: 120, right: 0 }}><Kicker size={28} color={C3.gold}>Compensatory</Kicker></div>
          </div>
        </In>
      </Center>
      <At x={560} y={760}><Label at={1.6} color={C3.blue} size={28}>Airlines cover what's left</Label></At>
      <At x={1380} y={760}><Label at={4.2} color={C3.gold} size={28}>Airlines pay for what they use</Label></At>
      <At x={1380} y={840}><Label at={6.7} color={C3.money} size={28}>Airport keeps the upside</Label></At>
      <CoinAt x={960} y={1000} h={220} tl={[{ at: 8.9, pose: "shrug" }]} />
    </>
  );
};

const Direction: React.FC = () => (
  <>
    <Top>SAME DIRECTION EVERYWHERE</Top>
    <Center y={540}>
      <Row gap={260}>
        <Col><IconAt at={2.7} name="plane" size={200} color={C3.blue} /><Big at={2.8} color={C3.blue} size={130}>↓</Big><Label at={2.9}>Airlines push for low fees</Label></Col>
        <Col><IconAt at={5.8} name="garage" size={200} color={C3.money} /><Big at={5.9} color={C3.money} size={130}>↑</Big><Label at={6.0} color={C3.money}>The money is on the ground</Label></Col>
      </Row>
    </Center>
  </>
);

const Subscribe: React.FC = () => (
  <>
    <Center y={300}><Title text="Enjoying the money trail?" hl={["money"]} size={76} at={0.3} /></Center>
    <CoinAt x={960} y={960} h={480} tl={[{ at: 0.1, pose: "sign" }, { at: 4.6, pose: "wink" }]} sign="SUBSCRIBE" />
  </>
);

// ================= ГЛАВА 3 · БИЛЕТ =================

const BigBite: React.FC = () => (
  <>
    <Center y={480}><Row gap={60}><IconAt at={0.1} name="ticket" size={260} color={C3.gold} /><Big at={0.6} color={C3.dim} size={120}>?</Big></Row></Center>
    <Center y={800}><Label at={0.4} size={28}>Does the airport take a big bite of your ticket?</Label></Center>
    <CoinAt x={1580} y={960} tl={[{ at: 4.3, pose: "suspicious" }]} flip />
  </>
);

const SampleTrip: React.FC = () => {
  const { p } = useT();
  const pts = [{ x: 420, y: 520, n: "PEORIA", at: 3.5 }, { x: 900, y: 360, n: "CHICAGO", at: 5.3 }, { x: 1460, y: 620, n: "RALEIGH-DURHAM", at: 4.2 }];
  return (
    <>
      <Top>SAMPLE ROUND TRIP · AIRLINES FOR AMERICA, JAN 2026</Top>
      <Center y={560}><In at={0.3} out={3.3} from="zoom"><Col gap={10}><Icon name="ticket" size={220} color={C3.gold} /><Kicker size={34} color={C3.gold}>One round trip</Kicker></Col></In></Center>
      <svg width={1920} height={1080} style={{ position: "absolute", inset: 0 }}>
        <path d={`M420 520 Q650 380 900 360 Q1200 400 1460 620`} fill="none" stroke="rgba(47,220,127,.6)" strokeWidth={3} strokeDasharray="10 12" strokeDashoffset={0} opacity={p(3.6, 5.6)} />
      </svg>
      {pts.map((q) => <At key={q.n} x={q.x} y={q.y}><In at={q.at} from="zoom"><Col gap={10}><div style={{ width: 26, height: 26, borderRadius: 13, background: C3.money, boxShadow: `0 0 20px ${C3.money}` }} /><Kicker size={26}>{q.n}</Kicker></Col></In></At>)}
      <At x={960} y={830}><Tag at={6.4} label="Total ticket" value="$400.00" rotate={0} /></At>
    </>
  );
};

const TaxSplit: React.FC = () => (
  <>
    <Top>WHAT'S INSIDE THE $400</Top>
    <Center y={480}>
      <Row gap={50}>
        <Tag at={0.2} label="Fare" value="$325.21" color={C3.blue} rotate={0} />
        <Tag at={0.4} label="Taxes & fees" value="$74.79" color={C3.loss} rotate={0} />
      </Row>
    </Center>
    <Center y={800}><Row gap={30}><IconAt at={5.8} name="city" size={120} color={C3.loss} /><Label at={5.9} color={C3.loss} size={26}>Most of it → federal government</Label></Row></Center>
    <Source>Source: Airlines for America, Jan 1 2026</Source>
  </>
);

const FedChips: React.FC = () => (
  <>
    <Stock file="S09" until={5.5} dim={0.08} blur={6} />
    <Top>THE FEDERAL PART</Top>
    <Center y={520}>
      <Row gap={50}>
        <Tag at={0.2} label="Ticket tax" value="7.5%" color={C3.loss} rotate={-3} />
        <Tag at={2.4} label="Per flight segment" value="$5.30" color={C3.loss} rotate={2} />
        <Tag at={5.2} label="TSA · each way" value="$5.60" color={C3.loss} rotate={-2} />
      </Row>
    </Center>
    <Source>Source: Airlines for America, Jan 1 2026</Source>
  </>
);

const PFC: React.FC = () => (
  <>
    <Top>THE AIRPORTS' SHARE</Top>
    <Center y={300}><Title text="Passenger Facility Charge" hl={["Facility"]} size={80} at={1.2} /></Center>
    <Center y={600}>
      <Row gap={90}>
        <Col><Big at={4.4} color={C3.money} size={140}>$4.50</Big><Label at={4.5}>Per airport</Label></Col>
        <Col><Big at={6.6} color={C3.blue} size={140}>× 4</Big><Label at={6.7}>Up to 2 airports each way</Label></Col>
        <Col><Big at={8.9} color={C3.gold} size={160}>= $18</Big><Label at={9.0} color={C3.gold}>On this ticket</Label></Col>
      </Row>
    </Center>
    <Source>Sources: FAA PFC program · Airlines for America</Source>
  </>
);

const Share: React.FC = () => (
  <>
    <At x={620} y={500}><Donut at={0.3} pct={0.045} color={C3.money} center="4.5%" label="OF YOUR TICKET" /></At>
    <At x={1300} y={500}>
      <Col gap={30} align="flex-start">
        <Label at={4.0} color={C3.money}>Only for approved projects</Label>
        <Row gap={30}><IconAt at={4.4} name="gate" size={130} color={C3.money} /><IconAt at={5.6} name="plane" size={130} color={C3.money} /></Row>
        <Label at={5.7} size={26}>New gates · runways</Label>
      </Col>
    </At>
  </>
);

const Frozen: React.FC = () => {
  const { p } = useT();
  const year = 2000; void p;
  return (
    <>
      <Center y={230}><Title text="Here's the kicker" hl={["kicker"]} size={84} at={0.3} /></Center>
      <Center y={560}>
        <Row gap={120}>
          <Col><Label at={1.6} size={30}>Congress capped it at</Label><Big at={1.6} color={C3.gold} size={190}>$4.50</Big></Col>
          <In at={3.6} from="zoom"><Col gap={6}><Icon name="calendar" size={130} color={C3.blue} /><Num color={C3.ink} size={120} glow={false}>{year}</Num></Col></In>
        </Row>
      </Center>
      <Center y={860}><Label at={5.8} color={C3.gold} size={34}>Hasn't moved since · still $4.50 in 2026</Label></Center>
    </>
  );
};

const PricesClimb: React.FC = () => {
  const { p } = useT();
  return (
    <>
      <Center y={540}>
        <Row gap={200} align="flex-end">
          <Col><IconAt at={0.15} name="cart" size={180} color={C3.loss} /><div style={{ width: 16, height: 300 * p(0.3, 2.6), borderRadius: 8, background: `linear-gradient(0deg, ${C3.loss}33, ${C3.loss})` }} /><Label at={0.5} color={C3.loss}>Prices · up</Label></Col>
          <Col><In at={3.3} from="zoom"><Num color={C3.dim} size={140}>$4.50</Num></In><div style={{ width: 16, height: 40, borderRadius: 8, background: C3.dim, opacity: p(3.3, 3.6) }} /><Label at={3.4}>That charge · flat</Label></Col>
        </Row>
      </Center>
    </>
  );
};

// ================= ГЛАВА 4 · ТЕРМИНАЛ =================

const MakeItUp: React.FC = () => (
  <>
    <Center y={480}>
      <Row gap={60}>
        <Col><IconAt at={0.8} name="ticket" size={170} color={C3.blue} /><Label at={0.9} color={C3.blue} size={26}>Ticket money · frozen</Label></Col>
        <Col><IconAt at={2.7} name="plane" size={170} color={C3.blue} /><Label at={2.8} color={C3.blue} size={26}>Airlines · pay at cost</Label></Col>
        <Col><IconAt at={5.8} name="store" size={170} color={C3.gold} /><Label at={5.9} color={C3.gold} size={26}>Somewhere you can see</Label></Col>
      </Row>
    </Center>
    <Center y={820}><Title text="The terminal." hl={["terminal."]} size={90} at={7.3} /></Center>
  </>
);

const NineDollar: React.FC = () => (
  <>
    <Stock file="S10" until={5.6} blur={5} />
    <Center y={460}><Row gap={50}><IconAt at={1.5} name="bottle" size={220} color={C3.gold} /><Big at={1.6} color={C3.gold} size={200}>$9</Big></Row></Center>
    <Center y={760}><div style={{ position: "relative" }}><Label at={1.8} size={28}>Pure airport profit?</Label><Strike at={4.7} w={460} /></div></Center>
  </>
);

const RentSpace: React.FC = () => (
  <>
    <Center y={460}>
      <Row gap={160}>
        <div style={{ position: "relative" }}><Col><IconAt at={0.7} name="store" size={200} color={C3.dim} /><Label at={0.8}>Runs the shops</Label></Col><Strike at={1.6} w={320} /></div>
        <Col><IconAt at={2.3} name="key" size={200} color={C3.money} /><Label at={2.4} color={C3.money}>Rents the space</Label></Col>
      </Row>
    </Center>
    <Center y={820}><Label at={5.1} size={26}>Example · one store lease at Seattle-Tacoma</Label></Center>
  </>
);

/** Разрез магазинчика у гейта и доля аэропорта в каждом чеке (CUTAWAY №2) */
const ShopCutaway: React.FC = () => {
  const { p } = useT();
  return (
    <>
      <Top>CUTAWAY · A STORE AT THE GATE</Top>
      <At x={620} y={560}>
        <In at={0.1} from="fade">
          <svg width={700} height={520} viewBox="0 0 700 520" style={{ overflow: "visible" }}>
            <rect x={40} y={40} width={620} height={440} rx={18} fill="rgba(234,255,243,.03)" stroke="rgba(234,255,243,.35)" strokeWidth={3} />
            {[0, 1, 2].map((i) => <rect key={i} x={80} y={90 + i * 90} width={300} height={60} rx={8} fill="rgba(47,220,127,.10)" stroke="rgba(47,220,127,.4)" strokeWidth={2} />)}
            <rect x={440} y={260} width={180} height={150} rx={12} fill="rgba(255,210,63,.12)" stroke={C3.gold} strokeWidth={2} />
            <text x={530} y={300} textAnchor="middle" fontFamily={FONT_NUM} fontWeight={600} fontSize={20} letterSpacing="4" fill={C3.gold}>REGISTER</text>
            {/* чек выезжает */}
            <g transform={`translate(470 ${330 - 160 * p(0.4, 1.0)})`}><rect width={120} height={150} rx={6} fill={C3.ink} opacity={0.9} />{[0, 1, 2, 3].map((i) => <rect key={i} x={16} y={20 + i * 26} width={88} height={8} rx={4} fill="#0b1210" opacity={0.35} />)}</g>
            {/* отрезанная полоска уходит аэропорту */}
            <g transform={`translate(${470 + 140 * p(1.0, 1.8)} ${170 - 140 * p(1.0, 1.8)})`} opacity={p(0.9, 1.1)}><rect width={120} height={30} rx={4} fill={C3.money} /></g>
          </svg>
        </In>
      </At>
      <At x={1460} y={300}><Big at={1.8} color={C3.money} size={170}>16–20%</Big></At>
      <At x={1460} y={420}><Label at={1.9} color={C3.money}>Of every sale → airport</Label></At>
      <At x={1460} y={680}>
        <Col gap={14} align="flex-start">
          <Label at={3.2} size={28}>Sales under $5M · 16%</Label>
          <Label at={3.4} size={28}>$5M–$10M · 18%</Label>
          <Label at={3.6} size={28}>Over $10M · 20%</Label>
        </Col>
      </At>
      <Source>Source: Port of Seattle lease & concession agreement, 2021</Source>
    </>
  );
};

const TenSplit: React.FC = () => {
  const { p } = useT();
  const cut = p(2.2, 2.8);
  return (
    <>
      <Top>YOU HAND OVER $10</Top>
      <Center y={430}>
        <In at={0.6} from="zoom">
          <div style={{ display: "flex", gap: 14 * cut }}>
            <div style={{ width: 640, height: 300, borderRadius: "18px 0 0 18px", background: "linear-gradient(135deg,#1d3a2e,#13261f)", boxShadow: "inset 0 0 0 2px rgba(234,255,243,.35)", display: "flex", alignItems: "center", justifyContent: "center" }}><Num color={C3.ink} size={160} glow={false}>$8</Num></div>
            <div style={{ width: 160, height: 300, borderRadius: "0 18px 18px 0", background: `${C3.money}33`, boxShadow: `inset 0 0 0 2px ${C3.money}`, display: "flex", alignItems: "center", justifyContent: "center", translate: `${60 * cut}px ${-30 * cut}px` }}><Num color={C3.money} size={80} glow={false}>$2</Num></div>
          </div>
        </In>
      </Center>
      <At x={1360} y={640}><Label at={2.3} color={C3.money}>Up to $2 → airport</Label></At>
      <CoinAt x={1660} y={980} h={260} tl={[{ at: 2.4, pose: "point" }]} flip />
      <Center y={820}>
        <Row gap={110}>
          <Col><IconAt at={5.6} name="key" size={110} color={C3.dim} /><Label at={5.6} size={26}>Staff</Label></Col>
          <Col><IconAt at={7.0} name="cart" size={110} color={C3.dim} /><Label at={7.0} size={26}>Stock</Label></Col>
          <Col><IconAt at={7.7} name="receipt" size={110} color={C3.dim} /><Label at={7.7} size={26}>Own costs</Label></Col>
        </Row>
      </Center>
    </>
  );
};

const StreetPricing: React.FC = () => (
  <>
    <Top>NOT A FREE-FOR-ALL · "STREET PRICING"</Top>
    <Center y={460}>
      <Row gap={160}>
        <Col><IconAt at={4.3} name="city" size={180} color={C3.dim} /><Label at={4.4}>Same item · in town</Label><Big at={9.5} color={C3.dim} size={90}>100%</Big></Col>
        <Col><IconAt at={4.6} name="store" size={180} color={C3.gold} /><Label at={4.7} color={C3.gold}>At the airport</Label></Col>
      </Row>
    </Center>
    <Center y={800}>
      <Row gap={140}>
        <Col><Big at={7.6} color={C3.money} size={120}>+11%</Big><Label at={7.7}>San Francisco cap</Label></Col>
        <Col><Big at={11.9} color={C3.gold} size={120}>+15%</Big><Label at={12.0}>Atlanta allows</Label></Col>
      </Row>
    </Center>
    <CoinAt x={1680} y={980} h={260} tl={[{ at: 9.5, pose: "suspicious" }]} flip />
    <Source>Sources: SFO via SF Standard (2024) · ATL via The Points Guy (2022)</Source>
  </>
);

const Portland: React.FC = () => (
  <>
    <Stock file="S11" until={5.6} blur={5} />
    <Center y={420}><Row gap={40}><IconAt at={0.15} name="pin" size={180} color={C3.gold} /><Col align="flex-start"><Big at={0.3} color={C3.gold} size={110}>PORTLAND</Big><Label at={2.3}>Street pricing since the 1980s</Label></Col></Row></Center>
    <Center y={760}><Row gap={30}><IconAt at={4.8} name="cart" size={120} color={C3.money} /><Label at={4.9} color={C3.money} size={26}>Passengers spend more when they don't feel gouged</Label></Row></Center>
    <Source>Source: PDX spokesperson via SF Standard, 2024</Source>
  </>
);

const PercentLogic: React.FC = () => (
  <>
    <Top>THAT'S THE LOGIC</Top>
    <Center y={420}><Row gap={40}><Big at={1.5} color={C3.money} size={200}>%</Big><Label at={1.6} color={C3.money} size={28}>The airport's cut is a percentage</Label></Row></Center>
    <Center y={760}>
      <Row gap={140}>
        <Col><Row gap={10}><IconAt at={4.3} name="cup" size={100} color={C3.money} /><IconAt at={4.5} name="cup" size={100} color={C3.money} /><IconAt at={4.7} name="cup" size={100} color={C3.money} /></Row><Label at={4.4} color={C3.money}>Buy more often ✓</Label></Col>
        <div style={{ position: "relative" }}><Col><IconAt at={5.7} name="cup" size={100} color={C3.loss} /><Label at={5.8} color={C3.loss}>Pay more once</Label></Col><Strike at={6.3} w={300} /></div>
      </Row>
    </Center>
  </>
);

const FoodShops: React.FC = () => (
  <>
    <Top>ALL SHOPS + RESTAURANTS · ALL U.S. AIRPORTS</Top>
    <At x={560} y={520}><Col><Row gap={20}><IconAt at={1.0} name="store" size={150} color={C3.blue} /><IconAt at={1.5} name="cup" size={150} color={C3.blue} /></Row><Big at={5.5} color={C3.blue} size={150}>$1.7B</Big></Col></At>
    <At x={1320} y={520}><Donut at={8.5} pct={0.13} color={C3.blue} center="13¢" label="OF EVERY NON-AIRLINE $" /></At>
    <At x={1320} y={860}><Label at={9.2} color={C3.money} size={28}>Parking + rides · 46¢</Label></At>
    <CoinAt x={300} y={990} h={240} tl={[{ at: 8.6, pose: "point" }]} />
    <Source>Source: FAA CATS Report 127, FY2023, via ACI-NA</Source>
  </>
);

const SideVsMain: React.FC = () => {
  const { p } = useT();
  return (
    <>
      <Center y={520}>
        <svg width={1400} height={640} viewBox="0 0 1400 640">
          {Array.from({ length: 10 }).map((_, r) => Array.from({ length: 22 }).map((__, c) => <rect key={`${r}-${c}`} x={20 + c * 62} y={20 + r * 60} width={46} height={30} rx={6} fill={C3.money} opacity={0.12 + 0.25 * p(5.2 + r * 0.04, 5.6 + r * 0.04)} />))}
          <rect x={560} y={230} width={280} height={180} rx={16} fill="#0b1210" stroke={C3.blue} strokeWidth={3} opacity={p(0.1, 0.4)} />
          <text x={700} y={330} textAnchor="middle" fontFamily={FONT_NUM} fontWeight={600} fontSize={24} letterSpacing="5" fill={C3.blue} opacity={p(0.1, 0.4)}>TERMINAL</text>
        </svg>
      </Center>
      <At x={960} y={150}><Label at={2.2} color={C3.blue} size={26}>The terminal · a side business</Label></At>
      <At x={960} y={930}><Label at={5.2} color={C3.money} size={30}>The parking lot · the main event</Label></At>
    </>
  );
};

const AtlSplit: React.FC = () => {
  const { p } = useT();
  const mv = p(7.4, 8.3);
  return (
    <>
      <Top>ATLANTA</Top>
      <Center y={300}><Label at={3.7} size={32}>Inside-terminal shops · what the airport earns</Label></Center>
      <Center y={560}>
        <Row gap={60 + 360 * mv}>
          <In at={0.4} from="zoom"><div style={{ width: 260, height: 260, borderRadius: "130px 0 0 130px", background: `${C3.money}44`, boxShadow: `inset 0 0 0 3px ${C3.money}`, display: "flex", alignItems: "center", justifyContent: "center" }}><Num color={C3.money} size={90} glow={false}>50%</Num></div></In>
          <In at={0.4} from="zoom"><div style={{ width: 260, height: 260, borderRadius: "0 130px 130px 0", background: `${C3.blue}44`, boxShadow: `inset 0 0 0 3px ${C3.blue}`, display: "flex", alignItems: "center", justifyContent: "center", translate: `${40 * p(2.7, 3.2)}px 0` }}><Num color={C3.blue} size={90} glow={false}>50%</Num></div></In>
        </Row>
      </Center>
      <At x={1690} y={560}><IconAt at={7.4} name="plane" size={150} color={C3.blue} /></At>
      <Center y={850}><Label at={7.5} color={C3.blue} size={26}>Half is credited back to the airlines</Label></Center>
      <Source>Source: ATL FY2025–26 rates & charges</Source>
    </>
  );
};

const WaterPath: React.FC = () => {
  const { p } = useT();
  const pts = [{ x: 300, n: "bottle" as IconName, l: "Your water", at: 0.9, c: C3.gold }, { x: 700, n: "store" as IconName, l: "The shop", at: 1.6, c: C3.gold }, { x: 1100, n: "building" as IconName, l: "The airport", at: 2.3, c: C3.money }, { x: 1500, n: "plane" as IconName, l: "Lower airline fees", at: 6.4, c: C3.blue }];
  const k = p(0.9, 6.6);
  return (
    <>
      <svg width={1920} height={1080} style={{ position: "absolute", inset: 0 }}><line x1={300} y1={470} x2={300 + 1200 * k} y2={470} stroke="rgba(255,210,63,.6)" strokeWidth={3} strokeDasharray="10 12" /></svg>
      {pts.map((q) => <At key={q.l} x={q.x} y={470}><In at={q.at} from="zoom"><Col><Icon name={q.n} size={150} color={q.c} /><Kicker size={26} color={q.c}>{q.l}</Kicker></Col></In></At>)}
      <Center y={830}><Title text="That's how deep this goes" hl={["deep"]} size={72} at={9.1} /></Center>
      <Top>FOLLOW ONE BOTTLE OF WATER</Top>
    </>
  );
};

const Stranger: React.FC = () => (
  <>
    <Center y={300}><Title text="Even stranger places" hl={["stranger"]} size={90} at={0.4} /></Center>
    <CoinAt x={960} y={980} h={420} tl={[{ at: 0.1, pose: "suspicious" }]} />
  </>
);

// ================= ГЛАВА 5 · ВСЁ ОСТАЛЬНОЕ =================

const QuickStat: React.FC<{ stock?: string; icon: IconName; label: string; value?: string; valueAt?: number; color?: string; source?: string }> = ({ stock, icon, label, value, valueAt = 0.3, color = C3.money, source }) => (
  <>
    {stock && <Stock file={stock} until={4.2} blur={5} />}
    <Center y={480}><Row gap={60}><IconAt at={0.1} name={icon} size={240} color={color} />{value && <Big at={valueAt} color={color} size={200}>{value}</Big>}</Row></Center>
    <Center y={780}><Label at={0.2} size={30} color={color}>{label}</Label></Center>
    {source && <Source>{source}</Source>}
  </>
);

const Landlords: React.FC = () => (
  <>
    <Stock file="S14" until={5.0} />
    <Center y={480}>
      <Row gap={90}>
        <Col><IconAt at={0.1} name="building" size={170} color={C3.ink} /><Label at={0.2} size={28}>Office parks</Label></Col>
        <Col><IconAt at={1.2} name="warehouse" size={170} color={C3.ink} /><Label at={1.3} size={28}>Warehouses</Label></Col>
        <Col><IconAt at={2.1} name="plane" size={170} color={C3.ink} /><Label at={2.2} size={28}>Cargo buildings</Label></Col>
      </Row>
    </Center>
    <Center y={800}><Label at={4.0} color={C3.money} size={30}>All paying rent to the airport</Label></Center>
  </>
);

const GroundItself: React.FC = () => {
  const { p } = useT();
  return (
    <>
      <AbsoluteFill style={{ translate: `0 ${-300 * p(0.2, 2.0)}px` }}>
        {[0, 1, 2, 3, 4].map((i) => <div key={i} style={{ position: "absolute", left: 0, right: 0, top: 600 + i * 180, height: 180, background: ["#1d3a2e", "#3a2f1d", "#2d261a", "#241f17", "#1a1712"][i], opacity: 0.6 }} />)}
      </AbsoluteFill>
      <Center y={300}><Title text="In Texas · the ground itself" hl={["ground"]} size={80} at={0.15} /></Center>
    </>
  );
};

const Dallas: React.FC = () => (
  <>
    <Stock file="S16" until={6.0} />
    <Top>DALLAS FORT WORTH INTERNATIONAL</Top>
    <Center y={500}><Big at={1.9} color={C3.ink} size={180}>≈18,000 acres</Big></Center>
    <Center y={760}><Label at={6.0} color={C3.gold} size={32}>On top of the Barnett Shale gas field</Label></Center>
  </>
);

/** Разрез земли под аэропортом: скважина до сланца (CUTAWAY №3) */
const ShaleCutaway: React.FC = () => {
  const { p } = useT();
  const drill = p(3.0, 7.9);
  return (
    <>
      <Top>CUTAWAY · UNDER THE AIRPORT · 2006</Top>
      <Center y={690}>
        <svg width={1600} height={700} viewBox="0 0 1600 700" style={{ overflow: "visible" }}>
          <rect x={0} y={120} width={1600} height={22} fill="rgba(234,255,243,.3)" />
          {/* полоса и самолёт на поверхности */}
          <rect x={200} y={100} width={700} height={20} rx={4} fill="rgba(234,255,243,.25)" />
          <g transform="translate(480 40) scale(1.2)"><path d="M32 6 Q36 6 36 14 L36 26 L58 38 L58 43 L36 36 L36 50 L43 55 L43 58 L32 55 L21 58 L21 55 L28 50 L28 36 L6 43 L6 38 L28 26 L28 14 Q28 6 32 6 Z" fill="rgba(234,255,243,.15)" stroke={C3.ink} strokeWidth={2} transform="rotate(90 32 32)" /></g>
          {/* слои породы */}
          {[["#2d3a2a", 142, 120], ["#3a3122", 262, 140], ["#2e281c", 402, 120]].map(([c, y, h], i) => <rect key={i} x={0} y={y as number} width={1600} height={h as number} fill={c as string} opacity={0.7} />)}
          <rect x={0} y={522} width={1600} height={110} fill="rgba(255,210,63,.12)" stroke={C3.gold} strokeWidth={2} />
          <text x={60} y={556} fontFamily={FONT_NUM} fontWeight={600} fontSize={26} letterSpacing="6" fill={C3.gold}>BARNETT SHALE · NATURAL GAS</text>
          {/* вышка и скважина: вниз, потом вдоль пласта */}
          <g transform="translate(1180 20)"><path d="M0 100 L30 0 L60 100 M10 70 L50 70 M18 40 L42 40" fill="none" stroke={C3.ink} strokeWidth={3} /></g>
          <path d={`M1210 122 L1210 ${122 + 440 * Math.min(1, drill * 1.6)}`} stroke={C3.money} strokeWidth={6} />
          <path d={`M1210 575 L${1210 - 700 * Math.max(0, drill * 1.6 - 1) / 0.6} 575`} stroke={C3.money} strokeWidth={6} opacity={drill > 0.62 ? 1 : 0} />
        </svg>
      </Center>
      <At x={960} y={250}>
        <Row gap={70}>
          <Col gap={4}><Label at={1.6} size={30}>Chesapeake Energy paid</Label><Label at={4.3} color={C3.gold} size={24}>just for the right to drill</Label></Col>
          <Counter to={185} at={4.3} dur={1.0} fmt={mil} color={C3.gold} size={120} />
          <Label at={9.3} color={C3.money} size={26}>+ 25% royalty</Label>
        </Row>
      </At>
      <Source>Sources: Chesapeake SEC filing 2007 · Bond Buyer</Source>
    </>
  );
};

const Wells: React.FC = () => (
  <>
    <Center y={480}><Row gap={70}><IconAt at={0.1} name="well" size={200} color={C3.gold} /><IconAt at={0.5} name="well" size={200} color={C3.gold} /><IconAt at={0.9} name="well" size={200} color={C3.gold} /><IconAt at={2.7} name="plane" size={200} color={C3.blue} /></Row></Center>
    <Center y={780}><Label at={1.2} size={28}>Gas wells on airport land</Label></Center>
    <Center y={860}><Label at={2.8} color={C3.blue} size={30}>At one of the busiest airports in the world</Label></Center>
  </>
);

const Royalties: React.FC = () => {
  const { p } = useT();
  const k = p(5.0, 15.4);
  const x0 = 360, x1 = 1560, y0 = 330, y1 = 760;
  const x = x0 + (x1 - x0) * k;
  const y = y0 + (y1 - y0) * Math.pow(k, 0.7);
  return (
    <>
      <Top>IT DIDN'T LAST FOREVER · DFW GAS ROYALTIES</Top>
      <svg width={1920} height={1080} style={{ position: "absolute", inset: 0 }}>
        <line x1={x0} y1={800} x2={x1} y2={800} stroke="rgba(234,255,243,.25)" strokeWidth={2} />
        <path d={`M${x0} ${y0} ${Array.from({ length: 30 }).map((_, i) => { const kk = (i / 29) * k; return `L${x0 + (x1 - x0) * kk} ${y0 + (y1 - y0) * Math.pow(kk, 0.7)}`; }).join(" ")}`} fill="none" stroke={C3.loss} strokeWidth={5} opacity={p(4.8, 5.0)} />
        <circle cx={x0} cy={y0} r={12} fill={C3.gold} opacity={p(1.9, 2.1)} />
        <circle cx={x} cy={y} r={10} fill={C3.loss} opacity={p(5.0, 5.2)} />
      </svg>
      <At x={x0 + 40} y={y0 - 70} anchor="l"><Col gap={0} align="flex-start"><Big at={4.2} color={C3.gold} size={90}>~$30M</Big><Label at={1.9} size={26}>First year of production</Label></Col></At>
      <At x={720} y={680}><Label at={8.3} size={28}>Chesapeake sells its Barnett assets</Label></At>
      <At x={720} y={730}><Label at={10.4} color={C3.loss} size={28}>About half the wells shut down</Label></At>
      <At x={1200} y={850}><Label at={12.7} size={26}>Late 2010s</Label></At>
      <At x={x1 - 40} y={y1 - 110} anchor="r"><Col gap={0} align="flex-end"><Big at={15.4} color={C3.loss} size={90}>$2.3M</Big><Label at={15.5} size={24}>A year</Label></Col></At>
      <Source>Sources: Aviation Pros · D Magazine (2019)</Source>
    </>
  );
};

const RealEstate: React.FC = () => {
  const { p } = useT();
  return (
    <>
      <Stock file="S18" until={6.5} dim={0.05} />
      <AbsoluteFill style={{ backgroundImage: "linear-gradient(rgba(255,210,63,.25) 2px, transparent 2px), linear-gradient(90deg, rgba(255,210,63,.25) 2px, transparent 2px)", backgroundSize: "160px 160px", opacity: 0.6 * p(4.7, 5.4) }} />
      <Top>BUT IT PROVES THE POINT</Top>
      <Center y={430}><div style={{ position: "relative" }}><Label at={2.3} size={30}>A place where planes land?</Label><Strike at={3.4} w={560} /></div></Center>
      <Center y={600}><Title text="A giant piece of real estate" hl={["real", "estate"]} size={86} at={4.7} /></Center>
      <Center y={800}><Label at={6.9} color={C3.gold} size={32}>Planes are the reason people show up</Label></Center>
    </>
  );
};

// ================= ГЛАВА 6 · КУДА УХОДИТ ПРИБЫЛЬ =================

const Owners: React.FC = () => (
  <>
    <Top>WHO OWNS U.S. AIRPORTS?</Top>
    <Center y={300}><Title text="Almost all · the public" hl={["public"]} size={80} at={0.4} /></Center>
    <Center y={620}>
      <Row gap={90}>
        {[{ l: "City", at: 4.3, i: "city" as IconName }, { l: "County", at: 5.0, i: "building" as IconName }, { l: "State", at: 5.9, i: "flag" as IconName }, { l: "Airport authority", at: 6.8, i: "key" as IconName }].map((o) => <Col key={o.l}><IconAt at={o.at} name={o.i} size={150} color={C3.blue} /><Label at={o.at} size={28}>{o.l}</Label></Col>)}
      </Row>
    </Center>
    <Source>Source: GAO-15-42 · CRS R43545</Source>
  </>
);

const Branson: React.FC = () => (
  <>
    <Center y={460}><Row gap={50}><IconAt at={0.8} name="pin" size={220} color={C3.gold} /><Col align="flex-start"><Label at={0.9} color={C3.gold}>Basically one exception</Label><Big at={3.3} color={C3.ink} size={110}>BRANSON, MO</Big><Label at={5.8} color={C3.gold} size={26}>Built and run by private investors</Label></Col></Row></Center>
    <Source>Source: Congressional Research Service, R43545</Source>
  </>
);

const CityRoads: React.FC = () => {
  const { p } = useT();
  return (
    <>
      <Stock file="S17" until={5.5} />
      <Center y={480}>
        <Row gap={60 + 200 * (1 - p(1.0, 2.6))}>
          <IconAt at={0.1} name="bag" size={200} color={C3.money} />
          <IconAt at={1.0} name="city" size={220} color={C3.ink} />
        </Row>
      </Center>
      <Center y={780}><Label at={1.0} size={28}>Take the parking money · fix the roads?</Label></Center>
      <Center y={880}><Big at={4.8} color={C3.loss} size={120}>IT CAN'T</Big></Center>
    </>
  );
};

const Stamp: React.FC<{ at: number; text: string; color?: string }> = ({ at, text, color = C3.loss }) => {
  const { p } = useT();
  const k = p(at, at + 0.25);
  return <div style={{ opacity: k, scale: String(1.6 - 0.6 * k), rotate: "-8deg", padding: "14px 34px", border: `5px solid ${color}`, borderRadius: 14, fontFamily: FONT_NUM, fontWeight: 700, fontSize: 64, letterSpacing: "0.1em", color, boxShadow: `0 0 40px ${color}44` }}>{text}</div>;
};

const Law: React.FC = () => {
  const { p } = useT();
  const swap = p(10.8, 11.2);
  return (
    <>
      <Top>FEDERAL LAW · 49 U.S.C. § 47107(b)</Top>
      <Center y={280}><Label at={0.4} size={36}>Airports that take federal grants</Label></Center>
      <Center y={520}>
        <Row gap={70}>
          <Col><IconAt at={4.9} name="loop" size={190} color={C3.money} /><Label at={5.0} color={C3.money} size={26}>Money stays in the airport system</Label></Col>
          <Col><IconAt at={7.6} name="city" size={190} color={C3.loss} /><Label at={7.7} color={C3.loss} size={26}>Pull it out for the city budget</Label></Col>
        </Row>
      </Center>
      <Center y={860}><div style={{ opacity: 1 - swap }}><Stamp at={9.4} text="AGAINST THE LAW" /></div></Center>
      <Center y={750}><Label at={11.0} size={30}>The FAA's name for it</Label></Center>
      <Center y={900}><Stamp at={13.4} text="REVENUE DIVERSION" color={C3.gold} /></Center>
    </>
  );
};

const Loop: React.FC = () => {
  const { p } = useT();
  const nodes = [{ a: -90, l: "Parking", i: "garage" as IconName, at: 1.9 }, { a: 0, l: "Terminal", i: "store" as IconName, at: 2.0 }, { a: 90, l: "Gates", i: "gate" as IconName, at: 3.8 }, { a: 180, l: "Lower landing fees", i: "plane" as IconName, at: 8.2 }];
  const R = 300;
  return (
    <>
      <Top>CUTAWAY · THE MONEY LOOP</Top>
      <svg width={1920} height={1080} style={{ position: "absolute", inset: 0 }}>
        <circle cx={960} cy={560} r={R} fill="none" stroke="rgba(255,210,63,.5)" strokeWidth={4} strokeDasharray={`${2 * Math.PI * R * p(0.7, 3.8)} 4000`} style={{ rotate: "-90deg", transformOrigin: "960px 560px" }} />
        {Array.from({ length: 8 }).map((_, i) => { const a = ((i / 8 + p(0.7, 12) * 0.6) * 2 * Math.PI) - Math.PI / 2; return <circle key={i} cx={960 + R * Math.cos(a)} cy={560 + R * Math.sin(a)} r={9} fill={C3.gold} opacity={p(3.8, 4.2)} />; })}
      </svg>
      {nodes.map((n) => { const a = (n.a * Math.PI) / 180; return <At key={n.l} x={960 + R * Math.cos(a)} y={560 + R * Math.sin(a)}><In at={n.at} from="zoom"><Col gap={6}><div style={{ width: 150, height: 150, borderRadius: 75, background: "rgba(13,32,24,.95)", boxShadow: "inset 0 0 0 2px rgba(255,210,63,.5)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={n.i} size={90} color={C3.gold} /></div><Kicker size={26}>{n.l}</Kicker></Col></In></At>; })}
      <Center y={560}><In at={0.7} from="zoom"><Icon name="loop" size={140} color={C3.money} /></In></Center>
      <At x={1560} y={270}><Label at={6.2} size={30} color={C3.gold}>At many airports</Label></At>
    </>
  );
};

// ================= ФИНАЛ =================

const Callback: React.FC = () => {
  const { p } = useT();
  return (
    <>
      <Top>REMEMBER THE OPENING?</Top>
      <Center y={520}>
        <Row gap={300}>
          <Col><IconAt at={0.1} name="car" size={180} color={C3.loss} /><Tag at={0.3} label="Your car · 4 days" value="$275" color={C3.loss} rotate={-3} /></Col>
          <Col><IconAt at={0.1} name="plane" size={180} color={C3.gold} /><Tag at={0.3} label="A 737 · one landing" value="$238" rotate={3} /></Col>
        </Row>
      </Center>
      <svg width={1920} height={1080} style={{ position: "absolute", inset: 0 }}><line x1={760} y1={520} x2={760 + 400 * p(5.5, 6.3)} y2={520} stroke={C3.gold} strokeWidth={5} /><circle cx={760 + 400 * p(5.5, 6.3)} cy={520} r={10} fill={C3.gold} opacity={p(5.5, 5.7)} /></svg>
      <Center y={880}><Label at={5.5} color={C3.gold} size={26}>The jet is cheap partly because your car is expensive</Label></Center>
    </>
  );
};

const HiddenLine: React.FC = () => {
  const { p } = useT();
  return (
    <>
      <Center y={520}>
        <In at={0.15} from="up">
          <div style={{ width: 520, padding: "44px 46px", borderRadius: 10, background: "#f2efe6", color: "#0b1210", fontFamily: "'Courier New', monospace", fontSize: 30, boxShadow: "0 40px 80px rgba(0,0,0,.5)" }}>
            <div style={{ textAlign: "center", fontWeight: 700, letterSpacing: "0.2em" }}>PARKING RECEIPT</div>
            <div style={{ marginTop: 26, display: "flex", justifyContent: "space-between" }}><span>Hourly garage</span><span>4 days</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>Total</span><span>$275.00</span></div>
            <div style={{ marginTop: 22, borderTop: "2px dashed #0b1210", paddingTop: 18, display: "flex", justifyContent: "space-between", color: "#9a7b00", opacity: p(2.3, 2.9), filter: `blur(${6 * p(4.5, 5.6)}px)` }}><span>Runway support</span><span>incl.</span></div>
          </div>
        </In>
      </Center>
      <Center y={900}><Label at={4.5} size={32}>You just never see it on the receipt</Label></Center>
      <CoinAt x={1500} y={960} tl={[{ at: 2.3, pose: "point" }]} flip />
    </>
  );
};

const Question: React.FC = () => (
  <>
    <Center y={260}><Title text="What's the most you've paid to park?" hl={["most"]} size={72} at={0.3} /></Center>
    <CoinAt x={960} y={990} h={460} tl={[{ at: 0.1, pose: "sign" }, { at: 4.4, pose: "celebrate" }]} sign="YOUR RECORD?" />
    <At x={1480} y={720}><Row gap={16}><IconAt at={4.4} name="phone" size={110} color={C3.money} /><Label at={4.5} color={C3.money}>Tell me in the comments</Label></Row></At>
  </>
);

const EndCard: React.FC = () => (
  <>
    <Top y={140} at={0.4}>NEXT · THE SAME TRICK, ANOTHER BUSINESS</Top>
    <At x={720} y={540}>
      <In at={0.6} from="zoom">
        <div style={{ width: 820, height: 461, borderRadius: 24, background: "linear-gradient(160deg,#1d3a2e,#0c1814)", boxShadow: "0 50px 90px rgba(0,0,0,.55), inset 0 0 0 2px rgba(255,210,63,.4)", display: "flex", alignItems: "center", justifyContent: "center", gap: 30 }}>
          <PopcornBucket size={260} />
          <Col align="flex-start" gap={8}><Kicker size={26} color={C3.gold}>HIDDEN MARGIN · EP. 1</Kicker><div style={{ fontFamily: FONT_NUM, fontWeight: 300, fontSize: 48, color: C3.ink, lineHeight: 1.1, width: 380 }}>How Movie Theaters Really Make Money</div></Col>
        </div>
      </In>
    </At>
    <At x={1560} y={780}><Coin enter={6.4} h={360} timeline={[{ at: 6.4, pose: "point" }]} flip /></At>
    <At x={1500} y={300}><Label at={9.1} color={C3.gold} size={28}>It's the popcorn</Label></At>
  </>
);

// ---------- сцены ----------
type Beat = { from: number; to: number; tag?: [number, string]; el: React.ReactNode };
const BEATS: Beat[] = [
  // --- хук ---
  { from: 0.0, to: 4.4, el: (<><Stock file="S02" until={4.4} /><Top>RUNNING LATE · TERMINAL GARAGE</Top><At x={330} y={300}><IconAt at={0.05} name="clock" size={130} color={C3.loss} /></At><Center y={760}><Label at={2.5} color={C3.money} size={30}>P · Hourly garage</Label></Center></>) }, // at: 0.05, 2.5
  { from: 4.4, to: 6.3, el: (<><Stock file="S03" until={1.9} blur={7} /><Top at={0.05}>GRAB A TICKET · RUN</Top><Center y={700}><IconAt at={1.1} name="suitcase" size={150} color={C3.money} /></Center></>) }, // at: 0.05, 1.1
  { from: 6.3, to: 11.95, el: <PayMachine /> }, // at: 0.05, 2.15, 3.3, 4.8
  { from: 11.95, to: 20.85, el: (<><Stock file="S04" until={8.9} dim={0.05} /><Top>MEANWHILE, ON THE RUNWAY</Top><At x={330} y={800} anchor="l"><Callout at={4.0} label="MAX LANDING WEIGHT" value="146,300 lb" sub="BOEING 737-800 · ≈ 73 TONS" color={C3.blue} line={120} vsize={64} /></At><At x={1590} y={800} anchor="r"><Callout at={6.25} side="l" label="LANDING FEE · ATLANTA" value="$238" sub="MAIN AIRLINES · FY2026 RATE" color={C3.gold} line={120} vsize={110} /></At><Source>Sources: ATL FY2026 rates & charges · Boeing airport planning data</Source></>) }, // at: 0.05, 4.0, 6.25
  { from: 20.85, to: 25.95, el: <CarVsJet /> }, // at: 0.1, 1.9, 3.6
  { from: 25.95, to: 35.45, el: <CarsVsLanding /> }, // at: 0.05, 0.15, 2.4, 4.9, 6.05, 7.4
  { from: 35.45, to: 42.15, el: <TripMap /> }, // at: 0.05, 0.1, 2.25, 4.8
  { from: 42.15, to: 46.4, el: <LockedBag /> }, // at: 0.05, 1.0, 1.1, 3.0
  // --- глава 1 ---
  { from: 46.4, to: 52.75, tag: [1, "The curb"], el: <Landlord /> }, // at: 0.1, 0.4, 3.7, 4.8
  { from: 52.75, to: 63.55, tag: [1, "The curb"], el: <Mall /> }, // at: 0.1, 2.4, 3.5, 5.2, 7.2
  { from: 63.55, to: 69.3, tag: [1, "The curb"], el: <Mall airport /> }, // at: 0.1, 1.2, 4.0
  { from: 69.3, to: 84.85, tag: [1, "The curb"], el: <Stacks /> }, // at: 0.05, 2.6, 5.9, 8.2, 9.6, 12.6
  { from: 84.85, to: 89.05, tag: [1, "The curb"], el: <HalfDonut /> }, // at: 0.4, 2.2
  { from: 89.05, to: 95.3, tag: [1, "The curb"], el: <ParkingStock /> }, // at: 0.05, 2.0, 4.5
  { from: 95.3, to: 100.95, tag: [1, "The curb"], el: <MoreThanCombined /> }, // at: 0.15, 0.8, 1.8, 2.7, 4.4
  { from: 100.95, to: 108.35, tag: [1, "The curb"], el: <PerPassenger /> }, // at: 0.05, 0.4, 2.6, 4.8
  { from: 108.35, to: 116.55, tag: [1, "The curb"], el: <CantPack /> }, // at: 0.15, 3.1, 5.0, 6.9
  { from: 116.55, to: 129.35, tag: [1, "The curb"], el: <PriceLadder /> }, // at: 0.05, 1.7, 3.5, 6.1, 8.3, 10.1
  { from: 129.35, to: 135.15, tag: [1, "The curb"], el: <GarageCutaway /> }, // at: 0.1, 1.2, 2.0, 4.7
  { from: 135.15, to: 140.15, tag: [1, "The curb"], el: <WeakSpot /> }, // at: 0.1, 1.6, 2.9
  { from: 140.15, to: 152.85, tag: [1, "The curb"], el: <Drop /> }, // at: 0.05, 2.0, 4.3, 6.7, 9.4, 11.4
  { from: 152.85, to: 159.0, tag: [1, "The curb"], el: <EmptyDeck /> }, // at: 0.05, 1.9, 4.6
  { from: 159.0, to: 170.6, tag: [1, "The curb"], el: <Recovery /> }, // at: 0.05, 2.0, 5.5, 6.4, 9.3
  { from: 170.6, to: 180.65, tag: [1, "The curb"], el: <Rideshare /> }, // at: 0.05, 1.9, 3.9, 4.4, 7.0, 8.4
  // --- глава 2 ---
  { from: 180.65, to: 187.45, tag: [2, "The runway"], el: <StrangePart /> }, // at: 0.1, 0.7, 4.4
  { from: 187.45, to: 191.95, tag: [2, "The runway"], el: <NotRandom /> }, // at: 0.4, 0.6, 3.7
  { from: 191.95, to: 205.15, tag: [2, "The runway"], el: <Formula /> }, // at: 0.05, 3.2, 6.2, 8.1, 11.1, 11.9
  { from: 205.15, to: 213.75, tag: [2, "The runway"], el: <Seats /> }, // at: 0.05, 0.4, 4.0, 6.4
  { from: 213.75, to: 223.35, tag: [2, "The runway"], el: <CostRecovery /> }, // at: 0.05, 0.1, 1.8, 4.0, 5.3, 8.1
  { from: 223.35, to: 235.75, tag: [2, "The runway"], el: <Residual /> }, // at: 0.05, 3.4, 5.6, 7.5, 8.1, 8.8, 10.2
  { from: 235.75, to: 245.65, tag: [2, "The runway"], el: <Seesaw /> }, // at: 0.05, 1.9, 3.3, 5.9
  { from: 245.65, to: 255.95, tag: [2, "The runway"], el: <Slider /> }, // at: 0.05, 0.1, 1.6, 4.2, 6.7, 8.8
  { from: 255.95, to: 263.85, tag: [2, "The runway"], el: <Direction /> }, // at: 0.05, 2.7, 5.8
  { from: 263.85, to: 270.7, el: <Subscribe /> }, // at: 0.1, 0.3, 4.6
  // --- глава 3 ---
  { from: 270.7, to: 276.15, tag: [3, "The ticket"], el: <BigBite /> }, // at: 0.1, 0.4, 0.6, 4.3
  { from: 276.15, to: 284.3, tag: [3, "The ticket"], el: <SampleTrip /> }, // at: 0.05, 3.5, 4.2, 5.3, 6.4
  { from: 284.3, to: 291.4, tag: [3, "The ticket"], el: <TaxSplit /> }, // at: 0.05, 0.2, 0.4, 5.8
  { from: 291.4, to: 299.45, tag: [3, "The ticket"], el: <FedChips /> }, // at: 0.05, 0.2, 2.4, 5.2
  { from: 299.45, to: 310.25, tag: [3, "The ticket"], el: <PFC /> }, // at: 0.05, 2.3, 4.4, 6.6, 9.6
  { from: 310.25, to: 317.75, tag: [3, "The ticket"], el: <Share /> }, // at: 0.3, 4.0, 4.4, 5.6
  { from: 317.75, to: 325.15, tag: [3, "The ticket"], el: <Frozen /> }, // at: 0.3, 1.6, 4.4, 5.8
  { from: 325.15, to: 331.2, tag: [3, "The ticket"], el: <PricesClimb /> }, // at: 0.15, 0.5, 3.3
  // --- глава 4 ---
  { from: 331.2, to: 339.85, tag: [4, "The terminal"], el: <MakeItUp /> }, // at: 0.8, 2.7, 5.8, 7.3
  { from: 339.85, to: 345.55, tag: [4, "The terminal"], el: <NineDollar /> }, // at: 1.5, 1.8, 4.7
  { from: 345.55, to: 352.4, tag: [4, "The terminal"], el: <RentSpace /> }, // at: 0.7, 1.6, 2.3, 5.1
  { from: 352.4, to: 357.95, tag: [4, "The terminal"], el: <ShopCutaway /> }, // at: 0.05, 0.1, 0.5, 1.0, 3.2
  { from: 357.95, to: 367.05, tag: [4, "The terminal"], el: <TenSplit /> }, // at: 0.05, 0.6, 2.2, 5.6, 7.0, 7.7
  { from: 367.05, to: 380.55, tag: [4, "The terminal"], el: <StreetPricing /> }, // at: 0.05, 4.3, 7.6, 9.5, 11.9
  { from: 380.55, to: 388.15, tag: [4, "The terminal"], el: <Portland /> }, // at: 0.15, 0.3, 2.3, 4.8
  { from: 388.15, to: 395.55, tag: [4, "The terminal"], el: <PercentLogic /> }, // at: 0.05, 1.5, 4.3, 5.7, 6.3
  { from: 395.55, to: 407.15, tag: [4, "The terminal"], el: <FoodShops /> }, // at: 0.05, 1.0, 1.5, 5.5, 8.5, 9.2
  { from: 407.15, to: 413.45, tag: [4, "The terminal"], el: <SideVsMain /> }, // at: 0.1, 2.2, 5.2
  { from: 413.45, to: 423.7, tag: [4, "The terminal"], el: <AtlSplit /> }, // at: 0.05, 0.4, 2.7, 3.7, 7.4
  { from: 423.7, to: 434.25, tag: [4, "The terminal"], el: <WaterPath /> }, // at: 0.05, 0.9, 1.6, 2.3, 6.4, 9.1
  { from: 434.25, to: 437.85, tag: [4, "The terminal"], el: <Stranger /> }, // at: 0.1, 0.4
  // --- глава 5: «взрыв» коротких кадров ---
  { from: 437.85, to: 442.05, tag: [5, "Everything else"], el: <QuickStat stock="S12" icon="key" label="Rental cars · a year" value="$2.4B" valueAt={1.6} source="FAA CATS, FY2023" /> }, // at: 0.1, 0.2, 1.6
  { from: 442.05, to: 444.8, tag: [5, "Everything else"], el: <QuickStat icon="hotel" label="Hotels on airport land" value="$0.4B" valueAt={0.3} source="FAA CATS, FY2023" /> }, // at: 0.1, 0.3
  { from: 444.8, to: 447.35, tag: [5, "Everything else"], el: <QuickStat icon="billboard" label="Ads on every wall" color={C3.gold} /> }, // at: 0.1, 0.2
  { from: 447.35, to: 452.85, tag: [5, "Everything else"], el: <Landlords /> }, // at: 0.1, 1.2, 2.1, 4.0
  { from: 452.85, to: 455.55, tag: [5, "Everything else"], el: <GroundItself /> }, // at: 0.15, 0.2
  { from: 455.55, to: 462.95, tag: [5, "Everything else"], el: <Dallas /> }, // at: 0.05, 1.9, 6.0
  { from: 462.95, to: 474.35, tag: [5, "Everything else"], el: <ShaleCutaway /> }, // at: 0.05, 1.6, 3.0, 4.3, 7.9, 9.3
  { from: 474.35, to: 479.25, tag: [5, "Everything else"], el: <Wells /> }, // at: 0.1, 0.5, 0.9, 1.2, 2.7
  { from: 479.25, to: 496.75, tag: [5, "Everything else"], el: <Royalties /> }, // at: 0.05, 4.8, 8.3, 10.4, 12.7, 15.4
  { from: 496.75, to: 506.15, tag: [5, "Everything else"], el: <RealEstate /> }, // at: 0.05, 2.3, 3.4, 4.7, 6.9
  // --- глава 6 ---
  { from: 506.15, to: 508.95, tag: [6, "Where the profit goes"], el: <LockedBag title="So who keeps the money?" shutAt={2.0} /> }, // at: 0.05, 1.1, 2.0
  { from: 508.95, to: 517.35, tag: [6, "Where the profit goes"], el: <Owners /> }, // at: 0.05, 0.15, 2.8, 4.3, 5.0, 5.9, 6.8
  { from: 517.35, to: 524.75, tag: [6, "Where the profit goes"], el: <Branson /> }, // at: 0.8, 3.3, 5.8
  { from: 524.75, to: 530.65, tag: [6, "Where the profit goes"], el: <CityRoads /> }, // at: 0.1, 1.0, 4.8
  { from: 530.65, to: 545.75, tag: [6, "Where the profit goes"], el: <Law /> }, // at: 0.05, 2.5, 4.9, 7.6, 9.4, 11.0, 13.4
  { from: 545.75, to: 551.75, tag: [6, "Where the profit goes"], el: <LockedBag title="It just can't take it home." shutAt={0.9} /> }, // at: 0.05, 0.9, 1.1
  { from: 551.75, to: 563.35, tag: [6, "Where the profit goes"], el: <Loop /> }, // at: 0.05, 0.7, 1.9, 3.8, 6.2, 8.2
  // --- финал ---
  { from: 563.35, to: 570.95, el: <Callback /> }, // at: 0.05, 0.1, 0.3, 5.5
  { from: 570.95, to: 577.25, el: <HiddenLine /> }, // at: 0.15, 2.3, 4.5
  { from: 577.25, to: 582.55, el: <Question /> }, // at: 0.1, 0.3, 4.4
  { from: 582.55, to: 594.0, el: <EndCard /> }, // at: 0.4, 0.6, 6.4, 9.1
];

// ---------- звуковые эффекты: секунда начала сцены -> [звук, секунда от начала сцены, громкость?] ----------
type Sfx = [string, number, number?];
const SFX: Record<number, Sfx[]> = {
  4.4: [["click", 0.1, 0.3]],
  6.3: [["cash", 4.8, 0.2], ["pop", 4.85, 0.18]],
  11.95: [["ding", 6.3, 0.16]],
  20.85: [["ding", 3.7, 0.14]],
  25.95: [["pop", 7.45, 0.16]],
  35.45: [["click", 2.25, 0.22], ["click", 2.38, 0.22], ["click", 2.51, 0.22], ["click", 2.64, 0.22], ["click", 2.77, 0.22], ["cash", 4.85, 0.16]],
  42.15: [["thud", 3.05, 0.22]],
  52.75: [["cash", 7.25, 0.16]],
  69.3: [["cash", 12.7, 0.16]],
  89.05: [["cash", 4.55, 0.18]],
  108.35: [["thud", 6.95, 0.18]],
  116.55: [["click", 3.5, 0.2], ["click", 8.3, 0.2], ["click", 10.1, 0.2], ["pop", 10.55, 0.16]],
  140.15: [["thud", 11.45, 0.2]],
  170.6: [["cash", 4.45, 0.16], ["pop", 8.45, 0.16]],
  180.65: [["pop", 0.75, 0.16]],
  191.95: [["ding", 11.95, 0.16]],
  263.85: [["pop", 0.15, 0.16]],
  284.3: [["click", 0.2, 0.2], ["click", 0.4, 0.2]],
  299.45: [["cash", 9.65, 0.16]],
  317.75: [["tick", 4.4, 0.25], ["tick", 4.9, 0.25], ["tick", 5.4, 0.25]],
  352.4: [["cash", 1.0, 0.16]],
  413.45: [["cash", 7.45, 0.16]],
  434.25: [["pop", 0.15, 0.16]],
  462.95: [["cash", 5.3, 0.18], ["pop", 4.35, 0.12]],
  530.65: [["thud", 9.45, 0.22], ["thud", 13.45, 0.22]],
  545.75: [["thud", 0.95, 0.22]],
  577.25: [["pop", 0.15, 0.16]],
  582.55: [["pop", 6.45, 0.16], ["ding", 9.15, 0.14]],
};
const SfxTrack: React.FC<{ beatFrom: number }> = ({ beatFrom }) => {
  const { fps } = useVideoConfig();
  return (
    <>
      {(SFX[beatFrom] ?? []).map(([name, at, vol], i) => (
        <Sequence key={i} from={Math.round(at * fps)} durationInFrames={Math.round(2 * fps)} layout="none">
          <Audio src={staticFile(`sfx/${name}.wav`)} volume={vol ?? 0.2} />
        </Sequence>
      ))}
    </>
  );
};

// ---------- главный ролик ----------
export const Ep03Airports: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C3.bgEdge }}>
      <Bg />
      <Audio src={staticFile("audio/ep03-voiceover.mp3")} />
      <Audio src={staticFile("audio/ep03-music.mp3")} />
      {BEATS.map((b, i) => (
        <Sequence key={i} from={Math.round(b.from * fps)} durationInFrames={Math.max(1, Math.round((b.to - b.from) * fps))} name={`Beat ${i + 1}`}>
          {BACKS[String(b.from)] && <Back {...BACKS[String(b.from)]} dur={b.to - b.from} />}
          <Scene dur={b.to - b.from}>{b.el}</Scene>
          {b.tag && <Chapter n={b.tag[0]} title={b.tag[1]} />}
          <SfxTrack beatFrom={b.from} />
        </Sequence>
      ))}
      <Bug />
    </AbsoluteFill>
  );
};
