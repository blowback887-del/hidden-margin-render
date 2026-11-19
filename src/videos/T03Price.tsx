import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Bg6, BigNum, Bug6, C6, Center, ChapterTag, CorpSub, In, Label6, Meme, NameCard6, Row, Scene6, setClips, Source6, Stamp, Stock6, Subscribe6, Plate6, Words } from "../brand/hm6";
import { ShelfTag, ShelfVsRegister, FinalSign, TagGrid, StorePins, Ledger, SalesClock, StateCards, ScaleTilt, Drift } from "../brand/t03";
import { Evidence } from "../brand/evidence";

// ===================================================================
// T03Price — сгенерировано cloud/gen/build.py из плана cloud/gen/t03.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const T03PRICE_DURATION_SEC = 533.7;
const CLIPS: Record<number, string> = {"1": "01-aisle-cart-pov", "2": "02-checkout-scan", "3": "03-cashier-busy", "4": "04-creamer-pour", "5": "05-woman-receipts-frustrated", "6": "06-courthouse-flags", "7": "07-elderly-bills", "8": "08-scales-justice", "9": "09-soda-aisle-wide", "10": "10-scanner-shelves", "11": "11-clipboard-retail", "12": "12-town-aerial-twilight", "13": "13-man-rubs-eyes", "14": "14-man-shocked", "15": "15-man-glasses-shock", "16": "16-worker-shelves", "17": "17-server-room", "18": "18-empty-checkouts", "19": "19-conv-store-counter", "20": "20-hourglass", "21": "21-pump-rising", "22": "22-wi-capitol", "23": "23-receipt-bills", "24": "24-cart-pov-busy", "25": "25-rural-road-aerial", "26": "26-hand-few-dollars", "27": "27-counting-bills", "28": "28-senior-choosing", "29": "29-couple-bills-worry", "30": "30-money-counter", "31": "31-clock-hands", "32": "32-food-bank", "33": "33-phone-store-scroll", "34": "34-us-capitol", "35": "35-pen-contract", "36": "36-man-phone-grocery", "37": "37-phone-card-buy", "38": "38-gavel", "39": "39-register-touch", "40": "40-couple-phone-aisle", "41": "41-receipt-handover", "42": "42-letter-magnifier", "43": "43-eye-roll", "44": "44-man-frustrated-white", "45": "45-market-blur", "46": "46-dairy-aisle", "47": "47-aisle-bright", "48": "48-cashier-veg", "49": "49-self-checkout", "50": "50-judge-courtroom", "51": "51-detective-docs", "52": "52-empty-wallet", "53": "53-man-counting-glasses", "54": "54-elderly-basket", "55": "55-town-street-sunset", "56": "56-gas-station-aerial", "57": "57-dg-brookville-oh", "58": "58-dg-amity-oh", "59": "59-dg-barre-vt", "60": "60-dg-union-grove-wi", "61": "61-dg-hartford-ny", "62": "62-dg-jakin-road", "63": "63-dg-hattiesburg", "64": "64-dg-commerce-tx", "65": "65-dg-sapulpa", "66": "66-dg-eufaula", "67": "67-dg-register", "68": "68-dg-empty-shelves", "69": "69-dg-trucks", "70": "70-dg-pa-shinglehouse", "71": "71-dg-pa-montoursville", "72": "72-dg-new-store", "73": "73-dg-remodel", "74": "74-dg-rr-a", "75": "75-dg-rr-b", "76": "76-dg-rr-c", "77": "77-dg-rr-d", "78": "78-dg-ny-waverly"};
const LENS: Record<number, number> = {"1": 10.0, "2": 5.37, "3": 5.77, "4": 10.0, "5": 10.0, "6": 10.0, "7": 5.0, "8": 10.0, "9": 10.0, "10": 10.0, "11": 10.0, "12": 10.0, "13": 10.0, "14": 10.0, "15": 10.0, "16": 9.13, "17": 9.37, "18": 10.0, "19": 10.0, "20": 10.0, "21": 10.0, "22": 10.0, "23": 10.0, "24": 10.0, "25": 10.0, "26": 9.33, "27": 10.0, "28": 10.0, "29": 10.0, "30": 10.0, "31": 8.8, "32": 10.0, "33": 8.9, "34": 10.0, "35": 10.0, "36": 10.0, "37": 10.0, "38": 10.0, "39": 10.0, "40": 10.0, "41": 10.0, "42": 10.0, "43": 10.0, "44": 10.0, "45": 7.87, "46": 10.0, "47": 6.5, "48": 8.43, "49": 10.0, "50": 10.0, "51": 10.0, "52": 10.0, "53": 8.8, "54": 10.0, "55": 7.0, "56": 10.0, "57": 10.0, "58": 10.0, "59": 10.0, "60": 10.0, "61": 10.0, "62": 10.0, "63": 10.0, "64": 10.0, "65": 10.0, "66": 10.0, "67": 10.0, "68": 10.0, "69": 10.0, "70": 10.0, "71": 10.0, "72": 10.0, "73": 10.0, "74": 10.0, "75": 10.0, "76": 10.0, "77": 10.0, "78": 10.0};
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/t03/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 });
setClips(CLIP_FN);

type Beat = { from: number; to: number; tag?: [number, string]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 2.84, back: (<><Stock6 n={57} dur={2.84} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={900}><In at={1.18} from="fade"><Plate6 at={1.18}><Label6 at={1.18} size={40} color={C6.ink}>BUTLER COUNTY, OHIO</Label6></Plate6></In></Center><Source6 at={0.3}>PHOTO: Brookville, Ohio · loganrickert · CC BY 2.0</Source6>
</>) },
  { from: 2.84, to: 12.36, back: (<><Stock6 n={46} dur={9.52} dim={0.55} graphics={true} /></>), el: (<>
<Center y={520}><ShelfVsRegister at={1.54} item="COFFEE MATE CREAMER" shelf="$2.00" reg="$4.35" regAt={5.3} delta="+117%" deltaAt={7.08} scale={0.92} note="ILLUSTRATION · PRICES FROM THE 2022 COUNTY INSPECTION" /></Center>
</>) },
  { from: 12.36, to: 18.9, back: (<><Stock6 n={67} dur={6.54} dim={0} graphics={true} /></>), el: (<>
<Source6 at={0.3}>PHOTO: Fort White, FL · Excel23 · CC BY-SA 4.0</Source6>
</>) },
  { from: 18.9, to: 23.82, back: null, el: (<>
<Drift><Center y={500}><FinalSign at={0.05} hlAt={2.76} /></Center></Drift>
</>) },
  { from: 23.82, to: 26.72, back: (<><Stock6 n={9} dur={2.9} dim={0.5} graphics={true} /></>), el: (<>
<Center y={520}><ShelfTag at={0.05} item="SHELF PRICE" price="$2.00" fade={0.8} /></Center>
</>) },
  { from: 26.72, to: 32.06, back: null, el: (<>
<Evidence src="evidence/t03/wcpo-anderson.png" size={[2880, 1800]} dur={5.34} frame="screen" marks={[{ x: 410, y: 602, w: 1363, h: 102, at: 0.05 }]} inset={{ src: "evidence/t03/wcpo-top.png", size: [2880, 1800] }} source="WCPO Cincinnati · Nov 2, 2022" url="wcpo.com" />
</>) },
  { from: 32.06, to: 40.68, back: null, el: (<>
<Evidence src="evidence/t03/abc-head.png" size={[2880, 1800]} dur={8.62} frame="screen" marks={[{ x: 298, y: 506, w: 1290, h: 86, at: 5.44 }]} source="AP, via ABC11 · Oct 27, 2026" url="abc11.com" />
</>) },
  { from: 40.68, to: 47.3, back: null, el: (<>
<Evidence src="evidence/t03/ftc-29265.png" size={[1700, 2200]} dur={6.62} frame="paper" marks={[{ x: 200, y: 1581, w: 1210, h: 114, at: 1.38 }]} inset source="FTC + 20 STATES v. DOLLAR GENERAL · COMPLAINT · OCT 26, 2026" />
</>) },
  { from: 47.3, to: 53.3, back: (<><Stock6 n={45} dur={6.0} dim={0} graphics={false} /></>), el: (<>
<Center x={1400} y={330}><Stamp at={3.72} text="undercover" color={C6.accent} size={84} /></Center>
</>) },
  { from: 53.3, to: 60.88, back: null, el: (<>
<Drift><Center y={520}><ScaleTilt at={0.1} tiltAt={5.72} /></Center></Drift>
</>) },
  { from: 60.88, to: 63.6, back: (<><Stock6 n={1} dur={2.72} dim={0} graphics={false} /></>), el: (<>

</>) },
  { from: 63.6, to: 68.24, tag: [1, "The County"], hard: true, back: (<><Stock6 n={11} dur={4.64} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><NameCard6 at={3.4} name="Roger Reynolds" role="BUTLER COUNTY AUDITOR · OHIO" icon="person" /></Center><div style={{ position: "absolute", right: 70, top: 56 }}><Label6 at={0} size={22} color={C6.mint}>ILLUSTRATIVE FOOTAGE</Label6></div>
</>) },
  { from: 68.24, to: 74.54, tag: [1, "The County"], back: (<><Stock6 n={10} dur={6.3} dim={0} graphics={true} />
<Stock6 n={4} from={3.94} dur={6.3} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.14} out={3.94} from="fade"><Plate6 at={1.14}><Label6 at={1.14} size={40} color={C6.ink}>WEIGHTS &amp; MEASURES INSPECTORS</Label6></Plate6></In></Center><div style={{ position: "absolute", right: 70, top: 56 }}><Label6 at={0} size={22} color={C6.mint}>ILLUSTRATIVE FOOTAGE</Label6></div>
</>) },
  { from: 74.54, to: 81.76, tag: [1, "The County"], back: null, el: (<>
<Drift><Center y={500}><TagGrid at={0.1} n={100} cols={20} cell={70} badTimes={[4.32, 4.32 + 0.35, 5.62]} failAt={6.66} label="100 ITEMS SCANNED · 2 MISTAKES ALLOWED" /></Center>
<Source6 at={0.4}>NIST Handbook 130 standard, via Money Talks News</Source6></Drift>
</>) },
  { from: 81.76, to: 92.56, tag: [1, "The County"], back: null, el: (<>
<Drift><Center y={560}><StorePins at={0.1} redAt={7.48} dur={1.0} title="BUTLER COUNTY · ALL 20 DOLLAR GENERAL STORES" /></Center>
<Source6 at={0.4}>Butler County Auditor, via WCPO · Oct 2022</Source6></Drift>
</>) },
  { from: 92.56, to: 97.26, tag: [1, "The County"], back: (<><Stock6 n={9} dur={4.7} dim={0.35} graphics={true} /></>), el: (<>
<Center x={1440} y={330}><Plate6 at={2.02}><BigNum at={2.02} icon="store" size={120} label="THE BEST STORE · ERROR RATE">16.7%</BigNum></Plate6></Center>
<Source6 at={2.02}>Ohio Attorney General · Nov 1, 2022</Source6>
</>) },
  { from: 97.26, to: 104.58, tag: [1, "The County"], back: null, el: (<>
<Drift><Center y={480}><TagGrid at={0.1} n={17} cols={17} cell={78} badAt={4.78} bad={15} step={0.07} label="EATON ROAD, HAMILTON · 15 OF 17 WRONG" /></Center>
<Source6 at={0.4}>Springfield News-Sun · Nov 2022</Source6></Drift>
</>) },
  { from: 104.58, to: 110.66, tag: [1, "The County"], back: null, el: (<>
<Evidence src="evidence/t03/wcpo-88.png" size={[2880, 1800]} dur={6.08} frame="screen" marks={[{ x: 892, y: 602, w: 534, h: 42, at: 0.05 }]} inset={{ src: "evidence/t03/wcpo-top.png", size: [2880, 1800] }} source="WCPO Cincinnati · Nov 2, 2022" url="wcpo.com" />
</>) },
  { from: 110.66, to: 120.2, tag: [1, "The County"], back: null, el: (<>
<Evidence src="evidence/t03/wcpo-coke.png" size={[2880, 1800]} dur={9.54} frame="screen" marks={[{ x: 490, y: 602, w: 1096, h: 42, at: 0.1 }, { x: 490, y: 722, w: 950, h: 42, at: 5.06 }]} inset={{ src: "evidence/t03/wcpo-top.png", size: [2880, 1800] }} source="WCPO Cincinnati · Nov 2, 2022" url="wcpo.com" />
</>) },
  { from: 120.2, to: 123.62, back: (<><Stock6 n={63} dur={3.42} dim={0} graphics={false} /></>), el: (<>
<Meme at={1.14} text="the word. dollar. in its name." y={900} size={72} /><Source6 at={0.3}>PHOTO: Hattiesburg, MS · hattiesburgmemory · CC BY 2.0</Source6>
</>) },
  { from: 123.62, to: 129.1, tag: [1, "The County"], back: null, el: (<>
<Drift><Center y={560}><StorePins at={0.05} redAt={0.05} dur={0.01} green={7} greenAt={3.1} title="ONE STORE ERRED IN THE CUSTOMER'S FAVOR" /></Center>
<Source6 at={0.4}>WCPO · College Corner Pike, Oxford</Source6></Drift>
</>) },
  { from: 129.1, to: 137.0, tag: [1, "The County"], back: null, el: (<>
<Evidence src="evidence/t03/wcpo-yost.png" size={[2880, 1800]} dur={7.9} frame="screen" marks={[{ x: 410, y: 722, w: 1323, h: 102, at: 3.14 }]} inset={{ src: "evidence/t03/wcpo-top.png", size: [2880, 1800] }} source="Ohio AG Dave Yost, via WCPO Cincinnati · Nov 2, 2022" url="wcpo.com" />
</>) },
  { from: 137.0, to: 141.64, tag: [1, "The County"], back: (<><Stock6 n={58} dur={4.64} dim={0} graphics={true} /></>), el: (<>
<Center x={480} y={330}><Plate6 at={1.28}><BigNum at={1.28} icon="receipt" size={120} label="OHIO SETTLEMENT · 2023">$1M</BigNum></Plate6></Center><Source6 at={0.3}>PHOTO: Amity, Ohio · JBTHEMILKER · CC BY-SA 4.0</Source6>
</>) },
  { from: 141.64, to: 146.36, back: (<><Stock6 n={16} dur={4.72} dim={0} graphics={false} /></>), el: (<>

</>) },
  { from: 146.36, to: 152.58, tag: [2, "The Gap"], hard: true, back: (<><Stock6 n={17} dur={6.22} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.12} from="fade"><Plate6 at={3.12}><Label6 at={3.12} size={38} color={C6.ink}>PRICE CHANGE → EVERY REGISTER · AUTOMATICALLY</Label6></Plate6></In></Center>
</>) },
  { from: 152.58, to: 160.42, tag: [2, "The Gap"], back: (<><Stock6 n={68} dur={7.84} dim={0} graphics={true} />
<Stock6 n={19} from={6.5} dur={7.84} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={7.1} from="fade"><Plate6 at={7.1}><Label6 at={7.1} size={40} color={C6.ink}>THE SHELF TAG: BY HAND</Label6></Plate6></In></Center><Source6 at={0.3}>PHOTO: California · TaurusEmerald · CC BY-SA 4.0</Source6>
</>) },
  { from: 160.42, to: 166.44, tag: [2, "The Gap"], back: null, el: (<>
<Evidence src="evidence/t03/ftc-weekly.png" size={[1700, 2200]} dur={6.02} frame="paper" marks={[{ x: 400, y: 278, w: 941, h: 37, at: 4.7 }]} inset source="FTC + 20 STATES v. DOLLAR GENERAL · COMPLAINT · OCT 26, 2026" />
</>) },
  { from: 166.44, to: 171.5, tag: [2, "The Gap"], back: (<><Stock6 n={67} dur={5.06} dim={0} graphics={true} /></>), el: (<>
<Center x={1430} y={330}><Plate6 at={2.86}><BigNum at={2.86} icon="person" size={120} label="EMPLOYEES ON DUTY · SOME HOURS">1–2</BigNum></Plate6></Center>
<Source6 at={2.86}>The Guardian, 2025 · via inkl</Source6>
</>) },
  { from: 171.5, to: 175.22, tag: [2, "The Gap"], back: (<><Stock6 n={3} dur={3.72} dim={0} graphics={false} /></>), el: (<>
<Meme at={1.94} text="nobody. nobody is." y={900} size={70} />
</>) },
  { from: 175.22, to: 183.12, tag: [2, "The Gap"], back: null, el: (<>
<Drift><Center y={500}><ShelfVsRegister at={2.76} item="PILLSBURY GRANDS" shelf="$3.00" reg="$3.75" regAt={0.6} delta="THE GAP" deltaAt={5.8} scale={0.92} note="ILLUSTRATION · EXAMPLE FROM THE BUTLER COUNTY INSPECTION" /></Center></Drift>
</>) },
  { from: 183.12, to: 187.52, tag: [2, "The Gap"], back: (<><Stock6 n={23} dur={4.4} dim={0.25} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.08} from="fade"><Plate6 at={1.08}><Label6 at={1.08} size={38} color={C6.ink}>THE TAG = LAST WEEK · THE REGISTER = TODAY</Label6></Plate6></In></Center>
</>) },
  { from: 187.52, to: 197.44, tag: [2, "The Gap"], back: (<><Stock6 n={21} dur={9.92} dim={0} graphics={true} />
<Stock6 n={5} from={6.28} dur={9.92} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.96} out={6.28} from="fade"><Plate6 at={3.96}><Label6 at={3.96} size={40} color={C6.ink}>OLD TAG · LOWER NUMBER</Label6></Plate6></In></Center>
</>) },
  { from: 197.44, to: 202.74, tag: [2, "The Gap"], back: (<><Stock6 n={73} dur={5.3} dim={0.45} graphics={true} /></>), el: (<>
<Center y={520}><In at={0.3} from="fade"><Plate6 at={0.3} pad="36px 60px"><Words text="“Occasional price discrepancies can occur.”" at={0.35} size={64} hl={["discrepancies"]} maxW={1450} /></Plate6></In></Center>
<Source6 at={0.4}>Dollar General statement, via Fortune · Oct 28, 2026</Source6>
</>) },
  { from: 202.74, to: 211.18, tag: [2, "The Gap"], back: null, el: (<>
<Evidence src="evidence/t03/fortune-goal.png" size={[2880, 1800]} dur={8.44} frame="screen" marks={[{ x: 377, y: 597, w: 1094, h: 40, at: 1.3 }]} inset={{ src: "evidence/t03/fortune-top.png", size: [2880, 1800] }} source="Dollar General statement, via Fortune · Oct 28, 2026" url="fortune.com" />
</>) },
  { from: 211.18, to: 218.54, tag: [2, "The Gap"], back: (<><Stock6 n={50} dur={7.36} dim={0.5} graphics={true} /></>), el: (<>
<Center y={520}><In at={0.2} from="fade"><Plate6 at={0.2} pad="40px 64px"><Words text="“virtually impossible for a retailer to match shelf pricing and scanned pricing 100% of the time”" at={0.25} step={0.06} size={56} hl={["impossible"]} maxW={1450} /></Plate6></In></Center>
<Source6 at={0.3}>Dollar General in a court filing, as quoted by Axios Cleveland · Dec 10, 2025</Source6><div style={{ position: "absolute", right: 70, top: 56 }}><Label6 at={0} size={22} color={C6.mint}>ILLUSTRATIVE FOOTAGE</Label6></div>
</>) },
  { from: 218.54, to: 222.24, tag: [2, "The Gap"], back: null, el: (<>
<Drift><Center y={520}><Row gap={140}><In at={0.1} from="fade"><div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 220, color: C6.ink, opacity: 0.55, textDecoration: "line-through", textDecorationColor: C6.loss, textDecorationThickness: 14 }}>100%</div></In><BigNum at={2.68} size={220} label="THE ACTUAL STANDARD">98%</BigNum></Row></Center></Drift>
</>) },
  { from: 222.24, to: 231.4, tag: [2, "The Gap"], back: (<><Stock6 n={31} dur={9.16} dim={0} graphics={true} />
<Stock6 n={51} from={5.34} dur={9.16} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={6.02} from="fade"><Plate6 at={6.02}><Label6 at={6.02} size={40} color={C6.ink}>OHIO SETTLED · 2023. THEN WHAT?</Label6></Plate6></In></Center>
</>) },
  { from: 231.4, to: 238.48, tag: [3, "The States"], hard: true, back: (<><Stock6 n={59} dur={7.08} dim={0} graphics={true} /></>), el: (<>
<div style={{ position: "absolute", right: 90, top: 400 }}><Ledger title="PRICING SETTLEMENTS · STATES" rows={[{ label: "VERMONT · 2019", value: "$1,750,000", at: 1.42 }]} /></div><Source6 at={0.3}>PHOTO: Barre, VT · Artaxerxes · CC BY-SA 3.0</Source6>
</>) },
  { from: 238.48, to: 245.66, tag: [3, "The States"], back: (<><Stock6 n={60} dur={7.18} dim={0} graphics={true} /></>), el: (<>
<div style={{ position: "absolute", right: 90, top: 400 }}><Ledger title="PRICING SETTLEMENTS · STATES" rows={[{ label: "VERMONT · 2019", value: "$1,750,000", at: 0 }, { label: "OHIO · 2023", value: "$1,000,000", at: 0.1 }, { label: "WISCONSIN · 2023", value: "$850,006", at: 2.18 }, { label: "NEW JERSEY · 2023", value: "$1,200,000", at: 5.76 }]} /></div><Source6 at={0.3}>PHOTO: Union Grove, WI · Ceeren · CC0</Source6>
</>) },
  { from: 245.66, to: 254.6, tag: [3, "The States"], back: null, el: (<>
<Evidence src="evidence/t03/fortune-31.png" size={[2880, 1800]} dur={8.94} frame="screen" marks={[{ x: 363, y: 742, w: 1442, h: 88, at: 6.54 }]} inset={{ src: "evidence/t03/fortune-top.png", size: [2880, 1800] }} source="Fortune, citing the Guardian · Oct 2026" url="fortune.com" />
</>) },
  { from: 254.6, to: 261.08, tag: [3, "The States"], back: null, el: (<>
<Drift><Center y={500}><ShelfVsRegister at={0.1} item="EXAMPLE ITEM" shelf="$10.00" reg="$11.70" regAt={3.34} delta="+17%" deltaAt={3.34 + 0.4} scale={0.92} note="EXAMPLE · AVERAGE WISCONSIN OVERCHARGE, PER THE FTC COMPLAINT" /></Center></Drift>
</>) },
  { from: 261.08, to: 265.38, tag: [3, "The States"], back: null, el: (<>
<Evidence src="evidence/t03/ftc-iowa.png" size={[1700, 2200]} dur={4.3} frame="paper" marks={[{ x: 494, y: 1811, w: 648, h: 37, at: 0.84 }, { x: 551, y: 1888, w: 353, h: 37, at: 3.4 }]} inset source="FTC + 20 STATES v. DOLLAR GENERAL · COMPLAINT · OCT 26, 2026" />
</>) },
  { from: 265.38, to: 272.24, tag: [3, "The States"], back: (<><Stock6 n={70} dur={6.86} dim={0} graphics={true} /></>), el: (<>
<Center x={1430} y={330}><Plate6 at={4.04}><BigNum at={4.04} icon="store" size={120} label="PENNSYLVANIA · INSPECTIONS FAILED · 2019–2023">40%+</BigNum></Plate6></Center>
<Source6 at={4.04}>Pennsylvania AG, via The Guardian</Source6>
</>) },
  { from: 272.24, to: 276.58, tag: [3, "The States"], back: null, el: (<>
<Evidence src="evidence/t03/yahoo-pa.png" size={[2880, 1800]} dur={4.34} frame="screen" marks={[{ x: 412, y: 1665, w: 1258, h: 106, at: 1.18 }]} inset={{ src: "evidence/t03/yahoo-top.png", size: [2880, 1800] }} source="The Guardian, via Yahoo News · Dec 2025" url="yahoo.com" />
</>) },
  { from: 276.58, to: 280.56, tag: [3, "The States"], back: (<><Stock6 n={42} dur={3.98} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.28} from="fade"><Plate6 at={2.28}><Label6 at={2.28} size={40} color={C6.ink}>INSPECTION RECORDS · 45 STATES</Label6></Plate6></In></Center><Source6 at={0.4}>The Guardian investigation · Dec 2025</Source6>
</>) },
  { from: 280.56, to: 288.88, tag: [3, "The States"], back: null, el: (<>
<Evidence src="evidence/t03/slashdot-4300.png" size={[2880, 1800]} dur={8.32} frame="screen" marks={[{ x: 736, y: 414, w: 779, h: 30, at: 3.54 }]} source="The Guardian investigation, via Slashdot · Dec 2025" url="tech.slashdot.org" />
</>) },
  { from: 288.88, to: 297.14, back: (<><Stock6 n={7} dur={8.26} dim={0} graphics={true} />
<Stock6 n={23} from={4.24} dur={8.26} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><In at={4.24} from="fade"><Plate6 at={4.24}><Words text="The only inspector most receipts get: you." at={4.24} size={50} hl={["you."]} maxW={1500} /></Plate6></In></Center>
</>) },
  { from: 297.14, to: 306.08, back: (<><Stock6 n={24} dur={8.94} dim={0} graphics={false} />
<Stock6 n={1} from={4.84} dur={8.94} dim={0} graphics={false} /></>), el: (<>
<Subscribe6 at={4.0} />
</>) },
  { from: 306.08, to: 310.96, tag: [4, "The Math"], hard: true, back: (<><Stock6 n={62} dur={4.88} dim={0} graphics={true} />
<Stock6 n={25} from={2.88} dur={4.88} dim={0} graphics={true} /></>), el: (<>
<Source6 at={0.3}>PHOTO: Early County, GA · Michael Rivera · CC BY-SA 4.0</Source6>
</>) },
  { from: 310.96, to: 322.52, tag: [4, "The Math"], back: null, el: (<>
<Evidence src="evidence/t03/ftc-75.png" size={[1700, 2200]} dur={11.56} frame="paper" marks={[{ x: 200, y: 1428, w: 1193, h: 114, at: 1.98 }, { x: 200, y: 1275, w: 1242, h: 114, at: 6.92 }]} inset source="FTC + 20 STATES v. DOLLAR GENERAL · COMPLAINT · OCT 26, 2026" />
</>) },
  { from: 322.52, to: 328.6, tag: [4, "The Math"], back: (<><Stock6 n={29} dur={6.08} dim={0} graphics={true} /></>), el: (<>
<Center x={1430} y={330}><Plate6 at={3.66}><BigNum at={3.66} icon="receipt" size={120} label="OF SALES · HOUSEHOLDS ≤ $35K A YEAR">60%</BigNum></Plate6></Center>
<Source6 at={3.66}>FTC complaint, citing Dollar General</Source6><div style={{ position: "absolute", right: 70, top: 56 }}><Label6 at={0} size={22} color={C6.mint}>ILLUSTRATIVE FOOTAGE</Label6></div>
</>) },
  { from: 328.6, to: 341.24, tag: [4, "The Math"], back: (<><Stock6 n={53} dur={12.64} dim={0} graphics={true} />
<Stock6 n={28} from={10.72} dur={12.64} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><In at={0.05} out={5.22} from="fade"><NameCard6 at={0.05} name="Marc Dann" role="FORMER OHIO ATTORNEY GENERAL · SHOPPERS' LAWYER" icon="person" /></In></Center>
<Center x={1430} y={300}><In at={6.7} out={10.72} from="fade"><Plate6 at={6.7}><Label6 at={6.7} size={46} color={C6.accent}>$10 · $20 · $25 A WEEK</Label6></Plate6></In></Center><div style={{ position: "absolute", right: 70, top: 56 }}><Label6 at={0} size={22} color={C6.mint}>ILLUSTRATIVE FOOTAGE</Label6></div>
</>) },
  { from: 341.24, to: 348.44, tag: [4, "The Math"], back: (<><Stock6 n={54} dur={7.2} dim={0.2} graphics={false} /></>), el: (<>
<Center y={860}><In at={4.68} from="fade"><Plate6 at={4.68}><Words text="“It's that they're putting stuff back.”" at={4.68} size={56} hl={["back.”"]} maxW={1500} /></Plate6></In></Center>
<Source6 at={4.68}>Marc Dann, to The Guardian</Source6><div style={{ position: "absolute", right: 70, top: 56 }}><Label6 at={0} size={22} color={C6.mint}>ILLUSTRATIVE FOOTAGE</Label6></div>
</>) },
  { from: 348.44, to: 360.76, tag: [4, "The Math"], back: null, el: (<>
<Drift><Center y={540}><div style={{ scale: "1.3" }}><Ledger title="8 PRICING SETTLEMENTS · 7 STATES" rows={[{ label: "VERMONT · 2019", value: "$1,750,000", at: 2.48 + 0.00 }, { label: "WISCONSIN · 2019", value: "$10,586", at: 2.48 + 0.55 }, { label: "OHIO · 2023", value: "$1,000,000", at: 2.48 + 1.10 }, { label: "WISCONSIN · 2023", value: "$850,006", at: 2.48 + 1.65 }, { label: "NEW JERSEY · 2023", value: "$1,200,000", at: 2.48 + 2.20 }, { label: "COLORADO · 2025", value: "$400,000", at: 2.48 + 2.75 }, { label: "PENNSYLVANIA · 2025", value: "$1,550,000", at: 2.48 + 3.30 }, { label: "NEW YORK · 2026*", value: "$1,875,000", at: 2.48 + 3.85 }]} total={{ label: "TOTAL", value: "≈ $8.6M", at: 9.74 }} /></div></Center>
<Source6 at={0.4}>FTC complaint · NY Attorney General (*food donation) · our sum</Source6></Drift>
</>) },
  { from: 360.76, to: 369.94, tag: [4, "The Math"], back: (<><Stock6 n={30} dur={9.18} dim={0} graphics={true} />
<Stock6 n={27} from={6.06} dur={9.18} dim={0} graphics={true} /></>), el: (<>
<Center x={1430} y={330}><Plate6 at={2.4}><BigNum at={2.4} icon="receipt" size={120} label="SALES · FISCAL 2025">$42.7B</BigNum></Plate6></Center>
<Center y={880}><In at={7.6} from="fade"><Plate6 at={7.6}><Label6 at={7.6} size={44} color={C6.accent}>≈ $4.9M EVERY HOUR</Label6></Plate6></In></Center>
<Source6 at={2.4}>Dollar General annual results · our calculation</Source6>
</>) },
  { from: 369.94, to: 376.34, tag: [4, "The Math"], hard: true, back: null, el: (<>
<Drift><Center y={540}><SalesClock at={0.05} stopAt={4.18} minutes={106} label="ALL 8 STATE SETTLEMENTS = UNDER 2 HOURS OF SALES" sub="OUR CALCULATION · $8.6M ÷ ~$4.87M PER HOUR · REVENUE, NOT PROFIT" /></Center></Drift>
</>) },
  { from: 376.34, to: 383.18, tag: [4, "The Math"], back: (<><Stock6 n={32} dur={6.84} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.78} from="fade"><Plate6 at={5.78}><Label6 at={5.78} size={38} color={C6.ink}>OHIO: $750,000 OF THE $1M → FOOD BANKS</Label6></Plate6></In></Center><Source6 at={5.78}>Journal-News · 2023</Source6>
</>) },
  { from: 383.18, to: 393.36, tag: [4, "The Math"], back: null, el: (<>
<Evidence src="evidence/t03/smn-ny.png" size={[2880, 1800]} dur={10.18} frame="screen" marks={[{ x: 404, y: 593, w: 1282, h: 40, at: 2.5 }]} source="Supermarket News · Oct 2026" url="supermarketnews.com" /><Center x={1420} y={820}><Stamp at={7.28} text="refunds: none" color={C6.loss} size={70} /></Center>
</>) },
  { from: 393.36, to: 397.2, tag: [4, "The Math"], back: null, el: (<>
<Evidence src="evidence/t03/fox2-class.png" size={[2880, 1800]} dur={3.84} frame="screen" marks={[{ x: 448, y: 710, w: 1334, h: 164, at: 1.92 }]} source="FOX 2 Detroit · Braun v. Dolgencorp" url="fox2detroit.com" />
</>) },
  { from: 397.2, to: 403.72, tag: [4, "The Math"], back: (<><Stock6 n={40} dur={6.52} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><In at={2.76} from="fade"><Plate6 at={2.76}><Label6 at={2.76} size={40} color={C6.ink}>PROOF: PHOTO · RECEIPT · COMPLAINT WITHIN 30 DAYS</Label6></Plate6></In></Center>
</>) },
  { from: 403.72, to: 409.96, tag: [4, "The Math"], back: (<><Stock6 n={15} dur={6.24} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.86} out={4.16} text="me, photographing every creamer tag" y={900} size={66} />
<Center x={1400} y={330}><Stamp at={4.82} text="claims closed" color={C6.loss} size={78} /></Center>
</>) },
  { from: 409.96, to: 417.9, tag: [4, "The Math"], back: (<><Stock6 n={33} dur={7.94} dim={0} graphics={true} /></>), el: (<>
<CorpSub at={4.46} corp="“Final and binding arbitration”" human="one customer at a time, no class action" />
<Source6 at={4.46}>Dollar General app &amp; website terms, as reported by The Guardian</Source6>
</>) },
  { from: 417.9, to: 422.18, tag: [4, "The Math"], back: null, el: (<>
<Evidence src="evidence/t03/inkl-congress.png" size={[2880, 1800]} dur={4.28} frame="screen" marks={[{ x: 232, y: 598, w: 978, h: 164, at: 0.05 }]} source="The Guardian, via inkl · Dec 2025" url="inkl.com" />
</>) },
  { from: 422.18, to: 433.54, tag: [5, "Undercover"], hard: true, back: (<><Stock6 n={45} dur={11.36} dim={0} graphics={true} />
<Stock6 n={3} from={6.4} dur={11.36} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={10.04} from="fade"><Plate6 at={10.04}><Label6 at={10.04} size={40} color={C6.ink}>OH · MO · PA · MD · JAN–APR 2026</Label6></Plate6></In></Center><div style={{ position: "absolute", right: 70, top: 56 }}><Label6 at={0} size={22} color={C6.mint}>ILLUSTRATIVE FOOTAGE</Label6></div>
</>) },
  { from: 433.54, to: 441.88, tag: [5, "Undercover"], back: null, el: (<>
<Evidence src="evidence/t03/ftc-undercover.png" size={[1700, 2200]} dur={8.34} frame="paper" marks={[{ x: 200, y: 201, w: 1283, h: 114, at: 4.42 }]} inset source="FTC + 20 STATES v. DOLLAR GENERAL · COMPLAINT · OCT 26, 2026" />
</>) },
  { from: 441.88, to: 447.38, tag: [5, "Undercover"], back: (<><Stock6 n={37} dur={5.5} dim={0} graphics={false} /></>), el: (<>

</>) },
  { from: 447.38, to: 451.94, tag: [5, "Undercover"], back: null, el: (<>
<Evidence src="evidence/t03/ftc-ca.png" size={[1700, 2200]} dur={4.56} frame="paper" marks={[{ x: 993, y: 508, w: 316, h: 37, at: 0.05 }, { x: 400, y: 585, w: 421, h: 37, at: 2.66 }]} inset source="FTC + 20 STATES v. DOLLAR GENERAL · COMPLAINT · OCT 26, 2026" />
</>) },
  { from: 451.94, to: 458.58, tag: [5, "Undercover"], back: (<><Stock6 n={6} dur={6.64} dim={0} graphics={true} />
<Stock6 n={38} from={5.3} dur={6.64} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.94} from="fade"><Plate6 at={0.94}><Label6 at={0.94} size={36} color={C6.ink}>DOLLAR GENERAL DENIES THE ALLEGATIONS · NO RULING YET</Label6></Plate6></In></Center>
</>) },
  { from: 458.58, to: 462.96, back: (<><Stock6 n={72} dur={4.38} dim={0} graphics={false} /></>), el: (<>
<Source6 at={0.3}>PHOTO: Random Retail · CC BY 2.0</Source6>
</>) },
  { from: 462.96, to: 466.58, back: (<><Stock6 n={39} dur={3.62} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>1 · WATCH THE SCREEN, NOT THE BAG</Label6></Plate6></In></Center>
</>) },
  { from: 466.58, to: 474.86, back: (<><Stock6 n={36} dur={8.28} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>2 · PHOTO THE TAG. TWO SECONDS.</Label6></Plate6></In></Center>
</>) },
  { from: 474.86, to: 481.26, back: (<><Stock6 n={41} dur={6.4} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>3 · CHECK THE RECEIPT AT THE COUNTER</Label6></Plate6></In></Center>
</>) },
  { from: 481.26, to: 490.1, back: (<><Stock6 n={2} dur={8.84} dim={0.62} graphics={true} /></>), el: (<>
<Center y={500}><StateCards cards={[{ state: "Connecticut", rule: "Rings up higher than the shelf? One free, up to $20. Ask.", src: "CT Dept. of Consumer Protection", at: 1.62 }]} /></Center>
</>) },
  { from: 490.1, to: 495.28, back: (<><Stock6 n={48} dur={5.18} dim={0.62} graphics={true} /></>), el: (<>
<Center y={500}><StateCards cards={[{ state: "Connecticut", rule: "Rings up higher than the shelf? One free, up to $20. Ask.", src: "CT Dept. of Consumer Protection", at: 0 }, { state: "Michigan", rule: "You're owed the difference, plus a bonus of up to $5.", src: "Michigan Attorney General", at: 0.1 }]} /></Center>
</>) },
  { from: 495.28, to: 501.58, back: (<><Stock6 n={46} dur={6.3} dim={0.62} graphics={true} /></>), el: (<>
<Center y={500}><StateCards cards={[{ state: "Connecticut", rule: "Rings up higher than the shelf? One free, up to $20. Ask.", src: "CT Dept. of Consumer Protection", at: 0 }, { state: "Michigan", rule: "You're owed the difference, plus a bonus of up to $5.", src: "Michigan Attorney General", at: 0 }, { state: "NY · CO · PA", rule: "Dollar General agreed to charge the lowest posted price.", src: "State settlements", at: 0.1 }]} /></Center>
</>) },
  { from: 501.58, to: 508.94, back: (<><Stock6 n={35} dur={7.36} dim={0.45} graphics={true} /></>), el: (<>
<Center y={470}><Words text="ReportFraud.ftc.gov" at={4.18} size={110} hl={["ReportFraud.ftc.gov"]} serif={false} /></Center>
<Center y={650}><Label6 at={2.24} size={34} color={C6.ink}>OR YOUR STATE'S WEIGHTS &amp; MEASURES OFFICE</Label6></Center>
</>) },
  { from: 508.94, to: 514.42, back: (<><Stock6 n={42} dur={5.48} dim={0.62} graphics={true} /></>), el: (<>
<Center y={560}><StorePins at={0.05} redAt={0.05} dur={0.01} title="20 FAILED STORES · FROM ONE LETTER" /></Center>
</>) },
  { from: 514.42, to: 521.16, back: null, el: (<>
<Drift><Center y={500}><FinalSign at={0.05} hlAt={1.82} stamp="NOT FINAL" stampAt={3.86} /></Center></Drift>
</>) },
  { from: 521.16, to: 533.7, back: (<><Stock6 n={65} dur={12.54} dim={0.45} graphics={true} /></>), el: (<>
<Center y={250}><Words text="Ever caught the register charging more?" at={0.05} size={80} hl={["more?"]} maxW={1600} /></Center>
<Center y={380}><Label6 at={3.08} size={38} color={C6.accent}>TELL US IN THE COMMENTS</Label6></Center><Source6 at={0.3}>PHOTO: Sapulpa, OK · G. Edward Johnson · CC BY 4.0</Source6>
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string, number][] = [[0.05, "ep06-whoosh", 0.15], [4.38, "ep06-pop", 0.25], [8.14, "buzz", 0.3], [9.92, "impact", 0.35], [16.98, "t02-paper", 0.3], [21.66, "ep06-stamp", 0.25], [24.62, "ep09-trombone", 0.2], [26.82, "t02-paper", 0.3], [37.5, "ep06-boom", 0.3], [40.78, "t02-paper", 0.3], [42.06, "ep06-counter", 0.3], [51.02, "ep06-stamp", 0.3], [59.02, "ep06-fall", 0.3], [60.93, "ep06-whoosh", 0.2], [78.86, "buzz", 0.25], [81.2, "ep06-stamp", 0.35], [87.22, "ep06-pop", 0.2], [89.24, "ep06-boom", 0.35], [94.58, "ep06-counter", 0.3], [102.04, "buzz", 0.2], [104.73, "impact", 0.3], [110.76, "t02-paper", 0.3], [113.82, "buzz", 0.25], [118.1, "buzz", 0.25], [122.18, "ep09-trombone", 0.25], [126.72, "ding", 0.3], [129.2, "t02-paper", 0.3], [138.28, "ep06-kaching", 0.3], [141.69, "ep06-whoosh", 0.2], [149.48, "rise", 0.3], [150.86, "ding", 0.3], [160.52, "t02-paper", 0.3], [169.3, "ep06-counter", 0.3], [173.76, "ep09-bell", 0.2], [177.0, "ding", 0.3], [181.02, "impact", 0.35], [202.84, "t02-paper", 0.3], [216.58, "ep06-scratch", 0.3], [221.22, "ep06-stamp", 0.35], [228.26, "tick", 0.3], [232.82, "ep06-receipt", 0.3], [240.66, "ep06-receipt", 0.3], [244.24, "ep06-receipt", 0.3], [245.76, "t02-paper", 0.3], [252.2, "impact", 0.3], [257.94, "buzz", 0.3], [261.18, "t02-paper", 0.3], [264.48, "ep06-stamp", 0.35], [269.42, "ep06-counter", 0.3], [273.42, "ep06-boom", 0.3], [278.86, "t02-paper", 0.3], [280.66, "t02-paper", 0.3], [284.1, "ep06-counter", 0.3], [311.06, "t02-paper", 0.3], [312.94, "ep06-pop", 0.25], [317.88, "ep06-pop", 0.25], [326.18, "ep06-counter", 0.3], [350.92, "ep06-receipt", 0.3], [358.18, "ep06-kaching", 0.35], [363.16, "ep06-counter", 0.3], [368.36, "ep06-kaching", 0.3], [370.24, "tick", 0.3], [374.12, "impact", 0.4], [382.12, "ep06-pop", 0.25], [383.28, "t02-paper", 0.3], [390.46, "ep06-stamp", 0.35], [393.46, "t02-paper", 0.3], [399.96, "ep06-pop", 0.25], [402.44, "ep06-pop", 0.25], [406.66, "ep09-trombone", 0.2], [408.54, "ep06-stamp", 0.35], [414.42, "ep06-pop", 0.25], [418.0, "t02-paper", 0.3], [422.23, "ep06-whoosh", 0.2], [433.64, "t02-paper", 0.3], [437.96, "ep06-boom", 0.35], [447.48, "ding", 0.25], [450.04, "buzz", 0.3], [460.58, "ep06-whoosh", 0.2], [463.16, "ep06-pop", 0.3], [468.84, "click", 0.4], [475.06, "ep06-receipt", 0.3], [482.88, "ep06-pop", 0.25], [490.2, "ep06-pop", 0.25], [495.38, "ep06-pop", 0.25], [505.76, "ep06-pop", 0.3], [511.98, "ep06-pop", 0.25], [518.28, "ep06-stamp", 0.45]];

export const T03Price: React.FC = () => {
  const { fps } = useVideoConfig();
  setClips(CLIP_FN); // свой набор стоков при каждом рендере: в общем Root последним грузится чужой ролик
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/t03-voiceover.mp3")} volume={0.9} />
      <Sequence from={0} durationInFrames={1926}><Audio src={staticFile("audio/t03/music-c0-open.mp3")} volume={(f) => 0.085 * interpolate(f, [0, 30, 1896, 1926], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={1890} durationInFrames={2519}><Audio src={staticFile("audio/t03/music-c1-county.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 2489, 2519], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={4373} durationInFrames={2587}><Audio src={staticFile("audio/t03/music-c2-gap.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 2557, 2587], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={6924} durationInFrames={2276}><Audio src={staticFile("audio/t03/music-c3-states.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 2246, 2276], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={9164} durationInFrames={3519}><Audio src={staticFile("audio/t03/music-c4-who.mp3")} volume={(f) => 0.1 * interpolate(f, [0, 30, 3489, 3519], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={12647} durationInFrames={3364}><Audio src={staticFile("audio/t03/music-c5-undercover.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 3334, 3364], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
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
