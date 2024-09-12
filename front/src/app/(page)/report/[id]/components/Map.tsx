"use client";

import useGoogleMaps from "@/hooks/useGoogleMaps";

export default function Map() {
  const { mapRef } = useGoogleMaps();

  return <div className="h-[400px] md:h-[500px] w-full" ref={mapRef}></div>;
}
