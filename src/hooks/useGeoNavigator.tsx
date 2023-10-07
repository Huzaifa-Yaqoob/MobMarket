"use client";
import { useState, useEffect } from "react";
import getLocation from "@/lib/getLocation";

type Location = {
  lat: number;
  lng: number;
};

export default function useGeoNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
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
      } catch (error) {
        setIsError(true);
      }
    }
    gettingGeoLocation();
  }, []);
  return { isLoading, geoLocation, isError };
}
