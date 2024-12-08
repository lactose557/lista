const express = require('express');
const fs = require('fs');

// importar o body-parser para manipular os dados do corpo da requisição
// instalar o pacote com o comando: npm install body-parser
const bodyParser = require('body-parser');

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 8080;

const app = express();

// confguração do body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// importar as configurações de rotas
const veiculosRotas = require('./server/routes/Veiculos');

// rota raiz do servidor veiculos

app.get('/', (req, res) => {

 const arquivoHtml = fs.readFileSync('./server/pages/pagina.html');

  // puxar o arquivo pagina.html
  res.status(200).end(arquivoHtml);

});

// configurar as rotas para veiculo
app.use('/veiculo', veiculosRotas);


// rodando e executando o servidor
app.listen(port, localhost, console.log('O servidor está rodando...'));