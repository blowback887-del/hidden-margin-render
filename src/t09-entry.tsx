import React from "react";
import { Composition, registerRoot } from "remotion";
import { T09Outlet, T09OUTLET_DURATION_SEC } from "./videos/T09Outlet";
const Root: React.FC = () => (
  <Composition id="T09-Outlet" component={T09Outlet} durationInFrames={Math.round(T09OUTLET_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
);
registerRoot(Root);
