import { Suspense } from "react";
import { Toggle3d } from "./toggle-3d";
import { ModeToggle } from "@/components";

export function Header() {
  return (
    <div className="flex w-full justify-between items-center p-4 absolute top-0 left-0 z-50">
      <Suspense>
        <Toggle3d />
      </Suspense>
      <h1 className="text-forground">Singularity Lab Map</h1>
      <ModeToggle />
    </div>
  );
}
