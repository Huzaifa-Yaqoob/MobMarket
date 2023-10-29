import { AspectRatio } from "@/components/ui/aspect-ratio";
import Map from "@/components/map/Map";
import RingsLoader from "@/components/common/RingsLoader";
import Error from "@/components/common/Error";

interface LocationFieldProps {
  error: string;
  isLoading: boolean;
  geoLocation: GeoLocation;
}

export default function UserLocation({
  error,
  isLoading,
  geoLocation,
}: LocationFieldProps): React.ReactElement {
  return (
    <AspectRatio
      ratio={15 / 5}
      className="rounded overflow-hidden border border-input"
    >
      {isLoading ? (
        <RingsLoader />
      ) : error !== "" ? (
        <Error msg={error} />
      ) : (
        <Map geoLocation={geoLocation} />
      )}
    </AspectRatio>
  );
}
