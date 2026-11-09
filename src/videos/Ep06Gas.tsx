import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from "remotion";
import { Bg6, BigNum, Bug6, C6, Center, ChapterCard, ChapterTag, Col, CorpSub, Counter6, Donut6, EndCard6, GallonCutter, IconIn, In, Label6, Meme, NameCard6, Num6, PriceSign, RocketFeather, Row, Scene6, setClips, Source6, Split6, Stamp, Stock6, Subscribe6, TitleCard, TrailerFrame, TwoBars, Words } from "../brand/hm6";

// ===================================================================
// Ep06Gas — сгенерировано cloud/gen/build.py из плана cloud/gen/ep06.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const EP06GAS_DURATION_SEC = 577.24;
const CLIPS: Record<number, string> = {"1": "01-man-refueling-car", "2": "02-pump-display-numbers", "3": "03-gas-price-signage", "4": "04-night-gas-station-neon", "5": "05-coffee-filling-cup", "6": "06-small-town-main-street", "7": "07-pizza-on-box", "8": "08-cars-at-gas-station-timelapse", "9": "09-man-counting-pennies", "10": "10-oil-well-plains", "11": "11-refinery-aerial", "12": "12-us-capitol", "13": "13-fuel-truck-farmland", "14": "14-yachts-marina", "15": "15-card-reader", "16": "16-cashier", "17": "17-speedometer", "18": "18-couch-pillows", "19": "19-vintage-gas-station", "20": "20-filling-car-gasoline", "21": "21-iowa-truckstop-aerial", "22": "22-rocket-launch", "23": "23-feathers-falling", "24": "24-man-smiling", "25": "25-store-automatic-doors", "26": "26-candies-dropping", "27": "27-grilling-hot-dogs", "28": "28-soft-drink-filling", "29": "29-expressway-drone", "30": "30-highway-traffic-aerial", "31": "31-night-gas-station-store", "32": "32-grain-elevator", "33": "33-abandoned-gas-station", "34": "34-shopping-aisle", "35": "35-rolling-pizza-dough", "36": "36-pizza-into-oven", "37": "37-pizza-out-of-oven", "38": "38-pizza-on-plate", "39": "39-silos-farm-field", "40": "40-pizza-sliced", "41": "41-highlighting-report", "42": "42-counting-money", "43": "43-stock-market-display", "44": "44-choosing-pastry-store", "45": "45-cash-register", "46": "46-scrolling-phone", "47": "47-holding-hot-dog", "48": "48-fuel-pump-close", "49": "49-coffee-to-go", "50": "50-night-highway-aerial", "51": "51-man-eating-pizza", "52": "52-highway-into-small-town"};
const LENS: Record<number, number> = {"1": 10.0, "2": 10.0, "3": 10.0, "4": 10.0, "5": 10.0, "6": 10.0, "7": 7.23, "8": 8.87, "9": 10.0, "10": 10.0, "11": 10.0, "12": 10.0, "13": 10.0, "14": 10.0, "15": 10.0, "16": 10.0, "17": 10.0, "18": 10.0, "19": 9.77, "20": 10.0, "21": 10.0, "22": 10.0, "23": 10.0, "24": 8.3, "25": 10.0, "26": 10.0, "27": 10.0, "28": 10.0, "29": 10.0, "30": 10.0, "31": 10.0, "32": 10.0, "33": 10.0, "34": 7.67, "35": 10.0, "36": 10.0, "37": 7.2, "38": 10.0, "39": 10.0, "40": 10.0, "41": 10.0, "42": 10.0, "43": 10.0, "44": 10.0, "45": 10.0, "46": 10.0, "47": 10.0, "48": 8.73, "49": 7.2, "50": 10.0, "51": 10.0, "52": 7.0};
setClips((n) => ({ src: staticFile(`broll/ep06/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 }));

type Beat = { from: number; to: number; tag?: [number, string]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 7.44, back: (<><Stock6 n={2} dur={7.44} dim={0} graphics={false} /></>), el: (<>
<TrailerFrame />
<Meme at={5.46} text="these people are robbing me" y={930} />
</>) },
  { from: 7.44, to: 13.08, back: (<><Stock6 n={1} dur={5.64} dim={0} graphics={true} /></>), el: (<>
<TrailerFrame />
<Center y={500}><BigNum at={3.9} icon="coin" size={210} label="WHAT THE STATION KEEPS · WHOLE 20-GALLON TANK">$2.60</BigNum></Center>
<Center y={860}><Label6 at={1.4} size={24} color={C6.ink}>OUR CALCULATION · 20 GAL × ~13¢</Label6></Center>
</>) },
  { from: 13.08, to: 17.38, back: (<><Stock6 n={20} dur={4.3} dim={0} graphics={true} /></>), el: (<>
<TrailerFrame />
<Center y={520}><Row gap={120}>
  <BigNum at={0.1} size={170} color={C6.ink} label="OF DRIVERS THINK">45%</BigNum>
  <BigNum at={1.7} size={170} label="PROFIT · PER GALLON">$2+</BigNum>
</Row></Center>
<Source6>NACS consumer survey</Source6>
</>) },
  { from: 17.38, to: 21.68, back: (<><Stock6 n={8} dur={4.3} dim={0} graphics={true} /></>), el: (<>
<TrailerFrame />
<Center y={500}><Counter6 to={122620} at={1.01} dur={1.0} fmt={(v) => Math.round(v).toLocaleString("en-US")} size={210} /></Center>
<Center y={680}><Label6 at={1.01} size={28}>GAS STATIONS · AND THEY STAY OPEN</Label6></Center>
<Source6>NACS / NIQ store count · Jan 2026</Source6>
</>) },
  { from: 21.68, to: 24.76, back: (<><Stock6 n={3} dur={3.08} dim={0} graphics={true} /></>), el: (<>
<TrailerFrame />
<Center y={520}><PriceSign at={0.05} price="$4.16" hlFrac={1.64} /></Center>
</>) },
  { from: 24.76, to: 28.64, back: (<><Stock6 n={22} dur={3.88} dim={0} graphics={false} />
<Stock6 n={23} from={2.54} dur={3.88} dim={0} graphics={false} /></>), el: (<>
<TrailerFrame />
<Center y={880}><Label6 at={0.64} size={40} color={C6.loss} out={2.54}>UP LIKE A ROCKET</Label6></Center>
<Center y={880}><Label6 at={2.54} size={40} color={C6.money}>DOWN LIKE A FEATHER</Label6></Center>
</>) },
  { from: 28.64, to: 32.58, back: (<><Stock6 n={5} dur={3.94} dim={0} graphics={true} /></>), el: (<>
<TrailerFrame />
<Center y={540}><Words text="Your coffee > your gas?" at={2.04} size={110} hl={["coffee"]} /></Center>
</>) },
  { from: 32.58, to: 38.46, back: (<><Stock6 n={52} dur={5.88} dim={0} graphics={true} />
<Stock6 n={7} from={3.88} dur={5.88} dim={0} graphics={true} /></>), el: (<>
<TrailerFrame />
<Center y={250}><Label6 at={2.08} size={30} color={C6.ink}>ONE TINY GAS STATION · IOWA</Label6></Center>
<Center y={560}><BigNum at={3.88} icon="pizza" size={220} label="PIZZA CHAIN IN AMERICA">#5</BigNum></Center>
</>) },
  { from: 38.46, to: 42.16, back: (<><Stock6 n={4} dur={3.7} dim={0} graphics={true} /></>), el: (<>
<TrailerFrame />
<Center y={540}><Words text="The gas was never the business." at={0.26} size={100} hl={["business."]} /></Center>
</>) },
  { from: 42.16, to: 44.52, hard: true, back: null, el: (<>
<Center y={520}><TitleCard at={0.05} title="Gas Is the Bait" hl={["Bait"]} /></Center>
</>) },
  { from: 44.52, to: 51.84, tag: [1, "The Dime"], back: (<><Stock6 n={31} dur={7.32} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><In at={0} out={4.08} from="fade"><ChapterCard n={1} title="The Dime" /></In></Center>
<Center y={560}><NameCard6 at={4.08} name="Mike" role="MADE UP · HIS NUMBERS ARE REAL" icon="pump" /></Center>
<Center y={780}><Label6 at={5.48} size={26} color={C6.ink}>ONE STATION · OFF A HIGHWAY · OHIO</Label6></Center>
</>) },
  { from: 51.84, to: 57.68, back: (<><Stock6 n={3} dur={5.84} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><PriceSign at={0.05} price="$4.17" /></Center>
<Center y={820}><Label6 at={3.92} size={26}>≈ U.S. AVERAGE · EARLY NOVEMBER</Label6></Center>
<Source6>AAA national average · Nov 1, 2026</Source6>
</>) },
  { from: 57.68, to: 61.84, back: (<><Stock6 n={9} dur={4.16} dim={0} graphics={true} /></>), el: (<>
<Meme at={2.34} text="me “owning” a gas station" y={900} />
</>) },
  { from: 61.84, to: 88.9, back: (<><Stock6 n={10} dur={27.06} dim={0.15} graphics={true} />
<Stock6 n={11} from={11.66} dur={27.06} dim={0.15} graphics={true} /></>), el: (<>
<GallonCutter at={0.1} slices={[
  { at: 9.12, label: "CRUDE OIL", value: "$1.85", frac: 0.595, color: "#3b4a50" },
  { at: 11.8, label: "REFINERY", value: "40¢", frac: 0.13, color: C6.blue },
  { at: 14.14, label: "TAXES", value: "≈51¢", frac: 0.164, color: C6.mint },
  { at: 22.0, label: "MIKE'S MARKUP", value: "35¢", frac: 0.113, color: C6.accent },
]} />
<Center y={1000}><Label6 at={16.16} out={22.0} size={22} color={C6.ink}>FEDERAL TAX 18.4¢ · NOT RAISED SINCE 1993</Label6></Center>
<Source6>NACS · example gallon at $3.11</Source6>
</>) },
  { from: 88.9, to: 92.16, back: (<><Stock6 n={14} dur={3.26} dim={0} graphics={false} /></>), el: (<>
<Meme at={1.54} text="Mike's boat (pending)" y={900} />
</>) },
  { from: 92.16, to: 101.82, back: (<><Stock6 n={13} dur={9.66} dim={0} graphics={true} />
<Stock6 n={15} from={6.48} dur={9.66} dim={0} graphics={true} /></>), el: (<>
<Center y={300}><BigNum at={0.05} size={150} punch={false} label="MIKE'S MARKUP">35¢</BigNum></Center>
<Center y={640}><Col gap={26}>
  <Label6 at={5.46} size={44} color={C6.loss}>−6¢ · TRUCK DELIVERY</Label6>
  <Label6 at={8.1} size={44} color={C6.loss}>−8.4¢ · CARD FEES (2023)</Label6>
</Col></Center>
<Source6>NACS</Source6>
</>) },
  { from: 101.82, to: 108.94, back: (<><Stock6 n={16} dur={7.12} dim={0} graphics={true} /></>), el: (<>
<CorpSub at={4.24} corp="Interchange & processing fees" human="We exist. Pay us." />
</>) },
  { from: 108.94, to: 122.78, back: (<><Stock6 n={45} dur={13.84} dim={0} graphics={true} /></>), el: (<>
<Center y={420}><Counter6 to={21.3} at={3.36} fmt={(v) => "$" + v.toFixed(1) + "B"} size={200} /></Center>
<Center y={580}><Label6 at={3.36} size={28}>CARD FEES · 2025 · A RECORD</Label6></Center>
<Center y={760}><Label6 at={5.88} size={34} color={C6.loss}>≈$4.6B OF IT · CHARGED ON TAXES</Label6></Center>
<Center y={900}><Stamp at={9.36} text="fees on taxes" /></Center>
<Source6>NACS · 2025</Source6>
</>) },
  { from: 122.78, to: 129.02, back: (<><Stock6 n={48} dur={6.24} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Row gap={110}>
  <Col><IconIn at={0.05} name="building" size={130} color={C6.ink} /><Label6 at={0.05} size={24}>LIGHTS</Label6></Col>
  <Col><IconIn at={1.22} name="person" size={130} color={C6.ink} /><Label6 at={1.22} size={24}>STAFF</Label6></Col>
  <Col><IconIn at={2.06} name="pump" size={130} color={C6.ink} /><Label6 at={2.06} size={24}>WEAR</Label6></Col>
  <Col><IconIn at={4.54} name="car" size={130} color={C6.loss} /><Label6 at={4.54} size={24} color={C6.loss}>DRIVE-OFFS</Label6></Col>
</Row></Center>
</>) },
  { from: 129.02, to: 135.92, back: null, el: (<>
<Center y={480}><BigNum at={1.9} icon="coin" size={260} label="WHAT MIKE KEEPS · PER GALLON">≈13¢</BigNum></Center>
<Center y={800}><Label6 at={3.76} size={30} color={C6.ink}>ON A GOOD DAY: A DIME AND CHANGE</Label6></Center>
<Source6>NACS · net margin 10–15¢</Source6>
</>) },
  { from: 135.92, to: 138.3, back: (<><Stock6 n={17} dur={2.38} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Words text="Now: your whole year." at={0.1} size={110} hl={["year."]} /></Center>
</>) },
  { from: 138.3, to: 151.0, back: (<><Stock6 n={50} dur={12.7} dim={0} graphics={true} /></>), el: (<>
<Center y={330}><Label6 at={2.14} size={36} color={C6.ink}>500+ GALLONS A YEAR × 13¢</Label6></Center>
<Center y={540}><BigNum at={6.08} icon="coin" size={220} color={C6.money} label="MIKE'S PROFIT FROM YOU · PER YEAR">≈$65</BigNum></Center>
<Center y={850}><Label6 at={10.5} size={24}>OUR CALCULATION · NACS DATA</Label6></Center>
</>) },
  { from: 151.0, to: 158.0, back: (<><Stock6 n={20} dur={7.0} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><BigNum at={3.22} icon="gallon" size={200} label="$65 ÷ $4.17 ≈ 15.6 GALLONS">1 TANK</BigNum></Center>
</>) },
  { from: 158.0, to: 165.98, back: null, el: (<>
<Center y={560}><TwoBars at={1.0} a={{ label: "WHAT DRIVERS IMAGINE", value: "$1,000", v: 1000 }} b={{ label: "REALITY", value: "$65", v: 65, at: 5.08 }} /></Center>
<Meme at={5.62} text="yep. that's you." y={140} size={70} />
</>) },
  { from: 165.98, to: 173.56, back: (<><Stock6 n={3} dur={7.58} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Words text="The only thing he controls: the sign." at={3.88} size={96} hl={["sign."]} /></Center>
</>) },
  { from: 173.56, to: 179.22, tag: [2, "The Sign"], back: null, el: (<>
<Center y={520}><In at={0} out={2.62} from="fade"><ChapterCard n={2} title="The Sign" /></In></Center>
<Center y={540}><In at={2.62} from="zoom"><PriceSign at={2.62} price="$4.17" hlFrac={4.3} scale={1.25} /></In></Center>
</>) },
  { from: 179.22, to: 186.14, back: (<><Stock6 n={18} dur={6.92} dim={0} graphics={false} /></>), el: (<>
<Meme at={5.78} text="looking for 9/10 of a cent" y={900} />
</>) },
  { from: 186.14, to: 193.36, back: (<><Stock6 n={19} dur={7.22} dim={0} graphics={true} sepia /></>), el: (<>
<Center y={300}><Label6 at={2.38} size={30} color={C6.ink}>REVENUE ACT OF 1932</Label6></Center>
<Center y={540}><BigNum at={6.22} size={220} label="FIRST FEDERAL GAS TAX · PER GALLON">1¢</BigNum></Center>
</>) },
  { from: 193.36, to: 202.3, back: (<><Stock6 n={33} dur={8.94} dim={0} graphics={true} sepia /></>), el: (<>
<Center y={480}><BigNum at={1.66} size={220} color={C6.ink} label="A GALLON · EARLY 1930s">&lt;20¢</BigNum></Center>
<Center y={800}><Label6 at={3.86} size={36} color={C6.loss}>+1¢ = A HUGE JUMP</Label6></Center>
</>) },
  { from: 202.3, to: 211.98, back: null, el: (<>
<Center y={160}><Label6 at={2.44} size={28}>9/10 BECOMES STANDARD · 1970s</Label6></Center>
<Center y={500}><Row gap={90}><PriceSign at={6.9} price="$4.17" frac="" scale={0.8} /><PriceSign at={6.9} price="$4.16" scale={0.8} /></Row></Center>
<Center y={880}><Words text="Feels cheaper." at={7.66} size={90} hl={["cheaper."]} /></Center>
</>) },
  { from: 211.98, to: 219.36, back: null, el: (<>
<Center y={520}><Donut6 at={4.66} pct={10} center="≤10%" label="OF FUEL PROFIT" /></Center>
<Source6>NACS · fractions of a penny</Source6>
</>) },
  { from: 219.36, to: 226.04, back: (<><Stock6 n={21} dur={6.68} dim={0} graphics={true} /></>), el: (<>
<Center y={420}><Stamp at={0.64} text="banned · Iowa, 1980s" out={3.66} /></Center>
<Center y={420}><Stamp at={3.66} text="ban repealed" color={C6.money} rotate={6} /></Center>
<Center y={760}><Words text="The nine-tenths won." at={4.94} size={90} hl={["won."]} /></Center>
</>) },
  { from: 226.04, to: 230.48, back: null, el: (<>
<Center y={420}><Row gap={160}><IconIn at={0.1} name="rocket" size={200} color={C6.loss} /><IconIn at={0.4} name="feather" size={200} color={C6.money} /></Row></Center>
<Center y={760}><Words text="It's physics. Kind of." at={2.56} size={84} hl={["Kind"]} /></Center>
</>) },
  { from: 230.48, to: 263.36, back: null, el: (<>
<Center y={500}><RocketFeather at={1.96} fall={16.0} /></Center>
<Center y={150}><Label6 at={13.68} out={16.0} size={32} color={C6.loss}>MIKE'S 13¢ → 0¢ (OR LESS)</Label6></Center>
<Center y={150}><Label6 at={24.08} size={30} color={C6.ink}>FTC STUDY, 2010 · UP 4×+ FASTER THAN DOWN</Label6></Center>
<Center y={930}><Words text="“Rockets and feathers.”" at={31.18} size={70} hl={["feathers.”"]} /></Center>
<Source6>AAA national average, 2026</Source6>
</>) },
  { from: 263.36, to: 269.92, back: (<><Stock6 n={23} dur={6.56} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Col gap={30}><Words text="Prices falling" at={2.2} size={96} /><Words text="= wider margins" at={5.1} size={110} hl={["wider"]} /></Col></Center>
</>) },
  { from: 269.92, to: 274.72, back: (<><Stock6 n={24} dur={4.8} dim={0} graphics={false} /></>), el: (<>
<Meme at={1.56} text="Mike, watching prices fall" y={900} />
</>) },
  { from: 274.72, to: 282.26, back: (<><Stock6 n={1} dur={7.54} dim={0} graphics={true} /></>), el: (<>
<Subscribe6 at={2.18} />
<Center y={540}><Words text="One business you use every day. Every week." at={2.8} size={72} hl={["Every"]} /></Center>
</>) },
  { from: 282.26, to: 289.2, back: null, el: (<>
<Center y={540}><Words text="So where does the money come from?" at={3.82} size={96} hl={["money"]} /></Center>
</>) },
  { from: 289.2, to: 290.46, tag: [3, "Inside"], back: (<><Stock6 n={25} dur={1.26} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><ChapterCard n={3} title="Inside" /></Center>
</>) },
  { from: 290.46, to: 295.74, back: (<><Stock6 n={34} dur={5.28} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><BigNum at={4.7} icon="store" size={230} label="OF PEOPLE WHO FILL UP · GO INSIDE">57%</BigNum></Center>
<Source6>NACS · Who Makes Money Selling Gas?</Source6>
</>) },
  { from: 295.74, to: 299.08, back: null, el: (<>
<Center y={540}><Words text="That walk is the whole business plan." at={0.05} size={96} hl={["walk", "plan."]} /></Center>
</>) },
  { from: 299.08, to: 312.62, back: null, el: (<>
<Center y={540}><Split6 at={3.12} left={{ title: "FUEL: 65% OF SALES → PROFIT", value: "39%", icon: "pump", color: C6.ink }} right={{ title: "THE STORE → PROFIT", value: "≈61%", icon: "store", at: 11.18 }} /></Center>
<Source6>NACS State of the Industry · 2025 data</Source6>
</>) },
  { from: 312.62, to: 318.36, back: (<><Stock6 n={26} dur={5.74} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Words text="The part you barely notice makes most of the money." at={2.36} size={84} maxW={1500} hl={["money."]} /></Center>
</>) },
  { from: 318.36, to: 325.78, back: (<><Stock6 n={30} dur={7.42} dim={0} graphics={false} />
<Stock6 n={44} from={5.22} dur={7.42} dim={0} graphics={false} /></>), el: (<>
<Meme at={4.18} out={5.22} text="gas: the side hustle" y={900} />
<Meme at={5.22} text="the candy aisle: CEO" y={900} />
</>) },
  { from: 325.78, to: 330.26, back: (<><Stock6 n={27} dur={4.48} dim={0} graphics={true} /></>), el: (<>
<Center y={900}><Label6 at={3.1} size={40} color={C6.accent}>BEHIND THE COUNTER</Label6></Center>
</>) },
  { from: 330.26, to: 339.68, back: (<><Stock6 n={28} dur={9.42} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Split6 at={3.4} left={{ title: "FOOD · SHARE OF INSIDE SALES", value: "28.5%", icon: "coffee", color: C6.ink }} right={{ title: "SHARE OF INSIDE PROFIT", value: "38.9%", icon: "coin", at: 6.34 }} /></Center>
<Source6>NACS State of the Industry · 2025 data</Source6>
</>) },
  { from: 339.68, to: 351.02, back: (<><Stock6 n={29} dur={11.34} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><Words text="To Mike, the gas is an ad." at={2.46} size={100} hl={["ad."]} /></Center>
<Center y={700}><Label6 at={6.6} size={34} color={C6.ink}>A GIANT GLOWING AD · THAT YOU PAY FOR</Label6></Center>
</>) },
  { from: 351.02, to: 353.68, back: (<><Stock6 n={15} dur={2.66} dim={0} graphics={false} /></>), el: (<>
<Center y={540}><Stamp at={0.15} text="paid advertisement" color={C6.accent} size={96} /></Center>
</>) },
  { from: 353.68, to: 363.98, back: (<><Stock6 n={50} dur={10.3} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><Label6 at={5.44} size={44} color={C6.loss}>GASOLINE USE ↓ · 2026–2027</Label6></Center>
<Center y={640}><Label6 at={8.02} size={30} color={C6.ink}>CARS GO FARTHER ON EVERY GALLON</Label6></Center>
<Source6>EIA forecast</Source6>
</>) },
  { from: 363.98, to: 371.24, back: (<><Stock6 n={31} dur={7.26} dim={0} graphics={false} /></>), el: (<>
<Meme at={4.3} text="restaurants with a really big parking lot" y={880} size={66} />
</>) },
  { from: 371.24, to: 382.14, back: (<><Stock6 n={47} dur={10.9} dim={0} graphics={true} />
<Stock6 n={6} from={5.78} dur={10.9} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Label6 at={8.58} size={34} color={C6.ink}>A TOWN OF ~12,000 PEOPLE</Label6></Center>
</>) },
  { from: 382.14, to: 388.96, tag: [4, "The Pizza"], back: (<><Stock6 n={33} dur={6.82} dim={0} graphics={true} sepia /></>), el: (<>
<Center y={500}><In at={0} out={1.36} from="fade"><ChapterCard n={4} title="The Pizza" /></In></Center>
<Center y={460}><Words text="Boone, Iowa · 1968" at={1.36} size={110} hl={["1968"]} /></Center>
<Center y={660}><Label6 at={5.02} size={32} color={C6.ink}>DON LAMBERTI BUYS A 3-BAY SERVICE STATION</Label6></Center>
</>) },
  { from: 388.96, to: 398.34, back: (<><Stock6 n={19} dur={9.38} dim={0} graphics={true} sepia /></>), el: (<>
<Center y={380}><NameCard6 at={2.18} name="Kurvin Fish" role="FUEL SUPPLIER · THE IDEA" /></Center>
<Center y={700}><In at={7.8} out={8.54} from="zoom"><Num6 size={170}>K.C.</Num6></In></Center>
<Center y={700}><BigNum at={8.54} size={170}>CASEY'S</BigNum></Center>
</>) },
  { from: 398.34, to: 404.58, back: (<><Stock6 n={39} dur={6.24} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Words text="Small towns nobody else wanted." at={3.26} size={96} hl={["Small", "towns"]} /></Center>
</>) },
  { from: 404.58, to: 412.68, back: (<><Stock6 n={35} dur={8.1} dim={0} graphics={true} />
<Stock6 n={36} from={6.56} dur={8.1} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><BigNum at={0.74} icon="pizza" size={230} label="PIZZA · MADE IN THE STORE · AT A GAS STATION">1984</BigNum></Center>
</>) },
  { from: 412.68, to: 419.46, back: (<><Stock6 n={51} dur={6.78} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><Counter6 to={85} at={5.58} dur={0.8} fmt={(v) => Math.round(v) + ""} size={240} /></Center>
<Center y={690}><Label6 at={5.58} size={30}>STORES SELLING PIZZA · END OF 1985</Label6></Center>
</>) },
  { from: 419.46, to: 428.28, back: (<><Stock6 n={38} dur={8.82} dim={0} graphics={false} /></>), el: (<>
<Center y={150}><Label6 at={2.5} size={36} color={C6.ink}>SAUSAGE GRAVY · ON A PIZZA</Label6></Center>
<Meme at={7.52} text="a balanced breakfast" y={900} />
</>) },
  { from: 428.28, to: 437.34, back: (<><Stock6 n={32} dur={9.06} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><BigNum at={1.5} icon="store" size={210} label="STORES · 19 STATES">≈2,950</BigNum></Center>
<Center y={800}><Label6 at={5.58} size={30} color={C6.ink}>NEARLY HALF · IN TOWNS OF ≤5,000 PEOPLE</Label6></Center>
</>) },
  { from: 437.34, to: 443.88, back: (<><Stock6 n={40} dur={6.54} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><BigNum at={3.52} icon="pizza" size={260} label="PIZZA CHAIN IN AMERICA">#5</BigNum></Center>
<Source6>Bank of America Research · via Fortune</Source6>
</>) },
  { from: 443.88, to: 451.38, back: (<><Stock6 n={41} dur={7.5} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><Stamp at={0.05} text="a gas station" color={C6.accent} size={110} out={1.4} /></Center>
<Center y={540}><Label6 at={2.56} size={40} color={C6.ink}>CASEY'S ANNUAL REPORT · FY2026</Label6></Center>
</>) },
  { from: 451.38, to: 457.74, back: (<><Stock6 n={48} dur={6.36} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Row gap={140}>
  <BigNum at={1.68} size={170} color={C6.ink} label="GALLONS SOLD">3.52B</BigNum>
  <BigNum at={4.6} size={170} label="KEPT PER GALLON">≈43¢</BigNum>
</Row></Center>
<Source6>Casey's 10-K · fiscal year ended Apr 30, 2026</Source6>
</>) },
  { from: 457.74, to: 464.04, back: (<><Stock6 n={44} dur={6.3} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><BigNum at={2.2} icon="pizza" size={240} label="KEPT FROM EVERY $1 · FOOD & DRINKS">≈59¢</BigNum></Center>
<Center y={800}><Label6 at={4.34} size={26} color={C6.ink}>BEFORE THE COST OF RUNNING THE STORE</Label6></Center>
<Source6>Casey's 10-K · fiscal year ended Apr 30, 2026</Source6>
</>) },
  { from: 464.04, to: 474.44, back: null, el: (<>
<Center y={540}><Split6 at={1.34} left={{ title: "$10 OF GAS ≈ 2.4 GALLONS", value: "≈$1", icon: "pump", color: C6.ink }} right={{ title: "$10 OF PIZZA", value: "≈$5.86", icon: "pizza", at: 7.62 }} /></Center>
<Source6>Our calculation · Casey's FY2026 margins · AAA $4.17</Source6>
</>) },
  { from: 474.44, to: 479.0, back: null, el: (<>
<Center y={520}><BigNum at={2.32} size={300}>≈6×</BigNum></Center>
<Center y={780}><Label6 at={1.12} size={30} color={C6.ink}>SAME CUSTOMER · SAME TEN BUCKS</Label6></Center>
</>) },
  { from: 479.0, to: 487.56, back: null, el: (<>
<Center y={150}><Label6 at={0.1} size={28}>CASEY'S · FOOD + STORE ITEMS · LAST 3 FISCAL YEARS</Label6></Center>
<Center y={560}><Row gap={160}>
  <Col><Donut6 at={2.82} pct={36} center="36%" color={C6.ink} /><Label6 at={2.82} size={26}>OF REVENUE</Label6></Col>
  <Col><Donut6 at={5.48} pct={63} center="63%" /><Label6 at={5.48} size={26}>OF GROSS PROFIT</Label6></Col>
</Row></Center>
<Source6>Casey's 10-K · fiscal year ended Apr 30, 2026</Source6>
</>) },
  { from: 487.56, to: 497.38, back: (<><Stock6 n={43} dur={9.82} dim={0} graphics={true} /></>), el: (<>
<Center y={460}><BigNum at={1.72} size={240} color={C6.money} label="NET INCOME · FY2026">$714M</BigNum></Center>
<Center y={780}><Label6 at={6.2} size={34} color={C6.ink}>JOINED THE S&amp;P 500 · APRIL 2026</Label6></Center>
<Source6>Casey's 10-K · fiscal year ended Apr 30, 2026</Source6>
</>) },
  { from: 497.38, to: 504.32, back: (<><Stock6 n={7} dur={6.94} dim={0} graphics={false} /></>), el: (<>
<Meme at={5.1} text="parking lot: very large" y={900} />
</>) },
  { from: 504.32, to: 507.08, back: (<><Stock6 n={2} dur={2.76} dim={0} graphics={false} /></>), el: (<>
<Meme at={1.84} text="these people are robbing me" y={930} size={60} />
</>) },
  { from: 507.08, to: 513.0, back: null, el: (<>
<GallonCutter at={0} slices={[
  { at: 0.05, label: "CRUDE OIL", value: "$1.85", frac: 0.595, color: "#3b4a50" },
  { at: 0.15, label: "REFINERY", value: "40¢", frac: 0.13, color: C6.blue },
  { at: 0.25, label: "TAXES", value: "≈51¢", frac: 0.164, color: C6.mint },
  { at: 0.35, label: "MIKE KEEPS ≈13¢", value: "35¢", frac: 0.113, color: C6.accent },
]} shrink={{ at: 3.12, to: 0.37, label: "NOBODY GETS RICH ON THE GAS" }} />
</>) },
  { from: 513.0, to: 518.32, back: (<><Stock6 n={25} dur={5.32} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><Counter6 to={20} at={2.68} dur={0.8} fmt={(v) => Math.round(v) + " steps"} size={190} /></Center>
<Center y={690}><Label6 at={3.38} size={30} color={C6.ink}>BETWEEN THE PUMP AND THE DOOR</Label6></Center>
</>) },
  { from: 518.32, to: 524.56, back: (<><Stock6 n={49} dur={6.24} dim={0} graphics={true} />
<Stock6 n={26} from={2.82} dur={6.24} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Words text="Gas pulls you in. Food pays the bills." at={0.8} size={92} maxW={1500} hl={["in.", "bills."]} /></Center>
</>) },
  { from: 524.56, to: 531.84, back: (<><Stock6 n={4} dur={7.28} dim={0} graphics={false} />
<Stock6 n={36} from={6.1} dur={7.28} dim={0} graphics={false} /></>), el: (<>
<Meme at={5.3} text="still figuring out the pizza" y={900} />
</>) },
  { from: 531.84, to: 535.66, back: (<><Stock6 n={24} dur={3.82} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.84} text="Mike, 2027" y={900} />
</>) },
  { from: 535.66, to: 540.36, back: null, el: (<>
<Center y={500}><Words text="You know who you're paying." at={3.04} size={100} hl={["paying."]} /></Center>
</>) },
  { from: 540.36, to: 543.74, back: (<><Stock6 n={18} dur={3.38} dim={0} graphics={false} /></>), el: (<>
<Meme at={1.82} text="still looking" y={900} />
</>) },
  { from: 543.74, to: 549.06, back: (<><Stock6 n={46} dur={5.32} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Words text="What do you always grab inside?" at={0.1} size={96} hl={["grab"]} /></Center>
</>) },
  { from: 549.06, to: 577.24, back: null, el: (<>
<EndCard6 at={0.1} next="Costco's $1.50 hot dog" />
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string][] = [];

export const Ep06Gas: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/ep06-voiceover.mp3")} />

      {SFX.map(([t, n], i) => (
        <Sequence key={"s" + i} from={Math.round(t * fps)} durationInFrames={60}><Audio src={staticFile(`sfx/${n}.wav`)} volume={0.3} /></Sequence>
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
