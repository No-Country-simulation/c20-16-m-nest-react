/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import VeterinaryCard from "@/components/UI/VeterinaryCard";

export default function Vets() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState({
    lat: -34.58836,
    lng: -58.41053,
  });
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [placesService, setPlacesService] =
    useState<google.maps.places.PlacesService | null>(null);
  const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>([]);

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error(error);
          }
        );
      }
    };

    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
      });

      const { Map } = await loader.importLibrary("maps");
      const { PlacesService } = await loader.importLibrary("places");
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");

      const mapOptions: google.maps.MapOptions = {
        center: location,
        zoom: 15,
        mapId: "VETS",
      };

      const newMap = new Map(mapRef.current as HTMLDivElement, mapOptions);
      setMap(newMap);

      const newPlacesService = new PlacesService(newMap);
      setPlacesService(newPlacesService);
    };

    getUserLocation();
    initMap();
  }, []);

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
    <div className="min-h-screen px-2 lg:px-28">
      <div className="h-[400px] md:h-[500px] w-full" ref={mapRef}></div>
      <div className="flex flex-col items-center my-4 gap-4">
        {places.slice(0, 15).map((place: google.maps.places.PlaceResult) => (
          <VeterinaryCard key={place.place_id} place={place} />
        ))}
      </div>
    </div>
  );
}
