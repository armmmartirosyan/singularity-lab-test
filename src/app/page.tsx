import { Header, Map } from "@/components";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Suspense>
        <Map />
      </Suspense>
    </div>
  );
}
