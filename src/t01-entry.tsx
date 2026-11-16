import React from "react";
import { Composition, registerRoot } from "remotion";
import { T01Restaurants, T01RESTAURANTS_DURATION_SEC } from "./videos/T01Restaurants";
const Root: React.FC = () => (
  <Composition id="T01-Restaurants" component={T01Restaurants} durationInFrames={Math.round(T01RESTAURANTS_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
);
registerRoot(Root);
