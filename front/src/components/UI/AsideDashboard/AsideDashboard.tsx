import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa6";
import { MdOutlineReport } from "react-icons/md";
import { TbDogBowl } from "react-icons/tb";

const listMenuDashboard = [
  {
    href: "/profile",
    name: "Perfil",
    icon: <AiOutlineUser />,
  },
  {
    href: "/reportpets",
    name: "Mis Reportes",
    icon: <MdOutlineReport />,
  },
  {
    href: "/adoptionpets",
    name: "Mis Adopciones",
    icon: <TbDogBowl />,
  },
  {
    href: "/shelteruser",
    name: "Ser Refugio",
    icon: <BsFillHouseDoorFill />,
  },
  {
    href: "/frequentlyquestions",
    name: "Faqs",
    icon: <FaQuestion />,
  },
];

export default function AsideDashboard() {
  return (
    <aside className="bg-[#232323] w-full max-w-96 h-screen text-white flex flex-col items-end justify-between">
      <ul className=" w-full max-w-60 pt-20 flex flex-col gap-y-6">
        {listMenuDashboard.map((menu) => (
          <li>
            <Link
              href={menu.href}
              className="flex items-center gap-x-2 text-xl font-normal"
            >
              {menu.icon}
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
      <button className="py-12 border-t-1 border-gray-400 px-12 text-xl font-normal">Cerrar Sesion</button>
    </aside>
  );
}
