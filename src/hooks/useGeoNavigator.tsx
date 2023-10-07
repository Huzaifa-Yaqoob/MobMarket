"use client";
import { useState, useEffect } from "react";
import getLocation from "@/lib/getLocation";

type Location = {
  lat: number;
  lng: number;
};

export default function useGeoNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [geoLocation, setGeoLocation] = useState<Location>({
    lat: 0,
    lng: 0,
  });
  useEffect(() => {
    setIsLoading(true);
    async function gettingGeoLocation() {
      try {
        const location = await getLocation();
        setGeoLocation(location);
        setIsLoading(false);
      } catch (error: any) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError(
              "Access to geolocation denied. Please allow access to ensure product delivery."
            );
            break;
          case error.POSITION_UNAVAILABLE:
            setError("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            setError("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            setError("An unknown error occurred.");
            break;
          default:
            setError("An unknown error occurred.");
        }
        setIsLoading(false);
      }
    }
    gettingGeoLocation();
  }, []);
  return { isLoading, geoLocation, error };
}
