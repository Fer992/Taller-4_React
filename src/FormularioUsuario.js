import React, { useState } from "react";

//Funcion para almacenar nombre//
function FormularioUsuario () {
  const[nombre, setNombre]= useState('')

  const manejarCambio = (evento) => {
    setNombre(evento.target.value);
  };

  //funcion para mostrar mensaje con el nombre ingresado//
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    alert(`Usuario ingresado: ${nombre}`);

    setNombre(''); //Resetea el formulario//
  
  };
  return(
    <form onSubmit={manejarEnvio}>
      <div>
      <label>
        Nombre usuario:
        <input type="text" value={nombre} onChange={manejarCambio} />
      </label>
    </div>
    
      <button type="submit">Enviar </button>
    </form>

  )
}
export default FormularioUsuario;