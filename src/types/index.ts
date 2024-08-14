import { GeoJSONFeature, Map as MapboxMap } from "mapbox-gl";
import { MutableRefObject, RefObject } from "react";

export type OnlyChildren = {
  children: React.ReactNode;
};

export type MapRef = MutableRefObject<MapboxMap | null>;

export type MapContainerRef = RefObject<HTMLDivElement>;

export type ChangeSelectedBuilding = (b: GeoJSONFeature | null) => void;

export type GeolocationObject = {
  lng: number;
  lat: number;
};

export type SelectedBuildingProps = {
  building: GeoJSONFeature;
  changeSelectedBuilding: ChangeSelectedBuilding;
};
