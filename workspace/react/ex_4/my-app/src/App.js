import React from 'react';
import Nota from './Nota';
import Nome from './Nome';

const App = () => {
  const notas = [8.5, 7.2, 9.0, 6.8]; // Adicione as notas do aluno aqui
  const nomeAluna = 'Maria'; // Adicione o nome da aluna aqui

  return (
    <div>
      <Nome nome={nomeAluna} />
      <Nota notas={notas} />
    </div>
  );
};

export default App;