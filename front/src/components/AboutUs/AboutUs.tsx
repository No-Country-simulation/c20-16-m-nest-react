/* eslint-disable @next/next/no-img-element */
import { AboutmeData } from "@/interfaces/AboutmeData";
import { AiOutlineCloud, AiOutlineUser } from "react-icons/ai";
import { BsChatHeart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import CardAboutUs from "./CardAboutUs";
import CardAboutUsMobile from "./CardAboutUsMobile";

const listAboutMe: AboutmeData[] = [
  {
    icon: <BsChatHeart className=" text-5xl" />,
    title: "Visión",
    description: ` Dar hogar a animalitos en situacion de calle, y que encuentren
            personas que los amen.`,
    class: "top-[35px] -left-[270px] flex-row-reverse",
    classText: "text-right",
  },
  {
    icon: <AiOutlineUser className=" text-5xl" />,
    title: "Nuestro propósito",
    description: ` Dar hogar a animalitos en situacion de calle, y que encuentren
            personas que los amen.`,
    class: "top-[35px] -right-[270px]",
    classText: "",
  },
  {
    icon: <AiOutlineCloud className=" text-5xl" />,
    title: "Nuestro sueño",
    description: ` Dar hogar a animalitos en situacion de calle, y que encuentren
            personas que los amen.`,
    class: "bottom-[40px] -left-[270px] flex-row-reverse",
    classText: "text-right",
  },
  {
    icon: <FaRegHeart className=" text-5xl" />,
    title: "Misión",
    description: ` Dar hogar a animalitos en situacion de calle, y que encuentren
            personas que los amen.`,
    class: "bottom-[40px] -right-[270px]",
    classText: "",
  },
];

export default function AboutUs() {
  return (
    <section className=" mt-14 flex flex-col items-center justify-center gap-4 px-6 py-16 w-full h-[700px ] bg-[url('/images/background-about-us.png')] bg-cover bg-top bg-no-repeat text-white">
      <ul className="size-fit relative hidden lg:block">
        {listAboutMe.map((item, index) => (
          <CardAboutUs
            key={index}
            icon={item.icon}
            classValue={item.class}
            title={item.title}
            classText={item.classText}
            description={item.description}
            class={""}
          />
        ))}
        <img
          src="/images/picture-about-us.png"
          alt="AboutUs Image"
          className="w-full max-w-[485px] h-fit "
        />
      </ul>
      <ul className="size-fit relative lg:hidden flex flex-col gap-y-7">
        {listAboutMe.map((item, index) =>
          index > 1 ? (
            <CardAboutUsMobile
              key={index}
              icon={item.icon}
              classValue={item.class}
              title={item.title}
              classText={item.classText}
              description={item.description}
              class={""}
            />
          ) : (
            ""
          )
        )}
        <img
          src="/images/picture-about-us.png"
          alt="AboutUs Image"
          className="w-full max-w-[385px] h-fit "
        />
        {listAboutMe.map((item, index) =>
          index < 2 ? (
            <CardAboutUsMobile
              key={index}
              icon={item.icon}
              classValue={item.class}
              title={item.title}
              classText={item.classText}
              description={item.description}
              class={""}
            />
          ) : (
            ""
          )
        )}
      </ul>
    </section>
  );
}