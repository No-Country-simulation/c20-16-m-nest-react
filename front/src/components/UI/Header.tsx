"use client";

import React, { useState } from "react";
import { NavLink } from "@/interfaces/Header";
import Image from "next/image";
import Logo from "@/assets/global/logo.svg"; 

import { HiMenu, HiX } from "react-icons/hi";

const navLinks: NavLink[] = [
  { label: "Reporte", href: "/reporte",},
  { label: "Donación", href: "/donacion",},
  { label: "Adopción", href: "/adopcion",},
  { label: "Veterinarias", href: "/veterinarias",},
  { label: "Refugios", href: "/refugios",},
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-transparent p-4">
      <div className="container mx-auto flex items-center justify-between lg:justify-around">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="Logo" width={150} height={150} />
        </div>

        {/* Navbar */}
        <nav
          className={`hidden lg:flex lg:items-center lg:space-x-4 lg:mx-auto`}
        >
          {navLinks.map(({ label, href,}) => (
            <a
              key={label}
              href={href}
              className="text-white text-xl flex items-center space-x-1 hover:text-secondary-v2 hover:duration-700"
            >
              <span>{label}</span>
            </a>
          ))}
        </nav>

        {/* Botón de menú mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-white text-2xl"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Login */}
        <div className="hidden lg:flex lg:items-center">
          <LoginButton />
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-transparent animate-fade-right animate-duration-500">
          <nav className="flex flex-col space-y-3 items-center">
            {navLinks.map(({ label, href}, index) => (
              <a
                key={label}
                href={href}
                className={"text-white flex items-center space-x-1 font-medium opacity-0 py-2 animate-fade-down animate-duration-500`"}
                style={{ animationDelay: `${index * 0.1}s` }}
                >
                <span>{label}</span>
              </a>
            ))}
            <div
              className="mt-4 mx-auto opacity-0 animate-fade animate-duration-500"
              style={{ animationDelay: `${navLinks.length * 0.1}s` }} 
            >
              <LoginButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

{
  /* Login button, podría componetizarse, consideración a futuro */
}
const LoginButton: React.FC = () => (
  <a
    href="/login"
    className="px-4 py-2 bg-primary text-white flex items-center space-x-1 rounded-full animate-fade animate-duration-500 animate-delay-700 hover:bg-secondary-v2 hover:duration-300"
  >
    <span>Iniciar sesión</span>
  </a>
);

export default Header;
