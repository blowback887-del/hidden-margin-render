// Отдельная точка входа только с Ep07 — для локальных листов кадров.
import { Composition, registerRoot } from "remotion";
import { Ep07Grocery, EP07GROCERY_DURATION_SEC } from "./videos/Ep07Grocery";

const Root7: React.FC = () => (
  <>
    <Composition id="Ep07-Grocery" component={Ep07Grocery} durationInFrames={Math.round(EP07GROCERY_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
  </>
);
registerRoot(Root7);
