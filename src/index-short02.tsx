// Отдельная точка входа только с Short02 — для локального рендера.
import { Composition, registerRoot } from "remotion";
import { Short02, SHORT02_DURATION_SEC } from "./videos/Short02";

const RootS2: React.FC = () => (
  <Composition id="Short02" component={Short02} durationInFrames={Math.round(SHORT02_DURATION_SEC * 30)} fps={30} width={1080} height={1920} />
);
registerRoot(RootS2);
