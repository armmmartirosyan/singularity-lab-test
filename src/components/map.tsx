"use client";

import { useRef } from "react";
import useSelectedBuilding from "@/hooks/use-selected-building";
import { SelectedBuilding } from "./selected-building";
import useInitMap from "@/hooks/use-init-map";
import "mapbox-gl/dist/mapbox-gl.css";

export function Map() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const { selectedBuilding, changeSelectedBuilding } = useSelectedBuilding();

  useInitMap(mapContainerRef, changeSelectedBuilding);

  return (
    <>
      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
      {selectedBuilding && (
        <SelectedBuilding
          building={selectedBuilding}
          changeSelectedBuilding={changeSelectedBuilding}
        />
      )}
    </>
  );
}
