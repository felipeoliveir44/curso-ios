import React, { useState } from 'react';
import TabelaIMC from './TabelaIMC';
import ResultadoIMC from './ResultadoIMC';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    if (peso === '' || altura === '') {
      setResultado('Preencha todos os campos!');
      return;
    }

    const imc = peso / (altura * altura);
    setResultado(`Seu IMC é ${imc.toFixed(2)}`);
  };

  const limparCampos = () => {
    setPeso('');
    setAltura('');
    setResultado('');
  };

  return (
    <div>
      <h2>Cálculo de IMC</h2>
      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <input
        type="number"
        placeholder="Altura (m)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <button onClick={calcularIMC}>Calcular</button>
      <button onClick={limparCampos}>Limpar</button>
      <ResultadoIMC resultado={resultado} />
      <TabelaIMC />
    </div>
  );
};

export default App;