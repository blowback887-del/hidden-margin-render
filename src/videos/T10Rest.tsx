import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Bg6, BigNum, Bug6, C6, Center, ChapterTag, Donut6, In, Label6, Scene6, setClips, Source6, Stock6, Subscribe6, Plate6, TwoBars, Words } from "../brand/hm6";
import { DiningRoom, ForkRoad, FeeStamps, TwoLines, ViewCount } from "../brand/t10";
import { ThreeMoves } from "../brand/t08";
import { Checklist } from "../brand/t07";
import { TipScreen } from "../brand/t06";
import { Evidence } from "../brand/evidence";

// ===================================================================
// T10Rest — сгенерировано cloud/gen/build.py из плана cloud/gen/t10.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const T10REST_DURATION_SEC = 585.12;
const CLIPS: Record<number, string> = {"1": "01-closed-street-chairs", "2": "02-empty-dining-warm", "3": "03-empty-cafe-night", "4": "04-empty-cafe-windows", "5": "05-waitress-closing", "6": "06-closed-sign-flip", "7": "07-sorry-closed", "8": "08-card-terminal", "9": "09-pos-restaurant", "10": "10-kiosk-bar", "11": "11-cooking-pan", "12": "12-family-cooking", "13": "13-spaghetti-home", "14": "14-grocery-aisles", "15": "15-grocery-checkout", "16": "16-friends-orlando", "17": "17-friends-laughing", "18": "18-drive-thru-pay", "19": "19-drive-thru-order", "20": "20-drive-thru-night", "21": "21-chips-salsa", "22": "22-salsa-pour", "23": "23-chilis-tumble", "24": "24-burger-fries-plate", "25": "25-burger-close", "26": "26-calc-receipts", "27": "27-frustrated-receipts", "28": "28-waitress-wipe", "29": "29-couple-menu", "30": "30-denver-aerial", "31": "31-denver-street", "32": "32-family-dinner", "33": "33-rain-windshield", "34": "34-stressed-man", "35": "35-couple-calc", "36": "36-bar-beer", "37": "37-cracker-dip", "38": "38-alone-candle", "39": "39-restaurant-aerial-night", "40": "40-fastfood-night", "41": "41-diner-tension", "42": "42-burger-parking", "43": "43-patty-flame", "44": "44-dishwashing", "45": "45-cash-tip-bar", "46": "46-cafe-workers-neon", "47": "47-tablet-cafe", "48": "48-table-setting", "49": "49-friends-toast", "50": "50-elderly-pay-waiter", "51": "51-chef-focused", "52": "52-waiter-thumbs", "53": "53-wm-chilis-cc0", "54": "54-wm-chilis-chico", "55": "55-wm-chilis-sign", "56": "56-wm-wendys", "57": "57-wm-former-wendys", "58": "58-wm-bahama", "59": "59-wm-smokey", "60": "60-wm-bk-houston", "61": "61-wm-closed-fudd", "62": "62-wm-closed-boston", "63": "63-empty-restaurant", "64": "64-empty-tables", "65": "65-facepalm", "66": "66-shocked-man", "67": "67-empty-drive-thru", "68": "68-woman-upset", "69": "69-empty-cafe", "70": "70-pos-woman", "71": "71-tap-pay", "72": "72-menu-glass", "73": "73-soda-pour", "74": "74-menu-hands", "75": "75-frustrated-man", "76": "76-empty-wallet", "77": "77-shrug", "78": "78-live-cbs-closed", "79": "79-live-fox5-shutters", "80": "80-live-chilis-pepper", "81": "81-live-chilis-pepper2", "82": "82-live-abc-ceo", "83": "83-live-abc-statement", "84": "84-live-chilis-price"};
const LENS: Record<number, number> = {"1": 14.0, "2": 8.23, "3": 6.27, "4": 8.7, "5": 14.0, "6": 13.93, "7": 5.8, "8": 7.2, "9": 14.0, "10": 6.8, "11": 9.0, "12": 12.4, "13": 14.0, "14": 11.37, "15": 14.0, "16": 14.0, "17": 14.0, "18": 14.0, "19": 9.73, "20": 14.0, "21": 13.27, "22": 14.0, "23": 14.0, "24": 14.0, "25": 14.0, "26": 14.0, "27": 11.13, "28": 14.0, "29": 8.67, "30": 5.83, "31": 10.0, "32": 8.67, "33": 14.0, "34": 14.0, "35": 10.33, "36": 14.0, "37": 2.77, "38": 14.0, "39": 14.0, "40": 12.9, "41": 14.0, "42": 13.13, "43": 14.0, "44": 14.0, "45": 8.23, "46": 14.0, "47": 14.0, "48": 14.0, "49": 14.0, "50": 14.0, "51": 14.0, "52": 8.47, "53": 14.0, "54": 14.0, "55": 14.0, "56": 14.0, "57": 14.0, "58": 14.0, "59": 14.0, "60": 14.0, "61": 14.0, "62": 14.0, "63": 12.1, "64": 9.07, "65": 12.53, "66": 14.0, "67": 11.87, "68": 14.0, "69": 8.7, "70": 14.0, "71": 6.8, "72": 14.0, "73": 8.47, "74": 11.03, "75": 14.0, "76": 14.0, "77": 14.0, "78": 4.9, "79": 8.03, "80": 4.03, "81": 2.23, "82": 6.53, "83": 5.03};
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/t10/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 });
setClips(CLIP_FN);

type Beat = { from: number; to: number; tag?: [number, string, boolean]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 14.86, back: null, el: (<>
<Evidence src="evidence/t10/reddit-receipt.png" size={[940, 1244]} dur={14.86} frame="paper" marks={[{ x: 134, y: 766, w: 536, h: 44, at: 1.92 }, { x: 190, y: 806, w: 480, h: 44, at: 4.22 }, { x: 150, y: 926, w: 530, h: 48, at: 12.24 }]} focus={{ x: 0, y: 0, w: 940, h: 1244 }} zoom={0.62} source="REDDIT · r/EndTipping · OCT 2026 · SERVER'S NAME BLURRED" /><Center x={960} y={960}><In at={13.34} from="fade"><Plate6 at={13.34}><Label6 at={13.34} size={44} color={C6.loss}>ADMIN FEE · 83¢</Label6></Plate6></In></Center>
</>) },
  { from: 14.86, to: 18.02, back: (<><Stock6 n={30} dur={3.16} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={44} color={C6.ink}>DENVER, COLORADO</Label6></Plate6></In></Center>
</>) },
  { from: 18.02, to: 22.3, back: null, el: (<>
<Evidence src="evidence/t10/fox-earls.png" size={[2880, 1800]} dur={4.28} frame="screen" marks={[{ x: 702, y: 601, w: 78, h: 42, at: 2.56 }]} focus={{ x: 60, y: 180, w: 1640, h: 900 }} zoom={0.9} source="FOX NEWS · NOV 2026" url="foxnews.com" />
</>) },
  { from: 22.3, to: 30.04, back: null, el: (<>
<Evidence src="evidence/t10/reddit-post.png" size={[1554, 1570]} dur={7.74} frame="screen" marks={[{ x: 70, y: 1476, w: 524, h: 40, at: 2.58 }, { x: 586, y: 1516, w: 200, h: 40, at: 5.6 }]} focus={{ x: 70, y: 1476, w: 524, h: 40 }} zoom={1.4} source="REDDIT · r/EndTipping · OCT 2026 · USERNAME HIDDEN" url="reddit.com" />
</>) },
  { from: 30.04, to: 35.7, back: null, el: (<>
<Center y={440}><Words text="$14 → $31" at={0.15} size={200} hl={["$31"]} /></Center><Center x={960} y={760}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={34} color={C6.ink}>LAST TIME: ONE BURGER, FROM THE MENU TO THE TERMINAL</Label6></Plate6></In></Center>
</>) },
  { from: 35.7, to: 42.84, back: (<><Stock6 n={61} dur={7.14} dim={0} graphics={true} />
<Stock6 n={39} from={5.2} dur={7.14} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.2} from="fade"><Plate6 at={5.2}><Label6 at={5.2} size={56} color={C6.accent}>THEY'RE EMPTYING RESTAURANTS</Label6></Plate6></In></Center>
</>) },
  { from: 42.84, to: 51.74, back: null, el: (<>
<Center x={820} y={500}><DiningRoom at={0.05} from={0.53} to={0.39} toAt={7.7} pctFrom="53%" pctTo="39%" label="AMERICANS WHO EAT AT A RESTAURANT AT LEAST ONCE A WEEK · GALLUP" w={1000} /></Center><Center x={360} y={980}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={36} color={C6.ink}>2019</Label6></Plate6></In></Center><Center x={1560} y={980}><In at={5.22} from="fade"><Plate6 at={5.22}><Label6 at={5.22} size={36} color={C6.loss}>2026</Label6></Plate6></In></Center>
</>) },
  { from: 51.74, to: 54.92, back: null, el: (<>
<Evidence src="evidence/t10/fox5-gallup.png" size={[2880, 1800]} dur={3.18} frame="screen" marks={[{ x: 151, y: 593, w: 67, h: 34, at: 0.42 }]} zoom={0.9} source="FOX 5 ATLANTA · GALLUP, JULY 2026" url="fox5atlanta.com" />
</>) },
  { from: 54.92, to: 62.68, back: (<><Stock6 n={5} dur={7.76} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.82} out={6.08} from="fade"><Plate6 at={2.82}><Label6 at={2.82} size={46} color={C6.ink}>EVERYTHING GOT EXPENSIVE</Label6></Plate6></In></Center><Center x={960} y={880}><In at={6.08} from="fade"><Plate6 at={6.08}><Label6 at={6.08} size={46} color={C6.accent}>…ONLY HALF THE STORY</Label6></Plate6></In></Center>
</>) },
  { from: 62.68, to: 65.58, back: (<><Stock6 n={9} dur={2.9} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={38} color={C6.ink}>THE OTHER HALF: WHAT RESTAURANTS DID ABOUT IT</Label6></Plate6></In></Center>
</>) },
  { from: 65.58, to: 75.84, back: (<><Stock6 n={16} dur={10.26} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.54} out={5.4} from="fade"><Plate6 at={1.54}><Label6 at={1.54} size={42} color={C6.accent}>ONE BIG CHAIN DID THE EXACT OPPOSITE</Label6></Plate6></In></Center><Center x={960} y={880}><In at={5.4} from="fade"><Plate6 at={5.4}><Label6 at={5.4} size={42} color={C6.ink}>…AND PACKED ITS DINING ROOMS</Label6></Plate6></In></Center>
</>) },
  { from: 75.84, to: 80.18, tag: [2, "The Fee", true], hard: true, back: (<><Stock6 n={51} dur={4.34} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={44} color={C6.ink}>THEIR COSTS ARE REAL</Label6></Plate6></In></Center>
</>) },
  { from: 80.18, to: 86.98, tag: [2, "The Fee", false], back: null, el: (<>
<Evidence src="evidence/t10/nra-costs2.png" size={[2880, 1800]} dur={6.8} frame="screen" marks={[{ x: 1265, y: 601, w: 80, h: 48, at: 3.9 }]} zoom={0.9} source="NATIONAL RESTAURANT ASSOCIATION" url="restaurant.org" /><Center x={960} y={960}><In at={3.9} from="fade"><Plate6 at={3.9}><Label6 at={3.9} size={32} color={C6.accent}>COST OF RUNNING A RESTAURANT: +36% SINCE BEFORE THE PANDEMIC</Label6></Plate6></In></Center>
</>) },
  { from: 86.98, to: 94.14, back: null, el: (<>
<Center y={470}><Donut6 at={0.1} pct={42} center="42%" label="OF RESTAURANTS: NO PROFIT LAST YEAR" color={C6.loss} /></Center><Source6 at={0.4}>National Restaurant Association · via WTOP, Feb 2026</Source6>
</>) },
  { from: 94.14, to: 105.46, back: null, el: (<>
<Center y={480}><ForkRoad at={0.1} bAt={5.98} hlAt={8.68} /></Center>
</>) },
  { from: 105.46, to: 113.94, back: null, el: (<>
<Center x={960} y={150}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={36} color={C6.accent}>DOOR NUMBER TWO</Label6></Plate6></In></Center><Center y={540}><FeeStamps fees={[{ text: "SERVICE FEE", at: 2.4 }, { text: "KITCHEN APPRECIATION FEE", at: 3.7 }, { text: "OPERATIONS CHARGE", at: 5.16 }, { text: "ADMIN FEE", at: 7.16, red: true }]} /></Center>
</>) },
  { from: 113.94, to: 123.36, back: (<><Stock6 n={36} dur={9.42} dim={0} graphics={true} />
<Stock6 n={37} from={5.64} dur={9.42} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.34} out={5.64} from="fade"><Plate6 at={1.34}><Label6 at={1.34} size={36} color={C6.ink}>A MINNESOTA BAR · +5% FOR EMPLOYEE HEALTH CARE</Label6></Plate6></In></Center><Center x={960} y={880}><In at={5.64} from="fade"><Plate6 at={5.64}><Label6 at={5.64} size={52} color={C6.accent}>+$1.00 · EXTRA CRACKERS</Label6></Plate6></In></Center><Source6 at={0.4}>Restaurant Business · 2026</Source6>
</>) },
  { from: 123.36, to: 130.14, back: (<><Stock6 n={29} dur={6.78} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} out={1.96} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={46} color={C6.ink}>ON PAPER: GENIUS</Label6></Plate6></In></Center><Center x={960} y={880}><In at={1.96} from="fade"><Plate6 at={1.96}><Label6 at={1.96} size={46} color={C6.accent}>THE MENU STILL SAYS $24.75</Label6></Plate6></In></Center>
</>) },
  { from: 130.14, to: 134.86, back: (<><Stock6 n={27} dur={4.72} dim={0} graphics={true} />
<Stock6 n={68} from={2.02} dur={4.72} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.02} from="fade"><Plate6 at={2.02}><Label6 at={2.02} size={44} color={C6.ink}>THE CUSTOMER STILL READS THE RECEIPT</Label6></Plate6></In></Center>
</>) },
  { from: 134.86, to: 143.4, back: (<><Stock6 n={26} dur={8.54} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={36} color={C6.ink}>TECHNOMIC · 1,000 DINERS · AN AUTOMATIC FEE ON THE BILL</Label6></Plate6></In></Center><Source6 at={0.4}>Technomic survey · via Restaurant Business</Source6>
</>) },
  { from: 143.4, to: 148.74, back: null, el: (<>
<Center y={450}><Donut6 at={0.1} pct={40} center="40%" label="“I’D BE LESS LIKELY TO COME BACK”" /></Center><Source6 at={0.4}>Technomic survey · via Restaurant Business</Source6>
</>) },
  { from: 148.74, to: 154.54, back: null, el: (<>
<Evidence src="evidence/t10/rb-technomic2.png" size={[2880, 1800]} dur={5.8} frame="screen" marks={[{ x: 916, y: 603, w: 310, h: 150, at: 4.1 }]} zoom={0.9} source="RESTAURANT BUSINESS · ROBERT BYRNE, TECHNOMIC" url="restaurantbusinessonline.com" />
</>) },
  { from: 154.54, to: 160.08, back: null, el: (<>
<Evidence src="evidence/t10/reddit-receipt.png" size={[940, 1244]} dur={5.54} frame="paper" marks={[{ x: 150, y: 926, w: 530, h: 48, at: 4.24 }]} focus={{ x: 150, y: 926, w: 530, h: 48 }} zoom={1.3} source="REDDIT · r/EndTipping · OCT 2026" />
</>) },
  { from: 160.08, to: 162.86, back: (<><Stock6 n={38} dur={2.78} dim={0.2} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={56} color={C6.accent}>IT COSTS THE RESTAURANT YOU</Label6></Plate6></In></Center>
</>) },
  { from: 162.86, to: 167.14, back: (<><Stock6 n={50} dur={4.28} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.04} from="fade"><Plate6 at={3.04}><Label6 at={3.04} size={46} color={C6.accent}>TRICK #1 · YOU CAN JUST ASK</Label6></Plate6></In></Center>
</>) },
  { from: 167.14, to: 178.26, back: (<><Stock6 n={52} dur={11.12} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={8.42} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={30} color={C6.accent}>A CHICAGO RESTAURANT GROUP TO ABC 7: “ON REQUEST, THE CHARGE WILL BE REMOVED”</Label6></Plate6></In></Center><Source6 at={0.3}>ABC 7 Chicago</Source6><Center x={960} y={880}><In at={8.42} from="fade"><Plate6 at={8.42}><Label6 at={8.42} size={44} color={C6.accent}>MOST PEOPLE NEVER ASK</Label6></Plate6></In></Center>
</>) },
  { from: 178.26, to: 183.76, tag: [3, "The Screen", true], hard: true, back: (<><Stock6 n={8} dur={5.5} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.86} from="fade"><Plate6 at={3.86}><Label6 at={3.86} size={52} color={C6.accent}>THE SCREEN WAS</Label6></Plate6></In></Center>
</>) },
  { from: 183.76, to: 191.72, back: null, el: (<>
<Center y={500}><TipScreen at={0.1} total="" label="" sub="ADD A TIP?" w={600} /></Center><Center x={960} y={990}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={22} color={C6.mint}>ILLUSTRATION</Label6></Plate6></In></Center>
</>) },
  { from: 191.72, to: 197.5, back: (<><Stock6 n={10} dur={5.78} dim={0} graphics={true} />
<Stock6 n={47} from={3.08} dur={5.78} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.08} from="fade"><Plate6 at={3.08}><Label6 at={3.08} size={46} color={C6.ink}>YOU ORDERED IT. YOU CARRIED IT.</Label6></Plate6></In></Center>
</>) },
  { from: 197.5, to: 206.92, back: null, el: (<>
<Center y={470}><TwoBars at={0.1} a={{ label: "A YEAR EARLIER", value: "35%", v: 35 }} b={{ label: "2025", value: "41%", v: 41, color: C6.loss, at: 2.9 }} h={440} /></Center><Center x={960} y={940}><In at={5.18} from="fade"><Plate6 at={5.18}><Label6 at={5.18} size={34} color={C6.accent}>“TIPPING CULTURE IS OUT OF CONTROL”</Label6></Plate6></In></Center><Source6 at={0.4}>Bankrate survey · 2025</Source6>
</>) },
  { from: 206.92, to: 212.22, back: (<><Stock6 n={70} dur={5.3} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.46} from="fade"><Plate6 at={0.46}><Label6 at={0.46} size={40} color={C6.accent}>~2 IN 5: THE PRE-SET TIP SCREEN BUGS THEM</Label6></Plate6></In></Center><Source6 at={0.4}>Bankrate · 2025</Source6>
</>) },
  { from: 212.22, to: 222.36, back: null, el: (<>
<Evidence src="evidence/t10/rd-popmenu.png" size={[2880, 1800]} dur={10.14} frame="screen" marks={[{ x: 678, y: 592, w: 176, h: 98, at: 5.46 }]} zoom={0.9} source="RESTAURANT DIVE · POPMENU SURVEY, 2026" url="restaurantdive.com" /><Center x={960} y={960}><In at={5.46} from="fade"><Plate6 at={5.46}><Label6 at={5.46} size={34} color={C6.accent}>35% OF DINERS CUT HOW OFTEN OR HOW MUCH THEY TIP</Label6></Plate6></In></Center>
</>) },
  { from: 222.36, to: 227.52, back: (<><Stock6 n={28} dur={5.16} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.18} from="fade"><Plate6 at={3.18}><Label6 at={3.18} size={46} color={C6.accent}>NOW IT'S SQUEEZING THE SERVER</Label6></Plate6></In></Center>
</>) },
  { from: 227.52, to: 238.14, back: (<><Stock6 n={35} dur={10.62} dim={0.55} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} out={4.08} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={40} color={C6.ink}>THE FEES MAKE IT WORSE</Label6></Plate6></In></Center><Center y={440}><BigNum at={4.08} size={220} label="THINK A SERVICE FEE IS THE TIP · TECHNOMIC">25%+</BigNum></Center>
</>) },
  { from: 238.14, to: 248.26, back: null, el: (<>
<Center x={960} y={200}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={40} color={C6.accent}>IT ISN'T THE TIP</Label6></Plate6></In></Center><Center y={480}><ThreeMoves steps={[{ word: "FEE", sub: "the owner adds", at: 3.94 }, { word: "NO TIP", sub: "the customer skips", at: 5.2 }, { word: "LESS", sub: "for the server", at: 8.34 }]} /></Center>
</>) },
  { from: 248.26, to: 251.44, back: (<><Stock6 n={44} dur={3.18} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.05} out={1.62} from="fade"><Plate6 at={0.05}><Label6 at={0.05} size={50} color={C6.ink}>EVERYBODY LOSES</Label6></Plate6></In></Center><Center x={960} y={880}><In at={1.62} from="fade"><Plate6 at={1.62}><Label6 at={1.62} size={50} color={C6.accent}>…EXCEPT THE RECEIPT</Label6></Plate6></In></Center>
</>) },
  { from: 251.44, to: 257.36, back: (<><Stock6 n={56} dur={5.92} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.6} from="fade"><Plate6 at={4.6}><Label6 at={4.6} size={40} color={C6.ink}>WENDY'S · FEBRUARY 2024</Label6></Plate6></In></Center><Source6 at={0.3}>Photo: Missvain · CC BY 4.0</Source6>
</>) },
  { from: 257.36, to: 264.84, back: (<><Stock6 n={82} dur={7.48} dim={0} graphics={false} /></>), el: (<>
<Source6 at={0.3}>Footage: ABC News · 2024</Source6>
</>) },
  { from: 264.84, to: 268.42, back: null, el: (<>
<Evidence src="evidence/t10/axios-wendys.png" size={[2880, 1800]} dur={3.58} frame="screen" marks={[{ x: 653, y: 596, w: 1476, h: 225, at: 2.26 }]} zoom={0.9} source="AXIOS · FEB 28, 2024" url="axios.com" />
</>) },
  { from: 268.42, to: 272.6, back: (<><Stock6 n={33} dur={4.18} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} out={2.06} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={40} color={C6.ink}>A BURGER THAT COSTS MORE AT LUNCH</Label6></Plate6></In></Center><Center x={960} y={880}><In at={2.06} from="fade"><Plate6 at={2.06}><Label6 at={2.06} size={46} color={C6.accent}>…LIKE AN UBER IN THE RAIN</Label6></Plate6></In></Center>
</>) },
  { from: 272.6, to: 278.78, back: (<><Stock6 n={83} dur={6.18} dim={0} graphics={false} /></>), el: (<>
<Source6 at={0.3}>Footage: ABC News · 2024</Source6>
</>) },
  { from: 278.78, to: 283.52, back: null, el: (<>
<Evidence src="evidence/t10/nbc-surge.png" size={[2880, 1800]} dur={4.74} frame="screen" marks={[{ x: 266, y: 654, w: 254, h: 40, at: 2.54 }]} zoom={0.9} source="NBC CHICAGO · FEB 2024" url="nbcchicago.com" /><Center x={960} y={960}><In at={2.54} from="fade"><Plate6 at={2.54}><Label6 at={2.54} size={40} color={C6.accent}>BURGER KING: “NO URGE TO SURGE”</Label6></Plate6></In></Center>
</>) },
  { from: 283.52, to: 291.74, back: (<><Stock6 n={62} dur={8.22} dim={0} graphics={true} />
<Stock6 n={6} from={6.32} dur={8.22} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.6} out={6.32} from="fade"><Plate6 at={4.6}><Label6 at={4.6} size={44} color={C6.ink}>THEY DON'T MAKE A SCENE</Label6></Plate6></In></Center><Center x={960} y={880}><In at={6.32} from="fade"><Plate6 at={6.32}><Label6 at={6.32} size={60} color={C6.accent}>THEY LEAVE.</Label6></Plate6></In></Center>
</>) },
  { from: 291.74, to: 298.46, tag: [4, "The Exit", true], hard: true, back: (<><Stock6 n={7} dur={6.72} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.14} from="fade"><Plate6 at={3.14}><Label6 at={3.14} size={38} color={C6.ink}>RESTAURANT PRICES CLIMB FASTER THAN GROCERIES</Label6></Plate6></In></Center>
</>) },
  { from: 298.46, to: 304.64, tag: [4, "The Exit", false], back: null, el: (<>
<Center y={470}><TwoLines at={0.2} aAt={0.98} bAt={4.6} /></Center>
</>) },
  { from: 304.64, to: 309.24, back: (<><Stock6 n={11} dur={4.6} dim={0} graphics={true} />
<Stock6 n={13} from={2.4} dur={4.6} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.4} from="fade"><Plate6 at={2.4}><Label6 at={2.4} size={42} color={C6.ink}>YOUR OWN KITCHEN LOOKS A LITTLE BETTER</Label6></Plate6></In></Center>
</>) },
  { from: 309.24, to: 313.7, back: null, el: (<>
<Center y={450}><Donut6 at={0.1} pct={60} center="6 in 10" label="AMERICANS EATING OUT LESS OFTEN" /></Center><Source6 at={0.4}>Popmenu surveys · 2026</Source6>
</>) },
  { from: 313.7, to: 320.36, back: (<><Stock6 n={48} dur={6.66} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.32} out={3.88} from="fade"><Plate6 at={1.32}><Label6 at={1.32} size={50} color={C6.accent}>CUT THE MOST: DINNER</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.88} from="fade"><Plate6 at={3.88}><Label6 at={3.88} size={40} color={C6.ink}>THE ONE WITH THE TIP SCREEN AND THE FEE</Label6></Plate6></In></Center>
</>) },
  { from: 320.36, to: 323.86, back: (<><Stock6 n={67} dur={3.5} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={38} color={C6.ink}>FIRST TO GO: THE ONES WITH THE LEAST TO SPARE</Label6></Plate6></In></Center>
</>) },
  { from: 323.86, to: 332.68, back: (<><Stock6 n={27} dur={8.82} dim={0} graphics={true} /></>), el: (<>
<Source6 at={0.3}>McDonald's CEO, Q1 2025 call · via Axios</Source6><Center x={960} y={880}><In at={7.48} from="fade"><Plate6 at={7.48}><Label6 at={7.48} size={32} color={C6.accent}>McDONALD'S CEO: LOW-INCOME FAST FOOD VISITS DOWN NEARLY DOUBLE DIGITS</Label6></Plate6></In></Center>
</>) },
  { from: 332.68, to: 336.0, back: (<><Stock6 n={18} dur={3.32} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={42} color={C6.ink}>MIDDLE-INCOME VISITS: ALMOST AS MUCH</Label6></Plate6></In></Center>
</>) },
  { from: 336.0, to: 337.9, back: (<><Stock6 n={78} dur={1.9} dim={0} graphics={false} /></>), el: (<>
<Source6 at={0.3}>Footage: CBS News · 2026</Source6>
</>) },
  { from: 337.9, to: 343.28, back: (<><Stock6 n={79} dur={5.38} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={150}><In at={1.1} from="fade"><Plate6 at={1.1}><Label6 at={1.1} size={36} color={C6.accent}>WENDY'S: CLOSING 5–6% OF U.S. STORES</Label6></Plate6></In></Center><Source6 at={0.3}>Footage: FOX 5 New York</Source6>
</>) },
  { from: 343.28, to: 349.34, back: null, el: (<>
<Evidence src="evidence/t10/wsb-wendys.png" size={[2880, 1800]} dur={6.06} frame="screen" zoom={0.9} source="WSB-TV · FEB 2026" url="wsbtv.com" /><Center x={960} y={960}><In at={0.1} out={2.36} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={46} color={C6.accent}>≈300 PLACES</Label6></Plate6></In></Center><Center x={960} y={960}><In at={3.16} from="fade"><Plate6 at={3.16}><Label6 at={3.16} size={42} color={C6.ink}>+240 ALREADY CLOSED IN 2024</Label6></Plate6></In></Center>
</>) },
  { from: 349.34, to: 358.04, back: (<><Stock6 n={58} dur={8.7} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.36} out={5.7} from="fade"><Plate6 at={2.36}><Label6 at={2.36} size={40} color={C6.accent}>BAHAMA BREEZE · 14 CLOSED FOR GOOD · APRIL 5</Label6></Plate6></In></Center><Center x={960} y={880}><In at={5.7} from="fade"><Plate6 at={5.7}><Label6 at={5.7} size={38} color={C6.ink}>THE OTHER 14 → OTHER DARDEN RESTAURANTS</Label6></Plate6></In></Center><Source6 at={0.3}>Photo: Nielsoncaetanosalmeron · CC BY 4.0</Source6>
</>) },
  { from: 358.04, to: 361.82, back: null, el: (<>
<Evidence src="evidence/t10/ibt-smokey.png" size={[2880, 1800]} dur={3.78} frame="screen" marks={[{ x: 688, y: 524, w: 350, h: 72, at: 1.74 }]} zoom={0.9} source="IBTIMES · APRIL 2026" url="ibtimes.co.uk" /><Center x={960} y={960}><In at={1.74} from="fade"><Plate6 at={1.74}><Label6 at={1.74} size={32} color={C6.accent}>SMOKEY BONES' PARENT COMPANY · CHAPTER 11 · JANUARY 2026</Label6></Plate6></In></Center>
</>) },
  { from: 361.82, to: 366.98, back: (<><Stock6 n={34} dur={5.16} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={44} color={C6.ink}>ONE MORE NUMBER</Label6></Plate6></In></Center>
</>) },
  { from: 366.98, to: 374.32, back: null, el: (<>
<Center x={960} y={200}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={36} color={C6.ink}>EAT OUT ONLY A FEW TIMES A YEAR</Label6></Plate6></In></Center><Center x={620} y={500}><BigNum at={1.34} size={180} label="2019">1 in 10</BigNum></Center><Center x={1300} y={500}><BigNum at={4.96} size={180} color={C6.loss} label="2026">1 in 5</BigNum></Center><Source6 at={0.4}>Gallup · via Fox News / NewsNation</Source6>
</>) },
  { from: 374.32, to: 380.56, back: (<><Stock6 n={12} dur={6.24} dim={0} graphics={true} />
<Stock6 n={32} from={2.5} dur={6.24} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.76} from="fade"><Plate6 at={3.76}><Label6 at={3.76} size={50} color={C6.accent}>A CUSTOMER WHO LEARNED TO COOK</Label6></Plate6></In></Center>
</>) },
  { from: 380.56, to: 389.46, back: (<><Stock6 n={46} dur={8.9} dim={0.0} graphics={true} /></>), el: (<>
<Subscribe6 at={4.08} /><Center x={960} y={990}><In at={5.06} from="fade"><Plate6 at={5.06}><Label6 at={5.06} size={32} color={C6.accent}>EVERY WEEK · ONE BILL · LINE BY LINE</Label6></Plate6></In></Center>
</>) },
  { from: 389.46, to: 396.32, tag: [5, "The Opposite", true], hard: true, back: null, el: (<>
<Center x={960} y={500}><DiningRoom at={0.05} from={0.39} fillAt={5.74} label="IF EVERYBODY IS LOSING CUSTOMERS…" w={1000} /></Center>
</>) },
  { from: 396.32, to: 400.68, back: (<><Stock6 n={42} dur={4.36} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>JULY 2026 · A POST ON X</Label6></Plate6></In></Center><Source6 at={0.4}>ILLUSTRATIVE FOOTAGE</Source6>
</>) },
  { from: 400.68, to: 406.2, back: null, el: (<>
<Center x={960} y={300}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={38} color={C6.ink}>A BACON KING MEAL · BURGER KING MENU</Label6></Plate6></In></Center><Center y={520}><Words text="$18.19" at={3.0} size={220} hl={["$18.19"]} /></Center><Source6 at={0.4}>Price as posted on X · via Fox News, July 2026</Source6>
</>) },
  { from: 406.2, to: 410.36, back: null, el: (<>
<Center y={430}><Words text="“Why should I get this when I could just go to a restaurant?”" at={1.18} size={78} maxW={1500} hl={["restaurant?\u201d"]} /></Center><Center y={690}><Label6 at={1.18} size={30} color={C6.mint}>A BURGER KING CUSTOMER ON X · VIA FOX NEWS</Label6></Center>
</>) },
  { from: 410.36, to: 413.44, back: (<><Stock6 n={54} dur={3.08} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.24} from="fade"><Plate6 at={2.24}><Label6 at={2.24} size={60} color={C6.accent}>CHILI'S</Label6></Plate6></In></Center><Source6 at={0.3}>Photo: Frank Schulenburg · CC BY-SA 4.0</Source6>
</>) },
  { from: 413.44, to: 419.2, back: null, el: (<>
<Center x={960} y={200}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={36} color={C6.accent}>CHILI'S, ON X</Label6></Plate6></In></Center><Center y={430}><Words text="“Why do y’all let fast food play you like this?”" at={0.2} size={86} maxW={1500} hl={["play", "you"]} /></Center><Center y={690}><Label6 at={0.2} size={30} color={C6.mint}>CHILI'S, REPLYING ON X · JULY 2026</Label6></Center>
</>) },
  { from: 419.2, to: 425.74, back: (<><Stock6 n={22} dur={6.54} dim={0} graphics={true} />
<Stock6 n={21} from={3.48} dur={6.54} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} out={5.2} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={32} color={C6.ink}>SANDWICH · FRIES · BOTTOMLESS CHIPS & SALSA · UNLIMITED DRINK</Label6></Plate6></In></Center><Center x={960} y={880}><In at={5.2} from="fade"><Plate6 at={5.2}><Label6 at={5.2} size={80} color={C6.money}>$10.99</Label6></Plate6></In></Center>
</>) },
  { from: 425.74, to: 429.54, back: null, el: (<>
<Center y={470}><ViewCount at={0.15} /></Center><Source6 at={0.4}>Fox News · July 2026</Source6>
</>) },
  { from: 429.54, to: 440.72, back: (<><Stock6 n={53} dur={11.18} dim={0} graphics={true} />
<Stock6 n={84} from={4.54} dur={11.18} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={4.54} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={38} color={C6.ink}>EVERYONE ELSE: MONEY IN THE FINE PRINT</Label6></Plate6></In></Center><Center x={960} y={150}><In at={4.54} from="fade"><Plate6 at={4.54}><Label6 at={4.54} size={36} color={C6.accent}>CHILI'S: ONE PRICE · GIANT LETTERS</Label6></Plate6></In></Center><Source6 at={4.54}>Chili's TV ad · 2024</Source6>
</>) },
  { from: 440.72, to: 450.26, back: null, el: (<>
<Evidence src="evidence/t10/fox-chilis-60.png" size={[2880, 1800]} dur={9.54} frame="screen" marks={[{ x: 1084, y: 601, w: 66, h: 42, at: 5.94 }]} zoom={0.9} source="FOX NEWS · FINANCEBUZZ ANALYSIS, 2014–2024" url="foxnews.com" /><Center x={960} y={960}><In at={5.94} from="fade"><Plate6 at={5.94}><Label6 at={5.94} size={34} color={C6.accent}>BIG FAST FOOD CHAINS: PRICES UP ~60% IN A DECADE</Label6></Plate6></In></Center>
</>) },
  { from: 450.26, to: 453.78, back: (<><Stock6 n={25} dur={3.52} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.3} from="fade"><Plate6 at={2.3}><Label6 at={2.3} size={46} color={C6.accent}>2024 · CHILI'S PICKS A FIGHT</Label6></Plate6></In></Center>
</>) },
  { from: 453.78, to: 460.44, back: (<><Stock6 n={24} dur={6.66} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.96} from="fade"><Plate6 at={1.96}><Label6 at={1.96} size={38} color={C6.accent}>2× THE BEEF OF A BIG MAC · ACCORDING TO CHILI'S</Label6></Plate6></In></Center>
</>) },
  { from: 460.44, to: 469.5, back: (<><Stock6 n={80} dur={9.06} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={120}><In at={7.2} from="fade"><Plate6 at={7.2}><Label6 at={7.2} size={36} color={C6.accent}>“WE DON'T HAVE TO PAY FOR ANY MASCOTS”</Label6></Plate6></In></Center><Source6 at={0.3}>Chili's TV ad · 2024</Source6>
</>) },
  { from: 469.5, to: 479.82, back: null, el: (<>
<Center x={620} y={430}><BigNum at={0.1} size={190} color={C6.money} label="SALES">+24%</BigNum></Center><Center x={1300} y={430}><BigNum at={7.6} size={190} color={C6.money} label="GUESTS">+16%</BigNum></Center><Center x={960} y={900}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={32} color={C6.ink}>CHILI'S · APRIL–JUNE 2025 · SAME RESTAURANTS</Label6></Plate6></In></Center><Source6 at={0.4}>Brinker earnings · via Restaurant Business</Source6>
</>) },
  { from: 479.82, to: 484.78, back: null, el: (<>
<Center x={620} y={430}><BigNum at={0.1} size={190} color={C6.money} label="SALES">+21%</BigNum></Center><Center x={1300} y={430}><BigNum at={2.78} size={190} color={C6.money} label="GUESTS">+13%</BigNum></Center><Center x={960} y={900}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={32} color={C6.ink}>THE NEXT QUARTER</Label6></Plate6></In></Center><Source6 at={0.4}>Brinker Q1 FY2026 call</Source6>
</>) },
  { from: 484.78, to: 492.16, back: (<><Stock6 n={48} dur={7.38} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={36} color={C6.ink}>EVERYONE ELSE: FEWER CUSTOMERS, MONTH AFTER MONTH</Label6></Plate6></In></Center>
</>) },
  { from: 492.16, to: 498.66, back: (<><Stock6 n={55} dur={6.5} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} out={3.52} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={50} color={C6.ink}>NOT A CHARITY</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.52} from="fade"><Plate6 at={3.52}><Label6 at={3.52} size={40} color={C6.ink}>2026: GROWTH COOLED · PRICES UP TOO</Label6></Plate6></In></Center><Source6 at={0.3}>Photo: Michael Rivera · CC BY-SA 4.0</Source6>
</>) },
  { from: 498.66, to: 505.22, back: null, el: (<>
<Center x={620} y={460}><BigNum at={0.54} size={180} label="EAT OFF THE 3 FOR ME MENU">1 in 5</BigNum></Center><Center x={1300} y={460}><BigNum at={4.24} size={180} label="PICK THE $10.99 VERSION">1 in 8</BigNum></Center><Source6 at={0.4}>Brinker Q3 FY2026 call · via Motley Fool</Source6>
</>) },
  { from: 505.22, to: 509.82, back: (<><Stock6 n={21} dur={4.6} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.05} out={1.92} from="fade"><Plate6 at={0.05}><Label6 at={0.05} size={50} color={C6.accent}>$10.99 = THE BAIT</Label6></Plate6></In></Center><Center x={960} y={880}><In at={1.92} from="fade"><Plate6 at={1.92}><Label6 at={1.92} size={46} color={C6.ink}>EVERYTHING ELSE = THE BUSINESS</Label6></Plate6></In></Center>
</>) },
  { from: 509.82, to: 519.62, back: null, el: (<>
<Center x={960} y={220}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={44} color={C6.ink}>BAIT YOU CAN SEE</Label6></Plate6></In></Center><Center y={470}><Words text="A number you can check." at={3.68} size={120} hl={["check."]} /></Center><Center x={960} y={860}><In at={7.02} from="fade"><Plate6 at={7.02}><Label6 at={7.02} size={38} color={C6.accent}>THAT'S WHAT PEOPLE WERE STARVING FOR</Label6></Plate6></In></Center>
</>) },
  { from: 519.62, to: 529.8, tag: [6, "Your Move", true], hard: true, back: null, el: (<>
<Evidence src="evidence/t10/reddit-post.png" size={[1554, 1570]} dur={10.18} frame="screen" marks={[{ x: 474, y: 996, w: 536, h: 44, at: 3.5 }, { x: 530, y: 1036, w: 480, h: 44, at: 4.06 }, { x: 490, y: 1156, w: 530, h: 48, at: 5.62 }]} zoom={0.55} source="REDDIT · r/EndTipping · OCT 2026" url="reddit.com" /><Center x={960} y={980}><In at={7.58} from="fade"><Plate6 at={7.58}><Label6 at={7.58} size={34} color={C6.accent}>HERE'S HOW YOU DON'T GET PLAYED</Label6></Plate6></In></Center>
</>) },
  { from: 529.8, to: 534.72, back: (<><Stock6 n={29} dur={4.92} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={36} color={C6.accent}>1 · READ THE BOTTOM OF THE MENU — BEFORE YOU ORDER</Label6></Plate6></In></Center>
</>) },
  { from: 534.72, to: 538.46, back: (<><Stock6 n={50} dur={3.74} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={34} color={C6.accent}>2 · A FEE NOBODY TOLD YOU ABOUT? ASK THEM TO TAKE IT OFF</Label6></Plate6></In></Center>
</>) },
  { from: 538.46, to: 543.96, back: null, el: (<>
<Center y={480}><TipScreen at={0.05} total="" label="" sub="ADD A TIP?" w={640} /></Center><Center x={960} y={960}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={34} color={C6.accent}>3 · HIT CUSTOM · TIP ON THE FOOD, NOT THE FEES</Label6></Plate6></In></Center>
</>) },
  { from: 543.96, to: 550.86, back: null, el: (<>
<Center y={520}><Checklist w={1240} items={[{ text: "Read the bottom of the MENU, before you order", at: 0.05 }, { text: "A fee nobody told you about? Ask them to take it off", at: 0.2 }, { text: "Tip screen: hit CUSTOM, tip on the food, not the fees", at: 0.35 }, { text: "Still hiding the price? Don’t go back", at: 5.42 }]} /></Center>
</>) },
  { from: 550.86, to: 556.66, back: (<><Stock6 n={9} dur={5.8} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.28} from="fade"><Plate6 at={2.28}><Label6 at={2.28} size={38} color={C6.accent}>FLORIDA: THESE CHARGES SHOWN BEFORE YOU ORDER</Label6></Plate6></In></Center>
</>) },
  { from: 556.66, to: 563.74, back: (<><Stock6 n={46} dur={7.08} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.82} from="fade"><Plate6 at={2.82}><Label6 at={2.82} size={34} color={C6.accent}>FLORIDA INSPECTORS CITED A DUFFY'S · 3% FEE ON THE RECEIPT</Label6></Plate6></In></Center><Source6 at={0.3}>Fox News · Nov 2026</Source6>
</>) },
  { from: 563.74, to: 566.48, back: null, el: (<>
<Center y={470}><Words text="Fee: dropped." at={0.1} size={150} hl={["dropped."]} /></Center><Center x={960} y={760}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={32} color={C6.ink}>DUFFY'S SPORTS GRILL · SINCE THE CITATION</Label6></Plate6></In></Center>
</>) },
  { from: 566.48, to: 574.28, back: (<><Stock6 n={17} dur={7.8} dim={0} graphics={true} />
<Stock6 n={49} from={3.98} dur={7.8} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.94} from="fade"><Plate6 at={5.94}><Label6 at={5.94} size={44} color={C6.accent}>PEOPLE GOT TIRED OF BEING PLAYED</Label6></Plate6></In></Center>
</>) },
  { from: 574.28, to: 577.24, back: null, el: (<>
<Center x={960} y={500}><DiningRoom at={0.05} from={0.25} fillAt={0.2} label="THE PLACES THAT STOP PLAYING WILL GET US BACK" w={1000} /></Center>
</>) },
  { from: 577.24, to: 585.12, back: null, el: (<>
<Center y={440}><Words text="Which restaurant lost you for good?" at={0.1} size={96} maxW={1500} hl={["for", "good?"]} /></Center><Center x={960} y={720}><In at={2.02} from="fade"><Plate6 at={2.02}><Label6 at={2.02} size={40} color={C6.accent}>TELL ME IN THE COMMENTS ↓</Label6></Plate6></In></Center>
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string, number][] = [[0.05, "ep06-receipt", 0.3], [4.22, "ep06-pop", 0.25], [12.24, "ep06-stamp", 0.3], [18.07, "t02-paper", 0.3], [24.88, "ep06-pop", 0.25], [27.9, "ep06-stamp", 0.3], [34.62, "ep06-counter", 0.3], [40.9, "impact", 0.3], [50.54, "ep06-fall", 0.3], [51.79, "t02-paper", 0.3], [57.74, "ep06-pop", 0.25], [67.12, "rise", 0.25], [75.89, "ep06-whoosh", 0.2], [84.08, "ep06-counter", 0.3], [87.08, "ep06-counter", 0.3], [87.3, "impact", 0.25], [97.3, "ep06-pop", 0.25], [100.12, "ep06-pop", 0.25], [102.82, "ding", 0.25], [107.86, "ep06-stamp", 0.22], [109.16, "ep06-stamp", 0.22], [110.62, "ep06-stamp", 0.22], [112.62, "ep06-stamp", 0.3], [115.28, "ep06-pop", 0.25], [119.58, "ep06-kaching", 0.25], [125.32, "ep06-pop", 0.25], [134.91, "t02-paper", 0.3], [143.5, "ep06-counter", 0.3], [146.42, "impact", 0.25], [152.04, "ep06-pop", 0.25], [158.78, "ep06-pop", 0.25], [160.18, "impact", 0.35], [165.9, "ding", 0.3], [167.19, "t02-paper", 0.3], [174.14, "ep06-pop", 0.25], [178.31, "ep06-whoosh", 0.2], [182.12, "ep06-stamp", 0.25], [184.84, "swoosh", 0.25], [189.4, "ep06-pop", 0.2], [189.87, "ep06-pop", 0.2], [190.8, "ep06-pop", 0.2], [200.4, "ep06-counter", 0.3], [204.44, "impact", 0.25], [207.38, "ep06-pop", 0.25], [217.68, "ep06-counter", 0.3], [231.6, "ep06-pop", 0.25], [242.08, "ep06-pop", 0.25], [243.34, "ep06-pop", 0.25], [246.48, "ep06-fall", 0.25], [249.88, "ep06-stamp", 0.3], [261.34, "ep06-pop", 0.25], [267.1, "impact", 0.3], [270.48, "ep06-pop", 0.25], [275.46, "ep06-stamp", 0.25], [281.32, "ding", 0.25], [289.84, "impact", 0.3], [291.79, "ep06-whoosh", 0.2], [299.44, "ep06-pop", 0.25], [303.06, "ep06-pop", 0.25], [310.48, "ep06-counter", 0.3], [315.02, "ep06-stamp", 0.25], [323.91, "t02-paper", 0.3], [331.34, "ep06-fall", 0.25], [336.1, "impact", 0.35], [339.0, "ep06-counter", 0.3], [346.44, "ep06-pop", 0.25], [351.7, "ep06-stamp", 0.3], [359.78, "ep06-stamp", 0.3], [368.32, "ep06-pop", 0.25], [371.94, "ep06-fall", 0.3], [378.08, "ding", 0.25], [384.64, "ding", 0.25], [389.51, "ep06-whoosh", 0.2], [393.84, "rise", 0.3], [403.68, "ep06-kaching", 0.3], [407.38, "ep06-pop", 0.25], [412.6, "ding", 0.3], [416.36, "ep06-pop", 0.25], [424.4, "ep06-kaching", 0.3], [425.84, "ep06-counter", 0.35], [438.2, "ep06-kaching", 0.3], [446.66, "ep06-counter", 0.3], [452.56, "impact", 0.25], [455.74, "ep06-pop", 0.25], [475.48, "ep06-counter", 0.3], [477.1, "ep06-counter", 0.3], [481.06, "ep06-counter", 0.3], [495.68, "ep06-pop", 0.25], [499.2, "ep06-pop", 0.25], [502.9, "ep06-pop", 0.25], [505.27, "ep06-stamp", 0.25], [508.74, "ep06-stamp", 0.25], [513.5, "ding", 0.3], [519.67, "ep06-whoosh", 0.2], [525.24, "ep06-pop", 0.25], [529.9, "ding", 0.25], [534.82, "ding", 0.25], [538.56, "ding", 0.25], [540.08, "click", 0.3], [549.38, "ding", 0.25], [553.14, "ep06-pop", 0.25], [559.48, "ep06-stamp", 0.25], [565.06, "ep06-stamp", 0.3], [574.38, "rise", 0.3], [579.26, "ding", 0.3]];

export const T10Rest: React.FC = () => {
  const { fps } = useVideoConfig();
  setClips(CLIP_FN); // свой набор стоков при каждом рендере: в общем Root последним грузится чужой ролик
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/t10-voiceover.mp3")} volume={0.9} />
      <Sequence from={0} durationInFrames={2293}><Audio src={staticFile("audio/t07/music-c0-open.mp3")} volume={(f) => 0.07 * interpolate(f, [0, 30, 2263, 2293], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={2257} durationInFrames={3109}><Audio src={staticFile("audio/t06/music-c3-fees.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 3079, 3109], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={5330} durationInFrames={3440}><Audio src={staticFile("audio/t08/shady-guise.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 3410, 3440], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={8734} durationInFrames={2968}><Audio src={staticFile("audio/t08/night-falls.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 2938, 2968], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={11666} durationInFrames={3941}><Audio src={staticFile("audio/t06/music-c4-toast.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 3911, 3941], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={15571} durationInFrames={1983}><Audio src={staticFile("audio/t07/music-c5-how.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 1953, 1983], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
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
