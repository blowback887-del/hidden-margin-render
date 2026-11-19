import React from "react";
import { Composition, registerRoot } from "remotion";
import { T04Lens, T04LENS_DURATION_SEC } from "./videos/T04Lens";
const Root: React.FC = () => (
  <Composition id="T04-Lens" component={T04Lens} durationInFrames={Math.round(T04LENS_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
);
registerRoot(Root);
