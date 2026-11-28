import React from "react";
import { Composition, registerRoot } from "remotion";
import { T11BigMac, T11BIGMAC_DURATION_SEC } from "./videos/T11BigMac";
const Root: React.FC = () => (
  <Composition id="T11-BigMac" component={T11BigMac} durationInFrames={Math.round(T11BIGMAC_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
);
registerRoot(Root);
