"use client";

import Image from "next/image";
import { Separator } from "../ui/separator";
import { useOrderStore } from "@/lib/store";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function OrderFormBox(): React.ReactElement {
  const [image, variantName] = useOrderStore((state) => [
    state.image,
    state.variantName,
  ]);

  return (
    <div className="flex gap-2">
      <Image
        src={image.url}
        alt={image.alt}
        width={100}
        height={150}
        className="object-cover"
      />
      <Separator orientation="vertical" />
      <div className="flex flex-col gap-2">
        <span className="text-lg font-bold">Iphone 11 Pro</span>
        <span>Bill : ${1000}</span>
        <span>Variant : {variantName}</span>
      </div>
    </div>
  );
}
