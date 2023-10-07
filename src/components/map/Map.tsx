"use client";
import L from "leaflet";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useGeoNavigator from "@/hooks/useGeoNavigator";

export default function Map({
  geoLocation,
}: {
  geoLocation: { lat: number; lng: number };
}) {
  // const { geoLocation, isLoading, isError } = useGeoNavigator();
  const pinIcon = L.icon({
    iconUrl: "/assets/MobMarker.png",
    iconSize: [30, 38],
  });

  console.log(geoLocation);
  return (
    <div className="h-full">
      <MapContainer center={geoLocation} zoom={50} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={geoLocation} icon={pinIcon}>
          <Popup>A sample popup for the marker.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
