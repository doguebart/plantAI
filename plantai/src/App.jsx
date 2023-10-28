import React from "react";
import Menu from "./components/menu";
import Inicio from "./components/sections/inicio";
import Solucao from "./components/sections/solucao";
import Parceiros from "./components/sections/parceiros";
import Membros from "./components/sections/membros";
import Missao from "./components/sections/missao";

const App = () => {
  return (
    <div className="w-full h-full select-none bg-white">
      <Menu />
      <Inicio />
      <Solucao />
      <Missao />
      <Parceiros />
      <Membros />
    </div>
  );
};

export default App;
