import React from "react";
import { Composition, registerRoot } from "remotion";
import { T09Short, T09SHORT_DURATION_SEC } from "./videos/T09Short";
const Root: React.FC = () => (
  <Composition id="T09-Short" component={T09Short} durationInFrames={Math.round(T09SHORT_DURATION_SEC * 30)} fps={30} width={1080} height={1920} />
);
registerRoot(Root);
