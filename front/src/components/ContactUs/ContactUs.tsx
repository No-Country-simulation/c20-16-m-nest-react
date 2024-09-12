import { Button, Input, Textarea } from "@nextui-org/react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IconType } from "react-icons";
import Link from "next/link";
import FormContact from "./FormContact";

interface ISocial {
  Icon: IconType;
  text: string;
  link: string;
}

const socials: ISocial[] = [
  {
    Icon: FaFacebook,
    text: "Facebook",
    link: "https://www.facebook.com",
  },
  {
    Icon: BiLogoInstagramAlt,
    text: "Instagram",
    link: "https://instagram.com",
  },
  {
    Icon: IoMail,
    text: "Mail",
    link: "mailto:prueba@mail.com",
  },
];

export default function ContactUs() {
  return (
    <section className="flex flex-col gap-y-8 gap-x-16 px-4 py-24 md:justify-center md:flex-row-reverse w-full border-2">
      <article className="flex flex-col gap-4">
        <h3 className=" text-center md:text-left text-3xl text-primary font-semibold">
          Contáctate con nosotros
        </h3>
        <div className="flex flex-row gap-4 justify-center md:justify-start">
          {socials.map(({ Icon, text, link }) => (
            <Link href={link} key={link} className="flex items-center gap-2 ">
              <Icon className="size-8 " />
              {/* <span>{text}</span> */}
            </Link>
          ))}
        </div>
      </article>
      <FormContact />
    </section>
  );
}
