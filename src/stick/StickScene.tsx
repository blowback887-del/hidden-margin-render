import React, { useMemo } from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { ProjectCtx } from "./ctx";
import { useFontReady } from "./fonts";
import { SceneView } from "./SceneView";
import { THEMES } from "./theme";
import type { Project, Scene, ThemeName } from "./types";

// 3D-стикмен сцена внутри нашего ролика (движок из stickman-studio).
// scene — описание как в project.json, без start/end: длина берётся из len.
export type StickSpec = Omit<Scene, "start" | "end">;

export const StickScene: React.FC<{ spec: StickSpec; len: number; theme?: ThemeName }> = ({ spec, len, theme = "pastel" }) => {
  const { fps, width, height } = useVideoConfig();
  const ready = useFontReady();
  const ctx = useMemo(() => {
    const project: Project = {
      fps, width, height, duration: len, theme, letterbox: false, subtitles: false,
      brand: { name: "HIDDEN MARGIN", color: "#2fdc7f", icon: "none" },
      audio: { voice: "" },
      scenes: [],
    };
    return { project, theme: THEMES[theme], brandColor: "#2fdc7f", brandName: "HIDDEN MARGIN" };
  }, [fps, width, height, len, theme]);
  if (!ready) return <AbsoluteFill style={{ background: "#0d1322" }} />;
  return (
    <ProjectCtx.Provider value={ctx}>
      <SceneView scene={{ ...spec, start: 0, end: len }} />
    </ProjectCtx.Provider>
  );
};
