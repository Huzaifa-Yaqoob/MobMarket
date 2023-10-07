import * as z from "zod";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Map from "@/components/map/Map";
import Loader from "@/components/common/Loader";
import Error from "@/components/common/Error";

type LocationFieldProps = {
  isError: boolean;
  isLoading: boolean;
  geoLocation: { lat: number; lng: number };
};

export default function UserLocation({
  isError,
  isLoading,
  geoLocation,
}: LocationFieldProps): React.ReactElement {
  return (
    <AspectRatio
      ratio={15 / 5}
      className="rounded overflow-hidden border border-input"
    >
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error msg={"This is error message."} />
      ) : (
        <Map geoLocation={geoLocation} />
      )}
    </AspectRatio>
  );
}
