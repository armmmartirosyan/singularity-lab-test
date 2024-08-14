"use client";

import React, { useCallback } from "react";
import { CircleX } from "lucide-react";
import { SelectedBuildingProps } from "@/types";

export function SelectedBuilding({
  building,
  changeSelectedBuilding,
}: SelectedBuildingProps) {
  const handleClose = useCallback(() => {
    changeSelectedBuilding(null);
  }, [changeSelectedBuilding]);

  if (!building.properties) {
    return <></>;
  }

  return (
    <div className="w-full h-1/4 bg-card absolute bottom-0 left-0 overflow-hidden">
      <div className="relative">
        <h3 className="text-base text-center my-4 text-forground">
          Building Details
        </h3>
        <p className="text-sm px-6 text-foreground">
          Height: {building.properties.height}m
        </p>
        <p className="text-sm px-6 text-foreground capitalize">
          Type: {building.properties.type}
        </p>
        <p className="text-sm px-6 text-foreground">
          Address: {building.properties.address}
        </p>

        <CircleX
          onClick={handleClose}
          className="absolute top-2 right-6 cursor-pointer"
        />
      </div>
    </div>
  );
}
