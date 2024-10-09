import React, { useState } from 'react';
import ButtonClick from "./ButtonClick";
import FormularioUsuario from "./FormularioUsuario";
import Formulario from "./Formulario";
import Resultado from "./Resultado";

function App() {
  const [numero, setNumero] = useState('');

  const handleInputChange = (numero) => {
    setNumero(numero);
  };

  return (
    <div>
      <ButtonClick />
      <FormularioUsuario />
      <Formulario onInputChange={handleInputChange} />
      <Resultado numero={numero} />
    </div>
  )
}

export default App;