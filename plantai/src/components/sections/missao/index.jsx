import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Missao = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: (i) => {
      return <div className={`mt-10 rounded-full h-3 w-3 bg-blue-500`} />;
    },
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const values = [
    {
      image: "/missao.svg",
      text: "Nossa missão é proporcionar soluções inovadoras e acessíveis de inteligência artificial para a agricultura, visando capacitar pequenos agricultores a alcançarem o sucesso e impulsionar a eficiência do setor agrícola.",
    },
    {
      image: "/visao.svg",
      text: "Almejamos ser a principal referência na transformação da agricultura, liderando uma revolução que promova um futuro promissor e sustentável para todos os agricultores, impulsionado pela excelência em tecnologia e serviços.",
    },
    {
      image: "/inovacao.svg",
      text: "Comprometemo-nos a buscar constantemente a inovação e a adotar tecnologias avançadas para atender às crescentes demandas do setor agrícola.",
    },
    {
      image: "/poder.svg",
      text: "Estamos dedicados a capacitar agricultores de todos os tamanhos de operações, fornecendo ferramentas e conhecimento necessários para que alcancem seu potencial máximo e prosperem.",
    },
    {
      image: "/integridade.svg",
      text: "Mantemos o mais alto padrão de integridade em todas as nossas interações e compromissos, sendo transparentes e éticos em todas as nossas ações, garantindo a confiança de nossos clientes e parceiros.",
    },
  ];

  return (
    <div
      className="w-full lg:w-2/3 m-auto h-full items-center justify-center flex flex-col md:px-14 mt-20 relative"
      id="missao"
    >
      <div className="w-full mt-20">
        <h2 className="text-center md:text-start text-2xl font-bold text-blue-500">
          Missão, Visão e Valores
        </h2>

        <div className="hidden md:hidden lg:grid lg:grid-cols-3 lg:gap-10">
          <div className="w-full px-4 md:px-0 max-h-full flex flex-col mt-10">
            <div>
              <img
                src="/missao.svg"
                className="m-auto max-60 max-h-60"
                alt=""
              />
            </div>
            <div>
              <p className="mt-4 text-center">
                Nossa missão é proporcionar soluções inovadoras e acessíveis de
                inteligência artificial para a agricultura, visando capacitar
                pequenos agricultores a alcançarem o sucesso e impulsionar a
                eficiência do setor agrícola.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:px-0 max-h-full flex flex-col mt-10">
            <div>
              <img src="/visao.svg" className="m-auto max-60 max-h-60" alt="" />
            </div>
            <div>
              <p className="mt-4 text-center">
                Almejamos ser a principal referência na transformação da
                agricultura, liderando uma revolução que promova um futuro
                promissor e sustentável para todos os agricultores, impulsionado
                pela excelência em tecnologia e serviços.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:px-0 max-h-full flex flex-col mt-10">
            <div>
              <img
                src="/inovacao.svg"
                className="m-auto max-60 max-h-60"
                alt=""
              />
            </div>
            <div>
              <p className="mt-4 text-center">
                Comprometemo-nos a buscar constantemente a inovação e a adotar
                tecnologias avançadas para atender às crescentes demandas do
                setor agrícola.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:px-0 max-h-full flex flex-col mt-10">
            <div>
              <img src="/poder.svg" className="m-auto max-60 max-h-60" alt="" />
            </div>
            <div>
              <p className="mt-4 text-center">
                Estamos dedicados a capacitar agricultores de todos os tamanhos
                de operações, fornecendo ferramentas e conhecimento necessários
                para que alcancem seu potencial máximo e prosperem.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:px-0 max-h-full flex flex-col mt-10">
            <div>
              <img
                src="/integridade.svg"
                className="m-auto max-60 max-h-60"
                alt=""
              />
            </div>
            <div>
              <p className="mt-4 text-center">
                Mantemos o mais alto padrão de integridade em todas as nossas
                interações e compromissos, sendo transparentes e éticos em todas
                as nossas ações, garantindo a confiança de nossos clientes e
                parceiros.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:hidden max-w-full px-4 mx-0 mt-10">
          <Slider {...settings}>
            {values.map((value, index) => (
              <div
                key={index}
                className="w-full px-4 md:px-0 max-h-full flex flex-col mt-10"
              >
                <div>
                  <img
                    src={value.image}
                    className="m-auto max-52 max-h-52"
                    alt=""
                  />
                </div>
                <div>
                  <p className="mt-4 text-center">{value.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Missao;
