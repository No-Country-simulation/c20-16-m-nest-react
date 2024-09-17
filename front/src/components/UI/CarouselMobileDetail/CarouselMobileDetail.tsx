"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
export default function CarouselMobileDetail({
  list,
}: {
  list: { src: string; alt: string }[];
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="sm:hidden h-fit">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-2xl border-2 border-[#232323]/10"
      >
        {list.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} className="object-cover h-[360px] w-full " alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-4"
      >
        {list.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} className="rounded-2xl object-cover w-32 h-32" alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
