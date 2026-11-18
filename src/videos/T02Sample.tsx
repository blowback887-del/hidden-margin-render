import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Bg6, BigNum, Bug6, C6, Center, ChapterTag, Col, CorpSub, In, Label6, Meme, NameCard6, Row, Scene6, setClips, Source6, Split6, Stamp, Stock6, Subscribe6, Plate6, Words } from "../brand/hm6";
import { Evidence, ArchiveFx, CaseBoard } from "../brand/evidence";

// ===================================================================
// T02Sample — сгенерировано cloud/gen/build.py из плана cloud/gen/t02.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const T02SAMPLE_DURATION_SEC = 581.3;
const CLIPS: Record<number, string> = {"1": "01-sample-sachets", "2": "02-hand-jar-open", "3": "03-woman-cream-smile", "4": "04-seller-cosmetics-counter", "5": "05-mall-cosmetics-aisle", "6": "06-seller-customer-counter", "7": "07-shop-50-off", "8": "08-mall-xmas-escalators", "9": "09-mall-xmas-lights", "10": "10-mall-xmas-tree", "11": "11-elderly-hands-bills", "12": "12-old-man-laptop", "13": "13-card-phone-app", "14": "14-phone-in-hand", "15": "15-close-sign", "16": "16-closing-down-sale", "17": "17-door-dark-wood", "18": "18-door-handle", "19": "19-wall-clock", "20": "20-man-magnifier", "21": "21-car-salesman", "22": "22-car-dealer-couple", "23": "23-calculator", "24": "24-cards-fan", "25": "25-card-terminal", "26": "26-man-card-frustrated", "27": "27-card-tablet", "28": "28-sign-tablet", "29": "29-sign-tablet-2", "30": "30-shopping-bags-hold", "31": "31-hand-in-bag", "32": "32-pin-board", "33": "33-mall-aerial", "34": "34-mall-topdown", "35": "35-daughter-mother-older", "36": "36-mother-daughter-kitchen", "37": "37-mb-palms-pier", "38": "38-mb-pier-aerial", "39": "39-wheelchair-hand", "40": "40-lab-tubes", "41": "41-lab-gloves", "42": "42-facial-mask-spa", "43": "43-older-man-card-phone", "44": "44-phone-bill-10000", "45": "45-temporarily-closed", "46": "46-film-reel", "47": "47-stakeout-binoculars", "48": "48-stakeout-camera", "49": "49-courthouse-dusk", "50": "50-office-palms", "51": "51-daughter-father-talk", "52": "52-old-man-head-hands", "53": "53-mall-corridor", "54": "54-older-couple-store", "55": "55-shocked-woman", "56": "56-facepalm", "57": "57-facial-bed", "58": "58-facial-gloves", "59": "59-shelf-pink", "60": "60-jars-black", "61": "61-cash-bill-table", "62": "62-counting-dollars", "63": "63-snake", "64": "64-cuffs-money", "65": "65-hands-cuffed", "66": "66-red-light-woman", "67": "67-cash-jar", "68": "68-luxury-jars", "69": "69-hand-jar", "70": "70-mall-walkers", "71": "71-woman-receipt-shock", "72": "72-merry-xmas-letters", "73": "73-fbi-interrogation", "74": "74-detective-board", "75": "75-mall-us-interior", "76": "76-mall-terrace", "77": "77-seller-terminal-smile", "78": "78-salesman-compliment", "79": "79-seller-card-payment"};
const LENS: Record<number, number> = {"1": 10.0, "2": 10.0, "3": 8.17, "4": 7.67, "5": 10.0, "6": 10.0, "7": 10.0, "8": 10.0, "9": 10.0, "10": 10.0, "11": 5.0, "12": 9.5, "13": 6.7, "14": 10.0, "15": 10.0, "16": 10.0, "17": 10.0, "18": 3.77, "19": 10.0, "20": 10.0, "21": 9.67, "22": 10.0, "23": 10.0, "24": 7.5, "25": 10.0, "26": 10.0, "27": 8.8, "28": 7.83, "29": 10.0, "30": 9.13, "31": 7.03, "32": 7.63, "33": 6.33, "34": 10.0, "35": 10.0, "36": 10.0, "37": 10.0, "38": 9.9, "39": 10.0, "40": 10.0, "41": 5.93, "42": 9.03, "43": 10.0, "44": 10.0, "45": 8.0, "46": 10.0, "47": 10.0, "48": 10.0, "49": 10.0, "50": 9.5, "51": 10.0, "52": 7.63, "53": 10.0, "54": 9.97, "55": 9.73, "56": 8.57, "57": 10.0, "58": 10.0, "59": 8.57, "60": 6.13, "61": 10.0, "62": 10.0, "63": 5.03, "64": 10.0, "65": 10.0, "66": 10.0, "67": 9.03, "68": 5.27, "69": 9.9, "70": 10.0, "71": 9.0, "72": 10.0, "73": 10.0, "74": 10.0, "75": 10.0, "76": 10.0, "77": 10.0, "78": 10.0, "79": 10.0};
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/t02/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 });
setClips(CLIP_FN);

type Beat = { from: number; to: number; tag?: [number, string]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 6.3, back: (<><Stock6 n={1} dur={6.3} dim={0} graphics={false} />
<Stock6 n={77} from={3.14} dur={6.3} dim={0} graphics={false} /></>), el: (<>

</>) },
  { from: 6.3, to: 13.7, back: (<><Stock6 n={30} dur={7.4} dim={0} graphics={true} /></>), el: (<>
<Center x={1430} y={720}><In at={3.6} from="fade"><Plate6 at={3.6}><BigNum at={3.6} icon="bag" size={150} label="SKINCARE SHE NEVER WANTED">$5,000</BigNum></Plate6></In></Center>
</>) },
  { from: 13.7, to: 17.08, back: (<><Stock6 n={53} dur={3.38} dim={0.15} graphics={false} /></>), el: (<>

</>) },
  { from: 17.08, to: 23.52, back: null, el: (<>
<Evidence src="evidence/t02/npr-42k.png" size={[2880, 1800]} dur={6.44} frame="screen" marks={[{ x: 455, y: 599, w: 1159, h: 98, at: 3.06 }]} focus={{ x: 420, y: 449, w: 1410, h: 398 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 23.52, to: 26.26, back: (<><Stock6 n={52} dur={2.74} dim={0} graphics={true} /></>), el: (<>
<Center x={1450} y={300}><Plate6 at={1.74}><Label6 at={1.74} size={40} color={C6.loss}>CREDIT SCORE ↓</Label6></Plate6></Center>
</>) },
  { from: 26.26, to: 34.5, back: (<><Stock6 n={17} dur={8.24} dim={0} graphics={true} />
<Stock6 n={79} from={5.12} dur={8.24} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={760}><In at={6.46} from="fade"><Plate6 at={6.46}><BigNum at={6.46} icon="card" size={130} label="WHAT SHE AGREED TO">$600</BigNum></Plate6></In></Center>
</>) },
  { from: 34.5, to: 40.44, back: null, el: (<>
<Evidence src="evidence/t02/npr-44k.png" size={[2880, 1800]} dur={5.94} frame="screen" marks={[{ x: 1158, y: 761, w: 490, h: 44, at: 1.72 }]} focus={{ x: 420, y: 611, w: 1410, h: 344 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 40.44, to: 43.48, back: null, el: (<>
<Evidence src="evidence/t02/npr-head.png" size={[2880, 1800]} dur={3.04} frame="screen" source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 43.48, to: 50.56, back: null, el: (<>
<CaseBoard title="NPR · 50+ PEOPLE · ~500 COMPLAINTS" pins={[{ label: "ANN ARBOR, MI", sub: "$5,000", x: 380, y: 300, at: 0.3 }, { label: "MICHIGAN", sub: "$42,000", x: 330, y: 760, at: 0.9 }, { label: "SANTA FE, NM", sub: "$44,280", x: 1520, y: 290, at: 1.5 }]} hub={{ label: "?", x: 960, y: 540, at: 5.56 }} />
</>) },
  { from: 50.56, to: 54.32, back: (<><Stock6 n={2} dur={3.76} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={880}><Row gap={36}><Plate6 at={1.0}><Label6 at={1.0} size={46} color={C6.ink}>FREE</Label6></Plate6><Plate6 at={2.46}><Label6 at={2.46} size={46} color={C6.loss}>$5,000</Label6></Plate6></Row></Center>
</>) },
  { from: 54.32, to: 59.9, back: (<><Stock6 n={47} dur={5.58} dim={0} graphics={true} /></>), el: (<>
<Center x={1400} y={300}><Stamp at={4.4} text="2013" color={C6.accent} size={90} /></Center>
</>) },
  { from: 59.9, to: 63.42, back: (<><Stock6 n={9} dur={3.52} dim={0} graphics={true} /></>), el: (<>
<Center x={1400} y={300}><Stamp at={1.6} text="2026" color={C6.loss} size={90} /></Center>
</>) },
  { from: 63.42, to: 70.78, back: (<><Stock6 n={35} dur={7.36} dim={0} graphics={true} /></>), el: (<>
<div style={{ position: "absolute", right: 70, top: 56 }}><Label6 at={0} size={22} color={C6.mint}>ILLUSTRATIVE FOOTAGE</Label6></div><Center y={880}><NameCard6 at={2.9} name="Michele Anliker" role="HER DAUGHTER · MICHIGAN" icon="person" /></Center>
</>) },
  { from: 70.78, to: 81.24, back: (<><Stock6 n={8} dur={10.46} dim={0} graphics={true} />
<Stock6 n={10} from={5.64} dur={10.46} dim={0} graphics={true} /></>), el: (<>
<div style={{ position: "absolute", right: 70, top: 56 }}><Label6 at={0} size={22} color={C6.mint}>ILLUSTRATIVE FOOTAGE</Label6></div><Center y={880}><In at={2.18} out={5.64} from="fade"><Plate6 at={2.18}><Label6 at={2.18} size={38} color={C6.ink}>BRIARWOOD MALL · ANN ARBOR · DEC 2024</Label6></Plate6></In></Center>
<Center x={1400} y={330}><Stamp at={9.48} text="voupre" color={C6.accent} size={86} /></Center>
</>) },
  { from: 81.24, to: 89.02, back: null, el: (<>
<Evidence src="evidence/t02/npr-anliker.png" size={[2880, 1800]} dur={7.78} frame="screen" marks={[{ x: 892, y: 705, w: 822, h: 44, at: 3.26 }]} focus={{ x: 420, y: 555, w: 1410, h: 344 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 89.02, to: 91.36, back: (<><Stock6 n={72} dur={2.34} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.35} text="the holiday spirit" y={900} />
</>) },
  { from: 91.36, to: 96.52, hard: true, back: (<><Stock6 n={32} dur={5.16} dim={0} graphics={true} /></>), el: (<>
<Center x={1420} y={820}><Plate6 at={3.54}><Label6 at={3.54} size={36} color={C6.ink}>DIFFERENT STATES · SAME STORY</Label6></Plate6></Center>
</>) },
  { from: 96.52, to: 99.38, back: (<><Stock6 n={68} dur={2.86} dim={0.3} graphics={true} /></>), el: (<>
<Center y={540}><Words text="The recipe" at={1.44} size={120} hl={["recipe"]} /></Center>
</>) },
  { from: 99.38, to: 109.5, tag: [1, "The Sample"], back: (<><Stock6 n={6} dur={10.12} dim={0} graphics={true} />
<Stock6 n={78} from={6.36} dur={10.12} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 109.5, to: 116.44, tag: [1, "The Sample"], back: (<><Stock6 n={3} dur={6.94} dim={0.2} graphics={true} /></>), el: (<>
<Center x={1380} y={330}><Stamp at={2.22} text="reciprocity" color={C6.accent} size={78} /></Center>
</>) },
  { from: 116.44, to: 124.24, tag: [1, "The Sample"], back: (<><Stock6 n={61} dur={7.8} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={330}><Plate6 at={5.52}><BigNum at={5.52} icon="receipt" size={130} label="TIPS · 2ND MINT “JUST FOR YOU”" color={C6.money}>+20%</BigNum></Plate6></Center>
<Source6 at={5.52}>NPR · Nov 26, 2012 (Robert Cialdini)</Source6>
</>) },
  { from: 124.24, to: 126.9, back: (<><Stock6 n={55} dur={2.66} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.3} text="one. extra. mint." y={900} />
</>) },
  { from: 126.9, to: 129.64, tag: [1, "The Sample"], back: (<><Stock6 n={58} dur={2.74} dim={0} graphics={false} /></>), el: (<>

</>) },
  { from: 129.64, to: 137.2, tag: [2, "The Chair"], hard: true, back: (<><Stock6 n={57} dur={7.56} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 137.2, to: 143.22, tag: [2, "The Chair"], back: (<><Stock6 n={42} dur={6.02} dim={0} graphics={true} />
<Stock6 n={17} from={4.22} dur={6.02} dim={0} graphics={true} /></>), el: (<>
<Center x={1430} y={300}><In at={2.6} out={4.22} from="fade"><Plate6 at={2.6}><BigNum at={2.6} icon="clock" size={110} label="IN THE CHAIR">1 hr+</BigNum></Plate6></In></Center>
</>) },
  { from: 143.22, to: 151.5, tag: [2, "The Chair"], back: null, el: (<>
<Evidence src="evidence/t02/npr-walker.png" size={[2880, 1800]} dur={8.28} frame="screen" marks={[{ x: 670, y: 652, w: 546, h: 44, at: 5.38 }]} focus={{ x: 420, y: 502, w: 1410, h: 344 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 151.5, to: 155.56, tag: [2, "The Chair"], back: (<><Stock6 n={19} dur={4.06} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={760}><Plate6 at={1.12}><BigNum at={1.12} icon="receipt" size={130} label="HAWAII · STATE COMPLAINT">$2,600</BigNum></Plate6></Center>
</>) },
  { from: 155.56, to: 162.0, tag: [3, "The Price"], hard: true, back: (<><Stock6 n={59} dur={6.44} dim={0} graphics={true} />
<Stock6 n={60} from={4.78} dur={6.44} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><In at={4.78} from="fade"><Plate6 at={4.78}><Label6 at={4.78} size={44} color={C6.loss}>PRICE TAGS: NONE</Label6></Plate6></In></Center>
</>) },
  { from: 162.0, to: 171.3, tag: [3, "The Price"], back: null, el: (<>
<Evidence src="evidence/t02/npr-noprice.png" size={[2880, 1800]} dur={9.3} frame="screen" marks={[{ x: 758, y: 707, w: 549, h: 44, at: 5.04 }]} focus={{ x: 420, y: 557, w: 1410, h: 344 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 171.3, to: 178.34, tag: [3, "The Price"], back: (<><Stock6 n={62} dur={7.04} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={760}><Plate6 at={4.8}><BigNum at={4.8} icon="coin" size={120} label="WHAT ONE SALESMAN BRAGGED">$10K/mo</BigNum></Plate6></Center>
<Source6 at={1.5}>A salesman's own video · 2025</Source6>
</>) },
  { from: 178.34, to: 191.3, tag: [3, "The Price"], back: (<><Stock6 n={23} dur={12.96} dim={0} graphics={true} />
<Stock6 n={21} from={9.72} dur={12.96} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={330}><In at={4.98} out={9.72} from="fade"><Plate6 at={4.98}><BigNum at={4.98} icon="receipt" size={120} label="FIRST OFFER">$20,000</BigNum></Plate6></In></Center>
<Center y={860}><In at={10.66} from="fade"><Plate6 at={10.66}><Words text="“I felt like I was in a car dealership.”" at={10.66} size={52} hl={["car", "dealership.”"]} maxW={1500} /></Plate6></In></Center>
<Source6 at={9.72}>BBB complaint, via CBS News</Source6>
</>) },
  { from: 191.3, to: 196.56, tag: [3, "The Price"], back: (<><Stock6 n={7} dur={5.26} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.28} text="50% off a made-up number" y={900} size={70} />
</>) },
  { from: 196.56, to: 202.0, tag: [4, "The Card"], hard: true, back: (<><Stock6 n={25} dur={5.44} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 202.0, to: 212.14, tag: [4, "The Card"], back: (<><Stock6 n={26} dur={10.14} dim={0} graphics={true} />
<Stock6 n={71} from={5.12} dur={10.14} dim={0} graphics={true} /></>), el: (<>
<Center x={1430} y={330}><In at={7.74} from="fade"><Plate6 at={7.74}><BigNum at={7.74} icon="card" size={130} label="TWO CHARGES, SAME DAY" color={C6.loss}>$44,280</BigNum></Plate6></In></Center>
</>) },
  { from: 212.14, to: 219.64, tag: [4, "The Card"], back: null, el: (<>
<Evidence src="evidence/t02/npr-zero.png" size={[2880, 1800]} dur={7.5} frame="screen" marks={[{ x: 1080, y: 705, w: 498, h: 44, at: 2.96 }]} focus={{ x: 420, y: 555, w: 1410, h: 344 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 219.64, to: 223.78, tag: [4, "The Card"], back: (<><Stock6 n={27} dur={4.14} dim={0} graphics={true} /></>), el: (<>
<CorpSub at={0.76} corp="“Payment plan”" human="a high-interest loan" />
</>) },
  { from: 223.78, to: 229.72, tag: [5, "The Bag"], hard: true, back: (<><Stock6 n={28} dur={5.94} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 229.72, to: 236.98, tag: [5, "The Bag"], back: null, el: (<>
<Evidence src="evidence/t02/npr-receipt.png" size={[2880, 1800]} dur={7.26} frame="screen" marks={[{ x: 554, y: 652, w: 692, h: 44, at: 3.8 }]} focus={{ x: 420, y: 502, w: 1410, h: 344 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 236.98, to: 241.45, back: (<><Stock6 n={1} dur={4.47} dim={0.35} graphics={true} /></>), el: (<>
<Center y={540}><Col gap={10}><Words text="The sample was free." at={0.1} size={96} /><Words text="The chair was not." at={1.34} size={96} hl={["not."]} /></Col></Center>
</>) },
  { from: 241.45, to: 251.98, back: null, el: (<>
<Evidence src="evidence/t02/npr-flyers.png" size={[2880, 1800]} dur={10.53} frame="screen" marks={[{ x: 455, y: 652, w: 695, h: 44, at: 5.39 }]} focus={{ x: 420, y: 502, w: 1410, h: 344 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 251.98, to: 255.36, back: (<><Stock6 n={70} dur={3.38} dim={0} graphics={false} /></>), el: (<>
<Subscribe6 at={2.38} />
</>) },
  { from: 255.36, to: 264.36, back: (<><Stock6 n={33} dur={9.0} dim={0} graphics={true} />
<Stock6 n={76} from={6.5} dur={9.0} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><In at={5.16} out={6.5} from="fade"><Plate6 at={5.16}><Label6 at={5.16} size={38} color={C6.ink}>SIMON PROPERTY GROUP · THE MALL'S OWNER</Label6></Plate6></In></Center>
<Center x={1420} y={330}><Stamp at={7.8} text="refunded" color={C6.money} size={84} /></Center>
</>) },
  { from: 264.36, to: 267.7, back: (<><Stock6 n={36} dur={3.34} dim={0} graphics={false} /></>), el: (<>

</>) },
  { from: 267.7, to: 271.22, hard: true, back: null, el: (<>
<CaseBoard pins={[{ label: "ANN ARBOR, MI", sub: "$5,000", x: 380, y: 300, at: 0.1 }, { label: "MICHIGAN", sub: "$42,000", x: 330, y: 760, at: 0.6 }, { label: "SANTA FE, NM", sub: "$44,280", x: 1520, y: 290, at: 1.0 }]} hub={{ label: "?", x: 960, y: 540, at: 1.4 }} />
</>) },
  { from: 271.22, to: 282.4, back: (<><Stock6 n={37} dur={11.18} dim={0} graphics={true} />
<Stock6 n={39} from={4.42} dur={11.18} dim={0} graphics={true} /></>), el: (<>
<div style={{ position: "absolute", right: 70, top: 56 }}><Label6 at={0} size={22} color={C6.mint}>ILLUSTRATIVE FOOTAGE</Label6></div><Center y={880}><In at={3.26} out={4.42} from="fade"><Plate6 at={3.26}><Label6 at={3.26} size={38} color={C6.ink}>MIA'S BY VOUPRE · MANHATTAN BEACH, CA</Label6></Plate6></In></Center>
<Center y={880}><In at={5.9} from="fade"><Plate6 at={5.9}><Label6 at={5.9} size={38} color={C6.ink}>MARY ELLEN ECKHERT, 82 · RETIRED TEACHER</Label6></Plate6></In></Center>
</>) },
  { from: 282.4, to: 285.54, back: (<><Stock6 n={57} dur={3.14} dim={0} graphics={false} /></>), el: (<>

</>) },
  { from: 285.54, to: 294.22, back: null, el: (<>
<Evidence src="evidence/t02/npr-53k.png" size={[2880, 1800]} dur={8.68} frame="screen" marks={[{ x: 455, y: 760, w: 1297, h: 98, at: 1.84 }]} focus={{ x: 420, y: 610, w: 1410, h: 398 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 294.22, to: 298.3, back: (<><Stock6 n={11} dur={4.08} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={330}><Plate6 at={2.48}><BigNum at={2.48} icon="card" size={120} label="STILL OUT, AFTER DISPUTES" color={C6.loss}>$17,000+</BigNum></Plate6></Center>
</>) },
  { from: 298.3, to: 305.8, back: (<><Stock6 n={38} dur={7.5} dim={0.4} graphics={true} /></>), el: (<>
<Center y={540}><Words text="“What kind of a spa charges anyone $54,000?”" at={2.58} size={74} hl={["$54,000?”"]} maxW={1500} /></Center>
<Source6 at={2.58}>Her son, Marc Eckhert, via NPR</Source6>
</>) },
  { from: 305.8, to: 308.36, back: (<><Stock6 n={5} dur={2.56} dim={0.15} graphics={true} /></>), el: (<>
<Center y={900}><Plate6 at={0.96}><Label6 at={0.96} size={34} color={C6.accent}>SAMPLE · CHAIR · PRICE · CARD · BAG</Label6></Plate6></Center>
</>) },
  { from: 308.36, to: 313.92, back: (<><Stock6 n={20} dur={5.56} dim={0} graphics={true} />
<Stock6 n={68} from={2.62} dur={5.56} dim={0} graphics={true} /></>), el: (<>
<Center x={1400} y={330}><Stamp at={4.56} text="voupre" color={C6.accent} size={90} /></Center>
</>) },
  { from: 313.92, to: 326.68, back: null, el: (<>
<CaseBoard title="ONE NAME ON THE JARS" pins={[{ label: "MICHIGAN", sub: "$42,000", x: 330, y: 760, at: 0.1 }, { label: "SANTA FE, NM", sub: "$44,280", x: 1520, y: 290, at: 0.76 }, { label: "MANHATTAN BEACH, CA", sub: "$53,500", x: 1540, y: 770, at: 1.76 }]} hub={{ label: "MAZAL GROUP", sub: "CHATSWORTH, CA · DISTRIBUTOR", x: 960, y: 540, at: 8.52, q: 10.06 }} />
</>) },
  { from: 326.68, to: 335.66, back: (<><Stock6 n={50} dur={8.98} dim={0.3} graphics={true} /></>), el: (<>
<div style={{ position: "absolute", right: 70, top: 56 }}><Label6 at={0} size={22} color={C6.mint}>ILLUSTRATIVE FOOTAGE</Label6></div><Center x={620} y={560}><Plate6 at={3.12} pad="30px 50px"><Col gap={20} align="flex-start">
  <Label6 at={3.12} size={38} color={C6.ink}>SELL ONLY MAZAL PRODUCTS</Label6>
  <Label6 at={5.14} size={38} color={C6.ink}>FOLLOW ITS REFUND POLICY</Label6>
  <Label6 at={6.94} size={38} color={C6.accent}>SEND COMPLAINTS TO HQ</Label6>
</Col></Plate6></Center>
<Source6 at={0.05}>Court records, via NPR</Source6>
</>) },
  { from: 335.66, to: 339.94, back: (<><Stock6 n={34} dur={4.28} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={760}><Plate6 at={2.22}><BigNum at={2.22} icon="store" size={130} label="STORES · A FORMER EMPLOYEE'S ESTIMATE">2,000+</BigNum></Plate6></Center>
</>) },
  { from: 339.94, to: 345.14, back: null, el: (<>
<Evidence src="evidence/t02/npr-noown.png" size={[2880, 1800]} dur={5.2} frame="screen" marks={[{ x: 688, y: 598, w: 748, h: 44, at: 1.48 }]} focus={{ x: 420, y: 448, w: 1410, h: 344 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 345.14, to: 347.32, back: (<><Stock6 n={69} dur={2.18} dim={0} graphics={false} /></>), el: (<>

</>) },
  { from: 347.32, to: 357.78, back: (<><Stock6 n={62} dur={10.46} dim={0.35} graphics={true} />
<Stock6 n={23} from={8.52} dur={10.46} dim={0.35} graphics={true} /></>), el: (<>
<Center y={480}><Split6 scale={0.62} at={4.16} left={{ title: "STORE PAYS", value: "$23", color: C6.ink }} right={{ title: "SUGGESTED RETAIL", value: "$3,000", color: C6.loss, at: 7.34 }} /></Center>
<Center y={880}><Stamp at={9.15} text="×130" color={C6.accent} size={96} /></Center>
</>) },
  { from: 357.78, to: 363.68, back: null, el: (<>
<Evidence src="evidence/t02/npr-luxury.png" size={[2880, 1800]} dur={5.9} frame="screen" marks={[{ x: 455, y: 599, w: 1257, h: 98, at: 3.48 }]} focus={{ x: 420, y: 449, w: 1410, h: 398 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 363.68, to: 378.06, back: (<><Stock6 n={40} dur={14.38} dim={0} graphics={true} />
<Stock6 n={41} from={10.34} dur={14.38} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={300}><In at={5.36} out={7.22} from="fade"><Plate6 at={5.36}><BigNum at={5.36} icon="bottle" size={110} label="SUGGESTED PRICE · ONE SERUM">$1,300</BigNum></Plate6></In></Center>
<Center y={880}><In at={8.3} out={10.9} from="fade"><Plate6 at={8.3}><Label6 at={8.3} size={40} color={C6.ink}>LABEL: VITAMIN A · VITAMIN E</Label6></Plate6></In></Center>
<Center y={820}><Stamp at={10.9} text="not detected" color={C6.loss} size={80} /></Center>
<Center y={960}><Label6 at={10.9} size={28} color={C6.ink}>NPR LAB TEST · ONE BOX</Label6></Center>
</>) },
  { from: 378.06, to: 383.72, back: null, el: (<>
<Evidence src="evidence/t02/npr-under10.png" size={[2880, 1800]} dur={5.66} frame="screen" marks={[{ x: 904, y: 707, w: 343, h: 44, at: 2.92 }]} focus={{ x: 420, y: 557, w: 1410, h: 344 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 383.72, to: 390.2, back: null, el: (<>
<Evidence src="evidence/t02/cbs-head.png" size={[1440, 1610]} dur={6.48} frame="screen" focus={{ x: 330, y: 100, w: 1000, h: 820 }} source="CBS News California Investigates · 2026" url="cbsnews.com" />
</>) },
  { from: 390.2, to: 400.62, back: (<><Stock6 n={25} dur={10.42} dim={0.2} graphics={true} /></>), el: (<>
<Center x={1430} y={330}><Plate6 at={4.88}><BigNum at={4.88} icon="receipt" size={120} label="RECEIPTS · SKINCARE + RED LIGHT DEVICE">~$41,700</BigNum></Plate6></Center>
</>) },
  { from: 400.62, to: 405.88, back: null, el: (<>
<Evidence src="evidence/t02/cbs-tips.png" size={[1440, 1610]} dur={5.26} frame="screen" marks={[{ x: 47, y: 408, w: 1222, h: 112, at: 2.96 }]} focus={{ x: 10, y: 258, w: 1360, h: 412 }} source="CBS News California Investigates · 2026" url="cbsnews.com" />
</>) },
  { from: 405.88, to: 411.0, back: null, el: (<>
<Evidence src="evidence/t02/cbs-onesided.png" size={[1440, 1610]} dur={5.12} frame="screen" marks={[{ x: 665, y: 528, w: 662, h: 52, at: 1.7 }]} focus={{ x: 10, y: 378, w: 1360, h: 352 }} source="CBS News California Investigates · 2026" url="cbsnews.com" />
</>) },
  { from: 411.0, to: 417.38, back: (<><Stock6 n={2} dur={6.38} dim={0.2} graphics={true} /></>), el: (<>
<Center x={1400} y={330}><Stamp at={3.72} text="chatsworth, ca" color={C6.accent} size={80} /></Center>
</>) },
  { from: 417.38, to: 423.62, back: (<><Stock6 n={45} dur={6.24} dim={0} graphics={false} /></>), el: (<>
<Center y={880}><In at={2.52} from="fade"><Plate6 at={2.52}><Label6 at={2.52} size={38} color={C6.ink}>LAPD IS LOOKING INTO HIS CASE</Label6></Plate6></In></Center>
</>) },
  { from: 423.62, to: 427.14, hard: true, back: (<><Stock6 n={46} dur={3.52} dim={0} graphics={true} sepia />
<ArchiveFx /></>), el: (<>

</>) },
  { from: 427.14, to: 432.68, back: (<><Stock6 n={48} dur={5.54} dim={0} graphics={true} /></>), el: (<>
<Center x={1380} y={320}><Stamp at={4.06} text="operation salty winds" color={C6.accent} size={70} /></Center>
</>) },
  { from: 432.68, to: 440.0, back: null, el: (<>
<Evidence src="evidence/t02/npr-salty.png" size={[2880, 1800]} dur={7.32} frame="screen" marks={[{ x: 695, y: 591, w: 248, h: 56, at: 0.05 }]} focus={{ x: 420, y: 441, w: 1410, h: 356 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 440.0, to: 449.1, back: (<><Stock6 n={73} dur={9.1} dim={0} graphics={true} /></>), el: (<>
<div style={{ position: "absolute", right: 70, top: 56 }}><Label6 at={0} size={22} color={C6.mint}>ILLUSTRATIVE FOOTAGE</Label6></div><Center y={880}><In at={3.84} from="fade"><Plate6 at={3.84}><Label6 at={3.84} size={38} color={C6.ink}>EAST COAST CHAIN · INCLUDING OROGOLD KIOSKS</Label6></Plate6></In></Center>
</>) },
  { from: 449.1, to: 460.62, back: (<><Stock6 n={64} dur={11.52} dim={0} graphics={true} />
<Stock6 n={65} from={7.28} dur={11.52} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={330}><Plate6 at={4.98}><BigNum at={4.98} icon="coin" size={120} label="EARNED, PER THE JUSTICE DEPT.">$14M+</BigNum></Plate6></Center>
<Center y={880}><In at={8.1} from="fade"><Plate6 at={8.1}><Row gap={30}><Label6 at={8.1} size={40} color={C6.ink}>SENTENCED: 6.5 YEARS</Label6><Label6 at={10.18} size={40} color={C6.loss}>SERVED: 30 MONTHS</Label6></Row></Plate6></In></Center>
</>) },
  { from: 460.62, to: 465.4, back: null, el: (<>
<Evidence src="evidence/t02/npr-snake.png" size={[2880, 1800]} dur={4.78} frame="screen" marks={[{ x: 610, y: 653, w: 682, h: 44, at: 2.94 }]} focus={{ x: 420, y: 503, w: 1410, h: 344 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 465.4, to: 469.0, back: (<><Stock6 n={63} dur={3.6} dim={0} graphics={false} /></>), el: (<>
<Meme at={1.98} text="the snake, 2026" y={900} />
</>) },
  { from: 469.0, to: 475.04, back: null, el: (<>
<Evidence src="evidence/t02/npr-overcharge.png" size={[2880, 1800]} dur={6.04} frame="screen" marks={[{ x: 455, y: 814, w: 1229, h: 98, at: 2.58 }, { x: 455, y: 868, w: 1216, h: 98, at: 4.02 }]} focus={{ x: 420, y: 664, w: 1410, h: 398 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 475.04, to: 480.22, back: (<><Stock6 n={49} dur={5.18} dim={0} graphics={true} /></>), el: (<>
<Center x={1440} y={760}><Plate6 at={2.78}><BigNum at={2.78} icon="flag" size={130} label="SETTLED WITH NEW MEXICO">$350K</BigNum></Plate6></Center>
</>) },
  { from: 480.22, to: 489.98, back: null, el: (<>
<Evidence src="evidence/t02/npr-950k.png" size={[2880, 1800]} dur={9.76} frame="screen" marks={[{ x: 455, y: 652, w: 631, h: 44, at: 4.84 }]} focus={{ x: 420, y: 502, w: 1410, h: 344 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 489.98, to: 495.04, back: null, el: (<>
<Evidence src="evidence/t02/npr-terminated.png" size={[2880, 1800]} dur={5.06} frame="screen" marks={[{ x: 455, y: 706, w: 1262, h: 98, at: 4.58 }]} focus={{ x: 420, y: 556, w: 1410, h: 398 }} source="NPR · Oct 14, 2026" url="npr.org" />
</>) },
  { from: 495.04, to: 505.58, back: (<><Stock6 n={50} dur={10.54} dim={0.3} graphics={true} /></>), el: (<>
<div style={{ position: "absolute", right: 70, top: 56 }}><Label6 at={0} size={22} color={C6.mint}>ILLUSTRATIVE FOOTAGE</Label6></div><Center y={430}><Split6 scale={0.6} at={0.2} left={{ title: "THE OLD SIGN", value: "MAZAL", color: C6.ink }} right={{ title: "THE SIGN NOW", value: "INV", color: C6.accent, at: 3.08 }} /></Center>
<Center y={880}><In at={6.16} from="fade"><Plate6 at={6.16}><Label6 at={6.16} size={36} color={C6.ink}>INNOVATION BRANDS · FOUNDED 2024 BY MAZAL'S OWNER + HUSBAND</Label6></Plate6></In></Center>
</>) },
  { from: 505.58, to: 508.74, back: null, el: (<>
<CaseBoard title="NEW NAME · SAME ADDRESS" pins={[{ label: "ANN ARBOR, MI", sub: "$5,000", x: 380, y: 300, at: 0.1 }, { label: "SANTA FE, NM", sub: "$44,280", x: 1520, y: 290, at: 0.2 }, { label: "MANHATTAN BEACH, CA", sub: "$53,500", x: 1540, y: 770, at: 0.3 }, { label: "LOS ANGELES, CA", sub: "BEE & CO.", x: 960, y: 900, at: 0.4 }, { label: "HAWAII", sub: "$950K SETTLEMENT", x: 960, y: 170, at: 0.5 }]} hub={{ label: "MAZAL GROUP", sub: "SIGN NOW SAYS: INV BRANDS", x: 960, y: 540, at: 0.1 }} />
</>) },
  { from: 508.74, to: 510.1, hard: true, back: (<><Stock6 n={76} dur={1.36} dim={0.4} graphics={true} /></>), el: (<>
<Center y={540}><Words text="House rules" at={0.36} size={130} hl={["rules"]} /></Center>
</>) },
  { from: 510.1, to: 518.68, back: (<><Stock6 n={70} dur={8.58} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>1 · TAKE THE SAMPLE. KEEP WALKING.</Label6></Plate6></Center>
</>) },
  { from: 518.68, to: 522.6, back: (<><Stock6 n={18} dur={3.92} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>2 · NO CHAIR. NO BACK ROOM.</Label6></Plate6></Center>
</>) },
  { from: 522.6, to: 528.88, back: (<><Stock6 n={59} dur={6.28} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>3 · GET THE TOTAL IN WRITING FIRST</Label6></Plate6></Center>
</>) },
  { from: 528.88, to: 535.94, back: (<><Stock6 n={13} dur={7.06} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>4 · DECLINED? DON'T HAND OVER CARD #2. LEAVE.</Label6></Plate6></Center>
</>) },
  { from: 535.94, to: 545.7, back: (<><Stock6 n={14} dur={9.76} dim={0.3} graphics={true} /></>), el: (<>
<Center y={800}><In at={3.78} from="fade"><Plate6 at={3.78} pad="28px 50px"><Col gap={16} align="flex-start">
  <Label6 at={3.78} size={38} color={C6.ink}>FTC COOLING-OFF RULE · 3 DAYS</Label6>
  <Label6 at={5.44} size={38} color={C6.money}>YOUR HOME, A TEMPORARY SPOT ✓</Label6>
  <Label6 at={8.5} size={38} color={C6.loss}>A STORE'S PERMANENT LOCATION ✗</Label6>
</Col></Plate6></In></Center>
<Source6 at={3.78}>FTC · consumer.ftc.gov</Source6>
</>) },
  { from: 545.7, to: 549.7, back: (<><Stock6 n={43} dur={4.0} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>5 · DISPUTE WITH YOUR CARD COMPANY. FAST.</Label6></Plate6></Center>
</>) },
  { from: 549.7, to: 560.3, back: (<><Stock6 n={51} dur={10.6} dim={0} graphics={true} />
<Stock6 n={11} from={7.64} dur={10.6} dim={0} graphics={true} /></>), el: (<>
<Center y={880}><In at={0.3} out={7.64} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={42} color={C6.ink}>6 · GLANCE AT YOUR PARENTS' STATEMENTS</Label6></Plate6></In></Center>
</>) },
  { from: 560.3, to: 566.94, back: (<><Stock6 n={35} dur={6.64} dim={0} graphics={false} />
<Stock6 n={53} from={4.02} dur={6.64} dim={0} graphics={false} /></>), el: (<>

</>) },
  { from: 566.94, to: 570.9, back: (<><Stock6 n={6} dur={3.96} dim={0.35} graphics={true} /></>), el: (<>
<Center y={480}><Words text="What did they say first?" at={2.38} size={90} hl={["first?"]} maxW={1500} /></Center>
<Center y={760}><Label6 at={2.38} size={40} color={C6.accent}>TELL US IN THE COMMENTS</Label6></Center>
</>) },
  { from: 570.9, to: 581.3, back: (<><Stock6 n={61} dur={10.4} dim={0.45} graphics={true} /></>), el: (<>
<Center y={420}><Words text="Who really gets your tip?" at={0.9} size={92} hl={["tip?"]} maxW={1600} /></Center>
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string, number][] = [[0.4, "ep06-pop", 0.2], [9.9, "ep06-kaching", 0.3], [15.08, "impact", 0.35], [17.18, "t02-paper", 0.35], [30.56, "tick", 0.3], [32.72, "ep06-coin", 0.3], [36.22, "ep06-boom", 0.35], [40.54, "t02-paper", 0.3], [43.78, "ep06-pop", 0.25], [44.38, "ep06-pop", 0.25], [44.98, "ep06-pop", 0.25], [49.04, "rise", 0.3], [58.72, "ep06-stamp", 0.35], [61.5, "ep06-stamp", 0.35], [80.26, "ep06-stamp", 0.35], [81.34, "t02-paper", 0.3], [85.98, "ep06-scratch", 0.3], [89.17, "t02-door", 0.35], [91.38, "ep06-whoosh", 0.2], [99.48, "ep06-pop", 0.25], [111.72, "ep06-stamp", 0.3], [121.96, "ep06-counter", 0.3], [124.54, "ep09-bell", 0.25], [129.66, "ep06-whoosh", 0.2], [142.2, "t02-door", 0.3], [143.32, "t02-paper", 0.3], [152.62, "ep06-kaching", 0.3], [155.58, "ep06-whoosh", 0.2], [160.34, "ep06-scratch", 0.3], [162.1, "t02-paper", 0.3], [176.1, "ep06-counter", 0.3], [183.32, "ep06-kaching", 0.3], [193.58, "ep09-trombone", 0.25], [196.58, "ep06-whoosh", 0.2], [204.08, "t02-declined", 0.35], [209.74, "ep06-boom", 0.3], [212.24, "t02-paper", 0.3], [223.8, "ep06-whoosh", 0.2], [229.92, "ep06-receipt", 0.3], [233.52, "ep06-stamp", 0.35], [238.32, "impact", 0.3], [241.55, "t02-paper", 0.3], [263.16, "ep06-stamp", 0.35], [267.8, "ep06-boom", 0.35], [268.3, "ep06-pop", 0.25], [268.7, "ep06-pop", 0.25], [285.64, "t02-paper", 0.3], [287.38, "ep06-boom", 0.3], [296.7, "ep06-counter", 0.3], [312.92, "ep06-stamp", 0.35], [314.02, "ep06-pop", 0.25], [314.68, "ep06-pop", 0.25], [315.68, "ep06-pop", 0.25], [322.44, "rise", 0.3], [323.98, "ep06-boom", 0.4], [329.8, "ep06-pop", 0.25], [331.82, "ep06-pop", 0.25], [333.62, "ep06-pop", 0.25], [337.88, "ep06-counter", 0.3], [340.04, "t02-paper", 0.3], [351.48, "ep06-pop", 0.3], [354.66, "ep06-boom", 0.3], [356.47, "ep06-stamp", 0.4], [357.88, "t02-paper", 0.3], [371.98, "ep06-pop", 0.3], [374.58, "ep06-stamp", 0.4], [378.16, "t02-paper", 0.3], [383.82, "t02-paper", 0.3], [395.08, "ep06-counter", 0.3], [400.72, "t02-paper", 0.3], [405.98, "t02-paper", 0.3], [414.72, "ep06-stamp", 0.4], [417.58, "t02-door", 0.3], [423.64, "ep06-whoosh", 0.2], [431.2, "ep06-stamp", 0.35], [432.78, "t02-paper", 0.3], [454.08, "ep06-counter", 0.3], [459.28, "ep06-stamp", 0.35], [460.72, "t02-paper", 0.3], [467.38, "ep09-trombone", 0.25], [469.1, "t02-paper", 0.3], [477.82, "ep06-kaching", 0.3], [480.32, "t02-paper", 0.3], [490.08, "t02-paper", 0.3], [494.56, "ep06-stamp", 0.35], [498.12, "ep06-pop", 0.3], [506.58, "ep06-boom", 0.35], [508.76, "ep06-whoosh", 0.2], [510.3, "ep06-pop", 0.3], [520.44, "t02-door", 0.3], [522.8, "ep06-pop", 0.3], [529.28, "t02-declined", 0.3], [539.72, "ep06-pop", 0.3], [545.9, "ep06-pop", 0.3], [550.0, "ep06-pop", 0.3], [571.8, "ep06-whoosh", 0.25]];

export const T02Sample: React.FC = () => {
  const { fps } = useVideoConfig();
  setClips(CLIP_FN); // свой набор стоков при каждом рендере: в общем Root последним грузится чужой ролик
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/t02-voiceover.mp3")} volume={0.9} />
      <Sequence from={0} durationInFrames={2760}><Audio src={staticFile("audio/t02/music-c0-open.mp3")} volume={(f) => 0.085 * interpolate(f, [0, 30, 2730, 2760], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={2742} durationInFrames={3174}><Audio src={staticFile("audio/t02/music-c1-recipe.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 3144, 3174], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={5898} durationInFrames={2250}><Audio src={staticFile("audio/t02/music-c2-card.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 2220, 2250], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={8130} durationInFrames={4590}><Audio src={staticFile("audio/t02/music-c3-network.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 4560, 4590], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={12702} durationInFrames={2568}><Audio src={staticFile("audio/t02/music-c4-history.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 2538, 2568], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={15252} durationInFrames={2187}><Audio src={staticFile("audio/t02/music-c5-rules.mp3")} volume={(f) => 0.09 * interpolate(f, [0, 30, 2157, 2187], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
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
