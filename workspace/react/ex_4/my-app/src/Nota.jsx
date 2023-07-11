import React from 'react';

const Nota = ({ notas }) => {
  const calcularMedia = () => {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    const media = soma / notas.length;
    return media.toFixed(2);
  };

  return (
    <div>
      <h2>Média: {calcularMedia()}</h2>
    </div>
  );
};

export default Nota;