import * as z from "zod";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Map from "@/components/map/Map";
import useGeoNavigator from "@/hooks/useGeoNavigator";
import { orderFormSchema } from "@/lib/zodSchemas";

type LocationFieldProps = {
  field: {
    name: string;
    value: z.infer<typeof orderFormSchema>["geoLocation"];
  };
};

export default function UserLocation({
  field,
}: LocationFieldProps): React.ReactElement {
  const { isLoading, isError, geoLocation } = useGeoNavigator();

  return (
    <AspectRatio ratio={15 / 5} className="rounded overflow-hidden">
      {isLoading ? (
        <>Loading</>
      ) : isError ? (
        <>Error</>
      ) : (
        <Map geoLocation={geoLocation} />
      )}
    </AspectRatio>
  );
}
