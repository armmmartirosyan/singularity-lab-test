"use client";

import { useEffect, MutableRefObject } from "react";
import { useSearchParams } from "next/navigation";
import { Map as MapboxMap } from "mapbox-gl";
import { add3DBuildings } from "@/lib/map-utils";

export default function use3dBuildings(
  mapRef: MutableRefObject<MapboxMap | null>
) {
  const searchParams = useSearchParams();
  const is3DView = searchParams.get("is-3d-view") === "1";

  useEffect(() => {
    if (!mapRef.current || !mapRef.current.isStyleLoaded()) return;

    const layerId = "3d-buildings";

    if (is3DView && !mapRef.current.getLayer(layerId)) {
      add3DBuildings(mapRef);
      mapRef.current.setPitch(85);
    } else if (!is3DView && mapRef.current.getLayer(layerId)) {
      mapRef.current.removeLayer(layerId);
      mapRef.current.setPitch(0);
    }
  }, [is3DView, mapRef]);
}
