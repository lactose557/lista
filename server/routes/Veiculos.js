const express = require('express');

// função para usar as rotas
const rotas = express.Router();

// POST
// rota para acesar o método POST para veículo
rotas.post('/', (req, res) => {

//colocando os dados
novoVeiculo = {
    nome: req.body.nome,
    fabricante: req.body.fabricante,
    anomodelo: req.body.anomodelo,
    combustivel: req.body.combustivel,
    cor: req.body.cor,
    preco: req.body.preco
}

  // indica que o dado foi criado com sucesso
  res.status(201).send({
    mensagem: 'Veículo cadastrado com sucesso.',
    veiculo: novoVeiculo
  });
});


// PUT
rotas.put('/', (req, res) => {

//criando uma variavel para a atualização do veículo
const atualizaVeiculo = {
}

  res.status(200).send({
    mensagem: 'dados do veiculos foi atualizado',
    veiculo: atualizaVeiculo
  });
});


// DELETE
// rota para excluir um veículo
rotas.delete('/:idveiculo', (req, res) => {

const idVeiculo = req.params.idveiculo;

//msg de exclusão
  res.status(202).send({
    mensagem: `Veículo com o id de: ${idVeiculo} foi excluído com sucesso.`
  });
});

module.exports = rotas;