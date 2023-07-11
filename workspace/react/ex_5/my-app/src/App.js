import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [conteudo, setConteudo] = useState([]);
  
  const adicionarParagrafo = () => {
    const novoConteudo = [...conteudo, `Parágrafo ${conteudo.length + 1}`];
    setConteudo(novoConteudo);
  };
  
  return (
    <div className="App">
      <h2>Título Fixo</h2>
      <section>
        {conteudo.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </section>
      <footer>Rodapé Fixo</footer>
      <Botao adicionarParagrafo={adicionarParagrafo} />
    </div>
  );
};

const Botao = ({ adicionarParagrafo }) => {
  return (
    <button onClick={adicionarParagrafo}>
      Adicionar Parágrafo
    </button>
  );
};

export default App;