import React from "react";

import "../src/App.css"

function PerfilHeroe({id, nombre, alterEgo, poderes, universo }) {
  return (
    <div className="tarjeta">
      <h2>{nombre}</h2>
      <p>{alterEgo}</p>
      <p>{poderes}</p>
      <p>{universo}</p>
    </div>
  );
}

export default PerfilHeroe;
