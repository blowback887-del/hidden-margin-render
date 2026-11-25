import React from "react";
import { Composition, Folder } from "remotion";
import { Ru01Outlets, RU01OUTLETS_DURATION_SEC } from "./videos/Ru01Outlets";
import { T01Restaurants, T01RESTAURANTS_DURATION_SEC } from "./videos/T01Restaurants";
import { T02Sample, T02SAMPLE_DURATION_SEC } from "./videos/T02Sample";
import { T03Price, T03PRICE_DURATION_SEC } from "./videos/T03Price";
import { T04Lens, T04LENS_DURATION_SEC } from "./videos/T04Lens";
import { T01Short, T01SHORT_DURATION_SEC } from "./videos/T01Short";
import { T05Prices, T05PRICES_DURATION_SEC } from "./videos/T05Prices";
import { T06Menu, T06MENU_DURATION_SEC } from "./videos/T06Menu";
import { T07Gas, T07GAS_DURATION_SEC } from "./videos/T07Gas";
import { T08Menu, T08MENU_DURATION_SEC } from "./videos/T08Menu";

// Новый канал THEY SAW YOU COMING (15.11.2026): ролики старого канала удалены из репозитория (есть в истории git).
// Образцы кода: src/videos/Ep09Buffet.tsx (план — cloud/gen/ep09.py) и src/videos/TikTok01.tsx — без ассетов, не рендерятся.
export const RemotionRoot: React.FC = () => {
  return (
    <Folder name="TheySawYouComing">
      <Composition id="T08-Menu" component={T08Menu} durationInFrames={Math.round(T08MENU_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
      <Composition id="T06-Menu" component={T06Menu} durationInFrames={Math.round(T06MENU_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
      <Composition id="T07-Gas" component={T07Gas} durationInFrames={Math.round(T07GAS_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
      <Composition id="Ru01-Outlets" component={Ru01Outlets} durationInFrames={Math.round(RU01OUTLETS_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
      <Composition id="T04-Lens" component={T04Lens} durationInFrames={Math.round(T04LENS_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
      <Composition id="T05-Prices" component={T05Prices} durationInFrames={Math.round(T05PRICES_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
      <Composition id="T03-Price" component={T03Price} durationInFrames={Math.round(T03PRICE_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
      <Composition id="T02-Sample" component={T02Sample} durationInFrames={Math.round(T02SAMPLE_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
      <Composition id="T01-Restaurants" component={T01Restaurants} durationInFrames={Math.round(T01RESTAURANTS_DURATION_SEC * 30)} fps={30} width={1920} height={1080} />
      <Composition id="T01-Short" component={T01Short} durationInFrames={Math.round(T01SHORT_DURATION_SEC * 30)} fps={30} width={1080} height={1920} />
    </Folder>
  );
};
