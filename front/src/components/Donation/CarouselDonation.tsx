"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";
export default function CarouselDonation({
  list,
}: {
  list: { url: string; alt: string }[];
}) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className=" w-3/4  h-[250px]"
      >
        {list.map((image) => (
          <SwiperSlide className="size-fit">
            <div className="w-full h-60 bg-red-500 ">
              <img
                src={image.url}
                className="object-cover size-full"
                alt={image.alt}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
