"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { add3DBuildings } from "@/lib/map-utils";
import { MapRef } from "@/types";

export default function use3dBuildings(mapRef: MapRef) {
  const searchParams = useSearchParams();
  const is3DView = searchParams.get("is-3d-view") === "1";

  useEffect(() => {
    if (!mapRef.current || !mapRef.current.isStyleLoaded()) return;

    const layerId = "3d-buildings";

    if (is3DView && !mapRef.current.getLayer(layerId)) {
      add3DBuildings(mapRef);
    } else if (!is3DView && mapRef.current.getLayer(layerId)) {
      mapRef.current.removeLayer(layerId);
      mapRef.current.setPitch(0);
    }
  }, [is3DView, mapRef]);
}
