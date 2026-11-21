import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Bg6, Bug6, C6, Center, ChapterTag, In, Label6, Meme, Row, Scene6, setClips, Source6, Stock6, Subscribe6, Plate6, Words } from "../brand/hm6";
import { ESL, TagRow, SaleTwins, Disclosure, ListReveal, PhoneJump, PricePair } from "../brand/t05";
import { Drift } from "../brand/t03";
import { Evidence, ArchiveFx } from "../brand/evidence";

// ===================================================================
// T05Prices — сгенерировано cloud/gen/build.py из плана cloud/gen/t05.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const T05PRICES_DURATION_SEC = 562.98;
const CLIPS: Record<number, string> = {"1": "01-eggs-shopper", "2": "02-eggs-macro", "3": "03-eggs-closeup", "4": "04-phone-closeup", "5": "05-shop-online-phone", "6": "06-app-scroll", "7": "07-delivery-door", "8": "08-cart-aisle", "9": "09-shoppers-market", "10": "10-seattle-needle", "11": "11-seattle-aerial", "12": "12-cereal-aisle", "13": "13-snack-aisle", "14": "14-sale-tags", "15": "15-mouse-small", "16": "16-poker-chips", "17": "17-poker-man", "18": "18-pages-flip", "19": "19-stapler-rotating", "20": "20-stapler-close", "21": "21-suburb-drive", "22": "22-highway-villages", "23": "23-hotel-lobby", "24": "24-macbook", "25": "25-parking-aerial", "26": "26-parking-busy", "27": "27-store-exterior", "28": "28-server-cables", "29": "29-boardroom", "30": "30-mouse-hand", "31": "31-dad-baby", "32": "32-plane-taxi", "33": "33-departure-board", "34": "34-dairy-aisle", "35": "35-stock-clerk", "36": "36-milk-carton", "37": "37-chambers", "38": "38-council-mic", "39": "39-phone-dark", "40": "40-rubik", "41": "41-phone-hands", "42": "42-cashier", "43": "43-woman-frustrated", "44": "44-couple-surprised", "45": "45-code-screen", "46": "46-hedge-maze", "47": "47-people-phones", "48": "48-woman-pricetag", "49": "49-suburb-aerial", "50": "50-eye-closeup", "51": "51-nyc-street", "52": "52-woman-bed-phone", "53": "53-supermarket-evening", "54": "54-card-reader", "55": "55-press-newspaper", "56": "56-man-annoyed", "57": "57-confusion", "58": "58-crt-static", "59": "59-thumb-scroll", "60": "60-flight-board"};
const LENS: Record<number, number> = {"1": 10.0, "2": 10.0, "3": 6.67, "4": 7.57, "5": 9.7, "6": 8.9, "7": 8.03, "8": 10.0, "9": 10.0, "10": 7.77, "11": 10.0, "12": 10.0, "13": 4.3, "14": 8.57, "15": 10.0, "16": 8.37, "17": 10.0, "18": 10.0, "19": 10.0, "20": 10.0, "21": 10.0, "22": 9.87, "23": 10.0, "24": 7.0, "25": 10.0, "26": 8.23, "27": 10.0, "28": 10.0, "29": 10.0, "30": 10.0, "31": 10.0, "32": 10.0, "33": 8.57, "34": 10.0, "35": 9.13, "36": 6.73, "37": 10.0, "38": 10.0, "39": 10.0, "40": 10.0, "41": 7.63, "42": 10.0, "43": 10.0, "44": 10.0, "45": 10.0, "46": 10.0, "47": 10.0, "48": 10.0, "49": 10.0, "50": 10.0, "51": 10.0, "52": 10.0, "53": 10.0, "54": 10.0, "55": 10.0, "56": 10.0, "57": 10.0, "58": 10.0, "59": 10.0, "60": 9.13};
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/t05/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 });
setClips(CLIP_FN);

type Beat = { from: number; to: number; tag?: [number, string, boolean]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 6.54, back: (<><Stock6 n={2} dur={6.54} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={880}><In at={1.7} from="fade"><Plate6 at={1.7}><Label6 at={1.7} size={38} color={C6.ink}>ONE DOZEN EGGS · SAME STORE · SAME TIME</Label6></Plate6></In></Center>
</>) },
  { from: 6.54, to: 13.16, back: (<><Stock6 n={3} dur={6.62} dim={0.72} graphics={true} /></>), el: (<>
<Center y={520}><TagRow prices={["$3.99", "$4.28", "$4.59", "$4.69", "$4.79"]} times={[0.05, 1.17, 2.31, 3.45, 4.6]} title="1 dozen eggs" w={310} /></Center>
</>) },
  { from: 13.16, to: 17.44, back: null, el: (<>
<Evidence src="evidence/t05/cr-eggs.png" size={[2880, 1800]} dur={4.28} frame="screen" marks={[{ x: 922, y: 851, w: 657, h: 48, at: 3.16 }]} zoom={0.9} inset={{ src: "evidence/t05/cr-top.png", size: [2880, 1800] }} source="CONSUMER REPORTS · GROUNDWORK · MORE PERFECT UNION · DEC 2025" url="consumerreports.org" />
</>) },
  { from: 17.44, to: 22.7, back: (<><Stock6 n={47} dur={5.26} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.68} from="fade"><Plate6 at={3.68}><Label6 at={3.68} size={44} color={C6.accent}>AND NOBODY TOLD THEM</Label6></Plate6></In></Center>
</>) },
  { from: 22.7, to: 30.3, back: (<><Stock6 n={11} dur={7.6} dim={0} graphics={true} />
<Stock6 n={8} from={1.88} dur={7.6} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.1} from="fade"><Plate6 at={1.1}><Label6 at={1.1} size={38} color={C6.ink}>SEATTLE · 39 SHOPPERS · THE SAME 20 ITEMS</Label6></Plate6></In></Center>
</>) },
  { from: 30.3, to: 39.96, back: null, el: (<>
<Drift><Center y={250}><Label6 at={0.05} size={40} color={C6.accent}>SAME CART · FIVE DIFFERENT TOTALS</Label6></Center>
<Center y={540}><PricePair at={2.94} a={["CHEAPEST CART", "$114.34"]} b={["MOST EXPENSIVE", "$123.93"]} bAt={7.42} note="SAME 20 ITEMS · SAFEWAY, SEATTLE · SEPT 4, 2025" /></Center><Source6 at={0.3}>Consumer Reports investigation, 2025</Source6></Drift>
</>) },
  { from: 39.96, to: 45.52, back: (<><Stock6 n={13} dur={5.56} dim={0.55} graphics={true} />
<Stock6 n={43} from={2.76} dur={5.56} dim={0.55} graphics={true} /></>), el: (<>
<Center y={500}><Words text="+$9.59 for nothing." at={2.76} size={130} hl={["+$9.59"]} /></Center><Source6 at={2.76}>our calculation: $123.93 − $114.34</Source6>
</>) },
  { from: 45.52, to: 51.62, back: (<><Stock6 n={34} dur={6.1} dim={0.45} graphics={true} /></>), el: (<>
<Center y={470}><ESL at={3.66} price="$?.??" top="YOUR STORE" w={460} /></Center><Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={40} color={C6.ink}>WHO DECIDES WHO PAYS MORE?</Label6></Plate6></In></Center>
</>) },
  { from: 51.62, to: 58.7, tag: [1, "Same Cart, Different Price", true], hard: true, back: null, el: (<>
<Evidence src="evidence/t05/cr-top.png" size={[2880, 1800]} dur={7.08} frame="screen" zoom={0.9} source="CONSUMER REPORTS · GROUNDWORK · MORE PERFECT UNION · DEC 2025" url="consumerreports.org" />
</>) },
  { from: 58.7, to: 66.48, tag: [1, "Same Cart, Different Price", false], back: (<><Stock6 n={7} dur={7.78} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.74} from="fade"><Plate6 at={1.74}><Label6 at={1.74} size={36} color={C6.ink}>400+ VOLUNTEERS · 4 CITIES · SAME ITEMS, SAME MOMENT</Label6></Plate6></In></Center>
</>) },
  { from: 66.48, to: 73.38, tag: [1, "Same Cart, Different Price", false], back: (<><Stock6 n={5} dur={6.9} dim={0.55} graphics={true} /></>), el: (<>
<Center y={440}><Words text="3 in 4 items" at={0.3} size={140} hl={["3", "4"]} /></Center>
<Center y={620}><Label6 at={2.36} size={36} color={C6.mint}>SHOWED DIFFERENT PRICES TO DIFFERENT SHOPPERS</Label6></Center><Source6 at={0.3}>Consumer Reports / Groundwork, 2025</Source6>
</>) },
  { from: 73.38, to: 78.76, tag: [1, "Same Cart, Different Price", false], back: (<><Stock6 n={12} dur={5.38} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.96} from="fade"><Plate6 at={3.96}><Label6 at={3.96} size={42} color={C6.ink}>AVERAGE GAP ON BASICS: 13%</Label6></Plate6></In></Center>
</>) },
  { from: 78.76, to: 82.46, tag: [1, "Same Cart, Different Price", false], back: null, el: (<>
<Evidence src="evidence/t05/cr-23.png" size={[2880, 1800]} dur={3.7} frame="screen" marks={[{ x: 454, y: 723, w: 795, h: 48, at: 1.66 }]} zoom={0.9} inset={{ src: "evidence/t05/cr-top.png", size: [2880, 1800] }} source="CONSUMER REPORTS · GROUNDWORK · MORE PERFECT UNION · DEC 2025" url="consumerreports.org" />
</>) },
  { from: 82.46, to: 94.0, tag: [1, "Same Cart, Different Price", false], back: (<><Stock6 n={9} dur={11.54} dim={0} graphics={true} />
<Stock6 n={6} from={6.94} dur={11.54} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.26} out={6.94} from="fade"><Plate6 at={2.26}><Label6 at={2.26} size={36} color={C6.ink}>SAFEWAY · KROGER · COSTCO · VIA THE INSTACART APP</Label6></Plate6></In></Center><Center x={960} y={880}><In at={6.94} from="fade"><Plate6 at={6.94}><Label6 at={6.94} size={36} color={C6.ink}>ENABLED BY INSTACART'S AI PRICING SOFTWARE: EVERSIGHT</Label6></Plate6></In></Center>
</>) },
  { from: 94.0, to: 102.96, tag: [1, "Same Cart, Different Price", false], back: null, el: (<>
<Evidence src="evidence/t05/cr-original.png" size={[2880, 1800]} dur={8.96} frame="screen" marks={[{ x: 826, y: 659, w: 800, h: 48, at: 5.98 }]} zoom={0.9} inset={{ src: "evidence/t05/cr-top.png", size: [2880, 1800] }} source="CONSUMER REPORTS · GROUNDWORK · MORE PERFECT UNION · DEC 2025" url="consumerreports.org" />
</>) },
  { from: 102.96, to: 109.84, tag: [1, "Same Cart, Different Price", false], back: null, el: (<>
<Drift><Center y={500}><SaleTwins at={0.1} sale="$4.99" olds={["$5.29", "$5.59"]} /></Center><Source6 at={0.3}>Groundwork Collaborative report · Washington, D.C. · Sept 10, 2025</Source6></Drift>
</>) },
  { from: 109.84, to: 115.44, tag: [1, "Same Cart, Different Price", false], back: (<><Stock6 n={4} dur={5.6} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.54} from="fade"><Plate6 at={1.54}><Label6 at={1.54} size={34} color={C6.ink}>INSTACART: “RANDOMIZED” · NO PERSONAL DATA · “NEGLIGIBLE”</Label6></Plate6></In></Center>
</>) },
  { from: 115.44, to: 123.38, tag: [1, "Same Cart, Different Price", false], back: null, el: (<>
<Evidence src="evidence/t05/cr-1200.png" size={[2880, 1800]} dur={7.94} frame="screen" marks={[{ x: 300, y: 659, w: 394, h: 48, at: 6.0 }]} zoom={0.9} inset={{ src: "evidence/t05/cr-top.png", size: [2880, 1800] }} source="CONSUMER REPORTS · GROUNDWORK · MORE PERFECT UNION · DEC 2025" url="consumerreports.org" />
</>) },
  { from: 123.38, to: 127.42, tag: [1, "Same Cart, Different Price", false], back: null, el: (<>
<Evidence src="evidence/t05/cr-aware.png" size={[2880, 1800]} dur={4.04} frame="screen" marks={[{ x: 300, y: 595, w: 1405, h: 112, at: 1.74 }]} zoom={0.9} inset={{ src: "evidence/t05/cr-top.png", size: [2880, 1800] }} source="INSTACART, QUOTED IN THE CONSUMER REPORTS RELEASE" url="consumerreports.org" />
</>) },
  { from: 127.42, to: 133.0, tag: [1, "Same Cart, Different Price", false], back: (<><Stock6 n={15} dur={5.58} dim={0} graphics={false} /></>), el: (<>
<Meme at={3.7} text="test subject. unaware." y={900} size={70} />
</>) },
  { from: 133.0, to: 144.14, tag: [1, "Same Cart, Different Price", false], back: null, el: (<>
<Drift><Center y={420}><ESL at={0.1} price="$3.99" top="EGGS · 1 DOZEN" w={520} flipAt={6.08} flipTo="$4.79" /></Center>
<Center y={780}><Label6 at={7.36} size={46} color={C6.accent}>HOW MUCH WILL PEOPLE PAY?</Label6></Center></Drift>
</>) },
  { from: 144.14, to: 150.26, tag: [1, "Same Cart, Different Price", false], back: null, el: (<>
<Evidence src="evidence/t05/instacart-ends.png" size={[2880, 1800]} dur={6.12} frame="screen" marks={[{ x: 996, y: 605, w: 172, h: 42, at: 3.8 }]} zoom={0.9} source="REUTERS VIA YAHOO NEWS · DEC 2025" url="yahoo.com" />
</>) },
  { from: 150.26, to: 155.14, tag: [1, "Same Cart, Different Price", false], back: (<><Stock6 n={46} dur={4.88} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.04} from="fade"><Plate6 at={3.04}><Label6 at={3.04} size={38} color={C6.ink}>THOSE TESTS WERE RANDOM</Label6></Plate6></In></Center>
</>) },
  { from: 155.14, to: 163.26, tag: [1, "Same Cart, Different Price", false], back: (<><Stock6 n={58} dur={8.12} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={880}><In at={2.54} from="fade"><Plate6 at={2.54}><Label6 at={2.54} size={40} color={C6.accent}>WHAT IF A PRICE ISN'T RANDOM AT ALL?</Label6></Plate6></In></Center>
</>) },
  { from: 163.26, to: 170.24, tag: [2, "Not New", true], hard: true, back: (<><Stock6 n={55} dur={6.98} dim={0} graphics={true} sepia />
<ArchiveFx /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={36} color={C6.ink}>2012 · THE WALL STREET JOURNAL TESTS STAPLES.COM</Label6></Plate6></In></Center>
</>) },
  { from: 170.24, to: 172.6, tag: [2, "Not New", false], back: (<><Stock6 n={19} dur={2.36} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={40} color={C6.ink}>42,000+ ZIP CODES · ONE STAPLER</Label6></Plate6></In></Center>
</>) },
  { from: 172.6, to: 177.18, tag: [2, "Not New", false], back: null, el: (<>
<Evidence src="evidence/t05/staples.png" size={[2880, 1800]} dur={4.58} frame="screen" marks={[{ x: 542, y: 743, w: 130, h: 50, at: 0.74 }, { x: 628, y: 673, w: 132, h: 50, at: 2.92 }]} zoom={0.9} source="THE BLAZE, ON THE WSJ INVESTIGATION · DEC 2012" url="theblaze.com" />
</>) },
  { from: 177.18, to: 185.44, tag: [2, "Not New", false], back: (<><Stock6 n={22} dur={8.26} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={6.16} from="fade"><Plate6 at={6.16}><Label6 at={6.16} size={38} color={C6.ink}>A RIVAL STORE WITHIN ~20 MILES → LOWER PRICE</Label6></Plate6></In></Center>
</>) },
  { from: 185.44, to: 191.4, tag: [2, "Not New", false], back: null, el: (<>
<Drift><Center y={500}><PricePair at={0.1} a={["NEAR A RIVAL", "$14.29"]} b={["ONLY GAME IN TOWN", "$15.79"]} bAt={5.14} note="SWINGLINE STAPLER · STAPLES.COM · WSJ TEST, 2012" /></Center></Drift>
</>) },
  { from: 191.4, to: 200.94, tag: [2, "Not New", false], back: (<><Stock6 n={20} dur={9.54} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={820}><In at={1.5} from="fade"><Plate6 at={1.5}><Label6 at={1.5} size={36} color={C6.money}>DISCOUNT AREAS ≈ $59,900 AVG INCOME</Label6></Plate6></In></Center><Center x={960} y={920}><In at={8.1} from="fade"><Plate6 at={8.1}><Label6 at={8.1} size={36} color={C6.loss}>HIGHER-PRICE AREAS ≈ $48,700</Label6></Plate6></In></Center><Source6 at={4.76}>WSJ findings via The Verge, 2012</Source6>
</>) },
  { from: 200.94, to: 207.94, tag: [2, "Not New", false], back: null, el: (<>
<Drift><Center y={500}><Words text="“A variety of factors.”" at={2.56} size={110} hl={["factors.”"]} /></Center><Center x={960} y={700}><In at={0.15} from="fade"><Plate6 at={0.15}><Label6 at={0.15} size={32} color={C6.mint}>STAPLES, TO THE WALL STREET JOURNAL · 2012</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 207.94, to: 209.88, tag: [2, "Not New", false], back: (<><Stock6 n={24} dur={1.94} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.15} from="fade"><Plate6 at={0.15}><Label6 at={0.15} size={40} color={C6.ink}>2012 · ORBITZ</Label6></Plate6></In></Center>
</>) },
  { from: 209.88, to: 215.56, tag: [2, "Not New", false], back: null, el: (<>
<Evidence src="evidence/t05/orbitz.png" size={[2880, 1800]} dur={5.68} frame="screen" marks={[{ x: 1012, y: 597, w: 296, h: 32, at: 2.28 }]} zoom={0.9} source="MACRUMORS, ON THE WSJ REPORT · JUNE 2012" url="macrumors.com" />
</>) },
  { from: 215.56, to: 218.82, tag: [2, "Not New", false], back: (<><Stock6 n={23} dur={3.26} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.48} from="fade"><Plate6 at={2.48}><Label6 at={2.48} size={36} color={C6.ink}>MAC USERS → PRICIER HOTELS SHOWN MORE PROMINENTLY</Label6></Plate6></In></Center>
</>) },
  { from: 218.82, to: 226.92, tag: [2, "Not New", false], back: (<><Stock6 n={24} dur={8.1} dim={0} graphics={false} />
<Stock6 n={57} from={4.56} dur={8.1} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={4.56} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={36} color={C6.ink}>ORBITZ: NOT A HIGHER PRICE FOR THE SAME ROOM</Label6></Plate6></In></Center><Meme at={4.56} text="me, learning my laptop thinks I'm rich" y={900} size={66} />
</>) },
  { from: 226.92, to: 233.16, tag: [2, "Not New", false], back: null, el: (<>
<Evidence src="evidence/t05/kare-top.png" size={[2880, 1800]} dur={6.24} frame="screen" zoom={0.9} source="KARE 11 · MINNEAPOLIS · FEB 2019" url="kare11.com" />
</>) },
  { from: 233.16, to: 241.34, tag: [2, "Not New", false], back: null, el: (<>
<Evidence src="evidence/t05/kare-shaver.png" size={[2880, 1800]} dur={8.18} frame="screen" marks={[{ x: 312, y: 602, w: 402, h: 40, at: 2.64 }]} zoom={0.9} inset={{ src: "evidence/t05/kare-top.png", size: [2880, 1800] }} source="KARE 11 INVESTIGATION · FEB 2019" url="kare11.com" />
</>) },
  { from: 241.34, to: 244.06, tag: [2, "Not New", false], back: (<><Stock6 n={26} dur={2.72} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.26} from="fade"><Plate6 at={1.26}><Label6 at={1.26} size={40} color={C6.ink}>TWO-MONTH TEST · TARGET APP</Label6></Plate6></In></Center>
</>) },
  { from: 244.06, to: 256.08, tag: [2, "Not New", false], back: null, el: (<>
<Drift><Center y={470}><div style={{ scale: "1.3" }}><PhoneJump at={0.1} from="$499.99" to="$599.99" jumpAt={9.56} /></div></Center></Drift>
</>) },
  { from: 256.08, to: 262.32, tag: [2, "Not New", false], back: null, el: (<>
<Evidence src="evidence/t05/kare-262.png" size={[2880, 1800]} dur={6.24} frame="screen" marks={[{ x: 832, y: 603, w: 220, h: 40, at: 3.98 }]} zoom={0.9} inset={{ src: "evidence/t05/kare-top.png", size: [2880, 1800] }} source="KARE 11 INVESTIGATION · FEB 2019" url="kare11.com" />
</>) },
  { from: 262.32, to: 267.36, tag: [2, "Not New", false], back: (<><Stock6 n={21} dur={5.04} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.52} text="best price: anywhere but the store" y={900} size={64} />
</>) },
  { from: 267.36, to: 274.86, tag: [2, "Not New", false], back: (<><Stock6 n={41} dur={7.5} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.68} from="fade"><Plate6 at={5.68}><Label6 at={5.68} size={34} color={C6.ink}>TARGET: IN-STORE PRICES IN STORE · APP NOW LABELS THEM</Label6></Plate6></In></Center><Source6 at={5.68}>KARE 11, Feb 2019</Source6>
</>) },
  { from: 274.86, to: 281.86, tag: [2, "Not New", false], back: (<><Stock6 n={39} dur={7.0} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={880}><In at={3.24} from="fade"><Plate6 at={3.24}><Label6 at={3.24} size={42} color={C6.accent}>IT KNEW WHERE YOUR PHONE WAS</Label6></Plate6></In></Center>
</>) },
  { from: 281.86, to: 291.66, tag: [2, "Not New", false], back: (<><Stock6 n={45} dur={9.8} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={860}><In at={3.16} out={5.24} from="fade"><Plate6 at={3.16}><Label6 at={3.16} size={40} color={C6.ink}>CAUGHT → EXPLANATION → FIX</Label6></Plate6></In></Center><Center y={500}><Words text="Who's building them?" at={7.76} size={100} hl={["building"]} /></Center>
</>) },
  { from: 291.66, to: 298.14, tag: [3, "Who Builds It", true], hard: true, back: null, el: (<>
<Evidence src="evidence/t05/ftc-2024.png" size={[2880, 1800]} dur={6.48} frame="screen" marks={[{ x: 620, y: 593, w: 471, h: 72, at: 3.1 }]} zoom={0.9} source="FEDERAL TRADE COMMISSION · JULY 2024" url="ftc.gov" />
</>) },
  { from: 298.14, to: 305.5, tag: [3, "Who Builds It", false], back: (<><Stock6 n={29} dur={7.36} dim={0.6} graphics={true} /></>), el: (<>
<Center y={520}><ListReveal title="FTC ORDERS · 4 OF THE 8 COMPANIES" w={760} items={[{ text: "Mastercard", at: 3.08 }, { text: "JPMorgan Chase", at: 4.22 }, { text: "Accenture", at: 5.74 }, { text: "McKinsey", at: 6.36 }]} /></Center>
</>) },
  { from: 305.5, to: 322.24, tag: [3, "Who Builds It", false], back: (<><Stock6 n={28} dur={16.74} dim={0.62} graphics={true} />
<Stock6 n={30} from={11.0} dur={16.74} dim={0.62} graphics={true} /></>), el: (<>
<Center y={540}><ListReveal title="WHAT A PRICE CAN BE BUILT FROM · FTC, JAN 2025" titleAt={4.66} w={980} items={[{ text: "Your location", at: 7.24 }, { text: "Your demographics", at: 8.44 }, { text: "Your browsing history", at: 9.64 }, { text: "What you leave in your cart", at: 11.74 }, { text: "How your mouse moves", at: 13.5, hot: true }]} /></Center>
</>) },
  { from: 322.24, to: 326.88, tag: [3, "Who Builds It", false], back: (<><Stock6 n={31} dur={4.64} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.66} from="fade"><Plate6 at={3.66}><Label6 at={3.66} size={40} color={C6.ink}>FTC: HYPOTHETICAL EXAMPLES ONLY</Label6></Plate6></In></Center>
</>) },
  { from: 326.88, to: 332.02, tag: [3, "Who Builds It", false], back: null, el: (<>
<Evidence src="evidence/t05/ftc-baby.png" size={[2880, 1800]} dur={5.14} frame="screen" marks={[{ x: 723, y: 666, w: 424, h: 34, at: 3.32 }]} zoom={0.9} source="FEDERAL TRADE COMMISSION · JAN 2025" url="ftc.gov" />
</>) },
  { from: 332.02, to: 336.9, tag: [3, "Who Builds It", false], back: (<><Stock6 n={52} dur={4.88} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.12} text="2:00 AM. not comparison shopping." y={900} size={64} />
</>) },
  { from: 336.9, to: 347.62, tag: [3, "Who Builds It", false], back: null, el: (<>
<Evidence src="evidence/t05/ftc-250.png" size={[2880, 1800]} dur={10.72} frame="screen" marks={[{ x: 750, y: 594, w: 237, h: 34, at: 5.9 }]} zoom={0.9} source="FEDERAL TRADE COMMISSION · JAN 2025" url="ftc.gov" />
</>) },
  { from: 347.62, to: 358.22, tag: [3, "Who Builds It", false], back: (<><Stock6 n={59} dur={10.6} dim={0} graphics={true} />
<Stock6 n={24} from={3.02} dur={10.6} dim={0} graphics={true} /></>), el: (<>
<Subscribe6 at={2.12} /><Center x={960} y={880}><In at={7.02} from="fade"><Plate6 at={7.02}><Label6 at={7.02} size={38} color={C6.ink}>SAME PRICE FOR EVERYONE: $0</Label6></Plate6></In></Center>
</>) },
  { from: 358.22, to: 367.4, tag: [3, "Who Builds It", false], back: (<><Stock6 n={32} dur={9.18} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={6.56} from="fade"><Plate6 at={6.56}><Label6 at={6.56} size={40} color={C6.ink}>DELTA + FETCHERR · AI PRICING</Label6></Plate6></In></Center>
</>) },
  { from: 367.4, to: 372.02, tag: [3, "Who Builds It", false], back: (<><Stock6 n={60} dur={4.62} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.88} from="fade"><Plate6 at={0.88}><Label6 at={0.88} size={32} color={C6.ink}>GOAL: AI PRICING ON 20% OF DELTA'S U.S. NETWORK BY END OF 2025</Label6></Plate6></In></Center><Source6 at={0.88}>Atlanta Journal-Constitution, July 2025</Source6>
</>) },
  { from: 372.02, to: 377.78, tag: [3, "Who Builds It", false], back: (<><Stock6 n={33} dur={5.76} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.52} from="fade"><Plate6 at={4.52}><Label6 at={4.52} size={34} color={C6.ink}>3 SENATORS: FARES “UP TO EACH … PERSONAL ‘PAIN POINT’”</Label6></Plate6></In></Center>
</>) },
  { from: 377.78, to: 382.98, tag: [3, "Who Builds It", false], back: null, el: (<>
<Evidence src="evidence/t05/delta-reply.png" size={[2880, 1800]} dur={5.2} frame="screen" marks={[{ x: 1782, y: 659, w: 228, h: 48, at: 3.26 }]} zoom={0.9} source="DELTA NEWS HUB · AUG 2025" url="news.delta.com" />
</>) },
  { from: 382.98, to: 393.12, tag: [3, "Who Builds It", false], back: (<><Stock6 n={34} dur={10.14} dim={0} graphics={true} />
<Stock6 n={12} from={8.56} dur={10.14} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={7.38} from="fade"><Plate6 at={7.38}><Label6 at={7.38} size={34} color={C6.ink}>WALMART: DIGITAL PRICE TAGS IN ALL U.S. STORES WITHIN A YEAR</Label6></Plate6></In></Center>
</>) },
  { from: 393.12, to: 396.02, tag: [3, "Who Builds It", false], back: (<><Stock6 n={35} dur={2.9} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.28} from="fade"><Plate6 at={1.28}><Label6 at={1.28} size={38} color={C6.ink}>PAPER TAGS · SWAPPED BY HAND</Label6></Plate6></In></Center>
</>) },
  { from: 396.02, to: 400.42, tag: [3, "Who Builds It", false], back: null, el: (<>
<Drift><Center y={500}><Row gap={40}><ESL at={0.05} price="$3.49" top="MILK" w={420} flipAt={1.44} flipTo="$3.79" /><ESL at={0.15} price="$4.29" top="EGGS" w={420} flipAt={1.44} flipTo="$4.59" /><ESL at={0.25} price="$2.99" top="BREAD" w={420} flipAt={1.44} flipTo="$3.19" /></Row></Center><Center x={960} y={900}><In at={2.54} from="fade"><Plate6 at={2.54}><Label6 at={2.54} size={30} color={C6.mint}>ILLUSTRATION · ONE CENTRAL COMPUTER, EVERY TAG AT ONCE</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 400.42, to: 408.98, tag: [3, "Who Builds It", false], back: null, el: (<>
<Evidence src="evidence/t05/walmart-letter.png" size={[2880, 1800]} dur={8.56} frame="screen" marks={[{ x: 1071, y: 600, w: 385, h: 40, at: 5.9 }]} zoom={0.9} source="SUPERMARKET NEWS · SEPT 2026" url="supermarketnews.com" /><Center x={960} y={150}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={28} color={C6.ink}>WALMART: NO CAMERAS, NO MICROPHONES IN THE TAGS</Label6></Plate6></In></Center>
</>) },
  { from: 408.98, to: 414.42, tag: [3, "Who Builds It", false], back: null, el: (<>
<Drift><Center y={430}><ESL at={0.1} price="$4.29" top="ANY STORE" bottom="why this price? —" w={520} /></Center><Center x={960} y={820}><In at={3.8} from="fade"><Plate6 at={3.8}><Label6 at={3.8} size={42} color={C6.accent}>THE TAG NEVER SAYS WHY</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 414.42, to: 419.7, tag: [3, "Who Builds It", false], back: (<><Stock6 n={37} dur={5.28} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.02} from="fade"><Plate6 at={3.02}><Label6 at={3.02} size={40} color={C6.ink}>SO PEOPLE STARTED WRITING LAWS</Label6></Plate6></In></Center>
</>) },
  { from: 419.7, to: 428.5, tag: [4, "Pushback", true], hard: true, back: null, el: (<>
<Evidence src="evidence/t05/ny-ag.png" size={[2880, 1800]} dur={8.8} frame="screen" marks={[{ x: 192, y: 813, w: 1706, h: 93, at: 1.88 }]} zoom={0.7} source="NEW YORK ATTORNEY GENERAL · NOV 2025" url="ag.ny.gov" />
</>) },
  { from: 428.5, to: 435.5, tag: [4, "Pushback", false], back: null, el: (<>
<Evidence src="evidence/t05/ny-law.png" size={[2880, 1800]} dur={7.0} frame="screen" marks={[{ x: 300, y: 643, w: 1024, h: 44, at: 2.28 }]} zoom={0.9} source="GOODWIN LAW · ON N.Y. GEN. BUS. LAW § 349-A" url="goodwinlaw.com" />
</>) },
  { from: 435.5, to: 437.52, tag: [4, "Pushback", false], back: (<><Stock6 n={36} dur={2.02} dim={0.6} graphics={true} /></>), el: (<>
<Center y={480}><Disclosure at={0.3} price="$4.29" item="Milk, 1 gallon" w={1150} /></Center><Center x={960} y={960}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={24} color={C6.mint}>ILLUSTRATION</Label6></Plate6></In></Center>
</>) },
  { from: 437.52, to: 445.68, tag: [4, "Pushback", false], back: null, el: (<>
<Evidence src="evidence/t05/ny-ban.png" size={[2880, 1800]} dur={8.16} frame="screen" marks={[{ x: 608, y: 648, w: 212, h: 42, at: 6.64 }]} zoom={0.9} source="PATCH · JUNE 2026" url="patch.com" />
</>) },
  { from: 445.68, to: 453.52, tag: [4, "Pushback", false], back: (<><Stock6 n={42} dur={7.84} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.48} from="fade"><Plate6 at={1.48}><Label6 at={1.48} size={34} color={C6.ink}>MARYLAND · SINCE OCT 1, 2026 · GROCERIES &amp; DELIVERY APPS</Label6></Plate6></In></Center>
</>) },
  { from: 453.52, to: 458.12, tag: [4, "Pushback", false], back: (<><Stock6 n={10} dur={4.6} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.24} from="fade"><Plate6 at={2.24}><Label6 at={2.24} size={42} color={C6.accent}>SEATTLE · FIRST U.S. CITY TO BAN IT</Label6></Plate6></In></Center>
</>) },
  { from: 458.12, to: 471.74, tag: [4, "Pushback", false], back: null, el: (<>
<Drift><Center y={540}><ListReveal strike title="SEATTLE: CAN'T BE USED TO SET YOUR GROCERY PRICE" titleAt={3.3} w={1000} items={[{ text: "Your race", at: 4.9 }, { text: "Your gender", at: 6.28 }, { text: "Whether you have a job", at: 7.52 }, { text: "Your browsing & social media", at: 8.48 }, { text: "Your conversations with chatbots", at: 11.18, hot: true }]} /></Center></Drift>
</>) },
  { from: 471.74, to: 479.26, tag: [4, "Pushback", false], back: null, el: (<>
<Evidence src="evidence/t05/seattle.png" size={[2880, 1800]} dur={7.52} frame="screen" marks={[{ x: 760, y: 597, w: 538, h: 50, at: 5.42 }]} zoom={0.9} source="COMMON DREAMS · SEPT 2026" url="commondreams.org" />
</>) },
  { from: 479.26, to: 489.6, tag: [4, "Pushback", false], back: (<><Stock6 n={43} dur={10.34} dim={0} graphics={true} />
<Stock6 n={42} from={6.36} dur={10.34} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={820}><In at={1.88} out={6.36} from="fade"><Plate6 at={1.88}><Label6 at={1.88} size={32} color={C6.ink}>GROCERS: THE BAN COULD COST COUPONS &amp; LOYALTY DEALS</Label6></Plate6></In></Center><Center x={960} y={880}><In at={6.36} from="fade"><Plate6 at={6.36}><Label6 at={6.36} size={32} color={C6.ink}>SAFEWAY: DOESN'T USE PERSONAL INFO TO CHARGE MORE</Label6></Plate6></In></Center>
</>) },
  { from: 489.6, to: 496.22, tag: [4, "Pushback", false], back: (<><Stock6 n={54} dur={6.62} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={820}><In at={2.2} out={5.44} from="fade"><Plate6 at={2.2}><Label6 at={2.2} size={36} color={C6.ink}>SEATTLE: SEPT 2027</Label6></Plate6></In></Center><Center x={960} y={880}><In at={5.44} from="fade"><Plate6 at={5.44}><Label6 at={5.44} size={36} color={C6.ink}>FTC: PROPOSED GUIDANCE, AUG 2026</Label6></Plate6></In></Center>
</>) },
  { from: 496.22, to: 501.72, tag: [4, "Pushback", false], back: (<><Stock6 n={48} dur={5.5} dim={0} graphics={true} /></>), el: (<>
<Center y={860}><Words text="The only defense is you." at={2.36} size={84} hl={["you."]} /></Center>
</>) },
  { from: 501.72, to: 504.84, tag: [5, "Make It Guess Wrong", true], hard: true, back: (<><Stock6 n={40} dur={3.12} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.ink}>MAKE THE ALGORITHM GUESS WRONG</Label6></Plate6></In></Center>
</>) },
  { from: 504.84, to: 513.98, tag: [5, "Make It Guess Wrong", false], back: (<><Stock6 n={57} dur={9.14} dim={0.4} graphics={true} /></>), el: (<>
<Center x={960} y={800}><In at={2.88} from="fade"><Plate6 at={2.88}><Label6 at={2.88} size={36} color={C6.accent}>1 · APP, LOGGED IN</Label6></Plate6></In></Center><Center x={960} y={900}><In at={5.8} from="fade"><Plate6 at={5.8}><Label6 at={5.8} size={36} color={C6.accent}>2 · PRIVATE WINDOW, LOGGED OUT</Label6></Plate6></In></Center>
</>) },
  { from: 513.98, to: 519.0, tag: [5, "Make It Guess Wrong", false], back: (<><Stock6 n={6} dur={5.02} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.ink}>STORE APPS · LOCATION → OFF</Label6></Plate6></In></Center>
</>) },
  { from: 519.0, to: 527.88, tag: [5, "Make It Guess Wrong", false], back: null, el: (<>
<Drift><Center y={500}><SaleTwins at={0.1} sale="$4.99" olds={["$5.29", "$5.59"]} item="TRUST THE PRICE YOU PAY, NOT THE ONE CROSSED OUT" /></Center></Drift>
</>) },
  { from: 527.88, to: 534.12, tag: [5, "Make It Guess Wrong", false], back: (<><Stock6 n={51} dur={6.24} dim={0.55} graphics={true} /></>), el: (<>
<Center y={480}><Disclosure at={1.82} price="$12.40" item="Your cart" w={1100} /></Center>
</>) },
  { from: 534.12, to: 538.68, tag: [5, "Make It Guess Wrong", false], back: (<><Stock6 n={3} dur={4.56} dim={0.72} graphics={true} /></>), el: (<>
<Center y={520}><TagRow prices={["$3.99", "$4.28", "$4.59", "$4.69", "$4.79"]} times={[0.2, 0.4, 0.6, 0.8, 1.0]} title="1 dozen eggs" w={310} /></Center>
</>) },
  { from: 538.68, to: 544.16, tag: [5, "Make It Guess Wrong", false], back: (<><Stock6 n={1} dur={5.48} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={880}><In at={3.4} from="fade"><Plate6 at={3.4}><Label6 at={3.4} size={38} color={C6.accent}>THE ONLY THING THAT CHANGED: THE SHOPPER</Label6></Plate6></In></Center>
</>) },
  { from: 544.16, to: 551.44, tag: [5, "Make It Guess Wrong", false], back: null, el: (<>
<Drift><Center y={360}><ESL at={0.1} price="$?.??" top="EGGS · 1 DOZEN" w={420} /></Center>
<Center y={720}><Words text="The price of the eggs, or the price of me?" at={4.3} size={74} hl={["me?"]} /></Center></Drift>
</>) },
  { from: 551.44, to: 562.98, back: (<><Stock6 n={44} dur={11.54} dim={0.45} graphics={true} />
<Stock6 n={52} from={2.22} dur={11.54} dim={0.45} graphics={true} /></>), el: (<>
<Center y={300}><Words text="Ever caught a price changing on you?" at={0.05} size={74} hl={["changing"]} /></Center>
<Center y={440}><Label6 at={2.9} size={38} color={C6.accent}>TELL US WHAT IT WAS · COMMENTS</Label6></Center>
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string, number][] = [[0.05, "ep06-whoosh", 0.2], [3.88, "ep06-pop", 0.25], [6.59, "ep06-pop", 0.22], [7.71, "ep06-pop", 0.22], [8.85, "ep06-pop", 0.22], [9.99, "ep06-pop", 0.22], [11.14, "impact", 0.25], [13.26, "t02-paper", 0.3], [21.12, "ep06-stamp", 0.22], [22.75, "ep06-whoosh", 0.2], [33.24, "ep06-pop", 0.25], [37.72, "impact", 0.25], [42.72, "ep06-kaching", 0.25], [49.18, "ep06-pop", 0.25], [51.72, "t02-paper", 0.3], [60.44, "ep06-pop", 0.22], [66.78, "ep06-counter", 0.3], [71.5, "ep06-pop", 0.22], [77.34, "ep06-pop", 0.22], [80.42, "impact", 0.25], [92.04, "ep06-pop", 0.22], [99.98, "ep06-pop", 0.22], [103.06, "ep06-pop", 0.22], [107.26, "ep06-stamp", 0.22], [114.4, "ep06-pop", 0.22], [121.44, "ep06-counter", 0.3], [125.12, "ep06-pop", 0.22], [131.12, "ep06-scratch", 0.25], [133.1, "ep06-pop", 0.22], [139.08, "buzz", 0.25], [144.24, "t02-paper", 0.3], [160.4, "ep06-whoosh", 0.2], [163.36, "t02-paper", 0.25], [170.34, "ep06-pop", 0.22], [173.34, "ep06-pop", 0.22], [175.52, "ep06-pop", 0.22], [183.34, "ep06-pop", 0.22], [185.54, "ep06-pop", 0.22], [190.58, "ep06-pop", 0.22], [196.16, "ep06-pop", 0.22], [199.5, "ep06-pop", 0.22], [203.5, "ep06-pop", 0.22], [207.99, "ep06-whoosh", 0.2], [212.16, "ep06-pop", 0.22], [218.04, "ep06-pop", 0.22], [223.38, "ding", 0.2], [226.97, "ep06-whoosh", 0.2], [235.8, "ep06-pop", 0.22], [239.58, "buzz", 0.25], [242.6, "ep06-pop", 0.2], [247.42, "ep06-pop", 0.2], [253.62, "impact", 0.25], [260.06, "ep06-kaching", 0.25], [264.84, "ep06-scratch", 0.25], [273.04, "ep06-pop", 0.2], [278.1, "ep06-pop", 0.2], [285.02, "ep06-pop", 0.2], [286.04, "ep06-pop", 0.2], [289.62, "rise", 0.25], [294.76, "ep06-stamp", 0.22], [301.22, "ep06-pop", 0.2], [302.36, "ep06-pop", 0.2], [303.88, "ep06-pop", 0.2], [304.5, "ep06-pop", 0.2], [312.74, "ep06-pop", 0.2], [313.94, "ep06-pop", 0.2], [315.14, "ep06-pop", 0.2], [317.24, "ep06-pop", 0.2], [319.0, "impact", 0.25], [325.9, "ep06-pop", 0.2], [330.2, "ep06-pop", 0.2], [334.86, "ep06-scratch", 0.25], [342.8, "ep06-counter", 0.3], [349.74, "click", 0.35], [358.27, "ep06-whoosh", 0.25], [368.28, "ep06-pop", 0.2], [376.54, "ep06-pop", 0.2], [381.04, "ep06-stamp", 0.22], [390.36, "ep06-pop", 0.2], [397.46, "buzz", 0.25], [406.32, "ep06-pop", 0.2], [412.78, "ep06-pop", 0.2], [417.44, "ep06-whoosh", 0.2], [419.8, "t02-paper", 0.3], [430.78, "ep06-stamp", 0.22], [435.8, "ding", 0.25], [444.16, "ep06-pop", 0.2], [447.16, "ep06-pop", 0.2], [455.76, "ep06-stamp", 0.22], [463.02, "ep06-pop", 0.2], [464.4, "ep06-pop", 0.2], [465.64, "ep06-pop", 0.2], [466.6, "ep06-pop", 0.2], [469.3, "impact", 0.25], [477.16, "ep06-pop", 0.2], [484.14, "ep06-pop", 0.2], [485.62, "ep06-pop", 0.2], [491.8, "ep06-pop", 0.2], [495.04, "ep06-pop", 0.2], [498.58, "rise", 0.25], [501.77, "ep06-whoosh", 0.2], [507.72, "click", 0.3], [510.64, "click", 0.3], [514.28, "click", 0.35], [519.1, "ep06-pop", 0.2], [526.52, "ep06-stamp", 0.22], [529.7, "ding", 0.25], [534.32, "ep06-pop", 0.2], [534.52, "ep06-pop", 0.2], [534.72, "ep06-pop", 0.2], [534.92, "ep06-pop", 0.2], [535.12, "ep06-pop", 0.2], [542.08, "impact", 0.2], [548.46, "ep06-pop", 0.2], [550.04, "impact", 0.25], [554.34, "ep06-pop", 0.2]];

export const T05Prices: React.FC = () => {
  const { fps } = useVideoConfig();
  setClips(CLIP_FN); // свой набор стоков при каждом рендере: в общем Root последним грузится чужой ролик
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/t05-voiceover.mp3")} volume={0.9} />
      <Sequence from={0} durationInFrames={1567}><Audio src={staticFile("audio/t05/music-c0-open.mp3")} volume={(f) => 0.07 * interpolate(f, [0, 30, 1537, 1567], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={1531} durationInFrames={3385}><Audio src={staticFile("audio/t05/music-c1-test.mp3")} volume={(f) => 0.065 * interpolate(f, [0, 30, 3355, 3385], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={4880} durationInFrames={3888}><Audio src={staticFile("audio/t05/music-c2-history.mp3")} volume={(f) => 0.07 * interpolate(f, [0, 30, 3858, 3888], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={8732} durationInFrames={3877}><Audio src={staticFile("audio/t05/music-c3-middlemen.mp3")} volume={(f) => 0.07 * interpolate(f, [0, 30, 3847, 3877], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={12573} durationInFrames={2497}><Audio src={staticFile("audio/t05/music-c4-laws.mp3")} volume={(f) => 0.06 * interpolate(f, [0, 30, 2467, 2497], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={15034} durationInFrames={1856}><Audio src={staticFile("audio/t05/music-c5-how.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 1826, 1856], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
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
