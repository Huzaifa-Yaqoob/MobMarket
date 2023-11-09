import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

interface ButtonWithLoadingStateProps {
  variant?:
    | "ghost"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "link"
    | null
    | undefined;
  type?: "submit" | "button" | "reset" | undefined;
  text: string;
  isLoading: boolean;
  onClick?: () => void;
}

export default function ButtonWithLoadingState({
  variant = "default",
  type = "submit",
  text,
  isLoading,
  onClick,
}: ButtonWithLoadingStateProps) {
  return (
    <Button
      type={type}
      variant={variant}
      disabled={isLoading}
      onClick={onClick ? onClick : undefined}
    >
      {isLoading ? (
        <>
          {" "}
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        text
      )}
    </Button>
  );
}
