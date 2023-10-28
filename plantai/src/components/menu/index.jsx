import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full p-4 bg-blue-500 md:flex md:justify-around md:items-center fixed top-0 z-10">
      <div className="flex justify-between items-center max-w-full">
        <Link
          to="/"
          onClick={scrollToTop}
          className="flex items-center space-x-2 md:space-x-4 cursor-pointer"
        >
          <img
            src="/plantailogo.png"
            className="w-10 h-10 rounded-full shadow-md"
            alt="Plant AI logo"
          />
          <h1 className="text-white font-bold text-md md:text-xl">Plantai</h1>
        </Link>

        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={toggleMenu}
        >
          <FiMenu className="text-white" />
        </span>
      </div>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex space-y-4 border-t mt-4 lg:mt-0 md:border-0 border-white/50 md:space-y-0 md:space-x-10 items-center md:bg-transparent md:p-0 py-6 md:w-auto md:opacity-100 transition-all ease-in duration-500`}
      >
        <li>
          <Link
            to="solucao"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-white font-medium text-md py-2 hover:border-b duration-200 whitespace-nowrap cursor-pointer"
          >
            Nossa Solução
          </Link>
        </li>
        <li>
          <Link
            to="missao"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-white font-medium text-md py-2 hover:border-b duration-200 whitespace-nowrap cursor-pointer"
          >
            Missão, Visão e Valores
          </Link>
        </li>
        <li>
          <Link
            to="parceiros"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-white font-medium text-md py-2 hover:border-b duration-200 whitespace-nowrap cursor-pointer"
          >
            Parceiros
          </Link>
        </li>
        <li>
          <Link
            to="quem-somos"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-white font-medium text-md py-2 hover:border-b duration-200 whitespace-nowrap cursor-pointer"
          >
            Quem Somos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
