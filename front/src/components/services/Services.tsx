import { IconBaseProps } from "react-icons";
import { BsFillHospitalFill } from "react-icons/bs";
import { FaHouseChimney } from "react-icons/fa6";
import { GiDogHouse } from "react-icons/gi";
import CardServices from "./CardServices";

interface Services {
  icon: IconBaseProps | any;
  title: string;
  description: string;
  bgIcon: string;
}

const listServices: Services[] = [
  {
    icon: <FaHouseChimney className="w-[60px] h-[60px]" fill="white" />,
    title: "Refugio",
    description: "Contamos con una larga lista de refugios",
    bgIcon: "bg-[#8ECBDE]",
  },
  {
    icon: <BsFillHospitalFill className="w-[60px] h-[60px]" fill="white" />,
    title: "Veterinarias",
    description: "Contamos con una larga lista de veterinarias 24hs",
    bgIcon: "bg-secondary-v3",
  },
  {
    icon: <GiDogHouse className="w-[60px] h-[60px]" fill="white" />,
    title: "Adopciones",
    description: "Tenemos una lista de mascotas listas para ser adoptadas.",
    bgIcon: "bg-secondary-v1",
  },
];

export default function Services() {
  return (
    <section className="flex flex-col gap-11 pt-12 max-w-[1440px] mx-auto px-3 lg:px-0">
      <h2 className=" text-3xl md:text-4xl text-primary text-center font-semibold ">
        Que encontraras?{" "}
      </h2>
      <ul className="flex items-center justify-center md:justify-between flex-wrap gap-y-8 gap-x-4">
        {listServices.map((item, index) => (
          <CardServices
            key={index}
            bgIcon={item.bgIcon}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
}
