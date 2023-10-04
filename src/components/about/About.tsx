"use client";
import { useState, useCallback } from "react";
import { Map } from "react-map-gl";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-primary border-l-8 border-primary pl-2">
        About MobMarket
      </h1>
      <p className="indent-20">
        Welcome to MobMarket, your one-stop destination for all your mobile
        shopping needs. We are passionate about providing the latest and
        greatest mobile devices and accessories to tech enthusiasts and mobile
        aficionados like you.
      </p>
    </div>
  );
}
