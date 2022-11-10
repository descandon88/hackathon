import React from "react";
import "../header/searchStyles.css";
import Data from "../data/data";
function buscador(props) {
  const PrintHeaderSearch = () => {
    return (
      <div className="nav-container">
        <div className="nav-Content">
          <div className="navTitle">Egresados</div>
          <div className="navSearch">
            <input
              type="text"
              placeholder="Buscar"
              //   onClick={}
            />
          </div>
          {/* <img className="navImg" alt="senpai" src="./header/img/senpai.png" /> */}
          <p>{Data.nombre}</p>
        </div>
      </div>
    );
  };
  return (
    <PrintHeaderSearch
      onChange={props.HandleChange}
      onClick={props.BuscadorChange}
    />
    // <p>{Data[0].nombre}</p>
  );
}

export default buscador;
