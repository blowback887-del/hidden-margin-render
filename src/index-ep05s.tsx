// Отдельная точка входа только с Shorts Ep05 — для локальных кадров.
import { Composition, registerRoot } from "remotion";
import { Ep05Short, EP05_SHORTS, ep05ShortFrames } from "./videos/Ep05Shorts";

const RootS: React.FC = () => (
  <>
    {EP05_SHORTS.map(({ id, ...p }) => (
      <Composition key={id} id={id} component={Ep05Short} durationInFrames={ep05ShortFrames(p)} fps={30} width={1080} height={1920} defaultProps={p} />
    ))}
  </>
);
registerRoot(RootS);
