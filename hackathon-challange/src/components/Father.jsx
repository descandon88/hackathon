import React, { useState } from "react";
import Buscador from "./header/buscador";
import Data from "../components/data/data";
import CardsDisplay from "../components/main/CardsDisplay";
// import "./buscador/searchStyles.css";

function Father() {
  const [buscar, setBuscar] = useState("");
  const [inletValue, setinletValue] = useState("");

  const handleChange = (event) => {
    setinletValue(event.target.value);
    console.log(inletValue);
  };

  const BuscarEstudiante = () => {
    const arrayfilter = Data.filter((array) => {
      if (inletValue.includes(array.nombre)) {
        // console.log("encontró estudiante: ");
        return array.nombre;
      }
    });
  };
  return (
    <div>
      <Buscador
        HandleChange={handleChange}
        BuscadorChange={BuscarEstudiante}
        value={buscar}
      />
      <CardsDisplay data={Data} />
    </div>
  );
}

export default Father;
