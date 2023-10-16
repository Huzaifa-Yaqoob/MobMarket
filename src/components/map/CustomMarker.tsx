import L from "leaflet";
import { Marker, useMapEvents } from "react-leaflet";

export default function CustomMarker({
  geoLocation,
}: {
  geoLocation: GeoLocation;
}): React.ReactElement {
  const map = useMapEvents({
    click() {
      map.flyTo(geoLocation, 15);
    },
  });

  const pinIcon = L.icon({
    iconUrl: "/assets/MobMarker.png",
    iconSize: [30, 38],
  });
  return <Marker position={geoLocation} icon={pinIcon}></Marker>;
}
