"use client";

import { useState, useEffect } from "react";
import { Map, AlertTriangle } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MapToGoogleMapProps {
  isLoading: boolean;
  error: string;
  geoLocation: GeoLocation;
}

export default function MapToGoogleMap({
  isLoading,
  error,
  geoLocation,
}: MapToGoogleMapProps): React.ReactElement {
  const [tipOpen, setTipOpen] = useState(true);

  useEffect(() => {
    (function () {
      setTimeout(function () {
        setTipOpen(false);
      }, 10000);
    })();
  }, []);
  const mapUrl = `https://www.google.com/maps?q=${geoLocation.lat},${geoLocation.lng}`;

  return (
    <>
      {isLoading ? (
        <Skeleton className="h-8 w-8 bg-primary" />
      ) : error !== "" ? (
        <div className="bg-destructive text-destructive-foreground rounded p-1">
          <AlertTriangle />
        </div>
      ) : (
        <TooltipProvider>
          <Tooltip open={tipOpen}>
            <TooltipTrigger type="button">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary text-primary-foreground rounded p-1"
              >
                <Map />
              </a>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              align="center"
              className="border border-primary text-primary"
            >
              <p>Open in Google Maps</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </>
  );
}
