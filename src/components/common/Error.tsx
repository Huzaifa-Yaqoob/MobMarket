import { AlertTriangle } from "lucide-react";

export default function Error({ msg }: { msg: string }): React.ReactElement {
  return (
    <div className="h-full w-full grid place-content-center">
      <div className="text-destructive flex flex-col items-center gap-2">
        <AlertTriangle size={50} />
        <div className="text-center">{msg}</div>
      </div>
    </div>
  );
}
