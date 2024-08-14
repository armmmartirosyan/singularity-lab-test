import mapboxgl, { Map as MapboxMap } from "mapbox-gl";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { ChangeSelectedBuilding, MapContainerRef } from "@/types";
import use3dBuildings from "./use-3d-buildings";
import useMapStyle from "./use-map-style";
import {
  add3DBuildings,
  getAddressFromCoordinates,
  highlightSelectedBuilding,
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

  useEffect(() => {
    if (mapRef.current || !mapContainerRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: mapStyle,
      center: [44.5, 40.5],
      bearing: -17.6,
      maxPitch: 85,
      zoom: 9,
    });

    mapRef.current.on("load", () => {
      mapRef.current!.on("click", "3d-buildings", async (event) => {
        const coordinates = event.lngLat;

        const address = await getAddressFromCoordinates(coordinates);

        const features = mapRef.current?.queryRenderedFeatures(event.point, {
          layers: ["3d-buildings"],
        });

        if (features && features.length > 0) {
          const building = features[0];
          building.properties = { ...building.properties, address };

          changeSelectedBuilding(building);
          highlightSelectedBuilding(mapRef, building);
        }
      });

      mapRef.current!.on("mouseenter", "3d-buildings", () => {
        mapRef.current!.getCanvas().style.cursor = "pointer";
      });

      mapRef.current!.on("mouseleave", "3d-buildings", () => {
        mapRef.current!.getCanvas().style.cursor = "";
      });

      if (
        is3DView &&
        mapRef.current &&
        !mapRef.current.getLayer("3d-buildings")
      ) {
        add3DBuildings(mapRef);
      }
    });
  }, [mapStyle, mapRef, mapContainerRef, is3DView, changeSelectedBuilding]);
}
