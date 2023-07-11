import React from 'react';

const TabelaIMC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo do peso</td>
          <td>&lt; 18.5</td>
        </tr>
        <tr>
          <td>Peso normal</td>
          <td>18.5 - 24.9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>25 - 29.9</td>
        </tr>
        <tr>
          <td>Obesidade grau 1</td>
          <td>30 - 34.9</td>
        </tr>
        <tr>
          <td>Obesidade grau 2</td>
          <td>35 - 39.9</td>
        </tr>
        <tr>
          <td>Obesidade grau 3</td>
          <td>&gt; 40</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TabelaIMC;