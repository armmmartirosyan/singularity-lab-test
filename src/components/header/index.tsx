import { ModeToggle } from "@/components";
import { Toggle3d } from "./toggle-3d";
import { Suspense } from "react";

export function Header() {
  return (
    <div className="flex w-full justify-between items-center p-4 absolute top-0 left-0">
      <Suspense>
        <Toggle3d />
      </Suspense>
      <h1>Singularity Lab Map</h1>
      <ModeToggle />
    </div>
  );
}
