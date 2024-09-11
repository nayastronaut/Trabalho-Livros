const { Estudantes } = require('../data');

function criarEstudante(req, res) {
console.log(req.body);
const novoEstudante = {
id: Estudantes.length + 1,
nome: req.body.titulo
};

Estudantes.push(novoEstudante)
res.status(201).send({message: 'O Estudante foi criado com sucesso!', estudantes:novoEstudante});

}

module.exports = criarEstudante