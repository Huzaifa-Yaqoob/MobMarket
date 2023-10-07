"use client";
import { useState, useEffect } from "react";
import axios from "Axios";
import getLocation, { geoLocation } from "@/lib/getLocation";
import { unknown } from "zod";

// type Location = {
//   lat: number;
//   lng: number;
// };

type IpApiResponse = {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: number;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
};

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
      // try {
      //   const response: IpApiResponse = await axios.get(
      //     "https://ipapi.co/json/"
      //   );
      //   console.log(response);
      //   setGeoLocation({ lat: response.latitude, lng: response.longitude });
      // } catch (error) {
      //   setIsError(true);
      // }
    }
    gettingGeoLocation();
  }, []);
  return { isLoading, geoLocation, isError };
}
