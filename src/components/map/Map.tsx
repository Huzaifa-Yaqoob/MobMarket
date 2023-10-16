"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import CustomMarker from "./CustomMarker";

export default function Map({
  geoLocation,
}: {
  geoLocation: GeoLocation;
}): React.ReactElement {
  return (
    <div className="h-full">
      <MapContainer center={geoLocation} zoom={15} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <CustomMarker geoLocation={geoLocation} />
      </MapContainer>
    </div>
  );
}
