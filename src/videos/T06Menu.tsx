import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Bg6, Bug6, C6, Center, ChapterTag, Col, Counter6, Donut6, EndCard6, In, Label6, Meme, Row, Scene6, setClips, Source6, Split6, Stock6, Subscribe6, Plate6, Words } from "../brand/hm6";
import { Bill, MenuCard, ThreeMenus, AnchorSeesaw, Leaderboard, SodaMargin, TipScreen, TipBase, FeeRoute, TwoReceipts } from "../brand/t06";
import { ListReveal } from "../brand/t05";
import { StateCards, Drift } from "../brand/t03";
import { Evidence } from "../brand/evidence";

// ===================================================================
// T06Menu — сгенерировано cloud/gen/build.py из плана cloud/gen/t06.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const T06MENU_DURATION_SEC = 544.74;
const CLIPS: Record<number, string> = {"1": "01-menu-hands", "2": "02-couple-menu", "3": "03-friends-menu", "4": "04-pay-cafe", "5": "05-pos-card", "6": "06-terminal-hand", "7": "07-burger-grill", "8": "08-patty-flame", "9": "09-burger-fries", "10": "10-bacon-burger", "11": "11-bacon-fry", "12": "12-fries-fryer", "13": "13-fries-ketchup", "14": "14-tomahawk", "15": "15-steak-plate", "16": "16-soda-pour", "17": "17-cola-ice", "18": "18-waitress-order", "19": "19-server-food", "20": "20-waiter-couple", "21": "21-chef-kitchen", "22": "22-kitchen-grill", "23": "23-couple-dinner", "24": "24-restaurant-night", "25": "25-diner-fries", "26": "26-diner-woman", "27": "27-chicken-plate", "28": "28-bill-water", "29": "29-woman-receipts", "30": "30-woman-upset", "31": "31-calculator", "32": "32-taxi-nyc", "33": "33-taxi-door", "34": "34-coins-fall", "35": "35-shocked-man", "36": "36-shock-glasses", "37": "37-frustrated", "38": "38-laughing", "39": "39-counting-money", "40": "40-stock-screens", "41": "41-meeting", "42": "42-scales", "43": "43-fishing-hook", "44": "44-utah-road", "45": "45-moab", "46": "46-waikiki", "47": "47-phoenix", "48": "48-la-palms", "49": "49-courthouse", "50": "50-boarding", "51": "51-departure-board", "52": "52-laptop-order", "53": "53-delivery-bag", "54": "54-water-pour", "55": "55-credit-card", "56": "56-shrug", "57": "57-pos-woman", "58": "58-pay-waiter", "59": "59-empty-cafe", "60": "60-shopkeeper", "61": "61-phone-scroll", "62": "62-dollar-stack", "63": "63-menu-glass", "64": "64-chalk-prices", "65": "65-wallet-cards", "66": "66-tap-pay", "67": "67-delivery-pay", "68": "68-cola-pour2", "69": "69-grill-flames", "70": "70-handshake"};
const LENS: Record<number, number> = {"1": 10.0, "2": 8.57, "3": 10.0, "4": 10.0, "5": 10.0, "6": 6.6, "7": 10.0, "8": 10.0, "9": 9.83, "10": 10.0, "11": 10.0, "12": 9.9, "13": 10.0, "14": 7.3, "15": 10.0, "16": 8.47, "17": 10.0, "18": 10.0, "19": 10.0, "20": 10.0, "21": 7.8, "22": 10.0, "23": 10.0, "24": 10.0, "25": 10.0, "26": 10.0, "27": 7.0, "28": 10.0, "29": 10.0, "30": 10.0, "31": 10.0, "32": 10.0, "33": 10.0, "34": 5.27, "35": 10.0, "36": 10.0, "37": 10.0, "38": 10.0, "39": 10.0, "40": 10.0, "41": 10.0, "42": 10.0, "43": 10.0, "44": 10.0, "45": 10.0, "46": 8.9, "47": 10.0, "48": 10.0, "49": 10.0, "50": 10.0, "51": 9.13, "52": 10.0, "53": 10.0, "54": 10.0, "55": 10.0, "56": 10.0, "57": 10.0, "58": 10.0, "59": 8.7, "60": 7.77, "61": 10.0, "62": 10.0, "63": 10.0, "64": 10.0, "65": 10.0, "66": 6.8, "67": 9.13, "68": 10.0, "69": 10.0, "70": 10.0};
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/t06/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 });
setClips(CLIP_FN);

type Beat = { from: number; to: number; tag?: [number, string, boolean]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 5.86, back: (<><Stock6 n={1} dur={5.86} dim={0.55} graphics={true} /></>), el: (<>
<Center x={560} y={470}><MenuCard at={0.05} w={560} title="TODAY" items={[{ name: "Classic Burger", desc: "cheddar", price: "14" }]} /></Center>
<Center x={1380} y={430}><Words text="$31.08" at={3.04} size={190} hl={["$31.08"]} /></Center>
<Center x={1380} y={580}><Label6 at={1.98} size={30} color={C6.mint}>WHAT THE CARD MACHINE TOOK</Label6></Center>
</>) },
  { from: 5.86, to: 14.5, back: (<><Stock6 n={9} dur={8.64} dim={0.55} graphics={true} /></>), el: (<>
<Center x={1400} y={540}><Bill at={0.05} rows={9} w={680} lines={[{ label: "Classic Burger", value: "14.00", kind: "food", at: 0.1 }]} note="ILLUSTRATIVE EXAMPLE · BUILT FROM REAL FEES" noteAt={0.3} /></Center>
</>) },
  { from: 14.5, to: 22.44, back: (<><Stock6 n={6} dur={7.94} dim={0.3} graphics={true} />
<Stock6 n={35} from={4.88} dur={7.94} dim={0.3} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.78} from="fade"><Plate6 at={2.78}><Label6 at={2.78} size={38} color={C6.accent}>+$17.08 BETWEEN THE MENU AND THE MACHINE</Label6></Plate6></In></Center>
</>) },
  { from: 22.44, to: 25.72, back: (<><Stock6 n={2} dur={3.28} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.68} from="fade"><Plate6 at={1.68}><Label6 at={1.68} size={40} color={C6.ink}>IT STARTS BEFORE YOU ORDER</Label6></Plate6></In></Center>
</>) },
  { from: 25.72, to: 31.8, back: null, el: (<>
<Drift><Center y={460}><Words text="14" at={1.6} size={340} hl={["14"]} /></Center>
<Center y={760}><Label6 at={2.24} size={40} color={C6.mint}>NOT “$14.00”. JUST “14”.</Label6></Center></Drift>
</>) },
  { from: 31.8, to: 35.46, back: null, el: (<>
<Evidence src="evidence/t06/cornell.png" size={[2880, 1800]} dur={3.66} frame="screen" marks={[{ x: 1334, y: 671, w: 382, h: 54, at: 1.3 }]} zoom={0.9} inset={{ src: "evidence/t06/cornell-top.png", size: [2880, 1800] }} source="CORNELL CHRONICLE · STUDY IN INT. J. OF HOSPITALITY MANAGEMENT, 2009" url="news.cornell.edu" />
</>) },
  { from: 35.46, to: 43.02, back: null, el: (<>
<Drift><Center y={560}><ThreeMenus at={0.05} winAt={5.68} /></Center><Source6 at={5.68}>Yang, Kimes & Sessarego · Cornell, 2009</Source6></Drift>
</>) },
  { from: 43.02, to: 49.76, back: null, el: (<>
<Drift><Center x={640} y={540}><Bill at={0.05} rows={9} w={680} lines={[{ label: "Classic Burger", value: "14.00", kind: "food", at: 0.1 }]} note="ILLUSTRATIVE EXAMPLE · BUILT FROM REAL FEES" noteAt={0.3} /></Center><Center x={1380} y={450}><Words text="$17.08" at={3.22} size={170} hl={["$17.08"]} /></Center>
<Center x={1380} y={590}><Label6 at={3.22} size={34} color={C6.mint}>WHERE DID IT COME FROM?</Label6></Center></Drift>
</>) },
  { from: 49.76, to: 55.2, tag: [1, "The Menu", true], hard: true, back: (<><Stock6 n={63} dur={5.44} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.18} from="fade"><Plate6 at={4.18}><Label6 at={4.18} size={50} color={C6.accent}>MENU ENGINEERING</Label6></Plate6></In></Center>
</>) },
  { from: 55.2, to: 65.54, tag: [1, "The Menu", false], back: (<><Stock6 n={3} dur={10.34} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.76} from="fade"><Plate6 at={4.76}><Label6 at={4.76} size={32} color={C6.ink}>MENU ENGINEER GREGG RAPP: DROP THE $, THE DECIMAL POINT, THE CENTS</Label6></Plate6></In></Center><Source6 at={4.76}>Rapp, via Barking Up the Wrong Tree</Source6>
</>) },
  { from: 65.54, to: 75.86, tag: [1, "The Menu", false], back: (<><Stock6 n={4} dur={10.32} dim={0.35} graphics={true} />
<Stock6 n={55} from={5.2} dur={10.32} dim={0.35} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.24} out={5.2} from="fade"><Plate6 at={3.24}><Label6 at={3.24} size={38} color={C6.ink}>THE $ REMINDS YOU THAT YOU'RE PAYING</Label6></Plate6></In></Center><Center x={960} y={880}><In at={5.2} from="fade"><Plate6 at={5.2}><Label6 at={5.2} size={38} color={C6.accent}>WITHOUT IT: “A NICE, FRIENDLY NUMBER”</Label6></Plate6></In></Center>
</>) },
  { from: 75.86, to: 85.56, tag: [1, "The Menu", false], back: null, el: (<>
<Drift><Center y={540}><MenuCard at={0.05} w={820} items={[{ name: "Tomahawk Ribeye", desc: "32 oz, bone-in", price: "58", anchor: true, hlAt: 2.06 },
 { name: "Grilled Salmon", desc: "lemon butter", price: "26" },
 { name: "Chicken Sandwich", desc: "brioche", price: "16" },
 { name: "Classic Burger", desc: "cheddar, pickles", price: "14", hlAt: 8.42 },
 { name: "Side Salad", desc: "house", price: "9" }]} /></Center></Drift>
</>) },
  { from: 85.56, to: 97.18, tag: [1, "The Menu", false], back: (<><Stock6 n={14} dur={11.62} dim={0.35} graphics={true} />
<Stock6 n={15} from={7.32} dur={11.62} dim={0.35} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.9} out={7.32} from="fade"><Plate6 at={1.9}><Label6 at={1.9} size={36} color={C6.ink}>“ANCHOR”: AN ITEM THEY DON'T EXPECT ANYONE TO BUY</Label6></Plate6></In></Center><Center x={960} y={880}><In at={7.32} from="fade"><Plate6 at={7.32}><Label6 at={7.32} size={36} color={C6.accent}>…SO EVERYTHING BELOW IT LOOKS LIKE A BARGAIN</Label6></Plate6></In></Center><Source6 at={1.9}>William Poundstone, “Priceless” · via ABC News</Source6>
</>) },
  { from: 97.18, to: 100.8, tag: [1, "The Menu", false], back: null, el: (<>
<Drift><Center y={560}><AnchorSeesaw at={0.05} tiltAt={1.31} /></Center></Drift>
</>) },
  { from: 100.8, to: 113.06, tag: [1, "The Menu", false], back: null, el: (<>
<Drift><Center y={540}><Row gap={70}>
<Col gap={20}><Label6 at={6.08} size={26} color={C6.loss}>PRICES IN A COLUMN</Label6><MenuCard at={6.08} w={600} column items={[{ name: "Tomahawk Ribeye", price: "58" }, { name: "Grilled Salmon", price: "26" }, { name: "Chicken Sandwich", price: "16", hlAt: 10.56 }, { name: "Classic Burger", price: "14", hlAt: 10.56 }, { name: "Side Salad", price: "9", hlAt: 10.56 }]} /></Col>
<Col gap={20}><Label6 at={0.05} size={26} color={C6.money}>PRICES TUCKED IN</Label6><MenuCard at={0.05} w={600} items={[{ name: "Tomahawk Ribeye", desc: "bone-in", price: "58" }, { name: "Grilled Salmon", desc: "lemon", price: "26" }, { name: "Chicken Sandwich", desc: "brioche", price: "16" }, { name: "Classic Burger", desc: "cheddar", price: "14" }, { name: "Side Salad", desc: "house", price: "9" }]} /></Col>
</Row></Center><Center x={960} y={1000}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={22} color={C6.mint}>ILLUSTRATION</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 113.06, to: 115.78, tag: [1, "The Menu", false], back: (<><Stock6 n={18} dur={2.72} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.74} from="fade"><Plate6 at={1.74}><Label6 at={1.74} size={46} color={C6.accent}>“GREAT CHOICE.”</Label6></Plate6></In></Center>
</>) },
  { from: 115.78, to: 120.7, tag: [1, "The Menu", false], back: (<><Stock6 n={11} dur={4.92} dim={0.3} graphics={true} />
<Stock6 n={12} from={2.0} dur={4.92} dim={0.3} graphics={true} /></>), el: (<>
<Center x={1400} y={540}><Bill at={0.05} rows={9} w={680} lines={[{ label: "Classic Burger", value: "14.00", kind: "food", at: -1 }, { label: "+ Bacon", value: "3.00", kind: "food", at: 1.1 }, { label: "Truffle fries swap", value: "2.00", kind: "food", at: 3.96 }]} /></Center>
</>) },
  { from: 120.7, to: 127.24, tag: [1, "The Menu", false], back: (<><Stock6 n={57} dur={6.54} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.78} from="fade"><Plate6 at={2.78}><Label6 at={2.78} size={34} color={C6.ink}>TOAST · ITS SYSTEM RUNS A HUGE NUMBER OF RESTAURANTS</Label6></Plate6></In></Center>
</>) },
  { from: 127.24, to: 134.42, tag: [1, "The Menu", false], back: null, el: (<>
<Evidence src="evidence/t06/toast-upsell.png" size={[2880, 1800]} dur={7.18} frame="screen" marks={[{ x: 830, y: 659, w: 311, h: 40, at: 4.18 }]} zoom={0.9} inset={{ src: "evidence/t06/toast-upsell-top.png", size: [2880, 1250] }} source="TOAST · RESTAURANT BLOG “ON THE LINE”" url="pos.toasttab.com" />
</>) },
  { from: 134.42, to: 140.26, tag: [1, "The Menu", false], back: null, el: (<>
<Evidence src="evidence/t06/toast-upsell.png" size={[2880, 1800]} dur={5.84} frame="screen" marks={[{ x: 1054, y: 245, w: 371, h: 40, at: 1.52 }]} zoom={0.9} inset={{ src: "evidence/t06/toast-upsell-top.png", size: [2880, 1250] }} source="TOAST · RESTAURANT BLOG “ON THE LINE”" url="pos.toasttab.com" />
</>) },
  { from: 140.26, to: 143.6, tag: [1, "The Menu", false], back: null, el: (<>
<Drift><Center y={500}><Leaderboard at={0.05} topAt={1.8} /></Center></Drift>
</>) },
  { from: 143.6, to: 156.96, tag: [1, "The Menu", false], back: (<><Stock6 n={51} dur={13.36} dim={0.4} graphics={true} /></>), el: (<>
<Center x={960} y={860}><In at={3.86} out={6.94} from="fade"><Plate6 at={3.86}><Label6 at={3.86} size={50} color={C6.accent}>MENU PRICE = OPENING BID</Label6></Plate6></In></Center><Center x={960} y={860}><In at={6.94} out={8.62} from="fade"><Plate6 at={6.94}><Label6 at={6.94} size={44} color={C6.ink}>LIKE AN AIRLINE'S BASE FARE</Label6></Plate6></In></Center><Center x={960} y={860}><In at={8.62} from="fade"><Plate6 at={8.62}><Label6 at={8.62} size={40} color={C6.ink}>THE REAL NUMBER COMES AFTER YOU SAY YES</Label6></Plate6></In></Center>
</>) },
  { from: 156.96, to: 161.94, tag: [2, "Bait & Business", true], hard: true, back: (<><Stock6 n={17} dur={4.98} dim={0.3} graphics={true} /></>), el: (<>
<Center x={1400} y={540}><Bill at={0.05} rows={9} w={680} lines={[{ label: "Classic Burger", value: "14.00", kind: "food", at: -1 }, { label: "+ Bacon", value: "3.00", kind: "food", at: -1 }, { label: "Truffle fries swap", value: "2.00", kind: "food", at: -1 }, { label: "Soda", value: "3.50", kind: "food", at: 1.48 }, { label: "SUBTOTAL", value: "22.50", kind: "food", at: 2.52 }]} /></Center>
</>) },
  { from: 161.94, to: 170.22, tag: [2, "Bait & Business", false], back: (<><Stock6 n={7} dur={8.28} dim={0} graphics={true} />
<Stock6 n={22} from={5.52} dur={8.28} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.98} from="fade"><Plate6 at={3.98}><Label6 at={3.98} size={44} color={C6.ink}>THE EXPENSIVE PART?</Label6></Plate6></In></Center>
</>) },
  { from: 170.22, to: 181.62, tag: [2, "Bait & Business", false], back: null, el: (<>
<Drift><Center y={470}><Donut6 at={0.1} pct={33.7} center="33.7%" size={420} /></Center>
<Center y={800}><Label6 at={0.3} size={32} color={C6.mint}>FOOD &amp; NON-ALCOHOLIC DRINK COST · SHARE OF SALES · MEDIAN</Label6></Center><Source6 at={0.3}>National Restaurant Association · 2024 data · restaurants under $2M</Source6></Drift>
</>) },
  { from: 181.62, to: 187.28, tag: [2, "Bait & Business", false], back: (<><Stock6 n={68} dur={5.66} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.52} from="fade"><Plate6 at={3.52}><Label6 at={3.52} size={38} color={C6.ink}>ONE BEVERAGE EXECUTIVE, IN THE TRADE PRESS</Label6></Plate6></In></Center>
</>) },
  { from: 187.28, to: 193.32, tag: [2, "Bait & Business", false], back: null, el: (<>
<Evidence src="evidence/t06/mrm-soda.png" size={[2880, 1800]} dur={6.04} frame="screen" marks={[{ x: 680, y: 600, w: 1500, h: 89, at: 2.88 }]} zoom={0.9} inset={{ src: "evidence/t06/mrm-top.png", size: [2880, 1800] }} source="MODERN RESTAURANT MANAGEMENT · JULY 2026" url="modernrestaurantmanagement.com" />
</>) },
  { from: 193.32, to: 202.2, tag: [2, "Bait & Business", false], back: null, el: (<>
<Drift><Center y={460}><SodaMargin at={0.05} pctAt={0.3} /></Center><Center x={960} y={880}><In at={4.18} out={6.86} from="fade"><Plate6 at={4.18}><Label6 at={4.18} size={40} color={C6.ink}>SYRUP · WATER · ICE · A CUP</Label6></Plate6></In></Center><Center x={960} y={880}><In at={6.86} from="fade"><Plate6 at={6.86}><Label6 at={6.86} size={44} color={C6.accent}>YOU PAID $3.50</Label6></Plate6></In></Center><Source6 at={0.3}>our calculation: $2.15 ÷ $2.50</Source6></Drift>
</>) },
  { from: 202.2, to: 206.28, tag: [2, "Bait & Business", false], back: (<><Stock6 n={10} dur={4.08} dim={0} graphics={false} />
<Stock6 n={39} from={2.04} dur={4.08} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={880}><In at={1.08} out={2.04} from="fade"><Plate6 at={1.08}><Label6 at={1.08} size={56} color={C6.accent}>THE BAIT</Label6></Plate6></In></Center><Center x={960} y={880}><In at={2.9} from="fade"><Plate6 at={2.9}><Label6 at={2.9} size={56} color={C6.money}>THE BUSINESS</Label6></Plate6></In></Center>
</>) },
  { from: 206.28, to: 219.8, tag: [2, "Bait & Business", false], back: (<><Stock6 n={21} dur={13.52} dim={0} graphics={true} />
<Stock6 n={53} from={9.88} dur={13.52} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.5} out={9.88} from="fade"><Plate6 at={5.5}><Label6 at={5.5} size={36} color={C6.ink}>A FULL-SERVICE RESTAURANT KEEPS ~1–5¢ OF EVERY $1</Label6></Plate6></In></Center><Center x={960} y={880}><In at={9.88} from="fade"><Plate6 at={9.88}><Label6 at={9.88} size={40} color={C6.ink}>RENT · STAFF · INSURANCE · REPAIRS</Label6></Plate6></In></Center><Source6 at={5.5}>Toast · Restaurant365 · NRA</Source6>
</>) },
  { from: 219.8, to: 227.6, tag: [2, "Bait & Business", false], back: null, el: (<>
<Drift><Center x={760} y={540}><Bill at={0.05} rows={9} w={680} lines={[{ label: "Classic Burger", value: "14.00", kind: "food", at: -1, tag: "yes", tagAt: 3.4 }, { label: "+ Bacon", value: "3.00", kind: "food", at: -1, tag: "yes", tagAt: 5.0 }, { label: "Truffle fries swap", value: "2.00", kind: "food", at: -1, tag: "yes", tagAt: 5.0 }, { label: "Soda", value: "3.50", kind: "food", at: -1, tag: "yes", tagAt: 6.52 }, { label: "SUBTOTAL", value: "22.50", kind: "food", at: -1 }]} note="ILLUSTRATIVE EXAMPLE · BUILT FROM REAL FEES" noteAt={0.05} /></Center></Drift>
</>) },
  { from: 227.6, to: 231.94, tag: [2, "Bait & Business", false], back: null, el: (<>
<Drift><Center x={760} y={540}><Bill at={-1} rows={9} w={680} lines={[{ label: "Classic Burger", value: "14.00", kind: "food", at: -1, tag: "yes", tagAt: -1 }, { label: "+ Bacon", value: "3.00", kind: "food", at: -1, tag: "yes", tagAt: -1 }, { label: "Truffle fries swap", value: "2.00", kind: "food", at: -1, tag: "yes", tagAt: -1 }, { label: "Soda", value: "3.50", kind: "food", at: -1, tag: "yes", tagAt: -1 }, { label: "SUBTOTAL", value: "22.50", kind: "food", at: -1 }, { label: "Kitchen Appr. Fee 3.5%", value: "0.79", kind: "blur", at: 1.86 }]} /></Center></Drift>
</>) },
  { from: 231.94, to: 240.94, tag: [3, "The Fine Print", true], hard: true, back: null, el: (<>
<Drift><Center x={960} y={540}><Bill at={-1} rows={9} w={680} lines={[{ label: "Classic Burger", value: "14.00", kind: "food", at: -1 }, { label: "+ Bacon", value: "3.00", kind: "food", at: -1 }, { label: "Truffle fries swap", value: "2.00", kind: "food", at: -1 }, { label: "Soda", value: "3.50", kind: "food", at: -1 }, { label: "SUBTOTAL", value: "22.50", kind: "food", at: -1 }, { label: "Kitchen Appr. Fee 3.5%", value: "0.79", kind: "fee", at: 3.84, hlAt: 7.59 }]} note="ILLUSTRATIVE EXAMPLE · BUILT FROM REAL FEES" noteAt={0.05} /></Center></Drift>
</>) },
  { from: 240.94, to: 245.52, tag: [3, "The Fine Print", false], back: (<><Stock6 n={1} dur={4.58} dim={0.3} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.9} from="fade"><Plate6 at={2.9}><Label6 at={2.9} size={38} color={C6.ink}>ONLY IN THE TINY LINE AT THE VERY BOTTOM</Label6></Plate6></In></Center>
</>) },
  { from: 245.52, to: 255.72, tag: [3, "The Fine Print", false], back: null, el: (<>
<Evidence src="evidence/t06/elliott-names.png" size={[2880, 1800]} dur={10.2} frame="screen" marks={[{ x: 650, y: 721, w: 386, h: 40, at: 4.44 }]} zoom={0.72} inset={{ src: "evidence/t06/elliott-top.png", size: [2880, 1800] }} source="THE ELLIOTT REPORT · NOV 2026" url="elliott.org" />
</>) },
  { from: 255.72, to: 259.98, tag: [3, "The Fine Print", false], back: (<><Stock6 n={45} dur={4.26} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.26} from="fade"><Plate6 at={3.26}><Label6 at={3.26} size={40} color={C6.ink}>A STEAKHOUSE · MOAB, UTAH</Label6></Plate6></In></Center>
</>) },
  { from: 259.98, to: 263.02, tag: [3, "The Fine Print", false], back: null, el: (<>
<Evidence src="evidence/t06/elliott-beef.png" size={[2880, 1800]} dur={3.04} frame="screen" marks={[{ x: 1140, y: 661, w: 324, h: 40, at: 0.86 }]} zoom={0.72} inset={{ src: "evidence/t06/elliott-top.png", size: [2880, 1800] }} source="THE ELLIOTT REPORT · NOV 2026" url="elliott.org" />
</>) },
  { from: 263.02, to: 265.36, tag: [3, "The Fine Print", false], back: (<><Stock6 n={27} dur={2.34} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.05} text="he ordered chicken." y={900} size={76} />
</>) },
  { from: 265.36, to: 270.08, tag: [3, "The Fine Print", false], back: (<><Stock6 n={26} dur={4.72} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.12} from="fade"><Plate6 at={3.12}><Label6 at={3.12} size={42} color={C6.ink}>MANY PEOPLE NEVER NOTICE</Label6></Plate6></In></Center>
</>) },
  { from: 270.08, to: 276.74, tag: [3, "The Fine Print", false], back: (<><Stock6 n={47} dur={6.66} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.42} from="fade"><Plate6 at={3.42}><Label6 at={3.42} size={40} color={C6.ink}>ARIZONA ATTORNEY GENERAL · 2023</Label6></Plate6></In></Center>
</>) },
  { from: 276.74, to: 281.88, tag: [3, "The Fine Print", false], back: null, el: (<>
<Evidence src="evidence/t06/azag-benefits.png" size={[2880, 1800]} dur={5.14} frame="screen" marks={[{ x: 2113, y: 798, w: 440, h: 38, at: 1.74 }]} zoom={0.75} source="ARIZONA ATTORNEY GENERAL · APRIL 2023" url="azag.gov" />
</>) },
  { from: 281.88, to: 285.42, tag: [3, "The Fine Print", false], back: null, el: (<>
<Evidence src="evidence/t06/azag.png" size={[2880, 1800]} dur={3.54} frame="screen" marks={[{ x: 715, y: 345, w: 102, h: 32, at: 0.4 }]} zoom={1.0} source="ARIZONA ATTORNEY GENERAL · APRIL 2023" url="azag.gov" />
</>) },
  { from: 285.42, to: 288.94, tag: [3, "The Fine Print", false], back: (<><Stock6 n={56} dur={3.52} dim={0} graphics={false} /></>), el: (<>
<Meme at={1.9} text="depends where you're sitting." y={920} size={68} />
</>) },
  { from: 288.94, to: 298.8, tag: [3, "The Fine Print", false], back: (<><Stock6 n={48} dur={9.86} dim={0.3} graphics={true} />
<Stock6 n={49} from={3.6} dur={9.86} dim={0.3} graphics={true} /></>), el: (<>
<Center x={960} y={820}><In at={0.05} out={3.6} from="fade"><Plate6 at={0.05}><Label6 at={0.05} size={34} color={C6.ink}>CALIFORNIA · SB 478 BANS HIDDEN FEES · JULY 1, 2024</Label6></Plate6></In></Center><Center x={960} y={820}><In at={3.6} from="fade"><Plate6 at={3.6}><Label6 at={3.6} size={34} color={C6.accent}>2 DAYS BEFORE: RESTAURANTS EXEMPTED (SB 1524)</Label6></Plate6></In></Center><Center x={960} y={920}><In at={8.08} from="fade"><Plate6 at={8.08}><Label6 at={8.08} size={30} color={C6.mint}>…IF THE FEE IS WRITTEN ON THE MENU</Label6></Plate6></In></Center>
</>) },
  { from: 298.8, to: 306.16, tag: [3, "The Fine Print", false], back: null, el: (<>
<Evidence src="evidence/t06/newsweek-fl.png" size={[2880, 1800]} dur={7.36} frame="screen" zoom={0.9} source="NEWSWEEK · 2026" url="newsweek.com" /><Center x={960} y={960}><In at={5.58} from="fade"><Plate6 at={5.58}><Label6 at={5.58} size={30} color={C6.ink}>FLORIDA · JULY 2026 · SHOW FEES BEFORE PEOPLE ORDER</Label6></Plate6></In></Center>
</>) },
  { from: 306.16, to: 314.24, tag: [3, "The Fine Print", false], back: null, el: (<>
<Drift><Center y={520}><StateCards cards={[{ state: "Massachusetts", rule: "Mandatory fees in the menu price", src: "AG rules · Sept 2025", at: 1.74 }, { state: "Minnesota", rule: "Mandatory fees in the menu price", src: "Since Jan 2025", at: 2.82 }, { state: "Colorado", rule: "Mandatory fees in the menu price", src: "Since Jan 2026", at: 3.94 }]} /></Center></Drift>
</>) },
  { from: 314.24, to: 320.12, tag: [3, "The Fine Print", false], back: null, el: (<>
<Drift><Center y={520}><ListReveal title="FTC JUNK FEE RULE (2025) COVERS" w={820} items={[{ text: "Concert & event tickets  ✓", at: 2.34 }, { text: "Hotels & short-term rentals  ✓", at: 3.42 }, { text: "Restaurants  ✗", at: 4.3, hot: true }]} /></Center></Drift>
</>) },
  { from: 320.12, to: 326.62, tag: [3, "The Fine Print", false], back: null, el: (<>
<Drift><Center x={960} y={540}><Bill at={-1} rows={9} w={680} lines={[{ label: "Classic Burger", value: "14.00", kind: "food", at: -1 }, { label: "+ Bacon", value: "3.00", kind: "food", at: -1 }, { label: "Truffle fries swap", value: "2.00", kind: "food", at: -1 }, { label: "Soda", value: "3.50", kind: "food", at: -1 }, { label: "SUBTOTAL", value: "22.50", kind: "food", at: -1 }, { label: "Kitchen Appr. Fee 3.5%", value: "0.79", kind: "fee", at: -1, hlAt: 5.42 }, { label: "Tax 8%", value: "1.86", kind: "tax", at: 1.58 }]} note="ILLUSTRATIVE EXAMPLE · BUILT FROM REAL FEES" noteAt={0.05} /></Center></Drift>
</>) },
  { from: 326.62, to: 334.78, tag: [3, "The Fine Print", false], back: null, el: (<>
<Evidence src="evidence/t06/elliott-hawaii.png" size={[2880, 1800]} dur={8.16} frame="screen" marks={[{ x: 998, y: 601, w: 376, h: 40, at: 4.28 }]} zoom={0.72} inset={{ src: "evidence/t06/elliott-top.png", size: [2880, 1800] }} source="THE ELLIOTT REPORT · NOV 2026" url="elliott.org" />
</>) },
  { from: 334.78, to: 339.42, tag: [3, "The Fine Print", false], back: null, el: (<>
<Drift><Center x={960} y={540}><Bill at={-1} rows={9} w={680} lines={[{ label: "Classic Burger", value: "14.00", kind: "food", at: -1 }, { label: "+ Bacon", value: "3.00", kind: "food", at: -1 }, { label: "Truffle fries swap", value: "2.00", kind: "food", at: -1 }, { label: "Soda", value: "3.50", kind: "food", at: -1 }, { label: "SUBTOTAL", value: "22.50", kind: "food", at: -1 }, { label: "Kitchen Appr. Fee 3.5%", value: "0.79", kind: "fee", at: -1 }, { label: "Tax 8%", value: "1.86", kind: "tax", at: -1 }, { label: "Card surcharge 3%", value: "0.75", kind: "fee", at: 3.14, hlAt: 3.14 }]} note="ILLUSTRATIVE EXAMPLE · BUILT FROM REAL FEES" noteAt={0.05} /></Center></Drift>
</>) },
  { from: 339.42, to: 354.36, tag: [3, "The Fine Print", false], back: (<><Stock6 n={65} dur={14.94} dim={0.3} graphics={true} />
<Stock6 n={66} from={5.44} dur={14.94} dim={0.3} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.7} out={5.44} from="fade"><Plate6 at={2.7}><Label6 at={2.7} size={42} color={C6.ink}>VISA CAPS IT AT 3%</Label6></Plate6></In></Center><Center x={960} y={880}><In at={5.44} out={9.68} from="fade"><Plate6 at={5.44}><Label6 at={5.44} size={36} color={C6.ink}>BANNED: CONNECTICUT · MAINE · MASSACHUSETTS</Label6></Plate6></In></Center><Center x={960} y={880}><In at={9.68} from="fade"><Plate6 at={9.68}><Label6 at={9.68} size={42} color={C6.accent}>CREDIT CARDS ONLY · NEVER ON DEBIT</Label6></Plate6></In></Center><Source6 at={2.7}>Experian · Stripe · Money Crashers</Source6>
</>) },
  { from: 354.36, to: 361.04, tag: [3, "The Fine Print", false], back: (<><Stock6 n={25} dur={6.68} dim={0} graphics={true} /></>), el: (<>
<Subscribe6 at={3.6} /><Center x={960} y={880}><In at={5.24} from="fade"><Plate6 at={5.24}><Label6 at={5.24} size={36} color={C6.ink}>ONE OF THESE EVERY FEW DAYS</Label6></Plate6></In></Center>
</>) },
  { from: 361.04, to: 367.22, tag: [3, "The Fine Print", false], back: null, el: (<>
<Drift><Center x={640} y={540}><Bill at={-1} rows={9} w={680} lines={[{ label: "Classic Burger", value: "14.00", kind: "food", at: -1 }, { label: "+ Bacon", value: "3.00", kind: "food", at: -1 }, { label: "Truffle fries swap", value: "2.00", kind: "food", at: -1 }, { label: "Soda", value: "3.50", kind: "food", at: -1 }, { label: "SUBTOTAL", value: "22.50", kind: "food", at: -1 }, { label: "Kitchen Appr. Fee 3.5%", value: "0.79", kind: "fee", at: -1 }, { label: "Tax 8%", value: "1.86", kind: "tax", at: -1 }, { label: "Card surcharge 3%", value: "0.75", kind: "fee", at: -1 }]} total={{ value: "25.90", at: 0.1, label: "SO FAR" }} /></Center><Center x={1400} y={500}><TipScreen at={3.48} w={500} /></Center></Drift>
</>) },
  { from: 367.22, to: 369.7, tag: [4, "The Machine", true], hard: true, back: (<><Stock6 n={58} dur={2.48} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={40} color={C6.ink}>THE SCREEN TURNS AROUND</Label6></Plate6></In></Center>
</>) },
  { from: 369.7, to: 377.02, tag: [4, "The Machine", false], back: null, el: (<>
<Drift><Center x={760} y={530}><TipScreen at={0.05} w={620} press={0} pressAt={3.6} amounts={["$5.18", "$5.70", "$6.48"]} /></Center>
<Center x={1460} y={500}><Words text="+$5.18" at={4.46} size={150} hl={["+$5.18"]} /></Center></Drift>
</>) },
  { from: 377.02, to: 387.52, tag: [4, "The Machine", false], back: null, el: (<>
<Drift><Center y={460}><TipBase at={0.1} feeAt={6.72} /></Center><Center x={960} y={880}><In at={9.06} from="fade"><Plate6 at={9.06}><Label6 at={9.06} size={46} color={C6.accent}>YOU JUST TIPPED ON A FEE</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 387.52, to: 395.6, tag: [4, "The Machine", false], back: null, el: (<>
<Evidence src="evidence/t06/toast-tip-help.png" size={[2880, 1800]} dur={8.08} frame="screen" marks={[{ x: 1205, y: 595, w: 226, h: 36, at: 5.84 }]} zoom={0.75} source="TOAST SUPPORT · HELP CENTER" url="support.toasttab.com" />
</>) },
  { from: 395.6, to: 405.62, tag: [4, "The Machine", false], back: null, el: (<>
<Evidence src="evidence/t06/foxnews-db.png" size={[1650, 1380]} dur={10.02} frame="screen" marks={[{ x: 480, y: 540, w: 340, h: 50, at: 8.8 }]} zoom={0.9} inset={{ src: "evidence/t06/foxnews-top.png", size: [2580, 650] }} source="FOX NEWS · MARCH 2026" url="foxnews.com" />
</>) },
  { from: 405.62, to: 408.7, tag: [4, "The Machine", false], back: (<><Stock6 n={32} dur={3.08} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.18} from="fade"><Plate6 at={2.18}><Label6 at={2.18} size={40} color={C6.ink}>A STUDY OF NEW YORK TAXIS</Label6></Plate6></In></Center><Source6 at={2.18}>Haggag & Paci · American Economic Journal, 2014</Source6>
</>) },
  { from: 408.7, to: 418.56, tag: [4, "The Machine", false], back: null, el: (<>
<Drift><Center y={470}><Row gap={90}><TipScreen at={0.1} w={470} opts={["15%", "20%", "25%"]} label="TAXI SCREEN A" total="Tip?" sub="SUGGESTED" /><TipScreen at={2.66} w={470} opts={["20%", "25%", "30%"]} label="TAXI SCREEN B" total="Tip?" sub="SUGGESTED" /></Row></Center><Center x={960} y={920}><In at={8.18} from="fade"><Plate6 at={8.18}><Label6 at={8.18} size={44} color={C6.accent}>HIGHER BUTTONS → TIPS UP ≈10%</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 418.56, to: 426.88, tag: [4, "The Machine", false], back: (<><Stock6 n={5} dur={8.32} dim={0} graphics={true} />
<Stock6 n={57} from={5.52} dur={8.32} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.46} out={5.52} from="fade"><Plate6 at={4.46}><Label6 at={4.46} size={46} color={C6.accent}>ONE COMPANY: TOAST</Label6></Plate6></In></Center><Center x={960} y={880}><In at={5.52} from="fade"><Plate6 at={5.52}><Label6 at={5.52} size={36} color={C6.ink}>THE SAME TOAST WITH THE UPSELLING LEADERBOARD</Label6></Plate6></In></Center>
</>) },
  { from: 426.88, to: 431.16, tag: [4, "The Machine", false], back: null, el: (<>
<Drift><Center y={450}><Counter6 to={189000} at={0.2} dur={1.2} size={190} fmt={(v) => "≈" + Math.round(v).toLocaleString("en-US")} /></Center>
<Center y={640}><Label6 at={0.4} size={36} color={C6.mint}>LOCATIONS RUN ON TOAST</Label6></Center><Source6 at={0.4}>Toast Q3 2026 financial results</Source6></Drift>
</>) },
  { from: 431.16, to: 436.88, tag: [4, "The Machine", false], back: null, el: (<>
<Evidence src="evidence/t06/ftc-toast-top.png" size={[2880, 1800]} dur={5.72} frame="screen" zoom={0.9} source="FEDERAL TRADE COMMISSION · OCT 29, 2026" url="ftc.gov" /><Center x={960} y={960}><In at={3.44} from="fade"><Plate6 at={3.44}><Label6 at={3.44} size={40} color={C6.accent}>FTC + 8 STATES v. TOAST</Label6></Plate6></In></Center>
</>) },
  { from: 436.88, to: 448.92, tag: [4, "The Machine", false], back: null, el: (<>
<Drift><Center y={520}><FeeRoute at={0.05} feeAt={4.6} goAt={10.58} /></Center></Drift>
</>) },
  { from: 448.92, to: 452.38, tag: [4, "The Machine", false], back: null, el: (<>
<Evidence src="evidence/t06/ftc-toast-money.png" size={[2880, 1800]} dur={3.46} frame="screen" marks={[{ x: 759, y: 804, w: 599, h: 40, at: 0.14 }]} zoom={0.75} source="FEDERAL TRADE COMMISSION · OCT 29, 2026" url="ftc.gov" />
</>) },
  { from: 452.38, to: 457.96, tag: [4, "The Machine", false], back: null, el: (<>
<Evidence src="evidence/t06/foxbiz-site.png" size={[1650, 1800]} dur={5.58} frame="screen" marks={[{ x: 934, y: 598, w: 418, h: 42, at: 4.4 }]} zoom={0.9} inset={{ src: "evidence/t06/foxbiz-top.png", size: [2580, 780] }} source="FOX BUSINESS · JULY 2023" url="foxbusiness.com" />
</>) },
  { from: 457.96, to: 462.3, tag: [4, "The Machine", false], back: null, el: (<>
<Evidence src="evidence/t06/ftc-toast.png" size={[2880, 1800]} dur={4.34} frame="screen" marks={[{ x: 350, y: 738, w: 232, h: 40, at: 3.06 }]} zoom={0.75} source="FEDERAL TRADE COMMISSION · OCT 29, 2026" url="ftc.gov" />
</>) },
  { from: 462.3, to: 467.36, tag: [4, "The Machine", false], back: (<><Stock6 n={42} dur={5.06} dim={0.4} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.76} from="fade"><Plate6 at={0.76}><Label6 at={0.76} size={34} color={C6.accent}>ALLEGATIONS · TOAST STRONGLY DISAGREES · A COURT WILL DECIDE</Label6></Plate6></In></Center>
</>) },
  { from: 467.36, to: 474.38, tag: [4, "The Machine", false], back: null, el: (<>
<Evidence src="evidence/t06/foxbiz-70.png" size={[1650, 830]} dur={7.02} frame="screen" marks={[{ x: 84, y: 650, w: 374, h: 42, at: 4.44 }]} zoom={0.9} inset={{ src: "evidence/t06/foxbiz-top.png", size: [2580, 780] }} source="FOX BUSINESS · JULY 2023" url="foxbusiness.com" />
</>) },
  { from: 474.38, to: 479.08, tag: [4, "The Machine", false], back: (<><Stock6 n={59} dur={4.7} dim={0.4} graphics={true} /></>), el: (<>
<Center y={480}><Words text="“It appears to the customer like we're penalizing them for ordering online.”" at={0.1} size={64} maxW={1500} hl={["penalizing"]} /></Center><Center x={960} y={880}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={28} color={C6.mint}>A RESTAURANT OWNER IN FENTON, MISSOURI · TO FOX BUSINESS, 2023</Label6></Plate6></In></Center>
</>) },
  { from: 479.08, to: 489.48, tag: [4, "The Machine", false], back: null, el: (<>
<Drift><Center y={500}><Split6 at={0.1} scale={0.85} left={{ title: "A RESTAURANT KEEPS", value: "1–5¢ / $1", icon: "store", color: C6.mint }} right={{ title: "TOAST · Q3 2026 PROFIT", value: "$169M", icon: "card", color: C6.accent, at: 6.04 }} /></Center><Source6 at={6.04}>Toast Q3 2026 results · NRA / Toast / Restaurant365 margins</Source6></Drift>
</>) },
  { from: 489.48, to: 498.82, tag: [5, "Take It Back", true], hard: true, back: null, el: (<>
<Drift><Center x={640} y={530}><Bill at={0.05} rows={9} w={680} lines={[{ label: "Classic Burger", value: "14.00", kind: "food", at: 0.05, hlAt: 2.14 }, { label: "+ Bacon", value: "3.00", kind: "food", at: 0.17 }, { label: "Truffle fries swap", value: "2.00", kind: "food", at: 0.29 }, { label: "Soda", value: "3.50", kind: "food", at: 0.41 }, { label: "SUBTOTAL", value: "22.50", kind: "food", at: 0.53 }, { label: "Kitchen Appr. Fee 3.5%", value: "0.79", kind: "fee", at: 0.65 }, { label: "Tax 8%", value: "1.86", kind: "tax", at: 0.77 }, { label: "Card surcharge 3%", value: "0.75", kind: "fee", at: 0.89 }, { label: "Tip 20%", value: "5.18", kind: "tip", at: 1.01 }]} total={{ value: "$31.08", at: 1.2, label: "TOTAL" }} note="ILLUSTRATIVE EXAMPLE · BUILT FROM REAL FEES" noteAt={1.2} /></Center><Center x={1400} y={440}><Words text="$17.08" at={4.96} size={170} hl={["$17.08"]} /></Center>
<Center x={1400} y={580}><Label6 at={7.2} size={34} color={C6.accent}>MORE THAN THE BURGER ITSELF</Label6></Center></Drift>
</>) },
  { from: 498.82, to: 503.9, tag: [5, "Take It Back", false], back: null, el: (<>
<Drift><Center x={740} y={530}><Bill at={-1} rows={9} w={680} lines={[{ label: "Classic Burger", value: "14.00", kind: "food", at: -1 }, { label: "+ Bacon", value: "3.00", kind: "food", at: -1, tag: "yes", tagAt: 0.66 }, { label: "Truffle fries swap", value: "2.00", kind: "food", at: -1, tag: "yes", tagAt: 0.66 }, { label: "Soda", value: "3.50", kind: "food", at: -1, tag: "yes", tagAt: 0.66 }, { label: "SUBTOTAL", value: "22.50", kind: "food", at: -1 }, { label: "Kitchen Appr. Fee 3.5%", value: "0.79", kind: "fee", at: -1, tag: "no", tagAt: 3.18 }, { label: "Tax 8%", value: "1.86", kind: "tax", at: -1 }, { label: "Card surcharge 3%", value: "0.75", kind: "fee", at: -1 }, { label: "Tip 20%", value: "5.18", kind: "tip", at: -1, tag: "no", tagAt: 3.18 }]} total={{ value: "$31.08", at: -1, label: "TOTAL" }} /></Center></Drift>
</>) },
  { from: 503.9, to: 519.48, tag: [5, "Take It Back", false], back: (<><Stock6 n={23} dur={15.58} dim={0.72} graphics={true} />
<Stock6 n={54} from={7.2} dur={15.58} dim={0.72} graphics={true} /></>), el: (<>
<Center y={520}><ListReveal title="HOW TO TAKE IT BACK" w={1040} items={[{ text: "Read the bottom of the menu first", at: 1.64 }, { text: "Skip the add-on you didn't come for", at: 4.36 }, { text: "Tap water is free", at: 7.2 }, { text: "Pay with debit — no card surcharge", at: 8.8 }, { text: "Custom tip: food, not fees", at: 11.48, hot: true }]} /></Center>
</>) },
  { from: 519.48, to: 525.0, tag: [5, "Take It Back", false], back: null, el: (<>
<Drift><Center y={500}><TwoReceipts at={0.05} bAt={2.64} /></Center><Center x={960} y={990}><In at={2.64} from="fade"><Plate6 at={2.64}><Label6 at={2.64} size={24} color={C6.mint}>ILLUSTRATIVE EXAMPLE · TIP 20% OF THE FOOD</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 525.0, to: 529.38, back: (<><Stock6 n={36} dur={4.38} dim={0.45} graphics={true} /></>), el: (<>
<Center y={790}><Words text="The weirdest fee you've ever found?" at={0.05} size={76} hl={["weirdest"]} /></Center><Center x={960} y={930}><In at={3.36} from="fade"><Plate6 at={3.36}><Label6 at={3.36} size={36} color={C6.accent}>TELL US IN THE COMMENTS</Label6></Plate6></In></Center>
</>) },
  { from: 529.38, to: 544.74, back: (<><Stock6 n={19} dur={15.36} dim={0.55} graphics={true} /></>), el: (<>
<EndCard6 at={0.3} next="Where the service charge goes" />
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string, number][] = [[0.05, "t02-paper", 0.25], [1.98, "ep06-kaching", 0.3], [5.96, "ep06-receipt", 0.3], [17.28, "ep06-pop", 0.25], [22.49, "ep06-whoosh", 0.2], [27.32, "ep06-pop", 0.25], [29.94, "ep06-stamp", 0.25], [31.9, "t02-paper", 0.3], [35.51, "ep06-pop", 0.2], [41.14, "impact", 0.25], [43.12, "ep06-receipt", 0.3], [46.24, "rise", 0.25], [53.94, "ep06-stamp", 0.25], [59.96, "ep06-pop", 0.22], [68.78, "ep06-pop", 0.22], [75.91, "t02-paper", 0.25], [79.76, "ep06-pop", 0.22], [87.46, "ep06-stamp", 0.22], [98.49, "ep06-whoosh", 0.25], [106.88, "ep06-pop", 0.22], [111.36, "ep06-pop", 0.22], [114.8, "ding", 0.25], [116.88, "ep06-receipt", 0.3], [119.74, "ep06-receipt", 0.3], [123.48, "ep06-pop", 0.22], [127.34, "t02-paper", 0.3], [135.94, "ep06-pop", 0.22], [140.36, "ep06-pop", 0.22], [142.06, "ep06-scratch", 0.25], [149.4, "ep06-stamp", 0.25], [150.54, "ep06-whoosh", 0.2], [158.44, "ep06-receipt", 0.3], [162.04, "ep09-sizzle", 0.2], [174.66, "ep06-counter", 0.3], [185.14, "ep06-pop", 0.22], [187.38, "t02-paper", 0.3], [190.16, "ep06-kaching", 0.25], [193.42, "ep06-counter", 0.3], [200.18, "ep06-pop", 0.22], [203.28, "ep06-pop", 0.22], [205.1, "ep06-kaching", 0.25], [211.78, "ep06-pop", 0.22], [223.2, "ep06-stamp", 0.2], [224.8, "ep06-stamp", 0.2], [226.32, "ep06-stamp", 0.2], [227.7, "rise", 0.3], [229.46, "ep06-receipt", 0.3], [235.78, "ep06-receipt", 0.3], [239.53, "impact", 0.25], [243.84, "ep06-pop", 0.22], [245.62, "t02-paper", 0.3], [249.96, "ep06-pop", 0.22], [255.77, "ep06-whoosh", 0.2], [260.84, "ep06-stamp", 0.22], [263.07, "ep06-scratch", 0.25], [268.48, "ep06-pop", 0.22], [270.13, "ep06-whoosh", 0.2], [276.84, "t02-paper", 0.3], [282.28, "ep06-kaching", 0.25], [287.32, "ding", 0.25], [288.99, "ep06-pop", 0.22], [294.16, "ep06-stamp", 0.25], [298.9, "t02-paper", 0.3], [307.9, "ep06-pop", 0.22], [308.98, "ep06-pop", 0.22], [310.1, "ep06-pop", 0.22], [316.58, "ep06-pop", 0.22], [317.66, "ep06-pop", 0.22], [318.54, "buzz", 0.25], [321.7, "ep06-receipt", 0.3], [325.54, "ep06-pop", 0.22], [326.72, "t02-paper", 0.3], [330.9, "ep06-pop", 0.22], [337.92, "ep06-receipt", 0.3], [342.12, "ep06-pop", 0.22], [346.92, "ep06-stamp", 0.22], [351.08, "ding", 0.25], [357.96, "click", 0.35], [361.14, "ep06-pop", 0.22], [363.1, "rise", 0.3], [367.27, "ep06-whoosh", 0.2], [369.75, "ep06-pop", 0.2], [370.71, "ep06-pop", 0.2], [371.69, "ep06-pop", 0.2], [373.3, "click", 0.4], [374.16, "ep06-kaching", 0.25], [377.12, "ep06-pop", 0.2], [383.74, "buzz", 0.25], [386.08, "ep06-stamp", 0.25], [387.62, "t02-paper", 0.3], [393.36, "ep06-pop", 0.22], [395.7, "t02-paper", 0.3], [404.4, "ep06-pop", 0.22], [405.67, "ep06-whoosh", 0.2], [408.8, "ep06-pop", 0.2], [411.36, "ep06-pop", 0.2], [416.88, "impact", 0.25], [423.02, "ep06-stamp", 0.22], [427.08, "ep06-counter", 0.3], [431.26, "t02-paper", 0.3], [434.6, "ep06-stamp", 0.25], [441.48, "ep06-pop", 0.22], [447.46, "ep06-whoosh", 0.25], [449.02, "t02-paper", 0.3], [449.06, "ep06-whoosh", 0.25], [452.48, "t02-paper", 0.3], [456.78, "ep06-pop", 0.22], [458.06, "t02-paper", 0.3], [461.02, "ep06-pop", 0.22], [463.06, "ep06-stamp", 0.22], [467.46, "t02-paper", 0.3], [471.8, "impact", 0.25], [479.18, "ep06-pop", 0.22], [485.12, "impact", 0.3], [489.53, "ep06-receipt", 0.3], [496.68, "impact", 0.25], [499.48, "ep06-stamp", 0.2], [502.0, "ep06-stamp", 0.22], [505.54, "click", 0.3], [508.26, "click", 0.3], [511.1, "click", 0.3], [512.7, "click", 0.3], [515.38, "ep06-kaching", 0.25], [519.53, "ep06-pop", 0.22], [522.12, "ding", 0.3], [528.36, "ep06-pop", 0.2], [529.68, "ep06-whoosh", 0.2]];

export const T06Menu: React.FC = () => {
  const { fps } = useVideoConfig();
  setClips(CLIP_FN); // свой набор стоков при каждом рендере: в общем Root последним грузится чужой ролик
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/t06-voiceover.mp3")} volume={0.9} />
      <Sequence from={0} durationInFrames={1511}><Audio src={staticFile("audio/t06/music-c0-open.mp3")} volume={(f) => 0.065 * interpolate(f, [0, 30, 1481, 1511], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={1475} durationInFrames={3252}><Audio src={staticFile("audio/t06/music-c1-menu.mp3")} volume={(f) => 0.1 * interpolate(f, [0, 30, 3222, 3252], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={4691} durationInFrames={2285}><Audio src={staticFile("audio/t06/music-c2-soda.mp3")} volume={(f) => 0.09 * interpolate(f, [0, 30, 2255, 2285], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={6940} durationInFrames={4094}><Audio src={staticFile("audio/t06/music-c3-fees.mp3")} volume={(f) => 0.073 * interpolate(f, [0, 30, 4064, 4094], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={10999} durationInFrames={3704}><Audio src={staticFile("audio/t06/music-c4-toast.mp3")} volume={(f) => 0.088 * interpolate(f, [0, 30, 3674, 3704], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={14666} durationInFrames={1676}><Audio src={staticFile("audio/t06/music-c5-how.mp3")} volume={(f) => 0.1 * interpolate(f, [0, 30, 1646, 1676], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      {SFX.map(([t, n, v], i) => (
        <Sequence key={"s" + i} from={Math.round(t * fps)} durationInFrames={120}><Audio src={staticFile(`sfx/${n}.wav`)} volume={v} /></Sequence>
      ))}
      {BEATS.map((b, i) => (
        <Sequence key={i} from={Math.round(b.from * fps)} durationInFrames={Math.max(1, Math.round((b.to - b.from) * fps))} name={`Beat ${i + 1}`}>
          {b.back}
          <Scene6 dur={b.to - b.from} hard={b.hard}>{b.el}</Scene6>
          {b.tag && <ChapterTag n={b.tag[0]} title={b.tag[1]} anim={b.tag[2]} />}
        </Sequence>
      ))}
      <Bug6 />
    </AbsoluteFill>
  );
};
