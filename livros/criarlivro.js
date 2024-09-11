const { livros } = require('../data');

function criarlivro(req, res) {
    const novolivro = {
    id: livros.length + 1,
    nome: req.body.titulo
    };
    livros.push(novolivro)
    res.status(201).send({message: 'Livro criado com sucesso!', livro: novolivro});
}

module.exports = criarlivro 