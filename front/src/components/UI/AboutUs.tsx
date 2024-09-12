/* eslint-disable @next/next/no-img-element */
import { FaRegHeart } from "react-icons/fa";
import { BsChatHeart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCloud } from "react-icons/ai";
import { IconBaseProps } from "react-icons";

interface AboutmeData {
  icon: IconBaseProps | any;
  title: string;
  description: string;
  class: string;
  classText: string;
}

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
    <section className=" flex flex-col items-center justify-center gap-4 px-6 py-16 mt-4 w-full h-[700px ] bg-[url('/images/background-about-us.png')] bg-cover bg-top bg-no-repeat text-white">
      <ul className="size-fit relative hidden lg:block">
        {listAboutMe.map((item, index) => (
          <li
            className={`flex gap-4 items-center w-fit max-w-[350px] absolute ${item.class}`}
            key={index}
          >
            <div className="p-6 bg-secondary-v3 rounded-full md:p-8 shadow-md">
              {item.icon}
            </div>
            <div>
              <h4 className={`font-semibold text-lg ${item.classText}`}>
                {item.title}
              </h4>
              <p className={`text-base font-normal ${item.classText}`}>
                {item.description}
              </p>
            </div>
          </li>
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
            <li
              className={`flex gap-4 items-center w-fit max-w-[350px] ${item.class}`}
              key={index}
            >
              <div className="p-6 bg-secondary-v3 rounded-full md:p-8 shadow-md">
                {item.icon}
              </div>
              <div>
                <h4 className={`font-semibold text-lg ${item.classText}`}>
                  {item.title}
                </h4>
                <p className={`text-base font-normal ${item.classText}`}>
                  {item.description}
                </p>
              </div>
            </li>
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
            <li
              className={`flex gap-4 items-center w-fit max-w-[350px] ${item.class}`}
              key={index}
            >
              <div className="p-6 bg-secondary-v3 rounded-full md:p-8 shadow-md">
                {item.icon}
              </div>
              <div>
                <h4 className={`font-semibold text-lg ${item.classText}`}>
                  {item.title}
                </h4>
                <p className={`text-base font-normal ${item.classText}`}>
                  {item.description}
                </p>
              </div>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </section>
  );
}

// export default function AboutUs () {
//   return (
//     <section className="relative flex justify-center items-center mt-12 w-full h-[600px] bg-[url('/images/background-about-us.png')] bg-cover bg-no-repeat">
//       <div className="relative size-[300px] bg-[url('/images/picture-about-us.png')] bg-cover bg-center md:size-[400px]">
//         <div className="absolute p-3 top-0 left-0 bg-secondary-v3 rounded-full md:p-6">
//           <FaRegHeart className="text-4xl text-white" />
//         </div>
//         <div className="absolute p-3 top-0 right-0 bg-secondary-v3 rounded-full md:p-6">
//           <BsChatHeart className=" text-4xl text-white" />
//         </div>
//         <div className="absolute p-3 bottom-0 left-0 bg-secondary-v3 rounded-full md:p-6">
//           <AiOutlineUser className=" text-4xl text-white" />
//         </div>
//         <div className="absolute p-3 bottom-0 right-0 bg-secondary-v3 rounded-full md:p-6">
//           <AiOutlineCloud className=" text-4xl text-white" />
//         </div>
//       </div>
//     </section>
//   );
// }
