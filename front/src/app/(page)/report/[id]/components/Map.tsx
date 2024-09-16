"use client";

import useGoogleMaps from "@/hooks/useGoogleMaps";
import clsx from "clsx";

export default function Map({ className }: { className?: string }) {
  const { mapRef } = useGoogleMaps();

  return (
    <div
      className={clsx("h-[400px] md:h-[500px] w-full", className)}
      ref={mapRef}
    ></div>
  );
}
