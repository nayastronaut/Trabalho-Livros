const { Estudantes } = require('../data');

const listarEstudante = (req, res) => {
res.status(200).send(Estudantes);
};

module.exports = listarEstudante;