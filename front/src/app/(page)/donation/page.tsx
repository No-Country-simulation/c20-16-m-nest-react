"use client";
import ContactFormCarousel from "@/components/Donation/ContactFormCarousel";
import HeroActions from "@/components/Donation/HeroActions";
import Informative from "@/components/Donation/Informative";
import StepToFollow from "@/components/Donation/StepToFollow";

interface DonationPass {
  icon: string;
  title: string;
  description: string;
  style: string;
}

const listDonationPass: DonationPass[] = [
  {
    icon: "form",
    title: "Completar formulario",
    description: `Lorem ipsum dolor sit amet consectetur. Ac urna eget magna in
              sodales eu sit tristique. Sed convallis rutrum orci sed ultrices
              blandit urna tincidunt. Augue iaculis amet ipsum malesuada odio
              nulla ullamcorper. Donec viverra vulputate mauris felis sit sit
              diam bibendum tortor.`,
    style: "bg-accent",
  },
  {
    icon: "selec",
    title: "Seleciona",
    description: `Lorem ipsum dolor sit amet consectetur. Ac urna eget magna in
              sodales eu sit tristique. Sed convallis rutrum orci sed ultrices
              blandit urna tincidunt. Augue iaculis amet ipsum malesuada odio
              nulla ullamcorper. Donec viverra vulputate mauris felis sit sit
              diam bibendum tortor.`,
    style: "bg-secondary-v1",
  },
  {
    icon: "done",
    title: "Dona",
    description: `Lorem ipsum dolor sit amet consectetur. Ac urna eget magna in
              sodales eu sit tristique. Sed convallis rutrum orci sed ultrices
              blandit urna tincidunt. Augue iaculis amet ipsum malesuada odio
              nulla ullamcorper. Donec viverra vulputate mauris felis sit sit
              diam bibendum tortor.`,
    style: "bg-secondary-v3",
  },
];

export default function Donation() {
  return (
    <div className=" w-full  h-full ">
      <HeroActions />
      <Informative />
      <StepToFollow list={listDonationPass} />
      <ContactFormCarousel />
    </div>
  );
}
