import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Bg6, Bug6, C6, Center, ChapterTag, Col, Counter6, EndCard6, In, Label6, Meme, PriceSign, RocketFeather, Row, Scene6, setClips, Source6, Stamp, Stock6, Subscribe6, Plate6, Words } from "../brand/hm6";
import { PumpLCD, BankPush, Balance, MoneyTrail, CashCredit, SalesVsProfit, StoreMap, GradeButtons, GapLadder, WholesaleRetail, AlgoHub, SpiralWarn, JarVsTower, Checklist, CardGap, Tag7 } from "../brand/t07";
import { Drift } from "../brand/t03";
import { Evidence, ArchiveFx } from "../brand/evidence";

// ===================================================================
// T07Gas — сгенерировано cloud/gen/build.py из плана cloud/gen/t07.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const T07GAS_DURATION_SEC = 519.18;
const CLIPS: Record<number, string> = {"1": "01-pump-display", "2": "02-pump-rise", "3": "03-fill-car", "4": "04-refill-person", "5": "05-nozzle", "6": "06-pumps-self", "7": "07-pump-close", "8": "08-man-refuel", "9": "09-station-night", "10": "10-station-day", "11": "11-neon-station", "12": "12-shell-night", "13": "13-night-drone", "14": "14-aerial-urban", "15": "15-aerial-flag", "16": "16-price-sign", "17": "17-drive-by", "18": "18-open-sign", "19": "19-storefront-night", "20": "20-vending-night", "21": "21-card-phone", "22": "22-phone-card-top", "23": "23-worried-card", "24": "24-crying-card", "25": "25-worried-couple", "26": "26-couple-bills", "27": "27-card-reader", "28": "28-tap-card", "29": "29-empty-wallet", "30": "30-hourglass", "31": "31-coins-jar", "32": "32-pennies", "33": "33-store-aisle", "34": "34-snack-aisle", "35": "35-cashier", "36": "36-buying-drinks", "37": "37-beer-shelf", "38": "38-cola-pour", "39": "39-hotdog-grill", "40": "40-hotdog-hold", "41": "41-coffee-take", "42": "42-fuel-gauge", "43": "43-dashboard", "44": "44-engine-open", "45": "45-mechanic-binder", "46": "46-refinery", "47": "47-pumpjacks", "48": "48-rocket", "49": "49-feather", "50": "50-chart-dark", "51": "51-street-phones", "52": "52-sacramento", "53": "53-ca-highway", "54": "54-network", "55": "55-server", "56": "56-courthouse", "57": "57-lawyer-doc", "58": "58-shocked-screen", "59": "59-shocked-glasses", "60": "60-facepalm", "61": "61-thumbs-up", "62": "62-calculator", "63": "63-highway-sunset", "64": "64-drive-night", "65": "65-cars-lined", "66": "66-vintage-station", "67": "67-old-pump", "68": "68-busy-station", "69": "69-archive-minneapolis-1937", "70": "70-archive-carrier-mills-1939", "71": "71-archive-minot-1930", "72": "72-archive-sinclair-1935"};
const LENS: Record<number, number> = {"1": 2.53, "2": 13.33, "3": 14.0, "4": 7.13, "5": 8.73, "6": 4.33, "7": 14.0, "8": 14.0, "9": 13.83, "10": 12.13, "11": 14.0, "12": 6.5, "13": 11.2, "14": 13.97, "15": 10.0, "16": 14.0, "17": 3.33, "18": 14.0, "19": 14.0, "20": 14.0, "21": 14.0, "22": 11.83, "23": 14.0, "24": 12.63, "25": 14.0, "26": 14.0, "27": 11.63, "28": 6.8, "29": 14.0, "30": 10.37, "31": 8.53, "32": 11.73, "33": 3.8, "34": 4.3, "35": 14.0, "36": 14.0, "37": 12.5, "38": 8.47, "39": 8.63, "40": 10.5, "41": 7.2, "42": 14.0, "43": 7.4, "44": 14.0, "45": 14.0, "46": 14.0, "47": 14.0, "48": 14.0, "49": 5.47, "50": 14.0, "51": 14.0, "52": 14.0, "53": 11.07, "54": 10.0, "55": 14.0, "56": 12.37, "57": 10.27, "58": 14.0, "59": 14.0, "60": 8.57, "61": 7.27, "62": 14.0, "63": 14.0, "64": 9.33, "65": 8.87, "66": 9.77, "67": 13.67, "68": 14.0, "69": 14.0, "70": 14.0, "71": 14.0, "72": 14.0};
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/t07/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 });
setClips(CLIP_FN);

type Beat = { from: number; to: number; tag?: [number, string, boolean]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 6.28, back: (<><Stock6 n={3} dur={6.28} dim={0.55} graphics={true} /></>), el: (<>
<Center x={560} y={520}><PumpLCD at={0.05} dur={1.6} w={600} /></Center>
<Center x={1380} y={500}><BankPush at={2.78} w={680} /></Center>
</>) },
  { from: 6.28, to: 9.36, back: (<><Stock6 n={23} dur={3.08} dim={0.3} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.9} from="fade"><Plate6 at={1.9}><Label6 at={1.9} size={50} color={C6.accent}>NOT FRAUD. A HOLD.</Label6></Plate6></In></Center>
</>) },
  { from: 9.36, to: 16.22, back: (<><Stock6 n={8} dur={6.86} dim={0} graphics={true} />
<Stock6 n={7} from={3.46} dur={6.86} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.3} out={3.46} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={36} color={C6.ink}>THE PUMP DOESN'T KNOW HOW MUCH YOU'LL BUY</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.46} from="fade"><Plate6 at={3.46}><Label6 at={3.46} size={36} color={C6.accent}>SO IT BLOCKS THE BIGGEST POSSIBLE FILL-UP</Label6></Plate6></In></Center>
</>) },
  { from: 16.22, to: 21.68, back: (<><Stock6 n={28} dur={5.46} dim={0.6} graphics={true} /></>), el: (<>
<Center y={430}><Words text="$125 → $175" at={0.1} size={170} hl={["$175"]} /></Center>
<Center y={600}><Label6 at={0.2} size={34} color={C6.mint}>VISA & MASTERCARD · PAY-AT-PUMP HOLD LIMIT · 2022</Label6></Center><Source6 at={0.3}>NACS · The Drive</Source6>
</>) },
  { from: 21.68, to: 24.0, back: (<><Stock6 n={21} dur={2.32} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.ink}>ON A CREDIT CARD: ANNOYING</Label6></Plate6></In></Center>
</>) },
  { from: 24.0, to: 32.0, back: null, el: (<>
<Drift><Center y={480}><Balance at={0.1} hitAt={2.76} /></Center>
<Center y={1010}><Tag7 at={0.2}>EXAMPLE</Tag7></Center><Center x={960} y={900}><In at={5.14} from="fade"><Plate6 at={5.14}><Label6 at={5.14} size={34} color={C6.accent}>THE HOLD ALONE CAN TRIGGER AN OVERDRAFT FEE</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 32.0, to: 36.34, back: (<><Stock6 n={30} dur={4.34} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={2.38} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.ink}>USUALLY: A COUPLE OF HOURS</Label6></Plate6></In></Center><Center x={960} y={880}><In at={2.38} from="fade"><Plate6 at={2.38}><Label6 at={2.38} size={44} color={C6.accent}>SOME BANKS: UP TO 3 DAYS</Label6></Plate6></In></Center><Source6 at={0.3}>Visa & Mastercard via Business Insider · Mental Floss</Source6>
</>) },
  { from: 36.34, to: 45.2, back: (<><Stock6 n={9} dur={8.86} dim={0} graphics={true} />
<Stock6 n={11} from={4.84} dur={8.86} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.84} from="fade"><Plate6 at={4.84}><Label6 at={4.84} size={40} color={C6.ink}>45% OF DRIVERS GUESS: $2+ A GALLON</Label6></Plate6></In></Center><Source6 at={4.84}>NACS consumer survey</Source6>
</>) },
  { from: 45.2, to: 54.18, back: null, el: (<>
<Evidence src="evidence/t07/nacs-margin.png" size={[2880, 1800]} dur={8.98} frame="screen" marks={[{ x: 1094, y: 693, w: 328, h: 38, at: 5.68 }]} zoom={0.7} inset={{ src: "evidence/t07/nacs-margin-top.png", size: [2880, 1800] }} source="NACS · “WHO MAKES MONEY SELLING GAS?” · 2025" url="convenience.org" />
</>) },
  { from: 54.18, to: 61.16, back: null, el: (<>
<Drift><Center x={560} y={520}><PumpLCD at={-1} w={560} /></Center>
<Center x={1380} y={430}><Words text="≈ $1.50" at={1.48} size={160} hl={["$1.50"]} /></Center>
<Center x={1380} y={570}><Label6 at={1.48} size={30} color={C6.mint}>WHAT THE STATION MAKES ON THIS FILL-UP</Label6></Center>
<Center x={1380} y={700}><Label6 at={3.82} size={40} color={C6.accent}>SO WHO'S MAKING THE MONEY?</Label6></Center><Source6 at={1.48}>our calculation: 12 gal × 10–15¢</Source6></Drift>
</>) },
  { from: 61.16, to: 64.94, back: null, el: (<>
<Drift><Center x={960} y={540}><MoneyTrail at={0.05} w={760} pockets={[{ label: "Card price on the sign", value: "+5–20¢", color: C6.loss }, { label: "Bank swipe fees", value: "6–10¢", color: C6.loss }, { label: "That 9/10 of a cent", value: "0.9¢", color: C6.loss }, { label: "The store: food & drinks", value: "38.9%", color: C6.money }, { label: "Premium you don't need", value: "≈ +90¢", color: C6.loss }, { label: "Slow on the way down", value: "3–4× slower", color: C6.loss }, { label: "Pricing software (alleged)", value: "≈6–30¢", color: C6.accent }]} /></Center></Drift>
</>) },
  { from: 64.94, to: 68.94, tag: [1, "The Sign", true], hard: true, back: (<><Stock6 n={65} dur={4.0} dim={0} graphics={true} />
<Stock6 n={12} from={2.62} dur={4.0} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 68.94, to: 74.0, tag: [1, "The Sign", false], back: null, el: (<>
<Drift><Center y={430}><PriceSign at={0.05} price="3.99" label="REGULAR" scale={1.3} /></Center>
<Center y={800}><Stamp at={4.3} text="CASH" size={90} color={C6.accent} rotate={-4} /></Center></Drift>
</>) },
  { from: 74.0, to: 79.68, tag: [1, "The Sign", false], back: null, el: (<>
<Drift><Center y={440}><CashCredit at={0.05} creditAt={0.2} scale={0.85} /></Center><Center x={960} y={900}><In at={3.96} from="fade"><Plate6 at={3.96}><Label6 at={3.96} size={40} color={C6.accent}>MOST PEOPLE PAY WITH A CARD</Label6></Plate6></In></Center><Source6 at={3.96}>CBS Baltimore · NACS: 75% of c-store transactions are cards</Source6></Drift>
</>) },
  { from: 79.68, to: 83.38, tag: [1, "The Sign", false], back: (<><Stock6 n={63} dur={3.7} dim={0.5} graphics={true} /></>), el: (<>
<Center y={460}><Words text="“bait and switch”" at={2.6} size={130} hl={["switch”"]} /></Center><Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={30} color={C6.mint}>MARYLAND STATE SENATOR CHERYL KAGAN · ON CASH-ONLY SIGNS</Label6></Plate6></In></Center><Source6 at={2.6}>CBS News Baltimore</Source6>
</>) },
  { from: 83.38, to: 90.8, tag: [1, "The Sign", false], back: null, el: (<>
<Drift><Center y={440}><CashCredit at={0.05} same sameAt={5.9} scale={0.85} /></Center><Center x={960} y={910}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={34} color={C6.accent}>MARYLAND · SINCE OCT 1, 2024 · SAME-SIZE NUMBERS</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 90.8, to: 93.26, tag: [1, "The Sign", false], back: (<><Stock6 n={15} dur={2.46} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.68} from="fade"><Plate6 at={1.68}><Label6 at={1.68} size={44} color={C6.ink}>FLORIDA</Label6></Plate6></In></Center>
</>) },
  { from: 93.26, to: 100.98, tag: [1, "The Sign", false], back: null, el: (<>
<Evidence src="evidence/t07/wptv.png" size={[2880, 1800]} dur={7.72} frame="screen" marks={[{ x: 2278, y: 658, w: 98, h: 112, at: 4.56 }]} zoom={0.9} inset={{ src: "evidence/t07/wptv-top.png", size: [2880, 1800] }} source="WPTV · WEST PALM BEACH" url="wptv.com" />
</>) },
  { from: 100.98, to: 102.84, tag: [1, "The Sign", false], back: null, el: (<>
<Drift><Center y={480}><CardGap at={-1} /></Center>
<Center y={860}><Stamp at={0.05} text="LEGAL" size={110} color={C6.loss} rotate={-7} /></Center></Drift>
</>) },
  { from: 102.84, to: 110.68, tag: [1, "The Sign", false], back: null, el: (<>
<Drift><Center y={480}><CardGap at={-1} times={[3.96, 6.56, 999]} /></Center><Center x={960} y={860}><In at={3.96} from="fade"><Plate6 at={3.96}><Label6 at={3.96} size={34} color={C6.ink}>A WEEK LATER: 90¢ · MONTHS LATER: $1 AGAIN</Label6></Plate6></In></Center><Source6 at={0.3}>WPTV</Source6></Drift>
</>) },
  { from: 110.68, to: 120.7, tag: [1, "The Sign", false], back: (<><Stock6 n={27} dur={10.02} dim={0} graphics={true} />
<Stock6 n={28} from={5.44} dur={10.02} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.64} out={7.18} from="fade"><Plate6 at={2.64}><Label6 at={2.64} size={40} color={C6.ink}>EVERY SWIPE COSTS THE STATION</Label6></Plate6></In></Center><Center x={960} y={880}><In at={7.18} from="fade"><Plate6 at={7.18}><Label6 at={7.18} size={42} color={C6.accent}>BANK FEES: 6–10¢ OF EVERY GALLON</Label6></Plate6></In></Center><Source6 at={7.18}>NACS · CSNews</Source6>
</>) },
  { from: 120.7, to: 131.12, tag: [1, "The Sign", false], back: null, el: (<>
<Evidence src="evidence/t07/nacs-sales.png" size={[2880, 1800]} dur={10.42} frame="screen" marks={[{ x: 644, y: 694, w: 166, h: 38, at: 2.14 }]} zoom={0.7} inset={{ src: "evidence/t07/nacs-sales-top.png", size: [2880, 1800] }} source="NACS · APRIL 2026 · 2025 DATA" url="convenience.org" /><Center x={960} y={960}><In at={8.86} from="fade"><Plate6 at={8.86}><Label6 at={8.86} size={30} color={C6.accent}>FOR MANY STORES: MORE THAN THEIR PRE-TAX PROFIT</Label6></Plate6></In></Center>
</>) },
  { from: 131.12, to: 135.54, tag: [1, "The Sign", false], back: null, el: (<>
<Drift><Center y={500}><PriceSign at={0.05} price="3.99" label="REGULAR" scale={1.4} hlFrac={2.6} /></Center></Drift>
</>) },
  { from: 135.54, to: 140.96, tag: [1, "The Sign", false], back: (<><Stock6 n={69} dur={5.42} dim={0} graphics={true} sepia />
<Stock6 n={70} from={3.34} dur={5.42} dim={0} graphics={true} sepia />
<ArchiveFx /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={3.34} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.ink}>1930s · GAS COST PENNIES</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.34} from="fade"><Plate6 at={3.34}><Label6 at={3.34} size={40} color={C6.ink}>A FULL CENT WAS A BIG JUMP</Label6></Plate6></In></Center><Source6 at={0.3}>Minneapolis 1937 · Carrier Mills, Ill. 1939 · public domain</Source6>
</>) },
  { from: 140.96, to: 148.38, tag: [1, "The Sign", false], back: null, el: (<>
<Evidence src="evidence/t07/nacs-fraction.png" size={[2880, 1800]} dur={7.42} frame="screen" marks={[{ x: 160, y: 598, w: 1658, h: 86, at: 4.66 }]} zoom={0.7} inset={{ src: "evidence/t07/nacs-fraction-top.png", size: [2880, 1800] }} source="NACS · WHY GAS IS PRICED IN FRACTIONS OF A PENNY" url="convenience.org" />
</>) },
  { from: 148.38, to: 151.9, tag: [1, "The Sign", false], back: null, el: (<>
<Drift><Center x={960} y={540}><MoneyTrail at={0.05} w={760} pockets={[{ label: "Card price on the sign", value: "+5–20¢", color: C6.loss, at: 0.1 }, { label: "Bank swipe fees", value: "6–10¢", color: C6.loss, at: 0.45 }, { label: "That 9/10 of a cent", value: "0.9¢", color: C6.loss, at: 0.8 }, { label: "The store: food & drinks", value: "38.9%", color: C6.money }, { label: "Premium you don't need", value: "≈ +90¢", color: C6.loss }, { label: "Slow on the way down", value: "3–4× slower", color: C6.loss }, { label: "Pricing software (alleged)", value: "≈6–30¢", color: C6.accent }]} /></Center></Drift>
</>) },
  { from: 151.9, to: 158.4, tag: [2, "The Store", true], hard: true, back: (<><Stock6 n={19} dur={6.5} dim={0} graphics={true} />
<Stock6 n={18} from={4.3} dur={6.5} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.6} out={4.3} from="fade"><Plate6 at={2.6}><Label6 at={2.6} size={56} color={C6.accent}>THE GALLON IS THE BAIT</Label6></Plate6></In></Center><Center x={960} y={880}><In at={4.3} from="fade"><Plate6 at={4.3}><Label6 at={4.3} size={56} color={C6.money}>THE STORE IS THE BUSINESS</Label6></Plate6></In></Center>
</>) },
  { from: 158.4, to: 164.64, tag: [2, "The Store", false], back: null, el: (<>
<Drift><Center y={500}><SalesVsProfit at={0.1} profitAt={3.72} /></Center><Source6 at={0.3}>NACS · 2025 data · share of fuel</Source6></Drift>
</>) },
  { from: 164.64, to: 169.84, tag: [2, "The Store", false], back: (<><Stock6 n={35} dur={5.2} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.52} from="fade"><Plate6 at={2.52}><Label6 at={2.52} size={32} color={C6.ink}>NACS: PAY THE WHOLE SITE'S BILLS WITH INSIDE PROFITS</Label6></Plate6></In></Center><Source6 at={2.52}>NACS Magazine · June 2026</Source6>
</>) },
  { from: 169.84, to: 177.92, tag: [2, "The Store", false], back: (<><Stock6 n={39} dur={8.08} dim={0} graphics={true} />
<Stock6 n={38} from={4.72} dur={8.08} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.92} out={4.72} from="fade"><Plate6 at={2.92}><Label6 at={2.92} size={44} color={C6.ink}>FOOD & FOUNTAIN DRINKS</Label6></Plate6></In></Center><Center x={960} y={880}><In at={4.72} from="fade"><Plate6 at={4.72}><Label6 at={4.72} size={44} color={C6.money}>38.9% OF IN-STORE GROSS PROFIT</Label6></Plate6></In></Center><Source6 at={4.72}>NACS · 2025 data</Source6>
</>) },
  { from: 177.92, to: 183.4, tag: [2, "The Store", false], back: null, el: (<>
<Evidence src="evidence/t07/natso-top.png" size={[2880, 1800]} dur={5.48} frame="screen" zoom={0.9} source="NATSO · DESIGN ADVICE FOR TRUCK-STOP STORES" url="natso.com" /><Center x={960} y={960}><In at={4.5} from="fade"><Plate6 at={4.5}><Label6 at={4.5} size={36} color={C6.accent}>“THE WALK-IN COOLER IS A TRAFFIC GENERATOR”</Label6></Plate6></In></Center>
</>) },
  { from: 183.4, to: 190.54, tag: [2, "The Store", false], back: null, el: (<>
<Drift><Center y={500}><StoreMap at={0.05} pathAt={3.3} grabAt={4.92} /></Center><Center x={960} y={1010}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={22} color={C6.mint}>ILLUSTRATION</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 190.54, to: 193.32, tag: [2, "The Store", false], back: (<><Stock6 n={40} dur={2.78} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.05} out={1.24} text="you came for gas." y={900} size={76} /><Meme at={1.24} text="you leave with a hot dog." y={900} size={76} />
</>) },
  { from: 193.32, to: 198.68, tag: [2, "The Store", false], back: (<><Stock6 n={5} dur={5.36} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.56} from="fade"><Plate6 at={2.56}><Label6 at={2.56} size={44} color={C6.accent}>THERE'S A BUTTON FOR THAT</Label6></Plate6></In></Center>
</>) },
  { from: 198.68, to: 204.26, tag: [3, "The Button", true], hard: true, back: null, el: (<>
<Drift><Center y={480}><GradeButtons at={0.05} hlAt={2.76} /></Center></Drift>
</>) },
  { from: 204.26, to: 206.84, tag: [3, "The Button", false], back: (<><Stock6 n={44} dur={2.58} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={44} color={C6.ink}>“A FAVOR FOR YOUR CAR”?</Label6></Plate6></In></Center>
</>) },
  { from: 206.84, to: 211.9, tag: [3, "The Button", false], back: (<><Stock6 n={42} dur={5.06} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.64} from="fade"><Plate6 at={3.64}><Label6 at={3.64} size={36} color={C6.ink}>CARS BUILT FOR REGULAR + PREMIUM = NOTHING</Label6></Plate6></In></Center>
</>) },
  { from: 211.9, to: 216.16, tag: [3, "The Button", false], back: null, el: (<>
<Evidence src="evidence/t07/aaa-research.png" size={[2880, 1800]} dur={4.26} frame="screen" marks={[{ x: 626, y: 678, w: 662, h: 40, at: 0.05 }]} zoom={0.9} inset={{ src: "evidence/t07/aaa-research-top.png", size: [2880, 1800] }} source="AAA · PREMIUM FUEL RESEARCH" url="gasprices.aaa.com" />
</>) },
  { from: 216.16, to: 221.16, tag: [3, "The Button", false], back: (<><Stock6 n={43} dur={5.0} dim={0.78} graphics={true} /></>), el: (<>
<Center y={470}><Words text="“Premium is higher octane, not higher quality.”" at={2.6} size={76} maxW={1500} hl={["not", "quality"]} /></Center><Center x={960} y={880}><In at={2.6} from="fade"><Plate6 at={2.6}><Label6 at={2.6} size={30} color={C6.mint}>AAA ENGINEERS · 2016</Label6></Plate6></In></Center><Source6 at={2.6}>AAA via CBS New York, Sept 2016</Source6>
</>) },
  { from: 221.16, to: 235.14, tag: [3, "The Button", false], back: null, el: (<>
<Drift><Center y={250}><Label6 at={0.1} size={34} color={C6.accent}>AAA · ONE YEAR · CARS BUILT FOR REGULAR</Label6></Center>
<Center y={500}><Row gap={70}>
<Col gap={14}><Counter6 to={16.5} at={3.14} dur={0.9} size={130} color={C6.ink} fmt={(v) => v.toFixed(1) + "M"} /><Label6 at={3.14} size={26}>DRIVERS</Label6></Col>
<Col gap={14}><Counter6 to={270} at={6.98} dur={0.9} size={130} color={C6.ink} fmt={(v) => Math.round(v) + "M+"} /><Label6 at={6.98} size={26}>FILL-UPS</Label6></Col>
<Col gap={14}><Counter6 to={2.1} at={10.12} dur={0.9} size={130} color={C6.loss} fmt={(v) => "$" + v.toFixed(1) + "B"} /><Label6 at={10.12} size={26} color={C6.loss}>SPENT ON NOTHING</Label6></Col>
</Row></Center><Source6 at={0.4}>AAA · one year · cars built for regular</Source6></Drift>
</>) },
  { from: 235.14, to: 240.52, tag: [3, "The Button", false], back: null, el: (<>
<Drift><Center y={470}><Words text="+50¢" at={0.1} size={220} hl={["+50¢"]} /></Center>
<Center y={660}><Label6 at={0.3} size={34} color={C6.mint}>PREMIUM OVER REGULAR · 2016</Label6></Center><Source6 at={0.3}>U.S. EIA</Source6></Drift>
</>) },
  { from: 240.52, to: 253.92, tag: [3, "The Button", false], back: null, el: (<>
<Drift><Center y={500}><GapLadder times={[0.1, 3.42, 5.84, 8.08, 11.16]} h={440} /></Center><Source6 at={0.3}>U.S. EIA data via CNN · premium minus regular</Source6></Drift>
</>) },
  { from: 253.92, to: 257.58, tag: [3, "The Button", false], back: (<><Stock6 n={46} dur={3.66} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={44} color={C6.ink}>MORE EXPENSIVE TO MAKE?</Label6></Plate6></In></Center>
</>) },
  { from: 257.58, to: 268.94, tag: [3, "The Button", false], back: null, el: (<>
<Drift><Center y={470}><WholesaleRetail at={0.1} retailAt={7.8} h={460} /></Center><Source6 at={0.3}>CNN · U.S. EIA data · since 2007</Source6></Drift>
</>) },
  { from: 268.94, to: 275.32, tag: [3, "The Button", false], back: (<><Stock6 n={4} dur={6.38} dim={0.7} graphics={true} /></>), el: (<>
<Center y={460}><Words text="“Premium gas has become pure profit for gas stations.”" at={2.4} size={80} maxW={1500} hl={["pure", "profit"]} /></Center><Center x={960} y={880}><In at={2.4} from="fade"><Plate6 at={2.4}><Label6 at={2.4} size={30} color={C6.mint}>CNN · JULY 2026</Label6></Plate6></In></Center><Source6 at={2.4}>CNN, via ABC17 News</Source6>
</>) },
  { from: 275.32, to: 281.74, tag: [3, "The Button", false], back: null, el: (<>
<Drift><Center y={440}><Words text="12 gal × ≈90¢ = $10.80" at={0.1} size={110} hl={["$10.80"]} /></Center>
<Center y={620}><Label6 at={5.1} size={40} color={C6.accent}>EVERY FILL-UP</Label6></Center><Source6 at={0.3}>our calculation · premium gap close to $1 (U.S. EIA via CNN)</Source6></Drift>
</>) },
  { from: 281.74, to: 285.12, tag: [3, "The Button", false], back: (<><Stock6 n={61} dur={3.38} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.05} text="congratulations." y={860} size={70} out={1.82} /><Meme at={1.82} text="you're a premium customer." y={880} size={70} />
</>) },
  { from: 285.12, to: 291.26, tag: [3, "The Button", false], back: (<><Stock6 n={10} dur={6.14} dim={0} graphics={true} /></>), el: (<>
<Subscribe6 at={2.66} /><Center x={960} y={880}><In at={4.74} from="fade"><Plate6 at={4.74}><Label6 at={4.74} size={36} color={C6.ink}>ONE OF THESE EVERY FEW DAYS</Label6></Plate6></In></Center>
</>) },
  { from: 291.26, to: 299.26, tag: [3, "The Button", false], back: null, el: (<>
<Drift><Center x={960} y={540}><MoneyTrail at={0.05} w={760} pockets={[{ label: "Card price on the sign", value: "+5–20¢", color: C6.loss, at: -1 }, { label: "Bank swipe fees", value: "6–10¢", color: C6.loss, at: -1 }, { label: "That 9/10 of a cent", value: "0.9¢", color: C6.loss, at: -1 }, { label: "The store: food & drinks", value: "38.9%", color: C6.money, at: 0.2 }, { label: "Premium you don't need", value: "≈ +90¢", color: C6.loss, at: 0.5 }, { label: "Slow on the way down", value: "3–4× slower", color: C6.loss }, { label: "Pricing software (alleged)", value: "≈6–30¢", color: C6.accent }]} hl={5} hlAt={3.9} /></Center></Drift>
</>) },
  { from: 299.26, to: 304.3, tag: [4, "The Timing", true], hard: true, back: (<><Stock6 n={2} dur={5.04} dim={0} graphics={true} />
<Stock6 n={68} from={2.92} dur={5.04} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.ink}>SPRING 2026: OIL JUMPS</Label6></Plate6></In></Center>
</>) },
  { from: 304.3, to: 309.08, tag: [4, "The Timing", false], back: null, el: (<>
<Evidence src="evidence/t07/aaa-march.png" size={[2880, 1800]} dur={4.78} frame="screen" marks={[{ x: 1032, y: 594, w: 684, h: 94, at: 2.18 }]} zoom={0.9} inset={{ src: "evidence/t07/aaa-march-top.png", size: [2880, 1800] }} source="AAA · MARCH 2026" url="gasprices.aaa.com" />
</>) },
  { from: 309.08, to: 314.12, tag: [4, "The Timing", false], back: (<><Stock6 n={47} dur={5.04} dim={0} graphics={true} />
<Stock6 n={15} from={1.9} dur={5.04} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={1.9} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={44} color={C6.ink}>OIL: BACK DOWN</Label6></Plate6></In></Center><Center x={960} y={880}><In at={1.9} from="fade"><Plate6 at={1.9}><Label6 at={1.9} size={44} color={C6.accent}>THE SIGN: TOOK ITS TIME</Label6></Plate6></In></Center>
</>) },
  { from: 314.12, to: 323.88, tag: [4, "The Timing", false], back: (<><Stock6 n={48} dur={9.76} dim={0} graphics={false} />
<Stock6 n={49} from={5.72} dur={9.76} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={880}><In at={2.18} from="fade"><Plate6 at={2.18}><Label6 at={2.18} size={56} color={C6.accent}>ROCKETS AND FEATHERS</Label6></Plate6></In></Center>
</>) },
  { from: 323.88, to: 333.12, tag: [4, "The Timing", false], back: null, el: (<>
<Drift><Center y={460}><RocketFeather at={0.2} fall={5.96} h={440} labels={["OIL UP", "PUMP: UP FAST", "DOWN: 3–4× SLOWER"]} /></Center><Source6 at={0.3}>Chesnes · FTC economist · The Energy Journal</Source6></Drift>
</>) },
  { from: 333.12, to: 340.96, tag: [4, "The Timing", false], back: null, el: (<>
<Evidence src="evidence/t07/stlfed.png" size={[2880, 1800]} dur={7.84} frame="screen" marks={[{ x: 1038, y: 606, w: 366, h: 38, at: 6.18 }]} zoom={0.9} inset={{ src: "evidence/t07/stlfed-top.png", size: [2880, 1800] }} source="FEDERAL RESERVE BANK OF ST. LOUIS · AUG 2026" url="stlouisfed.org" />
</>) },
  { from: 340.96, to: 349.76, tag: [4, "The Timing", false], back: (<><Stock6 n={51} dur={8.8} dim={0} graphics={true} />
<Stock6 n={64} from={5.98} dur={8.8} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.94} out={5.98} from="fade"><Plate6 at={3.94}><Label6 at={3.94} size={40} color={C6.ink}>PRICES RISING: EVERYONE COMPARES</Label6></Plate6></In></Center><Center x={960} y={880}><In at={7.24} from="fade"><Plate6 at={7.24}><Label6 at={7.24} size={40} color={C6.accent}>PRICES FALLING: NOBODY CHECKS</Label6></Plate6></In></Center>
</>) },
  { from: 349.76, to: 353.04, tag: [4, "The Timing", false], back: (<><Stock6 n={11} dur={3.28} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.12} from="fade"><Plate6 at={2.12}><Label6 at={2.12} size={42} color={C6.ink}>…BECAUSE YOU STOPPED CHECKING</Label6></Plate6></In></Center>
</>) },
  { from: 353.04, to: 359.16, tag: [4, "The Timing", false], back: null, el: (<>
<Evidence src="evidence/t07/aaa-nov.png" size={[2880, 1800]} dur={6.12} frame="screen" marks={[{ x: 572, y: 902, w: 426, h: 40, at: 2.12 }]} zoom={0.9} inset={{ src: "evidence/t07/aaa-nov-top.png", size: [2880, 1800] }} source="AAA · NOV 2026" url="gasprices.aaa.com" />
</>) },
  { from: 359.16, to: 362.14, tag: [4, "The Timing", false], back: null, el: (<>
<Drift><Center x={960} y={540}><MoneyTrail at={0.05} w={760} pockets={[{ label: "Card price on the sign", value: "+5–20¢", color: C6.loss, at: -1 }, { label: "Bank swipe fees", value: "6–10¢", color: C6.loss, at: -1 }, { label: "That 9/10 of a cent", value: "0.9¢", color: C6.loss, at: -1 }, { label: "The store: food & drinks", value: "38.9%", color: C6.money, at: -1 }, { label: "Premium you don't need", value: "≈ +90¢", color: C6.loss, at: -1 }, { label: "Slow on the way down", value: "3–4× slower", color: C6.loss, at: 0.3 }, { label: "Pricing software (alleged)", value: "≈6–30¢", color: C6.accent }]} hl={6} hlAt={1.64} /></Center></Drift>
</>) },
  { from: 362.14, to: 372.52, tag: [4, "The Timing", false], back: (<><Stock6 n={18} dur={10.38} dim={0} graphics={true} />
<Stock6 n={13} from={4.3} dur={10.38} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={4.3} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={36} color={C6.ink}>THE SIGN · THE FRACTION · THE THIRD BUTTON</Label6></Plate6></In></Center><Center x={960} y={880}><In at={4.3} from="fade"><Plate6 at={4.3}><Label6 at={4.3} size={48} color={C6.accent}>CALIFORNIA</Label6></Plate6></In></Center>
</>) },
  { from: 372.52, to: 379.42, tag: [5, "The Software", true], hard: true, back: null, el: (<>
<Evidence src="evidence/t07/cstore-top.png" size={[2880, 1800]} dur={6.9} frame="screen" zoom={0.9} source="C-STORE DIVE · JUNE 2026" url="cstoredive.com" /><Center x={960} y={960}><In at={3.24} from="fade"><Plate6 at={3.24}><Label6 at={3.24} size={36} color={C6.accent}>FEDERAL LAWSUIT · JUNE 22, 2026</Label6></Plate6></In></Center>
</>) },
  { from: 379.42, to: 388.8, tag: [5, "The Software", false], back: null, el: (<>
<Drift><Center y={380}><Row gap={26}>
<Label6 at={0.05} size={40} color={C6.ink}>BP</Label6><Label6 at={0.86} size={40} color={C6.ink}>CIRCLE K</Label6><Label6 at={1.94} size={40} color={C6.ink}>MARATHON</Label6>
<Label6 at={2.86} size={40} color={C6.ink}>7-ELEVEN</Label6><Label6 at={3.8} size={40} color={C6.ink}>WALMART</Label6><Label6 at={4.6} size={40} color={C6.ink}>ALBERTSONS</Label6>
</Row></Center>
<Center y={600}><Counter6 to={1700} at={6.88} dur={1.0} size={180} fmt={(v) => Math.round(v).toLocaleString("en-US") + "+"} /></Center>
<Center y={760}><Label6 at={6.88} size={32} color={C6.mint}>STATIONS · NAMED IN THE LAWSUIT</Label6></Center><Source6 at={0.3}>AP · Grocery Dive · Daily Journal</Source6></Drift>
</>) },
  { from: 388.8, to: 394.0, tag: [5, "The Software", false], back: (<><Stock6 n={55} dur={5.2} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.08} from="fade"><Plate6 at={4.08}><Label6 at={4.08} size={34} color={C6.ink}>A PRICING SYSTEM FROM A COMPANY CALLED KALIBRATE</Label6></Plate6></In></Center>
</>) },
  { from: 394.0, to: 397.94, tag: [5, "The Software", false], back: (<><Stock6 n={50} dur={3.94} dim={0.6} graphics={true} /></>), el: (<>
<Center x={960} y={820}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={30} color={C6.mint}>ACCORDING TO THE COMPLAINT</Label6></Plate6></In></Center><Center x={960} y={910}><In at={3.1} from="fade"><Plate6 at={3.1}><Label6 at={3.1} size={36} color={C6.accent}>“CONNECTS DIRECTLY TO GAS STATIONS’ PUMPS AND SIGNS”</Label6></Plate6></In></Center><Source6 at={3.1}>The Signal · June 2026</Source6>
</>) },
  { from: 397.94, to: 401.76, tag: [5, "The Software", false], back: null, el: (<>
<Drift><Center y={500}><AlgoHub at={0.1} h={600} /></Center>
<Center y={1000}><Tag7 at={0.2} color={C6.accent}>ACCORDING TO THE COMPLAINT · ILLUSTRATION</Tag7></Center></Drift>
</>) },
  { from: 401.76, to: 405.88, tag: [5, "The Software", false], back: (<><Stock6 n={54} dur={4.12} dim={0.55} graphics={true} /></>), el: (<>
<Center y={460}><Words text="“the central nervous system for a conspiracy”" at={1.22} size={84} maxW={1500} hl={["conspiracy”"]} /></Center><Center x={960} y={880}><In at={1.22} from="fade"><Plate6 at={1.22}><Label6 at={1.22} size={30} color={C6.mint}>HOW THE PLAINTIFFS DESCRIBE KALIBRATE · ALLEGATION</Label6></Plate6></In></Center><Source6 at={1.22}>ABC7 Los Angeles · June 2026</Source6>
</>) },
  { from: 405.88, to: 416.84, tag: [5, "The Software", false], back: null, el: (<>
<Drift><Center y={470}><SpiralWarn at={0.1} warnAt={8.36} /></Center>
<Center y={940}><Tag7 at={0.2} color={C6.accent}>RECONSTRUCTION · BASED ON THE COMPLAINT</Tag7></Center></Drift>
</>) },
  { from: 416.84, to: 425.22, tag: [5, "The Software", false], back: null, el: (<>
<Drift><Center y={480}><AlgoHub at={0.1} pair syncAt={6.68} w={1300} h={640} /></Center>
<Center y={1000}><Tag7 at={0.2}>ILLUSTRATION</Tag7></Center></Drift>
</>) },
  { from: 425.22, to: 432.88, tag: [5, "The Software", false], back: null, el: (<>
<Evidence src="evidence/t07/cstore-top.png" size={[2880, 1800]} dur={7.66} frame="screen" zoom={0.9} source="C-STORE DIVE · JUNE 2026" url="cstoredive.com" /><Center x={960} y={900}><In at={3.64} out={6.18} from="fade"><Plate6 at={3.64}><Label6 at={3.64} size={40} color={C6.accent}>ALLEGED: ≈6¢ MORE ON AVERAGE</Label6></Plate6></In></Center><Center x={960} y={900}><In at={6.18} from="fade"><Plate6 at={6.18}><Label6 at={6.18} size={40} color={C6.accent}>ALLEGED: UP TO 30¢ IN SOME MARKETS</Label6></Plate6></In></Center>
</>) },
  { from: 432.88, to: 439.84, tag: [5, "The Software", false], back: (<><Stock6 n={53} dur={6.96} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.6} from="fade"><Plate6 at={3.6}><Label6 at={3.6} size={42} color={C6.accent}>EVERY EXTRA 1¢ = $134 MILLION A YEAR</Label6></Plate6></In></Center><Source6 at={3.6}>ABC7 · lawsuit figures</Source6>
</>) },
  { from: 439.84, to: 448.6, tag: [5, "The Software", false], back: null, el: (<>
<Drift><Center y={500}><JarVsTower at={0.1} towerAt={6.12} h={480} /></Center><Source6 at={0.3}>NACS · lawsuit allegations (Cstore Dive, AP)</Source6></Drift>
</>) },
  { from: 448.6, to: 457.1, tag: [5, "The Software", false], back: (<><Stock6 n={52} dur={8.5} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={6.62} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={32} color={C6.ink}>SHARED PRICING ALGORITHMS CAN COUNT AS PRICE FIXING</Label6></Plate6></In></Center><Center x={960} y={880}><In at={6.62} from="fade"><Plate6 at={6.62}><Label6 at={6.62} size={40} color={C6.accent}>AB 325 · IN EFFECT JAN 1, 2026</Label6></Plate6></In></Center><Source6 at={6.62}>CSP Daily News</Source6>
</>) },
  { from: 457.1, to: 465.0, tag: [5, "The Software", false], back: (<><Stock6 n={56} dur={7.9} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={820}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={44} color={C6.accent}>ALLEGATIONS</Label6></Plate6></In></Center><Center x={960} y={920}><In at={1.76} from="fade"><Plate6 at={1.76}><Label6 at={1.76} size={30} color={C6.ink}>WALMART: REVIEWING · BP: NO COMMENT · A COURT WILL DECIDE</Label6></Plate6></In></Center><Source6 at={1.76}>TTNews · Bloomberg</Source6>
</>) },
  { from: 465.0, to: 471.12, tag: [6, "Keep It", true], hard: true, back: null, el: (<>
<Drift><Center x={560} y={520}><PumpLCD at={-1} w={560} /></Center>
<Center x={1380} y={500}><BankPush at={0.1} lockAt={4.12} w={680} /></Center></Drift>
</>) },
  { from: 471.12, to: 490.88, tag: [6, "Keep It", false], back: (<><Stock6 n={7} dur={19.76} dim={0.78} graphics={true} /></>), el: (<>
<Center y={520}><Checklist items={[{ text: "Debit card: pay inside, exact amount", at: 2.18 }, { text: "Check the card price before you pull in", at: 8.64 }, { text: "Manual says regular? Buy regular", at: 11.32 }, { text: "Prices falling? Shop around", at: 15.14 }]} /></Center>
</>) },
  { from: 490.88, to: 494.48, tag: [6, "Keep It", false], back: null, el: (<>
<Drift><Center x={560} y={520}><PumpLCD at={-1} w={560} /></Center>
<Center x={1380} y={500}><BankPush at={-1} lockAt={-1} postAt={1.72} w={680} /></Center></Drift>
</>) },
  { from: 494.48, to: 498.72, tag: [6, "Keep It", false], back: null, el: (<>
<Drift><Center x={960} y={540}><MoneyTrail at={0.05} w={740} pockets={[{ label: "Card price on the sign", value: "+5–20¢", color: C6.loss, at: -1 }, { label: "Bank swipe fees", value: "6–10¢", color: C6.loss, at: -1 }, { label: "That 9/10 of a cent", value: "0.9¢", color: C6.loss, at: -1 }, { label: "The store: food & drinks", value: "38.9%", color: C6.money, at: -1 }, { label: "Premium you don't need", value: "≈ +90¢", color: C6.loss, at: -1 }, { label: "Slow on the way down", value: "3–4× slower", color: C6.loss, at: -1 }, { label: "Pricing software (alleged)", value: "≈6–30¢", color: C6.accent, at: -1 }]} /></Center></Drift>
</>) },
  { from: 498.72, to: 504.46, back: (<><Stock6 n={59} dur={5.74} dim={0.45} graphics={true} /></>), el: (<>
<Center y={780}><Words text="Biggest cash vs. card gap you've seen?" at={0.05} size={70} hl={["gap"]} /></Center><Center x={960} y={930}><In at={4.68} from="fade"><Plate6 at={4.68}><Label6 at={4.68} size={36} color={C6.accent}>TELL US IN THE COMMENTS</Label6></Plate6></In></Center>
</>) },
  { from: 504.46, to: 519.18, back: (<><Stock6 n={68} dur={14.72} dim={0.55} graphics={true} /></>), el: (<>
<EndCard6 at={0.3} next="The Menu Said $14. The Bill Said $31." />
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string, number][] = [[0.05, "ep06-pump", 0.3], [2.78, "ding", 0.3], [8.18, "ep06-stamp", 0.25], [12.82, "ep06-pop", 0.22], [19.72, "impact", 0.25], [21.88, "ep06-pop", 0.22], [24.1, "ep06-pop", 0.22], [26.76, "t02-declined", 0.3], [32.2, "tick", 0.3], [34.38, "ep06-pop", 0.22], [41.18, "ep06-pop", 0.22], [45.3, "t02-paper", 0.3], [50.88, "impact", 0.25], [55.66, "ep06-coin", 0.3], [58.0, "rise", 0.25], [61.21, "ep06-whoosh", 0.25], [62.68, "ep06-coin", 0.25], [64.99, "ep06-whoosh", 0.2], [69.04, "ep06-pop", 0.22], [73.24, "ep06-stamp", 0.25], [74.2, "ep06-pop", 0.22], [77.96, "ep06-pop", 0.22], [82.28, "ep06-stamp", 0.25], [89.28, "ep06-whoosh", 0.25], [92.48, "ep06-whoosh", 0.2], [93.36, "t02-paper", 0.3], [97.82, "impact", 0.25], [101.03, "ep06-stamp", 0.3], [106.8, "ep06-pop", 0.22], [109.4, "buzz", 0.25], [113.32, "ep06-pop", 0.22], [117.86, "ep06-coin", 0.25], [120.8, "t02-paper", 0.3], [122.84, "ep06-counter", 0.3], [133.72, "ep06-pop", 0.25], [135.59, "ep06-whoosh", 0.2], [141.06, "t02-paper", 0.3], [145.62, "ep06-pop", 0.22], [148.48, "ep06-coin", 0.25], [148.83, "ep06-coin", 0.25], [149.18, "ep06-coin", 0.25], [154.5, "ep06-stamp", 0.25], [156.2, "ep06-kaching", 0.3], [158.5, "ep06-pop", 0.22], [162.12, "impact", 0.25], [167.16, "ep06-pop", 0.22], [169.94, "ep09-sizzle", 0.2], [174.56, "ep06-kaching", 0.25], [178.02, "t02-paper", 0.3], [182.42, "ep06-pop", 0.22], [186.7, "t02-door", 0.3], [188.32, "ep06-pop", 0.25], [191.78, "ep06-scratch", 0.25], [195.88, "click", 0.35], [198.73, "click", 0.3], [198.93, "click", 0.3], [201.44, "sparkle", 0.3], [210.48, "buzz", 0.2], [211.95, "t02-paper", 0.3], [218.76, "ep06-stamp", 0.25], [224.3, "ep06-counter", 0.3], [228.14, "ep06-counter", 0.3], [231.28, "impact", 0.3], [235.24, "ep06-pop", 0.22], [240.62, "ep06-pop", 0.2], [243.94, "ep06-pop", 0.2], [246.36, "ep06-pop", 0.2], [248.6, "ep06-pop", 0.2], [251.68, "impact", 0.3], [257.68, "ep06-pop", 0.22], [265.38, "rise", 0.3], [272.64, "ep06-stamp", 0.25], [278.46, "ep06-kaching", 0.25], [283.56, "ding", 0.3], [287.78, "click", 0.35], [291.46, "ep06-coin", 0.25], [291.76, "ep06-coin", 0.25], [295.16, "rise", 0.3], [303.1, "rise", 0.3], [304.4, "t02-paper", 0.3], [306.48, "impact", 0.25], [309.28, "ep06-fall", 0.25], [318.84, "ep06-rocket", 0.3], [320.4, "sparkle", 0.25], [324.08, "rise", 0.3], [329.84, "ep06-fall", 0.3], [333.22, "t02-paper", 0.3], [344.9, "ep06-pop", 0.22], [348.2, "ep06-pop", 0.22], [353.14, "t02-paper", 0.3], [355.16, "impact", 0.25], [359.46, "ep06-coin", 0.25], [366.44, "ep06-whoosh", 0.25], [372.62, "t02-paper", 0.3], [375.76, "ep06-stamp", 0.25], [379.47, "ep06-pop", 0.2], [380.28, "ep06-pop", 0.2], [381.36, "ep06-pop", 0.2], [382.28, "ep06-pop", 0.2], [383.22, "ep06-pop", 0.2], [384.02, "ep06-pop", 0.2], [386.3, "ep06-counter", 0.3], [392.88, "ep06-pop", 0.22], [397.1, "ep06-pop", 0.22], [398.04, "ep06-whoosh", 0.25], [402.98, "ep06-stamp", 0.25], [405.98, "ep06-pop", 0.22], [414.24, "buzz", 0.3], [416.94, "ep06-whoosh", 0.2], [423.52, "ep06-pop", 0.25], [425.32, "t02-paper", 0.3], [431.4, "impact", 0.25], [436.48, "ep06-kaching", 0.25], [439.94, "ep06-coin", 0.25], [445.96, "impact", 0.3], [455.22, "ep06-pop", 0.22], [462.62, "ep06-stamp", 0.25], [465.05, "ep06-pump", 0.25], [469.12, "ding", 0.3], [473.3, "click", 0.3], [479.76, "click", 0.3], [482.44, "click", 0.3], [486.26, "click", 0.3], [492.6, "ep06-kaching", 0.25], [495.66, "ep06-coin", 0.25], [503.4, "ep06-pop", 0.2], [504.76, "ep06-whoosh", 0.2]];

export const T07Gas: React.FC = () => {
  const { fps } = useVideoConfig();
  setClips(CLIP_FN); // свой набор стоков при каждом рендере: в общем Root последним грузится чужой ролик
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/t07-voiceover.mp3")} volume={0.9} />
      <Sequence from={0} durationInFrames={1966}><Audio src={staticFile("audio/t07/music-c0-open.mp3")} volume={(f) => 0.07 * interpolate(f, [0, 30, 1936, 1966], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={1930} durationInFrames={4048}><Audio src={staticFile("audio/t07/music-c1-sign.mp3")} volume={(f) => 0.09 * interpolate(f, [0, 30, 4018, 4048], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={5942} durationInFrames={3053}><Audio src={staticFile("audio/t07/music-c2-premium.mp3")} volume={(f) => 0.085 * interpolate(f, [0, 30, 3023, 3053], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={8960} durationInFrames={2234}><Audio src={staticFile("audio/t07/music-c3-timing.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 2204, 2234], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={11158} durationInFrames={2810}><Audio src={staticFile("audio/t07/music-c4-algo.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 2780, 2810], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={13932} durationInFrames={1643}><Audio src={staticFile("audio/t07/music-c5-how.mp3")} volume={(f) => 0.09 * interpolate(f, [0, 30, 1613, 1643], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
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
