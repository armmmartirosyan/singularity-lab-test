"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";

export function Toggle3d() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const is3DView = searchParams.get("is-3d-view") === "1";

  const toggle3D = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("is-3d-view", is3DView ? "0" : "1");

    router.push(pathname + "?" + params.toString());
  }, [searchParams, is3DView, router, pathname]);

  return (
    <Button onClick={toggle3D} variant="outline">
      {is3DView ? "2D" : "3D"}
    </Button>
  );
}
