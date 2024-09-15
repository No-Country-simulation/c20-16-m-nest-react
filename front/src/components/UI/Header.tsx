"use client";

import React from "react";
import { NavLink } from "@/interfaces/Header";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/global/logo.svg";
import { HiMenu } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import { useMenuStore } from "@/context/zustang"; // Asegúrate de que la ruta sea correcta

const navLinks: NavLink[] = [
  { label: "Reporte", href: "/report" },
  { label: "Donación", href: "/donation" },
  { label: "Adopción", href: "/adoption" },
  { label: "Veterinarias", href: "/veterinary" },
  { label: "Refugios", href: "/shelter" },
];

// aplicando path para dinamismo en diferentes pages
// notas de lo aprendido
type RouteStyles = {
  [key: string]: { textColor: string; bgColor: string; bgColorMenu: string };
};
const routeStyles: RouteStyles = {
  "/report/reportForm": {
    textColor: "text-black",
    bgColor: "bg-transparent",
    bgColorMenu: "bg-white",
  },
  "/login": {
    textColor: "text-black",
    bgColor: "bg-transparent",
    bgColorMenu: "bg-white",
  },
  "/veterinary": {
    textColor: "text-black",
    bgColor: "bg-transparent",
    bgColorMenu: "bg-white",
  },
  "/profile": {
    textColor: "text-white",
    bgColor: "bg-[#232323]",
    bgColorMenu: "bg-white",
  },
  "/adoptions": {
    textColor: "text-white",
    bgColor: "bg-[#232323]",
    bgColorMenu: "bg-white",
  },
  "/frequentlyquestions": {
    textColor: "text-white",
    bgColor: "bg-[#232323]",
    bgColorMenu: "bg-white",
  },
  "/report": {
    textColor: "text-white",
    bgColor: "bg-[#232323]",
    bgColorMenu: "bg-white",
  },
  "/shelteruser": {
    textColor: "text-white",
    bgColor: "bg-[#232323]",
    bgColorMenu: "bg-white",
  },
  // se va agregando mas pages de ser necesario ir customizando, al igual que las propiedades, si las propiedades no se encuentran definidas por defecto devuelve los valores de matchingRoute, (ver abajo).
};

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenuStore();
  const pathname = usePathname();

  const getStylesForRoute = (
    path: string
  ): { textColor: string; bgColor: string; bgColorMenu: string } => {
    const matchingRoute = Object.keys(routeStyles).find((route) =>
      path.startsWith(route)
    );
    return matchingRoute
      ? routeStyles[matchingRoute]
      : {
        textColor: "text-white",
        bgColor: "bg-transparent",
        bgColorMenu: "bg-secondary-black",
      };
  };

  const { textColor, bgColor, bgColorMenu } = getStylesForRoute(
    pathname || "/"
  );

  const handleNavLinkClick = () => {
    closeMenu();
  };

  return (
    <header className={`w-full py-4 absolute z-50 ${bgColor} h-24 flex items-center`}>
      <div className="container mx-auto w-full max-w-[1440px] flex items-center justify-between lg:justify-evenly px-3">
        {/* Logo */}
        <Link href={"/"} className="flex items-center space-x-2" onClick={handleNavLinkClick}>
          <Image src={Logo} alt="Logo" width={150} height={150} />
        </Link>

        {/* Navbar */}
        <nav
          className={`hidden lg:flex lg:items-center lg:space-x-6 lg:px-8 lg:mx-auto`}
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`${textColor} text-xl flex items-center space-x-1 hover:scale-110 hover:duration-300`}
              onClick={handleNavLinkClick}
            >
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        {/* Botón de menú mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className={`text-primary text-2xl`}
          >
            <HiMenu />
          </button>
        </div>

        {/* Login */}
        <div className="hidden lg:flex lg:items-center">
          <LoginButton onClickAction={handleNavLinkClick} />
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className={`lg:hidden bg-[#232323] fixed top-0 w-full h-screen animate-fade-right animate-duration-500 z-50`}
        >
          <button
            className="absolute text-primary text-2xl right-5 top-5 z-10"
            onClick={closeMenu}
          >
            <MdClose />
          </button>
          <nav className="flex flex-col space-y-3 items-start justify-center mx-auto h-full w-fit z-50">
            <div className="w-full flex justify-center py-2">
              <Link href={"/"} className="flex items-center space-x-2" onClick={handleNavLinkClick}>
                <Image src={Logo} alt="Logo" width={150} height={150} />
              </Link>
            </div>
            {navLinks.map(({ label, href }, index) => (
              <Link
                key={label}
                href={href}
                className={`text-white flex items-center space-x-1 font-normal text-2xl opacity-0 py-2 animate-fade-down animate-duration-500`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={handleNavLinkClick}
              >
                <span>{label}</span>
              </Link>
            ))}
            <div
              className="mt-4 mx-auto opacity-0 animate-fade animate-duration-500"
              style={{ animationDelay: `${navLinks.length * 0.1}s` }}
            >
              <LoginButton onClickAction={handleNavLinkClick} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

interface LoginButtonProps {
  onClickAction: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClickAction }) => (
  <Link
    href="/login"
    className={`text-lg px-8 py-2 my-4 text-white bg-primary flex items-center space-x-1 rounded-full shadow-lg animate-fade animate-duration-500 animate-delay-700 hover:duration-300`}
    onClick={onClickAction}
  >
    <span>Iniciar sesión</span>
  </Link>
);

export default Header;