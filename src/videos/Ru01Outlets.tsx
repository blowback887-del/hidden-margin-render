import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Bg6, BigNum, Bug6, C6, Center, ChapterCard, ChapterTag, Col, CorpSub, Donut6, In, Label6, Meme, NameCard6, Row, Scene6, setClips, Source6, Split6, Stamp, Stock6, Plate6, Words } from "../brand/hm6";

// ===================================================================
// Ru01Outlets — сгенерировано cloud/gen/build.py из плана cloud/gen/ru01.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const RU01OUTLETS_DURATION_SEC = 248.9;
const CLIPS: Record<number, string> = {"1": "01-mike-shopping-spree", "2": "02-mike-paper-bags", "3": "03-mike-trophy", "4": "04-jeans-stack", "5": "05-pants-display", "6": "06-sale-tags-red", "7": "07-sale-tag-printed", "8": "08-outlet-mall-bright", "9": "09-mall-escalators", "10": "10-thinking-man", "11": "11-woman-selects-clothes", "12": "12-woman-checking-product", "13": "13-denim-texture", "14": "14-cashier-payment", "15": "15-card-payment", "16": "16-judge-gavel", "17": "17-scales-gavel", "18": "18-money-counting", "19": "19-businessman-laughing", "20": "20-suited-meeting", "21": "21-incredulous-glasses", "22": "22-warehouse", "23": "23-garment-factory", "24": "24-factory-workers", "25": "25-capitol", "26": "26-capitol-sky", "27": "27-suitcases-bags", "28": "28-luggage-conveyor", "29": "29-store-discount-windows", "30": "30-mannequins", "31": "31-sewing-close", "32": "32-sewing-faceless", "33": "33-fabric", "34": "34-leather-shoes", "35": "35-shoe-rack", "36": "36-blank-tags", "37": "37-magnifier-dollar", "38": "38-shocked-man", "39": "39-driving-highway", "40": "40-parking-aerial", "41": "41-happy-shopper", "42": "42-shopping-bags-woman", "43": "43-man-facepalm", "44": "44-typing-phone", "45": "45-grinning-man", "46": "46-celebrating", "47": "47-people-mall", "48": "48-clothes-wall", "49": "49-rat-cage", "50": "50-disappointed", "51": "51-guy-sale-items"};
const LENS: Record<number, number> = {"1": 10.0, "2": 9.13, "3": 10.0, "4": 9.6, "5": 10.0, "6": 8.57, "7": 10.0, "8": 10.0, "9": 10.0, "10": 3.3, "11": 1.7, "12": 10.0, "13": 10.0, "14": 10.0, "15": 10.0, "16": 10.0, "17": 10.0, "18": 10.0, "19": 10.0, "20": 10.0, "21": 10.0, "22": 10.0, "23": 7.5, "24": 9.7, "25": 10.0, "26": 10.0, "27": 10.0, "28": 10.0, "29": 10.0, "30": 5.83, "31": 10.0, "32": 10.0, "33": 10.0, "34": 10.0, "35": 7.03, "36": 10.0, "37": 10.0, "38": 10.0, "39": 10.0, "40": 10.0, "41": 10.0, "42": 10.0, "43": 10.0, "44": 10.0, "45": 10.0, "46": 10.0, "47": 10.0, "48": 7.7, "49": 10.0, "50": 10.0, "51": 10.0};
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/ru01/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 });
setClips(CLIP_FN);

type Beat = { from: number; to: number; tag?: [number, string]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 3.72, back: (<><Stock6 n={46} dur={3.72} dim={0} graphics={true} /></>), el: (<>
<Center y={260}><div style={{ scale: "1.25" }}><NameCard6 at={0.2} name="Майк" role="НЕ НАСТОЯЩИЙ · НО ТЫ ЕГО ЗНАЕШЬ" icon="person" /></div></Center>
</>) },
  { from: 3.72, to: 8.27, back: (<><Stock6 n={6} dur={4.55} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Row gap={90}>
  <In at={1.2} from="fade"><Plate6><BigNum at={1.2} icon="receipt" size={190} label="НА БИРКЕ" color={C6.ink}>$120</BigNum></Plate6></In>
  <In at={3.02} from="fade"><Plate6><BigNum at={3.02} icon="card" size={190} label="ЗАПЛАТИЛ">$80</BigNum></Plate6></In>
</Row></Center>
</>) },
  { from: 8.27, to: 12.36, back: (<><Stock6 n={3} dur={4.09} dim={0} graphics={false} /></>), el: (<>
<Center y={230}><Plate6><BigNum at={0.1} size={150} label="ЧИСТОЙ ЭКОНОМИИ" color={C6.money}>+$40</BigNum></Plate6></Center>
<Meme at={2.71} text="гений экономии" y={900} />
</>) },
  { from: 12.36, to: 16.76, back: (<><Stock6 n={4} dur={4.4} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><In at={1.46} from="fade"><Plate6><Words text="Эти джинсы никогда не стоили $120." at={1.46} size={92} hl={["никогда"]} maxW={1500} /></Plate6></In></Center>
</>) },
  { from: 16.76, to: 21.22, back: (<><Stock6 n={7} dur={4.46} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Stamp at={2.72} text="родились со скидкой" color={C6.accent} size={110} /></Center>
</>) },
  { from: 21.22, to: 29.38, back: (<><Stock6 n={8} dur={8.16} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><In at={2.54} from="fade"><Plate6><Col gap={30}>
  <Label6 at={2.54} size={44} color={C6.ink}>1 · СКИДКА ОТ ЦЕНЫ, КОТОРОЙ НЕ БЫЛО</Label6>
  <Label6 at={4.86} size={44} color={C6.ink}>2 · ВЕЩЬ ЧАСТО НЕ ТА</Label6>
  <Label6 at={7.42} size={44} color={C6.accent}>3 · КАК НЕ ПОПАСТЬСЯ</Label6>
</Col></Plate6></In></Center>
</>) },
  { from: 29.38, to: 33.54, tag: [1, "Ценник"], hard: true, back: (<><Stock6 n={9} dur={4.16} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><ChapterCard n={1} title="Ценник" label="Глава 1" /></Center>
</>) },
  { from: 33.54, to: 36.16, back: (<><Stock6 n={12} dur={2.62} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6><Words text="История почти настоящая." at={0.1} size={100} hl={["настоящая."]} /></Plate6></Center>
</>) },
  { from: 36.16, to: 40.64, back: (<><Stock6 n={5} dur={4.48} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><In at={1.9} from="fade"><Plate6><Words text="Белые джинсы." at={1.9} size={110} /><Label6 at={2.74} size={40} color={C6.accent}>КАЛИФОРНИЯ · АУТЛЕТ MICHAEL KORS</Label6></Plate6></In></Center>
<Source6>Gattinella v. Michael Kors · Reuters, Quartz · 2015</Source6>
</>) },
  { from: 40.64, to: 51.15, back: (<><Stock6 n={36} dur={10.51} dim={0.35} graphics={true} />
<Stock6 n={7} from={6.6} dur={10.51} dim={0.35} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 pad="40px 60px"><Col gap={26} align="flex-start">
  <Row gap={60}><Label6 at={0.2} size={44} color={C6.ink}>РЕКОМЕНДОВАННАЯ</Label6><Label6 at={2.26} size={60} color={C6.loss}>$120</Label6></Row>
  <Row gap={60}><Label6 at={3.74} size={44} color={C6.ink}>ЦЕНА МАГАЗИНА</Label6><Label6 at={4.9} size={60} color={C6.blue}>$99.99</Label6></Row>
  <Row gap={60}><Label6 at={6.6} size={44} color={C6.ink}>ЕЩЁ СКИДКА</Label6><Label6 at={8.58} size={60} color={C6.money}>$79.99</Label6></Row>
</Col></Plate6></Center>
<Source6>Gattinella v. Michael Kors · Reuters, Quartz · 2015</Source6>
</>) },
  { from: 51.15, to: 56.04, back: (<><Stock6 n={51} dur={4.89} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.31} text="аттракцион неслыханной щедрости" y={900} size={70} />
</>) },
  { from: 56.04, to: 67.18, back: (<><Stock6 n={16} dur={11.14} dim={0} graphics={true} />
<Stock6 n={17} from={3.56} dur={11.14} dim={0} graphics={true} /></>), el: (<>
<Center y={330}><In at={2.22} from="fade"><Plate6><Label6 at={2.22} size={48} color={C6.accent}>2014 · КОЛЛЕКТИВНЫЙ ИСК</Label6></Plate6></In></Center>
<Center y={720}><In at={5.1} from="fade"><Plate6><Words text="Шили специально для аутлета." at={5.1} size={84} hl={["специально"]} maxW={1500} /></Plate6></In></Center>
<Source6>Gattinella v. Michael Kors · Reuters, Quartz · 2015</Source6>
</>) },
  { from: 67.18, to: 75.16, back: (<><Stock6 n={18} dur={7.98} dim={0} graphics={true} /></>), el: (<>
<Center y={430}><In at={3.26} from="fade"><Plate6><BigNum at={3.26} icon="receipt" size={200} label="МИРОВОЕ СОГЛАШЕНИЕ · 2015">$4,88 млн</BigNum></Plate6></In></Center>
<Center y={830}><Stamp at={6.66} text="вину не признал" color={C6.loss} size={80} /></Center>
<Source6>Gattinella v. Michael Kors · Reuters, Quartz · 2015</Source6>
</>) },
  { from: 75.16, to: 81.4, back: (<><Stock6 n={20} dur={6.24} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Split6 at={0.2} left={{ title: "БЫЛО НА БИРКЕ", value: "MSRP", color: C6.loss }} right={{ title: "СТАЛО", value: "VALUE", color: C6.accent, at: 4.02 }} /></Center>
</>) },
  { from: 81.4, to: 89.22, back: (<><Stock6 n={19} dur={7.82} dim={0} graphics={true} /></>), el: (<>
<CorpSub at={0.2} corp="«Value»" human="нам просто нравится это число" label="ПЕРЕВОД С КОРПОРАТИВНОГО" />
</>) },
  { from: 89.22, to: 92.28, tag: [2, "Фабрика скидок"], hard: true, back: (<><Stock6 n={22} dur={3.06} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><ChapterCard n={2} title="Фабрика скидок" label="Глава 2" /></Center>
</>) },
  { from: 92.28, to: 100.08, back: (<><Stock6 n={48} dur={7.8} dim={0} graphics={true} /></>), el: (<>
<Center y={380}><Plate6><Words text="Аутлет = склад остатков?" at={0.1} size={100} hl={["остатков?"]} /></Plate6></Center>
<Center y={760}><Stamp at={6.44} text="так было раньше" color={C6.loss} size={90} /></Center>
</>) },
  { from: 100.08, to: 106.96, back: (<><Stock6 n={25} dur={6.88} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><In at={2.5} from="fade"><Plate6><Words text="Конгресс США → FTC" at={2.5} size={110} hl={["FTC"]} /><Label6 at={4.8} size={38} color={C6.ink}>ЯНВАРЬ 2014 · ПРОСЬБА РАССЛЕДОВАТЬ АУТЛЕТЫ</Label6></Plate6></In></Center>
<Source6>Письмо 4 членов Конгресса в FTC · 30.01.2014</Source6>
</>) },
  { from: 106.96, to: 115.04, back: (<><Stock6 n={23} dur={8.08} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Donut6 at={2.84} pct={85} center="85%+" label="СДЕЛАНЫ СПЕЦИАЛЬНО ДЛЯ АУТЛЕТОВ" /></Center>
<Source6>Письмо 4 членов Конгресса в FTC · 30.01.2014</Source6>
</>) },
  { from: 115.04, to: 121.32, back: (<><Stock6 n={27} dur={6.28} dim={0.3} graphics={true} /></>), el: (<>
<Center y={520}><Row gap={80}>
  <Plate6><BigNum at={0.3} icon="bag" size={170} label="COACH">85%</BigNum></Plate6>
  <In at={2.02} from="fade"><Plate6><BigNum at={2.02} icon="suitcase" size={170} label="TUMI">85%</BigNum></Plate6></In>
</Row></Center>
<Source6>BuzzFeed News, Business Insider · 2014</Source6>
</>) },
  { from: 121.32, to: 131.76, back: (<><Stock6 n={24} dur={10.44} dim={0} graphics={true} />
<Stock6 n={30} from={6.46} dur={10.44} dim={0} graphics={true} /></>), el: (<>
<Center y={430}><In at={2.88} from="fade"><Plate6><BigNum at={2.88} icon="store" size={210} label="ОСТАТКИ ИЗ SAKS · OFF 5TH, 2014">10%</BigNum></Plate6></In></Center>
<Center y={820}><In at={6.46} from="fade"><Plate6><Label6 at={6.46} size={40} color={C6.accent}>ОСТАЛЬНОЕ — ПОД АУТЛЕТ</Label6></Plate6></In></Center>
<Source6>Business Insider · 2015</Source6>
</>) },
  { from: 131.76, to: 137.06, back: (<><Stock6 n={42} dur={5.3} dim={0} graphics={true} /></>), el: (<>
<Center y={380}><Plate6><Words text="Не та же сумка дешевле." at={0.1} size={90} /></Plate6></Center>
<Center y={720}><In at={2.54} from="fade"><Plate6><Words text="Другая сумка. Тот же логотип." at={2.54} size={90} hl={["Другая"]} /></Plate6></In></Center>
</>) },
  { from: 137.06, to: 141.3, back: (<><Stock6 n={49} dur={4.24} dim={0} graphics={false} /></>), el: (<>
<Meme at={1.56} text="скидка поймала тебя" y={900} />
</>) },
  { from: 141.3, to: 144.2, tag: [3, "Чем ты платишь"], hard: true, back: (<><Stock6 n={31} dur={2.9} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><ChapterCard n={3} title="Чем ты платишь" label="Глава 3" /></Center>
</>) },
  { from: 144.2, to: 147.36, back: (<><Stock6 n={32} dur={3.16} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6><Words text="Дешевле в производстве." at={0.1} size={100} hl={["Дешевле"]} /></Plate6></Center>
</>) },
  { from: 147.36, to: 157.56, back: (<><Stock6 n={37} dur={10.2} dim={0} graphics={true} />
<Stock6 n={35} from={4.92} dur={10.2} dim={0} graphics={true} /></>), el: (<>
<Center y={430}><In at={3.56} from="fade"><Plate6><BigNum at={3.56} icon="store" size={200} label="БРЕНДОВ ПРОВЕРИЛ CONSUMERS' CHECKBOOK">40</BigNum></Plate6></In></Center>
<Center y={830}><In at={4.92} from="fade"><Plate6><Label6 at={4.92} size={38} color={C6.accent}>≈ ПОЛОВИНА — ОТДЕЛЬНЫЙ, БОЛЕЕ ДЕШЁВЫЙ ТОВАР</Label6></Plate6></In></Center>
<Source6>Consumers' Checkbook · 2026</Source6>
</>) },
  { from: 157.56, to: 165.14, back: (<><Stock6 n={34} dur={7.58} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Split6 at={3.62} left={{ title: "АУТЛЕТ · ПОДОШВА", value: "РЕЗИНА", color: C6.loss }} right={{ title: "УНИВЕРМАГ · ПОДОШВА", value: "КОЖА", color: C6.money, at: 5.74 }} /></Center>
<Center y={130}><Label6 at={0.2} size={34} color={C6.ink}>МУЖСКИЕ ТУФЛИ COLE HAAN</Label6></Center>
<Source6>Consumers' Checkbook · 2026</Source6>
</>) },
  { from: 165.14, to: 169.18, back: (<><Stock6 n={33} dur={4.04} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><In at={0.05} from="fade"><Plate6><Col gap={28}>
  <Label6 at={0.05} size={54} color={C6.ink}>ТКАНЬ ТОНЬШЕ</Label6>
  <Label6 at={1.36} size={54} color={C6.ink}>ПОДКЛАДКИ НЕТ</Label6>
  <Label6 at={2.62} size={54} color={C6.ink}>ШВЫ ПРОЩЕ</Label6>
</Col></Plate6></In></Center>
</>) },
  { from: 169.18, to: 173.78, back: (<><Stock6 n={45} dur={4.6} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.98} text="гордость майка та же" y={900} />
</>) },
  { from: 173.78, to: 178.94, back: (<><Stock6 n={36} dur={5.16} dim={0.3} graphics={true} /></>), el: (<>
<Center y={540}><In at={3.76} from="fade"><Plate6><Words text="Тайные знаки на этикетке." at={3.76} size={100} hl={["Тайные"]} /></Plate6></In></Center>
</>) },
  { from: 178.94, to: 185.3, back: (<><Stock6 n={13} dur={6.36} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Row gap={80}>
  <Plate6><Col gap={18}><Label6 at={0.1} size={36} color={C6.ink}>J.CREW FACTORY</Label6><Label6 at={1.22} size={84} color={C6.accent}>R ◆◆</Label6></Col></Plate6>
  <In at={4.12} from="fade"><Plate6><Col gap={18}><Label6 at={4.12} size={36} color={C6.ink}>GAP OUTLET</Label6><Label6 at={5.16} size={84} color={C6.accent}>• • •</Label6></Col></Plate6></In>
</Row></Center>
<Source6>Business Insider · 2015</Source6>
</>) },
  { from: 185.3, to: 189.54, back: (<><Stock6 n={21} dur={4.24} dim={0} graphics={false} /></>), el: (<>
<Center y={820}><Stamp at={1.92} text="секрет от тебя" color={C6.loss} size={96} /></Center>
</>) },
  { from: 189.54, to: 193.66, tag: [4, "Почему это работает"], hard: true, back: (<><Stock6 n={29} dur={4.12} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><ChapterCard n={4} title="Почему это работает" label="Глава 4" /></Center>
</>) },
  { from: 193.66, to: 199.62, back: (<><Stock6 n={17} dur={5.96} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><In at={3.94} from="fade"><Plate6><BigNum at={3.94} icon="receipt" size={210} label="КОЛЛЕКТИВНЫХ ИСКОВ · 7 БРЕНДОВ · 2014">11+</BigNum></Plate6></In></Center>
<Source6>Письмо сенаторов в FTC · 04.12.2014</Source6>
</>) },
  { from: 199.62, to: 203.86, back: (<><Stock6 n={14} dur={4.24} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6><Words text="Заплатили. Сменили слова. Продолжили." at={0.1} size={84} hl={["Продолжили."]} maxW={1600} /></Plate6></Center>
</>) },
  { from: 203.86, to: 207.22, back: (<><Stock6 n={40} dur={3.36} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><In at={2.1} from="fade"><Plate6><Label6 at={2.1} size={60} color={C6.accent}>ЧАС ЗА РУЛЁМ. РАДИ СКИДКИ.</Label6></Plate6></In></Center>
</>) },
  { from: 207.22, to: 214.2, back: (<><Stock6 n={47} dur={6.98} dim={0} graphics={true} /></>), el: (<>
<Center y={380}><Plate6><Words text="Уехать с пустыми руками обидно." at={0.1} size={86} maxW={1500} /></Plate6></Center>
<Center y={740}><In at={4.24} from="fade"><Plate6><Words text="Он продаёт чувство, что ты выиграл." at={4.24} size={86} hl={["выиграл."]} maxW={1500} /></Plate6></In></Center>
</>) },
  { from: 214.2, to: 227.48, back: (<><Stock6 n={12} dur={13.28} dim={0.3} graphics={true} />
<Stock6 n={41} from={9.06} dur={13.28} dim={0.3} graphics={true} /></>), el: (<>
<Center y={540}><In at={1.58} from="fade"><Plate6 pad="40px 60px"><Col gap={34} align="flex-start">
  <Label6 at={1.58} size={48} color={C6.ink}>1 · СМОТРИ НА ВЕЩЬ, А НЕ НА ЗАЧЁРКНУТУЮ ЦЕНУ</Label6>
  <Label6 at={5.8} size={48} color={C6.ink}>2 · ИЩИ ТАЙНЫЕ ЗНАЧКИ НА ЭТИКЕТКЕ</Label6>
  <Label6 at={9.06} size={48} color={C6.accent}>3 · СРАВНИ С ОБЫЧНЫМ МАГАЗИНОМ</Label6>
</Col></Plate6></In></Center>
</>) },
  { from: 227.48, to: 231.76, back: (<><Stock6 n={38} dur={4.28} dim={0} graphics={false} /></>), el: (<>
<Center y={820}><Stamp at={2.34} text="скидки не было" color={C6.loss} size={96} /></Center>
</>) },
  { from: 231.76, to: 239.56, back: (<><Stock6 n={46} dur={7.8} dim={0} graphics={false} /></>), el: (<>
<Meme at={5.28} text="не говорите ему" y={900} />
</>) },
  { from: 239.56, to: 248.9, back: (<><Stock6 n={44} dur={9.34} dim={0} graphics={true} /></>), el: (<>
<Center y={420}><Plate6><Words text="Тебя тоже разводил аутлет?" at={0.1} size={96} hl={["разводил"]} /></Plate6></Center>
<Center y={760}><Label6 at={4.16} size={44} color={C6.accent}>НАПИШИ В КОММЕНТАРИЯХ</Label6></Center>
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string, number][] = [[0.3, "ep06-pop", 0.3], [6.74, "ep06-kaching", 0.25], [10.98, "ep06-stamp", 0.4], [14.54, "ep06-boom", 0.25], [19.48, "ep06-stamp", 0.4], [29.4, "ep06-whoosh", 0.25], [40.84, "ep06-receipt", 0.3], [44.38, "ep06-pop", 0.3], [47.24, "ep06-pop", 0.3], [53.46, "ep09-cheer", 0.25], [58.26, "ep06-boom", 0.25], [70.44, "ep06-kaching", 0.25], [73.84, "ep06-stamp", 0.35], [79.18, "ep06-pop", 0.3], [86.14, "ep06-scratch", 0.3], [89.24, "ep06-whoosh", 0.25], [98.72, "ep06-stamp", 0.35], [109.8, "ep06-counter", 0.3], [115.34, "ep06-pop", 0.3], [117.06, "ep06-pop", 0.3], [124.2, "ep06-coin", 0.3], [138.62, "ep09-trombone", 0.3], [141.32, "ep06-whoosh", 0.25], [150.92, "ep06-pop", 0.3], [161.18, "ep06-pop", 0.3], [172.16, "ep06-scratch", 0.3], [180.16, "ep06-pop", 0.3], [184.1, "ep06-pop", 0.3], [187.22, "ep06-stamp", 0.4], [189.56, "ep06-whoosh", 0.25], [197.6, "ep06-counter", 0.3], [204.06, "ep06-whoosh", 0.25], [215.78, "ep06-pop", 0.3], [220.0, "ep06-pop", 0.3], [223.26, "ep06-pop", 0.3], [229.82, "ep06-stamp", 0.4], [232.06, "ep09-cheer", 0.2], [237.04, "ep06-scratch", 0.3]];

export const Ru01Outlets: React.FC = () => {
  const { fps } = useVideoConfig();
  setClips(CLIP_FN); // свой набор стоков при каждом рендере: в общем Root последним грузится чужой ролик
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/ru01-voiceover.mp3")} volume={0.85} />
      <Sequence from={0} durationInFrames={945}><Audio src={staticFile("audio/ru01/music-trailer.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 915, 945], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={930} durationInFrames={1770}><Audio src={staticFile("audio/ru01/music-r2.mp3")} volume={(f) => 0.11 * interpolate(f, [0, 30, 1740, 1770], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={2685} durationInFrames={1575}><Audio src={staticFile("audio/ru01/music-r3.mp3")} volume={(f) => 0.11 * interpolate(f, [0, 30, 1545, 1575], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={4245} durationInFrames={1470}><Audio src={staticFile("audio/ru01/music-r4.mp3")} volume={(f) => 0.11 * interpolate(f, [0, 30, 1440, 1470], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={5700} durationInFrames={1767}><Audio src={staticFile("audio/ru01/music-finale.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 1737, 1767], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      {SFX.map(([t, n, v], i) => (
        <Sequence key={"s" + i} from={Math.round(t * fps)} durationInFrames={120}><Audio src={staticFile(`sfx/${n}.wav`)} volume={v} /></Sequence>
      ))}
      {BEATS.map((b, i) => (
        <Sequence key={i} from={Math.round(b.from * fps)} durationInFrames={Math.max(1, Math.round((b.to - b.from) * fps))} name={`Beat ${i + 1}`}>
          {b.back}
          <Scene6 dur={b.to - b.from} hard={b.hard}>{b.el}</Scene6>
          {b.tag && <ChapterTag n={b.tag[0]} title={b.tag[1]} />}
        </Sequence>
      ))}
      <Bug6 />
    </AbsoluteFill>
  );
};
