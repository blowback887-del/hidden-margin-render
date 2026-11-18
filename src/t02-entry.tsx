import React from "react";
import { Composition, registerRoot } from "remotion";
import { T02Sample, T02SAMPLE_DURATION_SEC } from "./videos/T02Sample";
const Root: React.FC = () => (
  <Composition id="T02-Sample" component={T02Sample} durationInFrames={Math.round(T02SAMPLE_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
);
registerRoot(Root);
