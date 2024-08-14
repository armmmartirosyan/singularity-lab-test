import { GeoJSONFeature } from "mapbox-gl";
import { GeolocationObject, MapRef } from "@/types";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

export function add3DBuildings(mapRef: MapRef) {
  if (!mapRef.current) return;

  mapRef.current.addLayer({
    id: "3d-buildings",
    source: "composite",
    "source-layer": "building",
    type: "fill-extrusion",
    minzoom: 15,
    paint: {
      "fill-extrusion-color": "#aaa",
      "fill-extrusion-height": [
        "interpolate",
        ["linear"],
        ["zoom"],
        15,
        0,
        15.05,
        ["get", "height"],
      ],
      "fill-extrusion-base": [
        "interpolate",
        ["linear"],
        ["zoom"],
        15,
        0,
        15.05,
        ["get", "min_height"],
      ],
      "fill-extrusion-opacity": 0.6,
    },
  });

  mapRef.current.setPitch(85);
}

export function highlightSelectedBuilding(
  mapRef: MapRef,
  building: GeoJSONFeature
) {
  console.log({ building });

  if (!mapRef.current) return;

  if (mapRef.current.getLayer("selected-building")) {
    mapRef.current.removeLayer("selected-building");
  }

  mapRef.current.addLayer({
    id: "selected-building",
    source: "composite",
    "source-layer": "building",
    filter: ["==", "height", 6],
    type: "fill-extrusion",
    paint: {
      "fill-extrusion-color": "#ff0000",
      "fill-extrusion-height": [
        "interpolate",
        ["linear"],
        ["zoom"],
        15,
        0,
        15.05,
        ["get", "height"],
      ],
      "fill-extrusion-base": [
        "interpolate",
        ["linear"],
        ["zoom"],
        15,
        0,
        15.05,
        ["get", "min_height"],
      ],
      "fill-extrusion-opacity": 0.6,
    },
  });
}

export async function getAddressFromCoordinates({
  lng,
  lat,
}: GeolocationObject) {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${ACCESS_TOKEN}`
    );

    const data = await response.json();

    if (data && data.features && data.features.length > 0) {
      return data.features[0].place_name;
    } else {
      return "No address found";
    }
  } catch (error) {
    return "No address found";
  }
}
