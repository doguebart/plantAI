import React from "react";
import Menu from "./components/menu";
import Inicio from "./components/sections/inicio";
import Solucao from "./components/sections/solucao";

const App = () => {
  return (
    <div className="w-full h-full bg-white">
      <Menu />
      <Inicio />
      <Solucao />
    </div>
  );
};

export default App;
