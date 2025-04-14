# Caixa Numérica com React e Vite

## 🚀 Funcionalidade
A aplicação consiste em uma **grade de botões numerados** de 0 a 8. Quando você clica em um botão, o número é substituído por "X". Esse é um exemplo simples de interação com a interface utilizando **React** e **Vite**.

## 📦 Estrutura do Projeto
```plaintext
caixa-numerica/
│
├── public/              # Arquivos estáticos (favicon, imagens, etc.)
│
├── src/                 # Código-fonte
│   ├── App.jsx          # Componente principal da aplicação
│   ├── App.css          # Estilos da aplicação
│   └── main.jsx         # Ponto de entrada da aplicação
│
├── index.html           # Arquivo HTML principal
├── package.json         # Arquivo de configuração e dependências do projeto
└── vite.config.js       # Configuração do Vite
```

## 🛠️ Pré-requisitos
Antes de começar, verifique se você possui os seguintes **pré-requisitos** instalados em sua máquina:

- **Node.js** (versão LTS): [Baixe a versão mais recente do Node.js](https://nodejs.org/)
- **npm** ou **Yarn**: Um gerenciador de pacotes. O npm vem junto com o Node.js, mas se preferir, pode usar o Yarn. [Baixe o Yarn aqui](https://yarnpkg.com/).

## 🚀 Instalação
Siga os passos abaixo para rodar o projeto na sua máquina local.

1. **Clone o repositório**  
   Primeiro, clone este repositório para o seu diretório local com o seguinte comando:
   ```bash
   git clone https://github.com/gabidamasio/atividade-caixa-numerica.git
   ```

2. **Acesse o diretório do projeto**  
   Entre no diretório do projeto:
   ```bash
   cd atividade-caixa-numerica
   ```

3. **Instale as dependências**  
   Para instalar as dependências, utilize um dos seguintes comandos:

   - **Com npm**:
     ```bash
     npm install
     ```
   - **Com Yarn**:
     ```bash
     yarn
     ```

## 🚀 Execução
Após a instalação das dependências, inicie o servidor de desenvolvimento com um dos comandos abaixo:

- **Com npm**:
  ```bash
  npm run dev
  ```
- **Com Yarn**:
  ```bash
  yarn dev
  ```

A aplicação estará disponível no seguinte endereço:  
[http://localhost:5173](http://localhost:5173)

## 🖥️ Tecnologias Utilizadas
Este projeto foi desenvolvido utilizando as seguintes tecnologias:
- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida e moderna.
- **CSS**: Para estilização do layout da aplicação.

## 📋 Como funciona o código:

### Componente `App.jsx`

```jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado que armazena os valores dos botões
  const [values, setValues] = useState(Array.from({ length: 9 }, (_, index) => index.toString()));

  // Função que altera o valor do botão para "X" quando clicado
  const handleClick = (index) => {
    setValues((prevValues) =>
      prevValues.map((value, i) => (i === index ? 'X' : value)) // Substitui o número do botão clicado por "X"
    );
  };

  return (
    <div className="main-container">
      <div className="grid-container">
        {/* Criação dos botões dinâmicos */}
        {values.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)} // Chama a função handleClick ao clicar no botão
            className="grid-item"
          >
            {value} {/* Exibe o valor do botão (número ou "X") */}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
```

**Explicação do código:**

- **useState**: Utilizado para criar o estado `values`, que armazena os valores dos botões da grade.
- **handleClick**: Função que altera o valor do botão para "X" quando o botão é clicado.
- **map**: Itera sobre o array `values` e cria um botão para cada valor (de 0 a 8 ou "X" dependendo da interação).
  
### Estilos

```css
/* App.css */

/* Estilos gerais */
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 100px); /* Grid com 3 colunas */
  grid-gap: 10px;
}

.grid-item {
  width: 100px;
  height: 100px;
  font-size: 20px;
  text-align: center;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.grid-item:hover {
  background-color: #ddd;
}
```

**Explicação dos estilos:**
- A grade é organizada usando **CSS Grid** para posicionar os botões.
- Os botões possuem um efeito de **hover** para melhorar a interação visual.
- A aplicação é centralizada na tela utilizando **Flexbox**.

## 🤝 Contribuindo
Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. **Fork** o repositório.
2. Clone seu fork para a sua máquina local.
3. Crie uma branch para suas alterações:
   ```bash
   git checkout -b minha-nova-feature
   ```
4. Faça suas alterações e adicione comentários explicando o que foi alterado.
5. Comite suas alterações:
   ```bash
   git commit -am 'Adicionando minha feature'
   ```
6. Faça o push da sua branch para o seu repositório remoto:
   ```bash
   git push origin minha-nova-feature
   ```
7. Abra um **Pull Request** explicando suas alterações.

