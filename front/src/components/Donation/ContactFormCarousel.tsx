"use client";
import CarouselDonation from "@/components/Donation/CarouselDonation";
import { Input, Select, SelectItem } from "@nextui-org/react";

const listImages: { url: string; alt: string }[] = [
  { url: "/images/image-donation-1.png", alt: "imagen-refugio-1" },
  { url: "/images/image-donation-2.png", alt: "imagen-refugio-2" },
  { url: "/images/image-donation-3.png", alt: "imagen-refugio-3" },
];
export default function () {
  return (
    <section className="px-3 flex flex-col md:flex-row justify-between items-center gap-20 mx-auto w-full max-w-[1440px] py-12" id="contact">
      <article className="w-full md:w-1/2 flex flex-col gap-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
          Donacion
        </h2>
        <form className=" flex flex-col gap-y-5">
          <Input variant="flat" placeholder="Nombre" />
          <Select placeholder="Selecciona refugio" className="">
            <SelectItem key={1}>refugio 1</SelectItem>
            <SelectItem key={2}>refugio 2</SelectItem>
            <SelectItem key={3}>refugio 3</SelectItem>
          </Select>
          <Input
            type="number"
            placeholder="0.00"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$</span>
              </div>
            }
          />
          <button className="bg-primary py-3 px-8 rounded-full font-medium text-lg text-white w-full lg:w-fit">
            Enviar
          </button>
        </form>
      </article>
      <article className="w-full md:w-1/2">
        <CarouselDonation list={listImages} />
      </article>
    </section>
  );
}
