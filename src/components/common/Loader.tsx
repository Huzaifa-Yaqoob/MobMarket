import React from "react";

export default function Loader() {
  return (
    <div className="h-full w-full grid place-content-center gap-2">
      <div className="custom-loader"></div>
      <span className="text-sm text-muted-foreground animate-pulse">
        loading...
      </span>
    </div>
  );
}
