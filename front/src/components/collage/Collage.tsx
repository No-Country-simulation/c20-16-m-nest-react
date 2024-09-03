"use client";
import { Collage } from "@/interfaces/Collage";
import CardCollage from "../UI/CardCollage/CardCollage";


const listCollage: Collage[] = [
  {
    hoverBgColor: "bg-accent/70",
    href: "/reports",
    title: "Reportes",
    src: "/images/image-collage-1.png",
    alt: "imagen-reportes",
    subClass: "",
  },
  {
    hoverBgColor: "bg-secondary-v1/70",
    href: "/veterinary",
    title: "Veterinarias",
    src: "/images/image-collage-2.png",
    alt: "imagen-veterinarias",
    subClass: "",
  },
  {
    hoverBgColor: "bg-secondary-v3/70",
    href: "/adoption",
    title: "Adopcion",
    src: "/images/image-collage-3.png",
    alt: "imagen-adopcion",
    subClass: "",
  },
  {
    hoverBgColor: "bg-[#8ECBDE]/70",
    href: "/donations",
    title: "Donaciones",
    src: "/images/image-collage-4.png",
    alt: "imagen-donaciones",
    subClass: "md:col-span-2",
  },
  {
    hoverBgColor: "bg-secondary-v2/70",
    href: "/shelters",
    title: "Refugios",
    src: "/images/image-collage-5.png",
    alt: "imagen-refugios",
    subClass: "",
  },
];

export default function Collage() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2	gap-5 items-center pt-12 w-full max-w-[1440px] mx-auto">
      {listCollage.map((item, index) => (
        <CardCollage index={index}
        subClass={item.subClass}
        href={item.href}
        hoverBgColor={item.hoverBgColor}
        title={item.title}
        src={item.src}
        alt={item.alt}/>
      ))}
    </ul>
  );
}
