import { ThreeDots } from "react-loader-spinner";

export default function ThreeDotsLoader() {
  return (
    <ThreeDots
      radius="9"
      wrapperClass="h-8 w-8 flex items-center"
      color="hsl(var(--foreground))"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
}
