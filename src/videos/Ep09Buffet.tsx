import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Bg6, BigNum, Bug6, C6, Center, ChapterCard, ChapterTag, Col, CorpSub, Donut6, EndCard6, In, Label6, Meme, NameCard6, Row, Scene6, setClips, Source6, Split6, Stamp, Stock6, Subscribe6, Scoreboard, Dots, KitchenBlocks, Plate6, TwoBars, Words } from "../brand/hm6";

// ===================================================================
// Ep09Buffet — сгенерировано cloud/gen/build.py из плана cloud/gen/ep09.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const EP09BUFFET_DURATION_SEC = 553.16;
const CLIPS: Record<number, string> = {"1": "01-dale-big-burger", "2": "02-dale-burger-fries", "3": "03-dale-eating-table", "4": "04-dale-sitting-food", "5": "05-dale-enjoying", "6": "06-dale-eating2", "7": "07-man-ready-run", "8": "08-restaurant-people-tables", "9": "09-restaurant-friends", "10": "10-food-court", "11": "11-buffet-warm", "12": "12-buffet-plate-hand", "13": "13-buffet-display", "14": "14-buffet-young-people", "15": "15-buffet-picking", "16": "16-buffet-resort", "17": "17-steak-flames", "18": "18-steak-grilling-close", "19": "19-grilled-steak-close", "20": "20-butcher-shop", "21": "21-fresh-meats", "22": "22-supermarket", "23": "23-old-man-plate-meat", "24": "24-man-celebrating", "25": "25-man-screaming-happy", "26": "26-fried-shrimp-skillet", "27": "27-fried-shrimp-flour", "28": "28-french-fries", "29": "29-mashed-meal", "30": "30-bangers-mash", "31": "31-beef-mash-gravy", "32": "32-bread-rolls", "33": "33-bread-basket", "34": "34-food-in-trash", "35": "35-crispy-pork", "36": "36-soda-ice", "37": "37-cola-glass", "38": "38-stacked-plates", "39": "39-grandma-cutting-food", "40": "40-grandma-restaurant", "41": "41-grandma-smiling", "42": "42-girl-ice-cream", "43": "43-men-salads", "44": "44-disappointed-man", "45": "45-casino-slots", "46": "46-casino-chips", "47": "47-kitchen-chefs", "48": "48-kitchen-slowmo", "49": "49-empty-restaurant", "50": "50-empty-tables", "51": "51-closed-sign", "52": "52-abandoned-sign", "53": "53-couple-bills", "54": "54-man-shocked-bills", "55": "55-man-in-car", "56": "56-neon-pub-sign", "57": "57-diner-night", "58": "58-marquee-sign", "59": "59-waitstaff", "60": "60-cutting-meat", "61": "61-cashier", "62": "62-coins-falling", "63": "63-boxing-bell", "64": "64-boxing-bell-ring", "65": "65-chocolate-fountain", "66": "66-empty-wallet", "67": "67-vegas-night", "68": "68-sinking-boat", "69": "69-calendar-marking", "70": "70-restaurant-aerial-night", "71": "71-family-eating", "72": "72-old-woman-laughing", "73": "73-frying-potatoes", "74": "74-bearded-man-eating", "75": "75-dining-room-chairs", "76": "76-upset-man-face", "77": "77-cola-pour", "78": "78-schnitzel-sides", "79": "79-schnitzel-potatoes", "80": "80-man-food-plate", "81": "81-food-container", "82": "82-man-sofa-breathing", "83": "83-man-car-breathing", "84": "84-steak-dinner", "85": "85-steak-medium-rare", "86": "86-waffle-house-drone", "87": "87-parking-lot", "88": "88-counting-money", "89": "89-elderly-woman-refusing", "90": "90-elderly-man-faces", "91": "91-boy-ice-cream", "92": "92-buffet-trays", "93": "93-roulette-people", "94": "94-slot-close", "95": "95-butter-bread", "96": "96-steak-pan-grill", "97": "97-butcher-wrapping", "98": "98-finger-food-table", "99": "99-chefs-restaurant", "100": "100-dollars-table", "101": "101-fries-served", "102": "102-jukebox-diner", "103": "103-gc-colonie", "104": "104-gc-dothan", "105": "105-gc-steak-plate", "106": "106-gc-buffet-dinner", "107": "107-gc-buffet-dinner2", "108": "108-gc-plates", "109": "109-gc-hiring", "110": "110-gc-ghost", "111": "111-gc-buffet-dinner3", "112": "112-gc-okra"};
const LENS: Record<number, number> = {"1": 8.6, "2": 10.0, "3": 10.0, "4": 10.0, "5": 10.0, "6": 10.0, "7": 10.0, "8": 10.0, "9": 10.0, "10": 10.0, "11": 9.03, "12": 7.03, "13": 6.37, "14": 6.0, "15": 10.0, "16": 10.0, "17": 10.0, "18": 10.0, "19": 9.47, "20": 8.6, "21": 7.23, "22": 10.0, "23": 8.8, "24": 10.0, "25": 7.53, "26": 10.0, "27": 10.0, "28": 10.0, "29": 7.43, "30": 6.53, "31": 5.73, "32": 9.27, "33": 10.0, "34": 10.0, "35": 10.0, "36": 10.0, "37": 8.47, "38": 9.43, "39": 10.0, "40": 10.0, "41": 10.0, "42": 10.0, "43": 8.77, "44": 10.0, "45": 10.0, "46": 10.0, "47": 7.8, "48": 10.0, "49": 10.0, "50": 9.07, "51": 5.8, "52": 10.0, "53": 10.0, "54": 10.0, "55": 9.67, "56": 8.57, "57": 5.03, "58": 10.0, "59": 10.0, "60": 10.0, "61": 10.0, "62": 7.5, "63": 8.07, "64": 6.17, "65": 10.0, "66": 10.0, "67": 10.0, "68": 10.0, "69": 10.0, "70": 10.0, "71": 9.97, "72": 10.0, "73": 9.9, "74": 10.0, "75": 10.0, "76": 8.57, "77": 10.0, "78": 6.4, "79": 7.53, "80": 10.0, "81": 10.0, "82": 9.37, "83": 10.0, "84": 10.0, "85": 6.5, "86": 10.0, "87": 10.0, "88": 10.0, "89": 10.0, "90": 10.0, "91": 7.77, "92": 4.43, "93": 10.0, "94": 9.77, "95": 10.0, "96": 10.0, "97": 7.03, "98": 10.0, "99": 10.0, "100": 10.0, "101": 10.0, "102": 10.0, "103": 10.0, "104": 10.0, "105": 10.0, "106": 10.0, "107": 10.0, "108": 10.0, "109": 10.0, "110": 10.0, "111": 10.0, "112": 10.0};
const CLIP_FN = (n: number) => ({ src: staticFile(`broll/ep09/${CLIPS[n]}.mp4`), len: LENS[n] ?? 10 });
setClips(CLIP_FN);

type Beat = { from: number; to: number; tag?: [number, string]; hard?: boolean; back: React.ReactNode; el: React.ReactNode };
const BEATS: Beat[] = [
  { from: 0.0, to: 9.04, back: (<><Stock6 n={4} dur={9.04} dim={0} graphics={true} />
<Stock6 n={1} from={3.0} dur={9.04} dim={0} graphics={true} /></>), el: (<>
<Center y={200}><div style={{ scale: "1.3" }}><NameCard6 at={0.15} name="Dale" role="NOT A REAL GUY · A REAL TYPE" icon="person" /></div></Center>
<Center y={640}><Plate6 at={4.8}><BigNum at={4.8} icon="receipt" size={220} label="ALL THE STEAK HE CAN EAT">$18.99</BigNum></Plate6></Center>
</>) },
  { from: 9.04, to: 14.12, back: (<><Stock6 n={3} dur={5.08} dim={0} graphics={false} /></>), el: (<>
<Meme at={3.76} text="it's personal" y={900} />
</>) },
  { from: 14.12, to: 24.04, back: (<><Stock6 n={8} dur={9.92} dim={0} graphics={true} />
<Stock6 n={10} from={3.42} dur={9.92} dim={0} graphics={true} /></>), el: (<>
<Center y={330}><Words text="The restaurant knew Dale was coming." at={1.16} size={92} hl={["knew"]} maxW={1500} /></Center>
<Center y={720}><Label6 at={5.78} size={46} color={C6.accent}>SOMEBODY ELSE PAYS FOR HIS DINNER</Label6></Center>
</>) },
  { from: 24.04, to: 28.88, back: (<><Stock6 n={17} dur={4.84} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 at={0.1}><Words text="Unlimited steak. Under $20." at={0.1} size={110} hl={["$20."]} /></Plate6></Center>
</>) },
  { from: 28.88, to: 30.3, back: (<><Stock6 n={5} dur={1.42} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 at={0.05}><Words text="Who's covering Dale?" at={0.05} size={120} hl={["covering"]} /></Plate6></Center>
</>) },
  { from: 30.3, to: 36.36, back: (<><Stock6 n={75} dur={6.06} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Words text="The real threat: an empty chair." at={2.08} size={104} hl={["empty", "chair."]} maxW={1500} /></Center>
</>) },
  { from: 36.36, to: 39.0, hard: true, back: null, el: (<>
<Center y={500}><Scoreboard at={0.05} lamps={["", "", "", "", ""]} scale={1.45} /></Center>
<Center y={985}><Label6 at={1.4} size={30} color={C6.mint}>FIVE ROUNDS · WHY GOLDEN CORRAL DOESN'T CARE HOW MUCH STEAK YOU EAT</Label6></Center>
</>) },
  { from: 39.0, to: 44.56, tag: [1, "The Bet"], back: (<><Stock6 n={109} dur={5.56} dim={0} graphics={true} /></>), el: (<>
<Center y={560}><In at={0} out={1.54 + 0.3} from="fade"><ChapterCard n={1} title="The Bet" /></In></Center>
<Center y={780}><Plate6 at={1.54}><Words text="Golden Corral" at={1.54} size={130} hl={["Golden", "Corral"]} /><Label6 at={2.86} size={38} color={C6.ink}>THE BIGGEST BUFFET CHAIN IN AMERICA</Label6></Plate6></Center>
<Source6>Photo: Mr. Blue MauMau · CC BY 2.0 · chain facts: WSJ via Fox News</Source6>
</>) },
  { from: 44.56, to: 53.86, back: (<><Stock6 n={104} dur={9.3} dim={0} graphics={true} />
<Stock6 n={106} from={2.12} dur={9.3} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Row gap={70}>
  <Plate6 at={0.2}><BigNum at={0.2} icon="store" size={150} label="RESTAURANTS">≈350</BigNum></Plate6>
  <Plate6 at={2.12}><BigNum at={2.12} icon="cart" size={150} label="ITEMS ON THE LINE">≈150</BigNum></Plate6>
  <Plate6 at={5.4}><BigNum at={5.4} icon="receipt" size={150} label="DINNER, BY TOWN">$17–21</BigNum></Plate6>
</Row></Center>
<Source6>WSJ via Fox News · Entrepreneur, Sept 2026 · photo: The Bushranger, CC BY-SA 4.0</Source6>
</>) },
  { from: 53.86, to: 59.9, back: (<><Stock6 n={99} dur={6.04} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><Plate6 at={1.78}><BigNum at={1.78} icon="clock" size={220} label="YEARS AT THE COMPANY · CEO LANCE TRENARY">41</BigNum></Plate6></Center>
<Meme at={3.92} text="he has seen things" y={930} size={64} />
<Source6>Entrepreneur · Sept 2026</Source6>
</>) },
  { from: 59.9, to: 64.22, back: (<><Stock6 n={105} dur={4.32} dim={0} graphics={false} /></>), el: (<>
<Center y={800}><Plate6 at={3.04}><Words text="Sirloin steak." at={3.04} size={120} hl={["Sirloin"]} /><Label6 at={3.04 + 0.4} size={34} color={C6.ink}>AS MANY TIMES AS YOU ASK</Label6></Plate6></Center>
<Source6>Photo taken at a Golden Corral: inazakira · CC BY-SA 2.0</Source6>
</>) },
  { from: 64.22, to: 72.74, back: (<><Stock6 n={22} dur={8.52} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Plate6 at={4.06}><BigNum at={4.06} icon="cart" size={240} label="A POUND · SIRLOIN · U.S. AVERAGE · JULY 2026">$14.59</BigNum></Plate6></Center>
<Source6>Bureau of Labor Statistics average prices, via USAFacts</Source6>
</>) },
  { from: 72.74, to: 79.36, back: (<><Stock6 n={19} dur={6.62} dim={0} graphics={true} /></>), el: (<>
<Center y={380}><Plate6 at={1.84}><Words text="2 lb × $14.59 = $29" at={1.84} size={120} hl={["$29"]} /></Plate6></Center>
<Center y={760}><Plate6 at={5.0}><Label6 at={5.0} size={54} color={C6.accent}>HE PAID $18.99</Label6></Plate6></Center>
</>) },
  { from: 79.36, to: 85.28, back: (<><Stock6 n={5} dur={5.92} dim={0} graphics={false} /></>), el: (<>
<Meme at={3.8} text="allegedly" y={900} />
</>) },
  { from: 85.28, to: 94.16, back: (<><Stock6 n={18} dur={8.88} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 at={1.08}><Words text="On steak alone, Dale might be right." at={1.08} size={88} hl={["right."]} maxW={1500} /></Plate6></Center>
</>) },
  { from: 94.16, to: 97.36, back: (<><Stock6 n={24} dur={3.2} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Scoreboard at={0.05} lamps={["d", "", "", "", ""]} lampAt={0.35} scale={1.45} /></Center>
</>) },
  { from: 97.36, to: 102.38, tag: [2, "The Line"], back: (<><Stock6 n={14} dur={5.02} dim={0} graphics={true} /></>), el: (<>
<Center y={300}><In at={0} out={2.64} from="fade"><ChapterCard n={2} title="The Line" /></In></Center>
<Center y={640}><Plate6 at={2.64}><Words text="That walk is not an accident." at={2.64} size={96} hl={["not"]} maxW={1500} /></Plate6></Center>
</>) },
  { from: 102.38, to: 111.72, back: (<><Stock6 n={13} dur={9.34} dim={0} graphics={true} />
<Stock6 n={92} from={5.9} dur={9.34} dim={0} graphics={true} /></>), el: (<>
<Center y={420}><Plate6 at={4.6}><Words text="“Modules”" at={4.6} size={190} hl={["“Modules”"]} /></Plate6></Center>
<Center y={760}><Plate6 at={5.9}><Label6 at={5.9} size={42} color={C6.ink}>SOMETHING EXPENSIVE + SOMETHING CHEAP</Label6></Plate6></Center>
<Source6>The Wall Street Journal, via Fox News · Oct 2026</Source6>
</>) },
  { from: 111.72, to: 114.48, back: (<><Stock6 n={26} dur={2.76} dim={0} graphics={true} />
<Stock6 n={28} from={1.7} dur={2.76} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Split6 at={0.1} left={{ title: "SHRIMP", value: "$$$", color: C6.loss }} right={{ title: "FRIES · HUSH PUPPIES", value: "¢", color: C6.money, at: 0.86 }} /></Center>
<Source6>The Wall Street Journal, via Fox News · Oct 2026</Source6>
</>) },
  { from: 114.48, to: 122.42, back: (<><Stock6 n={31} dur={7.94} dim={0} graphics={true} /></>), el: (<>
<Center y={330}><Plate6 at={1.54}><Words text="Meatloaf" at={1.54} size={120} /><Label6 at={2.7} size={40} color={C6.accent}>+ POTATOES · GRAVY · GREEN BEANS</Label6></Plate6></Center>
<Center y={780}><Plate6 at={5.18}><Label6 at={5.18} size={44} color={C6.ink}>NOTHING IS HIDDEN. IT'S JUST ARRANGED.</Label6></Plate6></Center>
</>) },
  { from: 122.42, to: 128.76, back: (<><Stock6 n={73} dur={6.34} dim={0} graphics={true} /></>), el: (<>
<CorpSub at={0.2} corp="“menu modules”" human="every shrimp gets a potato chaperone" />
</>) },
  { from: 128.76, to: 138.48, back: (<><Stock6 n={85} dur={9.72} dim={0} graphics={true} />
<Stock6 n={29} from={6.98} dur={9.72} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Split6 at={3.04} left={{ title: "A SERVING OF STEAK", value: "$2.25", color: C6.loss }} right={{ title: "A SERVING OF POTATOES", value: "30¢", color: C6.money, at: 6.98 }} /></Center>
<Source6>The Hustle · cost estimates from wholesale data</Source6>
</>) },
  { from: 138.48, to: 143.18, back: (<><Stock6 n={20} dur={4.7} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 at={2.48}><Words text="Potatoes are still potatoes." at={2.48} size={100} hl={["still"]} /></Plate6></Center>
</>) },
  { from: 143.18, to: 149.9, back: (<><Stock6 n={81} dur={6.72} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 at={3.8}><Words text="A $2 bite → a 30¢ bite" at={3.8} size={110} hl={["30¢"]} /></Plate6></Center>
</>) },
  { from: 149.9, to: 155.66, back: (<><Stock6 n={6} dur={5.76} dim={0} graphics={false} /></>), el: (<>
<Meme at={3.4} text="with a ladle. smiling." y={900} />
</>) },
  { from: 155.66, to: 160.82, back: (<><Stock6 n={32} dur={5.16} dim={0} graphics={true} /></>), el: (<>
<Center y={300}><Words text="The roll." at={0.3} size={170} hl={["roll."]} /></Center>
<Center y={840}><Plate6 at={3.22}><Label6 at={3.22} size={42} color={C6.ink}>BASICALLY A PILLOW WITH BUTTER ON IT</Label6></Plate6></Center>
</>) },
  { from: 160.82, to: 167.42, back: (<><Stock6 n={33} dur={6.6} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 at={2.42}><Words text="It takes the space of steak #3." at={2.42} size={92} hl={["steak", "#3."]} maxW={1500} /></Plate6></Center>
</>) },
  { from: 167.42, to: 172.48, back: (<><Stock6 n={11} dur={5.06} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 at={2.08}><Words text="At a buffet, bad food is expensive." at={2.08} size={92} hl={["expensive."]} maxW={1500} /></Plate6></Center>
</>) },
  { from: 172.48, to: 178.58, back: (<><Stock6 n={34} dur={6.1} dim={0} graphics={false} /></>), el: (<>
<Meme at={4.54} text="paid for. twice." y={900} />
</>) },
  { from: 178.58, to: 185.56, back: (<><Stock6 n={30} dur={6.98} dim={0} graphics={true} /></>), el: (<>
<Center y={330}><Plate6 at={3.0}><Words text="Those potatoes are a weapon." at={3.0} size={96} hl={["weapon."]} maxW={1500} /></Plate6></Center>
<Center y={760}><Stamp at={5.0} text="weapon-grade" color={C6.accent} size={110} /></Center>
</>) },
  { from: 185.56, to: 187.18, back: (<><Stock6 n={16} dur={1.62} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Scoreboard at={0.05} lamps={["d", "h", "", "", ""]} lampAt={0.35} scale={1.45} /></Center>
</>) },
  { from: 187.18, to: 190.84, tag: [3, "The Decoy"], back: (<><Stock6 n={96} dur={3.66} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><ChapterCard n={3} title="The Decoy" /></Center>
</>) },
  { from: 190.84, to: 194.94, back: (<><Stock6 n={21} dur={4.1} dim={0} graphics={true} /></>), el: (<>
<Center y={380}><Plate6 at={0.1}><Words text="Ground beef: record high." at={0.1} size={104} hl={["record", "high."]} /></Plate6></Center>
<Center y={740}><Plate6 at={2.0}><Label6 at={2.0} size={44} color={C6.accent}>STEAK: NEAR ITS RECORD · 2026</Label6></Plate6></Center>
<Source6>Bureau of Labor Statistics average prices · 2026</Source6>
</>) },
  { from: 194.94, to: 201.38, back: (<><Stock6 n={68} dur={6.44} dim={0} graphics={false} /></>), el: (<>
<Meme at={5.1} text="the boat" y={900} />
</>) },
  { from: 201.38, to: 210.74, back: (<><Stock6 n={78} dur={9.36} dim={0} graphics={true} />
<Stock6 n={79} from={6.04} dur={9.36} dim={0} graphics={true} /></>), el: (<>
<Center y={300}><Plate6 at={3.5}><Words text="A bone-in fried pork chop." at={3.5} size={96} hl={["pork", "chop."]} maxW={1500} /></Plate6></Center>
<Center y={860}><Plate6 at={7.56}><Label6 at={7.56} size={40} color={C6.ink}>THE SIZE OF A CATCHER'S MITT</Label6></Plate6></Center>
</>) },
  { from: 210.74, to: 218.9, back: (<><Stock6 n={112} dur={8.16} dim={0} graphics={true} /></>), el: (<>
<Center y={380}><Plate6 at={4.22}><Words text="They didn't remove the steak." at={4.22} size={92} maxW={1500} /></Plate6></Center>
<Center y={740}><Plate6 at={6.64}><Words text="They surrounded it." at={6.64} size={110} hl={["surrounded"]} /></Plate6></Center>
<Source6>“Not going to… cheapen” the menu: CEO Lance Trenary, FSR · July 2026 · photo at a Golden Corral: Nick Gray, CC BY-SA 2.0</Source6>
</>) },
  { from: 218.9, to: 224.56, back: null, el: (<>
<Center y={520}><TwoBars at={0.2} a={{ label: "SIRLOIN", value: "100%", v: 1, color: C6.loss }} b={{ label: "PORK CHOP", value: "≈40%", v: 0.4, color: C6.money, at: 3.0 }} /></Center>
<Center y={120}><Label6 at={0.1} size={36} color={C6.ink}>WHAT EACH ONE COSTS THE CHAIN</Label6></Center>
<Source6>The Wall Street Journal, via Fox News · Oct 2026</Source6>
</>) },
  { from: 224.56, to: 233.88, back: (<><Stock6 n={84} dur={9.32} dim={0} graphics={true} />
<Stock6 n={35} from={4.04} dur={9.32} dim={0} graphics={true} /></>), el: (<>
<Center y={330}><Plate6 at={2.58}><Words text="A reason to cheat on it." at={2.58} size={96} hl={["cheat"]} /></Plate6></Center>
<Center y={760}><Stamp at={6.8} text="60% off. for them." color={C6.accent} size={100} /></Center>
</>) },
  { from: 233.88, to: 239.36, back: (<><Stock6 n={37} dur={5.48} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 at={1.92}><Words text="Food: unlimited. Soda: extra." at={1.92} size={100} hl={["extra."]} /></Plate6></Center>
<Source6>The Wall Street Journal, via Fox News · Oct 2026</Source6>
</>) },
  { from: 239.36, to: 244.22, back: (<><Stock6 n={77} dur={4.86} dim={0.3} graphics={true} /></>), el: (<>
<Center y={520}><Plate6 at={2.62}><BigNum at={2.62} icon="cup" size={240} label="TO POUR · SOLD FOR ABOUT $2">≈12¢</BigNum></Plate6></Center>
<Source6>The Hustle · estimate for a typical buffet</Source6>
</>) },
  { from: 244.22, to: 248.0, back: (<><Stock6 n={2} dur={3.78} dim={0} graphics={false} /></>), el: (<>

</>) },
  { from: 248.0, to: 249.86, back: (<><Stock6 n={9} dur={1.86} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Scoreboard at={0.05} lamps={["d", "h", "h", "", ""]} lampAt={0.35} scale={1.45} /></Center>
</>) },
  { from: 249.86, to: 254.3, back: (<><Stock6 n={5} dur={4.44} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.34} text="has not checked the score" y={900} size={68} />
</>) },
  { from: 254.3, to: 260.4, back: (<><Stock6 n={15} dur={6.1} dim={0} graphics={true} /></>), el: (<>
<Subscribe6 at={3.26} />
<Center y={560}><Plate6 at={3.96}><Words text="It's free. Unlike the soda." at={3.96} size={90} hl={["free."]} /></Plate6></Center>
</>) },
  { from: 260.4, to: 263.92, tag: [4, "The Average"], back: (<><Stock6 n={1} dur={3.52} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><ChapterCard n={4} title="The Average" /></Center>
</>) },
  { from: 263.92, to: 267.16, back: (<><Stock6 n={38} dur={3.24} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 at={0.1}><Words text="Four plates. Steak on every one." at={0.1} size={100} hl={["Four"]} /></Plate6></Center>
</>) },
  { from: 267.16, to: 273.36, back: (<><Stock6 n={4} dur={6.2} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><Split6 at={0.1} left={{ title: "HE PAID", value: "$18.99", color: C6.ink }} right={{ title: "HE ATE (OUR WHAT-IF)", value: "$25", color: C6.accent, at: 0.74 }} /></Center>
<Center y={880}><Stamp at={4.2} text="dale wins?" color={C6.accent} size={90} /></Center>
</>) },
  { from: 273.36, to: 275.66, back: (<><Stock6 n={25} dur={2.3} dim={0.25} graphics={true} /></>), el: (<>
<Center y={540}><Stamp at={0.1} text="by six dollars" color={C6.accent} size={130} /></Center>
</>) },
  { from: 275.66, to: 280.88, back: (<><Stock6 n={61} dur={5.22} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 at={2.42}><Words text="The house was never playing against Dale." at={2.42} size={86} hl={["never"]} maxW={1500} /></Plate6></Center>
</>) },
  { from: 280.88, to: 289.28, back: (<><Stock6 n={62} dur={8.4} dim={0.2} graphics={true} /></>), el: (<>
<Center y={110}><Label6 at={0.05} size={38} color={C6.ink}>THE NUMBER THAT RUNS THE WHOLE PLACE</Label6></Center>
<Center y={560}><Donut6 at={3.76} pct={38} center="38¢" label="OF EVERY DOLLAR GOES TO FOOD" size={600} /></Center>
<Source6>The Wall Street Journal, via Fox News · Oct 2026</Source6>
</>) },
  { from: 289.28, to: 295.7, back: (<><Stock6 n={12} dur={6.42} dim={0} graphics={true} /></>), el: (<>
<Center y={400}><Plate6 at={2.08}><BigNum at={2.08} icon="receipt" size={220} label="OF FOOD PER HEAD · OUR MATH: $18.99 × 38%">≈$7</BigNum></Plate6></Center>
<Center y={820}><Plate6 at={5.08}><Label6 at={5.08} size={44} color={C6.accent}>NOT DALE'S HEAD. THE AVERAGE HEAD.</Label6></Plate6></Center>
</>) },
  { from: 295.7, to: 304.18, back: (<><Stock6 n={10} dur={8.48} dim={0} graphics={true} /></>), el: (<>
<Center y={400}><Plate6 at={3.5}><BigNum at={3.5} icon="person" size={200} label="GUESTS A WEEK · A TYPICAL RESTAURANT">6,000+</BigNum></Plate6></Center>
<Center y={820}><Plate6 at={6.76}><Label6 at={6.76} size={50} color={C6.accent}>≈ 900 A DAY</Label6></Plate6></Center>
<Source6>FSR magazine · July 2026</Source6>
</>) },
  { from: 304.18, to: 310.64, back: null, el: (<>
<Center y={110}><Label6 at={0.05} size={36} color={C6.ink}>900 GUESTS TONIGHT</Label6></Center>
<Center y={520}><Dots at={0.1} hotAt={4.8} /></Center>
<Center y={950}><Label6 at={4.8} size={44} color={C6.loss}>45 DALES · 1 IN 20</Label6></Center>
<Source6>The Hustle · estimate for a typical buffet</Source6>
</>) },
  { from: 310.64, to: 314.02, back: (<><Stock6 n={71} dur={3.38} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 at={0.1}><Words text="855 people who are not Dale." at={0.1} size={100} hl={["855"]} /></Plate6></Center>
</>) },
  { from: 314.02, to: 317.7, back: (<><Stock6 n={40} dur={3.68} dim={0} graphics={true} /></>), el: (<>
<Center y={820}><div style={{ scale: "1.25" }}><NameCard6 at={0.2} name="Grandma" role="SOUP · SALAD · HALF A ROLL" icon="person" /></div></Center>
</>) },
  { from: 317.7, to: 320.88, back: (<><Stock6 n={42} dur={3.18} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.34} text="dinner: dessert" y={900} />
</>) },
  { from: 320.88, to: 325.24, back: (<><Stock6 n={74} dur={4.36} dim={0} graphics={false} /></>), el: (<>
<Meme at={2.6} text="regrets everything" y={900} />
</>) },
  { from: 325.24, to: 331.86, back: (<><Stock6 n={39} dur={6.62} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Split6 at={0.1} left={{ title: "GRANDMA PAID", value: "$18.99", color: C6.ink }} right={{ title: "GRANDMA ATE", value: "$4–5", color: C6.money, at: 3.38 }} /></Center>
<Source6>Light-eater food-cost estimates: The Hustle</Source6>
</>) },
  { from: 331.86, to: 336.9, back: (<><Stock6 n={40} dur={5.04} dim={0.15} graphics={true} /></>), el: (<>
<Center y={230}><Label6 at={0.1} size={40} color={C6.ink}>DALE ISN'T ROBBING GOLDEN CORRAL</Label6></Center>
<Center y={560}><Words text="Dale is eating Grandma's change." at={2.18} size={124} hl={["Grandma's", "change."]} maxW={1600} /></Center>
</>) },
  { from: 336.9, to: 344.28, back: (<><Stock6 n={46} dur={7.38} dim={0} graphics={true} />
<Stock6 n={45} from={3.16} dur={7.38} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><Plate6 at={3.16}><Words text="It just needs the floor full." at={3.16} size={96} hl={["full."]} /></Plate6></Center>
<Meme at={6.12} text="same game. more gravy." y={920} size={66} />
</>) },
  { from: 344.28, to: 352.28, back: (<><Stock6 n={93} dur={8.0} dim={0.2} graphics={true} /></>), el: (<>
<Center y={200}><Label6 at={0.05} size={38} color={C6.mint}>STATISTICIANS CALL IT</Label6></Center>
<Center y={420}><Words text="The law of large numbers" at={1.08} size={120} hl={["large", "numbers"]} /></Center>
<Center y={720}><Label6 at={4.58} size={40} color={C6.mint}>FEED ENOUGH PEOPLE, AND NO SINGLE APPETITE MATTERS</Label6></Center>
</>) },
  { from: 352.28, to: 362.34, back: (<><Stock6 n={108} dur={10.06} dim={0} graphics={true} />
<Stock6 n={107} from={7.22} dur={10.06} dim={0} graphics={true} /></>), el: (<>
<Center y={170}><Plate6 at={0.1}><Label6 at={0.1} size={34} color={C6.mint}>OUR ROUGH MATH · ONE NIGHT</Label6></Plate6></Center>
<Center y={440}><Plate6 at={2.28}><Words text="900 guests × $18.99 ≈ $17,000" at={2.28} size={92} hl={["$17,000"]} maxW={1600} /></Plate6></Center>
<Center y={740}><Plate6 at={7.22}><Words text="Food at 38% ≈ $6,500" at={7.22} size={92} hl={["$6,500"]} /></Plate6></Center>
<Source6>Rough: assumes everyone pays the dinner price · photo: inazakira, CC BY-SA 2.0</Source6>
</>) },
  { from: 362.34, to: 367.34, back: (<><Stock6 n={3} dur={5.0} dim={0} graphics={true} /></>), el: (<>
<Center y={800}><Stamp at={3.78} text="already priced in" color={C6.accent} size={100} /></Center>
</>) },
  { from: 367.34, to: 372.74, back: (<><Stock6 n={47} dur={5.4} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 at={4.16}><Words text="Demand forecast: 15-minute blocks." at={4.16} size={88} hl={["15-minute"]} maxW={1500} /></Plate6></Center>
<Source6>The Wall Street Journal, via Fox News · Oct 2026</Source6>
</>) },
  { from: 372.74, to: 377.18, back: (<><Stock6 n={48} dur={4.44} dim={0} graphics={false} /></>), el: (<>

</>) },
  { from: 377.18, to: 381.72, back: null, el: (<>
<Center y={440}><div style={{ scale: "1.35" }}><KitchenBlocks at={0.05} markAt={1.84} /></div></Center>
<Center y={960}><Label6 at={2.78} size={44} color={C6.accent}>IT JUST DIDN'T KNOW HIS NAME</Label6></Center>
</>) },
  { from: 381.72, to: 386.88, tag: [5, "The Empty Chair"], back: (<><Stock6 n={59} dur={5.16} dim={0} graphics={true} /></>), el: (<>
<Center y={430}><Scoreboard at={0.05} lamps={["d", "h", "h", "h", ""]} lampAt={0.3} scale={1.15} /></Center>
<Center y={900}><Stamp at={1.76} text="not so fast" color={C6.loss} size={90} /></Center>
</>) },
  { from: 386.88, to: 395.02, back: (<><Stock6 n={70} dur={8.14} dim={0} graphics={true} /></>), el: (<>
<Center y={420}><Col gap={26}>
  <Plate6 at={1.14}><Label6 at={1.14} size={46} color={C6.ink}>THE BUILDING</Label6></Plate6>
  <Plate6 at={2.02}><Label6 at={2.02} size={46} color={C6.ink}>THE LIGHTS</Label6></Plate6>
  <Plate6 at={2.74}><Label6 at={2.74} size={46} color={C6.ink}>THE INSURANCE</Label6></Plate6>
  <Plate6 at={4.94}><Label6 at={4.94} size={46} color={C6.accent}>A KITCHEN MAKING ≈80% IN-HOUSE</Label6></Plate6>
</Col></Center>
<Source6>The Wall Street Journal, via Fox News · Oct 2026</Source6>
</>) },
  { from: 395.02, to: 402.68, back: (<><Stock6 n={88} dur={7.66} dim={0.2} graphics={true} /></>), el: (<>
<Center y={110}><Label6 at={0.05} size={38} color={C6.ink}>OUT OF A $20 TICKET AT A TYPICAL BUFFET</Label6></Center>
<Center y={560}><Donut6 at={4.02} pct={5} center="$1" label="IS PROFIT" color={C6.money} size={600} /></Center>
<Source6>The Hustle · estimate for a typical buffet</Source6>
</>) },
  { from: 402.68, to: 404.96, back: (<><Stock6 n={100} dur={2.28} dim={0} graphics={false} /></>), el: (<>
<Meme at={0.1} text="one (1) dollar" y={900} />
</>) },
  { from: 404.96, to: 413.88, back: (<><Stock6 n={8} dur={8.92} dim={0} graphics={true} />
<Stock6 n={50} from={2.94} dur={8.92} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 at={5.22}><Words text="It only works when the room is full." at={5.22} size={90} hl={["full."]} maxW={1500} /></Plate6></Center>
</>) },
  { from: 413.88, to: 422.0, back: (<><Stock6 n={75} dur={8.12} dim={0} graphics={true} /></>), el: (<>
<Center y={260}><Words text="2020: the room emptied." at={0.2} size={110} hl={["emptied."]} /></Center>
<Center y={580}><Label6 at={3.18} size={46} color={C6.loss}>SALES FELL BY MORE THAN HALF</Label6></Center>
<Center y={720}><Label6 at={6.1} size={46} color={C6.loss}>AT LEAST 80 RESTAURANTS LOST</Label6></Center>
<Source6>WSJ, via Entrepreneur · Sept 2026</Source6>
</>) },
  { from: 422.0, to: 428.06, back: (<><Stock6 n={51} dur={6.06} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Split6 at={0.1} left={{ title: "RESTAURANTS · 2019", value: "483", color: C6.ink }} right={{ title: "END OF 2025", value: "348", color: C6.loss, at: 3.08 }} /></Center>
<Source6>Technomic Top 500 (2019) · FSR (end of 2025)</Source6>
</>) },
  { from: 428.06, to: 437.14, back: (<><Stock6 n={52} dur={9.08} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Split6 at={1.94} left={{ title: "RYAN'S", value: "400 → 16", color: C6.loss }} right={{ title: "OLD COUNTRY BUFFET", value: "350 → 17", color: C6.loss, at: 5.74 }} /></Center>
<Source6>The Hustle</Source6>
</>) },
  { from: 437.14, to: 448.32, back: (<><Stock6 n={103} dur={11.18} dim={0} graphics={true} />
<Stock6 n={87} from={8.28} dur={11.18} dim={0} graphics={true} /></>), el: (<>
<Center y={400}><Plate6 at={5.6}><Words text="“This has been a difficult year for us.”" at={5.6} size={84} hl={["difficult"]} maxW={1500} /><Label6 at={5.6 + 0.6} size={30} color={C6.mint}>LANCE TRENARY, CEO OF GOLDEN CORRAL</Label6></Plate6></Center>
<Center y={800}><Plate6 at={10.02}><Label6 at={10.02} size={46} color={C6.accent}>THE GOAL: “TREAD WATER”</Label6></Plate6></Center>
<Source6>WSJ via Fox News · Oct 2026 · photo: Tyler A. McNeil, CC BY-SA 4.0</Source6>
</>) },
  { from: 448.32, to: 454.8, back: (<><Stock6 n={71} dur={6.48} dim={0} graphics={true} /></>), el: (<>
<Center y={250}><Plate6 at={1.26}><Words text="Because of the regulars." at={1.26} size={96} hl={["regulars."]} /></Plate6></Center>
<Center y={680}><Plate6 at={4.96}><BigNum at={4.96} icon="calendar" size={200} label="VISITS A YEAR · THE MOST LOYAL GUESTS">≈70</BigNum></Plate6></Center>
<Source6>FSR magazine · July 2026</Source6>
</>) },
  { from: 454.8, to: 461.46, back: (<><Stock6 n={69} dur={6.66} dim={0} graphics={true} /></>), el: (<>
<Center y={520}><Split6 at={3.32} left={{ title: "VISITS A MONTH · BEFORE", value: "5–6", color: C6.ink }} right={{ title: "NOW", value: "2", color: C6.loss, at: 5.6 }} /></Center>
<Source6>FSR magazine · July 2026</Source6>
</>) },
  { from: 461.46, to: 469.66, back: (<><Stock6 n={53} dur={8.2} dim={0} graphics={true} />
<Stock6 n={66} from={3.62} dur={8.2} dim={0} graphics={true} /></>), el: (<>
<Center y={480}><Plate6 at={1.7}><BigNum at={1.7} icon="person" size={200} label="A YEAR · THE CHAIN'S CORE CUSTOMER">&lt;$80K</BigNum></Plate6></Center>
<Source6>FSR magazine · July 2026</Source6>
</>) },
  { from: 469.66, to: 477.7, back: (<><Stock6 n={49} dur={8.04} dim={0.25} graphics={true} /></>), el: (<>
<Center y={520}><Split6 at={0.1} left={{ title: "DALE EATS FOUR PLATES", value: "−$6", color: C6.accent }} right={{ title: "A REGULAR STAYS HOME", value: "−$18.99", color: C6.loss, at: 3.6 }} /></Center>
</>) },
  { from: 477.7, to: 481.94, back: (<><Stock6 n={50} dur={4.24} dim={0.1} graphics={true} /></>), el: (<>
<Center y={540}><Words text="The empty chair is." at={1.78} size={150} hl={["empty", "chair"]} /></Center>
</>) },
  { from: 481.94, to: 489.72, back: (<><Stock6 n={83} dur={7.78} dim={0} graphics={false} /></>), el: (<>
<Meme at={6.16} text="champion" y={900} />
</>) },
  { from: 489.72, to: 500.62, back: (<><Stock6 n={16} dur={10.9} dim={0.3} graphics={true} /></>), el: (<>
<Center y={130}><Words text="What actually happened" at={0.05} size={70} hl={["actually"]} /></Center>
<Center y={540}><Col gap={34}>
  <Words text="Grandma → his steak" at={1.74} size={78} hl={["Grandma"]} />
  <Words text="The potatoes → the shrimp" at={3.46} size={78} hl={["potatoes"]} />
  <Words text="The pork chop → the beef" at={4.98} size={78} hl={["pork", "chop"]} />
  <Words text="The soda → itself, ×16" at={7.06} size={78} hl={["×16"]} />
</Col></Center>
</>) },
  { from: 500.62, to: 511.04, back: (<><Stock6 n={57} dur={10.42} dim={0} graphics={true} />
<Stock6 n={70} from={7.76} dur={10.42} dim={0} graphics={true} /></>), el: (<>
<Center y={420}><Plate6 at={3.94}><BigNum at={3.94} icon="store" size={220} label="“UNLIMITED” DEALS AT BIG CHAINS · FIRST HALF OF 2026">≈150</BigNum></Plate6></Center>
<Center y={840}><Plate6 at={7.76}><Label6 at={7.76} size={48} color={C6.accent}>4× AS MANY AS IN 2021</Label6></Plate6></Center>
<Source6>Technomic data, via WSJ / Fox News</Source6>
</>) },
  { from: 511.04, to: 516.06, back: (<><Stock6 n={102} dur={5.02} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 at={2.88}><Words text="Same math, different sauce." at={2.88} size={100} hl={["sauce."]} /></Plate6></Center>
</>) },
  { from: 516.06, to: 524.18, back: (<><Stock6 n={13} dur={8.12} dim={0} graphics={true} /></>), el: (<>
<Center y={540}><Plate6 at={5.6}><Words text="How many people sat down next to you?" at={5.6} size={86} hl={["next", "to", "you?"]} maxW={1500} /></Plate6></Center>
</>) },
  { from: 524.18, to: 529.16, back: (<><Stock6 n={33} dur={4.98} dim={0} graphics={true} /></>), el: (<>
<Center y={500}><Col gap={30}>
  <Plate6 at={1.66}><Label6 at={1.66} size={52} color={C6.accent}>1 · SKIP THE ROLL</Label6></Plate6>
  <Plate6 at={2.6}><Label6 at={2.6} size={52} color={C6.ink}>2 · WALK PAST THE POTATOES</Label6></Plate6>
  <Plate6 at={4.1}><Label6 at={4.1} size={52} color={C6.ink}>3 · DRINK WATER</Label6></Plate6>
</Col></Center>
</>) },
  { from: 529.16, to: 533.18, back: (<><Stock6 n={40} dur={4.02} dim={0} graphics={false} /></>), el: (<>
<Meme at={1.7} text="the real mvp" y={900} />
</>) },
  { from: 533.18, to: 536.36, back: (<><Stock6 n={4} dur={3.18} dim={0} graphics={true} /></>), el: (<>
<Center y={420}><Plate6 at={0.05}><Words text="What's your buffet strategy?" at={0.05} size={100} hl={["strategy?"]} /></Plate6></Center>
<Center y={760}><Plate6 at={1.7}><Label6 at={1.7} size={44} color={C6.accent}>CONFESS IN THE COMMENTS</Label6></Plate6></Center>
</>) },
  { from: 536.36, to: 553.16, back: null, el: (<>
<EndCard6 at={0.2} next="WHY COSTCO'S HOT DOG STILL COSTS $1.50" />
</>) },
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string, number][] = [[5.46, "ep06-stamp", 0.4], [12.8, "ep06-pop", 0.3], [19.9, "ep06-boom", 0.28], [24.14, "ep09-sizzle", 0.3], [37.76, "ep09-bell", 0.5], [39.02, "ep06-whoosh", 0.25], [44.76, "ep06-pop", 0.3], [46.68, "ep06-pop", 0.3], [49.96, "ep06-kaching", 0.25], [62.94, "ep09-sizzle", 0.35], [68.28, "ep06-kaching", 0.25], [74.58, "ep06-pop", 0.3], [83.16, "ep06-scratch", 0.3], [94.26, "ep09-bell", 0.5], [94.66, "ep09-cheer", 0.3], [97.38, "ep06-whoosh", 0.25], [106.98, "ep06-pop", 0.3], [126.56, "ep06-pop", 0.3], [133.4, "ep06-kaching", 0.25], [137.34, "ep06-coin", 0.3], [146.98, "ep06-coin", 0.3], [155.96, "ep06-pop", 0.3], [174.96, "ep09-trombone", 0.3], [183.58, "ep06-stamp", 0.4], [185.66, "ep09-bell", 0.5], [187.2, "ep06-whoosh", 0.25], [187.78, "ep09-sizzle", 0.3], [190.94, "ep06-boom", 0.25], [200.04, "ep09-trombone", 0.3], [204.88, "ep06-pop", 0.3], [221.9, "ep06-counter", 0.3], [231.36, "ep06-stamp", 0.4], [243.04, "ep06-coin", 0.3], [248.1, "ep09-bell", 0.5], [252.2, "ep06-pop", 0.3], [260.42, "ep06-whoosh", 0.25], [264.02, "ep06-pop", 0.3], [267.9, "ep06-kaching", 0.25], [271.36, "ep09-cheer", 0.3], [273.56, "ep09-trombone", 0.3], [284.64, "ep06-counter", 0.3], [291.36, "ep06-kaching", 0.25], [299.2, "ep06-pop", 0.3], [304.28, "ep06-counter", 0.3], [308.98, "ep06-boom", 0.25], [320.04, "ep06-pop", 0.3], [323.48, "ep09-trombone", 0.3], [328.62, "ep06-kaching", 0.25], [334.04, "ep06-boom", 0.3], [335.9, "ep06-coin", 0.3], [345.36, "ep06-pop", 0.3], [356.52, "ep06-kaching", 0.25], [359.5, "ep06-receipt", 0.3], [366.12, "ep06-stamp", 0.4], [379.02, "ep06-boom", 0.3], [381.82, "ep09-bell", 0.5], [383.48, "ep06-scratch", 0.3], [388.02, "ep06-receipt", 0.3], [399.04, "ep06-coin", 0.35], [414.08, "ep06-boom", 0.28], [425.08, "ep06-fall", 0.3], [432.36, "ep06-fall", 0.3], [435.88, "ep06-fall", 0.3], [453.28, "ep06-pop", 0.3], [472.1, "ep06-coin", 0.3], [474.92, "ep06-boom", 0.28], [479.48, "ep06-boom", 0.32], [481.96, "ep06-whoosh", 0.25], [491.46, "ep06-pop", 0.3], [493.18, "ep06-pop", 0.3], [494.7, "ep06-pop", 0.3], [498.76, "ep06-kaching", 0.25], [504.56, "ep06-counter", 0.3], [525.84, "ep06-pop", 0.3], [526.78, "ep06-pop", 0.3], [528.28, "ep06-pop", 0.3], [530.86, "ep09-cheer", 0.25]];

export const Ep09Buffet: React.FC = () => {
  const { fps } = useVideoConfig();
  setClips(CLIP_FN); // свой набор стоков при каждом рендере: в общем Root последним грузится чужой ролик
  return (
    <AbsoluteFill translate="no" className="notranslate" style={{ backgroundColor: C6.bgDeep }}>
      <Bg6 />
      <Audio src={staticFile("audio/ep09-voiceover.mp3")} volume={0.82} />
      <Sequence from={0} durationInFrames={2922}><Audio src={staticFile("audio/ep09/music-trailer.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 2892, 2922], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={2907} durationInFrames={2709}><Audio src={staticFile("audio/ep09/music-r2.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 2679, 2709], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={5601} durationInFrames={2211}><Audio src={staticFile("audio/ep09/music-r3.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 2181, 2211], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={7797} durationInFrames={3654}><Audio src={staticFile("audio/ep09/music-r4.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 3624, 3654], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={11436} durationInFrames={3024}><Audio src={staticFile("audio/ep09/music-r5.mp3")} volume={(f) => 0.11 * interpolate(f, [0, 30, 2994, 3024], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
      <Sequence from={14445} durationInFrames={2150}><Audio src={staticFile("audio/ep09/music-finale.mp3")} volume={(f) => 0.12 * interpolate(f, [0, 30, 2120, 2150], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /></Sequence>
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
