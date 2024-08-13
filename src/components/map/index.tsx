"use client";

import { useRef } from "react";
import useInitMap from "@/hooks/use-init-map";
import "mapbox-gl/dist/mapbox-gl.css";

export function Map() {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useInitMap(mapContainerRef);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
  );
}
