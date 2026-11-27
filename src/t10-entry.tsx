import React from "react";
import { Composition, registerRoot } from "remotion";
import { T10Rest, T10REST_DURATION_SEC } from "./videos/T10Rest";
const Root: React.FC = () => (
  <Composition id="T10-Rest" component={T10Rest} durationInFrames={Math.round(T10REST_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
);
registerRoot(Root);
