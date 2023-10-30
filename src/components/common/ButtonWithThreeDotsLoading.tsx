import { Button } from "../ui/button";
import ThreeDotsLoader from "./ThreeDotsLoader";

interface ButtonWithThreeDotsLoadingProps {
  text: string;
  isLoading: boolean;
}

export default function ButtonWithThreeDotsLoading({
  text,
  isLoading,
}: ButtonWithThreeDotsLoadingProps) {
  return (
    <Button type="submit" disabled={isLoading}>
      {isLoading ? <ThreeDotsLoader /> : text}
    </Button>
  );
}
