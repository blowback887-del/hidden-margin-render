import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from "remotion";
import { Bg6, BigNum, Bug6, C6, Center, ChapterTag, Counter6, Label6, Meme, PriceSign, Row, Scene6, setClips, Source6, Stock6, TitleCard, TrailerFrame, Words } from "../brand/hm6";

// ===================================================================
// Ep06Gas — сгенерировано cloud/gen/build.py из плана cloud/gen/ep06.py и пословной расшифровки.
// Не править руками: правки — в плане сцен, потом заново build.py.
// ===================================================================
export const EP06GASPILOT_DURATION_SEC = 44.52;
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
];

// звуковые эффекты — только на смысловые события (секунды ролика)
const SFX: [number, string][] = [];

export const Ep06GasPilot: React.FC = () => {
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
