import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

interface ImageContainerProps {
  url: string;
  alt: string;
}

export default function ImageContainer({
  url,
  alt,
}: ImageContainerProps): React.ReactElement {
  return (
    <Image
      src={url}
      alt={alt}
      width={100}
      height={130}
      className="object-contain "
    />
  );
}
