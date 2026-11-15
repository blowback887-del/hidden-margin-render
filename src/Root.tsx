import React from "react";
import { Composition, Folder } from "remotion";
import { Ru01Outlets, RU01OUTLETS_DURATION_SEC } from "./videos/Ru01Outlets";

// Новый канал THEY SAW YOU COMING (15.11.2026): ролики старого канала удалены из репозитория (есть в истории git).
// Образцы кода: src/videos/Ep09Buffet.tsx (план — cloud/gen/ep09.py) и src/videos/TikTok01.tsx — без ассетов, не рендерятся.
export const RemotionRoot: React.FC = () => {
  return (
    <Folder name="TheySawYouComing">
      <Composition id="Ru01-Outlets" component={Ru01Outlets} durationInFrames={Math.round(RU01OUTLETS_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
    </Folder>
  );
};
