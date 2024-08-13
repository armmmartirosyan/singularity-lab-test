"use client";

import { MutableRefObject, useEffect, useMemo } from "react";
import { Map as MapboxMap } from "mapbox-gl";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { DARK_MAP_STYLE, LIGHT_MAP_STYLE } from "@/constants";

export default function useMapStyle(
  mapRef: MutableRefObject<MapboxMap | null>
) {
  const { theme } = useTheme();
  const router = useRouter();

  const mapStyle = useMemo(() => {
    if (theme === "light") return LIGHT_MAP_STYLE;

    return DARK_MAP_STYLE;
  }, [theme]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setStyle(mapStyle);

      if (mapRef.current.getLayer("3d-buildings")) {
        mapRef.current.removeLayer("3d-buildings");
        mapRef.current.setPitch(0);
        router.push("/");
      }
    }
  }, [mapStyle, mapRef, router]);

  return mapStyle;
}
