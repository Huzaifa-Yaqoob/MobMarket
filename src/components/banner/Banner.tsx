"use client";
import {
  Pagination,
  Autoplay,
  A11y,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Banner() {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay, Keyboard]}
      loop={true}
      grabCursor={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      keyboard={{
        enabled: true,
      }}
    >
      <SwiperSlide>
        <AspectRatio ratio={16 / 7} className="bg-muted">
          <Image
            src="/design.png"
            alt="Photo by Drew Beamer"
            fill
            className="object-cover rounded"
          />
        </AspectRatio>
      </SwiperSlide>
    </Swiper>
  );
}
