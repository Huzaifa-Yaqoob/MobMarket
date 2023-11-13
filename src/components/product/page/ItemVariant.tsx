"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useOrderStore } from "@/lib/store";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ItemVariantProps {
  variants: {
    variantName: string;
    image: TImage;
  }[];
}

export default function ItemVariant({
  variants,
}: ItemVariantProps): React.ReactElement {
  const [imageIndex, setImageIndex] = useState(0);
  const [updateImage, updateVariantName] = useOrderStore((state) => [
    state.updateImage,
    state.updateVariantName,
  ]);

  useEffect(() => {
    updateImage(variants[imageIndex].image);
    if (imageIndex === 0) {
      updateVariantName("Not Selected");
    } else {
      updateVariantName(variants[imageIndex].variantName);
    }
  }, [imageIndex]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-32">
        <AspectRatio ratio={4 / 4} className="border border-primary rounded">
          <Image
            key={variants[imageIndex].variantName}
            src={variants[imageIndex].image.url}
            alt={variants[imageIndex].image.alt}
            fill
            loading="lazy"
            sizes="5rem"
            className="object-contain"
          />
        </AspectRatio>
      </div>
      <div className="overflow-background space-x-2 flex flex-row items-center overflow-scroll max-w-[15rem] no-scrollbar">
        {variants.map((item, index) => {
          if (index === 0) {
            return null;
          }
          return (
            <span
              key={index}
              className={`px-1 rounded border-2 cursor-pointer text-sm ${
                index === imageIndex ? "border-primary" : ""
              }`}
              onClick={() =>
                index === imageIndex ? setImageIndex(0) : setImageIndex(index)
              }
            >
              {item.variantName}
            </span>
          );
        })}
      </div>
    </div>
  );
}
