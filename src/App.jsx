import React, { useState } from 'react';
import './App.css';

function App() {
  // Cria um estado chamado 'values' que contém um array de 9 elementos (0 a 8)
  // Cada elemento representa um botão no grid.
  const [values, setValues] = useState(Array.from({ length: 9 }, (_, index) => index.toString()));

  // Função chamada quando um botão é clicado.
  // Ela atualiza o estado 'values', substituindo o valor do botão clicado por 'X'.
  const handleClick = (index) => {
    setValues((prevValues) =>
      // Atualiza o estado mapeando o array 'prevValues'
      // Substitui o valor do botão clicado (identificado pelo índice) por 'X'
      prevValues.map((value, i) => (i === index ? 'X' : value))
    );
  };

  return (
    <div className="main-container">
      {/* Container que envolve o grid de botões */}
      <div className="grid-container">
        {/* Mapeia cada item do array 'values' e renderiza um botão para cada valor */}
        {values.map((value, index) => (
          <button
            key={index} // A chave única do botão é o índice
            onClick={() => handleClick(index)} // Chama a função 'handleClick' passando o índice do botão
            className="grid-item" // Aplica a classe 'grid-item' para estilização
          >
            {value} {/* Exibe o valor atual do botão (inicialmente é o número do índice, depois 'X') */}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
