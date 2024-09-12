/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import VeterinaryCard from "@/components/UI/VeterinaryCard";
import useGoogleMaps from "@/hooks/useGoogleMaps";

export default function Vets() {
  const { map, mapRef, placesService, location } = useGoogleMaps();
  const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>([]);

  useEffect(() => {
    if (map && placesService) {
      map.setCenter(location);

      const request: google.maps.places.PlaceSearchRequest = {
        location: new google.maps.LatLng(location.lat, location.lng),
        radius: 500,
        type: "veterinary_care",
      };

      placesService.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          results.forEach((place) => {
            if (place.place_id) {
              placesService.getDetails(
                { placeId: place.place_id },
                (placeDetails, detailsStatus) => {
                  if (
                    detailsStatus ===
                      google.maps.places.PlacesServiceStatus.OK &&
                    placeDetails
                  ) {
                    setPlaces((prevPlaces) => [...prevPlaces, placeDetails]);
                  }
                }
              );
            }

            if (place.geometry && place.geometry.location) {
              new google.maps.marker.AdvancedMarkerElement({
                map,
                position: place.geometry.location,
                title: place.name || "Veterinaria",
              });
            }
          });
        }
      });
    }
  }, [location, map, placesService]);

  return (
    <div className="pt-20 min-h-screen px-2 lg:px-28">
      <div className="h-[400px] md:h-[500px] w-full" ref={mapRef}></div>
      <div className="flex flex-col items-center my-4 gap-4">
        {places.slice(0, 15).map((place: google.maps.places.PlaceResult) => (
          <VeterinaryCard key={place.place_id} place={place} />
        ))}
      </div>
    </div>
  );
}
