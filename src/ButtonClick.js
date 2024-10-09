import React, { useState } from "react";

function ButtonClick() {
  const [mensaje, setMensaje] = useState(":)");

  const manejarClick = () => {
    setMensaje('¡Botón clickeado!');
  };

  return (
    <div>
      <button onClick={manejarClick}>Haz clic aquí</button>
      <p>{mensaje}</p>
    </div>
  );
};

export default ButtonClick;