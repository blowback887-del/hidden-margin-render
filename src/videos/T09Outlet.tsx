import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Bg6, Bug6, C6, Center, ChapterTag, EndCard6, In, Label6, Meme, Num6, Scene6, setClips, Source6, Stock6, Subscribe6, Plate6, TwoBars, Words } from "../brand/hm6";
import { HangTag, PriceCeiling, TagTrio, NeverEndingSale, Anchor, Envelopes, FabricLabels } from "../brand/t09";
import { PriceDuel } from "../brand/t08";
import { Checklist } from "../brand/t07";
import { Drift } from "../brand/t03";
import { Evidence } from "../brand/evidence";

// ===================================================================
// T09Outlet — сгенерировано cloud/gen/build.py из плана cloud/gen/t09.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const T09OUTLET_DURATION_SEC = 751.2;
const CLIPS: Record<number, string> = {"1": "01-mall-skylight", "2": "02-parking-center", "3": "03-mall-escalators", "4": "04-mall-walk", "5": "05-parking-aerial", "6": "06-parking-aerial2", "7": "07-mannequins", "8": "08-discount-windows", "9": "09-family-clothes-shop", "10": "10-mall-crowd-high", "11": "11-mall-empty-drone", "12": "12-friends-bags", "13": "13-women-bags", "14": "14-woman-many-bags", "15": "15-shopping-spree", "16": "16-bags-sale-tag", "17": "17-red-sale-tags", "18": "18-sale-tags-marble", "19": "19-half-price", "20": "20-big-discount", "21": "21-printed-sale-tag", "22": "22-chalk-price-erase", "23": "23-closing-sale-poster", "24": "24-closed-sign", "25": "25-warehouse-racks", "26": "26-warehouse-inside", "27": "27-warehouse-boxes", "28": "28-box-shelf", "29": "29-textile-above", "30": "30-textile-weaving", "31": "31-textile-worker", "32": "32-textile-folding", "33": "33-seamstress", "34": "34-sewing-close", "35": "35-leather-artisan", "36": "36-leather-sewing", "37": "37-polo-man", "38": "38-buttoning-shirt", "39": "39-suit-buttoning", "40": "40-coat-mannequins", "41": "41-blazer-lowlight", "42": "42-tailor-measure", "43": "43-shoes-shelf", "44": "44-shoe-bend", "45": "45-sole-hammer", "46": "46-fabric-cut", "47": "47-fabric-suede", "48": "48-cotton-field", "49": "49-magnify-dollar", "50": "50-woman-rack", "51": "51-elderly-rack", "52": "52-seniors-boutique", "53": "53-fitting-room-man", "54": "54-folding-sweater", "55": "55-gavel", "56": "56-suitcase-carousel", "57": "57-washer-spin", "58": "58-laundromat", "59": "59-cross-necklace", "60": "60-silver-necklace", "61": "61-grocery-woman", "62": "62-grocery-veg", "63": "63-card-pay", "64": "64-cashier", "65": "65-phone-shop", "66": "66-online-store", "67": "67-email-typing", "68": "68-envelope", "69": "69-pen-paper", "70": "70-signing-docs", "71": "71-planner-pages", "72": "72-boardroom", "73": "73-docs-table", "74": "74-suit-walking", "75": "75-exit-door", "76": "76-door-close", "77": "77-graph-falling", "78": "78-shocked-woman", "79": "79-woman-mouth", "80": "80-wow-woman", "81": "81-disappointed-man", "82": "82-hands-face", "83": "83-frustrated-man", "84": "84-newspaper-man", "85": "85-newsagent", "86": "86-highway-aerial", "87": "87-highway-coastal", "88": "88-counting-money", "89": "89-clapping", "90": "90-woman-bag-walk", "91": "91-live-jcp-comeback", "92": "92-live-johnson-apple", "93": "93-live-jcrew-diamonds", "94": "94-live-fair-square", "95": "95-live-talbots"};
const LENS: Record<number, number> = {"1": 10.4, "2": 8.23, "3": 10.9, "4": 10.0, "5": 14.0, "6": 14.0, "7": 5.83, "8": 14.0, "9": 14.0, "10": 14.0, "11": 14.0, "12": 10.0, "13": 14.0, "14": 14.0, "15": 10.63, "16": 10.33, "17": 8.57, "18": 10.37, "19": 11.27, "20": 11.13, "21": 13.6, "22": 14.0, "23": 14.0, "24": 5.8, "25": 9.13, "26": 14.0, "27": 8.63, "28": 14.0, "29": 14.0, "30": 8.37, "31": 14.0, "32": 14.0, "33": 14.0, "34": 8.0, "35": 14.0, "36": 14.0, "37": 7.53, "38": 7.77, "39": 8.17, "40": 14.0, "41": 10.37, "42": 14.0, "43": 14.0, "44": 7.9, "45": 11.37, "46": 4.63, "47": 5.77, "48": 14.0, "49": 14.0, "50": 13.53, "51": 10.73, "52": 8.57, "53": 12.77, "54": 12.53, "55": 12.13, "56": 14.0, "57": 14.0, "58": 14.0, "59": 5.27, "60": 8.8, "61": 7.67, "62": 14.0, "63": 11.63, "64": 11.6, "65": 13.13, "66": 13.6, "67": 8.0, "68": 10.83, "69": 4.27, "70": 14.0, "71": 14.0, "72": 13.53, "73": 14.0, "74": 9.13, "75": 14.0, "76": 5.8, "77": 14.0, "78": 9.73, "79": 5.53, "80": 14.0, "81": 14.0, "82": 12.53, "83": 10.07, "84": 14.0, "85": 6.33, "86": 13.1, "87": 14.0, "88": 13.63, "89": 8.77, "90": 10.0, "91": 2.7, "92": 7.3, "93": 7.5, "94": 3.8, "95": 4.9};
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/t09/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 });
setClips(CLIP_FN);

type Beat = { from: number; to: number; tag?: [number, string, boolean]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 11.58, back: null, el: (<>
<Drift><Center x={960} y={590}><HangTag at={0.05} brand="KATE SPADE OUTLET" top={{ label: "COMPARABLE VALUE", value: "$499" }} price={{ value: "$169" }} scale={0.95} hlTopAt={6.14} /></Center><Center x={1560} y={960}><Label6 at={0.3} size={24} color={C6.mint}>RECONSTRUCTION · AS DESCRIBED IN THE LAWSUIT</Label6></Center></Drift>
</>) },
  { from: 11.58, to: 14.84, back: (<><Stock6 n={90} dur={3.26} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.76} from="fade"><Plate6 at={0.76}><Label6 at={0.76} size={50} color={C6.money}>YOU SAVED $330!</Label6></Plate6></In></Center>
</>) },
  { from: 14.84, to: 22.68, back: null, el: (<>
<Evidence src="evidence/t09/curry-tina-p1.png" size={[1700, 2200]} dur={7.84} frame="paper" marks={[{ x: 854, y: 1014, w: 476, h: 22, at: 1.32 }]} source="CURRY v. TAPESTRY · D. OR. · 2026 · CLASS ACTION COMPLAINT" /><Center x={960} y={960}><In at={4.26} from="fade"><Plate6 at={4.26}><Label6 at={4.26} size={34} color={C6.accent}>“RARELY, IF EVER” A REAL PRICE · PER THE LAWSUIT</Label6></Plate6></In></Center>
</>) },
  { from: 22.68, to: 28.18, back: null, el: (<>
<Drift><Center y={500}><PriceCeiling at={0.05} ceil="$499" ceilLabel="COMPARABLE VALUE" low="never reached it" lowLabel="PRICES LISTED IN THE LAWSUIT" drawAt={0.4} note="ILLUSTRATION OF THE LAWSUIT'S CLAIM · ¶56" noteAt={2.1} /></Center></Drift>
</>) },
  { from: 28.18, to: 38.04, back: (<><Stock6 n={2} dur={9.86} dim={0} graphics={true} />
<Stock6 n={4} from={4.56} dur={9.86} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.3} out={4.56} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={36} color={C6.ink}>SAME DAY · SAME OUTLET CENTER · OREGON</Label6></Plate6></In></Center><Center x={960} y={880}><In at={7.54} from="fade"><Plate6 at={7.54}><Label6 at={7.54} size={36} color={C6.accent}>SIMILAR LEATHER TOTE NEXT DOOR: $95.20 · PER THE LAWSUIT</Label6></Plate6></In></Center><Source6 at={0.4}>ILLUSTRATIVE FOOTAGE</Source6>
</>) },
  { from: 38.04, to: 44.22, back: null, el: (<>
<Drift><Center x={960} y={560}><HangTag at={0.05} brand="KATE SPADE OUTLET" top={{ label: "COMPARABLE VALUE", value: "$499" }} price={{ value: "$169" }} scale={0.9} tilt={3} hlTopAt={1.08} /></Center><Center x={1540} y={540}><In at={4.66} from="fade"><Num6 size={200}>?</Num6></In></Center></Drift>
</>) },
  { from: 44.22, to: 53.24, back: (<><Stock6 n={12} dur={9.02} dim={0} graphics={true} />
<Stock6 n={13} from={7.06} dur={9.02} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={7.06} from="fade"><Plate6 at={7.06}><Label6 at={7.06} size={50} color={C6.accent}>THAT FEELING IS THE PRODUCT</Label6></Plate6></In></Center>
</>) },
  { from: 53.24, to: 60.48, back: null, el: (<>
<Drift><Center x={960} y={560}><HangTag at={0.05} brand="KATE SPADE OUTLET" top={{ label: "COMPARABLE VALUE", value: "$499" }} price={{ value: "$169" }} scale={0.9} coverAt={3.1} hlPriceAt={5.24} /></Center><Center x={960} y={980}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={34} color={C6.accent}>TRICK #1 · COVER THE BIG NUMBER</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 60.48, to: 69.2, back: (<><Stock6 n={16} dur={8.72} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.54} out={6.36} from="fade"><Plate6 at={4.54}><Label6 at={4.54} size={50} color={C6.money}>$169 · THAT'S THE REAL PRICE</Label6></Plate6></In></Center><Center x={960} y={880}><In at={6.36} from="fade"><Plate6 at={6.36}><Label6 at={6.36} size={38} color={C6.accent}>THE OTHER NUMBER IS THERE TO WORK ON YOU</Label6></Plate6></In></Center>
</>) },
  { from: 69.2, to: 78.8, back: (<><Stock6 n={74} dur={9.6} dim={0.35} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.0} out={5.04} from="fade"><Plate6 at={2.0}><Label6 at={2.0} size={36} color={C6.ink}>A CEO WHO TRIED TO GET RID OF NUMBERS LIKE THAT</Label6></Plate6></In></Center><Center x={960} y={880}><In at={5.04} from="fade"><Plate6 at={5.04}><Label6 at={5.04} size={60} color={C6.accent}>2012</Label6></Plate6></In></Center>
</>) },
  { from: 78.8, to: 88.92, tag: [2, "Made For The Outlet", true], hard: true, back: (<><Stock6 n={25} dur={10.12} dim={0} graphics={true} />
<Stock6 n={28} from={7.14} dur={10.12} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.4} out={7.14} from="fade"><Plate6 at={0.4}><Label6 at={0.4} size={34} color={C6.ink}>THE STORY WE TELL OURSELVES: LAST SEASON'S LEFTOVERS</Label6></Plate6></In></Center><Center x={960} y={880}><In at={7.14} from="fade"><Plate6 at={7.14}><Label6 at={7.14} size={38} color={C6.ink}>LEFTOVERS · THE COLOR NOBODY BOUGHT</Label6></Plate6></In></Center>
</>) },
  { from: 88.92, to: 96.36, tag: [2, "Made For The Outlet", false], back: null, el: (<>
<Evidence src="evidence/t09/wh-letter-top.png" size={[2880, 1800]} dur={7.44} frame="screen" zoom={0.9} source="4 MEMBERS OF CONGRESS → FTC · LETTER, 2014" url="whitehouse.senate.gov" />
</>) },
  { from: 96.36, to: 102.02, tag: [2, "Made For The Outlet", false], back: null, el: (<>
<Evidence src="evidence/t09/wh-letter.png" size={[2880, 1800]} dur={5.66} frame="screen" marks={[{ x: 905, y: 601, w: 342, h: 48, at: 2.32 }]} zoom={0.9} inset={{ src: "evidence/t09/wh-letter-top.png", size: [2880, 1800] }} source="4 MEMBERS OF CONGRESS → FTC · LETTER, 2014" url="whitehouse.senate.gov" />
</>) },
  { from: 102.02, to: 109.72, tag: [2, "Made For The Outlet", false], back: null, el: (<>
<Drift><Center y={480}><TwoBars at={0.1} a={{ label: "J.CREW STORES", value: "~100", v: 100 }} b={{ label: "J.CREW FACTORY STORES", value: "330", v: 330, color: C6.accent, at: 5.18 }} h={480} /></Center><Source6 at={0.4}>Consumers' Checkbook · 2026</Source6></Drift>
</>) },
  { from: 109.72, to: 117.56, tag: [2, "Made For The Outlet", false], back: null, el: (<>
<Drift><Center y={440}><Words text="3 outlets ← leftovers of 1 store?" at={0.2} size={92} maxW={1500} hl={["3", "1"]} /></Center><Center x={960} y={880}><In at={4.3} from="fade"><Plate6 at={4.3}><Label6 at={4.3} size={44} color={C6.accent}>THE MATH DOESN'T WORK</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 117.56, to: 127.26, tag: [2, "Made For The Outlet", false], back: null, el: (<>
<Evidence src="evidence/t09/wh-letter.png" size={[2880, 1800]} dur={9.7} frame="screen" marks={[{ x: 2459, y: 661, w: 83, h: 48, at: 5.36 }]} zoom={0.9} inset={{ src: "evidence/t09/wh-letter-top.png", size: [2880, 1800] }} source="LETTER TO THE FTC · 2014 · ANALYSTS' ESTIMATE" url="whitehouse.senate.gov" /><Center x={960} y={960}><In at={7.76} from="fade"><Plate6 at={7.76}><Label6 at={7.76} size={32} color={C6.accent}>UPWARDS OF 85% MADE FOR OUTLETS · ANALYSTS' ESTIMATE, 2014</Label6></Plate6></In></Center>
</>) },
  { from: 127.26, to: 137.72, tag: [2, "Made For The Outlet", false], back: (<><Stock6 n={71} dur={10.46} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={200}><In at={4.34} from="fade"><Plate6 at={4.34}><Label6 at={4.34} size={36} color={C6.accent}>CONSUMERS' CHECKBOOK · NONPROFIT · JUNE 2026</Label6></Plate6></In></Center><Center x={560} y={960}><In at={7.24} from="fade"><Plate6 at={7.24}><Label6 at={7.24} size={36} color={C6.accent}>4 RESEARCHERS</Label6></Plate6></In></Center><Center x={960} y={960}><In at={8.62} from="fade"><Plate6 at={8.62}><Label6 at={8.62} size={36} color={C6.accent}>3 MONTHS</Label6></Plate6></In></Center><Center x={1360} y={960}><In at={9.66} from="fade"><Plate6 at={9.66}><Label6 at={9.66} size={36} color={C6.accent}>40 BRANDS</Label6></Plate6></In></Center>
</>) },
  { from: 137.72, to: 151.3, tag: [2, "Made For The Outlet", false], back: (<><Stock6 n={3} dur={13.58} dim={0} graphics={true} />
<Stock6 n={8} from={6.26} dur={13.58} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={200}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={40} color={C6.accent}>MORE THAN HALF · MADE FOR THE OUTLET</Label6></Plate6></In></Center><Center x={960} y={880}><In at={6.26} out={7.46} from="fade"><Plate6 at={6.26}><Label6 at={6.26} size={40} color={C6.ink}>J.CREW FACTORY</Label6></Plate6></In></Center><Center x={960} y={880}><In at={7.46} out={9.16} from="fade"><Plate6 at={7.46}><Label6 at={7.46} size={40} color={C6.ink}>BANANA REPUBLIC FACTORY</Label6></Plate6></In></Center><Center x={960} y={880}><In at={9.16} out={10.3} from="fade"><Plate6 at={9.16}><Label6 at={9.16} size={40} color={C6.ink}>GAP FACTORY</Label6></Plate6></In></Center><Center x={960} y={880}><In at={10.3} out={11.76} from="fade"><Plate6 at={10.3}><Label6 at={10.3} size={40} color={C6.ink}>ANN TAYLOR FACTORY</Label6></Plate6></In></Center><Center x={960} y={880}><In at={11.76} from="fade"><Plate6 at={11.76}><Label6 at={11.76} size={40} color={C6.accent}>KATE SPADE OUTLET · A MIX</Label6></Plate6></In></Center><Source6 at={0.4}>Consumers' Checkbook · 2026</Source6>
</>) },
  { from: 151.3, to: 156.48, tag: [2, "Made For The Outlet", false], back: null, el: (<>
<Drift><Center y={470}><Envelopes at={0.1} oneAt={3.56} /></Center><Center x={960} y={900}><In at={3.56} from="fade"><Plate6 at={3.56}><Label6 at={3.56} size={44} color={C6.accent}>40 ASKED · 1 REPLIED</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 156.48, to: 171.0, tag: [2, "Made For The Outlet", false], back: (<><Stock6 n={66} dur={14.52} dim={0} graphics={true} />
<Stock6 n={65} from={7.04} dur={14.52} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.1} out={7.04} from="fade"><Plate6 at={4.1}><Label6 at={4.1} size={34} color={C6.ink}>GAP'S OWN SITE: FACTORY STORES DON'T SELL OVERSTOCK</Label6></Plate6></In></Center><Center x={960} y={880}><In at={7.04} out={12.5} from="fade"><Plate6 at={7.04}><Label6 at={7.04} size={34} color={C6.ink}>ANN TAYLOR'S SITE: LOFT OUTLET · CREATED FOR OUTLETS</Label6></Plate6></In></Center><Center x={960} y={880}><In at={12.5} from="fade"><Plate6 at={12.5}><Label6 at={12.5} size={50} color={C6.accent}>…NOT ON THE TAG</Label6></Plate6></In></Center>
</>) },
  { from: 171.0, to: 176.96, tag: [2, "Made For The Outlet", false], back: (<><Stock6 n={49} dur={5.96} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.18} from="fade"><Plate6 at={4.18}><Label6 at={4.18} size={60} color={C6.accent}>MADE HOW?</Label6></Plate6></In></Center>
</>) },
  { from: 176.96, to: 182.24, tag: [3, "Made How?", true], hard: true, back: null, el: (<>
<Evidence src="evidence/t09/aal-tommy-top.png" size={[2880, 1800]} dur={5.28} frame="screen" zoom={0.9} source="HASHIMI v. PVH · S.D. CAL. · 2026 (VIA ALL ABOUT LAWYER)" url="allaboutlawyer.com" />
</>) },
  { from: 182.24, to: 188.58, tag: [3, "Made How?", false], back: (<><Stock6 n={29} dur={6.34} dim={0} graphics={true} />
<Stock6 n={34} from={3.86} dur={6.34} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={36} color={C6.ink}>A TEXTILE EXPERT · MACY'S vs. TOMMY HILFIGER OUTLET</Label6></Plate6></In></Center>
</>) },
  { from: 188.58, to: 192.06, tag: [3, "Made How?", false], back: (<><Stock6 n={37} dur={3.48} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={36} color={C6.ink}>THE POLO SHIRTS · AS THE LAWSUIT DESCRIBES THEM</Label6></Plate6></In></Center>
</>) },
  { from: 192.06, to: 204.2, tag: [3, "Made How?", false], back: null, el: (<>
<Drift><Center y={470}><FabricLabels at={0.1} a={{ title: "MACY'S POLO", lines: ["96% COTTON · 4% ELASTANE", "3 BUTTONS"] }} b={{ title: "OUTLET POLO", lines: ["60% COTTON · 40% POLYESTER", "2 BUTTONS", "DIFFERENT COUNTRY"], at: 4.7 }} hlAt={7.3} /></Center><Source6 at={0.4}>Hashimi v. PVH · complaint, 2026</Source6></Drift>
</>) },
  { from: 204.2, to: 208.8, tag: [3, "Made How?", false], back: null, el: (<>
<Evidence src="evidence/t09/aal-tommy.png" size={[2880, 1800]} dur={4.6} frame="screen" marks={[{ x: 1324, y: 760, w: 160, h: 48, at: 2.92 }]} zoom={0.9} inset={{ src: "evidence/t09/aal-tommy-top.png", size: [2880, 1800] }} source="HASHIMI v. PVH · VIA ALL ABOUT LAWYER" url="allaboutlawyer.com" />
</>) },
  { from: 208.8, to: 221.02, tag: [3, "Made How?", false], back: (<><Stock6 n={39} dur={12.22} dim={0} graphics={true} />
<Stock6 n={41} from={8.78} dur={12.22} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.88} out={8.78} from="fade"><Plate6 at={5.88}><Label6 at={5.88} size={40} color={C6.ink}>FACTORY JACKET · $140 · NO LINING</Label6></Plate6></In></Center><Center x={960} y={880}><In at={11.6} from="fade"><Plate6 at={11.6}><Label6 at={11.6} size={40} color={C6.accent}>REGULAR STORE · $350 · PARTLY LINED</Label6></Plate6></In></Center><Source6 at={0.4}>Consumers' Checkbook · 2026</Source6>
</>) },
  { from: 221.02, to: 235.18, tag: [3, "Made How?", false], back: (<><Stock6 n={45} dur={14.16} dim={0} graphics={true} />
<Stock6 n={40} from={5.92} dur={14.16} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.52} out={5.92} from="fade"><Plate6 at={2.52}><Label6 at={2.52} size={38} color={C6.ink}>OUTLET: RUBBER SOLES · STORE: LEATHER</Label6></Plate6></In></Center><Center x={960} y={880}><In at={7.82} out={10.32} from="fade"><Plate6 at={7.82}><Label6 at={7.82} size={40} color={C6.ink}>BARN JACKET · FACTORY $50</Label6></Plate6></In></Center><Center x={960} y={880}><In at={10.32} from="fade"><Plate6 at={10.32}><Label6 at={10.32} size={36} color={C6.accent}>REGULAR GAP · $148 · MORE BUTTONS, MORE TAILORING</Label6></Plate6></In></Center>
</>) },
  { from: 235.18, to: 246.2, tag: [3, "Made How?", false], back: (<><Stock6 n={35} dur={11.02} dim={0} graphics={true} />
<Stock6 n={36} from={7.46} dur={11.02} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.44} out={7.46} from="fade"><Plate6 at={5.44}><Label6 at={5.44} size={36} color={C6.accent}>A CHEAPER THING · WITH THE EXPENSIVE THING'S NAME</Label6></Plate6></In></Center><Center x={960} y={880}><In at={7.46} from="fade"><Plate6 at={7.46}><Label6 at={7.46} size={36} color={C6.ink}>…AND THE TAG POINTS AT THE EXPENSIVE ONE</Label6></Plate6></In></Center>
</>) },
  { from: 246.2, to: 254.34, tag: [3, "Made How?", false], back: (<><Stock6 n={93} dur={8.14} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={120}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={34} color={C6.accent}>TRICK #2 · READ THE LABEL INSIDE</Label6></Plate6></In></Center><Source6 at={0.3}>Footage: CBC Marketplace</Source6>
</>) },
  { from: 254.34, to: 260.16, tag: [3, "Made How?", false], back: (<><Stock6 n={95} dur={5.82} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={120}><In at={0.05} out={2.5} from="fade"><Plate6 at={0.05}><Label6 at={0.05} size={34} color={C6.accent}>BANANA REPUBLIC FACTORY · 3 DIAMONDS</Label6></Plate6></In></Center><Center x={960} y={120}><In at={2.5} from="fade"><Plate6 at={2.5}><Label6 at={2.5} size={34} color={C6.accent}>TALBOTS OUTLET · WHITE LABEL, 3 DOTS</Label6></Plate6></In></Center><Source6 at={0.3}>Footage: 9NEWS Denver · 2026</Source6>
</>) },
  { from: 260.16, to: 267.62, tag: [3, "Made How?", false], back: null, el: (<>
<Drift><Center y={470}><TagTrio tags={[{ label: "OUTLET LABEL", value: "1818", at: 1.62, color: C6.loss }, { label: "REGULAR STORE", value: "EST. 1818", at: 4.3 }]} /></Center><Source6 at={0.4}>Consumers' Checkbook · 2026</Source6></Drift>
</>) },
  { from: 267.62, to: 275.64, tag: [3, "Made How?", false], back: (<><Stock6 n={46} dur={8.02} dim={0} graphics={true} />
<Stock6 n={54} from={5.92} dur={8.02} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.92} from="fade"><Plate6 at={5.92}><Label6 at={5.92} size={32} color={C6.accent}>MOSTLY POLYESTER AT THE OUTLET? THAT'S WHAT THE DISCOUNT WAS FOR</Label6></Plate6></In></Center>
</>) },
  { from: 275.64, to: 288.26, tag: [3, "Made How?", false], back: (<><Stock6 n={43} dur={12.62} dim={0} graphics={true} />
<Stock6 n={7} from={7.16} dur={12.62} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={7.16} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.ink}>REAL LEFTOVERS EXIST</Label6></Plate6></In></Center><Center x={960} y={880}><In at={8.7} from="fade"><Plate6 at={8.7}><Label6 at={8.7} size={40} color={C6.money}>BURBERRY OUTLET SHIRT · $700 → $250</Label6></Plate6></In></Center><Source6 at={0.4}>Consumers' Checkbook · 2026</Source6>
</>) },
  { from: 288.26, to: 292.06, tag: [3, "Made How?", false], back: (<><Stock6 n={26} dur={3.8} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={40} color={C6.money}>SCRATCHED DRESSERS · RH OUTLET · −80%</Label6></Plate6></In></Center><Source6 at={0.4}>ILLUSTRATIVE FOOTAGE</Source6>
</>) },
  { from: 292.06, to: 296.46, tag: [3, "Made How?", false], back: (<><Stock6 n={24} dur={4.4} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={44} color={C6.ink}>THE REAL THING · JUST LATE</Label6></Plate6></In></Center>
</>) },
  { from: 296.46, to: 309.8, tag: [3, "Made How?", false], back: (<><Stock6 n={21} dur={13.34} dim={0} graphics={true} />
<Stock6 n={22} from={6.62} dur={13.34} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.18} out={6.62} from="fade"><Plate6 at={2.18}><Label6 at={2.18} size={36} color={C6.ink}>NIKE CLEARANCE · HAND STICKERS WITH A DATE</Label6></Plate6></In></Center><Center x={960} y={880}><In at={6.62} from="fade"><Plate6 at={6.62}><Label6 at={6.62} size={38} color={C6.accent}>REAL MARKDOWN = A STICKER ON AN OLD PRICE</Label6></Plate6></In></Center>
</>) },
  { from: 309.8, to: 319.22, tag: [3, "Made How?", false], back: null, el: (<>
<Drift><Subscribe6 at={4.42} /><Center x={960} y={560}><HangTag at={0.1} brand="THIS CHANNEL" top={{ label: "COMPARABLE VALUE", value: "$0" }} price={{ value: "FREE" }} scale={0.8} hlTopAt={6.86} /></Center></Drift>
</>) },
  { from: 319.22, to: 322.62, tag: [4, "The Big Number", true], hard: true, back: (<><Stock6 n={69} dur={3.4} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.76} from="fade"><Plate6 at={1.76}><Label6 at={1.76} size={56} color={C6.accent}>WHO WRITES IT?</Label6></Plate6></In></Center>
</>) },
  { from: 322.62, to: 328.88, tag: [4, "The Big Number", false], back: (<><Stock6 n={70} dur={6.26} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.accent}>2014 · GATTINELLA v. MICHAEL KORS</Label6></Plate6></In></Center>
</>) },
  { from: 328.88, to: 336.46, tag: [4, "The Big Number", false], back: null, el: (<>
<Drift><Center x={960} y={560}><HangTag at={0.05} brand="MICHAEL KORS OUTLET" top={{ label: "MSRP", value: "$120" }} price={{ value: "$79.99" }} scale={0.9} hlTopAt={2.52} /></Center><Center x={1560} y={960}><Label6 at={0.3} size={24} color={C6.mint}>RECONSTRUCTION · AS DESCRIBED IN THE LAWSUIT</Label6></Center></Drift>
</>) },
  { from: 336.46, to: 344.06, tag: [4, "The Big Number", false], back: null, el: (<>
<Evidence src="evidence/t09/tfl-mk.png" size={[2880, 1800]} dur={7.6} frame="screen" marks={[{ x: 254, y: 671, w: 80, h: 38, at: 1.2 }]} zoom={0.9} inset={{ src: "evidence/t09/tfl-mk-top.png", size: [2880, 1800] }} source="THE FASHION LAW · GATTINELLA v. MICHAEL KORS" url="thefashionlaw.com" /><Center x={960} y={960}><In at={5.98} from="fade"><Plate6 at={5.98}><Label6 at={5.98} size={34} color={C6.accent}>MADE ONLY FOR THE OUTLET · PER HER LAWSUIT</Label6></Plate6></In></Center>
</>) },
  { from: 344.06, to: 348.1, tag: [4, "The Big Number", false], back: (<><Stock6 n={52} dur={4.04} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.66} from="fade"><Plate6 at={2.66}><Label6 at={2.66} size={36} color={C6.accent}>SUGGESTED FOR A STORE WHERE THEY WERE NEVER SOLD</Label6></Plate6></In></Center>
</>) },
  { from: 348.1, to: 358.4, tag: [4, "The Big Number", false], back: null, el: (<>
<Evidence src="evidence/t09/yahoo-mk.png" size={[2880, 1800]} dur={10.3} frame="screen" marks={[{ x: 478, y: 654, w: 192, h: 46, at: 4.96 }]} zoom={0.9} inset={{ src: "evidence/t09/yahoo-mk-top.png", size: [2880, 1800] }} source="REUTERS VIA YAHOO FINANCE · JUNE 2015" url="uk.finance.yahoo.com" />
</>) },
  { from: 358.4, to: 368.5, tag: [4, "The Big Number", false], back: null, el: (<>
<Drift><Center x={960} y={560}><HangTag at={0.05} brand="MICHAEL KORS OUTLET" top={{ label: "MSRP", value: "$120" }} price={{ value: "$79.99" }} scale={0.9} strikeAt={1.34} swap={{ word: "VALUE", at: 5.82 }} /></Center><Center x={960} y={990}><In at={6.66} from="fade"><Plate6 at={6.66}><Label6 at={6.66} size={30} color={C6.ink}>…OR DROP THE BIG NUMBER ON OUTLET-ONLY ITEMS</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 368.5, to: 371.7, tag: [4, "The Big Number", false], back: (<><Stock6 n={81} dur={3.2} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.05} text="a new word. same number." y={900} size={80} />
</>) },
  { from: 371.7, to: 376.78, tag: [4, "The Big Number", false], back: null, el: (<>
<Drift><Center x={960} y={560}><HangTag at={0.05} brand="KATE SPADE OUTLET" top={{ label: "COMPARABLE VALUE", value: "$499" }} price={{ value: "$169" }} scale={0.9} tilt={-2} hlTopAt={3.48} /></Center><Center x={960} y={990}><In at={3.48} from="fade"><Plate6 at={3.48}><Label6 at={3.48} size={30} color={C6.accent}>2015: “VALUE” → 2026: “COMPARABLE VALUE”</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 376.78, to: 385.58, tag: [4, "The Big Number", false], back: null, el: (<>
<Evidence src="evidence/t09/curry-tina-p2.png" size={[1700, 2200]} dur={8.8} frame="paper" marks={[{ x: 401, y: 1204, w: 609, h: 30, at: 1.6 }]} source="CURRY v. TAPESTRY · D. OR. · 2026 · ¶4" />
</>) },
  { from: 385.58, to: 397.68, tag: [4, "The Big Number", false], back: (<><Stock6 n={1} dur={12.1} dim={0} graphics={true} />
<Stock6 n={5} from={5.18} dur={12.1} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.86} out={5.18} from="fade"><Plate6 at={3.86}><Label6 at={3.86} size={36} color={C6.ink}>ONE NUMBER · THE WHOLE COUNTRY · PER THE LAWSUIT</Label6></Plate6></In></Center><Center y={470}><In at={5.18} from="fade"><PriceDuel at={5.18} a={{ label: "Kate Spade Outlet · comparable value", value: "$499", color: C6.accent }} b={{ label: "Michael Kors Outlet · same center", value: "$95.20", color: C6.money, at: 8.78 }} /></In></Center>
</>) },
  { from: 397.68, to: 406.46, tag: [4, "The Big Number", false], back: null, el: (<>
<Drift><Center x={960} y={560}><HangTag at={0.05} brand="KATE SPADE OUTLET · WALLET" top={{ label: "COMPARABLE VALUE", value: "$239" }} price={{ value: "$59.25" }} scale={0.85} hlTopAt={3.74} extra={{ label: "EXTRA 25% OFF", value: "", at: 4.76 }} /></Center><Center x={1560} y={1000}><Label6 at={0.3} size={24} color={C6.mint}>RECONSTRUCTION · AS DESCRIBED IN THE LAWSUIT · ¶45–47</Label6></Center></Drift>
</>) },
  { from: 406.46, to: 412.78, tag: [4, "The Big Number", false], back: null, el: (<>
<Drift><Center y={500}><PriceDuel at={0.05} a={{ label: "Kate Spade Outlet wallet · after discounts", value: "$59.25", color: C6.accent }} b={{ label: "Similar wallet · Michael Kors, same center", value: "$47.20", color: C6.money, at: 4.56 }} /></Center><Source6 at={0.4}>Per the lawsuit · CURRY v. TAPESTRY · D. OR. · 2026</Source6></Drift>
</>) },
  { from: 412.78, to: 413.82, tag: [4, "The Big Number", false], back: (<><Stock6 n={80} dur={1.04} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.05} text="it gets stranger." y={900} size={80} />
</>) },
  { from: 413.82, to: 426.8, tag: [4, "The Big Number", false], back: null, el: (<>
<Drift><Center y={540}><TagTrio tags={[{ label: "FACTORY DRESS", value: "$75", at: 0.2 }, { label: "“COMPARE AT”", value: "$140", at: 3.74, color: C6.loss, q: true }, { label: "REAL STORE DRESS", value: "$198", at: 8.56 }]} qAt={11.06} /></Center><Source6 at={0.4}>Consumers' Checkbook · 2026 · Banana Republic Factory</Source6></Drift>
</>) },
  { from: 426.8, to: 439.66, tag: [4, "The Big Number", false], back: null, el: (<>
<Drift><Center y={470}><NeverEndingSale at={0.1} step={2.4} /></Center><Center x={960} y={930}><In at={8.8} from="fade"><Plate6 at={8.8}><Label6 at={8.8} size={34} color={C6.accent}>NOT ONCE AT FULL ORIGINAL PRICE · PER THE LAWSUIT</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 439.66, to: 445.58, tag: [4, "The Big Number", false], back: (<><Stock6 n={17} dur={5.92} dim={0} graphics={true} />
<Stock6 n={19} from={2.74} dur={5.92} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={34} color={C6.ink}>HUNDREDS, MAYBE THOUSANDS OF PRODUCTS · ALWAYS “ON SALE”</Label6></Plate6></In></Center><Source6 at={0.4}>Hashimi v. PVH · complaint, 2026</Source6>
</>) },
  { from: 445.58, to: 450.86, tag: [4, "The Big Number", false], back: null, el: (<>
<Drift><Center y={470}><NeverEndingSale at={0.05} step={0.0001} years={["∞"]} label="50% OFF" /></Center><Center x={960} y={930}><In at={2.66} from="fade"><Plate6 at={2.66}><Label6 at={2.66} size={50} color={C6.accent}>IT'S JUST THE PRICE</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 450.86, to: 458.26, tag: [5, "It's Everywhere", true], hard: true, back: (<><Stock6 n={86} dur={7.4} dim={0} graphics={true} />
<Stock6 n={87} from={4.2} dur={7.4} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={44} color={C6.ink}>OUTLETS ARE A SPECIAL CASE?</Label6></Plate6></In></Center>
</>) },
  { from: 458.26, to: 463.2, tag: [5, "It's Everywhere", false], back: (<><Stock6 n={9} dur={4.94} dim={0} graphics={true} />
<Stock6 n={51} from={3.38} dur={4.94} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.52} from="fade"><Plate6 at={0.52}><Label6 at={0.52} size={36} color={C6.accent}>THE SAME NUMBER · IN STORES YOU SHOP EVERY WEEK</Label6></Plate6></In></Center>
</>) },
  { from: 463.2, to: 468.2, tag: [5, "It's Everywhere", false], back: (<><Stock6 n={64} dur={5.0} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.8} from="fade"><Plate6 at={3.8}><Label6 at={3.8} size={44} color={C6.accent}>HINOJOS v. KOHL'S</Label6></Plate6></In></Center>
</>) },
  { from: 468.2, to: 474.68, tag: [5, "It's Everywhere", false], back: (<><Stock6 n={56} dur={6.48} dim={0} graphics={true} /></>), el: (<>
<Center x={1400} y={560}><HangTag at={2.4} brand="SUITCASE · KOHL'S" top={{ label: "ORIGINAL", value: "$299.99" }} price={{ value: "50% OFF" }} scale={0.62} /></Center><Source6 at={0.3}>ILLUSTRATIVE FOOTAGE · TAG: ILLUSTRATION</Source6>
</>) },
  { from: 474.68, to: 479.46, tag: [5, "It's Everywhere", false], back: (<><Stock6 n={63} dur={4.78} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.44} from="fade"><Plate6 at={1.44}><Label6 at={1.44} size={34} color={C6.ink}>HIS CLAIM: KOHL'S ROUTINELY SOLD IT AT THE SALE PRICE</Label6></Plate6></In></Center>
</>) },
  { from: 479.46, to: 486.2, tag: [5, "It's Everywhere", false], back: (<><Stock6 n={55} dur={6.74} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.72} out={4.84} from="fade"><Plate6 at={0.72}><Label6 at={0.72} size={56} color={C6.loss}>DISMISSED</Label6></Plate6></In></Center><Center x={960} y={880}><In at={4.84} from="fade"><Plate6 at={4.84}><Label6 at={4.84} size={36} color={C6.ink}>“HE GOT WHAT HE PAID FOR. WHERE'S THE HARM?”</Label6></Plate6></In></Center>
</>) },
  { from: 486.2, to: 498.64, tag: [5, "It's Everywhere", false], back: null, el: (<>
<Evidence src="evidence/t09/hinojos-p16.png" size={[1100, 1700]} dur={12.44} frame="paper" marks={[{ x: 312, y: 386, w: 379, h: 30, at: 9.9 }]} source="HINOJOS v. KOHL'S · 9TH CIR. · MAY 2013" />
</>) },
  { from: 498.64, to: 508.76, tag: [5, "It's Everywhere", false], back: (<><Stock6 n={85} dur={10.12} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={200}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={38} color={C6.accent}>DEC 2016 · CITY OF LOS ANGELES SUES</Label6></Plate6></In></Center><Source6 at={0.4}>WTKR / CNN Wire · Dec 2016</Source6><Center x={420} y={960}><In at={6.46} from="fade"><Plate6 at={6.46}><Label6 at={6.46} size={34} color={C6.accent}>J.C. PENNEY</Label6></Plate6></In></Center><Center x={780} y={960}><In at={7.62} from="fade"><Plate6 at={7.62}><Label6 at={7.62} size={34} color={C6.accent}>KOHL'S</Label6></Plate6></In></Center><Center x={1120} y={960}><In at={8.36} from="fade"><Plate6 at={8.36}><Label6 at={8.36} size={34} color={C6.accent}>MACY'S</Label6></Plate6></In></Center><Center x={1460} y={960}><In at={9.06} from="fade"><Plate6 at={9.06}><Label6 at={9.06} size={34} color={C6.accent}>SEARS</Label6></Plate6></In></Center>
</>) },
  { from: 508.76, to: 523.68, tag: [5, "It's Everywhere", false], back: (<><Stock6 n={57} dur={14.92} dim={0} graphics={true} />
<Stock6 n={58} from={7.8} dur={14.92} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.68} out={7.8} from="fade"><Plate6 at={5.68}><Label6 at={5.68} size={46} color={C6.accent}>“ORIGINAL” $1,179.99</Label6></Plate6></In></Center><Center x={960} y={880}><In at={11.46} from="fade"><Plate6 at={11.46}><Label6 at={11.46} size={34} color={C6.ink}>FIRST ~6 MONTHS ONLINE: NEVER MORE THAN $999.99 · PER THE CITY</Label6></Plate6></In></Center>
</>) },
  { from: 523.68, to: 529.96, tag: [5, "It's Everywhere", false], back: null, el: (<>
<Drift><Center y={500}><PriceCeiling at={0.05} ceil="$1,179.99" ceilLabel="ORIGINAL PRICE" low="≤ $999.99" lowLabel="WHAT SEARS ACTUALLY CHARGED · PER THE CITY" drawAt={0.2} pts={[0.5, 0.5, 0.48, 0.5, 0.44, 0.5, 0.5, 0.46, 0.5]} /></Center></Drift>
</>) },
  { from: 529.96, to: 542.78, tag: [5, "It's Everywhere", false], back: (<><Stock6 n={59} dur={12.82} dim={0} graphics={true} />
<Stock6 n={60} from={8.6} dur={12.82} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.52} out={8.6} from="fade"><Plate6 at={5.52}><Label6 at={5.52} size={44} color={C6.accent}>ORIGINAL $120 · SALE $30</Label6></Plate6></In></Center><Center x={960} y={880}><In at={8.6} from="fade"><Plate6 at={8.6}><Label6 at={8.6} size={46} color={C6.accent}>75% OFF · FROM DAY ONE</Label6></Plate6></In></Center>
</>) },
  { from: 542.78, to: 547.5, tag: [5, "It's Everywhere", false], back: null, el: (<>
<Evidence src="evidence/t09/wtkr-la.png" size={[2880, 1800]} dur={4.72} frame="screen" marks={[{ x: 926, y: 1001, w: 57, h: 42, at: 1.8 }]} zoom={0.9} inset={{ src: "evidence/t09/wtkr-la-top.png", size: [2880, 1800] }} source="WTKR / CNN WIRE · DEC 2016" url="wtkr.com" /><Center x={960} y={960}><In at={1.8} from="fade"><Plate6 at={1.8}><Label6 at={1.8} size={34} color={C6.accent}>NEXT 5 MONTHS: NEVER MORE THAN $30 · PER THE CITY</Label6></Plate6></In></Center>
</>) },
  { from: 547.5, to: 555.8, tag: [5, "It's Everywhere", false], back: (<><Stock6 n={73} dur={8.3} dim={0} graphics={true} />
<Stock6 n={70} from={5.7} dur={8.3} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.7} from="fade"><Plate6 at={5.7}><Label6 at={5.7} size={48} color={C6.accent}>WHY DOESN'T ANYBODY JUST STOP?</Label6></Plate6></In></Center>
</>) },
  { from: 555.8, to: 557.98, tag: [5, "It's Everywhere", false], back: (<><Stock6 n={74} dur={2.18} dim={0.2} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={60} color={C6.accent}>SOMEBODY TRIED.</Label6></Plate6></In></Center>
</>) },
  { from: 557.98, to: 563.14, tag: [6, "Somebody Tried", true], hard: true, back: (<><Stock6 n={72} dur={5.16} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.accent}>2011 · J.C. PENNEY HIRES A NEW CEO</Label6></Plate6></In></Center>
</>) },
  { from: 563.14, to: 566.92, tag: [6, "Somebody Tried", false], back: (<><Stock6 n={92} dur={3.78} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={120}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={34} color={C6.accent}>RON JOHNSON · EX-APPLE RETAIL CHIEF</Label6></Plate6></In></Center><Source6 at={0.3}>Footage: Bloomberg · 2013</Source6>
</>) },
  { from: 566.92, to: 576.14, tag: [6, "Somebody Tried", false], back: (<><Stock6 n={19} dur={9.22} dim={0} graphics={true} />
<Stock6 n={20} from={6.9} dur={9.22} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.44} out={6.9} from="fade"><Plate6 at={2.44}><Label6 at={2.44} size={44} color={C6.accent}>A STORE HOOKED ON FAKE PRICES</Label6></Plate6></In></Center><Center x={960} y={880}><In at={6.9} from="fade"><Plate6 at={6.9}><Label6 at={6.9} size={40} color={C6.ink}>MARKED UP · MARKED DOWN · COUPONS</Label6></Plate6></In></Center>
</>) },
  { from: 576.14, to: 582.2, tag: [6, "Somebody Tried", false], back: (<><Stock6 n={94} dur={6.06} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={120}><In at={4.52} from="fade"><Plate6 at={4.52}><Label6 at={4.52} size={36} color={C6.accent}>2012 · NO MORE “FAKE PRICES”</Label6></Plate6></In></Center><Source6 at={0.3}>Footage: News 5 Cleveland · 2012</Source6>
</>) },
  { from: 582.2, to: 587.14, tag: [6, "Somebody Tried", false], back: (<><Stock6 n={18} dur={4.94} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} out={3.58} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={44} color={C6.ink}>ONE EVERYDAY PRICE</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.58} from="fade"><Plate6 at={3.58}><Label6 at={3.58} size={56} color={C6.accent}>“FAIR AND SQUARE”</Label6></Plate6></In></Center>
</>) },
  { from: 587.14, to: 594.88, tag: [6, "Somebody Tried", false], back: null, el: (<>
<Drift><Center y={560}><HangTag at={0.05} brand="J.C. PENNEY · 2012" top={{ label: "EVERYDAY PRICE", value: "$25" }} price={{ label: "NO FAKE “ORIGINAL”", value: "✓" }} scale={0.85} priceColor={C6.money} priceColorAt={0.05} /></Center><Center x={960} y={1000}><In at={0.3} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={24} color={C6.ink}>ILLUSTRATION</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 594.88, to: 596.52, tag: [6, "Somebody Tried", false], back: (<><Stock6 n={11} dur={1.64} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={56} color={C6.ink}>THE CUSTOMERS LEFT.</Label6></Plate6></In></Center>
</>) },
  { from: 596.52, to: 608.82, tag: [6, "Somebody Tried", false], back: (<><Stock6 n={61} dur={12.3} dim={0} graphics={true} />
<Stock6 n={65} from={9.12} dur={12.3} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={9.12} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={34} color={C6.ink}>A MISSOURI SHOPPER · THE NEW YORK TIMES, 2013</Label6></Plate6></In></Center><Center x={960} y={880}><In at={9.12} from="fade"><Plate6 at={9.12}><Label6 at={9.12} size={40} color={C6.ink}>NO SALES → SHE STOPPED GOING</Label6></Plate6></In></Center><Source6 at={0.4}>ILLUSTRATIVE FOOTAGE</Source6>
</>) },
  { from: 608.82, to: 614.72, tag: [6, "Somebody Tried", false], back: (<><Stock6 n={82} dur={5.9} dim={0} graphics={false} /></>), el: (<>
<Meme at={3.68} text="no sale. no fun." y={900} size={80} /><Source6 at={0.3}>Paraphrase · The New York Times, 2013</Source6>
</>) },
  { from: 614.72, to: 624.76, tag: [6, "Somebody Tried", false], back: null, el: (<>
<Evidence src="evidence/t09/jck-loss.png" size={[2880, 1800]} dur={10.04} frame="screen" marks={[{ x: 678, y: 601, w: 54, h: 40, at: 6.26 }]} zoom={0.9} inset={{ src: "evidence/t09/jck-loss-top.png", size: [2880, 1800] }} source="JCK · FEB 2013 · J.C. PENNEY 2012 RESULTS" url="jckonline.com" /><Center x={640} y={960}><In at={3.8} from="fade"><Plate6 at={3.8}><Label6 at={3.8} size={38} color={C6.loss}>SAME-STORE SALES −25%</Label6></Plate6></In></Center><Center x={1280} y={960}><In at={6.26} from="fade"><Plate6 at={6.26}><Label6 at={6.26} size={38} color={C6.loss}>LOSS −$985M</Label6></Plate6></In></Center>
</>) },
  { from: 624.76, to: 629.82, tag: [6, "Somebody Tried", false], back: (<><Stock6 n={72} dur={5.06} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.74} from="fade"><Plate6 at={1.74}><Label6 at={1.74} size={56} color={C6.accent}>“A MISTAKE”</Label6></Plate6></In></Center>
</>) },
  { from: 629.82, to: 637.14, tag: [6, "Somebody Tried", false], back: null, el: (<>
<Evidence src="evidence/t09/jck-loss.png" size={[2880, 1800]} dur={7.32} frame="screen" marks={[{ x: 1384, y: 1344, w: 206, h: 40, at: 4.6 }]} zoom={0.9} inset={{ src: "evidence/t09/jck-loss-top.png", size: [2880, 1800] }} source="JCK · FEB 2013 · RON JOHNSON ON THE EARNINGS CALL" url="jckonline.com" />
</>) },
  { from: 637.14, to: 643.1, tag: [6, "Somebody Tried", false], back: null, el: (<>
<Drift><Center x={960} y={560}><HangTag at={0.05} brand="KATE SPADE OUTLET" top={{ label: "COMPARABLE VALUE", value: "$499" }} price={{ value: "$169" }} scale={0.9} hlTopAt={2.38} /></Center><Center x={960} y={990}><In at={2.38} from="fade"><Plate6 at={2.38}><Label6 at={2.38} size={32} color={C6.accent}>A “REFERENCE PRICE”</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 643.1, to: 645.26, tag: [6, "Somebody Tried", false], back: (<><Stock6 n={91} dur={2.16} dim={0} graphics={false} /></>), el: (<>
<Source6 at={0.3}>J.C. Penney ad · 2013</Source6>
</>) },
  { from: 645.26, to: 651.94, tag: [6, "Somebody Tried", false], back: null, el: (<>
<Evidence src="evidence/t09/npr-jcp-top.png" size={[2880, 1800]} dur={6.68} frame="screen" zoom={0.9} source="NPR · MARCH 2013" url="npr.org" /><Center x={960} y={960}><In at={5.2} from="fade"><Plate6 at={5.2}><Label6 at={5.2} size={30} color={C6.accent}>REPORTS: EVERYDAY PRICES RAISED · TO HAVE SOMETHING TO MARK DOWN</Label6></Plate6></In></Center>
</>) },
  { from: 651.94, to: 658.14, tag: [6, "Somebody Tried", false], back: null, el: (<>
<Drift><Center y={560}><HangTag at={0.05} brand="SIDE TABLE · J.C. PENNEY" top={{ label: "LAST WEEK", value: "$150" }} price={{ label: "EVERYDAY PRICE", value: "$245", at: 2.98 }} scale={0.8} /></Center><Source6 at={0.3}>TIME · May 2013 (dealnews price tracking)</Source6></Drift>
</>) },
  { from: 658.14, to: 660.5, tag: [6, "Somebody Tried", false], back: (<><Stock6 n={75} dur={2.36} dim={0} graphics={true} />
<Stock6 n={76} from={1.38} dur={2.36} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.38} from="fade"><Plate6 at={1.38}><Label6 at={1.38} size={44} color={C6.accent}>OUT AFTER ~17 MONTHS · APRIL 2013</Label6></Plate6></In></Center>
</>) },
  { from: 660.5, to: 667.94, tag: [6, "Somebody Tried", false], back: (<><Stock6 n={84} dur={7.44} dim={0.72} graphics={true} /></>), el: (<>
<Center y={430}><Words text="“People don't want a fair price. They want a great deal.”" at={3.7} size={78} maxW={1500} hl={["great", "deal.\u201d"]} /></Center><Center y={690}><Label6 at={3.7} size={30} color={C6.mint}>ALEXANDER CHERNEV · NORTHWESTERN UNIVERSITY</Label6></Center>
</>) },
  { from: 667.94, to: 675.36, tag: [6, "Somebody Tried", false], back: null, el: (<>
<Evidence src="evidence/t09/wtkr-la.png" size={[2880, 1800]} dur={7.42} frame="screen" marks={[{ x: 764, y: 663, w: 133, h: 42, at: 2.62 }]} zoom={0.9} inset={{ src: "evidence/t09/wtkr-la-top.png", size: [2880, 1800] }} source="WTKR / CNN WIRE · DEC 2016" url="wtkr.com" /><Center x={960} y={960}><In at={2.62} from="fade"><Plate6 at={2.62}><Label6 at={2.62} size={34} color={C6.accent}>J.C. PENNEY · ONE OF THE FOUR SUED</Label6></Plate6></In></Center>
</>) },
  { from: 675.36, to: 681.4, tag: [6, "Somebody Tried", false], back: (<><Stock6 n={50} dur={6.04} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.94} from="fade"><Plate6 at={1.94}><Label6 at={1.94} size={44} color={C6.accent}>NOBODY JUDGES A PRICE ALONE</Label6></Plate6></In></Center>
</>) },
  { from: 681.4, to: 687.36, tag: [6, "Somebody Tried", false], back: null, el: (<>
<Drift><Center y={540}><Anchor at={0.05} mid="$169" left="$499" right="$95.20" rightAt={3.12} /></Center></Drift>
</>) },
  { from: 687.36, to: 695.78, tag: [6, "Somebody Tried", false], back: null, el: (<>
<Drift><Center x={960} y={560}><HangTag at={0.05} brand="KATE SPADE OUTLET" top={{ label: "COMPARABLE VALUE", value: "$499" }} price={{ value: "$169" }} scale={0.9} hlTopAt={3.1} /></Center><Center x={960} y={990}><In at={6.52} from="fade"><Plate6 at={6.52}><Label6 at={6.52} size={36} color={C6.accent}>A STORE WROTE IT · FOR US</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 695.78, to: 700.5, tag: [6, "Somebody Tried", false], back: (<><Stock6 n={10} dur={4.72} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.3} from="fade"><Plate6 at={2.3}><Label6 at={2.3} size={36} color={C6.ink}>ONE STORE TRIED TO STOP · SHOPPERS WALKED AWAY</Label6></Plate6></In></Center>
</>) },
  { from: 700.5, to: 708.52, tag: [7, "Your Move", true], hard: true, back: null, el: (<>
<Drift><Center y={480}><Checklist items={[{ text: "Cover the big number", at: 3.08 }, { text: "Check the label inside", at: 4.32 }, { text: "Ten seconds on your phone", at: 5.82 }]} /></Center></Drift>
</>) },
  { from: 708.52, to: 713.52, tag: [7, "Your Move", false], back: (<><Stock6 n={65} dur={5.0} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.4} from="fade"><Plate6 at={1.4}><Label6 at={1.4} size={32} color={C6.money}>ADIDAS: OFTEN CHEAPER AT AMAZON OR DICK'S THAN AT THE OUTLET</Label6></Plate6></In></Center><Source6 at={0.4}>Consumers' Checkbook · 2026</Source6>
</>) },
  { from: 713.52, to: 719.06, tag: [7, "Your Move", false], back: (<><Stock6 n={13} dur={5.54} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.28} from="fade"><Plate6 at={1.28}><Label6 at={1.28} size={40} color={C6.ink}>$169 · MIGHT BE FAIR · MIGHT NOT</Label6></Plate6></In></Center>
</>) },
  { from: 719.06, to: 728.6, tag: [7, "Your Move", false], back: null, el: (<>
<Drift><Center x={960} y={560}><HangTag at={0.05} brand="KATE SPADE OUTLET" top={{ label: "COMPARABLE VALUE", value: "$499" }} price={{ value: "$169" }} scale={0.9} meltAt={0.7} hlPriceAt={4.38} /></Center></Drift>
</>) },
  { from: 728.6, to: 735.2, tag: [7, "Your Move", false], back: null, el: (<>
<Drift><Center x={960} y={560}><HangTag at={0.05} brand="KATE SPADE OUTLET" top={{ label: "COMPARABLE VALUE", value: "$499" }} price={{ value: "$169" }} scale={0.9} cutAt={5.16} /></Center><Center x={960} y={990}><In at={3.74} from="fade"><Plate6 at={3.74}><Label6 at={3.74} size={34} color={C6.accent}>WHAT YOU CAN CHANGE: WHETHER YOU BELIEVE IT</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 735.2, to: 739.22, tag: [7, "Your Move", false], back: (<><Stock6 n={90} dur={4.02} dim={0.45} graphics={true} /></>), el: (<>
<Center x={960} y={540}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={48} color={C6.accent}>THEY SAW YOU COMING · NOW YOU SEE THEM COMING</Label6></Plate6></In></Center>
</>) },
  { from: 739.22, to: 751.2, tag: [7, "Your Move", false], back: (<><Stock6 n={1} dur={11.98} dim={0.55} graphics={true} /></>), el: (<>
<EndCard6 at={0.3} next="" /><Center x={960} y={1000}><In at={0.4} from="fade"><Plate6 at={0.4}><Label6 at={0.4} size={36} color={C6.accent}>THE BIGGEST “COMPARE AT” NUMBER YOU EVER BELIEVED?</Label6></Plate6></In></Center>
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string, number][] = [[0.05, "t02-paper", 0.3], [6.14, "ep06-pop", 0.3], [9.4, "ep06-kaching", 0.3], [12.34, "ep06-counter", 0.3], [14.89, "t02-paper", 0.3], [22.73, "t02-paper", 0.3], [24.78, "ep06-fall", 0.25], [35.72, "ep06-pop", 0.25], [38.14, "rise", 0.25], [42.7, "ep06-pop", 0.25], [51.28, "ep06-stamp", 0.25], [53.34, "ding", 0.3], [56.34, "whoosh", 0.25], [65.02, "ep06-stamp", 0.25], [71.2, "rise", 0.25], [75.86, "impact", 0.25], [78.85, "ep06-whoosh", 0.2], [85.94, "ep06-pop", 0.2], [91.86, "t02-paper", 0.3], [98.68, "ep06-pop", 0.25], [105.26, "ep06-counter", 0.3], [107.2, "impact", 0.3], [114.02, "ep06-stamp", 0.25], [117.61, "t02-paper", 0.3], [122.92, "ep06-counter", 0.3], [134.5, "ep06-pop", 0.22], [135.88, "ep06-pop", 0.22], [136.92, "ep06-pop", 0.22], [143.98, "ep06-pop", 0.2], [145.18, "ep06-pop", 0.2], [146.88, "ep06-pop", 0.2], [148.02, "ep06-pop", 0.2], [149.48, "ding", 0.25], [151.4, "ep06-pop", 0.25], [154.86, "ding", 0.3], [160.58, "ep06-pop", 0.22], [175.18, "rise", 0.25], [177.01, "t02-paper", 0.3], [192.16, "ep06-pop", 0.25], [199.36, "ep06-stamp", 0.3], [204.25, "t02-paper", 0.3], [214.68, "ep06-counter", 0.25], [220.4, "ep06-counter", 0.25], [223.54, "ep06-pop", 0.22], [228.84, "ep06-counter", 0.25], [231.34, "ep06-counter", 0.25], [240.62, "ep06-stamp", 0.25], [246.3, "ding", 0.3], [252.16, "ep06-pop", 0.25], [258.98, "ep06-pop", 0.22], [261.78, "ep06-pop", 0.25], [264.46, "ep06-pop", 0.25], [274.38, "ep06-stamp", 0.25], [284.34, "ep06-pop", 0.22], [290.7, "ep06-pop", 0.22], [298.64, "ep06-pop", 0.22], [314.22, "ding", 0.25], [316.66, "ep06-pop", 0.25], [319.52, "scribble", 0.3], [322.72, "t02-paper", 0.3], [331.4, "ep06-counter", 0.3], [334.0, "ep06-kaching", 0.3], [336.51, "t02-paper", 0.3], [346.72, "ep06-stamp", 0.25], [348.15, "t02-paper", 0.3], [353.06, "ep06-kaching", 0.3], [362.62, "scribble", 0.3], [364.22, "ep06-stamp", 0.3], [368.55, "ep06-scratch", 0.25], [375.18, "ep06-pop", 0.3], [376.83, "t02-paper", 0.3], [389.44, "ep06-pop", 0.22], [394.36, "ep06-counter", 0.3], [401.42, "ep06-counter", 0.3], [404.78, "ep06-kaching", 0.3], [411.02, "ep06-pop", 0.3], [412.83, "ep06-scratch", 0.25], [417.56, "ep06-pop", 0.25], [422.38, "ep06-pop", 0.25], [424.88, "rise", 0.25], [427.2, "click", 0.3], [429.6, "click", 0.3], [432.0, "click", 0.3], [434.4, "click", 0.3], [435.6, "ep06-stamp", 0.3], [445.88, "ep06-stamp", 0.3], [448.24, "ep06-stamp", 0.3], [450.91, "ep06-whoosh", 0.2], [461.64, "ep06-stamp", 0.25], [467.0, "t02-paper", 0.3], [470.6, "ep06-pop", 0.25], [472.9, "ep06-counter", 0.3], [477.74, "ep06-stamp", 0.25], [480.18, "ep06-stamp", 0.3], [486.25, "t02-paper", 0.3], [496.1, "impact", 0.3], [498.69, "t02-paper", 0.3], [505.1, "ep06-pop", 0.22], [506.26, "ep06-pop", 0.22], [507.0, "ep06-pop", 0.22], [507.7, "ep06-pop", 0.22], [514.44, "ep06-counter", 0.3], [526.68, "ep06-fall", 0.25], [535.48, "ep06-counter", 0.3], [537.44, "ep06-pop", 0.25], [542.83, "t02-paper", 0.3], [544.58, "ep06-stamp", 0.25], [553.2, "rise", 0.25], [555.85, "impact", 0.3], [558.03, "ep06-whoosh", 0.2], [563.24, "ep06-pop", 0.22], [571.46, "ep06-pop", 0.22], [573.82, "ep06-pop", 0.22], [580.66, "ep06-stamp", 0.3], [585.78, "ep06-stamp", 0.3], [592.26, "ding", 0.3], [594.98, "ep06-fall", 0.3], [612.5, "ep06-scratch", 0.25], [614.77, "t02-paper", 0.3], [618.52, "ep06-fall", 0.3], [620.98, "impact", 0.3], [626.5, "ep06-stamp", 0.25], [629.87, "t02-paper", 0.3], [639.52, "ep06-pop", 0.3], [643.2, "ding", 0.25], [645.31, "t02-paper", 0.3], [653.16, "ep06-counter", 0.3], [654.92, "impact", 0.3], [659.52, "t02-door", 0.3], [666.28, "ep06-stamp", 0.3], [667.99, "t02-paper", 0.3], [681.45, "ding", 0.3], [684.52, "buzz", 0.25], [692.94, "scribble", 0.3], [698.08, "ep06-stamp", 0.3], [703.58, "ding", 0.25], [704.82, "ding", 0.25], [706.32, "ding", 0.25], [709.92, "ep06-kaching", 0.25], [719.76, "ep06-fall", 0.3], [724.96, "ep06-stamp", 0.3], [728.9, "scribble", 0.3], [733.76, "swoosh", 0.3], [735.25, "impact", 0.3], [739.52, "ep06-whoosh", 0.2]];

export const T09Outlet: React.FC = () => {
  const { fps } = useVideoConfig();
  setClips(CLIP_FN); // свой набор стоков при каждом рендере: в общем Root последним грузится чужой ролик
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/t09-voiceover.mp3")} volume={0.9} />
      <Sequence from={0} durationInFrames={2382}><Audio src={staticFile("audio/t04/music-c0-open.mp3")} volume={(f) => 0.07 * interpolate(f, [0, 30, 2352, 2382], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={2346} durationInFrames={2981}><Audio src={staticFile("audio/t02/music-c1-recipe.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 2951, 2981], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={5291} durationInFrames={4304}><Audio src={staticFile("audio/t03/music-c2-gap.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 4274, 4304], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={9559} durationInFrames={3985}><Audio src={staticFile("audio/t05/music-c1-test.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 3955, 3985], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={13508} durationInFrames={3250}><Audio src={staticFile("audio/t03/music-c3-states.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 3220, 3250], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={16721} durationInFrames={4312}><Audio src={staticFile("audio/t04/music-c4-knew.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 4282, 4312], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={20997} durationInFrames={1539}><Audio src={staticFile("audio/t05/music-c5-how.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 1509, 1539], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
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
