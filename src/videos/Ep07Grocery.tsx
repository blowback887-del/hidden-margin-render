import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Bg6, BigNum, Bug6, C6, Center, ChapterCard, ChapterTag, Col, CorpSub, Counter6, Donut6, EndCard6, IconIn, In, Label6, Meme, NameCard6, Receipt6, Row, Scene6, setClips, Source6, Split6, Stamp, Stock6, Subscribe6, TitleCard, TwoBars, Words } from "../brand/hm6";

// ===================================================================
// Ep07Grocery — сгенерировано cloud/gen/build.py из плана cloud/gen/ep07.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const EP07GROCERY_DURATION_SEC = 533.6;
const CLIPS: Record<number, string> = {"1": "01-cart-aisle-pov", "2": "02-grocery-interior", "3": "03-girl-lemonade", "4": "04-cereal-boxes", "5": "05-couple-cashier", "6": "06-mom-daughter-shopping", "7": "07-groceries-into-cart", "8": "08-couple-paying-counter", "9": "09-terminal-receipt", "10": "10-cashier-register", "11": "11-semi-truck-road", "12": "12-busy-cashier", "13": "13-woman-grocery-aisle", "14": "14-freezer-aisle", "15": "15-empty-shelves-us", "16": "16-meeting-suits", "17": "17-meeting-charts", "18": "18-ice-cream-cups", "19": "19-tortilla-chips", "20": "20-nachos-dip", "21": "21-soda-aisle", "22": "22-beverage-aisle-man", "23": "23-calendar-writing", "24": "24-tomato-factory", "25": "25-produce-aisle-ny", "26": "26-coin-spinning", "27": "27-phone-notification", "28": "28-phone-scrolling", "29": "29-pumpjacks-us", "30": "30-yogurt-bowl", "31": "31-groceries-trunk", "32": "32-wallet-cards", "33": "33-cincinnati-skyline", "34": "34-comparing-jars", "35": "35-fruit-shopper-chicago", "36": "36-us-coins", "37": "37-cart-timelapse", "38": "38-comparing-products", "39": "39-store-entrance", "40": "40-tap-to-pay-store", "41": "41-woman-bread", "42": "42-warehouse-aerial-ohio", "43": "43-bank-cards", "44": "44-food-conveyor", "45": "45-hands-lemons", "46": "46-cincinnati-river"};
const LENS: Record<number, number> = {"1": 10.0, "2": 10.0, "3": 10.0, "4": 10.0, "5": 10.0, "6": 10.0, "7": 10.0, "8": 10.0, "9": 6.6, "10": 10.0, "11": 10.0, "12": 10.0, "13": 10.0, "14": 10.0, "15": 10.0, "16": 10.0, "17": 10.0, "18": 10.0, "19": 8.57, "20": 10.0, "21": 10.0, "22": 10.0, "23": 10.0, "24": 9.17, "25": 9.0, "26": 10.0, "27": 7.2, "28": 8.47, "29": 10.0, "30": 2.73, "31": 10.0, "32": 10.0, "33": 10.0, "34": 10.0, "35": 10.0, "36": 10.0, "37": 10.0, "38": 10.0, "39": 10.0, "40": 10.0, "41": 10.0, "42": 10.0, "43": 7.17, "44": 7.67, "45": 10.0, "46": 8.5};
setClips((n) => ({ src: staticFile(`broll/ep07/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 }));

type Beat = { from: number; to: number; tag?: [number, string]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 5.72, back: (<><Stock6 n={1} dur={5.72} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><BigNum at={1.92} icon="cart" size={240} label="KEPT FROM EVERY $1 YOU SPENT · 2025">2¢</BigNum></Center>
<Source6>FMI · average grocery profit margin 2.1%</Source6>
</>) },
  { from: 5.72, to: 9.22, back: (<><Stock6 n={3} dur={3.5} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.48} text="lemonade stand: “we're out.”" y={900} />
</>) },
  { from: 9.22, to: 12.22, back: (<><Stock6 n={21} dur={3.0} dim={0} graphics={false} /></>), el: (<>
<Center y={540}><Stamp at={1.12} text="for rent" color={C6.accent} size={110} /></Center>
</>) },
  { from: 12.22, to: 15.1, back: (<><Stock6 n={4} dur={2.88} dim={0} graphics={false} /></>), el: (<>
<Center y={900}><Words text="The cheap box?" at={0.56} size={90} hl={["cheap"]} /></Center>
</>) },
  { from: 15.1, to: 20.12, back: (<><Stock6 n={5} dur={5.02} dim={0} graphics={false} /></>), el: (<>
<Center y={900}><Words text="A plastic card > your cart?" at={1.06} size={84} hl={["card"]} /></Center>
</>) },
  { from: 20.12, to: 22.5, hard: true, back: null, el: (<>
<Center y={520}><TitleCard at={0} title="It's Not the Groceries" hl={["Not"]} /></Center>
</>) },
  { from: 22.5, to: 30.4, tag: [1, "The Receipt"], back: (<><Stock6 n={6} dur={7.9} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><In at={0} out={1.92} from="fade"><ChapterCard n={1} title="The Receipt" /></In></Center>
<Center y={560}><NameCard6 at={3.1} name="Dana" role="MADE UP · HER MATH IS REAL" icon="cart" /></Center>
<Meme at={6.34} text="lawyer-level negotiation" y={930} size={60} />
</>) },
  { from: 30.4, to: 38.26, back: (<><Stock6 n={43} dur={7.86} dim={0} graphics={false} /></>), el: (<>
<Center y={900}><Label6 at={4.36} size={40} color={C6.accent}>REMEMBER THIS</Label6></Center>
</>) },
  { from: 38.26, to: 49.5, back: (<><Stock6 n={34} dur={11.24} dim={0} graphics={true} />
<Stock6 n={41} from={4.96} dur={11.24} dim={0} graphics={true} /></>), el: (<>
<Center y={300}><Col gap={22}>
  <Label6 at={2.6} size={40} color={C6.ink}>✓ COMPARES PRICES</Label6>
  <Label6 at={3.88} size={40} color={C6.ink}>✓ CLIPS COUPONS</Label6>
</Col></Center>
<Meme at={9.7} text="saved $1 · spent $4 on gas" y={900} size={66} />
</>) },
  { from: 49.5, to: 53.92, back: (<><Stock6 n={8} dur={4.42} dim={0.35} graphics={true} /></>), el: (<>
<Center y={500}><BigNum at={1.1} icon="receipt" size={240} color={C6.ink} label="DANA'S SATURDAY">$100.00</BigNum></Center>
<Center y={820}><Label6 at={2.96} size={52} color={C6.loss}>FEELS ROBBED</Label6></Center>
</>) },
  { from: 53.92, to: 56.94, back: null, el: (<>
<Center y={540}><Words text="Let's follow that $100." at={0.05} size={110} hl={["$100."]} /></Center>
</>) },
  { from: 56.94, to: 62.74, back: (<><Stock6 n={11} dur={5.8} dim={0.2} graphics={true} /></>), el: (<>
<Center x={620} y={540}><div style={{ scale: "1.45" }}><Receipt6 at={0.1} step={0.35} lines={[["YOUR TOTAL", "$100"], ["FOOD + TRUCKS", "-$77"]]} /></div></Center>
<Center x={1350} y={540}><BigNum at={1.66} icon="truck" size={190} color={C6.ink} label="THE FOOD + GETTING IT ON THE SHELF">$77</BigNum></Center>
<Source6>Kroger gross margin 22.9% · our calculation</Source6>
</>) },
  { from: 62.74, to: 72.32, back: (<><Stock6 n={12} dur={9.58} dim={0} graphics={true} />
<Stock6 n={13} from={4.14} dur={9.58} dim={0} graphics={true} /></>), el: (<>
<Center y={180}><BigNum at={0.68} size={150} punch={false} label="LEFT">$23</BigNum></Center>
<Center y={640}><Row gap={90}>
  <Col><IconIn at={2.34} name="person" size={120} /><Label6 at={2.34} size={32}>CASHIER</Label6></Col>
  <Col><IconIn at={3.32} name="bag" size={120} /><Label6 at={3.32} size={32}>STOCKER</Label6></Col>
  <Col><IconIn at={4.14} name="building" size={120} /><Label6 at={4.14} size={32}>RENT</Label6></Col>
  <Col><IconIn at={4.9} name="store" size={120} /><Label6 at={4.9} size={32}>FREEZERS</Label6></Col>
  <Col><IconIn at={7.46} name="person" size={120} color={C6.loss} /><Label6 at={7.46} size={32} color={C6.loss}>THEFT</Label6></Col>
</Row></Center>
</>) },
  { from: 72.32, to: 76.14, back: null, el: (<>
<Center y={200}><Words text="What's left for the store?" at={0.05} size={72} /></Center>
<Center y={540}><BigNum at={1.48} icon="coin" size={260} label="THE STORE KEEPS · OF DANA'S $100">≈$2</BigNum></Center>
<Source6>FMI · 2.1% average margin, 2025</Source6>
</>) },
  { from: 76.14, to: 81.26, back: (<><Stock6 n={38} dur={5.12} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.18} text="everyone's a victim" y={900} />
</>) },
  { from: 81.26, to: 84.56, back: (<><Stock6 n={14} dur={3.3} dim={0} graphics={false} /></>), el: (<>
<Meme at={1.58} text="freezer salesman: thriving" y={900} />
</>) },
  { from: 84.56, to: 94.12, back: (<><Stock6 n={42} dur={9.56} dim={0} graphics={true} /></>), el: (<>
<Center y={380}><Counter6 to={147} at={3.5} dur={0.9} fmt={(v) => "$" + Math.round(v) + "B"} size={200} color={C6.ink} /></Center>
<Center y={540}><Label6 at={3.5} size={28}>KROGER SALES · 2024</Label6></Center>
<Center y={760}><BigNum at={7.2} size={150} punch={false} label="PROFIT">$2.7B</BigNum></Center>
<Source6>Kroger FY2024 results</Source6>
</>) },
  { from: 94.12, to: 97.94, back: null, el: (<>
<Center y={540}><Donut6 at={0.1} pct={1.8} center="1.8%" label="KROGER 2024 · KEPT AS PROFIT" size={640} /></Center>
</>) },
  { from: 97.94, to: 107.3, back: (<><Stock6 n={15} dur={9.36} dim={0} graphics={true} /></>), el: (<>
<Center y={420}><Words text="One broken freezer. One price war." at={2.38} size={84} maxW={1500} /></Center>
<Center y={680}><Label6 at={6.74} size={40} color={C6.loss}>~1 IN 9 GROCERS POSTED LOSSES</Label6></Center>
<Source6>FMI · The Food Retailing Industry Speaks 2026</Source6>
</>) },
  { from: 107.3, to: 114.16, back: null, el: (<>
<Center y={540}><div style={{ scale: "1.45" }}><Receipt6 at={0.1} step={0.3} w={620} lines={[["FOOD + TRUCKS", "$77"], ["COSTS", "$21"], ["PROFIT", "$2"], ["???", "?"], ["???", "?"], ["???", "?"]]} /></div></Center>
</>) },
  { from: 114.16, to: 117.82, back: (<><Stock6 n={16} dur={3.66} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Label6 at={2.0} size={40} color={C6.accent}>PEOPLE WHO NEVER PUSH A CART</Label6></Center>
</>) },
  { from: 117.82, to: 125.04, tag: [2, "The Shelf"], back: (<><Stock6 n={13} dur={7.22} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><In at={0} out={5.04} from="fade"><ChapterCard n={2} title="The Shelf" /></In></Center>
<Center y={540}><Words text="Very expensive real estate." at={5.04} size={96} hl={["real", "estate."]} /></Center>
</>) },
  { from: 125.04, to: 127.08, back: (<><Stock6 n={21} dur={2.04} dim={0} graphics={false} /></>), el: (<>
<Center y={520}><Stamp at={1.04} text="for rent" color={C6.accent} size={120} /></Center>
</>) },
  { from: 127.08, to: 134.52, back: (<><Stock6 n={41} dur={7.44} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Words text="Pay just to get in." at={4.2} size={96} hl={["get", "in."]} /></Center>
<Center y={760}><Label6 at={6.26} size={44} color={C6.accent}>= A SLOTTING FEE</Label6></Center>
</>) },
  { from: 134.52, to: 145.2, back: (<><Stock6 n={15} dur={10.68} dim={0} graphics={true} /></>), el: (<>
<Center y={140}><Label6 at={0.1} size={40} color={C6.ink}>FTC · AVERAGE FEE · ONE PRODUCT · ONE CHAIN · ONE CITY</Label6></Center>
<Center y={600}><TwoBars at={1.52} h={380} a={{ label: "LOW AVERAGE", value: "$2,313", v: 2313 }} b={{ label: "HIGH AVERAGE", value: "$21,768", v: 21768, at: 7.82 }} /></Center>
<Source6>FTC · Slotting Allowances in the Retail Grocery Industry, 2003</Source6>
</>) },
  { from: 145.2, to: 155.96, back: (<><Stock6 n={37} dur={10.76} dim={0.4} graphics={true} /></>), el: (<>
<Center y={480}><BigNum at={5.8} size={230} label="NATIONAL LAUNCH · SUPPLIERS' ESTIMATE">$1.5–2M</BigNum></Center>
<Center y={800}><Label6 at={7.9} size={40} color={C6.ink}>BEFORE A SINGLE BOX IS SOLD</Label6></Center>
<Source6>FTC · Slotting Allowances in the Retail Grocery Industry, 2003</Source6>
</>) },
  { from: 155.96, to: 168.35, back: (<><Stock6 n={17} dur={12.39} dim={0} graphics={true} />
<Stock6 n={20} from={2.92} dur={12.39} dim={0} graphics={true} /></>), el: (<>
<Meme at={1.38} out={2.92} text="giant brand: “it's a tuesday”" y={900} size={66} />
<Meme at={4.96} text="small salsa company: 💀" y={900} size={66} />
<Center y={200}><Label6 at={5.84} size={40} color={C6.ink}>SMALL PRODUCERS TO THE FTC: THE FEES KEEP US OUT</Label6></Center>
</>) },
  { from: 168.35, to: 175.76, back: (<><Stock6 n={18} dur={7.41} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><BigNum at={2.53} size={220} color={C6.loss} label="NEW ICE CREAMS THAT DIDN'T EARN THE FEE BACK · YEAR 1">1 in 10</BigNum></Center>
<Source6>FTC · Slotting Allowances in the Retail Grocery Industry, 2003</Source6>
</>) },
  { from: 175.76, to: 179.7, back: (<><Stock6 n={14} dur={3.94} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.28} text="a very cold donation" y={900} />
</>) },
  { from: 179.7, to: 189.86, back: (<><Stock6 n={36} dur={10.16} dim={0.45} graphics={true} />
<Stock6 n={26} from={6.58} dur={10.16} dim={0.45} graphics={true} /></>), el: (<>
<Center y={460}><Counter6 to={9} at={4.1} dur={0.8} fmt={(v) => "$" + Math.round(v) + "B / year"} size={190} /></Center>
<Center y={650}><Label6 at={4.1} size={28}>SLOTTING MONEY · ESTIMATES, EARLY 2000s</Label6></Center>
<Center y={850}><Words text="Just to exist on a shelf." at={7.94} size={70} hl={["exist"]} /></Center>
</>) },
  { from: 189.86, to: 197.94, back: (<><Stock6 n={22} dur={8.08} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><Stamp at={6.28} text="pay-to-stay" color={C6.accent} size={100} /></Center>
</>) },
  { from: 197.94, to: 203.48, back: (<><Stock6 n={23} dur={5.54} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><BigNum at={1.3} icon="calendar" size={190} label="TYPICAL SHELF DEAL">6–12 mo</BigNum></Center>
<Center y={800}><Label6 at={3.72} size={34} color={C6.ink}>THEN THE SHELF IS BACK ON THE MARKET</Label6></Center>
</>) },
  { from: 203.48, to: 209.14, back: (<><Stock6 n={19} dur={5.66} dim={0} graphics={false} /></>), el: (<>
<Center y={500}><Stamp at={4.38} text="lease renewed ✓" color={C6.money} size={96} rotate={6} /></Center>
</>) },
  { from: 209.14, to: 221.7, back: (<><Stock6 n={21} dur={12.56} dim={0} graphics={true} />
<Stock6 n={22} from={4.88} dur={12.56} dim={0} graphics={true} /></>), el: (<>
<Center y={180}><Label6 at={0.62} size={44} color={C6.accent}>THE END CAP</Label6></Center>
<Center y={880}><Words text="End caps or eye-level shelves?" at={8.34} size={76} hl={["eye-level"]} /></Center>
<Source6>FTC testimony to Congress, 1999</Source6>
</>) },
  { from: 221.7, to: 232.96, back: (<><Stock6 n={16} dur={11.26} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Split6 at={0.1} left={{ title: "MAKING THE FOOD", value: "#1 COST", icon: "factory", color: C6.ink }} right={{ title: "TRADE SPENDING · % OF SALES", value: "~20%", icon: "store", at: 6.7 }} /></Center>
<Source6>PwC / McKinsey estimates · ~20% of gross sales</Source6>
</>) },
  { from: 232.96, to: 236.32, back: null, el: (<>
<CorpSub at={0.05} corp="Trade spending" human="Rent, but for cereal." />
</>) },
  { from: 236.32, to: 241.88, back: null, el: (<>
<Center y={540}><div style={{ scale: "1.45" }}><Receipt6 at={0.05} step={0.12} w={640} lines={[["FOOD + TRUCKS", "$77"], ["COSTS", "$21"], ["PROFIT", "$2"], ["SHELF RENT", "✓"], ["???", "?"], ["???", "?"]]} /></div></Center>
</>) },
  { from: 241.88, to: 246.88, back: (<><Stock6 n={25} dur={5.0} dim={0} graphics={true} /></>), el: (<>
<Subscribe6 at={2.64} />
<Center y={880}><Label6 at={4.26} size={34} color={C6.ink}>WHO REALLY GETS YOUR MONEY · EVERY WEEK</Label6></Center>
</>) },
  { from: 246.88, to: 254.82, tag: [3, "The Store Brand"], back: (<><Stock6 n={4} dur={7.94} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><In at={0} out={6.3} from="fade"><ChapterCard n={3} title="The Store Brand" /></In></Center>
<Center y={880}><Label6 at={6.3} size={40} color={C6.accent}>SUSPICIOUSLY FAMILIAR</Label6></Center>
</>) },
  { from: 254.82, to: 261.36, back: (<><Stock6 n={38} dur={6.54} dim={0} graphics={false} /></>), el: (<>
<Meme at={3.88} text="the cousin who skipped the fancy college" y={900} size={62} />
</>) },
  { from: 261.36, to: 267.56, back: null, el: (<>
<Center y={540}><Split6 at={0.1} left={{ title: "BIG NAME", value: "$5.49", icon: "bag", color: C6.ink }} right={{ title: "STORE BRAND · ≈20% LESS", value: "$4.39", icon: "store", at: 3.84 }} /></Center>
<Source6>Circana · private label ≈20% cheaper</Source6>
</>) },
  { from: 267.56, to: 274.86, back: (<><Stock6 n={35} dur={7.3} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><BigNum at={3.24} icon="person" size={230} label="SAY STORE BRANDS ARE AS GOOD OR BETTER">7 in 10</BigNum></Center>
<Source6>Circana · 69%</Source6>
</>) },
  { from: 274.86, to: 278.24, back: (<><Stock6 n={7} dur={3.38} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.06} text="dana: big brain" y={900} />
</>) },
  { from: 278.24, to: 283.0, back: (<><Stock6 n={41} dur={4.76} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><Words text="“A more favorable margin profile.”" at={0.1} size={92} hl={["favorable"]} /></Center>
<Source6>Kroger Q3 2025 earnings call</Source6>
</>) },
  { from: 283.0, to: 285.88, back: null, el: (<>
<CorpSub at={0.05} corp="A more favorable margin profile" human="We make more on the cheap box." />
</>) },
  { from: 285.88, to: 292.74, back: (<><Stock6 n={24} dur={6.86} dim={0} graphics={true} />
<Stock6 n={44} from={5.0} dur={6.86} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Label6 at={3.08} size={40} color={C6.accent}>~20% OF STORE-BRAND UNITS · MADE IN KROGER PLANTS</Label6></Center>
<Source6>Kroger 10-K · fiscal 2025 (ended Jan 31, 2026)</Source6>
</>) },
  { from: 292.74, to: 297.22, back: (<><Stock6 n={25} dur={4.48} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><BigNum at={1.86} icon="store" size={230} color={C6.money} label="KROGER STORE BRANDS · 2025 SALES">$39B+</BigNum></Center>
<Source6>Kroger 10-K · fiscal 2025 (ended Jan 31, 2026)</Source6>
</>) },
  { from: 297.22, to: 304.14, back: (<><Stock6 n={13} dur={6.92} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><Row gap={130}>
  <Col><IconIn at={0.32} name="bag" size={190} color={C6.money} /><Label6 at={0.32} size={38}>HEALTHY</Label6></Col>
  <Col><IconIn at={1.68} name="receipt" size={190} /><Label6 at={1.68} size={38}>CHEAP</Label6></Col>
  <Col><IconIn at={2.78} name="store" size={190} color={C6.accent} /><Label6 at={2.78} size={38}>FANCY</Label6></Col>
</Row></Center>
<Center y={850}><Stamp at={5.96} text="store brand" color={C6.accent} size={80} /></Center>
</>) },
  { from: 304.14, to: 308.78, back: null, el: (<>
<Center y={540}><div style={{ scale: "1.45" }}><Receipt6 at={0.05} step={0.12} w={640} lines={[["FOOD + TRUCKS", "$77"], ["COSTS", "$21"], ["PROFIT", "$2"], ["SHELF RENT", "✓"], ["STORE BRAND", "✓"], ["???", "?"]]} /></div></Center>
</>) },
  { from: 308.78, to: 318.9, back: (<><Stock6 n={35} dur={10.12} dim={0.35} graphics={true} /></>), el: (<>
<Center y={440}><Counter6 to={1100} at={4.08} dur={0.9} fmt={(v) => Math.round(v).toLocaleString("en-US") + "+"} size={190} /></Center>
<Center y={620}><Label6 at={4.08} size={28}>NEW STORE-BRAND PRODUCTS · 2025</Label6></Center>
<Center y={820}><Label6 at={7.2} size={40} color={C6.accent}>≈ 3 NEW PRODUCTS A DAY</Label6></Center>
</>) },
  { from: 318.9, to: 327.66, back: (<><Stock6 n={26} dur={8.76} dim={0.45} graphics={true} /></>), el: (<>
<Center y={180}><Label6 at={2.02} size={44} color={C6.ink}>STILL PAYING RENT</Label6></Center>
<Meme at={4.42} out={6.56} text="heads: store wins" y={900} />
<Meme at={6.56} text="tails: store collects rent" y={900} />
</>) },
  { from: 327.66, to: 336.46, back: null, el: (<>
<Center y={540}><div style={{ scale: "1.45" }}><Receipt6 at={0.05} step={0.12} w={640} lines={[["SHELF RENT", "✓"], ["STORE BRAND", "✓"], ["THE NEWEST ONE", "?"]]} /></div></Center>
<Center y={880}><Label6 at={7.26} size={40} color={C6.accent}>DANA GAVE IT AWAY FOR 40¢</Label6></Center>
</>) },
  { from: 336.46, to: 339.14, tag: [4, "The Card"], back: (<><Stock6 n={12} dur={2.68} dim={0} graphics={true} />
<Stock6 n={10} from={0.5} dur={2.68} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><In at={0} from="fade"><ChapterCard n={4} title="The Card" /></In></Center>
</>) },
  { from: 339.14, to: 343.22, back: (<><Stock6 n={40} dur={4.08} dim={0} graphics={true} /></>), el: (<>
<Center x={1420} y={500}><div style={{ scale: "1.45" }}><Receipt6 at={2.14} step={0.2} w={460} lines={[["YOGURT", "$1.29"], ["CARD SAVINGS", "-$0.40"]]} /></div></Center>
</>) },
  { from: 343.22, to: 351.56, back: (<><Stock6 n={43} dur={8.34} dim={0} graphics={true} /></>), el: (<>
<Center y={380}><BigNum at={1.06} icon="card" size={200} label="OF TRANSACTIONS · TIED TO A LOYALTY CARD">95%+</BigNum></Center>
<Center y={760}><Label6 at={5.42} size={44} color={C6.ink}>≈ 63 MILLION HOUSEHOLDS A YEAR</Label6></Center>
<Source6>Kroger 10-K · fiscal 2025 (ended Jan 31, 2026)</Source6>
</>) },
  { from: 351.56, to: 357.64, back: (<><Stock6 n={27} dur={6.08} dim={0} graphics={true} /></>), el: (<>
<Center x={1380} y={520}><div style={{ scale: "1.45" }}><Receipt6 at={0.1} step={0.45} w={520} lines={[["WHAT", "yogurt"], ["WHEN", "Sat 9:40"], ["SWITCHED FROM", "brand X"]]} /></div></Center>
</>) },
  { from: 357.64, to: 366.24, back: (<><Stock6 n={33} dur={8.6} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><BigNum at={3.2} size={230} label="KROGER'S DATA COMPANY">84.51° W</BigNum></Center>
<Center y={780}><Label6 at={5.58} size={34} color={C6.ink}>= THE LONGITUDE OF KROGER HQ · CINCINNATI</Label6></Center>
</>) },
  { from: 366.24, to: 372.0, back: (<><Stock6 n={46} dur={5.76} dim={0} graphics={false} /></>), el: (<>
<Meme at={1.08} text="“we're just a grocery store”" y={900} size={66} />
</>) },
  { from: 372.0, to: 378.5, back: (<><Stock6 n={32} dur={6.5} dim={0} graphics={true} /></>), el: (<>
<Center y={440}><Label6 at={0.92} size={44} color={C6.ink}>2015 · BUILT FROM DUNNHUMBY USA</Label6></Center>
<Center y={620}><Label6 at={5.22} size={34} color={C6.accent}>THE FIRM BEHIND TESCO CLUBCARD</Label6></Center>
</>) },
  { from: 378.5, to: 388.78, back: (<><Stock6 n={29} dur={10.28} dim={0} graphics={true} />
<Stock6 n={30} from={8.62} dur={10.28} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><Words text="“Data is the new oil.”" at={4.98} size={110} hl={["oil.”"]} /></Center>
<Center y={720}><Label6 at={5.62} size={34} color={C6.ink}>CLIVE HUMBY · DUNNHUMBY CO-FOUNDER</Label6></Center>
<Meme at={8.9} text="started with yogurt" y={920} size={64} />
</>) },
  { from: 388.78, to: 399.1, back: (<><Stock6 n={27} dur={10.32} dim={0} graphics={true} /></>), el: (<>
<Center y={420}><Row gap={110}>
  <Col><IconIn at={2.16} name="phone" size={140} /><Label6 at={2.16} size={34}>WHO GETS WHICH COUPON</Label6></Col>
  <Col><IconIn at={3.28} name="store" size={140} /><Label6 at={3.28} size={34}>WHAT GOES ON THE SHELF</Label6></Col>
</Row></Center>
<Meme at={8.0} text="it's not luck. it's the card." y={900} size={66} />
</>) },
  { from: 399.1, to: 404.94, back: (<><Stock6 n={16} dur={5.84} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Label6 at={1.8} size={40} color={C6.accent}>THE BRANDS · ALREADY PAYING FOR SHELVES</Label6></Center>
</>) },
  { from: 404.94, to: 412.32, back: (<><Stock6 n={28} dur={7.38} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Row gap={70}>
  <Col><IconIn at={3.44} name="billboard" size={130} /><Label6 at={3.44} size={34}>AD SHOWN</Label6></Col>
  <Label6 at={4.68} size={60} color={C6.accent}>→</Label6>
  <Col><IconIn at={5.2} name="building" size={130} /><Label6 at={5.2} size={34}>HOUSEHOLD</Label6></Col>
  <Label6 at={5.96} size={60} color={C6.accent}>→</Label6>
  <Col><IconIn at={5.96} name="receipt" size={130} color={C6.money} /><Label6 at={5.96} size={34}>BOUGHT ✓</Label6></Col>
</Row></Center>
<Source6>Kroger 10-K · fiscal 2025 (ended Jan 31, 2026)</Source6>
</>) },
  { from: 412.32, to: 416.48, back: (<><Stock6 n={9} dur={4.16} dim={0} graphics={false} /></>), el: (<>
<Center y={520}><Stamp at={2.6} text="has the receipt" color={C6.accent} size={96} /></Center>
</>) },
  { from: 416.48, to: 419.5, back: null, el: (<>
<Center y={540}><Words text="The number that explains it all." at={0.1} size={100} maxW={1300} hl={["number"]} /></Center>
</>) },
  { from: 419.5, to: 433.0, back: (<><Stock6 n={36} dur={13.5} dim={0} graphics={true} /></>), el: (<>
<Center y={560}><TwoBars at={1.76} a={{ label: "SIDE BUSINESSES · MEDIA, DATA, FINANCE", value: "$1.5B", v: 1.5, color: C6.accent }} b={{ label: "WHOLE COMPANY · ADJUSTED", value: "$4.9B", v: 4.9, color: C6.ink, at: 11.66 }} /></Center>
<Source6>Kroger Q4 & FY2025 results</Source6>
</>) },
  { from: 433.0, to: 440.48, back: null, el: (<>
<Center y={180}><Label6 at={0.05} size={40} color={C6.ink}>BY OUR MATH</Label6></Center>
<Center y={480}><BigNum at={1.74} icon="coin" size={260} label="OF KROGER'S OPERATING PROFIT · NOT FROM SELLING FOOD">≈1 in 3</BigNum></Center>
<Center y={820}><Label6 at={4.64} size={26} color={C6.ink}>OUR CALCULATION · $1.5B ÷ $4.9B</Label6></Center>
</>) },
  { from: 440.48, to: 451.52, back: (<><Stock6 n={17} dur={11.04} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Split6 at={0.1} left={{ title: "SELLING FOOD", value: "PENNIES", icon: "cart", color: C6.ink }} right={{ title: "SELLING ATTENTION", value: "HIGH MARGIN", icon: "billboard", at: 7.66 }} /></Center>
<Source6>Kroger 10-K · fiscal 2025 (ended Jan 31, 2026)</Source6>
</>) },
  { from: 451.52, to: 464.82, back: (<><Stock6 n={39} dur={13.3} dim={0} graphics={true} />
<Stock6 n={5} from={7.16} dur={13.3} dim={0} graphics={true} /></>), el: (<>
<Center y={440}><Counter6 to={6.4} at={3.74} dur={0.9} fmt={(v) => "$" + v.toFixed(1) + "B"} size={200} /></Center>
<Center y={620}><Label6 at={3.74} size={28}>WALMART GLOBAL ADVERTISING · FY2026</Label6></Center>
<Center y={820}><Label6 at={10.74} size={34} color={C6.accent}>ADS + MEMBERSHIPS ≈ 1/3 OF OPERATING INCOME · Q4</Label6></Center>
<Source6>Walmart Q4 FY2026 earnings</Source6>
</>) },
  { from: 464.82, to: 470.66, back: (<><Stock6 n={37} dur={5.84} dim={0} graphics={false} /></>), el: (<>
<Meme at={3.34} text="media company (also: bananas)" y={900} size={70} />
</>) },
  { from: 470.66, to: 475.86, back: null, el: (<>
<Center y={540}><div style={{ scale: "1.45" }}><Receipt6 at={0.1} step={0.25} w={660} lines={[["FOOD + TRUCKS", "$77"], ["COSTS", "$21"], ["PROFIT", "$2"], ["SHELF RENT", "✓"], ["STORE BRAND", "✓"], ["YOUR DATA", "✓"]]} /></div></Center>
</>) },
  { from: 475.86, to: 483.48, back: (<><Stock6 n={1} dur={7.62} dim={0} graphics={true} /></>), el: (<>
<Center y={300}><Col gap={22}>
  <Label6 at={3.02} size={44} color={C6.ink}>THE SHELF SHE WALKED PAST</Label6>
  <Label6 at={4.58} size={44} color={C6.ink}>THE STORE BRAND SHE GRABBED</Label6>
  <Label6 at={6.16} size={44} color={C6.accent}>THE CARD SHE SCANNED</Label6>
</Col></Center>
</>) },
  { from: 483.48, to: 490.56, back: (<><Stock6 n={31} dur={7.08} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Stamp at={5.68} text="the product" color={C6.accent} size={110} /></Center>
</>) },
  { from: 490.56, to: 503.18, back: (<><Stock6 n={30} dur={12.62} dim={0} graphics={true} />
<Stock6 n={7} from={1.56} dur={12.62} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Label6 at={8.42} size={34} color={C6.ink}>THE YOGURT WAS 40¢ CHEAPER · THE DEAL WAS BIGGER</Label6></Center>
</>) },
  { from: 503.18, to: 509.14, back: (<><Stock6 n={10} dur={5.96} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Words text="“Do you have a rewards card?”" at={1.84} size={80} hl={["rewards"]} /></Center>
</>) },
  { from: 509.14, to: 533.6, back: (<><Stock6 n={39} dur={24.46} dim={0.3} graphics={true} /></>), el: (<>
<Center y={110}><Label6 at={0.1} size={34} color={C6.ink}>KROGER: ~2,700 SUPERMARKETS · 1,700+ SELL GAS</Label6></Center>
<EndCard6 at={0.4} next="Why Gas Stations Make About a Dime a Gallon" />
<Center y={1000}><Label6 at={11.12} size={40} color={C6.accent}>WHICH STORE CARD IS IN YOUR WALLET?</Label6></Center>
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string, number][] = [[1.92, "ep06-coin", 0.35], [8.2, "ep06-scratch", 0.3], [10.34, "ep06-stamp", 0.35], [16.16, "ep06-pop", 0.3], [20.17, "ep06-stamp", 0.4], [22.52, "ep06-whoosh", 0.25], [31.58, "ep06-pop", 0.3], [50.6, "ep06-receipt", 0.35], [58.6, "ep06-pop", 0.3], [73.8, "ep06-coin", 0.35], [88.06, "ep06-counter", 0.3], [102.9, "ep06-fall", 0.25], [112.76, "ep06-pop", 0.3], [117.84, "ep06-whoosh", 0.25], [126.08, "ep06-stamp", 0.4], [142.34, "ep06-counter", 0.3], [151.0, "ep06-boom", 0.28], [170.88, "ep06-fall", 0.25], [183.8, "ep06-counter", 0.3], [196.14, "ep06-stamp", 0.4], [207.86, "ep06-stamp", 0.35], [239.42, "ep06-pop", 0.3], [244.52, "ep06-pop", 0.3], [246.9, "ep06-whoosh", 0.25], [260.12, "ep06-scratch", 0.25], [294.6, "ep06-kaching", 0.25], [306.7, "ep06-pop", 0.3], [312.86, "ep06-counter", 0.3], [336.48, "ep06-whoosh", 0.25], [341.28, "ep06-pop", 0.35], [348.64, "ep06-counter", 0.3], [370.44, "ep06-scratch", 0.3], [384.12, "ep06-boom", 0.25], [414.92, "ep06-stamp", 0.4], [425.22, "ep06-kaching", 0.25], [434.74, "ep06-boom", 0.3], [455.26, "ep06-counter", 0.3], [470.76, "ep06-receipt", 0.3], [489.16, "ep06-stamp", 0.4]];

export const Ep07Grocery: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/ep07-voiceover.mp3")} />
      <Sequence from={0} durationInFrames={690}><Audio src={staticFile("audio/ep07/music-trailer.mp3")} volume={(f) => 0.15 * interpolate(f, [0, 30, 660, 690], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={675} durationInFrames={2874}><Audio src={staticFile("audio/ep07/music-ch1.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 2844, 2874], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={3534} durationInFrames={3888}><Audio src={staticFile("audio/ep07/music-ch2.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 3858, 3888], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={7407} durationInFrames={2703}><Audio src={staticFile("audio/ep07/music-ch3.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 2673, 2703], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={10095} durationInFrames={4041}><Audio src={staticFile("audio/ep07/music-ch4.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 4011, 4041], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={14121} durationInFrames={1887}><Audio src={staticFile("audio/ep07/music-finale.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 1857, 1887], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
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
