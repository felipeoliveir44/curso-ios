import React from 'react';

const Nome = ({ nome }) => {
  const estiloNome = {
    borderBottom: '2px solid black',
    color: 'blue',
    textAlign: 'center',
  };

  return <h1 style={estiloNome}>{nome}</h1>;
};

export default Nome;