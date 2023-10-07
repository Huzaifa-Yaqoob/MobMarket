import { Map, AlertTriangle } from "lucide-react";
import { TailSpin } from "react-loader-spinner";

type MapToGoogleMapProps = {
  isLoading: boolean;
  error: string;
  geoLocation: {
    lat: number;
    lng: number;
  };
};

export default function MapToGoogleMap({
  isLoading,
  error,
  geoLocation,
}: MapToGoogleMapProps) {
  const mapUrl = `https://www.google.com/maps?q=${geoLocation.lat},${geoLocation.lng}`;

  return (
    <div className="bg-primary text-primary-foreground rounded p-1 cursor-pointer">
      {isLoading ? (
        <TailSpin
          radius={1}
          color="hsl(var(--primary-foreground))"
          ariaLabel="puff-loading"
          wrapperClass="h-5 w-5 flex items-center"
          visible={true}
        />
      ) : error !== "" ? (
        <AlertTriangle />
      ) : (
        <a href={mapUrl} target="_blank">
          <Map />
        </a>
      )}
    </div>
  );
}
