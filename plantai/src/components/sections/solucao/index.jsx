import React from "react";

const Solucao = () => {
  return (
    <div
      className="w-full lg:w-2/3 m-auto h-screen justify-center flex flex-col md:px-14 lg:px-20 mt-20 relative"
      id="solucao"
    >
      <div className="mt-20">
        <h2 className="text-center md:text-start text-2xl font-bold text-blue-500">
          Como vamos revolucionar a agricultura?
        </h2>
        <p className="m-auto px-4 md:px-0 lg:px-0 text-center md:text-start text-lg text-black text-medium mt-8 lg:mt-4">
          Realizamos a <strong>análise</strong> de <strong>doenças</strong> em
          plantas para fornecer recomendações da melhor <strong>solução</strong>{" "}
          a ser aplicada
        </p>
        <div className="w-full max-h-full flex mt-10 items-center justify-center self-center">
          <div className="flex m-auto">
            <img
              src="/Avaliacao Detalhada Template.svg"
              className="w-60 md:w-[400px] lg:w-[400px] left-4 md:left-10 lg:left-40 relative z-0"
              alt=""
            />
            <img
              src="/Avaliacoes Template.svg"
              className="w-60 md:w-[400px] lg:w-[400px] right-28 top-14 md:right-36 md:top-14 lg:right-0 lg:top-10 relative z-9"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solucao;
