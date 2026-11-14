import React from "react";
import { Composition, registerRoot } from "remotion";
import { Ep09Buffet, EP09BUFFET_DURATION_SEC } from "./videos/Ep09Buffet";
const Root: React.FC = () => (
  <Composition id="Ep09-Buffet" component={Ep09Buffet} durationInFrames={Math.round(EP09BUFFET_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
);
registerRoot(Root);
