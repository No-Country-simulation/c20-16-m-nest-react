"use client";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Image = {
  src: string;
  alt: string;
};

const images: Image[] = [
  {
    src: "/svg/cat-family/cuate.svg",
    alt: "imagen-Reportes",
  },
  {
    src: "/svg/cat-and-dog/amico.svg",
    alt: "imagen-Donaciones",
  },
  {
    src: "/svg/pet-food/amico.svg",
    alt: "imagen-Adopcion",
  },
];

export default function Images() {
  return (
    <div className="h-96 w-full">
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className="flex size-full rounded-lg"
      >
        {images.map((image) => (
          <SwiperSlide key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="size-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
