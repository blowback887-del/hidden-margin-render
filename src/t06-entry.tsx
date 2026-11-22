import React from "react";
import { Composition, registerRoot } from "remotion";
import { T06Menu, T06MENU_DURATION_SEC } from "./videos/T06Menu";
const Root: React.FC = () => (
  <Composition id="T06-Menu" component={T06Menu} durationInFrames={Math.round(T06MENU_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
);
registerRoot(Root);
