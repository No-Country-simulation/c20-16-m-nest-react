/* Primera versión del componente Header */

"use client";
{
  /* Para renderizarse y ejecutarse en el lado del cliente */
}

import React, { useState } from "react";
import { NavLink } from "@/interfaces/Header";
import {
  FaPaw,
  FaClipboard,
  FaDonate,
  FaHeart,
  FaHome,
  FaClinicMedical,
  FaDog,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks: NavLink[] = [
  { label: "Publicar", href: "/publicar", icon: FaClipboard },
  { label: "Donación", href: "/donacion", icon: FaDonate },
  { label: "Adopción", href: "/adopcion", icon: FaHeart },
  { label: "Veterinarias", href: "/veterinarias", icon: FaClinicMedical },
  { label: "Refugios", href: "/refugios", icon: FaDog },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between lg:justify-around">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaPaw className="text-white text-2xl" />
          <span className="text-white text-lg font-semibold">Logo</span>
        </div>

        {/* Navbar */}
        <nav
          className={`hidden lg:flex lg:items-center lg:space-x-4 lg:mx-auto`}
        >
          {navLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="text-white flex items-center space-x-1"
            >
              <Icon />
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
        <div className="lg:hidden mt-4 bg-transparent animate-fade-right animate-duration-1000">
          <nav className="flex flex-col space-y-2">
            {navLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="text-white flex items-center space-x-1"
              >
                <Icon />
                <span>{label}</span>
              </a>
            ))}
            <div className="mt-4 mx-auto">
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
    className="px-4 py-2 bg-blue-500 text-white flex items-center space-x-1 rounded-full animate-fade animate-duration-500 animate-delay-700"
  >
    <FaHome />
    <span>Inicio de sesión</span>
  </a>
);

export default Header;
