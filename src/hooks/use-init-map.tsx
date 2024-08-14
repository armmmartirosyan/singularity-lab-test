"use client";

import mapboxgl, { Map as MapboxMap } from "mapbox-gl";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { ChangeSelectedBuilding, MapContainerRef } from "@/types";
import use3dBuildings from "./use-3d-buildings";
import useMapStyle from "./use-map-style";
import {
  add3DBuildings,
  applyBuildingLabel,
  applyHoverEvents,
  apply3DBuildingClick,
} from "@/lib/map-utils";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

export default function useInitMap(
  mapContainerRef: MapContainerRef,
  changeSelectedBuilding: ChangeSelectedBuilding
) {
  const mapRef = useRef<MapboxMap | null>(null);
  const mapStyle = useMapStyle(mapRef);
  const searchParams = useSearchParams();
  const is3DView = searchParams.get("is-3d-view") === "1";

  use3dBuildings(mapRef);

  const apply3DBuildingsOnInit = useCallback(() => {
    if (
      is3DView &&
      mapRef.current &&
      !mapRef.current.getLayer("3d-buildings")
    ) {
      add3DBuildings(mapRef);
    }
  }, [is3DView]);

  const onMapLoad = useCallback(() => {
    apply3DBuildingClick(mapRef, changeSelectedBuilding);
    applyHoverEvents(mapRef);
    apply3DBuildingsOnInit();
    applyBuildingLabel(mapRef);
  }, [apply3DBuildingsOnInit, changeSelectedBuilding]);

  useEffect(() => {
    if (!mapRef.current && mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: mapStyle,
        center: [40, 55],
        bearing: -17.6,
        maxPitch: 85,
        zoom: 9,
      });
    }
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.on("load", onMapLoad);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.off("load", onMapLoad);
      }
    };
  }, [onMapLoad]);
}
