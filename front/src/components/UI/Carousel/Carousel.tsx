"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

interface CarouselData {
  title: string;
  description: string;
  textbutton: string;
  image: { url: string; alt: string };
}

const listCarouselData: CarouselData[] = [
  {
    title: " ¡ Adopta !",
    description: `Cuando decides adoptar, estás haciendo una diferencia doblemente
                significativa. No solo le das una nueva vida llena de amor y
                cuidados al animal que llevas a tu hogar, sino que también abres
                un espacio para que otro animal en situación de calle pueda
                encontrar refugio en nuestro Centro de Adopción. Tu adopción
                salva a dos vidas: la del animal que acoges y la del que podrá
                ocupar su lugar en nuestro refugio. Únete a este ciclo de
                esperanza y salvación.`,
    textbutton: "Ver refugios",
    image: {
      url: "/images/background-hero-carousel-slide-1-recortado.png",
      alt: "hero-slide-1",
    },
  },
  {
    title: " ¡ Adopta !",
    description: `Cuando decides adoptar, estás haciendo una diferencia doblemente
                significativa. No solo le das una nueva vida llena de amor y
                cuidados al animal que llevas a tu hogar, sino que también abres
                un espacio para que otro animal en situación de calle pueda
                encontrar refugio en nuestro Centro de Adopción. Tu adopción
                salva a dos vidas: la del animal que acoges y la del que podrá
                ocupar su lugar en nuestro refugio. Únete a este ciclo de
                esperanza y salvación.`,
    textbutton: "Ver refugios",
    image: {
      url: "/images/background-hero-carousel-slide-1-recortado.png",
      alt: "hero-slide-1",
    },
  },
  {
    title: " ¡ Adopta !",
    description: `Cuando decides adoptar, estás haciendo una diferencia doblemente
                significativa. No solo le das una nueva vida llena de amor y
                cuidados al animal que llevas a tu hogar, sino que también abres
                un espacio para que otro animal en situación de calle pueda
                encontrar refugio en nuestro Centro de Adopción. Tu adopción
                salva a dos vidas: la del animal que acoges y la del que podrá
                ocupar su lugar en nuestro refugio. Únete a este ciclo de
                esperanza y salvación.`,
    textbutton: "Ver refugios",
    image: {
      url: "/images/background-hero-carousel-slide-1-recortado.png",
      alt: "hero-slide-1",
    },
  },
];

export default function Carousel() {
  return (
    <div className=" h-fit w-full">
      <Swiper
        className="h-full"
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        {listCarouselData.map((item, index) => (
          <SwiperSlide key={index} className="">
            <article className="flex items-center justify-around gap-x-4 w-full h-full bg-[url('/images/background-hero-carousel.png')] bg-bottom bg-no-repeat bg-cover pt-24 pb-2">
              <div className="max-w-[584px] w-full fled flex-col border">
                <h1 className="text-6xl font-semibold text-primary pb-5">
                  {item.title}
                </h1>
                <p className=" text-white pb-5 text-xl font-normal">
                  {item.description}
                </p>
                <button className="bg-primary py-3 px-4 rounded-full font-medium text-lg text-white">
                  {item.textbutton}
                </button>
              </div>
              <div className="max-w-[530px] w-full h-fit">
                <img
                  src={item.image.url}
                  className="w-full h-full bg-cover"
                  alt={item.image.alt}
                />
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
