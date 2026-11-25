import React from "react";
import { Composition, registerRoot } from "remotion";
import { T08Menu, T08MENU_DURATION_SEC } from "./videos/T08Menu";
const Root: React.FC = () => (
  <Composition id="T08-Menu" component={T08Menu} durationInFrames={Math.round(T08MENU_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
);
registerRoot(Root);
