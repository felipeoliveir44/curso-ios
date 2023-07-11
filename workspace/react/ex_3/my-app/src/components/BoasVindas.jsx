import React from 'react';
import PropTypes from 'prop-types';

const BoasVindas = (props) => {
  const { nome } = props;
  
  return (
    <section style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h1 style={{ fontSize: '24px' }}>Bem-vindo(a), {nome}!</h1>
      <p style={{ fontSize: '16px' }}>Seja bem-vindo(a) ao mundo do React!</p>
    </section>
  );
};

BoasVindas.defaultProps = {
  nome: 'Visitante',
};

BoasVindas.propTypes = {
  nome: PropTypes.string,
};

export default BoasVindas;