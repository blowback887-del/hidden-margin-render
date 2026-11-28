import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Bg6, BigNum, Bug6, C6, Center, ChapterTag, In, Label6, Num6, Scene6, setClips, Source6, Stamp, Stock6, Subscribe6, Plate6, TwoBars, Words } from "../brand/hm6";
import { Watches, PriceFlip, TenSplit, Jars, MenuSplit, TwoTags, CheeseStack, DimeLoss, DollarPress, Division, FloorLine, CrackWord, MenuShrink } from "../brand/t11";
import { MenuBoard, PriceDuel, Scissors, ThreeMoves } from "../brand/t08";
import { Checklist } from "../brand/t07";
import { Drift } from "../brand/t03";
import { Evidence, ArchiveFx } from "../brand/evidence";

// ===================================================================
// T11BigMac — сгенерировано cloud/gen/build.py из плана cloud/gen/t11.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const T11BIGMAC_DURATION_SEC = 1428.84;
const CLIPS: Record<number, string> = {"1": "01-furnace-sparks", "2": "02-steel-hyperlapse", "3": "03-grinder-sparks", "4": "04-workers-walking", "5": "05-town-dusk", "6": "06-main-street", "7": "07-burger-bite", "8": "08-burger-wrapper", "9": "09-counting-pennies", "10": "10-child-coins", "11": "11-old-man-paper", "12": "12-workers-lunch", "13": "13-mom-snacks", "14": "14-boys-burgers", "15": "15-ground-beef", "16": "16-raw-meat", "17": "17-tennis-aerial", "18": "18-tennis-empty", "19": "19-suburb-aerial", "20": "20-suburb-aerial2", "21": "21-keys-hand", "22": "22-stock-screen", "23": "23-dollar-bills", "24": "24-ten-dollar", "25": "25-coins-jar", "26": "26-cheese-slice", "27": "27-cheeseburger-close", "28": "28-gavel", "29": "29-courthouse-indiana", "30": "30-hospital-walk", "31": "31-hospital-hall", "32": "32-coffee-cups", "33": "33-receipts-woman", "34": "34-longhorns", "35": "35-cattle-aerial", "36": "36-cowboys-herding", "37": "37-dry-ground", "38": "38-dry-riverbed", "39": "39-fries-frying", "40": "40-fries-strainer", "41": "41-fastfood-crew", "42": "42-dt-going", "43": "43-dt-man-order", "44": "44-dt-empty", "45": "45-dt-card", "46": "46-bag-packing", "47": "47-delivery-hold", "48": "48-phone-use", "49": "49-counting-dollars", "50": "50-clock-hands", "51": "51-clock-tick", "52": "52-la-aerial", "53": "53-tired-woman", "54": "54-truck-driver", "55": "55-vintage-street", "56": "56-vintage-suburb", "57": "57-vintage-family-car", "58": "58-vintage-1970s", "59": "59-vintage-football", "60": "60-eating-alone-car", "61": "61-big-burger-hold", "62": "62-tear-money", "63": "63-doctor-wipe", "64": "64-woman-driving", "65": "65-film-leader", "66": "66-crt-tv", "67": "67-podium", "68": "68-grill-burgers", "69": "69-cheeseburger-make", "70": "70-grill-flames", "71": "71-wm-bigmac", "72": "72-wm-bigmac-museum", "73": "73-wm-uniontown", "74": "74-wm-homestead-night", "75": "75-wm-stockyards-1909", "76": "76-wm-stockyards-1905", "77": "77-wm-first-mcd", "78": "78-wm-first-mcd2", "79": "79-wm-downey", "80": "80-wm-downey-loc", "81": "81-wm-mcd-museum", "82": "82-wm-speedee", "83": "83-wm-mcdouble", "84": "84-wm-double-cheese", "85": "85-wm-orlando-occ", "86": "86-wm-macarthur", "87": "87-wm-ucla", "88": "88-wm-bk-whopperjr", "89": "89-r-mcd-sign-close", "90": "90-r-mcd-night", "91": "91-r-drive-thru-night", "92": "92-r-burger-fries-table", "93": "93-r-fries-close", "94": "94-r-frying", "95": "95-r-potatoes", "96": "96-r-flying-dollars", "97": "97-r-meeting", "98": "98-r-drive-thru-pay", "99": "99-r-drive-thru-order", "100": "100-r-drive-thru-going", "101": "101-r-empty-drive-thru", "102": "102-r-eating-alone", "103": "103-r-boys-eating", "104": "104-r-phone-pay-meal", "105": "105-r-shocked-man", "106": "106-r-calculator", "107": "107-r-empty-wallet", "108": "108-r-paper-bag", "109": "109-r-burger-bite", "110": "110-r-sesame-bun", "111": "111-r-i95-connecticut", "112": "112-r-service-plaza", "113": "113-r-ct-manchester", "114": "114-r-ct-lisbon", "115": "115-r-menu-board-cc0", "116": "116-r-big-mac-meal", "117": "117-r-archive-mcd", "118": "118-r-value-burgers", "119": "119-r-kiosk", "120": "120-r-mcchicken", "121": "121-r-midnight-lineup", "122": "122-r-needles-ca", "123": "123-r-calverton-md", "124": "124-r-stock-screens", "125": "125-r-cola-ice", "126": "126-r-facepalm", "127": "127-r-wm-bk-houston", "128": "128-r-grocery-checkout", "129": "129-r-cooking-pan", "130": "130-r-delivery-bag", "131": "131-r-delivery-pay", "132": "132-r-courthouse", "133": "133-r-coins-fall", "134": "134-r-dollar-stack", "135": "135-r-phone-scroll", "136": "136-live-ad1974-box", "137": "137-live-ad1974-logo", "138": "138-live-ad1975-diners", "139": "139-live-ad1975-bun", "140": "140-live-ad1997-55c", "141": "141-live-ad1997-family", "142": "142-live-ap1997-signs", "143": "143-live-ap1997-pay", "144": "144-live-ap1997-floor", "145": "145-live-fox5-18", "146": "146-live-nn-darien", "147": "147-live-nn-runaway", "148": "148-live-nn-two-prices", "149": "149-live-gma-5deal", "150": "150-live-gma-bargain", "151": "151-live-cbs-store", "152": "152-live-gma-slump", "153": "153-live-gma-under3", "154": "154-live-gma-kiosk", "155": "155-live-today-bigarch", "156": "156-live-today-under3", "157": "157-live-news-drivethru", "158": "158-live-news-store", "159": "159-live-news-delivery", "160": "160-live-news-kiosk", "161": "161-live-museum-15c", "162": "162-live-museum-sign", "163": "163-live-museum-bag"};
const LENS: Record<number, number> = {"1": 4.67, "2": 7.0, "3": 8.37, "4": 14.0, "5": 12.77, "6": 11.37, "7": 14.0, "8": 13.07, "9": 11.73, "10": 14.0, "11": 13.37, "12": 13.57, "13": 10.2, "14": 14.0, "15": 5.97, "16": 9.63, "17": 13.43, "18": 11.0, "19": 14.0, "20": 14.0, "21": 9.73, "22": 14.0, "23": 2.0, "24": 7.07, "25": 8.53, "26": 14.0, "27": 14.0, "28": 11.2, "29": 12.37, "30": 14.0, "31": 3.67, "32": 14.0, "33": 9.0, "34": 11.03, "35": 4.67, "36": 5.37, "37": 14.0, "38": 14.0, "39": 10.9, "40": 8.43, "41": 9.23, "42": 14.0, "43": 10.7, "44": 11.87, "45": 14.0, "46": 7.73, "47": 12.07, "48": 8.53, "49": 14.0, "50": 8.8, "51": 14.0, "52": 14.0, "53": 14.0, "54": 12.97, "55": 14.0, "56": 3.5, "57": 14.0, "58": 4.73, "59": 14.0, "60": 13.13, "61": 8.6, "62": 7.17, "63": 14.0, "64": 14.0, "65": 14.0, "66": 12.17, "67": 10.43, "68": 4.9, "69": 14.0, "70": 7.57, "71": 14.0, "72": 14.0, "73": 14.0, "74": 14.0, "75": 14.0, "76": 14.0, "77": 14.0, "78": 14.0, "79": 14.0, "80": 14.0, "81": 14.0, "82": 14.0, "83": 14.0, "84": 14.0, "85": 14.0, "86": 14.0, "87": 14.0, "88": 14.0, "89": 14.0, "90": 14.0, "91": 14.0, "92": 14.0, "93": 14.0, "94": 10.9, "95": 5.37, "96": 14.0, "97": 14.0, "98": 14.0, "99": 10.7, "100": 14.0, "101": 11.87, "102": 13.13, "103": 10.27, "104": 14.0, "105": 14.0, "106": 13.07, "107": 14.0, "108": 10.13, "109": 14.0, "110": 14.0, "111": 14.0, "112": 14.0, "113": 14.0, "114": 14.0, "115": 14.0, "116": 14.0, "117": 14.0, "118": 14.0, "119": 14.0, "120": 14.0, "121": 14.0, "122": 14.0, "123": 14.0, "124": 14.0, "125": 14.0, "126": 12.53, "127": 14.0, "128": 14.0, "129": 9.0, "130": 10.0, "131": 9.13, "132": 10.0, "133": 5.27, "134": 10.0, "135": 10.0, "136": 5.03, "137": 6.03, "138": 5.53, "139": 4.0, "140": 4.2, "141": 3.0, "142": 6.0, "143": 6.0, "144": 7.0, "145": 5.97, "146": 8.03, "147": 7.03, "148": 7.03, "149": 6.03, "150": 6.03, "151": 4.0, "152": 5.53, "153": 6.03, "154": 4.0, "155": 4.0, "156": 4.03, "157": 6.03, "158": 6.03, "159": 4.53, "160": 4.0, "161": 7.0, "162": 6.0, "163": 6.03};
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/t11/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 });
setClips(CLIP_FN);

type Beat = { from: number; to: number; tag?: [number, string, boolean]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 3.98, back: (<><Stock6 n={136} dur={3.98} dim={0} graphics={false} sepia />
<ArchiveFx /></>), el: (<>
<Center x={960} y={900}><In at={2.08} from="fade"><Plate6 at={2.08}><Label6 at={2.08} size={44} color={C6.accent}>BIG MAC · 1967 · 45¢</Label6></Plate6></In></Center><Source6 at={0.3}>McDonald's TV ad · 1974</Source6>
</>) },
  { from: 3.98, to: 10.82, back: null, el: (<>
<Drift><Center y={470}><PriceFlip from="45¢" to="$6.22" flipAt={0.5} fromNote="1967" toNote="U.S. AVERAGE · JULY 2026" w={620} /></Center><Source6 at={0.4}>The Economist · Big Mac Index, July 2026</Source6></Drift>
</>) },
  { from: 10.82, to: 18.94, back: (<><Stock6 n={147} dur={8.12} dim={0} graphics={false} />
<Stock6 n={145} from={3.12} dur={8.12} dim={0} graphics={false} /></>), el: (<>
<Source6 at={0.3}>Footage: NewsNation · FOX 5 DC</Source6>
</>) },
  { from: 18.94, to: 24.48, back: (<><Stock6 n={50} dur={5.54} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.46} out={3.7} from="fade"><Plate6 at={2.46}><Label6 at={2.46} size={48} color={C6.ink}>NOT IN DOLLARS</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.7} from="fade"><Plate6 at={3.7}><Label6 at={3.7} size={48} color={C6.accent}>IN MINUTES OF WORK</Label6></Plate6></In></Center>
</>) },
  { from: 24.48, to: 32.06, back: null, el: (<>
<Drift><Center y={470}><Watches size={420} gap={110} note="OUR MATH FROM BLS WAGES · DETAILS LATER" noteAt={3.28} items={[{ min: 10, label: "1968", sub: "AVERAGE WORKER", at: 0.1, spinAt: 5.5, spin: 1.2 }]} /></Center></Drift>
</>) },
  { from: 32.06, to: 40.36, back: null, el: (<>
<Drift><Center y={470}><Watches size={400} gap={110} note="MEASURED IN WORK: ALMOST THE SAME PRICE" noteAt={5.3} items={[{ min: 10, label: "1968", sub: "AVERAGE WORKER", still: true, at: 0.05 }, { min: 11, label: "2026", sub: "AVERAGE WORKER", at: 0.05, spinAt: 0.84, spin: 1.2 }]} /></Center></Drift>
</>) },
  { from: 40.36, to: 43.14, back: (<><Stock6 n={109} dur={2.78} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={36} color={C6.ink}>WHERE THESE NUMBERS COME FROM · LATER IN THE VIDEO</Label6></Plate6></In></Center>
</>) },
  { from: 43.14, to: 49.08, back: null, el: (<>
<Evidence src="evidence/t11/lt-luxury.png" size={[2880, 1800]} dur={5.94} frame="screen" marks={[{ x: 808, y: 600, w: 68, h: 44, at: 0.8 }]} zoom={0.9} source="LENDINGTREE SURVEY · 2024" url="lendingtree.com" />
</>) },
  { from: 49.08, to: 62.92, back: null, el: (<>
<Drift><Center y={470}><Watches size={340} gap={90} items={[{ min: 10, label: "1968", sub: "AVERAGE WORKER", still: true, at: 0.05 }, { min: 11, label: "2026", sub: "AVERAGE WORKER", still: true, at: 0.05 }, { min: 51, label: "$7.25/HR", sub: "FEDERAL MINIMUM", at: 0.54, spinAt: 3.0, spin: 2.0, redAt: 4.18, blurAt: 9.34, q: true, color: C6.loss }]} /></Center></Drift>
</>) },
  { from: 62.92, to: 73.6, back: (<><Stock6 n={115} dur={10.68} dim={0.3} graphics={true} />
<Stock6 n={151} from={7.14} dur={10.68} dim={0.3} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.26} from="fade"><Plate6 at={2.26}><Label6 at={2.26} size={38} color={C6.accent}>APRIL 2026 · SOMETHING IT GAVE UP 13 YEARS AGO</Label6></Plate6></In></Center><Center y={420}><In at={5.54} from="zoom"><Num6 size={260}>?</Num6></In></Center>
</>) },
  { from: 73.6, to: 79.9, back: (<><Stock6 n={73} dur={6.3} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.0} from="fade"><Plate6 at={3.0}><Label6 at={3.0} size={44} color={C6.ink}>UNIONTOWN, PENNSYLVANIA · 1967</Label6></Plate6></In></Center><Source6 at={0.4}>Photo: WeaponizingArchitecture · CC BY-SA 4.0 (Uniontown today)</Source6>
</>) },
  { from: 79.9, to: 87.34, back: (<><Stock6 n={74} dur={7.44} dim={0} graphics={true} />
<Stock6 n={3} from={2.22} dur={7.44} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={900}><In at={2.22} from="fade"><Plate6 at={2.22}><Label6 at={2.22} size={32} color={C6.ink}>AS THE STORY GOES</Label6></Plate6></In></Center><Source6 at={0.4}>Photo: DanielPenfield · CC BY-SA 4.0 (Pennsylvania steel stacks)</Source6>
</>) },
  { from: 87.34, to: 88.5, back: (<><Stock6 n={80} dur={1.16} dim={0} graphics={true} sepia />
<ArchiveFx /></>), el: (<>
<Source6 at={0.3}>Photo: John Margolies · Library of Congress</Source6>
</>) },
  { from: 88.5, to: 98.58, back: (<><Stock6 n={139} dur={10.08} dim={0} graphics={false} sepia />
<Stock6 n={1} from={5.74} dur={10.08} dim={0} graphics={false} sepia />
<ArchiveFx /></>), el: (<>
<Center x={960} y={880}><In at={2.42} out={5.74} from="fade"><Plate6 at={2.42}><Label6 at={2.42} size={46} color={C6.ink}>SMALL. CHEAP. FAST.</Label6></Plate6></In></Center><Center x={960} y={880}><In at={6.8} from="fade"><Plate6 at={6.8}><Label6 at={6.8} size={44} color={C6.accent}>8 HOURS NEXT TO A FURNACE</Label6></Plate6></In></Center>
</>) },
  { from: 98.58, to: 106.66, back: null, el: (<>
<Evidence src="evidence/t11/history-bigmac.png" size={[2880, 1800]} dur={8.08} frame="screen" marks={[{ x: 868, y: 967, w: 151, h: 58, at: 1.98 }]} zoom={0.9} source="HISTORY.COM · BIG MAC INTRODUCED" url="history.com" />
</>) },
  { from: 106.66, to: 114.42, back: (<><Stock6 n={71} dur={7.76} dim={0.15} graphics={true} />
<Stock6 n={137} from={3.96} dur={7.76} dim={0.15} graphics={true} /></>), el: (<>
<Center x={960} y={960}><In at={1.54} out={2.52} from="fade"><Plate6 at={1.54}><Label6 at={1.54} size={44} color={C6.ink}>TWO PATTIES</Label6></Plate6></In></Center><Center x={960} y={960}><In at={2.52} out={3.96} from="fade"><Plate6 at={2.52}><Label6 at={2.52} size={44} color={C6.ink}>SPECIAL SAUCE</Label6></Plate6></In></Center><Center x={960} y={960}><In at={3.96} from="fade"><Plate6 at={3.96}><Label6 at={3.96} size={44} color={C6.accent}>A THIRD PIECE OF BUN IN THE MIDDLE</Label6></Plate6></In></Center><Source6 at={0.4}>Photo: Evan-Amos · CC0</Source6>
</>) },
  { from: 114.42, to: 118.38, back: (<><Stock6 n={97} dur={3.96} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.14} from="fade"><Plate6 at={3.14}><Label6 at={3.14} size={42} color={C6.ink}>CORPORATE: “WHY MESS WITH IT?”</Label6></Plate6></In></Center>
</>) },
  { from: 118.38, to: 124.64, back: (<><Stock6 n={56} dur={6.26} dim={0} graphics={true} sepia />
<ArchiveFx /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={3.3} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={44} color={C6.ink}>~2 YEARS OF ASKING</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.3} from="fade"><Plate6 at={3.3}><Label6 at={3.3} size={44} color={C6.accent}>A TEST IN ONE TOWN</Label6></Plate6></In></Center>
</>) },
  { from: 124.64, to: 130.52, back: (<><Stock6 n={136} dur={5.88} dim={0} graphics={false} sepia />
<ArchiveFx /></>), el: (<>
<Center x={960} y={880}><In at={2.14} out={3.78} from="fade"><Plate6 at={2.14}><Label6 at={2.14} size={56} color={C6.accent}>BIG MAC · 45¢</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.78} from="fade"><Plate6 at={3.78}><Label6 at={3.78} size={48} color={C6.ink}>SALES JUMP</Label6></Plate6></In></Center><Source6 at={0.3}>McDonald's TV ad · 1974</Source6>
</>) },
  { from: 130.52, to: 134.24, back: (<><Stock6 n={138} dur={3.72} dim={0} graphics={false} sepia />
<ArchiveFx /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={44} color={C6.ink}>1968 · ON EVERY McDONALD'S MENU</Label6></Plate6></In></Center><Source6 at={0.3}>McDonald's TV ad · 1975</Source6>
</>) },
  { from: 134.24, to: 139.28, back: (<><Stock6 n={2} dur={5.04} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={38} color={C6.ink}>MEN WHO WORKED HARD AND COUNTED THEIR CHANGE</Label6></Plate6></In></Center>
</>) },
  { from: 139.28, to: 145.14, back: null, el: (<>
<Drift><Center y={470}><Watches size={340} gap={90} note="WHO CHEAP FOOD WAS MADE FOR" noteAt={3.04} items={[{ min: 10, label: "1968", sub: "AVERAGE WORKER", still: true, at: 0.05 }, { min: 11, label: "2026", sub: "AVERAGE WORKER", still: true, at: 0.05 }, { min: 51, label: "$7.25/HR", sub: "FEDERAL MINIMUM", still: true, blurred: true, q: true, color: C6.loss, at: 0.05 }]} /></Center></Drift>
</>) },
  { from: 145.14, to: 149.16, tag: [2, "How Cheap Was Invented", true], hard: true, back: (<><Stock6 n={9} dur={4.02} dim={0} graphics={true} />
<Stock6 n={12} from={2.7} dur={4.02} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 149.16, to: 154.26, tag: [2, "How Cheap Was Invented", false], back: (<><Stock6 n={42} dur={5.1} dim={0} graphics={true} />
<Stock6 n={13} from={2.82} dur={5.1} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 154.26, to: 157.22, tag: [2, "How Cheap Was Invented", false], back: (<><Stock6 n={11} dur={2.96} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.02} from="fade"><Plate6 at={2.02}><Label6 at={2.02} size={42} color={C6.ink}>A BIG MAC FOR UNDER A DOLLAR</Label6></Plate6></In></Center>
</>) },
  { from: 157.22, to: 159.88, tag: [2, "How Cheap Was Invented", false], back: (<><Stock6 n={103} dur={2.66} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 159.88, to: 165.12, tag: [2, "How Cheap Was Invented", false], back: (<><Stock6 n={124} dur={5.24} dim={0} graphics={true} /></>), el: (<>
<Center y={440}><Stamp at={3.86} text="GREED?" size={110} /></Center>
</>) },
  { from: 165.12, to: 174.36, tag: [2, "How Cheap Was Invented", false], back: (<><Stock6 n={67} dur={9.24} dim={0} graphics={true} />
<Stock6 n={126} from={3.32} dur={9.24} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.24} from="fade"><Plate6 at={4.24}><Label6 at={4.24} size={40} color={C6.ink}>NOT TOTALLY WRONG. WE'LL GET THERE.</Label6></Plate6></In></Center>
</>) },
  { from: 174.36, to: 182.24, tag: [2, "How Cheap Was Invented", false], back: null, el: (<>
<Drift><Center y={470}><Words text="Cheap food was invented. On purpose." at={2.06} size={110} maxW={1600} hl={["invented.", "purpose."]} /></Center></Drift>
</>) },
  { from: 182.24, to: 184.46, tag: [2, "How Cheap Was Invented", false], back: null, el: (<>
<Drift><Center y={470}><Words text="Wichita, Kansas · 1921" at={0.1} size={120} maxW={1600} hl={["1921"]} /></Center></Drift>
</>) },
  { from: 184.46, to: 193.52, tag: [2, "How Cheap Was Invented", false], back: null, el: (<>
<Evidence src="evidence/t11/el-hai-wc.png" size={[2880, 1800]} dur={9.06} frame="screen" marks={[{ x: 1032, y: 601, w: 368, h: 86, at: 7.7 }]} zoom={0.9} source="JACK EL-HAI · WHITE CASTLE HISTORY" url="el-hai.com" />
</>) },
  { from: 193.52, to: 199.18, tag: [2, "How Cheap Was Invented", false], back: (<><Stock6 n={16} dur={5.66} dim={0} graphics={true} />
<Stock6 n={15} from={3.18} dur={5.66} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.18} from="fade"><Plate6 at={3.18}><Label6 at={3.18} size={42} color={C6.accent}>AMERICANS WERE SCARED OF HAMBURGER</Label6></Plate6></In></Center>
</>) },
  { from: 199.18, to: 205.46, tag: [2, "How Cheap Was Invented", false], back: (<><Stock6 n={75} dur={6.28} dim={0} graphics={true} sepia />
<ArchiveFx /></>), el: (<>

</>) },
  { from: 205.46, to: 210.54, tag: [2, "How Cheap Was Invented", false], back: (<><Stock6 n={76} dur={5.08} dim={0} graphics={true} sepia />
<ArchiveFx /></>), el: (<>
<Source6 at={0.3}>Chicago stockyards, 1905 · public domain</Source6>
</>) },
  { from: 210.54, to: 217.72, tag: [2, "How Cheap Was Invented", false], back: null, el: (<>
<Drift><Center y={430}><Words text="It sells trust." at={2.98} size={150} maxW={1600} hl={["trust."]} /></Center><Center x={960} y={740}><In at={4.52} from="fade"><Plate6 at={4.52}><Label6 at={4.52} size={40} color={C6.accent}>WHITE = CLEAN</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 217.72, to: 220.12, tag: [2, "How Cheap Was Invented", false], back: (<><Stock6 n={69} dur={2.4} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 220.12, to: 229.18, tag: [2, "How Cheap Was Invented", false], back: null, el: (<>
<Evidence src="evidence/t11/el-hai-wc.png" size={[2880, 1800]} dur={9.06} frame="screen" marks={[{ x: 200, y: 601, w: 250, h: 86, at: 5.94 }]} zoom={0.9} source="JACK EL-HAI · “13 WEEKS EATING NOTHING BUT WHITE CASTLE”" url="el-hai.com" />
</>) },
  { from: 229.18, to: 232.22, tag: [2, "How Cheap Was Invented", false], back: null, el: (<>
<Drift><Center y={430}><BigNum at={1.04} size={260} label="A WHITE CASTLE HAMBURGER · 1921">5¢</BigNum></Center><Center x={960} y={800}><In at={2.14} from="fade"><Plate6 at={2.14}><Label6 at={2.14} size={40} color={C6.accent}>“BUY 'EM BY THE SACK”</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 232.22, to: 237.8, tag: [2, "How Cheap Was Invented", false], back: (<><Stock6 n={55} dur={5.58} dim={0} graphics={true} sepia />
<ArchiveFx /></>), el: (<>

</>) },
  { from: 237.8, to: 243.86, tag: [2, "How Cheap Was Invented", false], back: null, el: (<>
<Drift><Center y={420}><Words text="Not charity. A promise." at={0.1} size={130} maxW={1600} hl={["promise."]} /></Center><Center x={960} y={740}><In at={3.3} from="fade"><Plate6 at={3.3}><Label6 at={3.3} size={38} color={C6.accent}>YOU CAN TRUST THIS · YOU CAN AFFORD THIS</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 243.86, to: 248.76, tag: [2, "How Cheap Was Invented", false], back: (<><Stock6 n={121} dur={4.9} dim={0} graphics={true} /></>), el: (<>
<Source6 at={0.3}>Photo: Andre Carrotflower · CC BY-SA 4.0</Source6>
</>) },
  { from: 248.76, to: 258.32, tag: [3, "The Machine", true], hard: true, back: (<><Stock6 n={77} dur={9.56} dim={0} graphics={true} />
<Stock6 n={162} from={3.78} dur={9.56} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={3.78} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>SAN BERNARDINO, CALIFORNIA · 1948</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.78} from="fade"><Plate6 at={3.78}><Label6 at={3.78} size={42} color={C6.ink}>DICK & MAC McDONALD</Label6></Plate6></In></Center><Source6 at={0.4}>The original site today · Photo: Marykdan, CC BY-SA 4.0 · museum footage: YouTube</Source6>
</>) },
  { from: 258.32, to: 263.94, tag: [3, "The Machine", false], back: (<><Stock6 n={57} dur={5.62} dim={0} graphics={true} sepia />
<ArchiveFx /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={38} color={C6.ink}>CARHOPS · A LONG MENU · BARBECUE</Label6></Plate6></In></Center>
</>) },
  { from: 263.94, to: 271.1, tag: [3, "The Machine", false], back: null, el: (<>
<Drift><Center y={430}><Stamp at={3.74} text="CLOSED" size={130} /></Center><Center x={960} y={760}><In at={5.4} from="fade"><Plate6 at={5.4}><Label6 at={5.4} size={44} color={C6.accent}>FOR THREE MONTHS</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 271.1, to: 277.6, tag: [3, "The Machine", false], back: null, el: (<>
<Drift><Center y={500}><MenuShrink at={0.1} cutAt={5.26} /></Center></Drift>
</>) },
  { from: 277.6, to: 285.24, tag: [3, "The Machine", false], back: (<><Stock6 n={163} dur={7.64} dim={0} graphics={false} />
<Stock6 n={161} from={3.14} dur={7.64} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={3.14} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.ink}>PAPER WRAPPERS · NO TIPPING</Label6></Plate6></In></Center><Center x={960} y={880}><In at={4.3} from="fade"><Plate6 at={4.3}><Label6 at={4.3} size={40} color={C6.accent}>15¢ HAMBURGER · ABOUT HALF THE OLD PRICE</Label6></Plate6></In></Center><Source6 at={0.3}>First McDonald's Museum, San Bernardino · YouTube 0d9BDHtAeMM</Source6>
</>) },
  { from: 285.24, to: 295.3, tag: [3, "The Machine", false], back: (<><Stock6 n={17} dur={10.06} dim={0} graphics={true} />
<Stock6 n={18} from={6.22} dur={10.06} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.18} from="fade"><Plate6 at={4.18}><Label6 at={4.18} size={38} color={C6.ink}>AS THE STORY GOES: CHALK ON A TENNIS COURT</Label6></Plate6></In></Center>
</>) },
  { from: 295.3, to: 301.42, tag: [3, "The Machine", false], back: (<><Stock6 n={68} dur={6.12} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={3.28} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>ONE WORKER · ONE JOB</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.28} from="fade"><Plate6 at={3.28}><Label6 at={3.28} size={44} color={C6.accent}>THE SPEEDEE SERVICE SYSTEM</Label6></Plate6></In></Center>
</>) },
  { from: 301.42, to: 308.14, tag: [3, "The Machine", false], back: (<><Stock6 n={81} dur={6.72} dim={0} graphics={true} sepia />
<ArchiveFx /></>), el: (<>
<Center x={960} y={880}><In at={2.08} out={3.32} from="fade"><Plate6 at={2.08}><Label6 at={2.08} size={44} color={C6.ink}>PROFITS DROPPED</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.32} from="fade"><Plate6 at={3.32}><Label6 at={3.32} size={40} color={C6.ink}>THE FIRED CARHOPS CAME BY TO LAUGH</Label6></Plate6></In></Center><Source6 at={0.4}>Photo: Bruce Marlin · CC BY-SA 2.5 (1955 replica, Des Plaines)</Source6>
</>) },
  { from: 308.14, to: 314.84, tag: [3, "The Machine", false], back: (<><Stock6 n={117} dur={6.7} dim={0} graphics={true} sepia />
<ArchiveFx /></>), el: (<>
<Center x={960} y={880}><In at={2.22} out={3.46} from="fade"><Plate6 at={2.22}><Label6 at={2.22} size={46} color={C6.ink}>FAMILIES</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.46} out={4.94} from="fade"><Plate6 at={3.46}><Label6 at={3.46} size={46} color={C6.ink}>WORKING PEOPLE</Label6></Plate6></In></Center><Center x={960} y={880}><In at={4.94} from="fade"><Plate6 at={4.94}><Label6 at={4.94} size={46} color={C6.accent}>KIDS WITH POCKET CHANGE</Label6></Plate6></In></Center><Source6 at={0.3}>Photo: David E. Lucas · public domain</Source6>
</>) },
  { from: 314.84, to: 323.52, tag: [3, "The Machine", false], back: null, el: (<>
<Drift><Center y={440}><Words text="“Our whole concept was based on speed, lower prices, and volume.”" at={4.1} size={86} maxW={1500} hl={["speed,", "prices,", "volume.\u201d"]} /></Center><Center y={690}><Label6 at={4.1} size={28} color={C6.mint}>DICK McDONALD</Label6></Center></Drift>
</>) },
  { from: 323.52, to: 333.96, tag: [3, "The Machine", false], back: null, el: (<>
<Drift><Center x={960} y={180}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={40} color={C6.accent}>THAT'S THE MACHINE</Label6></Plate6></In></Center><Center y={540}><ThreeMoves steps={[{ word: "LOWER PRICE", sub: "sell it cheap", at: 5.2 }, { word: "BIGGER CROWD", sub: "sell a lot, fast", at: 6.32 }, { word: "CHEAPER", sub: "to make each one", at: 8.72 }]} /></Center></Drift>
</>) },
  { from: 333.96, to: 341.22, tag: [3, "The Machine", false], back: (<><Stock6 n={79} dur={7.26} dim={0} graphics={true} />
<Stock6 n={78} from={5.04} dur={7.26} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.3} out={5.04} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={38} color={C6.ink}>RAY KROC · MILKSHAKE MACHINE SALESMAN</Label6></Plate6></In></Center><Center x={960} y={880}><In at={5.04} from="fade"><Plate6 at={5.04}><Label6 at={5.04} size={42} color={C6.accent}>…TURNS IT INTO AN EMPIRE</Label6></Plate6></In></Center><Source6 at={0.4}>Photo: Northwalker · CC0 (Downey, CA)</Source6>
</>) },
  { from: 341.22, to: 345.8, tag: [3, "The Machine", false], back: (<><Stock6 n={49} dur={4.58} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.76} from="fade"><Plate6 at={2.76}><Label6 at={2.76} size={42} color={C6.accent}>HARRY SONNEBORN · THE MONEY MAN</Label6></Plate6></In></Center>
</>) },
  { from: 345.8, to: 353.26, tag: [3, "The Machine", false], back: null, el: (<>
<Drift><Center y={440}><Words text="“We are not technically in the food business. We are in the real estate business.”" at={2.54} size={80} maxW={1500} hl={["real", "estate"]} /></Center><Center y={690}><Label6 at={2.54} size={28} color={C6.mint}>HARRY SONNEBORN, AS HE REPORTEDLY PUT IT</Label6></Center></Drift>
</>) },
  { from: 353.26, to: 361.4, tag: [3, "The Machine", false], back: (<><Stock6 n={19} dur={8.14} dim={0} graphics={true} />
<Stock6 n={134} from={5.16} dur={8.14} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={6.1} from="fade"><Plate6 at={6.1}><Label6 at={6.1} size={42} color={C6.accent}>“…SO OUR TENANTS CAN PAY US RENT”</Label6></Plate6></In></Center>
</>) },
  { from: 361.4, to: 369.6, tag: [3, "The Machine", false], back: (<><Stock6 n={21} dur={8.2} dim={0} graphics={true} />
<Stock6 n={133} from={4.56} dur={8.2} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={4.56} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>THE BURGER BRINGS PEOPLE IN</Label6></Plate6></In></Center><Center x={960} y={880}><In at={4.56} from="fade"><Plate6 at={4.56}><Label6 at={4.56} size={42} color={C6.accent}>THE RESTAURANT PAYS RENT TO McDONALD'S</Label6></Plate6></In></Center>
</>) },
  { from: 369.6, to: 372.3, tag: [3, "The Machine", false], back: (<><Stock6 n={20} dur={2.7} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 372.3, to: 382.58, tag: [4, "Price Wars", true], hard: true, back: (<><Stock6 n={58} dur={10.28} dim={0} graphics={true} sepia />
<Stock6 n={82} from={4.4} dur={10.28} dim={0} graphics={true} sepia />
<ArchiveFx /></>), el: (<>
<Center x={960} y={880}><In at={4.4} out={9.28} from="fade"><Plate6 at={4.4}><Label6 at={4.4} size={40} color={C6.ink}>WHEN THINGS GOT SLOW: ONE LEVER</Label6></Plate6></In></Center><Center x={960} y={880}><In at={9.28} from="fade"><Plate6 at={9.28}><Label6 at={9.28} size={64} color={C6.accent}>PRICE.</Label6></Plate6></In></Center>
</>) },
  { from: 382.58, to: 392.32, tag: [4, "Price Wars", false], back: null, el: (<>
<Drift><Center y={460}><MenuBoard at={0.1} title="VALUE MENU · 1989" w={900} rh={92} foot="ILLUSTRATION" rows={[{ name: "BURGER", price: "99¢", at: 3.98 }, { name: "FRIES", price: "99¢", at: 3.98 }, { name: "DRINK", price: "99¢", at: 3.98 }, { name: "…AND MORE", price: "99¢", at: 3.98 }]} /></Center><Center x={960} y={960}><In at={7.72} from="fade"><Plate6 at={7.72}><Label6 at={7.72} size={40} color={C6.accent}>EVERYBODY COPIED IT</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 392.32, to: 403.02, tag: [4, "Price Wars", false], back: (<><Stock6 n={142} dur={10.7} dim={0} graphics={false} />
<Stock6 n={141} from={4.72} dur={10.7} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={150}><In at={4.72} from="fade"><Plate6 at={4.72}><Label6 at={4.72} size={40} color={C6.accent}>1997 · CAMPAIGN 55</Label6></Plate6></In></Center><Source6 at={0.3}>Footage: AP Archive · Feb 1997</Source6>
</>) },
  { from: 403.02, to: 409.46, tag: [4, "Price Wars", false], back: null, el: (<>
<Drift><Center y={470}><Words text="$1.90 → 55¢" at={4.52} size={200} hl={["55¢"]} /></Center><Center x={960} y={780}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={38} color={C6.ink}>A BIG MAC, NORMALLY ~$1.90</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 409.46, to: 415.96, tag: [4, "Price Wars", false], back: (<><Stock6 n={140} dur={6.5} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={150}><In at={4.2} from="fade"><Plate6 at={4.2}><Label6 at={4.2} size={40} color={C6.accent}>*WITH PURCHASE OF FRIES AND A DRINK</Label6></Plate6></In></Center><Source6 at={0.3}>McDonald's TV ad · 1997</Source6>
</>) },
  { from: 415.96, to: 423.04, tag: [4, "Price Wars", false], back: (<><Stock6 n={143} dur={7.08} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={150}><In at={3.08} from="fade"><Plate6 at={3.08}><Label6 at={3.08} size={38} color={C6.ink}>PEOPLE DIDN'T UNDERSTAND WHAT TO ORDER</Label6></Plate6></In></Center><Source6 at={0.3}>Footage: AP Archive · 1997</Source6>
</>) },
  { from: 423.04, to: 426.32, tag: [4, "Price Wars", false], back: null, el: (<>
<Evidence src="evidence/t11/spokesman-c55.png" size={[2880, 1800]} dur={3.28} frame="screen" marks={[{ x: 64, y: 592, w: 448, h: 82, at: 0.05 }]} zoom={0.9} source="THE SPOKESMAN-REVIEW · AP · JUNE 5, 1997" url="spokesman.com" />
</>) },
  { from: 426.32, to: 431.16, tag: [4, "Price Wars", false], back: (<><Stock6 n={88} dur={4.84} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.82} from="fade"><Plate6 at={2.82}><Label6 at={2.82} size={38} color={C6.ink}>BURGER KING: WHOPPERS FOR 99¢ IN SOME PLACES</Label6></Plate6></In></Center><Source6 at={0.4}>Photo: PaulGorduiz106 · CC BY-SA 4.0</Source6>
</>) },
  { from: 431.16, to: 440.2, tag: [4, "Price Wars", false], back: null, el: (<>
<Evidence src="evidence/t11/mcspot-reuters-jun97.png" size={[2880, 1800]} dur={9.04} frame="screen" marks={[{ x: 636, y: 892, w: 71, h: 34, at: 3.72 }]} zoom={0.9} source="REUTERS · JUNE 4, 1997 · VIA McSPOTLIGHT.ORG" url="mcspotlight.org" />
</>) },
  { from: 440.2, to: 450.4, tag: [4, "Price Wars", false], back: null, el: (<>
<Drift><Center y={500}><TwoTags at={0.1} bAt={2.4} noteAt={4.84} /></Center></Drift>
</>) },
  { from: 450.4, to: 456.88, tag: [4, "Price Wars", false], back: (<><Stock6 n={51} dur={6.48} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.42} from="fade"><Plate6 at={1.42}><Label6 at={1.42} size={46} color={C6.accent}>29 YEARS LATER…</Label6></Plate6></In></Center>
</>) },
  { from: 456.88, to: 466.24, tag: [5, "The Dollar", true], hard: true, back: (<><Stock6 n={118} dur={9.36} dim={0} graphics={true} />
<Stock6 n={10} from={3.96} dur={9.36} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={44} color={C6.ink}>THE 2000s</Label6></Plate6></In></Center>
</>) },
  { from: 466.24, to: 474.66, tag: [5, "The Dollar", false], back: null, el: (<>
<Drift><Center y={440}><MenuBoard at={0.1} title="DOLLAR MENU" w={860} rh={92} foot="ILLUSTRATION" rows={[{ name: "SANDWICH", price: "$1" }, { name: "FRIES", price: "$1" }, { name: "DRINK", price: "$1" }]} /></Center><Center x={960} y={920}><In at={6.18} from="fade"><Plate6 at={6.18}><Label6 at={6.18} size={46} color={C6.accent}>BORN OUT OF PANIC</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 474.66, to: 483.72, tag: [5, "The Dollar", false], back: null, el: (<>
<Drift><Center y={440}><BigNum at={7.24} size={200} color={C6.loss} label="FIRST QUARTERLY LOSS EVER · Q4 2002">−$343M</BigNum></Center><Source6 at={0.4}>AP · CBS News · Jan 2003</Source6></Drift>
</>) },
  { from: 483.72, to: 491.12, tag: [5, "The Dollar", false], back: (<><Stock6 n={22} dur={7.4} dim={0} graphics={true} />
<Stock6 n={124} from={3.04} dur={7.4} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} out={3.04} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={40} color={C6.ink}>CLOSING HUNDREDS OF RESTAURANTS</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.04} from="fade"><Plate6 at={3.04}><Label6 at={3.04} size={42} color={C6.loss}>STOCK: ~$15 · LOWEST IN YEARS</Label6></Plate6></In></Center>
</>) },
  { from: 491.12, to: 494.9, tag: [5, "The Dollar", false], back: (<><Stock6 n={90} dur={3.78} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 494.9, to: 502.68, tag: [5, "The Dollar", false], back: (<><Stock6 n={11} dur={7.78} dim={0} graphics={true} />
<Stock6 n={117} from={4.92} dur={7.78} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.56} from="fade"><Plate6 at={3.56}><Label6 at={3.56} size={40} color={C6.ink}>JIM CANTALUPO · ~30 YEARS AT McDONALD'S</Label6></Plate6></In></Center><Source6 at={0.3}>ILLUSTRATIVE FOOTAGE</Source6>
</>) },
  { from: 502.68, to: 510.22, tag: [5, "The Dollar", false], back: (<><Stock6 n={89} dur={7.54} dim={0} graphics={true} />
<Stock6 n={120} from={3.76} dur={7.54} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} out={6.72} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={42} color={C6.ink}>CEO AGAIN · JANUARY 1, 2003</Label6></Plate6></In></Center><Center x={960} y={880}><In at={6.72} from="fade"><Plate6 at={6.72}><Label6 at={6.72} size={64} color={C6.accent}>CHEAP.</Label6></Plate6></In></Center>
</>) },
  { from: 510.22, to: 516.22, tag: [5, "The Dollar", false], back: null, el: (<>
<Evidence src="evidence/t11/ljworld-dollar.png" size={[2880, 1800]} dur={6.0} frame="screen" marks={[{ x: 1126, y: 599, w: 188, h: 40, at: 0.05 }]} zoom={0.9} source="LAWRENCE JOURNAL-WORLD · AP · DEC 2002" url="www2.ljworld.com" />
</>) },
  { from: 516.22, to: 522.62, tag: [5, "The Dollar", false], back: (<><Stock6 n={14} dur={6.4} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.04} from="fade"><Plate6 at={1.04}><Label6 at={1.04} size={44} color={C6.accent}>CUSTOMERS CAME BACK</Label6></Plate6></In></Center>
</>) },
  { from: 522.62, to: 531.32, tag: [5, "The Dollar", false], back: (<><Stock6 n={85} dur={8.7} dim={0} graphics={true} />
<Stock6 n={67} from={4.5} dur={8.7} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={7.48} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>ORLANDO · APRIL 2004</Label6></Plate6></In></Center><Center x={960} y={880}><In at={7.48} from="fade"><Plate6 at={7.48}><Label6 at={7.48} size={46} color={C6.ink}>HE WAS 60</Label6></Plate6></In></Center><Source6 at={0.4}>Photo: Visitor7 · CC BY-SA 3.0</Source6>
</>) },
  { from: 531.32, to: 535.28, tag: [5, "The Dollar", false], back: (<><Stock6 n={44} dur={3.96} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 535.28, to: 540.56, tag: [5, "The Dollar", false], back: (<><Stock6 n={115} dur={5.28} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.98} from="fade"><Plate6 at={1.98}><Label6 at={1.98} size={40} color={C6.ink}>~10 YEARS · THE FLOOR OF AMERICAN LIFE</Label6></Plate6></In></Center>
</>) },
  { from: 540.56, to: 547.42, tag: [5, "The Dollar", false], back: (<><Stock6 n={92} dur={6.86} dim={0} graphics={true} />
<Stock6 n={9} from={3.46} dur={6.86} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} out={3.46} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={42} color={C6.ink}>A FAMILY OF FOUR · UNDER $10</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.46} from="fade"><Plate6 at={3.46}><Label6 at={3.46} size={42} color={C6.ink}>A FEW QUARTERS · A WHOLE MEAL</Label6></Plate6></In></Center>
</>) },
  { from: 547.42, to: 560.06, tag: [5, "The Dollar", false], back: null, el: (<>
<Drift><Center y={520}><DollarPress at={0.1} stayAt={9.42} items={[{ text: "BEEF", at: 3.16 }, { text: "CHEESE", at: 4.22 }, { text: "BUN", at: 5.0 }, { text: "PAPER", at: 5.6 }, { text: "PEOPLE", at: 6.3 }]} /></Center></Drift>
</>) },
  { from: 560.06, to: 565.16, tag: [5, "The Dollar", false], back: (<><Stock6 n={107} dur={5.1} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.48} from="fade"><Plate6 at={2.48}><Label6 at={2.48} size={44} color={C6.accent}>THE ONLY QUESTION IS WHO</Label6></Plate6></In></Center>
</>) },
  { from: 565.16, to: 578.5, tag: [6, "The Squeeze", true], hard: true, back: (<><Stock6 n={26} dur={13.34} dim={0} graphics={true} />
<Stock6 n={84} from={9.06} dur={13.34} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.3} out={9.06} from="fade"><Plate6 at={0.3}><Label6 at={0.3} size={38} color={C6.ink}>2008 · BEEF AND CHEESE GETTING PRICIER</Label6></Plate6></In></Center><Center x={960} y={880}><In at={9.06} from="fade"><Plate6 at={9.06}><Label6 at={9.06} size={38} color={C6.ink}>A $1 DOUBLE CHEESEBURGER “JUST DIDN'T WORK”</Label6></Plate6></In></Center><Source6 at={9.06}>Photo: Willis Lam · CC BY-SA 2.0</Source6>
</>) },
  { from: 578.5, to: 588.68, tag: [6, "The Squeeze", false], back: null, el: (<>
<Evidence src="evidence/t11/newser-mcdouble.png" size={[2880, 1800]} dur={10.18} frame="screen" marks={[{ x: 792, y: 669, w: 344, h: 88, at: 2.88 }, { x: 606, y: 669, w: 168, h: 88, at: 7.44 }]} zoom={0.9} source="NEWSER · OCT 2008" url="newser.com" />
</>) },
  { from: 588.68, to: 595.82, tag: [6, "The Squeeze", false], back: null, el: (<>
<Drift><Center y={500}><CheeseStack at={0.05} liftAt={0.4} /></Center></Drift>
</>) },
  { from: 595.82, to: 602.56, tag: [6, "The Squeeze", false], back: (<><Stock6 n={27} dur={6.74} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.96} from="fade"><Plate6 at={2.96}><Label6 at={2.96} size={40} color={C6.accent}>−1 SLICE ≈ 6¢ A SANDWICH · ANALYST ESTIMATE</Label6></Plate6></In></Center>
</>) },
  { from: 602.56, to: 606.52, tag: [6, "The Squeeze", false], back: (<><Stock6 n={83} dur={3.96} dim={0.35} graphics={true} /></>), el: (<>
<Center y={430}><Words text="Six cents." at={0.1} size={170} maxW={1600} hl={["cents."]} /></Center><Center x={960} y={760}><In at={1.3} from="fade"><Plate6 at={1.3}><Label6 at={1.3} size={40} color={C6.ink}>THAT'S HOW TIGHT THE MATH HAD BECOME</Label6></Plate6></In></Center><Source6 at={0.4}>Photo: TheDapperDan · public domain</Source6>
</>) },
  { from: 606.52, to: 613.98, tag: [6, "The Squeeze", false], back: (<><Stock6 n={127} dur={7.46} dim={0} graphics={true} />
<Stock6 n={88} from={3.22} dur={7.46} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.22} from="fade"><Plate6 at={3.22}><Label6 at={3.22} size={36} color={C6.ink}>2009 · BURGER KING: SELL A DOUBLE CHEESEBURGER FOR $1</Label6></Plate6></In></Center><Source6 at={0.4}>Photo: Quintin Soloviev · CC BY 4.0</Source6>
</>) },
  { from: 613.98, to: 618.7, tag: [6, "The Squeeze", false], back: null, el: (<>
<Drift><Center y={430}><Words text="Voted against it. Twice." at={0.1} size={130} maxW={1600} hl={["Twice."]} /></Center><Center x={960} y={740}><In at={3.06} from="fade"><Plate6 at={3.06}><Label6 at={3.06} size={42} color={C6.accent}>CORPORATE DID IT ANYWAY</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 618.7, to: 629.28, tag: [6, "The Squeeze", false], back: null, el: (<>
<Evidence src="evidence/t11/nrn-bk-top.png" size={[2880, 1800]} dur={10.58} frame="screen" marks={[{ x: 1506, y: 781, w: 634, h: 80, at: 8.68 }]} zoom={0.9} source="NATION'S RESTAURANT NEWS · NOV 2009" url="nrn.com" /><Center x={960} y={960}><In at={8.68} from="fade"><Plate6 at={8.68}><Label6 at={8.68} size={32} color={C6.accent}>~80% OF BK'S U.S. FRANCHISE OWNERS · SUED THEIR OWN COMPANY</Label6></Plate6></In></Center>
</>) },
  { from: 629.28, to: 634.96, tag: [6, "The Squeeze", false], back: null, el: (<>
<Evidence src="evidence/t11/nrn-bk.png" size={[2880, 1800]} dur={5.68} frame="screen" marks={[{ x: 404, y: 702, w: 156, h: 40, at: 3.06 }]} zoom={0.9} source="NATION'S RESTAURANT NEWS · NOV 13, 2009" url="nrn.com" />
</>) },
  { from: 634.96, to: 645.68, tag: [6, "The Squeeze", false], back: null, el: (<>
<Drift><Center y={480}><DimeLoss at={0.05} costAt={4.12} lossAt={8.06} /></Center></Drift>
</>) },
  { from: 645.68, to: 649.08, tag: [6, "The Squeeze", false], back: (<><Stock6 n={99} dur={3.4} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={38} color={C6.accent}>THE MORE POPULAR THE DEAL, THE MORE THEY LOST</Label6></Plate6></In></Center>
</>) },
  { from: 649.08, to: 654.42, tag: [6, "The Squeeze", false], back: null, el: (<>
<Evidence src="evidence/t11/nbcmiami-bk.png" size={[2880, 1800]} dur={5.34} frame="screen" marks={[{ x: 644, y: 654, w: 88, h: 40, at: 3.62 }]} zoom={0.9} source="NBC MIAMI · 2011" url="nbcmiami.com" />
</>) },
  { from: 654.42, to: 660.68, tag: [6, "The Squeeze", false], back: (<><Stock6 n={28} dur={6.26} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} out={2.36} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={42} color={C6.ink}>CASE DISMISSED · FALL 2010</Label6></Plate6></In></Center><Center x={960} y={880}><In at={2.36} from="fade"><Plate6 at={2.36}><Label6 at={2.36} size={40} color={C6.ink}>SETTLED IN 2011 · THE OWNERS GOT NO MONEY</Label6></Plate6></In></Center>
</>) },
  { from: 660.68, to: 671.74, tag: [6, "The Squeeze", false], back: null, el: (<>
<Drift><Center y={440}><MenuBoard at={0.1} title="DOLLAR MENU & MORE · 2013" w={880} rh={92} foot="ILLUSTRATION" rows={[{ name: "SOME ITEMS", price: "$1", at: 7.8 }, { name: "SOME ITEMS", price: "$2", at: 8.94 }, { name: "SOME ITEMS", price: "$5", at: 9.64 }]} /></Center></Drift>
</>) },
  { from: 671.74, to: 673.66, tag: [6, "The Squeeze", false], back: (<><Stock6 n={119} dur={1.92} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={42} color={C6.ink}>SAME IDEA, TECHNICALLY</Label6></Plate6></In></Center>
</>) },
  { from: 673.66, to: 678.38, tag: [6, "The Squeeze", false], back: (<><Stock6 n={100} dur={4.72} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.58} from="fade"><Plate6 at={3.58}><Label6 at={3.58} size={46} color={C6.ink}>IT WASN'T THE SAME</Label6></Plate6></In></Center>
</>) },
  { from: 678.38, to: 686.22, tag: [6, "The Squeeze", false], back: (<><Stock6 n={62} dur={7.84} dim={0} graphics={true} />
<Stock6 n={25} from={4.36} dur={7.84} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={4.36} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>THE OWNERS ATE THE DIFFERENCE</Label6></Plate6></In></Center><Center x={960} y={880}><In at={4.36} from="fade"><Plate6 at={4.36}><Label6 at={4.36} size={46} color={C6.accent}>…UNTIL THEY STOPPED</Label6></Plate6></In></Center>
</>) },
  { from: 686.22, to: 691.84, tag: [7, "Follow the Money", true], hard: true, back: (<><Stock6 n={52} dur={5.62} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={3.48} from="fade"><Plate6 at={3.48}><Label6 at={3.48} size={42} color={C6.ink}>LOS ANGELES · LAST FALL</Label6></Plate6></In></Center>
</>) },
  { from: 691.84, to: 694.12, tag: [7, "Follow the Money", false], back: (<><Stock6 n={86} dur={2.28} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={42} color={C6.ink}>MacARTHUR PARK</Label6></Plate6></In></Center><Source6 at={0.3}>Photo: peter boy12qq12 · CC BY 3.0</Source6>
</>) },
  { from: 694.12, to: 699.14, tag: [7, "Follow the Money", false], back: null, el: (<>
<Evidence src="evidence/t11/lvsun-latimes-top.png" size={[2880, 1800]} dur={5.02} frame="screen" marks={[{ x: 1131, y: 492, w: 325, h: 74, at: 0.94 }]} zoom={0.9} source="LOS ANGELES TIMES · NOV 2025 · VIA LAS VEGAS SUN" url="lasvegassun.com" />
</>) },
  { from: 699.14, to: 706.36, tag: [7, "Follow the Money", false], back: (<><Stock6 n={87} dur={7.22} dim={0} graphics={true} />
<Stock6 n={63} from={2.76} dur={7.22} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} out={2.76} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={40} color={C6.ink}>MARIAM · REGISTERED NURSE AT UCLA</Label6></Plate6></In></Center><Center x={960} y={880}><In at={2.76} from="fade"><Plate6 at={2.76}><Label6 at={2.76} size={40} color={C6.accent}>+ A SECOND JOB: HOME CAREGIVER</Label6></Plate6></In></Center><Source6 at={0.3}>Photo: Coolcaesar · CC BY 4.0 · nurse: illustrative footage</Source6>
</>) },
  { from: 706.36, to: 715.2, tag: [7, "Follow the Money", false], back: (<><Stock6 n={32} dur={8.84} dim={0} graphics={true} />
<Stock6 n={33} from={5.8} dur={8.84} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.06} out={5.8} from="fade"><Plate6 at={4.06}><Label6 at={4.06} size={44} color={C6.ink}>2 COFFEES + 1 SODA</Label6></Plate6></In></Center><Center x={960} y={880}><In at={6.76} from="fade"><Plate6 at={6.76}><Label6 at={6.76} size={64} color={C6.loss}>≈ $20</Label6></Plate6></In></Center><Source6 at={0.3}>ILLUSTRATIVE FOOTAGE</Source6>
</>) },
  { from: 715.2, to: 721.7, tag: [7, "Follow the Money", false], back: null, el: (<>
<Evidence src="evidence/t11/aol-latimes.png" size={[2880, 1800]} dur={6.5} frame="screen" marks={[{ x: 162, y: 791, w: 186, h: 38, at: 2.48 }, { x: 801, y: 791, w: 224, h: 38, at: 4.68 }]} zoom={0.9} source="LOS ANGELES TIMES · NOV 2025 · VIA AOL" url="aol.com" />
</>) },
  { from: 721.7, to: 725.86, tag: [7, "Follow the Money", false], back: (<><Stock6 n={98} dur={4.16} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={42} color={C6.ink}>HER BROTHER: A CASHIER</Label6></Plate6></In></Center><Source6 at={0.3}>ILLUSTRATIVE FOOTAGE</Source6>
</>) },
  { from: 725.86, to: 731.12, tag: [7, "Follow the Money", false], back: null, el: (<>
<Evidence src="evidence/t11/aol-latimes.png" size={[2880, 1800]} dur={5.26} frame="screen" marks={[{ x: 327, y: 1467, w: 147, h: 38, at: 2.14 }]} zoom={0.9} source="LOS ANGELES TIMES · NOV 2025 · VIA AOL" url="aol.com" />
</>) },
  { from: 731.12, to: 737.16, tag: [7, "Follow the Money", false], back: null, el: (<>
<Drift><Center y={450}><Watches size={320} gap={80} note="A NURSE · TWO JOBS · “BARELY AFFORD”" noteAt={1.62} items={[{ min: 10, label: "1968", sub: "AVERAGE WORKER", still: true, at: 0.05 }, { min: 11, label: "2026", sub: "AVERAGE WORKER", still: true, at: 0.05 }, { min: 51, label: "$7.25/HR", sub: "FEDERAL MINIMUM", still: true, blurred: true, q: true, color: C6.loss, at: 0.05 }]} /></Center></Drift>
</>) },
  { from: 737.16, to: 743.62, tag: [7, "Follow the Money", false], back: (<><Stock6 n={53} dur={6.46} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.38} from="fade"><Plate6 at={2.38}><Label6 at={2.38} size={42} color={C6.ink}>THAT 51 WILL EXPLAIN HER</Label6></Plate6></In></Center><Source6 at={0.3}>ILLUSTRATIVE FOOTAGE</Source6>
</>) },
  { from: 743.62, to: 749.76, tag: [7, "Follow the Money", false], back: (<><Stock6 n={24} dur={6.14} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={2.4} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={46} color={C6.accent}>WHO GETS YOUR $10?</Label6></Plate6></In></Center><Center x={960} y={880}><In at={2.4} from="fade"><Plate6 at={2.4}><Label6 at={2.4} size={38} color={C6.ink}>$10 AT A McDONALD'S THE COMPANY RUNS ITSELF</Label6></Plate6></In></Center>
</>) },
  { from: 749.76, to: 758.0, tag: [7, "Follow the Money", false], back: null, el: (<>
<Drift><Center y={560}><TenSplit at={0.05} w={1500} hlLast={7.22} note="McDONALD'S-OPERATED RESTAURANTS · 2025 ANNUAL REPORT · ROUNDED" stacks={[{ label: "FOOD & PAPER · 31%", value: "~$3.00", pct: 31, at: 0.05 }, { label: "PEOPLE · 30%", value: "~$3.00", pct: 30, at: 2.04 }, { label: "BUILDING & EVERYTHING ELSE · 24%", value: "~$2.40", pct: 24, at: 3.64 }, { label: "LEFT · 15%", value: "~$1.50", pct: 15, at: 7.22 }]} /></Center></Drift>
</>) },
  { from: 758.0, to: 766.76, tag: [7, "Follow the Money", false], back: null, el: (<>
<Evidence src="evidence/t11/mcd-letter-95.png" size={[2880, 1800]} dur={8.76} frame="screen" marks={[{ x: 2100, y: 594, w: 64, h: 32, at: 2.5 }]} zoom={0.9} source="McDONALD'S OPEN LETTER · MAY 2024" url="web.archive.org" /><Center x={960} y={960}><In at={5.98} from="fade"><Plate6 at={5.98}><Label6 at={5.98} size={34} color={C6.accent}>THEY PAY McDONALD'S RENT AND FEES</Label6></Plate6></In></Center>
</>) },
  { from: 766.76, to: 776.86, tag: [7, "Follow the Money", false], back: null, el: (<>
<Drift><Center y={500}><Jars at={0.05} aAt={4.68} bAt={1.5} /></Center><Source6 at={0.3}>OUR MATH · McDONALD'S 2025 10-K · MARGIN PER $1 OF REVENUE</Source6></Drift>
</>) },
  { from: 776.86, to: 786.92, tag: [7, "Follow the Money", false], back: (<><Stock6 n={20} dur={10.06} dim={0} graphics={true} />
<Stock6 n={21} from={5.6} dur={10.06} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.56} out={5.6} from="fade"><Plate6 at={2.56}><Label6 at={2.56} size={40} color={C6.ink}>EXACTLY LIKE SONNEBORN SAID</Label6></Plate6></In></Center><Center x={960} y={880}><In at={5.6} from="fade"><Plate6 at={5.6}><Label6 at={5.6} size={40} color={C6.accent}>THE LANDLORD GETS PAID ON EVERY SALE</Label6></Plate6></In></Center>
</>) },
  { from: 786.92, to: 797.44, tag: [7, "Follow the Money", false], back: (<><Stock6 n={43} dur={10.52} dim={0} graphics={true} />
<Stock6 n={106} from={3.2} dur={10.52} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.0} from="fade"><Plate6 at={5.0}><Label6 at={5.0} size={36} color={C6.accent}>95% OF McDONALD'S FRANCHISE OWNERS: PROFITS FALLING</Label6></Plate6></In></Center><Source6 at={0.4}>NOA survey · spring 2026 · via Restaurant Business</Source6>
</>) },
  { from: 797.44, to: 801.44, tag: [8, "The Costs", true], hard: true, back: null, el: (<>
<Drift><Center y={560}><TenSplit at={0.05} w={1500} growAt={0.4} note="WHY IS EVERY STACK CLIMBING?" stacks={[{ label: "FOOD & PAPER · 31%", value: "~$3.00", pct: 31, at: 0.05 }, { label: "PEOPLE · 30%", value: "~$3.00", pct: 30, at: 0.05 }, { label: "BUILDING & EVERYTHING ELSE · 24%", value: "~$2.40", pct: 24, at: 0.05 }, { label: "LEFT · 15%", value: "~$1.50", pct: 15, at: 0.05 }]} /></Center></Drift>
</>) },
  { from: 801.44, to: 810.5, tag: [8, "The Costs", false], back: (<><Stock6 n={35} dur={9.06} dim={0} graphics={true} />
<Stock6 n={36} from={6.68} dur={9.06} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 810.5, to: 816.94, tag: [8, "The Costs", false], back: (<><Stock6 n={37} dur={6.44} dim={0} graphics={true} />
<Stock6 n={34} from={3.52} dur={6.44} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={40} color={C6.ink}>FEWEST CATTLE SINCE 1951 · USDA</Label6></Plate6></In></Center>
</>) },
  { from: 816.94, to: 823.08, tag: [8, "The Costs", false], back: (<><Stock6 n={15} dur={6.14} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} out={3.76} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.ink}>GROUND BEEF · ALL-TIME RECORD</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.76} from="fade"><Plate6 at={3.76}><Label6 at={3.76} size={52} color={C6.loss}>$6.92 / LB · AUGUST 2026</Label6></Plate6></In></Center><Source6 at={0.4}>BLS average retail price</Source6>
</>) },
  { from: 823.08, to: 831.4, tag: [8, "The Costs", false], back: (<><Stock6 n={39} dur={8.32} dim={0} graphics={true} />
<Stock6 n={40} from={5.68} dur={8.32} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.14} out={5.68} from="fade"><Plate6 at={4.14}><Label6 at={4.14} size={46} color={C6.ink}>4 COMPANIES</Label6></Plate6></In></Center><Center x={960} y={880}><In at={5.68} from="fade"><Plate6 at={5.68}><Label6 at={5.68} size={44} color={C6.accent}>~97% OF AMERICA'S FROZEN FRIES</Label6></Plate6></In></Center>
</>) },
  { from: 831.4, to: 840.9, tag: [8, "The Costs", false], back: null, el: (<>
<Evidence src="evidence/t11/fortune-potato-top.png" size={[2880, 1800]} dur={9.5} frame="screen" marks={[{ x: 186, y: 594, w: 242, h: 96, at: 0.05 }]} zoom={0.9} source="FORTUNE · NOV 2024" url="fortune.com" /><Center x={1520} y={300}><Stamp at={0.8} text="ALLEGED" color={C6.loss} size={72} /></Center><Center x={960} y={960}><In at={5.44} from="fade"><Plate6 at={5.44}><Label6 at={5.44} size={32} color={C6.accent}>SEPT 2026: A JUDGE LETS MOST OF THE CASE GO FORWARD</Label6></Plate6></In></Center>
</>) },
  { from: 840.9, to: 847.1, tag: [8, "The Costs", false], back: (<><Stock6 n={70} dur={6.2} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={1.38} from="fade"><Plate6 at={1.38}><Label6 at={1.38} size={34} color={C6.ink}>CALIFORNIA · $20/HR MINIMUM · BIG FAST FOOD CHAINS · 2024</Label6></Plate6></In></Center>
</>) },
  { from: 847.1, to: 851.96, tag: [8, "The Costs", false], back: null, el: (<>
<Drift><Center y={430}><Words text="Economists: still fighting." at={0.1} size={110} maxW={1600} hl={[]} /></Center><Center x={960} y={720}><In at={3.2} from="fade"><Plate6 at={3.2}><Label6 at={3.2} size={42} color={C6.accent}>BOTH SIDES HAVE DATA</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 851.96, to: 858.4, tag: [8, "The Costs", false], back: (<><Stock6 n={146} dur={6.44} dim={0} graphics={false} /></>), el: (<>
<Source6 at={0.3}>Footage: NewsNation</Source6>
</>) },
  { from: 858.4, to: 865.9, tag: [8, "The Costs", false], back: null, el: (<>
<Evidence src="evidence/t11/cbs-hikes.png" size={[2880, 1800]} dur={7.5} frame="screen" marks={[{ x: 809, y: 718, w: 88, h: 52, at: 1.38 }]} zoom={0.9} source="CBS NEWS · 2024" url="cbsnews.com" /><Center x={960} y={960}><In at={4.1} from="fade"><Plate6 at={4.1}><Label6 at={4.1} size={36} color={C6.ink}>“THE BIG MAC DOUBLED IN 5 YEARS”</Label6></Plate6></In></Center>
</>) },
  { from: 865.9, to: 870.08, tag: [8, "The Costs", false], back: (<><Stock6 n={89} dur={4.18} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.ink}>SOMETHING COMPANIES ALMOST NEVER DO</Label6></Plate6></In></Center>
</>) },
  { from: 870.08, to: 876.28, tag: [8, "The Costs", false], back: null, el: (<>
<Evidence src="evidence/t11/mcd-letter-top.png" size={[2880, 1800]} dur={6.2} frame="screen" zoom={0.9} source="McDONALD'S OPEN LETTER · JOE ERLINGER · MAY 29, 2024 · VIA WEB.ARCHIVE.ORG" url="web.archive.org" />
</>) },
  { from: 876.28, to: 884.72, tag: [8, "The Costs", false], back: null, el: (<>
<Evidence src="evidence/t11/mcd-letter-95.png" size={[2880, 1800]} dur={8.44} frame="screen" marks={[{ x: 917, y: 460, w: 77, h: 34, at: 1.64 }, { x: 983, y: 508, w: 83, h: 34, at: 2.76 }, { x: 1365, y: 510, w: 70, h: 30, at: 5.58 }]} zoom={0.9} source="McDONALD'S OPEN LETTER · MAY 29, 2024" url="web.archive.org" /><Center x={960} y={980}><In at={6.26} from="fade"><Plate6 at={6.26}><Label6 at={6.26} size={32} color={C6.ink}>NOT A HUNDRED. FAIR ENOUGH.</Label6></Plate6></In></Center>
</>) },
  { from: 884.72, to: 892.84, tag: [8, "The Costs", false], back: null, el: (<>
<Evidence src="evidence/t11/mcd-myths.png" size={[1700, 2400]} dur={8.12} frame="paper" marks={[{ x: 700, y: 1522, w: 820, h: 64, at: 1.44 }, { x: 700, y: 392, w: 860, h: 32, at: 4.32 }]} zoom={0.9} source="McDONALD'S “PRICING MYTHS VS. FACTS” · MAY 2024" />
</>) },
  { from: 892.84, to: 903.74, tag: [8, "The Costs", false], back: null, el: (<>
<Drift><Center y={460}><TwoBars at={0.1} a={{ label: "PRICES ACROSS AMERICA · 2019–2024", value: "+21%", v: 21 }} b={{ label: "McDONALD'S AVERAGE MENU ITEM", value: "+40%", v: 40, color: C6.loss, at: 7.36 }} h={440} /></Center></Drift>
</>) },
  { from: 903.74, to: 906.78, tag: [8, "The Costs", false], back: (<><Stock6 n={116} dur={3.04} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={40} color={C6.accent}>THEY TOLD US. THEY JUST LED WITH THE BIG MAC.</Label6></Plate6></In></Center>
</>) },
  { from: 906.78, to: 914.9, tag: [8, "The Costs", false], back: (<><Stock6 n={92} dur={8.12} dim={0} graphics={true} />
<Stock6 n={53} from={5.28} dur={8.12} dim={0} graphics={true} /></>), el: (<>
<Source6 at={5.28}>ILLUSTRATIVE FOOTAGE</Source6><Center x={960} y={880}><In at={2.86} out={5.28} from="fade"><Plate6 at={2.86}><Label6 at={2.86} size={40} color={C6.ink}>BEEF · FRIES · PEOPLE · BUILDINGS</Label6></Plate6></In></Center><Center x={960} y={880}><In at={5.28} from="fade"><Plate6 at={5.28}><Label6 at={5.28} size={44} color={C6.accent}>NONE OF THAT EXPLAINS MARIAM</Label6></Plate6></In></Center>
</>) },
  { from: 914.9, to: 921.56, back: null, el: (<>
<Drift><Center y={470}><Watches size={360} gap={100} note="FIRST: WHERE THE 10 AND THE 11 COME FROM" noteAt={3.72} items={[{ min: 10, label: "1968", sub: "AVERAGE WORKER", still: true, at: 0.05 }, { min: 11, label: "2026", sub: "AVERAGE WORKER", still: true, at: 0.05 }, { min: 51, label: "$7.25/HR", sub: "FEDERAL MINIMUM", still: true, blurred: true, q: true, color: C6.loss, at: 0.05 }]} /></Center></Drift>
</>) },
  { from: 921.56, to: 926.86, tag: [9, "The Number", true], hard: true, back: (<><Stock6 n={4} dur={5.3} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 926.86, to: 932.26, tag: [9, "The Number", false], back: (<><Stock6 n={110} dur={5.4} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.05} out={0.92} from="fade"><Plate6 at={0.05}><Label6 at={0.05} size={46} color={C6.ink}>NOT BOSSES</Label6></Plate6></In></Center><Center x={960} y={880}><In at={0.92} from="fade"><Plate6 at={0.92}><Label6 at={0.92} size={40} color={C6.accent}>THE PEOPLE WHO DO THE WORK · ~8 IN 10 JOBS</Label6></Plate6></In></Center>
</>) },
  { from: 932.26, to: 942.46, tag: [9, "The Number", false], back: null, el: (<>
<Drift><Center y={480}><Division label="1968 · AVERAGE WORKER" price="49¢" wage="$3.02" res="10 MIN" times={[5.72, 0.2, 8.36]} /></Center><Source6 at={0.4}>BLS · production & nonsupervisory · our math</Source6></Drift>
</>) },
  { from: 942.46, to: 949.48, tag: [9, "The Number", false], back: null, el: (<>
<Drift><Center y={460}><BigNum at={4.3} size={220} label="AVERAGE HOURLY PAY · OCTOBER 2026 · BLS">$32.75</BigNum></Center></Drift>
</>) },
  { from: 949.48, to: 953.62, tag: [9, "The Number", false], back: null, el: (<>
<Drift><Center y={480}><Division label="2026 · AVERAGE WORKER" price="$6.22" wage="$32.75" res="11 MIN" times={[0.05, 0.1, 2.42]} /></Center><Source6 at={0.4}>BLS · The Economist · our math</Source6></Drift>
</>) },
  { from: 953.62, to: 965.26, tag: [9, "The Number", false], back: null, el: (<>
<Drift><Center y={470}><Watches size={360} gap={100} note="IF THE AVERAGE BARELY MOVED, WHO'S PAYING 51?" noteAt={7.84} items={[{ min: 10, label: "1968", sub: "AVERAGE WORKER", still: true, at: 0.05 }, { min: 11, label: "2026", sub: "AVERAGE WORKER", still: true, at: 0.05 }, { min: 51, label: "$7.25/HR", sub: "FEDERAL MINIMUM", still: true, blurred: true, q: true, color: C6.loss, at: 0.05 }]} /></Center></Drift>
</>) },
  { from: 965.26, to: 968.86, tag: [9, "The Number", false], back: null, el: (<>
<Drift><Center y={500}><CrackWord at={0.05} crackAt={1.88} /></Center></Drift>
</>) },
  { from: 968.86, to: 972.54, tag: [9, "The Number", false], back: (<><Stock6 n={46} dur={3.68} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.3} from="fade"><Plate6 at={2.3}><Label6 at={2.3} size={42} color={C6.accent}>SAME MATH · FEDERAL MINIMUM WAGE</Label6></Plate6></In></Center>
</>) },
  { from: 972.54, to: 978.98, tag: [9, "The Number", false], back: null, el: (<>
<Drift><Center y={480}><Division label="1968 · FEDERAL MINIMUM WAGE" price="49¢" wage="$1.60" res="18 MIN" resColor={C6.ink} times={[0.1, 2.6, 5.04]} /></Center></Drift>
</>) },
  { from: 978.98, to: 985.64, tag: [9, "The Number", false], back: null, el: (<>
<Evidence src="evidence/t11/ballot-minwage.png" size={[2880, 1800]} dur={6.66} frame="screen" marks={[{ x: 1444, y: 596, w: 86, h: 38, at: 2.52 }]} zoom={0.9} source="BALLOTPEDIA · MINIMUM WAGE 2026" url="ballotpedia.org" /><Center x={960} y={960}><In at={3.9} from="fade"><Plate6 at={3.9}><Label6 at={3.9} size={36} color={C6.accent}>UNCHANGED SINCE JULY 2009</Label6></Plate6></In></Center>
</>) },
  { from: 985.64, to: 991.52, tag: [9, "The Number", false], back: (<><Stock6 n={50} dur={5.88} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} out={2.98} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={42} color={C6.ink}>LONGEST EVER WITHOUT A RAISE</Label6></Plate6></In></Center><Center x={960} y={880}><In at={2.98} from="fade"><Plate6 at={2.98}><Label6 at={2.98} size={46} color={C6.accent}>20 STATES STILL USE $7.25</Label6></Plate6></In></Center>
</>) },
  { from: 991.52, to: 1003.42, tag: [9, "The Number", false], back: null, el: (<>
<Drift><Center y={470}><Watches size={360} gap={100} note="18 MIN BECAME 51 · ALMOST 3× · SAME SANDWICH" noteAt={5.22} items={[{ min: 10, label: "1968", sub: "AVERAGE WORKER", still: true, at: 0.05 }, { min: 11, label: "2026", sub: "AVERAGE WORKER", still: true, at: 0.05 }, { min: 51, label: "$7.25/HR", sub: "FEDERAL MINIMUM", at: 0.05, blurred: true, revealAt: 2.6, spinAt: 2.6, spin: 2.0, redAt: 5.22, color: C6.loss }]} /></Center></Drift>
</>) },
  { from: 1003.42, to: 1011.28, tag: [9, "The Number", false], back: null, el: (<>
<Evidence src="evidence/t11/lt-workers-top.png" size={[2880, 1800]} dur={7.86} frame="screen" marks={[{ x: 292, y: 224, w: 336, h: 108, at: 3.62 }]} zoom={0.9} source="LENDINGTREE · 2025" url="lendingtree.com" />
</>) },
  { from: 1011.28, to: 1016.88, tag: [9, "The Number", false], back: null, el: (<>
<Evidence src="evidence/t11/lt-workers.png" size={[2880, 1800]} dur={5.6} frame="screen" marks={[{ x: 994, y: 1680, w: 108, h: 44, at: 4.0 }]} zoom={0.9} source="LENDINGTREE · 50 LARGEST U.S. METROS · 2025" url="lendingtree.com" />
</>) },
  { from: 1016.88, to: 1025.78, tag: [9, "The Number", false], back: null, el: (<>
<Drift><Center y={470}><Watches size={380} gap={140} note="LENDINGTREE · 21.2 VS 46.0 MINUTES" noteAt={0.3} items={[{ min: 21, label: "Average worker", sub: "$11.56 COMBO", at: 0.05, spinAt: 0.3, spin: 1.2 }, { min: 46, label: "Fast food worker", sub: "~$15/HR", at: 3.38, spinAt: 6.62, spin: 1.6, redAt: 6.62, color: C6.loss }]} /></Center></Drift>
</>) },
  { from: 1025.78, to: 1031.4, tag: [9, "The Number", false], back: (<><Stock6 n={45} dur={5.62} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.2} from="fade"><Plate6 at={2.2}><Label6 at={2.2} size={38} color={C6.accent}>MORE THAN 2× AS LONG · FOR WHAT'S INSIDE THE BAG</Label6></Plate6></In></Center>
</>) },
  { from: 1031.4, to: 1042.26, tag: [9, "The Number", false], back: null, el: (<>
<Drift><Center y={470}><FloorLine at={0.2} riseAt={3.44} /></Center><Center x={960} y={980}><In at={7.56} from="fade"><Plate6 at={7.56}><Label6 at={7.56} size={34} color={C6.accent}>EVERYBODY CLOSE TO IT FEELS THE SQUEEZE</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 1042.26, to: 1050.78, tag: [9, "The Number", false], back: null, el: (<>
<Evidence src="evidence/t11/lvsun-latimes.png" size={[2880, 1800]} dur={8.52} frame="screen" marks={[{ x: 542, y: 736, w: 166, h: 34, at: 3.0 }, { x: 687, y: 1223, w: 131, h: 34, at: 6.7 }]} zoom={0.9} source="LOS ANGELES TIMES · NOV 2025 · VIA LAS VEGAS SUN" url="lasvegassun.com" />
</>) },
  { from: 1050.78, to: 1054.48, tag: [9, "The Number", false], back: (<><Stock6 n={49} dur={3.7} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={40} color={C6.ink}>WHOSE PAYCHECK KEPT UP — AND WHOSE DIDN'T</Label6></Plate6></In></Center>
</>) },
  { from: 1054.48, to: 1064.68, tag: [9, "The Number", false], back: null, el: (<>
<Drift><Center y={470}><Watches size={360} gap={100} note="IT GOT EXPENSIVE FOR THE PEOPLE WHOSE PAY GOT LEFT BEHIND" noteAt={6.56} items={[{ min: 10, label: "1968", sub: "AVERAGE WORKER", still: true, at: 0.05 }, { min: 11, label: "2026", sub: "AVERAGE WORKER", still: true, at: 0.05 }, { min: 51, label: "$7.25/HR", sub: "FEDERAL MINIMUM", at: 0.05, still: true, redAt: 0.05, color: C6.loss }]} /></Center></Drift>
</>) },
  { from: 1064.68, to: 1067.6, tag: [9, "The Number", false], back: (<><Stock6 n={138} dur={2.92} dim={0} graphics={false} sepia />
<ArchiveFx /></>), el: (<>

</>) },
  { from: 1067.6, to: 1076.9, tag: [9, "The Number", false], back: (<><Stock6 n={123} dur={9.3} dim={0} graphics={true} />
<Stock6 n={60} from={3.32} dur={9.3} dim={0} graphics={true} /></>), el: (<>
<Subscribe6 at={2.54} /><Center x={960} y={880}><In at={3.32} from="fade"><Plate6 at={3.32}><Label6 at={3.32} size={36} color={C6.accent}>EVERY WEEK · ONE EVERYDAY PRICE · TAKEN APART</Label6></Plate6></In></Center>
</>) },
  { from: 1076.9, to: 1085.36, tag: [9, "The Number", false], back: (<><Stock6 n={152} dur={8.46} dim={0} graphics={false} />
<Stock6 n={151} from={1.04} dur={8.46} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={150}><In at={4.16} from="fade"><Plate6 at={4.16}><Label6 at={4.16} size={36} color={C6.accent}>…THEN THE COMPANY DID SOMETHING NOBODY EXPECTED</Label6></Plate6></In></Center><Source6 at={0.3}>Footage: Good Morning America · 2026</Source6>
</>) },
  { from: 1085.36, to: 1088.64, tag: [10, "Who Left", true], hard: true, back: (<><Stock6 n={101} dur={3.28} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 1088.64, to: 1097.72, tag: [10, "Who Left", false], back: null, el: (<>
<Evidence src="evidence/t11/rd-q1-2025.png" size={[2880, 1800]} dur={9.08} frame="screen" marks={[{ x: 1158, y: 604, w: 182, h: 42, at: 5.28 }]} zoom={0.9} source="RESTAURANT DIVE · MAY 2025" url="restaurantdive.com" /><Center x={960} y={960}><In at={7.12} from="fade"><Plate6 at={7.12}><Label6 at={7.12} size={34} color={C6.loss}>LOW-INCOME VISITS: DOWN NEARLY DOUBLE DIGITS</Label6></Plate6></In></Center>
</>) },
  { from: 1097.72, to: 1103.94, tag: [10, "Who Left", false], back: null, el: (<>
<Drift><Center y={430}><Scissors at={0.3} highAt={4.16} /></Center><Source6 at={0.4}>McDonald's CEO, Q3 2025 call · via LA Times</Source6></Drift>
</>) },
  { from: 1103.94, to: 1108.0, tag: [10, "Who Left", false], back: null, el: (<>
<Drift><Center y={500}><ThreeMoves steps={[{ word: "RENT", sub: "his reason #1", at: 1.26 }, { word: "GROCERIES", sub: "#2", at: 2.1 }, { word: "CHILD CARE", sub: "#3", at: 3.02 }]} /></Center></Drift>
</>) },
  { from: 1108.0, to: 1114.78, tag: [10, "Who Left", false], back: null, el: (<>
<Evidence src="evidence/t11/nbc-lowincome.png" size={[2880, 1800]} dur={6.78} frame="screen" marks={[{ x: 946, y: 704, w: 494, h: 140, at: 2.78 }]} zoom={0.9} source="NBC NEWS · AUG 2025" url="nbcnews.com" /><Center x={960} y={960}><In at={4.0} from="fade"><Plate6 at={4.0}><Label6 at={4.0} size={34} color={C6.accent}>THEY USUALLY VISIT MORE OFTEN THAN ANYONE ELSE</Label6></Plate6></In></Center>
</>) },
  { from: 1114.78, to: 1119.68, tag: [10, "Who Left", false], back: (<><Stock6 n={44} dur={4.9} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>THE MOST LOYAL · THE FIRST PUSHED OUT</Label6></Plate6></In></Center>
</>) },
  { from: 1119.68, to: 1126.7, tag: [10, "Who Left", false], back: (<><Stock6 n={107} dur={7.02} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.62} from="fade"><Plate6 at={5.62}><Label6 at={5.62} size={50} color={C6.accent}>3 QUIET TRAPS</Label6></Plate6></In></Center>
</>) },
  { from: 1126.7, to: 1133.48, tag: [10, "Who Left", false], back: (<><Stock6 n={148} dur={6.78} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={150}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={36} color={C6.accent}>TRAP #1 · THE PRICE ISN'T THE SAME EVERYWHERE</Label6></Plate6></In></Center><Source6 at={0.3}>Footage: NewsNation</Source6>
</>) },
  { from: 1133.48, to: 1138.1, tag: [10, "Who Left", false], back: (<><Stock6 n={113} dur={4.62} dim={0} graphics={true} />
<Stock6 n={114} from={3.28} dur={4.62} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>DIFFERENT OWNERS · DIFFERENT PRICES</Label6></Plate6></In></Center><Source6 at={0.4}>Photos: JJBers · CC BY 2.0</Source6>
</>) },
  { from: 1138.1, to: 1143.44, tag: [10, "Who Left", false], back: (<><Stock6 n={112} dur={5.34} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={38} color={C6.ink}>CONNECTICUT REST STOP · $17.59 BIG MAC MEAL</Label6></Plate6></In></Center><Source6 at={0.4}>Photo: Kenneth C. Zirkel · CC BY-SA 4.0</Source6>
</>) },
  { from: 1143.44, to: 1150.78, tag: [10, "Who Left", false], back: (<><Stock6 n={48} dur={7.34} dim={0} graphics={true} />
<Stock6 n={119} from={5.6} dur={7.34} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={38} color={C6.accent}>TRAP #2 · THE BEST PRICES LIVED IN THE APP</Label6></Plate6></In></Center>
</>) },
  { from: 1150.78, to: 1161.22, tag: [10, "Who Left", false], back: (<><Stock6 n={104} dur={10.44} dim={0.4} graphics={true} />
<Stock6 n={135} from={6.28} dur={10.44} dim={0.4} graphics={true} /></>), el: (<>
<Center y={430}><BigNum at={1.24} size={200} label="ACTIVE LOYALTY USERS · WORLDWIDE">210M</BigNum></Center><Center x={960} y={880}><In at={6.28} from="fade"><Plate6 at={6.28}><Label6 at={6.28} size={36} color={C6.accent}>NO APP = OFTEN THE HIGHEST PRICE IN THE BUILDING</Label6></Plate6></In></Center>
</>) },
  { from: 1161.22, to: 1163.58, tag: [10, "Who Left", false], back: (<><Stock6 n={159} dur={2.36} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={150}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={42} color={C6.accent}>TRAP #3 · DELIVERY</Label6></Plate6></In></Center><Source6 at={0.3}>Footage: WFAA ABC 8</Source6>
</>) },
  { from: 1163.58, to: 1175.74, tag: [10, "Who Left", false], back: null, el: (<>
<Evidence src="evidence/t11/self-delivery.png" size={[2880, 1800]} dur={12.16} frame="screen" marks={[{ x: 790, y: 673, w: 188, h: 50, at: 2.36 }]} zoom={0.9} source="SELF FINANCIAL · 100 U.S. CITIES · 2025" url="self.inc" /><Center x={960} y={960}><In at={7.72} from="fade"><Plate6 at={7.72}><Label6 at={7.72} size={44} color={C6.loss}>VIA DELIVERY APPS: ≈ +70%</Label6></Plate6></In></Center>
</>) },
  { from: 1175.74, to: 1179.42, tag: [10, "Who Left", false], back: (<><Stock6 n={130} dur={3.68} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={40} color={C6.loss}>+70% · FOR SOMEBODY TOO TIRED TO DRIVE</Label6></Plate6></In></Center>
</>) },
  { from: 1179.42, to: 1191.1, tag: [10, "Who Left", false], back: (<><Stock6 n={132} dur={11.68} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={5.12} from="fade"><Plate6 at={5.12}><Label6 at={5.12} size={40} color={C6.ink}>OCT 2026 · LAWSUIT: AI PRICING ACROSS RESTAURANTS</Label6></Plate6></In></Center><Center x={1500} y={300}><Stamp at={5.12} text="ALLEGATION" color={C6.loss} size={72} /></Center>
</>) },
  { from: 1191.1, to: 1201.86, tag: [10, "Who Left", false], back: null, el: (<>
<Drift><Center y={440}><Words text="“AI does not set menu prices at McDonald's restaurants – McDonald's franchisees do.”" at={5.54} size={70} maxW={1500} hl={["franchisees", "do.\u201d"]} /></Center><Center y={690}><Label6 at={5.54} size={28} color={C6.mint}>McDONALD'S STATEMENT · VIA AP</Label6></Center><Center x={960} y={960}><In at={1.84} from="fade"><Plate6 at={1.84}><Label6 at={1.84} size={34} color={C6.accent}>AN ACCUSATION · NO COURT HAS RULED</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 1201.86, to: 1209.52, tag: [10, "Who Left", false], back: (<><Stock6 n={91} dur={7.66} dim={0} graphics={true} />
<Stock6 n={101} from={4.66} dur={7.66} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={4.66} from="fade"><Plate6 at={4.66}><Label6 at={4.66} size={46} color={C6.accent}>THE CROWD WAS WALKING AWAY</Label6></Plate6></In></Center>
</>) },
  { from: 1209.52, to: 1216.12, tag: [11, "The Way Back", true], hard: true, back: (<><Stock6 n={149} dur={6.6} dim={0} graphics={false} /></>), el: (<>
<Source6 at={0.3}>Footage: Good Morning America · 2024</Source6>
</>) },
  { from: 1216.12, to: 1226.52, tag: [11, "The Way Back", false], back: null, el: (<>
<Evidence src="evidence/t11/mcd-evm.png" size={[2880, 1800]} dur={10.4} frame="screen" marks={[{ x: 1820, y: 595, w: 148, h: 32, at: 6.92 }]} zoom={0.9} source="McDONALD'S · EXTRA VALUE MEALS · 2025 · VIA WEB.ARCHIVE.ORG" url="web.archive.org" />
</>) },
  { from: 1226.52, to: 1235.72, tag: [11, "The Way Back", false], back: null, el: (<>
<Evidence src="evidence/t11/mcd-mcvalue26-top.png" size={[2880, 1800]} dur={9.2} frame="screen" marks={[{ x: 1814, y: 588, w: 424, h: 126, at: 6.52 }]} zoom={0.9} source="McDONALD'S PRESS RELEASE · APRIL 2, 2026 · VIA WEB.ARCHIVE.ORG" url="web.archive.org" />
</>) },
  { from: 1235.72, to: 1244.72, tag: [11, "The Way Back", false], back: (<><Stock6 n={120} dur={9.0} dim={0} graphics={true} />
<Stock6 n={153} from={2.02} dur={9.0} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={150}><In at={6.88} from="fade"><Plate6 at={6.88}><Label6 at={6.88} size={40} color={C6.accent}>McDOUBLE · $2.50 TO KICK IT OFF</Label6></Plate6></In></Center><Source6 at={0.3}>Footage: Good Morning America · 2026</Source6>
</>) },
  { from: 1244.72, to: 1252.28, tag: [11, "The Way Back", false], back: null, el: (<>
<Drift><Center y={440}><Words text="“Predictable everyday low prices.”" at={1.2} size={100} maxW={1500} hl={[]} /></Center><Center y={690}><Label6 at={1.2} size={28} color={C6.mint}>McDONALD'S · APRIL 2026</Label6></Center><Center x={960} y={960}><In at={3.74} from="fade"><Plate6 at={3.74}><Label6 at={3.74} size={34} color={C6.accent}>NOT COUPONS IN AN APP · PRICES ON THE BOARD</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 1252.28, to: 1260.76, tag: [11, "The Way Back", false], back: null, el: (<>
<Drift><Center y={470}><PriceDuel at={0.1} a={{ label: "2013 · DOLLAR MENU → “& MORE”", value: "$1" }} b={{ label: "2026 · McVALUE · ON THE SIGN", value: "<$3", at: 3.36 }} /></Center></Drift>
</>) },
  { from: 1260.76, to: 1267.84, tag: [11, "The Way Back", false], back: (<><Stock6 n={157} dur={7.08} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={150}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={36} color={C6.ink}>NOT EVERY RESTAURANT · PRICES CAN VARY</Label6></Plate6></In></Center><Source6 at={0.3}>Footage: local TV news · 2026</Source6>
</>) },
  { from: 1267.84, to: 1278.02, tag: [11, "The Way Back", false], back: null, el: (<>
<Evidence src="evidence/t11/fox-mcdouble-99.png" size={[2880, 1800]} dur={10.18} frame="screen" marks={[{ x: 1068, y: 595, w: 174, h: 56, at: 4.64 }, { x: 925, y: 347, w: 249, h: 114, at: 8.0 }]} zoom={0.9} source="FOX NEWS · QUOTING A REDDIT USER (NAME NOT SHOWN)" url="foxnews.com" />
</>) },
  { from: 1278.02, to: 1283.02, tag: [11, "The Way Back", false], back: (<><Stock6 n={83} dur={5.0} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.2} from="fade"><Plate6 at={0.2}><Label6 at={0.2} size={42} color={C6.ink}>$2.50 · STILL A LONG WAY FROM $1</Label6></Plate6></In></Center><Source6 at={0.4}>Photo: TheDapperDan · public domain</Source6>
</>) },
  { from: 1283.02, to: 1289.8, tag: [11, "The Way Back", false], back: (<><Stock6 n={155} dur={6.78} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={150}><In at={2.5} from="fade"><Plate6 at={2.5}><Label6 at={2.5} size={40} color={C6.accent}>MARCH 2026 · THE BIG ARCH</Label6></Plate6></In></Center><Source6 at={0.3}>Footage: TODAY (NBC) · 2026</Source6>
</>) },
  { from: 1289.8, to: 1296.76, tag: [11, "The Way Back", false], back: null, el: (<>
<Evidence src="evidence/t11/aol-bigarch.png" size={[2880, 1800]} dur={6.96} frame="screen" marks={[{ x: 440, y: 458, w: 248, h: 76, at: 4.54 }]} zoom={0.9} source="AOL · 2026" url="aol.com" />
</>) },
  { from: 1296.76, to: 1301.0, tag: [11, "The Way Back", false], back: (<><Stock6 n={61} dur={4.24} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={2.58} from="fade"><Plate6 at={2.58}><Label6 at={2.58} size={38} color={C6.accent}>THE SANDWICH ALONE: $8–10 IN A LOT OF PLACES</Label6></Plate6></In></Center><Source6 at={0.3}>ILLUSTRATIVE FOOTAGE</Source6>
</>) },
  { from: 1301.0, to: 1311.34, tag: [11, "The Way Back", false], back: null, el: (<>
<Drift><Center y={470}><MenuSplit at={0.1} rightAt={0.3} footAt={8.08} /></Center></Drift>
</>) },
  { from: 1311.34, to: 1317.34, tag: [11, "The Way Back", false], back: (<><Stock6 n={156} dur={6.0} dim={0} graphics={false} />
<Stock6 n={116} from={2.6} dur={6.0} dim={0} graphics={false} /></>), el: (<>
<Source6 at={0.3}>Footage: TODAY (NBC) · 2026</Source6>
</>) },
  { from: 1317.34, to: 1328.02, tag: [11, "The Way Back", false], back: null, el: (<>
<Drift><Center y={440}><Words text="“McDonald's value leadership is working.”" at={5.96} size={96} maxW={1500} hl={["working.\u201d"]} /></Center><Center y={690}><Label6 at={5.96} size={28} color={C6.mint}>CEO CHRIS KEMPCZINSKI · FEBRUARY 2026</Label6></Center><Center x={960} y={900}><In at={8.94} from="fade"><Plate6 at={8.94}><Label6 at={8.94} size={38} color={C6.ink}>NOT A STRAIGHT LINE</Label6></Plate6></In></Center></Drift>
</>) },
  { from: 1328.02, to: 1330.6, tag: [11, "The Way Back", false], back: null, el: (<>
<Evidence src="evidence/t11/wsmv-sales.png" size={[2880, 1800]} dur={2.58} frame="screen" marks={[{ x: 772, y: 586, w: 200, h: 88, at: 1.16 }]} zoom={0.9} source="WSMV · AP · NOV 2026" url="wsmv.com" />
</>) },
  { from: 1330.6, to: 1343.28, tag: [11, "The Way Back", false], back: (<><Stock6 n={18} dur={12.68} dim={0} graphics={true} />
<Stock6 n={161} from={7.5} dur={12.68} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={7.5} out={10.44} from="fade"><Plate6 at={7.5}><Label6 at={7.5} size={44} color={C6.ink}>SPEED · LOWER PRICES · VOLUME</Label6></Plate6></In></Center><Center x={960} y={880}><In at={10.44} from="fade"><Plate6 at={10.44}><Label6 at={10.44} size={46} color={C6.accent}>NO CROWD WITHOUT THE PRICE</Label6></Plate6></In></Center>
</>) },
  { from: 1343.28, to: 1348.16, tag: [11, "The Way Back", false], back: (<><Stock6 n={160} dur={4.88} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={150}><In at={3.06} from="fade"><Plate6 at={3.06}><Label6 at={3.06} size={46} color={C6.accent}>FOUR THINGS</Label6></Plate6></In></Center><Source6 at={0.3}>Footage: WFAA ABC 8</Source6>
</>) },
  { from: 1348.16, to: 1355.54, tag: [11, "The Way Back", false], back: (<><Stock6 n={154} dur={7.38} dim={0} graphics={false} />
<Stock6 n={135} from={3.04} dur={7.38} dim={0} graphics={false} /></>), el: (<>
<Center x={960} y={150}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={38} color={C6.accent}>1 · CHECK THE APP AGAINST THE BOARD</Label6></Plate6></In></Center>
</>) },
  { from: 1355.54, to: 1364.28, tag: [11, "The Way Back", false], back: (<><Stock6 n={47} dur={8.74} dim={0} graphics={true} />
<Stock6 n={131} from={3.08} dur={8.74} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} out={3.08} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={40} color={C6.accent}>2 · SKIP DELIVERY · PICK IT UP</Label6></Plate6></In></Center><Center x={960} y={880}><In at={3.08} from="fade"><Plate6 at={3.08}><Label6 at={3.08} size={46} color={C6.ink}>$10 MEAL vs $17 MEAL</Label6></Plate6></In></Center>
</>) },
  { from: 1364.28, to: 1372.32, tag: [11, "The Way Back", false], back: (<><Stock6 n={122} dur={8.04} dim={0} graphics={true} />
<Stock6 n={114} from={4.36} dur={8.04} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={0.1} out={4.36} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={40} color={C6.accent}>3 · COMPARE TWO LOCATIONS IN THE APP</Label6></Plate6></In></Center><Center x={960} y={880}><In at={4.36} from="fade"><Plate6 at={4.36}><Label6 at={4.36} size={36} color={C6.ink}>DIFFERENT OWNERS · DIFFERENT PRICES · SAME BURGER</Label6></Plate6></In></Center>
</>) },
  { from: 1372.32, to: 1384.02, tag: [11, "The Way Back", false], back: null, el: (<>
<Drift><Center x={960} y={110}><In at={0.1} from="fade"><Plate6 at={0.1}><Label6 at={0.1} size={34} color={C6.accent}>4 · COUNT PRICES IN MINUTES OF YOUR OWN WORK</Label6></Plate6></In></Center><Center y={560}><Watches size={360} gap={160} items={[{ min: 10, label: "A deal", sub: "10 MIN FOR A BIG MAC", at: 6.7, spinAt: 6.7, spin: 1.0 }, { min: 51, label: "A decision", sub: "51 MIN FOR THE SAME", at: 9.22, spinAt: 9.22, spin: 1.4, redAt: 9.22, color: C6.loss }]} /></Center></Drift>
</>) },
  { from: 1384.02, to: 1389.38, tag: [11, "The Way Back", false], back: null, el: (<>
<Drift><Center y={520}><Checklist w={1240} items={[{ text: "Check the app against the board", at: 0.05 }, { text: "Skip delivery, pick it up", at: 0.2 }, { text: "Compare two locations in the app", at: 0.35 }, { text: "Count prices in minutes of work", at: 1.9 }]} /></Center></Drift>
</>) },
  { from: 1389.38, to: 1397.98, tag: [11, "The Way Back", false], back: (<><Stock6 n={72} dur={8.6} dim={0} graphics={true} />
<Stock6 n={162} from={3.6} dur={8.6} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={6.94} from="fade"><Plate6 at={6.94}><Label6 at={6.94} size={40} color={C6.accent}>JIM DELLIGATTI: “ALL I GOT WAS A PLAQUE”</Label6></Plate6></In></Center><Source6 at={0.4}>Big Mac Museum, North Huntingdon, PA · CC0</Source6>
</>) },
  { from: 1397.98, to: 1404.38, tag: [11, "The Way Back", false], back: (<><Stock6 n={74} dur={6.4} dim={0} graphics={true} />
<Stock6 n={137} from={2.54} dur={6.4} dim={0} graphics={true} /></>), el: (<>

</>) },
  { from: 1404.38, to: 1407.98, tag: [11, "The Way Back", false], back: (<><Stock6 n={4} dur={3.6} dim={0} graphics={true} />
<Stock6 n={63} from={2.28} dur={3.6} dim={0} graphics={true} /></>), el: (<>
<Source6 at={2.28}>Illustrative footage</Source6>
</>) },
  { from: 1407.98, to: 1410.36, tag: [11, "The Way Back", false], back: (<><Stock6 n={46} dur={2.38} dim={0} graphics={true} /></>), el: (<>
<Source6 at={0.3}>ILLUSTRATIVE FOOTAGE</Source6>
</>) },
  { from: 1410.36, to: 1420.32, tag: [11, "The Way Back", false], back: (<><Stock6 n={121} dur={9.96} dim={0} graphics={true} />
<Stock6 n={78} from={4.48} dur={9.96} dim={0} graphics={true} /></>), el: (<>
<Center x={960} y={880}><In at={7.04} from="fade"><Plate6 at={7.04}><Label6 at={7.04} size={38} color={C6.accent}>DO THEY STILL REMEMBER WHO THEY BUILT IT FOR?</Label6></Plate6></In></Center>
</>) },
  { from: 1420.32, to: 1428.84, tag: [11, "The Way Back", false], back: null, el: (<>
<Drift><Center y={450}><Watches size={400} gap={200} items={[{ min: 10, label: "1968", sub: "AVERAGE WORKER", at: 0.05, still: true }, { min: 51, label: "$7.25/HR", sub: "FEDERAL MINIMUM", at: 0.05, still: true, redAt: 0.05, color: C6.loss }]} /></Center><Center x={960} y={930}><In at={2.66} from="fade"><Plate6 at={2.66}><Label6 at={2.66} size={38} color={C6.accent}>HOW MANY MINUTES DOES YOUR LUNCH COST? ↓</Label6></Plate6></In></Center></Drift>
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string, number][] = [[2.08, "ep06-coin", 0.25], [4.53, "swoosh", 0.3], [4.73, "ep06-kaching", 0.3], [22.64, "tick", 0.3], [29.98, "tick", 0.3], [32.9, "tick", 0.3], [43.19, "t02-paper", 0.3], [43.94, "ep06-counter", 0.3], [52.08, "tick", 0.3], [53.26, "impact", 0.3], [68.46, "ep06-pop", 0.25], [98.63, "t02-paper", 0.3], [108.2, "ep06-pop", 0.22], [109.18, "ep06-pop", 0.22], [110.62, "ep06-pop", 0.22], [121.68, "ding", 0.25], [126.78, "ep06-coin", 0.25], [145.19, "ep06-whoosh", 0.2], [163.74, "impact", 0.3], [176.42, "rise", 0.25], [184.51, "t02-paper", 0.3], [199.23, "t02-paper", 0.3], [213.52, "ding", 0.25], [220.17, "t02-paper", 0.3], [230.22, "ep06-coin", 0.3], [248.81, "ep06-whoosh", 0.2], [267.68, "ep06-stamp", 0.35], [274.1, "ep06-scratch", 0.25], [281.9, "ep06-coin", 0.25], [299.48, "ding", 0.25], [303.5, "ep06-fall", 0.25], [310.36, "ep06-pop", 0.22], [311.6, "ep06-pop", 0.22], [313.08, "ep06-pop", 0.22], [314.89, "t02-paper", 0.25], [328.72, "ep06-pop", 0.22], [329.84, "ep06-pop", 0.22], [332.24, "ding", 0.25], [345.85, "t02-paper", 0.25], [372.35, "ep06-whoosh", 0.2], [381.58, "impact", 0.3], [386.56, "ep06-kaching", 0.25], [407.54, "ep06-kaching", 0.3], [413.66, "ep06-stamp", 0.3], [423.09, "t02-paper", 0.3], [429.14, "ep06-kaching", 0.25], [431.21, "t02-paper", 0.3], [434.88, "ep06-stamp", 0.3], [440.3, "ding", 0.25], [442.6, "ep06-scratch", 0.25], [456.93, "ep06-whoosh", 0.2], [472.42, "ep06-stamp", 0.3], [474.71, "t02-paper", 0.3], [481.9, "ep06-fall", 0.3], [509.4, "impact", 0.3], [510.27, "t02-paper", 0.3], [517.26, "ding", 0.25], [550.58, "thud", 0.25], [551.64, "thud", 0.25], [552.42, "thud", 0.25], [553.02, "thud", 0.25], [553.72, "thud", 0.25], [562.54, "ep06-pop", 0.25], [565.21, "ep06-whoosh", 0.2], [578.55, "t02-paper", 0.3], [589.08, "swoosh", 0.25], [598.78, "ep06-coin", 0.25], [615.88, "ep06-stamp", 0.3], [618.75, "t02-paper", 0.3], [639.08, "ep06-pop", 0.25], [643.02, "ep06-fall", 0.3], [649.13, "t02-paper", 0.3], [668.48, "ep06-pop", 0.22], [669.62, "ep06-pop", 0.22], [670.32, "ep06-pop", 0.22], [686.27, "ep06-whoosh", 0.2], [694.17, "t02-paper", 0.3], [713.12, "ep06-kaching", 0.3], [715.25, "t02-paper", 0.3], [749.81, "ep06-coin", 0.22], [751.8, "ep06-coin", 0.22], [753.4, "ep06-coin", 0.22], [756.98, "ding", 0.3], [758.05, "t02-paper", 0.3], [768.26, "ep06-coin", 0.25], [771.44, "ep06-coin", 0.25], [774.24, "ep06-kaching", 0.3], [791.92, "ep06-fall", 0.3], [797.84, "rise", 0.3], [801.49, "t02-paper", 0.3], [820.7, "ep06-kaching", 0.3], [828.76, "ep06-pop", 0.25], [831.45, "t02-paper", 0.3], [832.2, "ep06-stamp", 0.3], [859.78, "ep06-kaching", 0.3], [870.13, "t02-paper", 0.3], [877.92, "ep06-pop", 0.25], [879.04, "ep06-pop", 0.25], [886.16, "ep06-pop", 0.25], [889.04, "ep06-pop", 0.25], [900.2, "ep06-counter", 0.3], [915.2, "tick", 0.3], [921.61, "t02-paper", 0.3], [932.46, "ep06-pop", 0.25], [937.98, "ep06-pop", 0.25], [940.62, "tick", 0.3], [942.51, "t02-paper", 0.3], [951.9, "tick", 0.3], [967.14, "ep06-scratch", 0.3], [975.14, "ep06-pop", 0.25], [977.58, "tick", 0.3], [979.03, "t02-paper", 0.3], [988.62, "ep06-pop", 0.25], [994.12, "tick", 0.35], [996.74, "impact", 0.4], [1003.47, "t02-paper", 0.3], [1015.28, "ep06-kaching", 0.25], [1017.18, "tick", 0.3], [1023.5, "tick", 0.3], [1061.04, "ding", 0.3], [1070.14, "ding", 0.25], [1085.41, "ep06-whoosh", 0.2], [1088.69, "t02-paper", 0.3], [1095.76, "ep06-fall", 0.3], [1105.2, "ep06-pop", 0.22], [1106.04, "ep06-pop", 0.22], [1106.96, "ep06-pop", 0.22], [1108.05, "t02-paper", 0.3], [1125.3, "ding", 0.25], [1126.8, "ep06-stamp", 0.25], [1143.54, "ep06-stamp", 0.25], [1152.02, "ep06-counter", 0.3], [1161.32, "ep06-stamp", 0.25], [1163.63, "t02-paper", 0.3], [1171.3, "ep06-kaching", 0.3], [1179.47, "t02-paper", 0.3], [1184.54, "ep06-stamp", 0.3], [1192.94, "ep06-pop", 0.25], [1209.57, "ep06-whoosh", 0.2], [1216.17, "t02-paper", 0.3], [1226.57, "t02-paper", 0.3], [1233.04, "ding", 0.3], [1242.6, "ep06-kaching", 0.3], [1255.64, "ding", 0.25], [1267.89, "t02-paper", 0.3], [1289.85, "t02-paper", 0.3], [1299.34, "ep06-kaching", 0.25], [1303.66, "ep06-pop", 0.25], [1309.08, "impact", 0.3], [1317.39, "t02-paper", 0.3], [1329.18, "ep06-fall", 0.25], [1341.04, "ding", 0.25], [1348.26, "ding", 0.25], [1355.64, "ding", 0.25], [1364.38, "ding", 0.25], [1372.42, "ding", 0.25], [1379.02, "tick", 0.3], [1381.54, "tick", 0.3], [1385.92, "ding", 0.3], [1422.98, "ding", 0.3]];

export const T11BigMac: React.FC = () => {
  const { fps } = useVideoConfig();
  setClips(CLIP_FN); // свой набор стоков при каждом рендере: в общем Root последним грузится чужой ролик
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/t11-voiceover.mp3")} volume={0.9} />
      <Sequence from={0} durationInFrames={4372}><Audio src={staticFile("audio/t07/music-c0-open.mp3")} volume={(f) => 0.07 * interpolate(f, [0, 30, 4342, 4372], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={4336} durationInFrames={3145}><Audio src={staticFile("audio/t02/music-c4-history.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 3115, 3145], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={7445} durationInFrames={3742}><Audio src={staticFile("audio/t05/music-c2-history.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 3712, 3742], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={11151} durationInFrames={2573}><Audio src={staticFile("audio/t08/shady-guise.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 2543, 2573], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={13688} durationInFrames={3284}><Audio src={staticFile("audio/t03/music-c4-who.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 3254, 3284], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={16937} durationInFrames={3668}><Audio src={staticFile("audio/t07/music-c3-timing.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 3638, 3668], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={20569} durationInFrames={3373}><Audio src={staticFile("audio/t08/night-falls.mp3")} volume={(f) => 0.07 * interpolate(f, [0, 30, 3343, 3373], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={23905} durationInFrames={3760}><Audio src={staticFile("audio/t07/music-c4-algo.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 3730, 3760], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={27629} durationInFrames={4950}><Audio src={staticFile("audio/t08/dollar-signs.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 4920, 4950], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={32543} durationInFrames={3761}><Audio src={staticFile("audio/t08/system-corruption.mp3")} volume={(f) => 0.075 * interpolate(f, [0, 30, 3731, 3761], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={36268} durationInFrames={6598}><Audio src={staticFile("audio/t05/music-c5-how.mp3")} volume={(f) => 0.08 * interpolate(f, [0, 30, 6568, 6598], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
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
