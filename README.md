<!DOCTYPE html>
<html lang="pt">
<body>
    <h1>Projeto Facilita Jurídico</h1>
      <h2>Descrição do Projeto</h2>
    <p>O projeto Facilita Jurídico é uma solução de gerenciamento de clientes desenvolvida para otimizar as rotas de visitas, visando reduzir custos e economizar tempo. O sistema permite o cadastro de clientes e utiliza algoritmo para calcular a menor rota possível, baseando-se em informações geográficas.</p>
      <h2>Iniciando o Projeto</h2>
    <h3>Pré-requisitos</h3>
    <p>Antes de iniciar, certifique-se de ter o Node.js e o npm instalados em seu computador.</p>
    <ul>
        <li>Node.js</li>
        <li>npm</li>
    </ul>
      <h3>Instalação</h3>
    <p>Siga os passos abaixo para configurar o projeto em sua máquina local:</p>
    <ol>
     <li><strong>Baixe as dependências:</strong> Use <code>npm install</code> para baixar todas as dependências.</li>
        <li><strong>Inicie o projeto ReactJs:</strong> Use <code>npm start</code>para iniciar o projeto.</li>
        <pre><code>npm start</code></pre>
    </ol>
<h3>Dependências</h3>
<p>As dependências do projeto <code>cliente-facilita-juridico</code> incluem:</p>
<ul>
    <li><code>@types/jest</code>: Tipagens TypeScript para Jest.</li>
    <li><code>@types/node</code>: Tipagens TypeScript para Node.js.</li>
    <li><code>@types/react</code>: Tipagens TypeScript para React.</li>
    <li><code>@types/react-dom</code>: Tipagens TypeScript para ReactDOM.</li>
    <li><code>axios</code>: Cliente HTTP baseado em promessas para fazer requisições.</li>
    <li><code>react</code>: Biblioteca JavaScript para construir interfaces de usuário.</li>
    <li><code>react-dom</code>: Pacote para trabalhar com o DOM em aplicações React.</li>
    <li><code>react-router-dom</code>: Biblioteca de roteamento dinâmico para React.</li>
    <li><code>react-scripts</code>: Conjunto de scripts e configurações usado pelo Create React App.</li>
    <li><code>typescript</code>: Superset de JavaScript que adiciona tipagens.</li>
</ul>
      <h3>Estrutura de Pastas do Projeto</h3>
    <p>O projeto está estruturado da seguinte forma:</p>
    <pre><code>facilita-juridico-Client/
├── public/
│ 
├── src/
│   ├── assets/
│   ├── components/
│   ├── css/
│   ├── models/
│   ├── pages/
│   ├── services/
│   ├── index.tsx    
│   
</code></pre>

<h2>Dados de Exemplo para Cadastro de Clientes</h2>
    <p>Segue abaixo um exemplo de JSON com dados de clientes para ser utilizado no cadastro:</p>
    <pre><code>[
    {
      "nome": "Teste Cidade - Prata",
      "email": "prata@gmail.com",
      "telefone": "99999",
      "cep": "38140000"
    },
    {
      "nome": "Teste Cidade - Rio de Janeiro",
      "email": "rio@gmail.com",
      "telefone": "99999",
      "cep": "20230010"
    },
    {
      "nome": "Teste Cidade - Uberlandia",
      "email": "uberlandia@gmail.com",
      "telefone": "99999",
      "cep": "38204054"
    },
    {
      "nome": "Teste Cidade - São Jose Dos Campos",
      "email": "saojosedoscampos@gmail.com",
      "telefone": "99999",
      "cep": "12244521"
    },
    {
      "nome": "Teste Cidade - Araguari",
      "email": "araguari@gmail.com",
      "telefone": "99999",
      "cep": "38443084"
    }
]</code></pre>
</body>
</html>
