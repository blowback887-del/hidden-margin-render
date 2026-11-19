import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Bg6, BigNum, Bug6, C6, Center, ChapterTag, In, Label6, Meme, Scene6, setClips, Source6, Stock6, Subscribe6, Plate6, Words } from "../brand/hm6";
import { FindBadge, FeeBadge, ContinueBtn, SumColumn, BoxVsFee, StatesBoard, EmailCard, OrgChart, YearsOverButton, UnderTheButton, PctVs, RebateWait, OpenFlip, ButtonOverSummary } from "../brand/t04";
import { Drift } from "../brand/t03";
import { Evidence, AdVsTruth } from "../brand/evidence";

// ===================================================================
// T04Lens — сгенерировано cloud/gen/build.py из плана cloud/gen/t04.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const T04LENS_DURATION_SEC = 560.18;
const CLIPS: Record<number, string> = {"1": "01-laptop-night-shop", "2": "02-hacker-hoodie", "3": "03-glitch", "4": "04-times-square", "5": "05-eye-closeup", "6": "06-magnifier-bill", "7": "07-google-search", "8": "08-hands-shop-laptop", "9": "09-eye-exam", "10": "10-lens-eyechart", "11": "11-typing-lowlight", "12": "12-trackpad", "13": "13-card-laptop", "14": "14-vhs-rewind", "15": "15-envelope-seal", "16": "16-calendar-write", "17": "17-calculator-docs", "18": "18-tax-form", "19": "19-calc-taxform", "20": "20-call-center", "21": "21-agent-headset", "22": "22-frustrated-laptop", "23": "23-shocked-man", "24": "24-man-glasses-shock", "25": "25-email-typing", "26": "26-presentation", "27": "27-office-night", "28": "28-courthouse", "29": "29-gavel", "30": "30-judge-verdict", "31": "31-lawyers", "32": "32-money-counter", "33": "33-packages-door", "34": "34-phone-impatient", "35": "35-phone-scroll-shop", "36": "36-couple-bills-phone", "37": "37-eyeglasses-chart", "38": "38-detective-board", "39": "39-detectives-docs", "40": "40-button-press", "41": "41-man-confused", "42": "42-eye-drops", "43": "43-woman-receipts", "44": "44-eye-exam-girl", "45": "45-facepalm", "46": "46-card-tablet"};
const LENS: Record<number, number> = {"1": 10.0, "2": 10.0, "3": 6.17, "4": 10.0, "5": 10.0, "6": 10.0, "7": 10.0, "8": 10.0, "9": 10.0, "10": 8.27, "11": 8.73, "12": 10.0, "13": 10.0, "14": 10.0, "15": 10.0, "16": 10.0, "17": 10.0, "18": 10.0, "19": 10.0, "20": 10.0, "21": 10.0, "22": 10.0, "23": 5.83, "24": 10.0, "25": 8.0, "26": 7.1, "27": 10.0, "28": 10.0, "29": 10.0, "30": 10.0, "31": 6.97, "32": 10.0, "33": 8.37, "34": 10.0, "35": 8.9, "36": 10.0, "37": 6.47, "38": 10.0, "39": 10.0, "40": 10.0, "41": 10.0, "42": 10.0, "43": 10.0, "44": 10.0, "45": 10.0, "46": 8.8};
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/t04/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 });
setClips(CLIP_FN);

type Beat = { from: number; to: number; tag?: [number, string]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 3.44, back: (<><Stock6 n={10} dur={3.44} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.14} from="fade"><Plate6 at={2.14}><Label6 at={2.14} size={38} color={C6.ink}>FEBRUARY 2026 · A CONTACT LENS WEBSITE</Label6></Plate6></In></Center>
</>) },
  { from: 3.44, to: 11.98, back: null, el: (<>
<Drift><OpenFlip at={0.1} totalAt={4.78} /></Drift>
</>) },
  { from: 11.98, to: 14.24, back: (<><Stock6 n={2} dur={2.26} dim={0} graphics={false} />
<Stock6 n={3} from={1.16} dur={2.26} dim={0} graphics={false} /></>), el: (<>

</>) },
  { from: 14.24, to: 17.78, back: (<><Stock6 n={39} dur={3.54} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.2} from="fade"><Plate6 at={2.2}><Label6 at={2.2} size={40} color={C6.ink}>EVERY SCREEN · IN A FEDERAL LAWSUIT</Label6></Plate6></In></Center>
</>) },
  { from: 17.78, to: 24.22, back: null, el: (<>
<Evidence src="evidence/t04/ftc-caption.png" size={[1700, 2200]} dur={6.44} frame="paper" marks={[{ x: 193, y: 278, w: 400, h: 36, at: 1.06 }]} inset source="CASE 2:26-cv-03232 · U.S. DISTRICT COURT, NEVADA" />
</>) },
  { from: 24.22, to: 27.28, back: (<><Stock6 n={5} dur={3.06} dim={0} graphics={true} /></>), el: (<>
<Center x={1430} y={330}><Plate6 at={0.2}><BigNum at={0.2} icon="person" size={120} label="AMERICANS WEAR CONTACTS">50M</BigNum></Plate6></Center>
<Source6 at={0.2}>FTC complaint, ¶4</Source6>
</>) },
  { from: 27.28, to: 32.12, back: (<><Stock6 n={40} dur={4.84} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.56} from="fade"><Plate6 at={2.56}><Label6 at={2.56} size={38} color={C6.ink}>A GAME: THE EXACT SCREENS A SHOPPER SAW</Label6></Plate6></In></Center>
</>) },
  { from: 32.12, to: 40.0, back: null, el: (<>
<Drift><Center y={500}><Words text="Find the $273.44." at={0.1} size={130} hl={["$273.44."]} /></Center>
<Center y={680}><Label6 at={4.44} size={34} color={C6.mint}>IT'S ON THE PAGE THE WHOLE TIME</Label6></Center>
<FindBadge at={6.14} /></Drift>
</>) },
  { from: 40.0, to: 42.66, back: (<><Stock6 n={1} dur={2.66} dim={0} graphics={false} /></>), el: (<>
<FindBadge at={-1} />
</>) },
  { from: 42.66, to: 47.88, tag: [1, "The Checkout"], hard: true, back: (<><Stock6 n={7} dur={5.22} dim={0} graphics={true} /></>), el: (<>
<FindBadge at={-1} />
</>) },
  { from: 47.88, to: 55.62, tag: [1, "The Checkout"], back: null, el: (<>
<Evidence src="evidence/t04/fig1.png" size={[1920, 490]} dur={7.74} frame="shot" marks={[{ x: 549, y: 331, w: 81, h: 34, at: 2.08 }]} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 1 · FEB 24, 2026" /><FindBadge at={-1} />
</>) },
  { from: 55.62, to: 64.84, tag: [1, "The Checkout"], back: null, el: (<>
<Evidence src="evidence/t04/fig2.png" size={[1920, 569]} dur={9.22} frame="shot" marks={[{ x: 1095, y: 21, w: 148, h: 50, at: 1.5 }, { x: 1236, y: 18, w: 193, h: 30, at: 4.08 }, { x: 1150, y: 69, w: 86, h: 32, at: 6.4 }]} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 2 · FEB 24, 2026" /><FindBadge at={-1} />
</>) },
  { from: 64.84, to: 73.98, tag: [1, "The Checkout"], back: null, el: (<>
<Evidence src="evidence/t04/fig3.png" size={[1920, 648]} dur={9.14} frame="shot" marks={[{ x: 1153, y: 423, w: 276, h: 94, at: 6.7 }]} zoom={0.01} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 3 · FEB 24, 2026" /><FindBadge at={-1} />
</>) },
  { from: 73.98, to: 76.52, tag: [1, "The Checkout"], back: (<><Stock6 n={8} dur={2.54} dim={0.55} graphics={true} /></>), el: (<>
<FeeBadge at={0.05} from={[960, 500, 1]} to={[140, 250, 0.3]} moveAt={1.2} moveDur={0.7} /><FindBadge at={-1} />
</>) },
  { from: 76.52, to: 80.84, tag: [1, "The Checkout"], back: (<><Stock6 n={42} dur={4.32} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.ink}>4 BOXES PER EYE · 8 BOXES = A YEAR</Label6></Plate6></In></Center><FindBadge at={-1} /><FeeBadge at={-1} from={[140, 250, 0.3]} />
</>) },
  { from: 80.84, to: 82.94, tag: [1, "The Checkout"], back: null, el: (<>
<Evidence src="evidence/t04/fig4.png" size={[1920, 961]} dur={2.1} frame="shot" source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 4 · FEB 24, 2026" /><FindBadge at={-1} /><FeeBadge at={-1} from={[140, 250, 0.3]} />
</>) },
  { from: 82.94, to: 89.28, tag: [1, "The Checkout"], back: null, el: (<>
<Evidence src="evidence/t04/fig7.png" size={[1920, 956]} dur={6.34} frame="shot" marks={[{ x: 1782, y: 431, w: 74, h: 28, at: 1.76 }]} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 7 · FEB 24, 2026" /><Center x={960} y={900}><In at={3.76} from="fade"><Plate6 at={3.76}><Label6 at={3.76} size={38} color={C6.ink}>$73.16 × 2 EYES = $146.32 AFTER REBATE</Label6></Plate6></In></Center><FindBadge at={-1} /><FeeBadge at={-1} from={[140, 250, 0.3]} />
</>) },
  { from: 89.28, to: 93.22, tag: [1, "The Checkout"], back: null, el: (<>
<Evidence src="evidence/t04/case.png" size={[1920, 192]} dur={3.94} frame="shot" marks={[{ x: 285, y: 92, w: 332, h: 42, at: 2.0 }]} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 11 · FEB 24, 2026" /><FindBadge at={-1} /><FeeBadge at={-1} from={[140, 250, 0.3]} />
</>) },
  { from: 93.22, to: 97.08, tag: [1, "The Checkout"], back: null, el: (<>
<Evidence src="evidence/t04/fig7.png" size={[1920, 956]} dur={3.86} frame="shot" marks={[{ x: 1315, y: 688, w: 546, h: 67, at: 2.22 }]} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 7 · FEB 24, 2026" /><FindBadge at={-1} /><FeeBadge at={-1} from={[140, 250, 0.3]} />
</>) },
  { from: 97.08, to: 105.6, tag: [1, "The Checkout"], back: null, el: (<>
<Evidence src="evidence/t04/fig9.png" size={[1920, 953]} dur={8.52} frame="shot" marks={[{ x: 675, y: 588, w: 94, h: 27, at: 1.14 }, { x: 727, y: 654, w: 460, h: 69, at: 5.86 }]} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 9 · FEB 24, 2026" /><FindBadge at={-1} /><FeeBadge at={-1} from={[140, 250, 0.3]} />
</>) },
  { from: 105.6, to: 111.48, tag: [1, "The Checkout"], back: null, el: (<>
<Drift><Center y={330}><Words text="Found the $273.44 yet?" at={0.05} size={96} hl={["$273.44"]} /></Center>
<Center y={640}><ContinueBtn at={0.1} pressAt={4.8 + 0.4} /></Center><FindBadge at={-1} /><FeeBadge at={-1} from={[140, 250, 0.3]} /></Drift>
</>) },
  { from: 111.48, to: 119.68, tag: [1, "The Checkout"], back: null, el: (<>
<Evidence src="evidence/t04/fig12.png" size={[1920, 956]} dur={8.2} frame="shot" marks={[{ x: 1613, y: 629, w: 77, h: 25, at: 1.98 }, { x: 1606, y: 722, w: 92, h: 40, at: 6.4 }]} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 12 · FEB 24, 2026" /><FindBadge at={-1} /><FeeBadge at={-1} from={[140, 250, 0.3]} />
</>) },
  { from: 119.68, to: 127.42, tag: [1, "The Checkout"], back: null, el: (<>
<Evidence src="evidence/t04/crop-fig12-total.png" size={[690, 410]} dur={7.74} frame="shot" marks={[{ x: 16, y: 240, w: 650, h: 40, at: 4.92 }, { x: 16, y: 343, w: 650, h: 44, at: 4.92 }]} zoom={0.01} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 12 · FEB 24, 2026" /><Center x={960} y={960}><In at={5.96} from="fade"><Plate6 at={5.96}><Label6 at={5.96} size={32} color={C6.ink}>NO “TAXES &amp; FEES” LINE ON THIS SCREEN · FTC ¶41</Label6></Plate6></In></Center><FindBadge at={-1} /><FeeBadge at={-1} from={[140, 250, 0.3]} />
</>) },
  { from: 127.42, to: 132.76, tag: [1, "The Checkout"], back: null, el: (<>
<Evidence src="evidence/t04/fig13.png" size={[1920, 957]} dur={5.34} frame="shot" marks={[{ x: 331, y: 647, w: 413, h: 71, at: 3.12 }]} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 13 · FEB 24, 2026" /><FindBadge at={-1} /><FeeBadge at={-1} from={[140, 250, 0.3]} />
</>) },
  { from: 132.76, to: 138.78, tag: [2, "Under the Button"], hard: true, back: (<><Stock6 n={14} dur={6.02} dim={0} graphics={true} />
<Stock6 n={12} from={4.92} dur={6.02} dim={0} graphics={true} /></>), el: (<>
<FindBadge at={-1} /><FeeBadge at={-1} from={[140, 250, 0.3]} />
</>) },
  { from: 138.78, to: 146.46, tag: [2, "Under the Button"], back: null, el: (<>
<Evidence src="evidence/t04/fig10.png" size={[1920, 951]} dur={7.68} frame="shot" marks={[{ x: 822, y: 198, w: 271, h: 47, at: 1.38 }]} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 10 · FEB 24, 2026" /><FindBadge at={-1} /><FeeBadge at={-1} from={[140, 250, 0.3]} />
</>) },
  { from: 146.46, to: 153.06, tag: [2, "Under the Button"], back: null, el: (<>
<Evidence src="evidence/t04/fig11.png" size={[1920, 953]} dur={6.6} frame="shot" marks={[{ x: 971, y: 468, w: 156, h: 29, at: 1.34 }, { x: 1774, y: 468, w: 88, h: 29, at: 2.98 }]} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 11 · FEB 24, 2026" /><FindBadge at={-1} foundAt={2.98} /><FeeBadge at={-1} from={[140, 250, 0.3]} />
</>) },
  { from: 153.06, to: 157.06, tag: [2, "Under the Button"], back: null, el: (<>
<Drift><ButtonOverSummary at={0.05} downAt={1.78} /></Drift>
</>) },
  { from: 157.06, to: 162.4, tag: [2, "Under the Button"], back: null, el: (<>
<Evidence src="evidence/t04/ftc-never.png" size={[1700, 2200]} dur={5.34} frame="paper" marks={[{ x: 193, y: 201, w: 339, h: 35, at: 2.88 }, { x: 738, y: 201, w: 213, h: 40, at: 3.78 }]} inset source="FTC + UTAH + NEVADA v. LENS.COM · COMPLAINT · OCT 2, 2026" />
</>) },
  { from: 162.4, to: 168.88, tag: [2, "Under the Button"], back: null, el: (<>
<Drift><Center y={520}><SumColumn rows={[{ label: "lenses, after rebate", value: "$146.32", at: 0.1 }, { label: "taxes & fees", value: "$273.44", at: 1.62, color: C6.loss }, { label: "shipping", value: "$9.95", at: 2.74 }]} total={{ label: "total after rebate", value: "$429.71", at: 3.78 }} /></Center></Drift>
</>) },
  { from: 168.88, to: 178.12, tag: [2, "Under the Button"], back: null, el: (<>
<Drift><Center y={500}><RebateWait at={0.3} mailAt={6.88 + 1.2} /></Center></Drift>
</>) },
  { from: 178.12, to: 183.84, tag: [2, "Under the Button"], back: (<><Stock6 n={15} dur={5.72} dim={0} graphics={true} />
<Stock6 n={16} from={4.24} dur={5.72} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.24} from="fade"><Plate6 at={2.24}><Label6 at={2.24} size={38} color={C6.ink}>REBATE: MAIL A FORM · WAIT FOR A PREPAID CARD</Label6></Plate6></In></Center><Source6 at={2.24}>Lens.com rebate FAQ</Source6>
</>) },
  { from: 183.84, to: 186.6, tag: [2, "Under the Button"], back: (<><Stock6 n={17} dur={2.76} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.14} from="fade"><Plate6 at={1.14}><Label6 at={1.14} size={40} color={C6.ink}>THE MATH THE AD DIDN'T DO</Label6></Plate6></In></Center>
</>) },
  { from: 186.6, to: 198.48, tag: [2, "Under the Button"], back: null, el: (<>
<Drift><Center y={520}><BoxVsFee at={1.24} feeAt={5.54} left={["LENSES · A BOX", "$18.29"]} right={["FEE · A BOX", "$34.18"]} mult="×1.87" multAt={7.66} /></Center></Drift>
</>) },
  { from: 198.48, to: 206.72, tag: [2, "Under the Button"], back: null, el: (<>
<Drift><Center y={520}><BoxVsFee at={0.1} feeAt={2.98} left={["PRICE ON GOOGLE", "$18.29"]} right={["REAL PRICE · A BOX", "$52.47"]} ratio={2.87} mult="≈ ×3" multAt={5.48} note="OUR CALCULATION · ($146.32 + $273.44) ÷ 8 · BEFORE SHIPPING" /></Center></Drift>
</>) },
  { from: 206.72, to: 215.22, tag: [2, "Under the Button"], back: (<><Stock6 n={13} dur={8.5} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.14} from="fade"><Plate6 at={3.14}><Label6 at={3.14} size={38} color={C6.ink}>CHEAP SLICE UP FRONT · THE REST AT THE END</Label6></Plate6></In></Center>
</>) },
  { from: 215.22, to: 220.5, tag: [2, "Under the Button"], back: (<><Stock6 n={11} dur={5.28} dim={0} graphics={true} />
<Stock6 n={22} from={3.26} dur={5.28} dim={0} graphics={true} /></>), el: (<>
<Meme at={3.26} text="me, typing my prescription. again." y={900} size={66} />
</>) },
  { from: 220.5, to: 228.12, tag: [2, "Under the Button"], back: (<><Stock6 n={35} dur={7.62} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.74} from="fade"><Plate6 at={1.74}><Label6 at={1.74} size={40} color={C6.ink}>NO REAL TOTAL → NO REAL COMPARISON</Label6></Plate6></In></Center><Source6 at={4.94}>FTC press release · Oct 2, 2026</Source6>
</>) },
  { from: 228.12, to: 235.02, tag: [2, "Under the Button"], back: (<><Stock6 n={18} dur={6.9} dim={0.55} graphics={true} /></>), el: (<>
<Center y={430}><Words text="“Taxes &amp; fees.”" at={3.22} size={110} /></Center>
<Center y={620}><Words text="Whose taxes?" at={4.84} size={130} hl={["taxes?"]} /></Center>
</>) },
  { from: 235.02, to: 240.08, tag: [3, "Whose Taxes?"], hard: true, back: null, el: (<>
<Evidence src="evidence/t04/fig11.png" size={[1920, 953]} dur={5.06} frame="shot" marks={[{ x: 971, y: 468, w: 156, h: 29, at: 1.5 }]} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 11 · FEB 24, 2026" />
</>) },
  { from: 240.08, to: 246.0, tag: [3, "Whose Taxes?"], back: null, el: (<>
<Evidence src="evidence/t04/fig14.png" size={[1920, 719]} dur={5.92} frame="shot" marks={[{ x: 182, y: 135, w: 351, h: 47, at: 1.18 }]} zoom={0.01} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 14 · FEB 24, 2026" />
</>) },
  { from: 246.0, to: 250.0, tag: [3, "Whose Taxes?"], back: (<><Stock6 n={19} dur={4.0} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.84} from="fade"><Plate6 at={1.84}><Label6 at={1.84} size={40} color={C6.ink}>MOST PEOPLE READ “TAXES” AS SALES TAX</Label6></Plate6></In></Center>
</>) },
  { from: 250.0, to: 256.44, tag: [3, "Whose Taxes?"], back: null, el: (<>
<Drift><Center y={520}><StatesBoard a={[{ st: "Alaska", at: 0.05 }, { st: "Delaware", at: 1.3 }, { st: "Montana", at: 1.98 }, { st: "New Hampshire", at: 2.7 }, { st: "Oregon", at: 3.68 }]} b={[]} /></Center>
<Source6 at={0.3}>FTC complaint, ¶48</Source6></Drift>
</>) },
  { from: 256.44, to: 266.2, tag: [3, "Whose Taxes?"], back: null, el: (<>
<Drift><Center y={520}><StatesBoard a={[{ st: "Alaska", at: -1 }, { st: "Delaware", at: -1 }, { st: "Montana", at: -1 }, { st: "New Hampshire", at: -1 }, { st: "Oregon", at: -1 }]} b={[{ st: "Florida", at: 1.62 }, { st: "New Jersey", at: 2.16 }, { st: "Virginia", at: 2.92 }]} stampAt={8.8} /></Center>
<Source6 at={0.3}>FTC complaint, ¶48–50</Source6></Drift>
</>) },
  { from: 266.2, to: 273.06, tag: [3, "Whose Taxes?"], back: null, el: (<>
<Evidence src="evidence/t04/ftc-virginia.png" size={[1700, 2200]} dur={6.86} frame="paper" marks={[{ x: 963, y: 939, w: 494, h: 42, at: 5.66 }]} inset source="FTC + UTAH + NEVADA v. LENS.COM · COMPLAINT · OCT 2, 2026" />
</>) },
  { from: 273.06, to: 283.48, tag: [3, "Whose Taxes?"], back: null, el: (<>
<Evidence src="evidence/t04/ftc-florida.png" size={[1700, 2200]} dur={10.42} frame="paper" marks={[{ x: 682, y: 718, w: 372, h: 41, at: 1.98 }, { x: 802, y: 1076, w: 648, h: 42, at: 8.58 }]} inset source="FTC + UTAH + NEVADA v. LENS.COM · COMPLAINT · OCT 2, 2026" />
</>) },
  { from: 283.48, to: 290.68, tag: [3, "Whose Taxes?"], back: null, el: (<>
<Evidence src="evidence/t04/ftc-virginia.png" size={[1700, 2200]} dur={7.2} frame="paper" marks={[{ x: 1177, y: 296, w: 297, h: 42, at: 2.52 }, { x: 633, y: 335, w: 489, h: 40, at: 4.0 }]} inset source="FTC + UTAH + NEVADA v. LENS.COM · COMPLAINT · OCT 2, 2026" />
</>) },
  { from: 290.68, to: 296.36, tag: [3, "Whose Taxes?"], back: null, el: (<>
<Evidence src="evidence/t04/ftc-notsales.png" size={[1700, 2200]} dur={5.68} frame="paper" marks={[{ x: 441, y: 968, w: 1030, h: 42, at: 0.42 }, { x: 712, y: 1351, w: 615, h: 42, at: 3.88 }]} inset source="FTC + UTAH + NEVADA v. LENS.COM · COMPLAINT · OCT 2, 2026" />
</>) },
  { from: 296.36, to: 307.42, tag: [3, "Whose Taxes?"], back: (<><Stock6 n={39} dur={11.06} dim={0} graphics={true} />
<Stock6 n={17} from={6.18} dur={11.06} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.3} out={6.18} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={40} color={C6.ink}>CLASS ACTION, 2024: “A PROCESSING FEE”</Label6></Plate6></In></Center><Source6 at={4.98}>Nail v. Lens.com, via Frankfurt Kurnit (FKKS)</Source6><Center x={960} y={880}><In at={6.18} from="fade"><Plate6 at={6.18}><Label6 at={6.18} size={36} color={C6.ink}>THE BREAKDOWN: ONLY IF YOU ASK FOR A “FULL RECEIPT”</Label6></Plate6></In></Center>
</>) },
  { from: 307.42, to: 310.84, tag: [3, "Whose Taxes?"], back: null, el: (<>
<Evidence src="evidence/t04/ftc-perbox.png" size={[1700, 2200]} dur={3.42} frame="paper" marks={[{ x: 632, y: 241, w: 139, h: 42, at: 2.04 }]} inset source="FTC + UTAH + NEVADA v. LENS.COM · COMPLAINT · OCT 2, 2026" />
</>) },
  { from: 310.84, to: 317.72, tag: [3, "Whose Taxes?"], back: (<><Stock6 n={23} dur={6.88} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.1} from="fade"><Plate6 at={5.1}><Label6 at={5.1} size={40} color={C6.ink}>A YEAR'S SUPPLY = THE BIGGEST ORDER</Label6></Plate6></In></Center>
</>) },
  { from: 317.72, to: 324.22, tag: [3, "Whose Taxes?"], back: (<><Stock6 n={22} dur={6.5} dim={0} graphics={true} /></>), el: (<>
<Center x={1430} y={330}><Plate6 at={0.4}><BigNum at={0.4} icon="receipt" size={110} label="COMPLAINTS · LENS.COM'S OWN RECORDS">1000s</BigNum></Plate6></Center>
<Source6 at={4.66}>FTC complaint, ¶79</Source6>
</>) },
  { from: 324.22, to: 328.14, tag: [3, "Whose Taxes?"], back: null, el: (<>
<Evidence src="evidence/t04/ftc-146.png" size={[1700, 2200]} dur={3.92} frame="paper" marks={[{ x: 633, y: 335, w: 307, h: 38, at: 1.68 }]} inset source="FTC + UTAH + NEVADA v. LENS.COM · COMPLAINT · OCT 2, 2026" />
</>) },
  { from: 328.14, to: 333.68, tag: [3, "Whose Taxes?"], back: null, el: (<>
<Evidence src="evidence/t04/ftc-doubled.png" size={[1700, 2200]} dur={5.54} frame="paper" marks={[{ x: 928, y: 930, w: 445, h: 42, at: 1.44 }, { x: 633, y: 1160, w: 466, h: 42, at: 4.3 }]} inset source="FTC + UTAH + NEVADA v. LENS.COM · COMPLAINT · OCT 2, 2026" />
</>) },
  { from: 333.68, to: 340.46, back: (<><Stock6 n={12} dur={6.78} dim={0} graphics={false} /></>), el: (<>
<Subscribe6 at={3.1} /><Center x={960} y={880}><In at={4.8} from="fade"><Plate6 at={4.8}><Label6 at={4.8} size={36} color={C6.ink}>SUBSCRIBING: $0.00 · NO FEES UNDER THE BUTTON</Label6></Plate6></In></Center>
</>) },
  { from: 340.46, to: 349.06, back: (<><Stock6 n={38} dur={8.6} dim={0} graphics={true} />
<Stock6 n={25} from={4.72} dur={8.6} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 349.06, to: 358.28, tag: [4, "They Knew"], hard: true, back: null, el: (<>
<Drift><Center y={520}><EmailCard at={0.1} slideAt={7.18} /></Center></Drift>
</>) },
  { from: 358.28, to: 368.96, tag: [4, "They Knew"], back: null, el: (<>
<Evidence src="evidence/t04/ftc-ppt.png" size={[1700, 2200]} dur={10.68} frame="paper" marks={[{ x: 471, y: 1011, w: 392, h: 36, at: 2.14 }, { x: 193, y: 1088, w: 392, h: 35, at: 6.14 }]} inset source="FTC + UTAH + NEVADA v. LENS.COM · COMPLAINT · OCT 2, 2026" />
</>) },
  { from: 368.96, to: 378.3, tag: [4, "They Knew"], back: null, el: (<>
<Drift><Center y={500}><OrgChart at={6.84} ownerAt={0.1} speedAt={6.84 + 0.6} callAt={99} /></Center></Drift>
</>) },
  { from: 378.3, to: 384.26, tag: [4, "They Knew"], back: null, el: (<>
<Evidence src="evidence/t04/ftc-owner.png" size={[1700, 2200]} dur={5.96} frame="paper" marks={[{ x: 709, y: 1275, w: 446, h: 42, at: 2.94 }, { x: 541, y: 968, w: 403, h: 42, at: 4.18 }]} inset source="FTC + UTAH + NEVADA v. LENS.COM · COMPLAINT · OCT 2, 2026" />
</>) },
  { from: 384.26, to: 392.18, tag: [4, "They Knew"], back: null, el: (<>
<Drift><Center y={520}><YearsOverButton at={0.1} years={[{ y: "2022", at: 2.54 }, { y: "2023", at: 2.54 + 0.35 }, { y: "2024", at: 2.54 + 0.7 }, { y: "2025", at: 3.72 }, { y: "2026", at: 3.72 + 0.35 }]} label="FTC: “NOT MATERIALLY CHANGED” · ¶86" /></Center></Drift>
</>) },
  { from: 392.18, to: 403.06, tag: [4, "They Knew"], hard: true, back: (<><Stock6 n={29} dur={10.88} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.4} from="fade"><Plate6 at={0.4}><Label6 at={0.4} size={40} color={C6.ink}>5 CLASS ACTIONS · ONE NEVADA FEDERAL COURT</Label6></Plate6></In></Center><Source6 at={6.36}>Consolidation order, D. Nev. · May 2025</Source6>
</>) },
  { from: 403.06, to: 407.48, tag: [4, "They Knew"], back: (<><Stock6 n={31} dur={4.42} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.94} from="fade"><Plate6 at={2.94}><Label6 at={2.94} size={36} color={C6.ink}>LENS.COM: THE FEE WAS DISCLOSED BEFORE CHECKOUT</Label6></Plate6></In></Center><Source6 at={2.94}>Nail v. Lens.com, via FKKS</Source6>
</>) },
  { from: 407.48, to: 411.14, tag: [4, "They Knew"], back: (<><Stock6 n={24} dur={3.66} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.8} text="the reasonable shopper, scrolling below “Continue”" y={900} size={62} />
</>) },
  { from: 411.14, to: 423.08, tag: [4, "They Knew"], back: (<><Stock6 n={30} dur={11.94} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.4} out={5.08} from="fade"><Plate6 at={0.4}><Label6 at={0.4} size={40} color={C6.ink}>OCT 2024 · NEVADA: THE CASE GOES ON</Label6></Plate6></In></Center><Source6 at={0.4}>Nail v. Lens.com, via FKKS</Source6><Center x={960} y={880}><In at={5.08 + 0.3} from="fade"><Plate6 at={5.08 + 0.3}><Label6 at={5.08 + 0.3} size={36} color={C6.ink}>APRIL 2026 · FLORIDA: A QUESTION “FOR AN ACTUAL JURY”</Label6></Plate6></In></Center>
</>) },
  { from: 423.08, to: 431.92, tag: [4, "They Knew"], back: null, el: (<>
<Evidence src="evidence/t04/ftc-cid.png" size={[1700, 2200]} dur={8.84} frame="paper" marks={[{ x: 192, y: 1931, w: 193, h: 42, at: 3.3 }, { x: 686, y: 1624, w: 299, h: 42, at: 7.46 }]} inset source="FTC + UTAH + NEVADA v. LENS.COM · COMPLAINT · OCT 2, 2026" />
</>) },
  { from: 431.92, to: 441.62, tag: [4, "They Knew"], back: null, el: (<>
<AdVsTruth at={0.1} left={{ label: "FIG. 9 · THE BUTTON · FEB 24, 2026", img: "evidence/t04/fig9.png", fit: "contain" }} right={{ label: "FIG. 11 · THE LINE UNDER IT", img: "evidence/t04/crop-fig11-summary.png", at: 7.72 }} source="Screenshots · FTC v. Lens.com complaint" />
</>) },
  { from: 441.62, to: 449.52, tag: [4, "They Knew"], back: (<><Stock6 n={32} dur={7.9} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={330}><Plate6 at={0.3}><Label6 at={0.3} size={50} color={C6.accent}>FTC ALLEGES: “HUNDREDS OF MILLIONS”</Label6></Plate6></Center>
<Source6 at={5.18}>FTC complaint, ¶6 · allegation, not a ruling</Source6>
</>) },
  { from: 449.52, to: 457.94, tag: [4, "They Knew"], back: null, el: (<>
<Evidence src="evidence/t04/fig15.png" size={[1265, 152]} dur={8.42} frame="shot" marks={[{ x: 777, y: 37, w: 127, h: 36, at: 5.94 }]} zoom={0.01} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 15 · FEB 24, 2026" />
</>) },
  { from: 457.94, to: 464.38, tag: [4, "They Knew"], back: null, el: (<>
<Evidence src="evidence/t04/fig19.png" size={[999, 286]} dur={6.44} frame="shot" marks={[{ x: 245, y: 182, w: 183, h: 31, at: 4.82 }]} zoom={0.01} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 19 · FEB 24, 2026" />
</>) },
  { from: 464.38, to: 470.96, tag: [4, "They Knew"], back: null, el: (<>
<Drift><Center y={520}><PctVs at={0.1} bAt={1.2} /></Center></Drift>
</>) },
  { from: 470.96, to: 481.98, tag: [4, "They Knew"], back: (<><Stock6 n={34} dur={11.02} dim={0} graphics={true} />
<Stock6 n={45} from={6.78} dur={11.02} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.4} out={6.78 - 0.2} from="fade"><Plate6 at={5.4}><Label6 at={5.4} size={40} color={C6.ink}>CANCEL? A SEPARATE PAGE UNDER “HELP”</Label6></Plate6></In></Center><Source6 at={5.4}>FTC complaint, ¶67–75</Source6><Center x={960} y={880}><In at={6.78} from="fade"><Plate6 at={6.78}><Label6 at={6.78} size={40} color={C6.ink}>CANCEL BY CHAT? SOME WERE TOLD TO CALL</Label6></Plate6></In></Center>
</>) },
  { from: 481.98, to: 491.08, tag: [5, "Don't Get Caught"], hard: true, back: null, el: (<>
<Evidence src="evidence/t04/ftc-caption2.png" size={[1700, 2200]} dur={9.1} frame="paper" marks={[{ x: 564, y: 1505, w: 571, h: 36, at: 2.34 }]} inset source="FTC v. LENS.COM · ALLEGATIONS · NO RULING YET" /><Center x={960} y={880}><In at={3.46} from="fade"><Plate6 at={3.46}><Label6 at={3.46} size={40} color={C6.ink}>A LAWSUIT, NOT A VERDICT · NO RULING YET</Label6></Plate6></In></Center>
</>) },
  { from: 491.08, to: 494.84, tag: [5, "Don't Get Caught"], back: null, el: (<>
<Drift><UnderTheButton at={0.1} /></Drift>
</>) },
  { from: 494.84, to: 503.38, tag: [5, "Don't Get Caught"], back: (<><Stock6 n={35} dur={8.54} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.ink}>1 · SCROLL ALL THE WAY DOWN BEFORE “CONTINUE”</Label6></Plate6></In></Center>
</>) },
  { from: 503.38, to: 512.06, tag: [5, "Don't Get Caught"], back: (<><Stock6 n={36} dur={8.68} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.ink}>2 · COMPARE FINAL TOTALS, NOT BOX PRICES</Label6></Plate6></In></Center>
</>) },
  { from: 512.06, to: 519.46, tag: [5, "Don't Get Caught"], back: (<><Stock6 n={46} dur={7.4} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.ink}>3 · “AFTER REBATE” = FULL PRICE TODAY</Label6></Plate6></In></Center>
</>) },
  { from: 519.46, to: 529.1, tag: [5, "Don't Get Caught"], back: (<><Stock6 n={9} dur={9.64} dim={0} graphics={true} />
<Stock6 n={37} from={8.1} dur={9.64} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.88} from="fade"><Plate6 at={0.88}><Label6 at={0.88} size={40} color={C6.ink}>4 · YOUR EYE DOCTOR MUST GIVE YOU A COPY</Label6></Plate6></In></Center><Source6 at={2.22}>FTC Contact Lens Rule</Source6>
</>) },
  { from: 529.1, to: 536.66, tag: [5, "Don't Get Caught"], back: null, el: (<>
<Drift><Center y={430}><Plate6 at={0.1}><Label6 at={0.1} size={44} color={C6.ink}>CALL YOUR CARD ISSUER</Label6></Plate6></Center>
<Center y={620}><Words text="ReportFraud.ftc.gov" at={4.6} size={110} hl={["ReportFraud.ftc.gov"]} serif={false} /></Center></Drift>
</>) },
  { from: 536.66, to: 540.8, back: null, el: (<>
<Evidence src="evidence/t04/fig3.png" size={[1920, 648]} dur={4.14} frame="shot" marks={[{ x: 1153, y: 423, w: 276, h: 94, at: 2.68 }]} zoom={0.01} source="SCREENSHOT · FTC v. LENS.COM COMPLAINT · FIG. 3 · FEB 24, 2026" />
</>) },
  { from: 540.8, to: 547.14, back: null, el: (<>
<Drift><UnderTheButton at={0.05} badgeAt={0.1} slideAt={2.8} caption="Right under the button they told you to click." capAt={0.24} /></Drift>
</>) },
  { from: 547.14, to: 560.18, back: (<><Stock6 n={1} dur={13.04} dim={0.45} graphics={true} /></>), el: (<>
<Center y={260}><Words text="Ever watched a total jump on the last screen?" at={0.05} size={74} hl={["jump"]} maxW={1600} /></Center>
<Center y={400}><Label6 at={2.98} size={38} color={C6.accent}>TELL US WHAT YOU WERE BUYING · COMMENTS</Label6></Center>
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string, number][] = [[0.05, "ep06-whoosh", 0.2], [5.9, "ep06-pop", 0.25], [8.22, "t02-declined", 0.35], [12.03, "ep06-scratch", 0.25], [16.44, "t02-paper", 0.3], [17.88, "t02-paper", 0.3], [18.84, "ep06-stamp", 0.3], [24.42, "ep06-counter", 0.3], [27.92, "tick", 0.3], [34.16, "ep06-pop", 0.25], [38.26, "tick", 0.3], [40.98, "click", 0.35], [46.22, "click", 0.3], [49.96, "ep06-pop", 0.25], [55.67, "click", 0.35], [59.7, "ep06-pop", 0.2], [71.54, "ep09-bell", 0.22], [75.18, "ep06-whoosh", 0.25], [79.58, "ep06-pop", 0.2], [80.94, "click", 0.3], [82.24, "click", 0.3], [84.7, "ep06-pop", 0.25], [86.7, "ep06-kaching", 0.25], [91.28, "ep06-pop", 0.25], [94.3, "ding", 0.25], [95.44, "click", 0.4], [98.22, "ep06-pop", 0.2], [105.7, "tick", 0.35], [106.5, "tick", 0.35], [110.4, "click", 0.45], [113.46, "buzz", 0.3], [117.88, "ep06-pop", 0.2], [125.64, "ep06-stamp", 0.3], [130.54, "click", 0.4], [132.81, "t04-rewind", 0.4], [137.68, "ep06-whoosh", 0.2], [140.16, "ep06-pop", 0.2], [147.8, "ep06-pop", 0.2], [149.44, "impact", 0.4], [154.84, "ep06-whoosh", 0.25], [157.16, "t02-paper", 0.3], [162.5, "ep06-pop", 0.2], [164.02, "ep06-pop", 0.2], [165.14, "ep06-pop", 0.2], [167.74, "ding", 0.35], [171.52, "buzz", 0.25], [176.96, "ep06-coin", 0.25], [180.36, "t02-paper", 0.25], [184.98, "click", 0.3], [187.84, "ep06-pop", 0.25], [192.14, "ep06-counter", 0.3], [194.26, "impact", 0.35], [201.46, "ep06-counter", 0.3], [203.96, "impact", 0.35], [209.86, "ep06-pop", 0.2], [218.48, "ep09-bell", 0.2], [225.44, "ep06-pop", 0.2], [232.96, "ep06-stamp", 0.3], [238.12, "click", 0.35], [241.26, "ep06-pop", 0.25], [247.84, "ep06-pop", 0.2], [250.05, "ep06-pop", 0.2], [258.06, "ep06-pop", 0.2], [265.24, "ep06-stamp", 0.4], [266.3, "t02-paper", 0.3], [273.16, "t02-paper", 0.3], [275.04, "buzz", 0.3], [286.0, "ep06-scratch", 0.3], [290.78, "t02-paper", 0.3], [294.56, "ep06-stamp", 0.3], [301.34, "ep06-pop", 0.25], [306.1, "t02-paper", 0.25], [307.52, "t02-paper", 0.3], [309.46, "ep06-pop", 0.25], [315.94, "ep06-counter", 0.3], [318.12, "ep06-counter", 0.3], [324.32, "t02-paper", 0.3], [332.44, "ep06-stamp", 0.3], [338.48, "ep09-bell", 0.2], [345.18, "rise", 0.3], [349.26, "ep06-pop", 0.25], [356.24, "t02-paper", 0.3], [358.38, "t02-paper", 0.3], [370.26, "ep06-pop", 0.25], [375.8, "ep06-pop", 0.2], [378.4, "t02-paper", 0.3], [386.8, "tick", 0.3], [389.78, "ep06-boom", 0.35], [398.54, "ep06-stamp", 0.3], [406.0, "ep06-pop", 0.25], [409.8, "ep09-bell", 0.2], [415.06, "ep06-pop", 0.25], [421.68, "ep06-stamp", 0.35], [423.18, "t02-paper", 0.3], [430.54, "ep06-stamp", 0.3], [435.76, "ep06-pop", 0.25], [439.64, "ep06-pop", 0.25], [446.8, "ep06-kaching", 0.3], [455.46, "ep06-pop", 0.25], [462.76, "click", 0.35], [464.48, "ep06-pop", 0.25], [468.82, "impact", 0.35], [476.36, "ep06-pop", 0.25], [479.96, "ep06-scratch", 0.25], [482.08, "t02-paper", 0.3], [485.44, "ep06-pop", 0.25], [491.18, "ep06-whoosh", 0.2], [495.04, "ep06-pop", 0.3], [503.58, "ep06-pop", 0.3], [512.26, "ep06-pop", 0.3], [520.34, "ep06-pop", 0.3], [533.7, "ep06-pop", 0.3], [539.34, "ep09-bell", 0.25], [543.6, "ep06-whoosh", 0.25], [544.78, "ep06-stamp", 0.35]];

export const T04Lens: React.FC = () => {
  const { fps } = useVideoConfig();
  setClips(CLIP_FN); // свой набор стоков при каждом рендере: в общем Root последним грузится чужой ролик
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/t04-voiceover.mp3")} volume={0.9} />
      <Sequence from={0} durationInFrames={1298}><Audio src={staticFile("audio/t04/music-c0-open.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 1268, 1298], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={1262} durationInFrames={2739}><Audio src={staticFile("audio/t04/music-c1-walk.mp3")} volume={(f) => 0.07 * interpolate(f, [0, 30, 2709, 2739], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={3965} durationInFrames={3104}><Audio src={staticFile("audio/t04/music-c2-scroll.mp3")} volume={(f) => 0.07 * interpolate(f, [0, 30, 3074, 3104], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={7033} durationInFrames={3457}><Audio src={staticFile("audio/t04/music-c3-taxes.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 3427, 3457], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={10454} durationInFrames={4024}><Audio src={staticFile("audio/t04/music-c4-knew.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 3994, 4024], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={14441} durationInFrames={2364}><Audio src={staticFile("audio/t04/music-c5-how.mp3")} volume={(f) => 0.11 * interpolate(f, [0, 30, 2334, 2364], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
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
