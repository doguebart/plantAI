import React from "react";

const Solucao = () => {
  return (
    <div
      className="w-full lg:w-2/3 m-auto h-screen lg:max-h-full justify-center flex flex-col md:px-14 mt-10 relative"
      id="solucao"
    >
      <div className="mt-20">
        <h2 className="text-center md:text-start text-2xl font-bold text-blue-500">
          Como vamos revolucionar a agricultura?
        </h2>
        <p className="m-auto text-center md:text-center md:text-start text-lg text-black text-medium mt-8 lg:mt-4">
          Realizamos a análise de doenças em plantas para fornecer recomendações
          da melhor solução a ser aplicada
        </p>
        <div className="w-full lg:w-2/3 flex mt-10 items-center justify-center self-center max-h-full">
          <div className="flex m-auto">
            <img
              src="/cell2.svg"
              className="w-64 md:w-[400px] lg:w-[500px] left-4 md:left-16 lg:left-40 relative z-0"
              alt=""
            />
            <img
              src="/cell1.svg"
              className="w-64 md:w-[400px] lg:w-[500px] right-40 top-12 md:right-44 lg:right-36 lg:top-10 relative z-10"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solucao;
