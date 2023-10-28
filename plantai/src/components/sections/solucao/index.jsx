import React from "react";

const Solucao = () => {
  return (
    <div
      className="w-full lg:w-2/3 m-auto h-full justify-center flex flex-col md:px-14 mt-20 relative"
      id="solucao"
    >
      <div className="mt-20">
        <h2 className="text-center md:text-start text-2xl font-bold text-blue-500">
          Como vamos revolucionar a agricultura?
        </h2>
        <p className="m-auto px-4 md:px-0 lg:px-0 text-center md:text-start text-lg text-black text-medium mt-8 lg:mt-4">
          Nossa missão é proporcionar soluções inovadoras e acessíveis de
          inteligência artificial para a agricultura, visando capacitar pequenos
          agricultores a alcançarem o sucesso e impulsionar a eficiência do
          setor agrícola. Almejamos ser a principal referência na transformação
          da agricultura, liderando uma revolução que promova um futuro
          promissor e sustentável para todos os agricultores, impulsionado pela
          excelência em tecnologia e serviços.
        </p>
        <div className="w-full max-h-full flex mt-10 items-center justify-center self-center">
          <img
            src="/phonetemplate.svg"
            className="w-82 md:w-96 lg:w-[500px]"
            alt=""
          />
        </div>
        <p className="m-auto px-4 md:px-0 lg:px-0 text-center md:text-start text-lg text-black text-medium mt-8 lg:mt-4">
          Estamos dedicados a capacitar agricultores de todos os tamanhos de
          operações, fornecendo ferramentas e conhecimento necessários para que
          alcancem seu potencial máximo e prosperem. Mantemos o mais alto padrão
          de integridade em todas as nossas interações e compromissos, sendo
          transparentes e éticos em todas as nossas ações, garantindo a
          confiança de nossos clientes e parceiros.
        </p>
      </div>
    </div>
  );
};

export default Solucao;
