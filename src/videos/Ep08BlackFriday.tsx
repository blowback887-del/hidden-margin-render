import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Bg6, BigNum, Bug6, C6, Center, ChapterCard, ChapterTag, Col, CorpSub, Counter6, Donut6, EndCard6, In, Label6, Meme, NameCard6, Num6, Row, Scene6, setClips, Source6, Split6, Stamp, Stock6, Subscribe6, TagLayers, PriceLine, LossGain, TitleCard, Words } from "../brand/hm6";

// ===================================================================
// Ep08BlackFriday — сгенерировано cloud/gen/build.py из плана cloud/gen/ep08.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const EP08BLACKFRIDAY_DURATION_SEC = 575.84;
const CLIPS: Record<number, string> = {"1": "01-mall-crowd-high", "2": "02-appliance-store", "3": "03-tape-measure", "4": "04-store-parking-night", "5": "05-factory-conveyor", "6": "06-factory-floor", "7": "07-queue-outside", "8": "08-people-in-line", "9": "09-man-newspaper", "10": "10-calendar-wall", "11": "11-calendar-november", "12": "12-crt-static", "13": "13-suspicious-peer", "14": "14-incredulous-glasses", "15": "15-couple-watching", "16": "16-couple-tv", "17": "17-chess-fall", "18": "18-family-popcorn", "19": "19-magnifier-letter", "20": "20-sliding-doors", "21": "21-mall-rush", "22": "22-fish-hook", "23": "23-bread-basket", "24": "24-steak-plate", "25": "25-london-xmas", "26": "26-london-walk", "27": "27-aisle-empty", "28": "28-countdown-digital", "29": "29-warehouse-forklift", "30": "30-warehouse-aisles", "31": "31-signing-doc", "32": "32-charts-magnifier", "33": "33-disappointed-man", "34": "34-face-in-hands", "35": "35-remote-closeup", "36": "36-remote-switching", "37": "37-family-tv-side", "38": "38-highway-drone", "39": "39-checkout", "40": "40-man-remote-couch", "41": "41-friends-football", "42": "42-dry-bush", "43": "43-cables", "44": "44-dvd-collection", "45": "45-boxes-into-car", "46": "46-living-room-tv", "47": "47-sale-tags", "48": "48-bf-tags", "49": "49-counting-money", "50": "50-server", "51": "51-shocked-man", "52": "52-mall-day", "53": "53-bf-bags-man", "54": "54-old-tv-window", "55": "55-man-tv-night", "56": "56-circuit-board", "57": "57-control-room", "58": "58-cashier-card", "59": "59-fans-sports", "60": "60-living-minimal"};
const LENS: Record<number, number> = {"1": 10.0, "2": 8.47, "3": 10.0, "4": 10.0, "5": 7.13, "6": 10.0, "7": 3.53, "8": 10.0, "9": 10.0, "10": 8.87, "11": 10.0, "12": 10.0, "13": 10.0, "14": 10.0, "15": 10.0, "16": 10.0, "17": 8.47, "18": 10.0, "19": 10.0, "20": 10.0, "21": 8.0, "22": 10.0, "23": 10.0, "24": 6.5, "25": 10.0, "26": 10.0, "27": 10.0, "28": 10.0, "29": 10.0, "30": 10.0, "31": 7.33, "32": 10.0, "33": 10.0, "34": 10.0, "35": 7.2, "36": 10.0, "37": 10.0, "38": 10.0, "39": 10.0, "40": 10.0, "41": 10.0, "42": 4.17, "43": 10.0, "44": 10.0, "45": 10.0, "46": 10.0, "47": 10.0, "48": 10.0, "49": 10.0, "50": 10.0, "51": 10.0, "52": 7.43, "53": 10.0, "54": 10.0, "55": 10.0, "56": 7.0, "57": 8.57, "58": 9.43, "59": 10.0, "60": 10.0};
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/ep08/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 });
setClips(CLIP_FN);

type Beat = { from: number; to: number; tag?: [number, string]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 6.76, back: (<><Stock6 n={60} dur={6.76} dim={0} graphics={true} /></>), el: (<>
<Center y={180}><div style={{ padding: "18px 44px", borderRadius: 22, background: C6.panel }}><Words text="This is a 65-inch TV." at={0.05} size={76} hl={["65-inch"]} /></div></Center>
<Center y={560}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><BigNum at={0.3} icon="store" size={260} label="WALMART · BLACK FRIDAY 2025">$228</BigNum></div></Center>
<Source6>65-inch Vizio listed at $228, was $448 · GamesRadar, Nov 27, 2025</Source6>
</>) },
  { from: 6.76, to: 9.94, back: (<><Stock6 n={3} dur={3.18} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.68} text="$3.50 an inch" y={900} />
</>) },
  { from: 9.94, to: 14.48, back: (<><Stock6 n={2} dur={4.54} dim={0} graphics={true} />
<Stock6 n={5} from={2.9} dur={4.54} dim={0} graphics={true} /></>), el: (<>
<Center y={300}><Words text="Who's losing money?" at={0.05} size={96} hl={["losing"]} /></Center>
<Center y={620}><Stamp at={3.92} text="nobody" color={C6.accent} size={130} /></Center>
</>) },
  { from: 14.48, to: 27.64, back: null, el: (<>
<Center y={540}><div style={{ scale: "1.2" }}><TagLayers at={0.05} layers={[{ text: "Not quite the TV you think", at: 3.16 }, { text: "Not really selling TVs", at: 6.3 }, { text: "A screen that keeps earning", at: 9.12 }]} /></div></Center>
</>) },
  { from: 27.64, to: 29.36, hard: true, back: null, el: (<>
<Center y={520}><TitleCard at={0} title="It's Not a Discount" hl={["Not"]} /></Center>
</>) },
  { from: 29.36, to: 37.0, tag: [1, "The Model"], back: (<><Stock6 n={8} dur={7.64} dim={0} graphics={true} /></>), el: (<>
<Center y={300}><In at={0} out={2.48} from="fade"><ChapterCard n={1} title="The Model" /></In></Center>
<Center y={600}><div style={{ scale: "1.5" }}><NameCard6 at={2.48} name="Dave" role="MADE UP · THE MATH IS REAL" icon="person" /></div></Center>
</>) },
  { from: 37.0, to: 40.16, back: (<><Stock6 n={9} dur={3.16} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.06} text="x marks the tv" y={900} />
</>) },
  { from: 40.16, to: 44.72, back: null, el: (<>
<Center y={300}><Words text="Front page: a huge name-brand TV." at={0.05} size={84} hl={["Front", "page:"]} maxW={1500} /></Center>
<Center y={660}><Stamp at={3.3} text="half off" color={C6.accent} size={150} /></Center>
</>) },
  { from: 44.72, to: 51.16, back: null, el: (<>
<Center y={300}><Label6 at={0.1} size={40} color={C6.ink}>WHAT DAVE DOESN'T KNOW</Label6></Center>
<Center y={560}><Words text="It did not exist in September." at={3.34} size={104} hl={["September."]} maxW={1500} /></Center>
</>) },
  { from: 51.16, to: 56.74, back: null, el: (<>
<Center y={240}><Label6 at={0.05} size={40} color={C6.ink}>THE INDUSTRY HAS A WORD FOR IT</Label6></Center>
<Center y={480}><Words text="Derivative" at={2.18} size={220} hl={["Derivative"]} /></Center>
<Center y={760}><Label6 at={3.5} size={46} color={C6.ink}>A MODEL BUILT FOR THE SALE</Label6></Center>
</>) },
  { from: 56.74, to: 65.9, back: null, el: (<>
<Center y={300}><Col gap={22}>
  <Label6 at={0.1} size={42} color={C6.ink}>✓ SAME LOGO</Label6>
  <Label6 at={1.0} size={42} color={C6.ink}>✓ SAME SIZE</Label6>
  <Label6 at={1.94} size={42} color={C6.ink}>✓ LOOKS IDENTICAL</Label6>
</Col></Center>
<Center y={680}><Label6 at={4.36} size={48} color={C6.accent}>✗ A SLIGHTLY DIFFERENT MODEL NUMBER</Label6></Center>
<Center y={800}><Label6 at={6.2} size={48} color={C6.loss}>✗ SLIGHTLY LESS TV INSIDE</Label6></Center>
</>) },
  { from: 65.9, to: 72.92, back: (<><Stock6 n={32} dur={7.02} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={30}><Words text="Not a conspiracy theory." at={0.05} size={96} hl={["Not"]} /><Label6 at={3.52} size={40} color={C6.accent}>NBC NEWS · VENTUREBEAT · NOVEMBER 2015</Label6></Col></div></Center>
</>) },
  { from: 72.92, to: 78.84, back: (<><Stock6 n={54} dur={5.92} dim={0} graphics={true} /></>), el: (<>
<Center y={170}><div style={{ padding: "16px 40px", borderRadius: 22, background: C6.panel }}><Label6 at={0.05} size={40} color={C6.ink}>BEST BUY · BLACK FRIDAY 2015 · 60-INCH SAMSUNG</Label6></div></Center>
<Center y={500}><In at={2.84} from="zoom"><div style={{ padding: "10px 60px", borderRadius: 22, background: C6.panel }}><Num6 size={220}>$799.99</Num6></div></In></Center>
<Center y={820}><div style={{ padding: "16px 40px", borderRadius: 22, background: C6.panel }}><Label6 at={4.46} size={56} color={C6.loss}>“REGULARLY” $1,499.99</Label6></div></Center>
<Source6>NBC News · VentureBeat · November 2015</Source6>
</>) },
  { from: 78.84, to: 87.2, back: (<><Stock6 n={19} dur={8.36} dim={0} graphics={true} /></>), el: (<>
<Center y={200}><div style={{ padding: "16px 40px", borderRadius: 22, background: C6.panel }}><Label6 at={0.05} size={40} color={C6.ink}>ONE PROBLEM: THE MODEL NUMBER</Label6></div></Center>
<Center y={540}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Words text="“…it doesn’t exist anywhere else.”" at={2.08} size={92} hl={["anywhere", "else.”"]} maxW={1500} /></div></Center>
<Center y={860}><div style={{ padding: "16px 40px", borderRadius: 22, background: C6.panel }}><Label6 at={6.5} size={44} color={C6.accent}>ONLY AT BEST BUY</Label6></div></Center>
<Source6>VentureBeat · Nov 24, 2015</Source6>
</>) },
  { from: 87.2, to: 91.16, back: (<><Stock6 n={14} dur={3.96} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.22} text="“regularly.” sure." y={900} />
</>) },
  { from: 91.16, to: 100.12, back: null, el: (<>
<Center y={130}><Label6 at={0.05} size={38} color={C6.ink}>58-INCH VIZIO · MADE FOR THE HOLIDAY · 2015 · DIMMING ZONES</Label6></Center>
<Center y={560}><Split6 at={0.3} left={{ title: "THE HOLIDAY MODEL", value: "10", icon: "store", color: C6.loss }} right={{ title: "ITS REGULAR COUSINS", value: "16–32", icon: "store", at: 5.68 }} /></Center>
<Source6>NBC News · VentureBeat · November 2015</Source6>
</>) },
  { from: 100.12, to: 105.12, back: (<><Stock6 n={12} dur={5.0} dim={0} graphics={true} /></>), el: (<>
<Center y={300}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Label6 at={0.05} size={50} color={C6.ink}>60Hz · THE BIGGER M-SERIES: 120Hz</Label6></div></Center>
<Meme at={3.8} text="technically 4K" y={880} />
</>) },
  { from: 105.12, to: 112.14, back: (<><Stock6 n={46} dur={7.02} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={26}><Label6 at={0.05} size={38} color={C6.ink}>WHAT GETS TRIMMED</Label6><Label6 at={4.04} size={56} color={C6.accent}>− AN HDMI PORT</Label6><Label6 at={5.62} size={56} color={C6.accent}>− SOME BRIGHTNESS</Label6></Col></div></Center>
</>) },
  { from: 112.14, to: 118.48, back: (<><Stock6 n={15} dur={6.34} dim={0} graphics={false} />
<Stock6 n={16} from={3.0} dur={6.34} dim={0} graphics={false} /></>), el: (<>
<Meme at={5.16} text="4K (of fog)" y={900} />
</>) },
  { from: 118.48, to: 122.6, back: null, el: (<>
<Center y={540}><Words text="It's the whole trick." at={0.05} size={130} hl={["trick."]} /></Center>
</>) },
  { from: 122.6, to: 129.68, back: null, el: (<>
<Center y={540}><Split6 at={0.1} left={{ title: "PRICE HISTORY", value: "NONE", icon: "clock", color: C6.loss }} right={{ title: "SO “REGULAR PRICE” CAN BE", value: "ANY", icon: "percent", at: 4.04 }} /></Center>
</>) },
  { from: 129.68, to: 137.48, back: (<><Stock6 n={17} dur={7.8} dim={0} graphics={true} /></>), el: (<>
<Center y={420}><Stamp at={3.46} text="price match: denied" color={C6.loss} size={96} /></Center>
<Meme at={6.36} text="checkmate, dave" y={900} />
</>) },
  { from: 137.48, to: 142.62, back: (<><Stock6 n={18} dur={5.14} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Label6 at={1.36} size={40} color={C6.ink}>PLENTY OF BLACK FRIDAY TVs ARE HONEST DEALS</Label6></Center>
</>) },
  { from: 142.62, to: 148.72, back: (<><Stock6 n={9} dur={6.1} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Label6 at={4.66} size={44} color={C6.accent}>THE FRONT-PAGE ONE HAS A DIFFERENT JOB</Label6></Center>
</>) },
  { from: 148.72, to: 150.66, back: null, el: (<>
<Center y={540}><div style={{ scale: "1.2" }}><TagLayers at={0.05} layers={[{ text: "A different TV", done: true }, { text: "?" }, { text: "?" }]} /></div></Center>
</>) },
  { from: 150.66, to: 158.1, back: null, el: (<>
<Center y={240}><Words text="Read the fine print." at={0.05} size={84} hl={["fine", "print."]} /></Center>
<Center y={560}><Words text="“Minimum 5 per store”" at={2.86} size={140} hl={["5"]} /></Center>
<Source6>Ad wording reported by CNNMoney, 2009</Source6>
</>) },
  { from: 158.1, to: 161.8, back: (<><Stock6 n={7} dur={3.7} dim={0} graphics={false} /></>), el: (<>
<Meme at={1.58} text="dave: #9 of 5" y={900} />
</>) },
  { from: 161.8, to: 167.42, tag: [2, "The Bait"], back: (<><Stock6 n={22} dur={5.62} dim={0} graphics={true} /></>), el: (<>
<Center y={440}><In at={0} out={2.56} from="fade"><ChapterCard n={2} title="The Bait" /></In></Center>
<CorpSub at={4.2} corp="Doorbuster" human="Bait." />
</>) },
  { from: 167.42, to: 171.88, back: (<><Stock6 n={47} dur={4.46} dim={0} graphics={true} /></>), el: (<>
<Center y={440}><BigNum at={0.68} icon="store" size={220} color={C6.ink} label="WHAT THE STORE MAY MAKE ON THAT TV">≈$0</BigNum></Center>
<Center y={800}><Label6 at={3.34} size={44} color={C6.loss}>OR A SMALL LOSS</Label6></Center>
</>) },
  { from: 171.88, to: 181.9, back: null, el: (<>
<Center y={170}><Words text="Who eats the loss?" at={0.05} size={76} hl={["loss?"]} /></Center>
<Center y={520}><Words text="“Manufacturers pay for most of the loss.”" at={2.98} size={100} hl={["Manufacturers"]} maxW={1500} /></Center>
<Center y={840}><Label6 at={2.98} size={32} color={C6.accent}>STEPHEN BAKER · ELECTRONICS ANALYST, NPD</Label6></Center>
<Source6>Star Tribune · Nov 28, 2018</Source6>
</>) },
  { from: 181.9, to: 186.12, back: (<><Stock6 n={30} dur={4.22} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Label6 at={1.56} size={44} color={C6.ink}>A LIMITED NUMBER PER STORE → THE LOSS IS CAPPED</Label6></Center>
</>) },
  { from: 186.12, to: 193.82, back: (<><Stock6 n={20} dur={7.7} dim={0} graphics={true} /></>), el: (<>
<Center y={420}><Words text="What the store bought: Dave." at={1.58} size={104} hl={["Dave."]} maxW={1500} /></Center>
<Center y={860}><Label6 at={5.46} size={40} color={C6.accent}>AT DAWN · WALLET OUT · ADRENALINE UP</Label6></Center>
</>) },
  { from: 193.82, to: 199.44, back: (<><Stock6 n={8} dur={5.62} dim={0} graphics={true} /></>), el: (<>
<Center y={860}><Label6 at={2.04} size={42} color={C6.ink}>BEST BUY: A NUMBER SYSTEM FOR ITS DOORBUSTERS</Label6></Center>
<Source6>Star Tribune · Nov 28, 2018</Source6>
</>) },
  { from: 199.44, to: 203.94, back: (<><Stock6 n={52} dur={4.5} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.14} out={3.06} text="not a sale" y={900} />
<Meme at={3.06} text="a show" y={900} />
</>) },
  { from: 203.94, to: 206.28, back: (<><Stock6 n={33} dur={2.34} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.74} text="sold out at #5" y={900} />
</>) },
  { from: 206.28, to: 209.74, back: null, el: (<>
<Center y={500}><BigNum at={2.2} icon="store" size={240} label="THE NICER ONE · RIGHT NEXT TO IT">+$150</BigNum></Center>
</>) },
  { from: 209.74, to: 222.14, back: (<><Stock6 n={2} dur={12.4} dim={0} graphics={true} /></>), el: (<>
<Center y={470}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={24} align="flex-start"><Label6 at={0.05} size={36} color={C6.mint}>DAVE’S CART</Label6><Label6 at={0.8} size={52} color={C6.ink}>+ WALL MOUNT</Label6><Label6 at={1.82} size={52} color={C6.ink}>+ SOUNDBAR</Label6><Label6 at={5.72} size={52} color={C6.accent}>+ HDMI CABLE (WITH GOLD)</Label6><Label6 at={10.8} size={52} color={C6.ink}>+ PROTECTION PLAN</Label6></Col></div></Center>
<Meme at={5.14} out={5.72} text="sounds like a phone in a mug" y={950} size={58} />
</>) },
  { from: 222.14, to: 229.3, back: null, el: (<>
<Center y={520}><Split6 at={0.1} left={{ title: "MARGIN ON THE TV", value: "LOW", icon: "store", color: C6.ink }} right={{ title: "MARGIN ON THE ACCESSORIES", value: "HIGH", icon: "bag", at: 3.42 }} /></Center>
<Source6>Carol Spieckerman, retail consultant · Star Tribune, 2018</Source6>
</>) },
  { from: 229.3, to: 234.72, back: (<><Stock6 n={23} dur={5.42} dim={0} graphics={false} />
<Stock6 n={24} from={3.4} dur={5.42} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.58} out={3.4} text="tv = free bread" y={900} />
<Meme at={4.42} text="soundbar = steak" y={900} />
</>) },
  { from: 234.72, to: 241.6, back: (<><Stock6 n={1} dur={6.88} dim={0} graphics={true} /></>), el: (<>
<Center y={420}><Counter6 to={203} at={3.0} dur={0.9} fmt={(v) => Math.round(v) + "M"} size={230} /></Center>
<Center y={620}><Label6 at={3.0} size={30}>SHOPPERS · THANKSGIVING WEEKEND 2025 · A RECORD</Label6></Center>
<Source6>National Retail Federation · Dec 2, 2025 · 202.9 million</Source6>
</>) },
  { from: 241.6, to: 246.3, back: null, el: (<>
<Center y={480}><BigNum at={0.1} icon="store" size={230} color={C6.ink} label="WALKED INTO A STORE · BLACK FRIDAY ITSELF">80.3M</BigNum></Center>
<Source6>National Retail Federation · Dec 2, 2025</Source6>
</>) },
  { from: 246.3, to: 250.96, back: (<><Stock6 n={49} dur={4.66} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.38} text="not a charity event" y={900} />
</>) },
  { from: 250.96, to: 258.66, back: (<><Stock6 n={37} dur={7.7} dim={0} graphics={true} /></>), el: (<>
<Subscribe6 at={3.24} />
<Center y={880}><Label6 at={6.38} size={40} color={C6.accent}>FREE · AN ACTUAL DISCOUNT</Label6></Center>
</>) },
  { from: 258.66, to: 263.22, tag: [3, "The Deadline"], back: null, el: (<>
<Center y={540}><In at={0} out={2.52} from="fade"><div style={{ scale: "1.2" }}><TagLayers at={0.05} layers={[{ text: "A different TV", done: true }, { text: "The TV is bait", done: true }, { text: "?" }]} /></div></In></Center>
<Center y={540}><Words text="Is the price even special?" at={2.52} size={120} hl={["special?"]} /></Center>
</>) },
  { from: 263.22, to: 267.64, back: (<><Stock6 n={25} dur={4.42} dim={0} graphics={true} /></>), el: (<>
<Center y={300}><Label6 at={1.6} size={48} color={C6.accent}>WHICH? · UK CONSUMER GROUP</Label6></Center>
<Meme at={3.04} text="petty (complimentary)" y={900} size={66} />
</>) },
  { from: 267.64, to: 270.82, back: (<><Stock6 n={10} dur={3.18} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><BigNum at={0.1} icon="calendar" size={200} label="OF PRICES · MAY 2024 – MAY 2025">12 months</BigNum></div></Center>
</>) },
  { from: 270.82, to: 275.98, back: null, el: (<>
<Center y={500}><Row gap={220}>
  <BigNum at={0.1} size={240} label="PRODUCTS">175</BigNum>
  <BigNum at={3.56} size={240} color={C6.ink} label="BIG UK RETAILERS">8</BigNum>
</Row></Center>
</>) },
  { from: 275.98, to: 281.14, back: null, el: (<>
<Center y={470}><Donut6 at={0.1} pct={83} center="83%" size={560} /></Center>
<Center y={900}><Label6 at={1.36} size={38} color={C6.ink}>SAME PRICE OR CHEAPER AT ANOTHER TIME OF YEAR</Label6></Center>
<Source6>Which? · Nov 25, 2025 · 175 products, 8 UK retailers</Source6>
</>) },
  { from: 281.14, to: 288.52, back: (<><Stock6 n={26} dur={7.38} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={18}><Label6 at={0.05} size={36} color={C6.ink}>ON BLACK FRIDAY ITSELF</Label6><In at={1.74} from="zoom"><Num6 size={300} color={C6.loss}>0</Num6></In><Label6 at={1.74} size={38} color={C6.ink}>DEALS AT THEIR LOWEST PRICE OF THE YEAR</Label6></Col></div></Center>
<Source6>Which? · Nov 25, 2025 · 175 products, 8 UK retailers</Source6>
</>) },
  { from: 288.52, to: 299.58, back: null, el: (<>
<Center y={520}><PriceLine at={0.1} top="£1,039" low="£759" days="CHEAPER ON 134 DAYS · NEXT 6 MONTHS" daysAt={7.12} lowAt={10.22} /></Center>
<Source6>Which? · Samsung 55-inch TV at AO</Source6>
</>) },
  { from: 299.58, to: 310.18, back: (<><Stock6 n={54} dur={10.6} dim={0} graphics={true} />
<Stock6 n={36} from={6.1} dur={10.6} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><BigNum at={6.7} size={240} label="OF TVs WERE CHEAPER AFTER BLACK FRIDAY">≈40%</BigNum></Center>
<Source6>Jim Willcox, Consumer Reports · NBC News, 2015</Source6>
</>) },
  { from: 310.18, to: 313.68, back: (<><Stock6 n={42} dur={3.5} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.02} text="everyone: gone" y={900} />
</>) },
  { from: 313.68, to: 318.16, back: (<><Stock6 n={28} dur={4.48} dim={0} graphics={true} /></>), el: (<>
<Center y={180}><div style={{ padding: "18px 44px", borderRadius: 22, background: C6.panel }}><Words text="The urgency is the product." at={2.16} size={84} hl={["product."]} /></div></Center>
<Center y={840}><Stamp at={0.15} text="deadline: fake" color={C6.accent} size={90} /></Center>
</>) },
  { from: 318.16, to: 322.28, tag: [4, "The Screen"], back: (<><Stock6 n={29} dur={4.12} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><In at={0} out={1.76} from="fade"><ChapterCard n={4} title="The Screen" /></In></Center>
<Center y={520}><BigNum at={1.76} size={260} label="STILL UNEXPLAINED">$228</BigNum></Center>
</>) },
  { from: 322.28, to: 329.82, back: (<><Stock6 n={30} dur={7.54} dim={0} graphics={true} /></>), el: (<>
<Center y={300}><Col gap={22}>
  <Label6 at={0.1} size={44} color={C6.ink}>✓ REAL 65 INCHES</Label6>
  <Label6 at={2.02} size={44} color={C6.ink}>✓ REAL BRAND</Label6>
  <Label6 at={3.04} size={44} color={C6.ink}>✓ STACKED TO THE CEILING</Label6>
</Col></Center>
<Center y={820}><Words text="How does anybody survive that?" at={4.64} size={76} hl={["survive"]} /></Center>
</>) },
  { from: 329.82, to: 334.48, back: (<><Stock6 n={31} dur={4.66} dim={0} graphics={true} /></>), el: (<>
<Center y={860}><Label6 at={1.9} size={44} color={C6.accent}>READ THE TV COMPANY'S OWN PAPERWORK</Label6></Center>
</>) },
  { from: 334.48, to: 338.66, back: (<><Stock6 n={5} dur={4.18} dim={0} graphics={true} /></>), el: (<>
<Center y={860}><div style={{ padding: "20px 44px", borderRadius: 22, background: C6.panel }}><Label6 at={0.05} size={46} color={C6.ink}>THE BORING HALF: SCREENS GOT CHEAP TO MAKE</Label6></div></Center>
</>) },
  { from: 338.66, to: 348.18, back: null, el: (<>
<Center y={520}><Split6 at={0.2} left={{ title: "2008 · A 32-INCH", value: "under $400", icon: "store", color: C6.ink }} right={{ title: "2018 · A 60-INCH", value: "same price", icon: "store", at: 6.26 }} /></Center>
<Source6>Paul Gagnon, IHS Markit · Star Tribune, 2018</Source6>
</>) },
  { from: 348.18, to: 354.04, back: null, el: (<>
<Center y={520}><Words text="Somebody has to want to sell it at a loss." at={0.1} size={96} hl={["want", "loss."]} maxW={1400} /></Center>
</>) },
  { from: 354.04, to: 356.66, hard: true, back: null, el: (<>
<Center y={540}><Words text="The fun half." at={0.05} size={170} hl={["fun"]} /></Center>
</>) },
  { from: 356.66, to: 363.18, back: (<><Stock6 n={6} dur={6.52} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={24}><Label6 at={0.05} size={44} color={C6.accent}>VIZIO · ANNUAL REPORT · 2023</Label6><BigNum at={2.72} icon="store" size={230} color={C6.ink} label="TVs AND SOUNDBARS SOLD">$1.08B</BigNum></Col></div></Center>
<Source6>Vizio annual report (10-K) · fiscal 2023</Source6>
</>) },
  { from: 363.18, to: 367.62, back: null, el: (<>
<Center y={190}><Words text="Gross profit on all that hardware?" at={0.05} size={76} hl={["hardware?"]} /></Center>
<Center y={580}><BigNum at={1.92} size={300} color={C6.loss} label="VIZIO DEVICES · 2023">−$8.6M</BigNum></Center>
<Source6>Vizio annual report (10-K) · fiscal 2023</Source6>
</>) },
  { from: 367.62, to: 371.22, back: (<><Stock6 n={34} dur={3.6} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.02} text="name on the box. loss on the box." y={900} size={62} />
</>) },
  { from: 371.22, to: 378.38, back: null, el: (<>
<Center y={190}><Words text="Same year. Same company." at={0.05} size={76} /></Center>
<Center y={580}><BigNum at={3.86} size={270} color={C6.money} label="GROSS PROFIT · A DIVISION CALLED PLATFORM+">$364.9M</BigNum></Center>
<Source6>Vizio annual report (10-K) · fiscal 2023</Source6>
</>) },
  { from: 378.38, to: 385.82, back: (<><Stock6 n={57} dur={7.44} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={24} align="flex-start"><Label6 at={0.05} size={36} color={C6.mint}>PLATFORM+ IS…</Label6><Label6 at={1.12} size={54} color={C6.accent}>ADS</Label6><Label6 at={2.3} size={54} color={C6.ink}>THE HOME SCREEN</Label6><Label6 at={3.28} size={54} color={C6.ink}>THE FREE CHANNELS</Label6><Label6 at={4.36} size={54} color={C6.accent}>DATA ABOUT WHAT PEOPLE WATCH</Label6></Col></div></Center>
</>) },
  { from: 385.82, to: 394.1, back: null, el: (<>
<Center y={540}><LossGain at={0.2} a={{ label: "MAKING THE TVs", value: "−$8.6M" }} b={{ label: "WATCHING YOU WATCH TV", value: "+$364.9M", at: 4.0 }} /></Center>
<Source6>Vizio annual report (10-K) · fiscal 2023</Source6>
</>) },
  { from: 394.1, to: 402.5, back: (<><Stock6 n={35} dur={8.4} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={26}><Label6 at={0.05} size={40} color={C6.accent}>ROKU · ANNUAL REPORT · 2024</Label6><Words text="“…negative gross margin on devices in an effort to grow our user base…”" at={0.5} size={66} hl={["negative", "grow"]} maxW={1400} /></Col></div></Center>
<Source6>Roku annual report (10-K) · fiscal 2024</Source6>
</>) },
  { from: 402.5, to: 410.74, back: null, el: (<>
<Center y={540}><LossGain at={0.2} a={{ label: "ROKU DEVICES · 2024", value: "−$80M" }} b={{ label: "ROKU PLATFORM · 2024", value: "+$1.89B", at: 5.34 }} /></Center>
<Source6>Roku annual report (10-K) · fiscal 2024 · gross profit</Source6>
</>) },
  { from: 410.74, to: 417.26, back: (<><Stock6 n={60} dur={6.52} dim={0} graphics={true} /></>), el: (<>
<Center y={170}><div style={{ padding: "16px 40px", borderRadius: 22, background: C6.panel }}><Label6 at={0.05} size={40} color={C6.ink}>HOW DOES A TV KNOW WHAT YOU WATCH?</Label6></div></Center>
<Center y={480}><Words text="ACR" at={2.72} size={240} hl={["ACR"]} /></Center>
<Center y={700}><Label6 at={4.36} size={44} color={C6.ink}>AUTOMATIC CONTENT RECOGNITION</Label6></Center>
</>) },
  { from: 417.26, to: 424.2, back: (<><Stock6 n={50} dur={6.94} dim={0} graphics={true} />
<Stock6 n={44} from={4.92} dur={6.94} dim={0} graphics={true} /></>), el: (<>
<Center y={300}><Label6 at={0.1} size={40} color={C6.ink}>WHAT'S ON THE SCREEN · FROM ANY INPUT</Label6></Center>
<Center y={620}><Row gap={120}>
  <Label6 at={3.22} size={56} color={C6.accent}>CABLE</Label6>
  <Label6 at={3.9} size={56} color={C6.accent}>GAME CONSOLE</Label6>
  <Label6 at={4.92} size={56} color={C6.accent}>THAT ONE DVD</Label6>
</Row></Center>
</>) },
  { from: 424.2, to: 437.36, back: (<><Stock6 n={46} dur={13.16} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={22}><Label6 at={0.05} size={40} color={C6.ink}>2017 · VIZIO SETTLES WITH THE FTC AND NEW JERSEY</Label6><Label6 at={2.0} size={52} color={C6.loss}>$2.2 MILLION</Label6><BigNum at={6.72} size={210} label="TVs TRACKING WHAT PEOPLE WATCHED · SECOND BY SECOND">11 million</BigNum></Col></div></Center>
<Source6>FTC press release · Feb 6, 2017</Source6>
</>) },
  { from: 437.36, to: 443.78, back: (<><Stock6 n={36} dur={6.42} dim={0} graphics={false} /></>), el: (<>
<Meme at={4.36} text="ok. ok. ok. ok. ok." y={900} />
</>) },
  { from: 443.78, to: 450.48, back: null, el: (<>
<Center y={190}><Words text="Now do the math." at={0.05} size={84} hl={["math."]} /></Center>
<Center y={580}><BigNum at={4.38} icon="coin" size={260} label="REVENUE PER ACTIVE ACCOUNT · PER YEAR">$32</BigNum></Center>
<Source6>Vizio Q4 2023 results · SmartCast ARPU $32.48</Source6>
</>) },
  { from: 450.48, to: 458.04, back: null, el: (<>
<Center y={380}><Words text="$32 × 7 years = $224" at={0.64} times={[0.64, 0.64, 0.64, 0.64, 2.14, 2.14]} size={130} hl={["$224"]} /></Center>
<Center y={640}><Label6 at={4.24} size={64} color={C6.ink}>THE TV COST $228</Label6></Center>
<Center y={900}><Label6 at={0.64} size={26} color={C6.mint}>OUR CALCULATION · REVENUE, NOT PROFIT · 7 YEARS IS OUR ASSUMPTION</Label6></Center>
</>) },
  { from: 458.04, to: 464.42, back: (<><Stock6 n={18} dur={6.38} dim={0} graphics={true} /></>), el: (<>
<Center y={170}><div style={{ padding: "20px 50px", borderRadius: 22, background: C6.panel }}><Words text="It’s the down payment." at={0.3} size={104} hl={["down", "payment."]} /></div></Center>
<Center y={930}><div style={{ padding: "18px 44px", borderRadius: 22, background: C6.panel }}><Label6 at={4.34} size={46} color={C6.accent}>YOU PAY THE REST IN ATTENTION</Label6></div></Center>
</>) },
  { from: 464.42, to: 473.12, back: (<><Stock6 n={12} dur={8.7} dim={0} graphics={false} /></>), el: (<>
<Meme at={3.02} out={7.1} text="dumb tv: just sits there" y={900} size={66} />
<Meme at={7.1} text="unemployed" y={900} />
</>) },
  { from: 473.12, to: 475.74, back: null, el: (<>
<Center y={540}><div style={{ scale: "1.2" }}><TagLayers at={0.05} layers={[{ text: "A different TV", done: true }, { text: "The TV is bait", done: true }, { text: "?" }]} note="+ the price comes back" /></div></Center>
</>) },
  { from: 475.74, to: 482.94, back: (<><Stock6 n={29} dur={7.2} dim={0} graphics={true} /></>), el: (<>
<Center y={460}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={20}><Label6 at={0.05} size={44} color={C6.ink}>DECEMBER 2024 · VIZIO WAS BOUGHT</Label6><BigNum at={3.38} size={250} punch={false} label="PURCHASE PRICE">$2.3B</BigNum></Col></div></Center>
<Center y={920}><Stamp at={5.82} text="by Walmart" color={C6.accent} size={110} /></Center>
</>) },
  { from: 482.94, to: 491.48, back: (<><Stock6 n={39} dur={8.54} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><div style={{ padding: "30px 54px", borderRadius: 22, background: C6.panel }}><Col gap={30}><Row gap={50}><Label6 at={0.05} size={54} color={C6.ink}>THE STORE</Label6><Label6 at={1.78} size={54} color={C6.accent}>→ THE TV</Label6></Row><Row gap={50}><Label6 at={3.14} size={54} color={C6.accent}>→ THE HOME SCREEN</Label6><Label6 at={4.4} size={54} color={C6.accent}>→ THE ADS</Label6></Row><Label6 at={7.32} size={44} color={C6.ink}>+ IT ALREADY SEES YOUR RECEIPTS</Label6></Col></div></Center>
</>) },
  { from: 491.48, to: 496.08, back: (<><Stock6 n={32} dur={4.6} dim={0} graphics={true} /></>), el: (<>
<Center y={860}><div style={{ padding: "16px 40px", borderRadius: 22, background: C6.panel }}><Label6 at={0.05} size={42} color={C6.ink}>THAT TV'S COST: UNKNOWN · THE BUSINESS PLAN: PUBLIC</Label6></div></Center>
</>) },
  { from: 496.08, to: 507.98, back: (<><Stock6 n={45} dur={11.9} dim={0} graphics={true} />
<Stock6 n={38} from={7.08} dur={11.9} dim={0} graphics={true} /></>), el: (<>
<Center y={300}><In at={0.1} out={7.08} from="zoom"><div style={{ padding: "10px 60px", borderRadius: 22, background: C6.panel }}><Num6 size={200}>$228</Num6></div></In></Center>
<Meme at={7.08} out={10.12} text="a billboard. in your living room." y={900} size={66} />
<Meme at={10.12} text="and you carried it" y={900} />
</>) },
  { from: 507.98, to: 512.22, back: (<><Stock6 n={40} dur={4.24} dim={0} graphics={false} /></>), el: (<>
<Meme at={3.12} text="slightly crooked" y={900} />
</>) },
  { from: 512.22, to: 515.04, back: (<><Stock6 n={49} dur={2.82} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.2} text="“saved” a few hundred bucks" y={900} size={66} />
</>) },
  { from: 515.04, to: 528.7, back: null, el: (<>
<Center y={540}><div style={{ scale: "1.2" }}><TagLayers at={0.05} layers={[{ text: "A different TV", done: true, at: 1.64 }, { text: "The TV is bait", done: true, at: 3.96 }, { text: "The screen pays rent", done: true, at: 8.64 }]} note="+ the price comes back" /></div></Center>
</>) },
  { from: 528.7, to: 537.96, back: (<><Stock6 n={59} dur={9.26} dim={0} graphics={true} /></>), el: (<>
<Center y={170}><div style={{ padding: "18px 44px", borderRadius: 22, background: C6.panel }}><Label6 at={0.05} size={40} color={C6.ink}>A GIANT SCREEN FOR THE PRICE OF DINNER FOR FOUR</Label6></div></Center>
<Center y={900}><div style={{ padding: "18px 44px", borderRadius: 22, background: C6.panel }}><Words text="Buy it like you know the game." at={7.06} size={76} hl={["game."]} /></div></Center>
</>) },
  { from: 537.96, to: 550.32, back: (<><Stock6 n={19} dur={12.36} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><Col gap={34} align="flex-start">
  <Label6 at={0.1} size={48} color={C6.accent}>1 · SEARCH THE EXACT MODEL NUMBER</Label6>
  <Label6 at={3.9} size={36} color={C6.ink}>ONLY ADS IN THE RESULTS? WALK AWAY.</Label6>
  <Label6 at={4.54} size={48} color={C6.accent}>2 · LOOK UP THE PRICE HISTORY</Label6>
  <Label6 at={7.52} size={48} color={C6.accent}>3 · VIEWING DATA: SWITCH IT OFF</Label6>
</Col></Center>
</>) },
  { from: 550.32, to: 553.54, hard: true, back: null, el: (<>
<Center y={400}><Words text="The discount was never the point." at={0.05} size={100} hl={["never"]} maxW={1500} /></Center>
<Center y={720}><Stamp at={2.18} text="you were" color={C6.accent} size={140} /></Center>
</>) },
  { from: 553.54, to: 558.26, back: (<><Stock6 n={1} dur={4.72} dim={0} graphics={true} /></>), el: (<>
<Center y={440}><Words text="Your worst Black Friday deal?" at={0.1} size={100} hl={["worst"]} /></Center>
<Center y={760}><Label6 at={3.9} size={44} color={C6.accent}>TELL ME IN THE COMMENTS</Label6></Center>
</>) },
  { from: 558.26, to: 575.84, back: (<><Stock6 n={20} dur={17.58} dim={0} graphics={true} /></>), el: (<>
<EndCard6 at={0.4} next="How Supermarkets Make Money (It's Not the Groceries)" />
<Center y={1000}><Label6 at={6.94} size={36} color={C6.accent}>THAT ONE STARTS WITH 2¢</Label6></Center>
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string, number][] = [[0.3, "ep06-stamp", 0.4], [8.17, "ep06-pop", 0.3], [13.86, "ep06-scratch", 0.3], [17.64, "ep06-pop", 0.3], [20.78, "ep06-pop", 0.3], [23.6, "ep06-pop", 0.3], [27.69, "ep06-stamp", 0.4], [29.38, "ep06-whoosh", 0.25], [43.46, "ep06-stamp", 0.35], [48.06, "ep06-boom", 0.28], [53.34, "ep06-pop", 0.3], [75.76, "ep06-kaching", 0.25], [80.92, "ep06-pop", 0.3], [89.42, "ep06-scratch", 0.3], [94.54, "ep06-pop", 0.3], [117.3, "ep06-fall", 0.25], [133.14, "ep06-stamp", 0.4], [136.04, "ep06-fall", 0.25], [149.12, "ep06-pop", 0.3], [153.52, "ep06-pop", 0.3], [159.68, "ep06-scratch", 0.35], [161.82, "ep06-whoosh", 0.25], [174.86, "ep06-pop", 0.3], [187.7, "ep06-kaching", 0.25], [202.5, "ep06-stamp", 0.35], [204.68, "ep06-fall", 0.25], [208.48, "ep06-kaching", 0.25], [210.54, "ep06-coin", 0.3], [211.56, "ep06-coin", 0.3], [215.46, "ep06-coin", 0.3], [220.54, "ep06-coin", 0.3], [237.72, "ep06-counter", 0.3], [254.2, "ep06-pop", 0.3], [258.68, "ep06-whoosh", 0.25], [276.08, "ep06-pop", 0.3], [282.88, "ep06-boom", 0.28], [298.74, "ep06-fall", 0.25], [315.84, "ep06-stamp", 0.35], [318.18, "ep06-whoosh", 0.25], [354.14, "ep06-stamp", 0.4], [359.38, "ep06-pop", 0.3], [365.1, "ep06-fall", 0.3], [375.08, "ep06-kaching", 0.25], [389.82, "ep06-boom", 0.3], [413.46, "ep06-pop", 0.3], [430.92, "ep06-boom", 0.28], [448.16, "ep06-pop", 0.3], [452.62, "ep06-counter", 0.3], [454.72, "ep06-boom", 0.3], [471.52, "ep06-scratch", 0.3], [473.52, "ep06-pop", 0.3], [479.12, "ep06-kaching", 0.25], [481.56, "ep06-boom", 0.35], [503.16, "ep06-boom", 0.35], [508.0, "ep06-whoosh", 0.25], [516.68, "ep06-pop", 0.3], [519.0, "ep06-pop", 0.3], [523.68, "ep06-pop", 0.3], [538.06, "ep06-pop", 0.3], [542.5, "ep06-pop", 0.3], [545.48, "ep06-pop", 0.3], [552.5, "ep06-stamp", 0.45]];

export const Ep08BlackFriday: React.FC = () => {
  const { fps } = useVideoConfig();
  setClips(CLIP_FN); // свой набор стоков при каждом рендере: в общем Root последним грузится чужой ролик
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/ep08-voiceover.mp3")} volume={0.82} />
      <Sequence from={0} durationInFrames={888}><Audio src={staticFile("audio/ep06/music-trailer.mp3")} volume={(f) => 0.15 * interpolate(f, [0, 30, 858, 888], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={873} durationInFrames={3990}><Audio src={staticFile("audio/ep06/music-ch1.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 3960, 3990], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={4848} durationInFrames={2919}><Audio src={staticFile("audio/ep06/music-ch4.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 2889, 2919], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={7752} durationInFrames={1803}><Audio src={staticFile("audio/ep06/music-ch3.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 1773, 1803], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={9540} durationInFrames={5709}><Audio src={staticFile("audio/ep06/music-ch2.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 5679, 5709], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={15234} durationInFrames={2041}><Audio src={staticFile("audio/ep06/music-finale.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 2011, 2041], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
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
