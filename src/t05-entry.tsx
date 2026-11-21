import React from "react";
import { Composition, registerRoot } from "remotion";
import { T05Prices, T05PRICES_DURATION_SEC } from "./videos/T05Prices";
const Root: React.FC = () => (
  <Composition id="T05-Prices" component={T05Prices} durationInFrames={Math.round(T05PRICES_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
);
registerRoot(Root);
