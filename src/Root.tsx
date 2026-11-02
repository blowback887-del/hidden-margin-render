import { Composition, Folder, Still } from "remotion";
import { MyComposition } from "./Composition";
import { Apollo } from "./Apollo";
import { BrandReel, BRAND_REEL_SECONDS } from "./brand/BrandReel";
import { Thumbnail } from "./brand/Thumbnail";
import { MovieTheaters, MOVIE_DURATION_SEC } from "./videos/MovieTheaters";
import { Ep02Gyms, GYMS_DURATION_SEC } from "./videos/Ep02Gyms";
import { ThumbA, ThumbB, ThumbC } from "./brand/Ep02Thumbs";
import { Ep02Short, SHORTS, shortFrames } from "./videos/Ep02Shorts";
import { Ep03Demo, EP03_DEMO_SEC } from "./videos/Ep03Demo";
import { Ep03Airports, EP03_DURATION_SEC, EP03_PILOT_SEC } from "./videos/Ep03Airports";
import { Ep03Short, EP03_SHORTS, ep03ShortFrames } from "./videos/Ep03Shorts";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="HiddenMargin">
        <Composition
          id="Ep01-MovieTheaters"
          component={MovieTheaters}
          durationInFrames={MOVIE_DURATION_SEC * 30}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ captions: false }}
        />
        <Composition
          id="Ep02-Gyms"
          component={Ep02Gyms}
          durationInFrames={GYMS_DURATION_SEC * 30}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="BrandReel"
          component={BrandReel}
          durationInFrames={BRAND_REEL_SECONDS * 30}
          fps={30}
          width={1920}
          height={1080}
        />
        <Still
          id="Thumbnail-Popcorn"
          component={Thumbnail}
          width={1280}
          height={720}
          defaultProps={{ line1: "THE POPCORN", line2: "TRAP" }}
        />
        <Composition id="Ep03-Airports" component={Ep03Airports} durationInFrames={Math.round(EP03_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
        <Composition id="Ep03-Pilot" component={Ep03Airports} durationInFrames={Math.round(EP03_PILOT_SEC * 30)} fps={30} width={1920} height={1080} />
        {EP03_SHORTS.map(({ id, ...p }) => (
          <Composition key={id} id={id} component={Ep03Short} durationInFrames={ep03ShortFrames(p)} fps={30} width={1080} height={1920} defaultProps={p} />
        ))}
        <Composition id="Ep03-StyleDemo" component={Ep03Demo} durationInFrames={EP03_DEMO_SEC * 30} fps={30} width={1920} height={1080} />
        {SHORTS.map(({ id, ...p }) => (
          <Composition key={id} id={id} component={Ep02Short} durationInFrames={shortFrames(p)} fps={30} width={1080} height={1920} defaultProps={p} />
        ))}
        <Still id="Ep02-ThumbA" component={ThumbA} width={1280} height={720} />
        <Still id="Ep02-ThumbB" component={ThumbB} width={1280} height={720} />
        <Still id="Ep02-ThumbC" component={ThumbC} width={1280} height={720} />
      </Folder>
      <Folder name="Tests">
        <Composition id="Apollo" component={Apollo} durationInFrames={420} fps={30} width={1080} height={1920} />
        <MyComposition />
      </Folder>
    </>
  );
};
