import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Bg6, Bug6, C6, Center, ChapterTag, Counter6, EndCard6, In, Label6, Meme, Scene6, setClips, Source6, Stock6, Subscribe6, Plate6, TwoBars, Words } from "../brand/hm6";
import { MenuBoard, PriceDuel, CalcSteps, Scissors, TwoLocks, ThreeMoves, NameCarousel } from "../brand/t08";
import { Checklist } from "../brand/t07";
import { Drift } from "../brand/t03";
import { Evidence, ArchiveFx } from "../brand/evidence";

// ===================================================================
// T08Menu — сгенерировано cloud/gen/build.py из плана cloud/gen/t08.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const T08MENU_DURATION_SEC = 537.7;
const CLIPS: Record<number, string> = {"1": "01-highway-night", "2": "02-family-minivan", "3": "03-rest-area-aerial", "4": "04-truckstop", "5": "05-mcd-sign-close", "6": "06-mcd-night", "7": "07-drive-thru-night", "8": "08-burger-fries-table", "9": "09-meal-close", "10": "10-man-eating-burger", "11": "11-fries-close", "12": "12-frying", "13": "13-potatoes", "14": "14-fries-ketchup", "15": "15-man-counting", "16": "16-suited-counting", "17": "17-flying-dollars", "18": "18-meeting", "19": "19-stock-screens", "20": "20-terminal-receipt", "21": "21-drive-thru-pay", "22": "22-drive-thru-order", "23": "23-drive-thru-going", "24": "24-drive-thru-sign", "25": "25-empty-drive-thru", "26": "26-chalk-erase", "27": "27-big-menu-board", "28": "28-retro-jukebox", "29": "29-worker-break", "30": "30-eating-alone", "31": "31-elderly-couple", "32": "32-grandfather-kids", "33": "33-boys-eating", "34": "34-scrolling-phone", "35": "35-phone-pay-meal", "36": "36-phone-notif", "37": "37-data-stream", "38": "38-phone-typing", "39": "39-shocked-man", "40": "40-incredulous", "41": "41-facepalm", "42": "42-disappointed", "43": "43-empty-restaurant", "44": "44-empty-tables", "45": "45-newspaper", "46": "46-calculator", "47": "47-calc-phone", "48": "48-empty-wallet", "49": "49-cashier-card", "50": "50-highway-drone", "51": "51-road-signs", "52": "52-interchange", "53": "53-flag", "54": "54-oklahoma-road", "55": "55-paper-bag", "56": "56-cola-ice", "57": "57-burger-bite", "58": "58-sesame-bun", "59": "59-i95-connecticut", "60": "60-service-plaza", "61": "61-thruway-drive-thru", "62": "62-ct-manchester", "63": "63-ct-lisbon", "64": "64-menu-board-cc0", "65": "65-big-mac-meal", "66": "66-archive-mcd", "67": "67-value-burgers", "68": "68-orlando-interior", "69": "69-kiosk", "70": "70-mcchicken", "71": "71-interstate44", "72": "72-midnight-lineup", "73": "73-needles-ca", "74": "74-calverton-md"};
const LENS: Record<number, number> = {"1": 9.33, "2": 13.03, "3": 14.0, "4": 14.0, "5": 14.0, "6": 14.0, "7": 14.0, "8": 14.0, "9": 9.83, "10": 11.07, "11": 14.0, "12": 10.9, "13": 5.37, "14": 9.67, "15": 14.0, "16": 12.53, "17": 14.0, "18": 14.0, "19": 14.0, "20": 6.6, "21": 14.0, "22": 10.7, "23": 14.0, "24": 11.2, "25": 11.87, "26": 14.0, "27": 11.63, "28": 14.0, "29": 9.87, "30": 13.13, "31": 14.0, "32": 7.27, "33": 10.27, "34": 14.0, "35": 14.0, "36": 7.2, "37": 14.0, "38": 13.2, "39": 14.0, "40": 14.0, "41": 12.53, "42": 14.0, "43": 12.1, "44": 9.07, "45": 14.0, "46": 13.07, "47": 3.87, "48": 14.0, "49": 13.07, "50": 14.0, "51": 14.0, "52": 14.0, "53": 10.2, "54": 8.6, "55": 10.13, "56": 14.0, "57": 14.0, "58": 14.0, "59": 14.0, "60": 14.0, "61": 14.0, "62": 14.0, "63": 14.0, "64": 14.0, "65": 14.0, "66": 14.0, "67": 14.0, "68": 14.0, "69": 14.0, "70": 14.0, "71": 14.0, "72": 14.0, "73": 14.0, "74": 14.0};
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/t08/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 });
setClips(CLIP_FN);

type Beat = { from: number; to: number; tag?: [number, string, boolean]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 6.54, back: null, el: (<>
<Drift><Center y={470}><MenuBoard at={0.05} w={1180} rh={140} title="MENU · HIGHWAY REST STOP" foot="AS PHOTOGRAPHED · CONNECTICUT · 2023" footAt={2.02} rows={[{ name: "Big Mac \u00b7 Fries \u00b7 Soft drink", price: "$17.59", hlAt: 2.02 }]} /></Center></Drift>
</>) },
  { from: 6.54, to: 12.04, back: (<><Stock6 n={60} dur={5.5} dim={0} graphics={true} />
<Stock6 n={59} from={4.16} dur={5.5} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.3} out={4.16} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={40} color={C6.ink}>A HIGHWAY REST STOP</Label6></Plate6></In></Center><Center x={960} y={880}><In at={4.16} from="fade"><Plate6 at={4.16}><Label6 at={4.16} size={40} color={C6.accent}>I-95 · CONNECTICUT</Label6></Plate6></In></Center><Source6 at={0.4}>Photos: K. C. Zirkel (service plaza, Mass.) · A. Moss (I-95, Conn.) · Wikimedia, CC BY-SA</Source6>
</>) },
  { from: 12.04, to: 14.38, back: null, el: (<>
<Evidence src="evidence/t08/mr-darien.png" size={[2880, 1800]} dur={2.34} frame="screen" marks={[{ x: 773, y: 733, w: 98, h: 40, at: 0.05 }]} zoom={0.9} inset={{ src: "evidence/t08/mr-darien-top.png", size: [2880, 1800] }} source="MARKET REALIST · VIRAL MENU PHOTO, DARIEN, CONN." url="marketrealist.com" />
</>) },
  { from: 14.38, to: 17.0, back: (<><Stock6 n={39} dur={2.62} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.05} text="the internet, 2023." y={900} size={76} />
</>) },
  { from: 17.0, to: 22.8, back: (<><Stock6 n={5} dur={5.8} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.6} from="fade"><Plate6 at={3.6}><Label6 at={3.6} size={34} color={C6.ink}>PRESIDENT, McDONALD'S USA · OPEN LETTER · MAY 2024</Label6></Plate6></In></Center>
</>) },
  { from: 22.8, to: 24.1, back: null, el: (<>
<Evidence src="evidence/t08/mcd-letter.png" size={[2880, 1800]} dur={1.3} frame="screen" marks={[{ x: 366, y: 594, w: 130, h: 32, at: 0.05 }]} zoom={0.9} inset={{ src: "evidence/t08/mcd-letter-top.png", size: [2880, 1800] }} source="McDONALD'S · OPEN LETTER · MAY 29, 2024 (WEB ARCHIVE)" url="web.archive.org" />
</>) },
  { from: 24.1, to: 34.98, back: null, el: (<>
<Evidence src="evidence/t08/mcd-myths.png" size={[1700, 2400]} dur={10.88} frame="paper" marks={[{ x: 700, y: 1132, w: 880, h: 46, at: 8.27 }]} source="McDONALD'S “U.S. PRICING: MYTHS VS. FACTS” · MAY 2024" />
</>) },
  { from: 34.98, to: 39.04, back: null, el: (<>
<Drift><Center y={500}><PriceDuel at={0.05} a={{ label: "McDonald's average · 2024", value: "$9.29", color: C6.money }} b={{ label: "One menu board · 2023", value: "$17.59", color: C6.loss, at: 2.06 }} /></Center></Drift>
</>) },
  { from: 39.04, to: 44.0, back: (<><Stock6 n={7} dur={4.96} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.86} from="fade"><Plate6 at={2.86}><Label6 at={2.86} size={36} color={C6.accent}>THE PRICE ON THE BOARD ISN'T SET BY McDONALD'S</Label6></Plate6></In></Center>
</>) },
  { from: 44.0, to: 51.2, back: null, el: (<>
<Evidence src="evidence/t08/mcd-letter-95.png" size={[2880, 1800]} dur={7.2} frame="screen" marks={[{ x: 2100, y: 594, w: 64, h: 32, at: 0.42 }]} zoom={0.9} inset={{ src: "evidence/t08/mcd-letter-top.png", size: [2880, 1800] }} source="McDONALD'S · OPEN LETTER · MAY 2024 (WEB ARCHIVE)" url="web.archive.org" />
</>) },
  { from: 51.2, to: 60.48, back: (<><Stock6 n={63} dur={9.28} dim={0} graphics={true} />
<Stock6 n={74} from={5.34} dur={9.28} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.3} out={5.34} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={36} color={C6.money}>5 MINUTES DOWN THE ROAD → OFTEN CHEAPER</Label6></Plate6></In></Center><Center x={960} y={880}><In at={5.34} out={6.94} from="fade"><Plate6 at={5.34}><Label6 at={5.34} size={44} color={C6.ink}>SAME BURGER</Label6></Plate6></In></Center><Center x={960} y={880}><In at={6.94} out={8.08} from="fade"><Plate6 at={6.94}><Label6 at={6.94} size={44} color={C6.ink}>SAME FRIES</Label6></Plate6></In></Center><Center x={960} y={880}><In at={8.08} from="fade"><Plate6 at={8.08}><Label6 at={8.08} size={50} color={C6.accent}>DIFFERENT BOARD</Label6></Plate6></In></Center><Source6 at={0.4}>Photos: JJBers · G. Edward Johnson · Wikimedia, CC BY</Source6>
</>) },
  { from: 60.48, to: 64.72, back: (<><Stock6 n={3} dur={4.24} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.44} from="fade"><Plate6 at={2.44}><Label6 at={2.44} size={44} color={C6.ink}>A HIGHWAY REST STOP</Label6></Plate6></In></Center>
</>) },
  { from: 64.72, to: 68.78, back: (<><Stock6 n={2} dur={4.06} dim={0} graphics={true} />
<Stock6 n={1} from={2.34} dur={4.06} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 68.78, to: 75.8, back: (<><Stock6 n={61} dur={7.02} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.38} from="fade"><Plate6 at={2.38}><Label6 at={2.38} size={36} color={C6.accent}>PRICED FOR A CUSTOMER WITH NO OTHER CHOICE?</Label6></Plate6></In></Center><Source6 at={0.4}>Photo: Andre Carrotflower · NY Thruway service area · Wikimedia, CC BY-SA</Source6>
</>) },
  { from: 75.8, to: 78.1, back: null, el: (<>
<Drift><Center y={480}><Checklist items={[{ text: "Same tray, different board: the next exit may be cheaper", at: 0.1 }]} /></Center></Drift>
</>) },
  { from: 78.1, to: 89.44, back: (<><Stock6 n={50} dur={11.34} dim={0} graphics={true} />
<Stock6 n={52} from={3.04} dur={11.34} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={7.32} from="fade"><Plate6 at={7.32}><Label6 at={7.32} size={44} color={C6.accent}>WHAT McDONALD'S DID NEXT</Label6></Plate6></In></Center>
</>) },
  { from: 89.44, to: 101.24, tag: [2, "Their Own Numbers", true], hard: true, back: null, el: (<>
<Drift><Center y={470}><MenuBoard at={0.05} w={1100} rh={120} title="McDONALD'S OWN FACT SHEET · AVERAGES" foot="+$2.00 · SAME TRAY" footAt={9.26} rows={[{ name: "Big Mac Meal \u00b7 2019", price: "$7.29", at: 4.84 }, { name: "Big Mac Meal \u00b7 2024", price: "$9.29", at: 7.6, hlAt: 9.26 }]} /></Center><Source6 at={0.4}>McDonald's “U.S. Pricing: Myths vs. Facts” · May 2024</Source6></Drift>
</>) },
  { from: 101.24, to: 113.18, tag: [2, "Their Own Numbers", false], back: null, el: (<>
<Evidence src="evidence/t08/mcd-myths.png" size={[1700, 2400]} dur={11.94} frame="paper" marks={[{ x: 108, y: 1122, w: 520, h: 86, at: 7.34 }, { x: 700, y: 1132, w: 880, h: 46, at: 11.28 }]} source="McDONALD'S “U.S. PRICING: MYTHS VS. FACTS” · MAY 2024" /><Center x={960} y={960}><In at={11.28} from="fade"><Plate6 at={11.28}><Label6 at={11.28} size={34} color={C6.accent}>MYTH: +104% · FACT (PER McDONALD'S): +27%</Label6></Plate6></In></Center>
</>) },
  { from: 113.18, to: 124.14, tag: [2, "Their Own Numbers", false], back: (<><Stock6 n={11} dur={10.96} dim={0.55} graphics={true} />
<Stock6 n={14} from={5.78} dur={10.96} dim={0.55} graphics={true} /></>), el: (<>
<Center y={430}><Words text="$2.29 → $3.29" at={3.7} size={150} hl={["$3.29"]} /></Center>
<Center y={600}><Label6 at={0.2} size={34} color={C6.mint}>MEDIUM FRIES · 2019 → 2024</Label6></Center>
<Center y={760}><Words text="+44%" at={9.12} size={150} color={C6.loss} hl={["+44%"]} /></Center><Source6 at={0.4}>McDonald's fact sheet via The Daily Meal</Source6>
</>) },
  { from: 124.14, to: 131.98, tag: [2, "Their Own Numbers", false], back: (<><Stock6 n={13} dur={7.84} dim={0} graphics={false} />
<Stock6 n={12} from={2.72} dur={7.84} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.05} text="premium potatoes." y={900} size={76} out={2.72} /><Center x={960} y={880}><In at={2.72} from="fade"><Plate6 at={2.72}><Label6 at={2.72} size={34} color={C6.accent}>THE CHEAPEST THING ON THE TRAY · THE BIGGEST % RAISE</Label6></Plate6></In></Center>
</>) },
  { from: 131.98, to: 139.6, tag: [2, "Their Own Numbers", false], back: null, el: (<>
<Drift><Center y={480}><MenuBoard at={0.05} w={1100} rh={104} title="AVERAGE MENU ITEM · 2019 → 2024: +40%" foot="McDONALD'S OWN AVERAGES · FACT SHEET, MAY 2024" footAt={0.4} rows={[{ name: "Big Mac", price: "$4.39", to: "$5.29", toAt: 4.66 }, { name: "Quarter Pounder w/ Cheese", price: "$4.49", to: "$5.39", toAt: 4.66 }, { name: "Egg McMuffin", price: "$3.49", to: "$4.29", toAt: 4.66 }, { name: "10 pc McNuggets Meal", price: "$7.19", to: "$9.19", toAt: 4.66 }]} /></Center></Drift>
</>) },
  { from: 139.6, to: 144.46, tag: [2, "Their Own Numbers", false], back: (<><Stock6 n={22} dur={4.86} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.62} from="fade"><Plate6 at={2.62}><Label6 at={2.62} size={44} color={C6.ink}>BEEF · WAGES · PAPER</Label6></Plate6></In></Center>
</>) },
  { from: 144.46, to: 148.0, tag: [2, "Their Own Numbers", false], back: (<><Stock6 n={20} dur={3.54} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 148.0, to: 156.94, tag: [2, "Their Own Numbers", false], back: null, el: (<>
<Evidence src="evidence/t08/reuters-profit.png" size={[2880, 1800]} dur={8.94} frame="screen" marks={[{ x: 656, y: 654, w: 184, h: 46, at: 3.16 }]} zoom={0.9} inset={{ src: "evidence/t08/reuters-profit-top.png", size: [2880, 1800] }} source="REUTERS VIA YAHOO FINANCE · MAY 2024" url="uk.finance.yahoo.com" />
</>) },
  { from: 156.94, to: 159.28, tag: [2, "Their Own Numbers", false], back: null, el: (<>
<Drift><Center y={480}><TwoBars at={0.05} a={{ label: "GROSS PROFIT · 2019", value: "$11.2B", v: 11.18 }} b={{ label: "2023", value: "$14.6B", v: 14.56, color: C6.money, at: 0.4 }} h={480} /></Center><Center x={960} y={960}><In at={0.6} from="fade"><Plate6 at={0.6}><Label6 at={0.6} size={50} color={C6.money}>+30%</Label6></Plate6></In></Center><Source6 at={0.4}>Reuters · McDonald's annual reports</Source6></Drift>
</>) },
  { from: 159.28, to: 164.26, tag: [2, "Their Own Numbers", false], back: (<><Stock6 n={16} dur={4.98} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.05} text="costs went up for everybody." y={900} size={70} out={2.74} /><Meme at={2.74} text="only one side ended up with more." y={900} size={70} />
</>) },
  { from: 164.26, to: 172.08, tag: [2, "Their Own Numbers", false], back: (<><Stock6 n={21} dur={7.82} dim={0} graphics={true} />
<Stock6 n={48} from={5.12} dur={7.82} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.94} out={5.12} from="fade"><Plate6 at={1.94}><Label6 at={1.94} size={44} color={C6.ink}>“ONLY” +27%</Label6></Plate6></In></Center><Center x={960} y={880}><In at={5.12} from="fade"><Plate6 at={5.12}><Label6 at={5.12} size={40} color={C6.accent}>SO WHY DOES IT FEEL LIKE A ROBBERY?</Label6></Plate6></In></Center>
</>) },
  { from: 172.08, to: 178.42, tag: [2, "Their Own Numbers", false], back: null, el: (<>
<Drift><Center y={480}><MenuBoard at={0.05} w={1000} rh={110} title="THE BOARD" rows={[{ name: "Big Mac", price: "$5.29" }, { name: "Medium Fries", price: "$3.29" }, { name: "??? ", price: "\u2014", goneAt: 3.94, hlAt: 2.92 }]} /></Center></Drift>
</>) },
  { from: 178.42, to: 180.48, tag: [3, "The Missing Meal", true], hard: true, back: (<><Stock6 n={66} dur={2.06} dim={0} graphics={true} sepia />
<ArchiveFx /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={44} color={C6.accent}>THE EXTRA VALUE MEAL</Label6></Plate6></In></Center><Source6 at={0.4}>Photo: David E. Lucas · public domain · Wikimedia</Source6>
</>) },
  { from: 180.48, to: 185.78, tag: [3, "The Missing Meal", false], back: (<><Stock6 n={67} dur={5.3} dim={0} graphics={true} />
<Stock6 n={65} from={2.86} dur={5.3} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.86} from="fade"><Plate6 at={2.86}><Label6 at={2.86} size={34} color={C6.ink}>SANDWICH + FRIES + DRINK · CHEAPER THAN ONE BY ONE</Label6></Plate6></In></Center>
</>) },
  { from: 185.78, to: 189.24, tag: [3, "The Missing Meal", false], back: (<><Stock6 n={8} dur={3.46} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.44} from="fade"><Plate6 at={1.44}><Label6 at={1.44} size={50} color={C6.accent}>THE MEAL WAS THE DISCOUNT</Label6></Plate6></In></Center>
</>) },
  { from: 189.24, to: 194.5, tag: [3, "The Missing Meal", false], back: null, el: (<>
<Evidence src="evidence/t08/cnn-2019.png" size={[2880, 1800]} dur={5.26} frame="screen" marks={[{ x: 2328, y: 1318, w: 240, h: 34, at: 1.98 }]} zoom={0.9} inset={{ src: "evidence/t08/cnn-2019-top.png", size: [2880, 1800] }} source="CNN VIA KVIA · SEPT 2025" url="kvia.com" />
</>) },
  { from: 194.5, to: 199.02, tag: [3, "The Missing Meal", false], back: null, el: (<>
<Drift><Center y={480}><MenuBoard at={0.05} w={1000} rh={110} title="THE BOARD · 2019" foot="ILLUSTRATION · 2019 AVERAGE PRICES" footAt={0.3} rows={[{ name: "Extra Value Meals", price: "#1\u2013#10", goneAt: 3.0, hlAt: 0.1 }, { name: "Big Mac", price: "$4.39" }, { name: "Medium Fries", price: "$2.29" }]} /></Center></Drift>
</>) },
  { from: 199.02, to: 204.66, tag: [3, "The Missing Meal", false], back: (<><Stock6 n={26} dur={5.64} dim={0} graphics={true} />
<Stock6 n={27} from={3.24} dur={5.64} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.24} from="fade"><Plate6 at={3.24}><Label6 at={3.24} size={36} color={C6.ink}>PANDEMIC → INFLATION → HIGHER BOARDS</Label6></Plate6></In></Center>
</>) },
  { from: 204.66, to: 210.1, tag: [3, "The Missing Meal", false], back: (<><Stock6 n={18} dur={5.44} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={32} color={C6.ink}>CEO CHRIS KEMPCZINSKI · INVESTOR CALL · AUG 2025</Label6></Plate6></In></Center>
</>) },
  { from: 210.1, to: 216.04, tag: [3, "The Missing Meal", false], back: null, el: (<>
<Evidence src="evidence/t08/ksl-tooften.png" size={[2880, 1800]} dur={5.94} frame="screen" marks={[{ x: 898, y: 600, w: 122, h: 34, at: 1.46 }]} zoom={0.9} inset={{ src: "evidence/t08/ksl-tooften-top.png", size: [2880, 1800] }} source="CNN VIA KSL · AUG 2025" url="ksl.com" />
</>) },
  { from: 216.04, to: 223.14, tag: [3, "The Missing Meal", false], back: (<><Stock6 n={64} dur={7.1} dim={0.72} graphics={true} /></>), el: (<>
<Center y={440}><Words text="“The single biggest driver … is the menu board.”" at={0.3} size={78} maxW={1500} hl={["menu", "board.”"]} /></Center><Center x={960} y={880}><In at={0.5} from="fade"><Plate6 at={0.5}><Label6 at={0.5} size={30} color={C6.mint}>McDONALD'S CEO · AUG 2025</Label6></Plate6></In></Center><Source6 at={0.6}>CNN · photo: dankeck, CC0</Source6>
</>) },
  { from: 223.14, to: 228.4, tag: [3, "The Missing Meal", false], back: null, el: (<>
<Drift><Center y={480}><MenuBoard at={0.05} w={1000} rh={110} title="RAISED FOR FIVE YEARS" rows={[{ name: "Big Mac", price: "$4.39", to: "$5.29", toAt: 0.4 }, { name: "Medium Fries", price: "$2.29", to: "$3.29", toAt: 0.9 }, { name: "10 pc McNuggets Meal", price: "$7.19", to: "$9.19", toAt: 1.4 }]} /></Center></Drift>
</>) },
  { from: 228.4, to: 232.6, tag: [3, "The Missing Meal", false], back: (<><Stock6 n={48} dur={4.2} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.44} from="fade"><Plate6 at={2.44}><Label6 at={2.44} size={38} color={C6.ink}>THE PEOPLE WHO COULD LEAST AFFORD IT</Label6></Plate6></In></Center>
</>) },
  { from: 232.6, to: 243.62, tag: [3, "The Missing Meal", false], back: null, el: (<>
<Evidence src="evidence/t08/nacs-lowincome.png" size={[2880, 1800]} dur={11.02} frame="screen" marks={[{ x: 840, y: 659, w: 388, h: 68, at: 7.6 }]} zoom={0.9} inset={{ src: "evidence/t08/nacs-lowincome-top.png", size: [2880, 1800] }} source="NACS DAILY · NOV 2025 · McDONALD'S Q3 CALL" url="convenience.org" />
</>) },
  { from: 243.62, to: 247.42, tag: [3, "The Missing Meal", false], back: null, el: (<>
<Drift><Center y={470}><Scissors at={0.05} highAt={0.05} /></Center></Drift>
</>) },
  { from: 247.42, to: 255.7, tag: [3, "The Missing Meal", false], back: (<><Stock6 n={29} dur={8.28} dim={0} graphics={true} />
<Stock6 n={32} from={4.24} dur={8.28} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.5} out={4.24} from="fade"><Plate6 at={1.5}><Label6 at={1.5} size={38} color={C6.ink}>LUNCH BETWEEN TWO JOBS</Label6></Plate6></In></Center><Center x={960} y={880}><In at={4.24} from="fade"><Plate6 at={4.24}><Label6 at={4.24} size={38} color={C6.ink}>SATURDAY WITH THE GRANDKIDS</Label6></Plate6></In></Center>
</>) },
  { from: 255.7, to: 259.98, tag: [3, "The Missing Meal", false], back: (<><Stock6 n={43} dur={4.28} dim={0} graphics={true} />
<Stock6 n={44} from={2.94} dur={4.28} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 259.98, to: 266.74, tag: [3, "The Missing Meal", false], back: null, el: (<>
<Evidence src="evidence/t08/fox-soami.png" size={[2880, 1800]} dur={6.76} frame="screen" marks={[{ x: 991, y: 599, w: 92, h: 32, at: 5.46 }]} zoom={0.9} inset={{ src: "evidence/t08/fox-soami-top.png", size: [2880, 1800] }} source="FOX NEWS · CUSTOMER POSTS (NAMES HIDDEN)" url="foxnews.com" />
</>) },
  { from: 266.74, to: 275.5, tag: [3, "The Missing Meal", false], back: (<><Stock6 n={1} dur={8.76} dim={0.4} graphics={true} /></>), el: (<>
<Subscribe6 at={1.96} /><Center x={960} y={880}><In at={2.36} from="fade"><Plate6 at={2.36}><Label6 at={2.36} size={36} color={C6.ink}>ONE BILL TAKEN APART EVERY WEEK</Label6></Plate6></In></Center>
</>) },
  { from: 275.5, to: 281.24, tag: [4, "The Phone", true], hard: true, back: (<><Stock6 n={35} dur={5.74} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.84} from="fade"><Plate6 at={3.84}><Label6 at={3.84} size={44} color={C6.accent}>THEY MOVED INTO YOUR PHONE</Label6></Plate6></In></Center>
</>) },
  { from: 281.24, to: 289.46, tag: [4, "The Phone", false], back: (<><Stock6 n={34} dur={8.22} dim={0} graphics={true} /></>), el: (<>
<Center x={700} y={880}><In at={3.72} from="fade"><Plate6 at={3.72}><Label6 at={3.72} size={46} color={C6.accent}>2-FOR-1</Label6></Plate6></In></Center><Center x={1220} y={880}><In at={4.62} from="fade"><Plate6 at={4.62}><Label6 at={4.62} size={46} color={C6.accent}>$1 OFF</Label6></Plate6></In></Center>
</>) },
  { from: 289.46, to: 292.76, tag: [4, "The Phone", false], back: null, el: (<>
<Evidence src="evidence/t08/tt-app.png" size={[2880, 1800]} dur={3.3} frame="screen" marks={[{ x: 1286, y: 825, w: 82, h: 50, at: 1.34 }]} zoom={0.9} inset={{ src: "evidence/t08/tt-app-top.png", size: [2880, 1800] }} source="TASTING TABLE · CUSTOMER COMPLAINTS ABOUT THE APP" url="tastingtable.com" />
</>) },
  { from: 292.76, to: 301.88, tag: [4, "The Phone", false], back: (<><Stock6 n={38} dur={9.12} dim={0} graphics={true} />
<Stock6 n={37} from={4.32} dur={9.12} dim={0} graphics={true} /></>), el: (<>
<Center x={520} y={300}><In at={4.32} from="fade"><Plate6 at={4.32}><Label6 at={4.32} size={38} color={C6.accent}>NAME</Label6></Plate6></In></Center><Center x={1400} y={430}><In at={5.58} from="fade"><Plate6 at={5.58}><Label6 at={5.58} size={38} color={C6.accent}>ORDERS</Label6></Plate6></In></Center><Center x={600} y={640}><In at={6.56} from="fade"><Plate6 at={6.56}><Label6 at={6.56} size={38} color={C6.accent}>8:12 AM · FRIDAYS</Label6></Plate6></In></Center><Center x={1300} y={780}><In at={7.76} from="fade"><Plate6 at={7.76}><Label6 at={7.76} size={38} color={C6.accent}>ALWAYS A BIG MAC</Label6></Plate6></In></Center>
</>) },
  { from: 301.88, to: 309.5, tag: [4, "The Phone", false], back: null, el: (<>
<Drift><Center y={440}><Counter6 to={150} at={3.8} dur={1.0} size={220} fmt={(v) => Math.round(v) + "M+"} /></Center>
<Center y={640}><Label6 at={3.8} size={34} color={C6.mint}>ACTIVE LOYALTY USERS · WORLDWIDE · END OF 2023</Label6></Center><Source6 at={3.8}>McDonald's Q4 2023 earnings call · Restaurant Dive</Source6></Drift>
</>) },
  { from: 309.5, to: 315.22, tag: [4, "The Phone", false], back: (<><Stock6 n={36} dur={5.72} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.16} from="fade"><Plate6 at={3.16}><Label6 at={3.16} size={34} color={C6.ink}>KNOWS WHAT YOU BUY → DECIDES WHAT TO OFFER YOU</Label6></Plate6></In></Center>
</>) },
  { from: 315.22, to: 322.26, tag: [4, "The Phone", false], back: null, el: (<>
<Evidence src="evidence/t08/nzh-app-top.png" size={[2880, 1800]} dur={7.04} frame="screen" zoom={0.9} source="NZ HERALD · AUG 2023" url="nzherald.co.nz" /><Center x={960} y={960}><In at={4.16} from="fade"><Plate6 at={4.16}><Label6 at={4.16} size={34} color={C6.accent}>SAME DEALS · DIFFERENT PRICES ON DIFFERENT PHONES</Label6></Plate6></In></Center>
</>) },
  { from: 322.26, to: 328.22, tag: [4, "The Phone", false], back: null, el: (<>
<Evidence src="evidence/t08/newshub-app.png" size={[2880, 1800]} dur={5.96} frame="screen" marks={[{ x: 812, y: 667, w: 232, h: 46, at: 1.92 }]} zoom={0.9} inset={{ src: "evidence/t08/newshub-app-top.png", size: [2880, 1800] }} source="NEWSHUB · NEW ZEALAND · AUG 2023" url="newshub.co.nz" />
</>) },
  { from: 328.22, to: 336.66, tag: [4, "The Phone", false], back: (<><Stock6 n={35} dur={8.44} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={4.46} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={44} color={C6.ink}>U.S.: NOT PROVEN</Label6></Plate6></In></Center><Center x={960} y={880}><In at={4.46} from="fade"><Plate6 at={4.46}><Label6 at={4.46} size={36} color={C6.accent}>USER REPORTS: APP AND BOARD DON'T MATCH</Label6></Plate6></In></Center>
</>) },
  { from: 336.66, to: 341.42, tag: [4, "The Phone", false], back: (<><Stock6 n={34} dur={4.76} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.92} from="fade"><Plate6 at={2.92}><Label6 at={2.92} size={36} color={C6.ink}>THE BEST APP DEALS DRIED UP · USER REPORTS</Label6></Plate6></In></Center>
</>) },
  { from: 341.42, to: 349.32, tag: [4, "The Phone", false], back: null, el: (<>
<Drift><Center y={480}><TwoLocks aAt={3.06} bAt={4.22} /></Center></Drift>
</>) },
  { from: 349.32, to: 358.7, tag: [5, "The Trick", true], hard: true, back: null, el: (<>
<Evidence src="evidence/t08/fortune-combo-top.png" size={[2880, 1800]} dur={9.38} frame="screen" zoom={0.9} source="FORTUNE · AUG 2025" url="fortune.com" /><Center x={960} y={960}><In at={6.74} from="fade"><Plate6 at={6.74}><Label6 at={6.74} size={38} color={C6.accent}>THE BEST TRICK IN THIS STORY</Label6></Plate6></In></Center>
</>) },
  { from: 358.7, to: 362.94, tag: [5, "The Trick", false], back: (<><Stock6 n={69} dur={4.24} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.08} from="fade"><Plate6 at={3.08}><Label6 at={3.08} size={40} color={C6.accent}>SEPT 2025 · EXTRA VALUE MEALS ARE BACK</Label6></Plate6></In></Center><Source6 at={0.4}>Photo: EvanTech10 · Wikimedia, CC BY-SA 4.0</Source6>
</>) },
  { from: 362.94, to: 369.26, tag: [5, "The Trick", false], back: null, el: (<>
<Evidence src="evidence/t08/mcd-evm.png" size={[2880, 1800]} dur={6.32} frame="screen" marks={[{ x: 1820, y: 595, w: 148, h: 32, at: 1.88 }]} zoom={0.9} inset={{ src: "evidence/t08/mcd-evm-top.png", size: [2880, 1800] }} source="McDONALD'S PRESS RELEASE · SEPT 2, 2025 (WEB ARCHIVE)" url="web.archive.org" />
</>) },
  { from: 369.26, to: 372.9, tag: [5, "The Trick", false], back: null, el: (<>
<Drift><Center y={480}><MenuBoard at={0.05} w={1100} rh={120} title="THE BOARD · SEPT 2025" foot="PRICES VARY BY LOCATION" footAt={2.36} rows={[{ name: "Extra Value Meals", price: "\u221215%", at: 0.1, hlAt: 0.1 }, { name: "Big Mac Meal", price: "$8.00", at: 0.96, tag: "LIMITED TIME", tagAt: 2.36 }]} /></Center></Drift>
</>) },
  { from: 372.9, to: 378.7, tag: [5, "The Trick", false], back: null, el: (<>
<Evidence src="evidence/t08/aol-wsj.png" size={[2880, 1800]} dur={5.8} frame="screen" marks={[{ x: 757, y: 668, w: 86, h: 38, at: 2.46 }]} zoom={0.9} inset={{ src: "evidence/t08/aol-wsj-top.png", size: [2880, 1800] }} source="WSJ VIA DELISH / AOL · AUG 2025" url="aol.com" />
</>) },
  { from: 378.7, to: 382.62, tag: [5, "The Trick", false], back: (<><Stock6 n={40} dur={3.92} dim={0} graphics={false} /></>), el: (<>
<Meme at={3.08} text="“set by the market.”" y={900} size={76} />
</>) },
  { from: 382.62, to: 386.34, tag: [5, "The Trick", false], back: null, el: (<>
<Evidence src="evidence/t08/foxb-evm-top.png" size={[2880, 1800]} dur={3.72} frame="screen" zoom={0.9} source="FOX BUSINESS · SEPT 2025" url="foxbusiness.com" />
</>) },
  { from: 386.34, to: 387.64, tag: [5, "The Trick", false], back: (<><Stock6 n={65} dur={1.3} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.05} text="sounds great." y={900} size={80} />
</>) },
  { from: 387.64, to: 390.64, tag: [5, "The Trick", false], back: (<><Stock6 n={41} dur={3.0} dim={0} graphics={false} /></>), el: (<>
<Meme at={1.74} text="15% off… of what?" y={900} size={80} />
</>) },
  { from: 390.64, to: 398.9, tag: [5, "The Trick", false], back: null, el: (<>
<Drift><Center y={470}><Words text="−15% off prices that rose +40%" at={0.1} size={110} maxW={1500} hl={["−15%", "+40%"]} /></Center><Center x={960} y={880}><In at={3.04} from="fade"><Plate6 at={3.04}><Label6 at={3.04} size={36} color={C6.ink}>THE SAME PRICES THAT CLIMBED AFTER 2019</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 398.9, to: 413.28, tag: [5, "The Trick", false], back: null, el: (<>
<Drift><Center y={470}><CalcSteps steps={[{ value: "$1.00", at: 4.88 }, { op: "+40%", value: "$1.40", at: 7.19 }, { op: "−15% “SAVINGS”", value: "$1.19", at: 12.58, final: true }]} note="ILLUSTRATION USING McDONALD'S OWN AVERAGES" noteAt={0.3} /></Center></Drift>
</>) },
  { from: 413.28, to: 423.76, tag: [5, "The Trick", false], back: null, el: (<>
<Drift><Center y={440}><Words text="≈ +19%" at={3.34} size={240} hl={["+19%"]} /></Center>
<Center y={650}><Label6 at={3.34} size={32} color={C6.mint}>VS. 2019 SEPARATE-ITEM PRICES · USING THEIR OWN AVERAGES</Label6></Center></Drift>
</>) },
  { from: 423.76, to: 429.42, tag: [5, "The Trick", false], back: null, el: (<>
<Evidence src="evidence/t08/nbc-vary.png" size={[2880, 1800]} dur={5.66} frame="screen" marks={[{ x: 418, y: 708, w: 236, h: 40, at: 3.7 }]} zoom={0.9} inset={{ src: "evidence/t08/nbc-vary-top.png", size: [2880, 1800] }} source="NBC10 PHILADELPHIA / AP · SEPT 2025" url="nbcphiladelphia.com" /><Center x={960} y={960}><In at={2.42} from="fade"><Plate6 at={2.42}><Label6 at={2.42} size={38} color={C6.accent}>LIMITED-TIME OFFER</Label6></Plate6></In></Center>
</>) },
  { from: 429.42, to: 438.76, tag: [5, "The Trick", false], back: null, el: (<>
<Drift><Center y={470}><ThreeMoves steps={[{ word: "RAISE", sub: "the board", at: 1.5 }, { word: "REMOVE", sub: "the discount", at: 2.74 }, { word: "RESELL", sub: "the discount", at: 4.52 }]} /></Center><Center x={960} y={880}><In at={7.72} from="fade"><Plate6 at={7.72}><Label6 at={7.72} size={40} color={C6.accent}>…AND CALL IT VALUE</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 438.76, to: 449.52, tag: [6, "Your Move", true], hard: true, back: null, el: (<>
<Evidence src="evidence/t08/ap-sales2.png" size={[2880, 1800]} dur={10.76} frame="screen" marks={[{ x: 2064, y: 603, w: 122, h: 44, at: 6.66 }]} zoom={0.9} source="AP VIA NEWS4JAX · NOV 4, 2026" url="news4jax.com" />
</>) },
  { from: 449.52, to: 454.2, tag: [6, "Your Move", false], back: (<><Stock6 n={25} dur={4.68} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.1} from="fade"><Plate6 at={2.1}><Label6 at={2.1} size={40} color={C6.ink}>U.S. FAST-FOOD VISITS · Q3 2026: −2.6%</Label6></Plate6></In></Center><Source6 at={2.1}>AP · Revenue Management Solutions</Source6>
</>) },
  { from: 454.2, to: 464.0, tag: [6, "Your Move", false], back: null, el: (<>
<Drift><Center y={420}><Words text="+9%" at={3.1} size={150} color={C6.money} hl={["+9%"]} /></Center>
<Center y={620}><Counter6 to={2.49} at={4.46} dur={0.9} size={180} color={C6.money} fmt={(v) => "$" + v.toFixed(2) + "B"} /></Center>
<Center y={800}><Label6 at={7.58} size={34} color={C6.mint}>NET INCOME · WORLDWIDE · ONE QUARTER</Label6></Center><Source6 at={0.3}>McDonald's Q3 2026 results via AP</Source6></Drift>
</>) },
  { from: 464.0, to: 472.9, tag: [6, "Your Move", false], back: (<><Stock6 n={24} dur={8.9} dim={0} graphics={true} />
<Stock6 n={47} from={5.66} dur={8.9} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.74} out={5.66} from="fade"><Plate6 at={2.74}><Label6 at={2.74} size={40} color={C6.ink}>“$3 & UNDER” MENU · SPRING 2026</Label6></Plate6></In></Center><Center x={960} y={880}><In at={7.64} from="fade"><Plate6 at={7.64}><Label6 at={7.64} size={40} color={C6.accent}>CFO: IT DIDN'T CATCH ON</Label6></Plate6></In></Center>
</>) },
  { from: 472.9, to: 483.5, tag: [6, "Your Move", false], back: (<><Stock6 n={70} dur={10.6} dim={0} graphics={true} />
<Stock6 n={55} from={7.26} dur={10.6} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.18} out={4.3} from="fade"><Plate6 at={2.18}><Label6 at={2.18} size={40} color={C6.ink}>TEST · ~1,900 RESTAURANTS</Label6></Plate6></In></Center><Center x={960} y={880}><In at={6.16} out={7.26} from="fade"><Plate6 at={6.16}><Label6 at={6.16} size={36} color={C6.accent}>McCHICKEN + SMALL FRIES · $3.50 · TEST EXAMPLE</Label6></Plate6></In></Center><Center x={960} y={880}><In at={7.26} from="fade"><Plate6 at={7.26}><Label6 at={7.26} size={40} color={C6.ink}>NATIONAL VERSION · EARLY 2027</Label6></Plate6></In></Center><Source6 at={0.4}>Restaurant Dive · AP · photo: Evan-Amos, public domain</Source6>
</>) },
  { from: 483.5, to: 488.76, tag: [6, "Your Move", false], back: null, el: (<>
<Drift><Center y={470}><NameCarousel names={[{ text: "$5 Meal Deal", year: "2024", at: 0.3 }, { text: "McValue", year: "2025", at: 0.9 }, { text: "Extra Value Meals", year: "back · 2025", at: 1.5 }, { text: "$3 & Under", year: "2026", at: 2.1 }, { text: "?", year: "2027", at: 2.7 }]} /></Center></Drift>
</>) },
  { from: 488.76, to: 493.58, tag: [6, "Your Move", false], back: (<><Stock6 n={66} dur={4.82} dim={0} graphics={true} sepia />
<ArchiveFx /></>), el: (<>
<Center x={960} y={880}><In at={2.84} from="fade"><Plate6 at={2.84}><Label6 at={2.84} size={36} color={C6.ink}>THE CHEAP MEAL THEY TOOK OFF THE BOARD</Label6></Plate6></In></Center>
</>) },
  { from: 493.58, to: 497.48, tag: [6, "Your Move", false], back: (<><Stock6 n={71} dur={3.9} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.86} from="fade"><Plate6 at={1.86}><Label6 at={1.86} size={50} color={C6.accent}>THE BOARD IS THE OPENING BID</Label6></Plate6></In></Center><Source6 at={0.4}>Photo: TheWhitePelican · Wikimedia, CC BY 3.0</Source6>
</>) },
  { from: 497.48, to: 508.78, tag: [6, "Your Move", false], back: null, el: (<>
<Drift><Center y={480}><Checklist items={[{ text: "The combo on the board", at: 2.48 }, { text: "The three items, added up", at: 3.94 }, { text: "The deal in the app", at: 5.66 }, { text: "Take the lowest · ask for the value meal by name", at: 7.32 }]} /></Center></Drift>
</>) },
  { from: 508.78, to: 514.66, tag: [6, "Your Move", false], back: (<><Stock6 n={51} dur={5.88} dim={0} graphics={true} />
<Stock6 n={73} from={3.62} dur={5.88} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.9} from="fade"><Plate6 at={4.9}><Label6 at={4.9} size={40} color={C6.money}>THE NEXT EXIT MIGHT NOT BE</Label6></Plate6></In></Center><Source6 at={3.62}>Photo: G. Edward Johnson · Wikimedia, CC BY 4.0</Source6>
</>) },
  { from: 514.66, to: 524.68, tag: [6, "Your Move", false], back: null, el: (<>
<Drift><Center y={430}><PriceDuel at={0.05} a={{ label: "never the normal price", value: "$17.59", color: C6.loss }} b={{ label: "wasn't a gift either", value: "$9.29", color: C6.accent, at: 3.8 }} /></Center><Center x={960} y={900}><In at={6.54} from="fade"><Plate6 at={6.54}><Label6 at={6.54} size={40} color={C6.accent}>THEY SAW YOU COMING · NOW YOU SEE THEM COMING</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 524.68, to: 537.7, back: (<><Stock6 n={72} dur={13.02} dim={0.55} graphics={true} /></>), el: (<>
<EndCard6 at={0.3} next="The Menu Said $14. The Bill Said $31." /><Center x={960} y={180}><In at={0.4} from="fade"><Plate6 at={0.4}><Label6 at={0.4} size={36} color={C6.accent}>WHAT DOES A BIG MAC MEAL COST WHERE YOU LIVE?</Label6></Plate6></In></Center>
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string, number][] = [[0.05, "ep06-counter", 0.3], [2.02, "impact", 0.3], [10.7, "ep06-whoosh", 0.2], [12.14, "t02-paper", 0.3], [14.43, "ep06-scratch", 0.25], [20.6, "ep06-pop", 0.22], [22.85, "t02-paper", 0.3], [24.15, "t02-paper", 0.3], [32.37, "impact", 0.3], [35.03, "ep06-pop", 0.25], [37.04, "ep06-pop", 0.25], [41.9, "ep06-stamp", 0.25], [44.05, "t02-paper", 0.3], [44.42, "ep06-counter", 0.3], [56.54, "ep06-pop", 0.22], [58.14, "ep06-pop", 0.22], [59.28, "ep06-stamp", 0.25], [62.92, "ep06-whoosh", 0.2], [74.14, "ep06-stamp", 0.25], [75.9, "ding", 0.3], [85.42, "rise", 0.25], [89.49, "ep06-whoosh", 0.2], [94.28, "ep06-counter", 0.3], [97.04, "ep06-counter", 0.3], [101.29, "t02-paper", 0.3], [112.52, "ep06-stamp", 0.3], [116.88, "ep06-counter", 0.3], [118.96, "ep06-counter", 0.3], [122.3, "impact", 0.3], [124.24, "sparkle", 0.25], [137.04, "ep06-counter", 0.3], [142.22, "ep06-pop", 0.22], [142.88, "ep06-pop", 0.22], [143.66, "ep06-pop", 0.22], [148.05, "t02-paper", 0.3], [155.3, "ep06-kaching", 0.3], [156.99, "impact", 0.3], [162.02, "ep06-coin", 0.25], [166.2, "ep06-pop", 0.22], [176.02, "ep06-fall", 0.25], [178.47, "ep06-whoosh", 0.2], [183.34, "ep06-pop", 0.22], [187.22, "ep06-stamp", 0.25], [189.29, "t02-paper", 0.3], [197.5, "ep06-fall", 0.25], [199.22, "scribble", 0.25], [204.96, "ep06-pop", 0.22], [210.15, "t02-paper", 0.3], [214.04, "impact", 0.25], [220.38, "ep06-stamp", 0.25], [223.44, "ep06-counter", 0.3], [232.65, "t02-paper", 0.3], [240.2, "ep06-fall", 0.25], [243.72, "rise", 0.25], [258.64, "ep06-whoosh", 0.2], [260.03, "t02-paper", 0.3], [265.44, "ep06-stamp", 0.25], [268.7, "ding", 0.25], [279.34, "ep06-whoosh", 0.2], [284.96, "ep06-pop", 0.22], [285.86, "ep06-pop", 0.22], [289.51, "t02-paper", 0.3], [297.08, "ep06-pop", 0.2], [298.34, "ep06-pop", 0.2], [299.32, "ep06-pop", 0.2], [300.52, "ep06-pop", 0.2], [305.68, "ep06-counter", 0.3], [312.66, "ep06-pop", 0.22], [315.27, "t02-paper", 0.3], [322.31, "t02-paper", 0.3], [324.18, "ep06-pop", 0.25], [339.58, "ep06-fall", 0.22], [344.48, "click", 0.35], [345.64, "click", 0.35], [349.37, "t02-paper", 0.3], [356.06, "rise", 0.25], [361.78, "ep06-kaching", 0.25], [362.99, "t02-paper", 0.3], [364.82, "ep06-pop", 0.25], [370.22, "ep06-kaching", 0.25], [372.95, "t02-paper", 0.3], [381.78, "ep06-scratch", 0.25], [382.67, "t02-paper", 0.3], [386.39, "ding", 0.25], [389.38, "ep06-stamp", 0.25], [393.68, "ep06-pop", 0.25], [403.78, "ep06-counter", 0.25], [406.09, "ep06-counter", 0.25], [411.48, "impact", 0.3], [416.62, "impact", 0.3], [423.81, "t02-paper", 0.3], [427.46, "ep06-pop", 0.25], [430.92, "ep06-stamp", 0.25], [432.16, "ep06-stamp", 0.25], [433.94, "ep06-kaching", 0.3], [438.81, "t02-paper", 0.3], [445.42, "ep06-fall", 0.25], [451.62, "ep06-fall", 0.25], [458.66, "ep06-counter", 0.3], [461.78, "ep06-kaching", 0.3], [466.74, "ep06-pop", 0.22], [471.64, "buzz", 0.22], [475.08, "ep06-counter", 0.25], [479.06, "ep06-pop", 0.22], [483.8, "click", 0.3], [484.4, "click", 0.3], [485.0, "click", 0.3], [485.6, "click", 0.3], [486.2, "ep06-pop", 0.25], [495.44, "ep06-stamp", 0.25], [499.96, "ding", 0.25], [501.42, "ding", 0.25], [503.14, "ding", 0.25], [504.8, "ep06-kaching", 0.25], [507.38, "ding", 0.25], [512.4, "ep06-whoosh", 0.2], [514.71, "ep06-pop", 0.25], [518.46, "ep06-pop", 0.25], [521.2, "impact", 0.3], [524.98, "ep06-whoosh", 0.2]];

export const T08Menu: React.FC = () => {
  const { fps } = useVideoConfig();
  setClips(CLIP_FN); // свой набор стоков при каждом рендере: в общем Root последним грузится чужой ролик
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/t08-voiceover.mp3")} volume={0.9} />
      <Sequence from={0} durationInFrames={2701}><Audio src={staticFile("audio/t08/shady-guise.mp3")} volume={(f) => 0.07 * interpolate(f, [0, 30, 2671, 2701], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={2665} durationInFrames={2705}><Audio src={staticFile("audio/t08/dollar-signs.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 2675, 2705], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={5335} durationInFrames={2948}><Audio src={staticFile("audio/t08/night-falls.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 2918, 2948], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={8247} durationInFrames={2251}><Audio src={staticFile("audio/t08/system-corruption.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 2221, 2251], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={10462} durationInFrames={2719}><Audio src={staticFile("audio/t08/fact-or-friction.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 2689, 2719], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={13145} durationInFrames={2986}><Audio src={staticFile("audio/t08/free-advice.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 2956, 2986], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
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
