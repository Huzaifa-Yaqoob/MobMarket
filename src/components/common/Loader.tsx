import { Rings } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="h-full w-full flex flex-col items-center gap-2 justify-center">
      <div>
        <Rings
          radius={1}
          color="hsl(var(--primary))"
          ariaLabel="puff-loading"
          wrapperClass="h-20 w-20 flex items-center"
          visible={true}
        />
      </div>
      <span className="text-sm text-muted-foreground animate-pulse text-center">
        loading...
      </span>
    </div>
  );
}
