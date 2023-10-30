import { AlertTriangle } from "lucide-react";

export default function Error({ msg }: { msg: string }): React.ReactElement {
  if (msg === "") {
    return <></>;
  }
  return (
    <div className="text-destructive-foreground bg-destructive text-sm w-fit px-1 rounded-sm animate-jump animate-once flex justify-center items-center">
      <AlertTriangle className="mr-2 h-4 w-4" />
      {msg}
    </div>
  );
}
