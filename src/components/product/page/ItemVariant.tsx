"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useOrderStore } from "@/lib/store";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const images: { variantName: string; image: TImage }[] = [
  {
    variantName: "white",
    image: {
      url: "/products/Apple-iPhone-11-PNG-Image.png",
      alt: "iPhone11",
      name: "white",
    },
  },
  {
    variantName: "red",
    image: {
      url: "/products/Apple-iPhone-12-PNG-Transparent-HD-Photo.png",
      alt: "iPhone11",
      name: "white",
    },
  },
  {
    variantName: "white1",
    image: {
      url: "/products/Apple-iPhone-11-PNG-Image.png",
      alt: "iPhone11",
      name: "white",
    },
  },
  {
    variantName: "red1",
    image: {
      url: "/products/Apple-iPhone-12-PNG-Transparent-HD-Photo.png",
      alt: "iPhone11",
      name: "white",
    },
  },
];

export default function ItemVariant(): React.ReactElement {
  const [imageIndex, setImageIndex] = useState(0);
  const [updateImage, updateVariantName] = useOrderStore((state) => [
    state.updateImage,
    state.updateVariantName,
  ]);

  useEffect(() => {
    updateImage(images[imageIndex].image);
    if (imageIndex === 0) {
      updateVariantName("Not Selected");
    } else {
      updateVariantName(images[imageIndex].variantName);
    }
  }, [imageIndex]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-32">
        <AspectRatio ratio={4 / 4} className="border border-primary rounded">
          <Image
            key={images[imageIndex].variantName}
            src={images[imageIndex].image.url}
            alt={images[imageIndex].image.alt}
            fill
            loading="lazy"
            sizes="5rem"
            className="object-contain"
          />
        </AspectRatio>
      </div>
      <div className="overflow-background space-x-2 flex flex-row items-center overflow-scroll max-w-[15rem] no-scrollbar">
        {images.map((item, index) => {
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
