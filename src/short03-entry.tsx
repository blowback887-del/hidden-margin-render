import React from "react";
import { Composition, registerRoot } from "remotion";
import { Short03, SHORT03_DURATION_SEC } from "./videos/Short03";
const Root: React.FC = () => (
  <Composition id="Short03" component={Short03} durationInFrames={Math.round(SHORT03_DURATION_SEC * 30)} fps={30} width={1080} height={1920} />
);
registerRoot(Root);
