import React from "react";
// import Data from "../data/data";

function CardsDisplay(props) {
  const functionEstudiantes = (objeto) => {
    return objeto.map((array, index) => (
      <li key={index}>
        {array.nombre} <br />
        {array.carrera}
        {console.log("aqui se imprimi el array", array.nombre)};
      </li>
    ));
  };

  return <ul>{functionEstudiantes(props.data)}</ul>;
}

export default CardsDisplay;
