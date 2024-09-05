"use client";

import React, { useState } from "react";
import { NavLink } from "@/interfaces/Header";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/global/logo.svg";

import { HiMenu, HiX } from "react-icons/hi";

const navLinks: NavLink[] = [
  { label: "Reporte", href: "/report" },
  { label: "Donación", href: "/donation" },
  { label: "Adopción", href: "/adoption" },
  { label: "Veterinarias", href: "/veterinary" },
  { label: "Refugios", href: "/shelter" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-transparent w-full py-4 absolute z-10">
      <div className="container mx-auto max-w-screen-xl flex items-center justify-between lg:justify-evenly px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="Logo" width={150} height={150} />
        </div>

        {/* Navbar */}
        <nav className={`hidden lg:flex lg:items-center lg:space-x-6 lg:px-8 lg:mx-auto`}>
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href} className="text-white text-xl flex items-center space-x-1 hover:scale-110 hover:duration-300">
              <span>{label}</span>
            </Link>
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
        <div className="lg:hidden mt-4 bg-secondary-black animate-fade-right animate-duration-500">
          <nav className="flex flex-col space-y-3 items-center">
            {navLinks.map(({ label, href }, index) => (
              <Link key={label} href={href} className="text-white flex items-center space-x-1 font-medium opacity-0 py-2 animate-fade-down animate-duration-500" style={{ animationDelay: `${index * 0.1}s` }}>
                <span>{label}</span>
              </Link>
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
  /* Login button */
}
const LoginButton: React.FC = () => (
  <Link href="/login" className="px-4 py-2 bg-primary text-white flex items-center space-x-1 rounded-full shadow-lg animate-fade animate-duration-500 animate-delay-700 hover:bg-secondary-hovcolor1 hover:duration-300">
    <span>Iniciar sesión</span>
  </Link>
);

export default Header;
