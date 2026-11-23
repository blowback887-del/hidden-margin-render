import React from "react";
import { Composition, registerRoot } from "remotion";
import { T07Gas, T07GAS_DURATION_SEC } from "./videos/T07Gas";
const Root: React.FC = () => (
  <Composition id="T07-Gas" component={T07Gas} durationInFrames={Math.round(T07GAS_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
);
registerRoot(Root);
