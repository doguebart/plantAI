import React from "react";
import { FiLinkedin } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Membros = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => {
      return (
        <div
          className={`mt-10 rounded-full h-3 w-3 ${
            i === i ? "bg-blue-500" : "bg-gray-300"
          }`}
        />
      );
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

  const members = [
    {
      name: "Samuel Nascimento",
      role: "Android Developer @Avanade",
      linkedin: "https://www.linkedin.com/in/samuelnascimento01111/",
      image: "/samuel.svg",
      description:
        "Sou um desenvolvedor Android com experiência em aplicações nativa, utilizando Kotlin e Java. Desenvolver aplicativos contribui para me manter sempre atualizado nas novas tecnologias, desse modo gerando um diferencial na minha atuação em projetos que participo.",
    },
    {
      name: "Leonardo Macedo",
      role: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/leosilvamacedo/",
      image: "/leonardo.svg",
      description:
        "Sou um desenvolvedor de software em formação acadêmica em programação, buscando constantemente aprimorar minhas habilidades e conhecimentos em diferentes áreas da programação. Durante meu curso de graduação, participei de projetos práticos que me proporcionaram um conhecimento sólido de programação.",
    },
    {
      name: "Luisa Gabriele",
      role: "Application Developer @IBM",
      linkedin: "https://www.linkedin.com/in/luisa-purificacao/",
      image: "/luisa.svg",
      description:
        "Desde que comecei os meus estudos na área de tecnologia em 2020, tenho tido a oportunidade de explorar e aprimorar minhas habilidades em linguagens como Java e Python. Minha jornada até aqui tem sido incrivelmente gratificante, e estou ansiosa para continuar aprendendo, evoluindo e contribuindo para novos projetos.",
    },
    {
      name: "Lívia Keller",
      role: "iOS Developer @ Itaú Unibanco",
      linkedin: "https://www.linkedin.com/in/kellerlivia/",
      image: "/livia.svg",
      description:
        "Apaixonada por desenvolvimento mobile, atualmente desempenhando um papel importante no maior banco da América Latina. Como responsável pelo aplicativo corporativo iOS Itaúmon, tanto pelo desenvolvimento do aplicativo nativo usando Swift quanto pelo design de suas interfaces.",
    },
    {
      name: "Eduarda Gomes",
      role: "Python Developer",
      linkedin: "https://www.linkedin.com/in/gomes-eduarda/",
      image: "/duda.svg",
      description:
        "Sou apaixonada por tecnologia! ❤️‍🔥 Amo trabalhar em equipe e busco desenvolver minhas habilidades, tanto técnicas quanto interpessoais, todos os dias. Sou formada em análise e desenvolvimento de sistemas na Fiap e recentemente tenho me dedicado ao desenvolvimento .NET atuando com Mainframe.🤘🏻",
    },
  ];

  return (
    <div
      className="w-full lg:w-2/3 m-auto h-full items-center justify-center flex flex-col md:px-14 my-20 relative"
      id="quem-somos"
    >
      <div className="w-full px-4 md:px-0 mt-20">
        <h2 className="text-center md:text-start text-2xl font-bold text-blue-500">
          Quem Somos
        </h2>
        <p className="m-auto px-4 md:px-0 lg:px-0 text-center md:text-start text-lg text-black text-medium mt-8 lg:mt-4">
          Nós, desenvolvedores do PlantAI, buscamos e pensamos em uma maneira de
          facilitar a vida de produtores que possuem sua economia dependente da
          qualidade das safras. A partir disso, desenvolvemos um app que permite
          que o usuário possa manter a qualidade e o rendimento da safra para,
          futuramente, precificá-la.
        </p>
        <div className="max-w-full mx-0 mt-10">
          <Slider {...settings}>
            {members.map((member, index) => (
              <div key={index} className="px-4">
                <div className="flex flex-col w-full h-[600px] md:h-[600px] p-4 rounded-sm bg-blue-500 shadow-md">
                  <div className="flex max-w-full">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      className="bg-white rounded-sm p-2 lg:p-1 hover:opacity-80 duration-200"
                    >
                      <FiLinkedin className="text-xl lg:text-lg text-blue-500" />
                    </a>
                  </div>
                  <img
                    src={member.image}
                    className="w-32 border-2 m-auto shadow-md rounded-full mt-10"
                    alt="member picture"
                  />
                  <span className="text-white font-bold text-lg text-center mt-4">
                    {member.name}
                  </span>
                  <span className="text-white/50 text-center">
                    {member.role}
                  </span>
                  <p className="text-white/50 text-md text-center font-normal mt-6">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Membros;
