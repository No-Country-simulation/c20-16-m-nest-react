"use client";
import ContactFormCarousel from "@/components/Donation/ContactFormCarousel";
import HeroActions from "@/components/Donation/HeroActions";
import Informative from "@/components/Donation/Informative";
import StepToFollow from "@/components/Donation/StepToFollow";
import { DonationFollow } from "@/interfaces/DonationFollow";
import { listDonationFollow } from "@/utils/ListDonationFollow";


export default function Donation() {
  return (
    <div className=" w-full  h-full ">
      <HeroActions />
      <Informative />
      <StepToFollow list={listDonationFollow} />
      <ContactFormCarousel />
    </div>
  );
}
