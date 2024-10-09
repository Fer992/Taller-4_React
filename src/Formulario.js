import React, { useState } from 'react';

const Formulario = ({ onInputChange }) => {
  const [numero, setNumero] = useState('');

  const handleInputChange = (evento) => {
    setNumero(evento.target.value);
    onInputChange(numero);
  };

  return (
    <div>
      <label>Ingrese un número:</label>
      <input type="text" value={numero} onChange={handleInputChange} />
    </div>
  );
};

export default Formulario;