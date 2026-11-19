import React from "react";
import { Composition, registerRoot } from "remotion";
import { T03Price, T03PRICE_DURATION_SEC } from "./videos/T03Price";
const Root: React.FC = () => (
  <Composition id="T03-Price" component={T03Price} durationInFrames={Math.round(T03PRICE_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
);
registerRoot(Root);
