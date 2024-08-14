import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GeoJSONFeature } from "mapbox-gl";
import { useTheme } from "next-themes";

export default function useSelectedBuilding() {
  const [selectedBuilding, setSelectedBuilding] =
    useState<GeoJSONFeature | null>(null);
  const searchParams = useSearchParams();
  const { theme } = useTheme();

  const is3DView = searchParams.get("is-3d-view") === "1";

  const changeSelectedBuilding = useCallback(
    (building: GeoJSONFeature | null) => {
      setSelectedBuilding(building);
    },
    []
  );

  useEffect(() => {
    setSelectedBuilding(null);
  }, [is3DView, theme]);

  return {
    selectedBuilding,
    changeSelectedBuilding,
  };
}
