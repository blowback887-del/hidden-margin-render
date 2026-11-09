// Отдельная точка входа только с Short01 — для локального рендера.
import { Composition, registerRoot } from "remotion";
import { Short01, SHORT01_DURATION_SEC } from "./videos/Short01";

const RootS1: React.FC = () => (
  <Composition id="Short01" component={Short01} durationInFrames={Math.round(SHORT01_DURATION_SEC * 30)} fps={30} width={1080} height={1920} />
);
registerRoot(RootS1);
