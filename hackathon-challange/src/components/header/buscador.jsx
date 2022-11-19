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
            <input type="text" placeholder="Buscar" />
          </div>
          {/* <img className="navImg" alt="senpai" src="./header/img/senpai.png" /> */}
          <p>{Data.nombre}</p>
          <p>{props.inletName}</p>
        </div>
      </div>
    );
  };
  return (
    <PrintHeaderSearch
      onChange={(e) => {
        props.HandleChange(e);
        props.BuscadorChange();
      }}
      //   onClick={}
    />
    // <p>{Data[0].nombre}</p>
  );
}

export default buscador;
