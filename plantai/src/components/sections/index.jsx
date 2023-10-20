import React from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Inicio = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      className="w-full h-screen bg-blue-200 justify-center items-center flex flex-col"
      id="solucao"
    >
      <img
        src="/plantailogosvg.svg"
        className="w-60 lg:w-80 rounded-full animate-spin-slow"
        alt="Plant AI logo"
      />
      <span className="text-center text-2xl text-blue-500 font-bold mt-10">
        Bem-vindo ao futuro da agricultura
      </span>
      <Link
        to="solucao"
        spy={true}
        smooth={true}
        duration={500}
        className="mt-4 text-2xl text-blue-500 cursor-pointer"
      >
        <FiArrowDownCircle />
      </Link>
    </div>
  );
};

export default Inicio;
