import React from 'react';

const Sobre = () => {
  const estilo = {
    backgroundColor: '#e0e0e0',
    padding: '20px',
    color: '#333',
    fontSize: '18px',
  };

  return (
    <article style={estilo}>
      <h2>Conheça o React</h2>
      <p>O React é uma biblioteca JavaScript popular para a construção de interfaces de usuário.</p>
    </article>
  );
};

export default Sobre;