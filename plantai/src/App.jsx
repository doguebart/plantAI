import React from "react";
import Menu from "./components/menu";
import Inicio from "./components/sections/inicio";
import Solucao from "./components/sections/solucao";
import Parceiros from "./components/sections/parceiros";

const App = () => {
  return (
    <div className="w-full h-full bg-white">
      <Menu />
      <Inicio />
      <Solucao />
      <Parceiros />
    </div>
  );
};

export default App;
