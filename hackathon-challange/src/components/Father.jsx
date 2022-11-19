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
    const datafiltered = Data.filter((array) => {
      if (array.nombre.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true;
      } else return false;
    });
    console.log("encontró estudiante", datafiltered);
  };
  return (
    <div>
      <Buscador
        HandleChange={handleChange}
        BuscadorChange={BuscarEstudiante}
        value={buscar}
        inletName={inletValue}
      />
      <CardsDisplay data={Data} />
    </div>
  );
}

export default Father;
