import React from "react";
import Menu from "./components/menu";
import Inicio from "./components/sections";

const App = () => {
  return (
    <div className="w-full h-screen bg-white">
      <Menu />
      <Inicio />
    </div>
  );
};

export default App;
