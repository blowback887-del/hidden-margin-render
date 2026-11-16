import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Bg6, BigNum, Bug6, C6, Center, ChapterCard, ChapterTag, Col, CorpSub, Donut6, In, Label6, Meme, NameCard6, Receipt6, Row, Scene6, setClips, Source6, Split6, Stamp, Stock6, Subscribe6, Plate6, TitleCard, Words } from "../brand/hm6";

// ===================================================================
// T01Restaurants — сгенерировано cloud/gen/build.py из плана cloud/gen/t01.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const T01RESTAURANTS_DURATION_SEC = 555.44;
const CLIPS: Record<number, string> = {"1": "01-jake-burger", "2": "02-burger-fries", "3": "03-jake-enjoying", "4": "04-card-terminal", "5": "05-waiter-bearded", "6": "06-boss-counting", "7": "07-receipt-cash", "8": "08-spa-massage", "9": "09-pos-terminal", "10": "10-couple-shock-bills", "11": "11-dining-room", "12": "12-fine-restaurant", "13": "13-irs-1040", "14": "14-businessman-counting", "15": "15-espresso-pour", "16": "16-waitress-cleaning", "17": "17-parking-meter", "18": "18-waitress-order", "19": "19-seattle", "20": "20-gavel", "21": "21-fine-wine", "22": "22-nyc-skyline", "23": "23-sf-skyline", "24": "24-banquet-hall", "25": "25-closed-sign", "26": "26-massage", "27": "27-burger-table", "28": "28-la-skyline", "29": "29-laptop-calc", "30": "30-couple-menu", "31": "31-scottsdale", "32": "32-dc-capitol", "33": "33-hotel-pool", "34": "34-bread-basket", "35": "35-magnifier", "36": "36-nyc-taxi", "37": "37-calculator", "38": "38-arcade", "39": "39-phone-typing", "40": "40-phone-touch", "41": "41-frustrated-man", "42": "42-shock-glasses", "43": "43-friends-menu", "44": "44-man-laughing", "45": "45-waiter-thumbs", "46": "46-espresso-drip", "47": "47-typing-phone", "48": "48-hotel-reception", "49": "49-surprised-man", "50": "50-cashier-payment", "51": "51-counting-dollars", "52": "52-woman-shocked", "53": "53-pub-burger-beer", "54": "54-chefs-kitchen", "55": "55-beer-pour", "56": "56-man-cucumber-mask", "57": "57-boss-throwing-money", "58": "58-rich-gentleman", "59": "59-man-head-disbelief", "60": "60-empty-wallet", "61": "61-shrug", "62": "62-surprised-blonde"};
const LENS: Record<number, number> = {"1": 9.1, "2": 10.0, "3": 10.0, "4": 7.2, "5": 10.0, "6": 10.0, "7": 10.0, "8": 9.43, "9": 10.0, "10": 10.0, "11": 10.0, "12": 10.0, "13": 10.0, "14": 10.0, "15": 10.0, "16": 10.0, "17": 7.63, "18": 10.0, "19": 10.0, "20": 10.0, "21": 10.0, "22": 10.0, "23": 10.0, "24": 10.0, "25": 10.0, "26": 10.0, "27": 9.97, "28": 10.0, "29": 10.0, "30": 8.57, "31": 10.0, "32": 10.0, "33": 6.27, "34": 10.0, "35": 10.0, "36": 10.0, "37": 10.0, "38": 10.0, "39": 9.43, "40": 10.0, "41": 10.0, "42": 10.0, "43": 10.0, "44": 10.0, "45": 8.47, "46": 10.0, "47": 10.0, "48": 10.0, "49": 10.0, "50": 10.0, "51": 10.0, "52": 9.73, "53": 9.93, "54": 7.8, "55": 10.0, "56": 10.0, "57": 10.0, "58": 10.0, "59": 10.0, "60": 10.0, "61": 10.0, "62": 10.0};
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/t01/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 });
setClips(CLIP_FN);

type Beat = { from: number; to: number; tag?: [number, string]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 3.6, back: (<><Stock6 n={1} dur={3.6} dim={0} graphics={true} /></>), el: (<>
<Center y={860}><NameCard6 at={0.2} name="Jake" role="OUT FOR DINNER · COULD BE YOU" icon="person" /></Center>
</>) },
  { from: 3.6, to: 7.86, back: (<><Stock6 n={53} dur={4.26} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={760}><In at={2.48} from="fade"><Plate6><BigNum at={2.48} icon="receipt" size={150} label="ON THE MENU">$80</BigNum></Plate6></In></Center>
</>) },
  { from: 7.86, to: 11.8, back: (<><Stock6 n={4} dur={3.94} dim={0} graphics={true} />
<Stock6 n={3} from={1.48} dur={3.94} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={300}><Plate6 at={0.3}><BigNum at={0.25} icon="percent" size={130} label="TIP">+20%</BigNum></Plate6></Center>
<Meme at={1.48} text="certified good guy" y={920} />
</>) },
  { from: 11.8, to: 16.36, back: (<><Stock6 n={5} dur={4.56} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><In at={1.8} from="fade"><Plate6><Words text="His waiter might never see a cent of it." at={1.8} size={66} hl={["never"]} maxW={1500} /></Plate6></In></Center>
</>) },
  { from: 16.36, to: 21.4, back: (<><Stock6 n={7} dur={5.04} dim={0} graphics={true} />
<Stock6 n={57} from={1.94} dur={5.04} dim={0} graphics={true} /></>), el: (<>
<Center y={420}><Stamp at={0.9} out={1.94} text="tipped twice" size={110} /></Center>
<Meme at={3.52} text="the owner, probably" y={920} />
</>) },
  { from: 21.4, to: 24.68, hard: true, back: (<><Stock6 n={9} dur={3.28} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Plate6><Label6 at={0.15} size={44} color={C6.ink}>THE FEE THAT LOOKS LIKE A TIP</Label6></Plate6></Center>
</>) },
  { from: 24.68, to: 26.96, hard: true, back: (<><Stock6 n={26} dur={2.28} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Plate6><Label6 at={0.1} size={44} color={C6.ink}>SURCHARGES NAMED LIKE A SPA MENU</Label6></Plate6></Center>
</>) },
  { from: 26.96, to: 29.86, hard: true, back: (<><Stock6 n={50} dur={2.9} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Plate6><Label6 at={0.1} size={44} color={C6.ink}>THE SCREEN THAT DOES MATH AGAINST YOU</Label6></Plate6></Center>
</>) },
  { from: 29.86, to: 34.52, hard: true, back: (<><Stock6 n={10} dur={4.66} dim={0} graphics={true} /></>), el: (<>
<Center y={800}><Split6 scale={0.6} at={0.66} left={{ title: "DINNER", value: "$80", color: C6.ink }} right={{ title: "THE BILL", value: "$128", color: C6.loss, at: 2.38 }} /></Center>
</>) },
  { from: 34.52, to: 36.98, back: (<><Stock6 n={11} dur={2.46} dim={0.35} graphics={true} /></>), el: (<>
<Center y={540}><TitleCard at={0.1} title="Tipping the Owner" hl={["Owner"]} /></Center>
</>) },
  { from: 36.98, to: 39.16, tag: [1, "The Twenty Percent"], hard: true, back: (<><Stock6 n={12} dur={2.18} dim={0.3} graphics={true} /></>), el: (<>
<Center y={540}><ChapterCard n={1} title="The Twenty Percent" /></Center>
</>) },
  { from: 39.16, to: 52.52, back: (<><Stock6 n={2} dur={13.36} dim={0.3} graphics={true} />
<Stock6 n={45} from={6.94} dur={13.36} dim={0.3} graphics={true} /></>), el: (<>
<Center x={1380} y={500}><div style={{ scale: "1.35" }}><Receipt6 at={0.3} w={560} step={0.6} lines={[["FOOD", "$80.00"], ["SERVICE 20%", "$16.00"]]} /></div></Center>
<Center x={560} y={760}><Stamp at={12.2} text="case closed" color={C6.accent} size={80} /></Center>
</>) },
  { from: 52.52, to: 68.34, back: (<><Stock6 n={13} dur={15.82} dim={0.3} graphics={true} />
<Stock6 n={42} from={11.68} dur={15.82} dim={0.3} graphics={true} /></>), el: (<>
<Meme at={0.6} out={5.56} text="irs: fun edition" y={880} size={70} />
<Center y={820}><In at={5.56} from="fade"><Plate6 pad="30px 56px"><Col gap={22} align="flex-start">
  <Label6 at={7.4} size={40} color={C6.ink}>A TIP IS A TIP ONLY IF:</Label6>
  <Label6 at={9.1} size={40} color={C6.accent}>YOU PICK THE AMOUNT</Label6>
  <Label6 at={10.4} size={40} color={C6.accent}>YOU PICK WHO GETS IT</Label6>
</Col></Plate6></In></Center>
</>) },
  { from: 68.34, to: 74.16, back: (<><Stock6 n={35} dur={5.82} dim={0} graphics={true} /></>), el: (<>
<Center y={830}><Plate6><Words text="“Automatic gratuities are service charges, not tips.”" at={0.3} size={60} hl={["not", "tips.”"]} maxW={1600} /></Plate6></Center>
<Source6>IRS · Tips versus service charges</Source6>
</>) },
  { from: 74.16, to: 84.96, back: (<><Stock6 n={14} dur={10.8} dim={0} graphics={true} />
<Stock6 n={15} from={7.92} dur={10.8} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={820}><In at={1.04} out={7.92} from="fade"><Plate6><Label6 at={1.04} size={40} color={C6.accent}>SERVICE CHARGE → RESTAURANT</Label6></Plate6></In></Center>
<Meme at={9.32} text="the gary 3000" y={900} />
</>) },
  { from: 84.96, to: 95.66, back: (<><Stock6 n={16} dur={10.7} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={760}><In at={5.38} from="fade"><Plate6><BigNum at={5.38} icon="clock" size={150} label="PER HOUR · FEDERAL TIPPED MINIMUM">$2.13</BigNum></Plate6></In></Center>
<Source6>U.S. Department of Labor · FLSA</Source6>
</>) },
  { from: 95.66, to: 99.74, back: (<><Stock6 n={17} dur={4.08} dim={0} graphics={false} /></>), el: (<>
<Meme at={3.02} text="your waiter's hourly wage" y={900} />
</>) },
  { from: 99.74, to: 107.92, back: (<><Stock6 n={18} dur={8.18} dim={0.25} graphics={true} /></>), el: (<>
<Center y={780}><Split6 scale={0.6} at={2.92} left={{ title: "A TIP", value: "YOU GIVE", color: C6.money }} right={{ title: "A FEE", value: "THEY TAKE", color: C6.loss, at: 5.12 }} /></Center>
</>) },
  { from: 107.92, to: 124.46, back: (<><Stock6 n={19} dur={16.54} dim={0} graphics={true} />
<Stock6 n={20} from={8.84} dur={16.54} dim={0} graphics={true} /></>), el: (<>
<Center x={600} y={840}><In at={4.44} from="fade"><Plate6><Label6 at={4.44} size={38} color={C6.ink}>SEATTLE · 20% SERVICE CHARGE</Label6></Plate6></In></Center>
<Center x={1450} y={560}><Donut6 at={11.42} pct={14} center="~14%" label="WENT TO SERVERS" size={360} /></Center>
<Source6>Lawsuit vs. Tom Douglas restaurants · Foster Garvey</Source6>
</>) },
  { from: 124.46, to: 133.84, back: (<><Stock6 n={51} dur={9.38} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={760}><In at={4.84} from="fade"><Plate6><BigNum at={4.84} icon="receipt" size={150} label="SETTLED · 2019 · 1,000+ WORKERS">$2.4M</BigNum></Plate6></In></Center>
<Source6>Associated Press · Nov 2019</Source6>
</>) },
  { from: 133.84, to: 147.78, back: (<><Stock6 n={22} dur={13.94} dim={0} graphics={true} />
<Stock6 n={21} from={4.04} dur={13.94} dim={0} graphics={true} /></>), el: (<>
<Center y={860}><In at={4.04} from="fade"><Plate6><Label6 at={4.04} size={40} color={C6.ink}>PER SE · +20% ON PRIVATE DINNERS</Label6><Label6 at={9.58} size={34} color={C6.accent}>NOT CLEARLY DISCLOSED AS NOT A TIP</Label6></Plate6></In></Center>
<Source6>New York Attorney General · Quartz, CBS News</Source6>
</>) },
  { from: 147.78, to: 150.88, back: (<><Stock6 n={6} dur={3.1} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={760}><Plate6><BigNum at={0.2} icon="receipt" size={150} label="SETTLED WITH NEW YORK STATE">$500K</BigNum></Plate6></Center>
</>) },
  { from: 150.88, to: 161.56, back: (<><Stock6 n={23} dur={10.68} dim={0} graphics={true} />
<Stock6 n={24} from={2.72} dur={10.68} dim={0} graphics={true} /></>), el: (<>
<Center y={800}><In at={4.18} from="fade"><Plate6><Row gap={60}>
  <BigNum at={4.18} icon="calendar" size={120} label="IN COURT" color={C6.ink}>12 yrs</BigNum>
  <BigNum at={8.08} icon="receipt" size={120} label="PROPOSED SETTLEMENT">$12M</BigNum>
</Row></Plate6></In></Center>
<Source6>Hilton San Francisco Union Square · Daily Journal 2026</Source6>
</>) },
  { from: 161.56, to: 171.88, back: (<><Stock6 n={25} dur={10.32} dim={0} graphics={true} /></>), el: (<>
<Center x={480} y={480}><Donut6 at={4.96} pct={80} center="~8 in 10" label="SKIPPED THE TIP" size={380} /></Center>
<Source6>A server who sued an LA restaurant group · Restaurant Business</Source6>
</>) },
  { from: 171.88, to: 181.74, back: (<><Stock6 n={41} dur={9.86} dim={0} graphics={true} />
<Stock6 n={58} from={5.58} dur={9.86} dim={0} graphics={true} /></>), el: (<>
<Center x={600} y={540}><In at={0.1} out={5.58} from="fade"><Plate6 pad="30px 50px"><Col gap={22} align="flex-start">
  <Label6 at={0.1} size={40} color={C6.loss}>WAITER · LOSES THE TIP</Label6>
  <Label6 at={1.7} size={40} color={C6.money}>OWNER · KEEPS THE CHARGE</Label6>
  <Label6 at={3.26} size={40} color={C6.accent}>YOU · FEEL GENEROUS</Label6>
</Col></Plate6></In></Center>
<Meme at={7.1} text="the guy with the keys" y={920} />
</>) },
  { from: 181.74, to: 184.95, tag: [2, "The Fee With a Spa Name"], hard: true, back: (<><Stock6 n={8} dur={3.21} dim={0.3} graphics={true} /></>), el: (<>
<Center y={540}><ChapterCard n={2} title="The Fee With a Spa Name" /></Center>
</>) },
  { from: 184.95, to: 192.4, back: (<><Stock6 n={27} dur={7.45} dim={0.3} graphics={true} /></>), el: (<>
<Center x={1380} y={520}><div style={{ scale: "1.35" }}><Receipt6 at={0.2} w={600} step={0.35} lines={[["FOOD", "$80.00"], ["SERVICE 20%", "$16.00"]]} /></div></Center>
<Center x={1380} y={860}><Stamp at={3.23} text="wellness fee 3.5%  $2.80" color={C6.loss} size={56} rotate={-4} /></Center>
</>) },
  { from: 192.4, to: 197.28, back: (<><Stock6 n={56} dur={4.88} dim={0} graphics={false} />
<Stock6 n={1} from={3.1} dur={4.88} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.4} out={3.1} text="wellness (not included)" y={900} />
<Meme at={3.1} text="jake's wellness" y={900} />
</>) },
  { from: 197.28, to: 205.02, back: (<><Stock6 n={54} dur={7.74} dim={0.25} graphics={true} /></>), el: (<>
<Center x={620} y={560}><Plate6 at={3.22} pad="30px 50px"><Col gap={22} align="flex-start">
  <Label6 at={3.22} size={42} color={C6.ink}>“HEALTHCARE SURCHARGE”</Label6>
  <Label6 at={4.92} size={42} color={C6.ink}>“WELLNESS CHARGE”</Label6>
  <Label6 at={6.2} size={42} color={C6.accent}>“INFLATION FEE”</Label6>
</Col></Plate6></Center>
</>) },
  { from: 205.02, to: 216.78, back: (<><Stock6 n={28} dur={11.76} dim={0} graphics={true} />
<Stock6 n={29} from={2.6} dur={11.76} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={760}><In at={8.24} from="fade"><Plate6><BigNum at={8.24} icon="store" size={150} label="LA COUNTY RESTAURANTS · 2023">280+</BigNum></Plate6></In></Center>
<Source6>Reddit spreadsheet via Nation's Restaurant News</Source6>
</>) },
  { from: 216.78, to: 223.4, back: (<><Stock6 n={30} dur={6.62} dim={0} graphics={true} /></>), el: (<>
<CorpSub at={0.2} corp="“Inflation fee”" human="prices went up and we hid it" />
</>) },
  { from: 223.4, to: 234.52, back: (<><Stock6 n={43} dur={11.12} dim={0} graphics={true} />
<Stock6 n={59} from={8.1} dur={11.12} dim={0} graphics={true} /></>), el: (<>
<Center y={860}><In at={5.74} out={8.1} from="fade"><Plate6><Words text="The real price shows up after you've eaten." at={5.74} size={62} hl={["after"]} maxW={1500} /></Plate6></In></Center>
<Meme at={9.5} text="no refunds on digested burgers" y={900} size={68} />
</>) },
  { from: 234.52, to: 246.16, back: (<><Stock6 n={37} dur={11.64} dim={0.25} graphics={true} />
<Stock6 n={53} from={5.9} dur={11.64} dim={0.25} graphics={true} /></>), el: (<>
<Center y={540}><In at={0.1} out={5.9} from="fade"><Plate6><Words text="Why not just raise the menu price?" at={0.1} size={70} maxW={1500} /></Plate6></In></Center>
<Center y={780}><Split6 scale={0.6} at={6.08} left={{ title: "LOOKS CHEAPER", value: "$17+fee", color: C6.money }} right={{ title: "LOOKS PRICIER", value: "$18", color: C6.loss, at: 9.98 }} /></Center>
</>) },
  { from: 246.16, to: 260.94, back: (<><Stock6 n={10} dur={14.78} dim={0} graphics={true} />
<Stock6 n={60} from={5.98} dur={14.78} dim={0} graphics={true} /></>), el: (<>
<Center x={1450} y={520}><Donut6 at={8.14} pct={85} center="85%" label="HIT BY A HIDDEN FEE" size={380} /></Center>
<Source6>Consumer Reports survey · 2018</Source6>
</>) },
  { from: 260.94, to: 275.46, back: (<><Stock6 n={31} dur={14.52} dim={0} graphics={true} />
<Stock6 n={14} from={10.24} dur={14.52} dim={0} graphics={true} /></>), el: (<>
<Center y={800}><In at={6.16} from="fade"><Plate6><Row gap={60}>
  <BigNum at={6.16} icon="percent" size={110} label="“EMPLOYEE BENEFITS CHARGE”" color={C6.ink}>3.5%</BigNum>
  <BigNum at={10.24} icon="receipt" size={110} label="PENALTIES · ARIZONA AG">$20K</BigNum>
</Row></Plate6></In></Center>
<Source6>Arizona Attorney General · April 2023</Source6>
</>) },
  { from: 275.46, to: 283.72, back: (<><Stock6 n={32} dur={8.26} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={760}><In at={5.68} from="fade"><Plate6><BigNum at={5.68} icon="percent" size={140} label="SURCHARGE · OLD EBBITT GRILL GROUP">3.75%</BigNum></Plate6></In></Center>
<Source6>Travelers United v. Clyde's Restaurant Group</Source6>
</>) },
  { from: 283.72, to: 290.12, back: (<><Stock6 n={33} dur={6.4} dim={0} graphics={false} />
<Stock6 n={34} from={4.08} dur={6.4} dim={0} graphics={false} /></>), el: (<>
<Center y={880}><In at={0.8} out={4.08} from="fade"><Plate6><Label6 at={0.8} size={44} color={C6.accent}>“RESTAURANT RESORT FEE”</Label6></Plate6></In></Center>
<Meme at={4.08} text="the pool" y={900} />
</>) },
  { from: 290.12, to: 293.36, back: (<><Stock6 n={11} dur={3.24} dim={0} graphics={true} /></>), el: (<>
<Center y={820}><Stamp at={0.3} text="fee dropped" color={C6.money} size={88} /></Center>
</>) },
  { from: 293.36, to: 311.64, back: (<><Stock6 n={35} dur={18.28} dim={0} graphics={true} />
<Stock6 n={7} from={14.6} dur={18.28} dim={0} graphics={true} /></>), el: (<>
<Center y={820}><In at={4.96} out={14.6} from="fade"><Plate6><Label6 at={4.96} size={36} color={C6.ink}>JULY 1, 2024 · HIDDEN FEE BAN</Label6><Label6 at={6.5} size={36} color={C6.accent}>JUNE 29 · EXCEPTION: RESTAURANTS</Label6></Plate6></In></Center>
<Meme at={16.52} text="font size: six" y={900} />
<Source6>California SB 478 · SB 1524</Source6>
</>) },
  { from: 311.64, to: 319.26, back: (<><Stock6 n={55} dur={7.62} dim={0} graphics={false} /></>), el: (<>
<Subscribe6 at={2.66} />
</>) },
  { from: 319.26, to: 321.79, tag: [3, "The Screen"], hard: true, back: (<><Stock6 n={9} dur={2.53} dim={0.3} graphics={true} /></>), el: (<>
<Center y={540}><ChapterCard n={3} title="The Screen" /></Center>
</>) },
  { from: 321.79, to: 335.76, back: (<><Stock6 n={50} dur={13.97} dim={0} graphics={true} />
<Stock6 n={61} from={10.93} dur={13.97} dim={0} graphics={true} /></>), el: (<>
<Center y={820}><In at={2.77} out={10.93} from="fade"><Row gap={40}>
  <Plate6><Label6 at={5.05} size={64} color={C6.ink}>20%</Label6></Plate6>
  <Plate6><Label6 at={5.65} size={64} color={C6.ink}>25%</Label6></Plate6>
  <Plate6><Label6 at={6.87} size={64} color={C6.accent}>30%</Label6></Plate6>
  <Label6 at={9.83} size={20} color={C6.mint}>no tip</Label6>
</Row></In></Center>
<Meme at={12.25} text="the “no tip” button" y={900} />
</>) },
  { from: 335.76, to: 341.7, back: (<><Stock6 n={36} dur={5.94} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={760}><In at={3.18} from="fade"><Plate6><BigNum at={3.18} icon="car" size={150} label="NEW YORK TAXI RIDES STUDIED">13M+</BigNum></Plate6></In></Center>
<Source6>Haggag & Paci · Default Tips · AEJ: Applied 2014</Source6>
</>) },
  { from: 341.7, to: 350.36, back: (<><Stock6 n={22} dur={8.66} dim={0.3} graphics={true} /></>), el: (<>
<Center y={780}><Split6 scale={0.6} at={0.2} left={{ title: "BUTTONS 15 · 20 · 25", value: "tips", color: C6.ink }} right={{ title: "BUTTONS 20 · 25 · 30", value: "≈+10%", color: C6.money, at: 6.96 }} /></Center>
</>) },
  { from: 350.36, to: 359.84, back: (<><Stock6 n={49} dur={9.48} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><In at={0.1} out={3.04} from="fade"><Plate6><Words text="Same rides. Same city. Different buttons." at={0.1} size={60} hl={["Different"]} maxW={1600} /></Plate6></In></Center>
<Center x={1440} y={400}><In at={4.68} from="fade"><Plate6><Label6 at={4.68} size={40} color={C6.loss}>MORE PEOPLE TIPPED $0</Label6></Plate6></In></Center>
</>) },
  { from: 359.84, to: 370.06, back: (<><Stock6 n={4} dur={10.22} dim={0.25} graphics={true} /></>), el: (<>
<Center y={820}><Row gap={40}>
  <In at={7.62} from="fade"><Plate6><Label6 at={7.62} size={48} color={C6.money}>TIP BEFORE TAX</Label6></Plate6></In>
  <In at={8.84} from="fade"><Plate6><Label6 at={8.84} size={48} color={C6.loss}>TIP AFTER TAX</Label6></Plate6></In>
</Row></Center>
<Source6>Toast · Display suggested tip amounts</Source6>
</>) },
  { from: 370.06, to: 381.26, back: (<><Stock6 n={18} dur={11.2} dim={0} graphics={true} />
<Stock6 n={21} from={3.98} dur={11.2} dim={0} graphics={true} /></>), el: (<>
<Center x={600} y={560}><Plate6 pad="30px 50px"><Col gap={20} align="flex-start">
  <Label6 at={0.2} size={40} color={C6.money}>TIP ON: THE FOOD ✓</Label6>
  <Label6 at={7.38} size={40} color={C6.loss}>THE TAX ✗</Label6>
  <Label6 at={8.32} size={40} color={C6.loss}>THE WELLNESS FEE ✗</Label6>
  <Label6 at={9.28} size={40} color={C6.loss}>THE SERVICE CHARGE ✗</Label6>
</Col></Plate6></Center>
<Source6>Emily Post Institute via Toast</Source6>
</>) },
  { from: 381.26, to: 396.21, back: (<><Stock6 n={37} dur={14.95} dim={0.35} graphics={true} />
<Stock6 n={29} from={11.94} dur={14.95} dim={0.35} graphics={true} /></>), el: (<>
<Center x={1380} y={540}><div style={{ scale: "1.35" }}><Receipt6 at={1.14} w={640} step={1.15} lines={[["FOOD", "$80.00"], ["WELLNESS 3.5%", "$2.80"], ["SERVICE 20%", "$16.00"], ["TAX", "$8.00"], ["SUBTOTAL", "$106.80"], ["TIP 20%", "$21.36"]]} /></div></Center>
</>) },
  { from: 396.21, to: 405.24, back: (<><Stock6 n={3} dur={9.03} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={360}><Plate6><Label6 at={0.2} size={36} color={C6.ink}>20% OF THE FOOD = $16.00</Label6></Plate6></Center>
<Center x={1300} y={780}><Stamp at={4.69} text="+$5.36 for one tap" color={C6.accent} size={76} /></Center>
</>) },
  { from: 405.24, to: 419.26, back: (<><Stock6 n={38} dur={14.02} dim={0} graphics={true} />
<Stock6 n={44} from={9.98} dur={14.02} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><In at={0.3} out={9.98} from="fade"><Plate6><Label6 at={0.3} size={36} color={C6.ink}>DAVE & BUSTER'S · TIP ON THE POST-TAX TOTAL (REPORTED)</Label6></Plate6></In></Center>
<Meme at={11.54} text="even the owners think it's a lot" y={900} size={66} />
<Source6>Fox News · March 2026</Source6>
</>) },
  { from: 419.26, to: 430.48, back: (<><Stock6 n={7} dur={11.22} dim={0.35} graphics={true} />
<Stock6 n={59} from={6.84} dur={11.22} dim={0.35} graphics={true} /></>), el: (<>
<Center x={1380} y={480}><div style={{ scale: "1.35" }}><Receipt6 at={1.78} w={560} step={0.9} lines={[["FOOD", "$80.00"], ["AUTO GRATUITY", "$14.40"], ["TIP", "______"]]} /></div></Center>
<Meme at={8.12} text="the tip line, hoping" y={900} />
</>) },
  { from: 430.48, to: 441.68, back: (<><Stock6 n={39} dur={11.2} dim={0} graphics={true} />
<Stock6 n={60} from={9.5} dur={11.2} dim={0} graphics={true} /></>), el: (<>
<CorpSub at={6.58} corp="“Convenience fee”" human="convenient for who?" />
<Source6>Hoke v. Sunday App · filed Jan 2026</Source6>
</>) },
  { from: 441.68, to: 456.58, back: (<><Stock6 n={40} dur={14.9} dim={0} graphics={true} />
<Stock6 n={12} from={10.68} dur={14.9} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><In at={2.5} from="fade"><Plate6><Label6 at={2.5} size={36} color={C6.ink}>SHAKE SHACK · FEES ON THE LAST SCREEN (LAWSUIT)</Label6></Plate6></In></Center>
<Source6>Copaken v. Shake Shack · Feb 2025</Source6>
</>) },
  { from: 456.58, to: 469.74, back: (<><Stock6 n={47} dur={13.16} dim={0.25} graphics={true} />
<Stock6 n={49} from={8.14} dur={13.16} dim={0.25} graphics={true} /></>), el: (<>
<Center y={780}><Plate6 at={3.88}><Row gap={60}>
  <BigNum at={3.88} icon="phone" size={120} label="ANNOYED BY PRESET SCREENS">38%</BigNum>
  <BigNum at={8.34} icon="percent" size={120} label="TIP LESS OR NOTHING" color={C6.loss}>27%</BigNum>
</Row></Plate6></Center>
<Source6>Bankrate tipping survey · June 2025</Source6>
</>) },
  { from: 469.74, to: 484.58, back: (<><Stock6 n={27} dur={14.84} dim={0.3} graphics={true} />
<Stock6 n={52} from={8.52} dur={14.84} dim={0.3} graphics={true} /></>), el: (<>
<Center y={430}><In at={0.2} out={8.52} from="fade"><Split6 scale={0.7} at={2.52} left={{ title: "FOOD", value: "$80", color: C6.ink }} right={{ title: "JAKE PAID", value: "$128.16", color: C6.loss, at: 4.54 }} /></In></Center>
<Center y={850}><Stamp at={6.51} out={8.52} text="+60%" size={90} /></Center>
<Meme at={11.84} text="$37 in “tips”" y={900} size={64} />
</>) },
  { from: 484.58, to: 487.38, hard: true, back: (<><Stock6 n={43} dur={2.8} dim={0.3} graphics={true} /></>), el: (<>
<Center y={540}><Words text="How not to get played" at={0.1} size={110} hl={["played"]} /></Center>
</>) },
  { from: 487.38, to: 497.42, back: (<><Stock6 n={30} dur={10.04} dim={0} graphics={true} /></>), el: (<>
<Center y={820}><Plate6 pad="28px 50px"><Col gap={18} align="flex-start">
  <Label6 at={0.2} size={42} color={C6.ink}>1 · READ THE BOTTOM OF THE MENU</Label6>
  <Label6 at={8.72} size={42} color={C6.accent}>ASK: “DOES THIS GO TO YOU?”</Label6>
</Col></Plate6></Center>
</>) },
  { from: 497.42, to: 504.88, back: (<><Stock6 n={9} dur={7.46} dim={0} graphics={true} /></>), el: (<>
<Center y={860}><Plate6><Label6 at={0.2} size={42} color={C6.ink}>2 · IF IT DOES — THAT’S YOUR TIP</Label6></Plate6></Center>
</>) },
  { from: 504.88, to: 509.54, back: (<><Stock6 n={51} dur={4.66} dim={0} graphics={true} /></>), el: (<>
<Center y={860}><Plate6><Label6 at={0.2} size={42} color={C6.ink}>3 · IF NOT — TIP YOUR WAITER DIRECTLY</Label6></Plate6></Center>
</>) },
  { from: 509.54, to: 515.8, back: (<><Stock6 n={2} dur={6.26} dim={0} graphics={true} /></>), el: (<>
<Center y={860}><Plate6><Label6 at={0.2} size={42} color={C6.ink}>4 · TIP ON THE FOOD, NOT THE TAX OR FEES</Label6></Plate6></Center>
</>) },
  { from: 515.8, to: 525.06, back: (<><Stock6 n={44} dur={9.26} dim={0} graphics={true} /></>), el: (<>
<Center x={1450} y={460}><Donut6 at={3.24} pct={72} center="72%" label="OPPOSE AUTO SERVICE CHARGES" size={340} /></Center>
<Meme at={8.56} text="not cheap. the majority." y={920} />
<Source6>Pew Research Center · 2023</Source6>
</>) },
  { from: 525.06, to: 533.48, back: (<><Stock6 n={1} dur={8.42} dim={0} graphics={true} />
<Stock6 n={45} from={6.88} dur={8.42} dim={0} graphics={true} /></>), el: (<>
<Meme at={6.88} text="the waiter, thrilled" y={920} />
</>) },
  { from: 533.48, to: 536.58, back: (<><Stock6 n={46} dur={3.1} dim={0} graphics={false} /></>), el: (<>
<Meme at={1.8} text="the gary 2000 mini" y={900} />
</>) },
  { from: 536.58, to: 544.04, back: (<><Stock6 n={47} dur={7.46} dim={0.3} graphics={true} /></>), el: (<>
<Center y={500}><Plate6><Words text="Weirdest fee on your receipt?" at={0.1} size={84} hl={["Weirdest"]} maxW={1500} /></Plate6></Center>
<Center y={820}><Label6 at={3.32} size={40} color={C6.accent}>TELL US IN THE COMMENTS</Label6></Center>
</>) },
  { from: 544.04, to: 555.44, back: (<><Stock6 n={48} dur={11.4} dim={0.35} graphics={true} /></>), el: (<>
<Center y={480}><Words text="Next: the hotel resort fee" at={3.86} size={96} hl={["resort", "fee"]} maxW={1600} /></Center>
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string, number][] = [[0.3, "ep06-pop", 0.3], [6.08, "ep06-kaching", 0.25], [8.16, "ep06-coin", 0.3], [9.34, "ep09-cheer", 0.2], [17.26, "ep06-stamp", 0.4], [19.88, "ep09-trombone", 0.25], [21.42, "ep06-whoosh", 0.25], [24.7, "ep06-whoosh", 0.2], [26.98, "ep06-whoosh", 0.2], [32.24, "ep06-boom", 0.3], [34.62, "ep06-boom", 0.25], [37.0, "ep06-whoosh", 0.25], [39.46, "ep06-receipt", 0.3], [51.36, "ep06-stamp", 0.35], [61.62, "ep06-pop", 0.3], [62.92, "ep06-pop", 0.3], [71.84, "ep06-stamp", 0.35], [75.2, "ep06-kaching", 0.25], [83.48, "ep06-scratch", 0.3], [90.34, "ep06-counter", 0.3], [98.68, "ep09-trombone", 0.25], [102.66, "ep06-pop", 0.3], [104.86, "ep06-boom", 0.3], [112.36, "ep06-pop", 0.3], [119.34, "ep06-counter", 0.3], [129.3, "ep06-kaching", 0.3], [137.88, "ep06-pop", 0.3], [147.98, "ep06-kaching", 0.3], [155.06, "ep06-pop", 0.3], [158.96, "ep06-kaching", 0.3], [166.52, "ep06-counter", 0.3], [173.58, "ep06-pop", 0.3], [178.98, "ep06-scratch", 0.3], [181.76, "ep06-whoosh", 0.25], [185.25, "ep06-receipt", 0.3], [188.18, "ep06-stamp", 0.35], [192.7, "ep06-scratch", 0.3], [195.5, "ep09-bell", 0.3], [200.5, "ep06-pop", 0.3], [202.2, "ep06-pop", 0.3], [203.48, "ep06-pop", 0.3], [213.26, "ep06-counter", 0.3], [219.74, "ep06-scratch", 0.3], [225.14, "ep06-pop", 0.3], [232.9, "ep09-trombone", 0.25], [240.6, "ep06-pop", 0.3], [244.5, "ep06-pop", 0.3], [254.3, "ep06-counter", 0.3], [267.1, "ep06-pop", 0.3], [271.18, "ep06-kaching", 0.3], [281.14, "ep06-pop", 0.3], [287.8, "ep09-bell", 0.3], [290.42, "ep06-stamp", 0.35], [298.32, "ep06-pop", 0.3], [302.2, "ep06-stamp", 0.4], [309.88, "ep06-scratch", 0.3], [314.3, "ep06-pop", 0.3], [319.28, "ep06-whoosh", 0.25], [326.84, "click", 0.4], [327.44, "click", 0.4], [328.66, "click", 0.4], [334.04, "ep09-trombone", 0.25], [338.94, "ep06-counter", 0.3], [344.76, "ep06-pop", 0.3], [348.66, "ep06-boom", 0.3], [355.04, "ep06-pop", 0.3], [367.46, "click", 0.4], [368.68, "click", 0.4], [377.44, "ep06-pop", 0.3], [378.38, "ep06-pop", 0.3], [379.34, "ep06-pop", 0.3], [382.4, "ep06-receipt", 0.3], [394.54, "ep06-kaching", 0.3], [400.9, "ep06-stamp", 0.4], [416.78, "ep06-scratch", 0.3], [421.04, "ep06-receipt", 0.3], [427.38, "ep09-trombone", 0.25], [439.98, "ep06-scratch", 0.3], [460.46, "ep06-counter", 0.3], [464.92, "ep06-pop", 0.3], [474.28, "ep06-boom", 0.35], [476.25, "ep06-stamp", 0.4], [484.6, "ep06-whoosh", 0.25], [487.58, "ep06-pop", 0.3], [496.1, "ep06-pop", 0.3], [497.62, "ep06-pop", 0.3], [505.18, "ep06-coin", 0.3], [509.74, "ep06-pop", 0.3], [519.04, "ep06-counter", 0.3], [524.36, "ep09-cheer", 0.25], [531.94, "ep09-cheer", 0.25], [535.28, "ep09-trombone", 0.25], [539.9, "ep06-pop", 0.3], [547.9, "ep06-whoosh", 0.25]];

export const T01Restaurants: React.FC = () => {
  const { fps } = useVideoConfig();
  setClips(CLIP_FN); // свой набор стоков при каждом рендере: в общем Root последним грузится чужой ролик
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/t01-voiceover.mp3")} volume={0.9} />
      <Sequence from={0} durationInFrames={1128}><Audio src={staticFile("audio/t01/music-trailer.mp3")} volume={(f) => 0.1 * interpolate(f, [0, 30, 1098, 1128], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={1110} durationInFrames={4362}><Audio src={staticFile("audio/t01/music-c1.mp3")} volume={(f) => 0.09 * interpolate(f, [0, 30, 4332, 4362], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={5454} durationInFrames={4143}><Audio src={staticFile("audio/t01/music-c2.mp3")} volume={(f) => 0.09 * interpolate(f, [0, 30, 4113, 4143], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={9579} durationInFrames={4977}><Audio src={staticFile("audio/t01/music-c3.mp3")} volume={(f) => 0.09 * interpolate(f, [0, 30, 4947, 4977], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={14538} durationInFrames={2125}><Audio src={staticFile("audio/t01/music-finale.mp3")} volume={(f) => 0.1 * interpolate(f, [0, 30, 2095, 2125], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
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
