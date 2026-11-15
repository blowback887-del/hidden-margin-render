import React from "react";
import { Composition, registerRoot } from "remotion";
import { TikTok01, TIKTOK01_DURATION_SEC } from "./videos/TikTok01";
const D = Math.round(TIKTOK01_DURATION_SEC * 30);
const Root: React.FC = () => (
  <>
    <Composition id="TikTok01" component={TikTok01} durationInFrames={D} fps={30} width={1080} height={1920} defaultProps={{ music: false }} />
    <Composition id="TikTok01Music" component={TikTok01} durationInFrames={D} fps={30} width={1080} height={1920} defaultProps={{ music: true }} />
  </>
);
registerRoot(Root);
