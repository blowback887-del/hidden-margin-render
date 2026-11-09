// Отдельная точка входа только с Ep06 — для локальных листов кадров (без шрифтов из сети у старых роликов).
import { Composition, registerRoot } from "remotion";
import { Ep06Gas, EP06GAS_DURATION_SEC } from "./videos/Ep06Gas";
import { Ep06GasPilot, EP06GASPILOT_DURATION_SEC } from "./videos/Ep06GasPilot";

const Root6: React.FC = () => (
  <>
    <Composition id="Ep06-Gas" component={Ep06Gas} durationInFrames={Math.round(EP06GAS_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
    <Composition id="Ep06-Gas-Pilot" component={Ep06GasPilot} durationInFrames={Math.round(EP06GASPILOT_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
  </>
);
registerRoot(Root6);
