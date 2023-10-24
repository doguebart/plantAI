import React from "react";

const Parceiros = () => {
  return (
    <div
      className="w-full lg:w-2/3 m-auto h-full items-center justify-center flex flex-col md:px-14 mt-20 relative"
      id="parceiros"
    >
      <div className="w-full mt-20">
        <h2 className="text-center md:text-start text-2xl font-bold text-blue-500">
          Parceiros
        </h2>
        <p className="m-auto px-4 md:px-0 lg:px-0 text-center md:text-start text-lg text-black text-medium mt-8 lg:mt-4">
          Divulgamos diretamente seu produto
        </p>
        <div className="w-full max-h-full flex mt-10 items-center justify-center self-center">
          <div className="flex m-auto">
            <img
              src="/Proposta Template.svg"
              className="w-72 md:w-[300px] lg:w-[400px] left-4 md:left-0 relative z-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parceiros;
