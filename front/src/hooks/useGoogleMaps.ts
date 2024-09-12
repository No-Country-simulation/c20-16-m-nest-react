/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function useGoogleMaps() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState({
    lat: -34.58836,
    lng: -58.41053,
  });
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [placesService, setPlacesService] =
    useState<google.maps.places.PlacesService | null>(null);

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

      new AdvancedMarkerElement({
        map: newMap,
        position: new google.maps.LatLng(location.lat, location.lng),
        title: "Mi ubicación",
      });
    };

    getUserLocation();
    initMap();
  }, []);

  return { map, mapRef, placesService, location, setLocation };
}
