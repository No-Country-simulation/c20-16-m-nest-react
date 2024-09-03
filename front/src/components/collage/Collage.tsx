"use client";
import Link from "next/link";
import { useState } from "react";

interface Collage {
  hoverBgColor: string;
  href: string;
  title: string;
  src: string;
  subClass: string | null;
}

const listCollage: Collage[] = [
  {
    hoverBgColor: "bg-accent/70",
    href: "#",
    title: "Reportes",
    src: "/images/image-collage-1.png",
    subClass: "",
  },
  {
    hoverBgColor: "bg-secondary-v1/70",
    href: "#",
    title: "Veterinarias",
    src: "/images/image-collage-2.png",
    subClass: "",
  },
  {
    hoverBgColor: "bg-secondary-v2/70",
    href: "#",
    title: "Adopcion",
    src: "/images/image-collage-3.png",
    subClass: "",
  },
  {
    hoverBgColor: "bg-[#8ECBDE]/70",
    href: "#",
    title: "Donaciones",
    src: "/images/image-collage-4.png",
    subClass: "md:col-span-2",
  },
  {
    hoverBgColor: "bg-secondary-v3/70",
    href: "#",
    title: "Donaciones",
    src: "/images/image-collage-5.png",
    subClass: "",
  },
];

export default function Collage() {
  const [isHover, setIsHover] = useState(false);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2	gap-5 items-center pt-12 w-full max-w-[1440px] mx-auto">
      {listCollage.map((item, index) => (
        <div
          key={index}
          className={`w-full h-[305px] rounded-2xl shadow-collageImage overflow-hidden relative ${item.subClass}`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div
            className={`w-full h-full ${item.hoverBgColor} absolute ${
              isHover ? "top-0" : "-top-[100%]"
            }  transition-all duration-300 flex items-center justify-center`}
          >
            <Link href={item.href} className=" text-5xl text-white font-normal">
              {item.title}
            </Link>
          </div>
          <img
            src={item.src}
            className="w-full h-full object-cover object-center"
            alt=""
          />
        </div>
      ))}
    </section>
  );
}
