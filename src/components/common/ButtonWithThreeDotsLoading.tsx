import { Button } from "../ui/button";
import ThreeDotsLoader from "./ThreeDotsLoader";

interface ButtonWithThreeDotsLoadingProps {
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
}

export default function ButtonWithThreeDotsLoading({
  variant = "default",
  type = "submit",
  text,
  isLoading,
}: ButtonWithThreeDotsLoadingProps) {
  return (
    <Button type={type} disabled={isLoading} variant={variant}>
      {true ? <ThreeDotsLoader /> : text}
    </Button>
  );
}
