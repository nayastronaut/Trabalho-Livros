const { livros } = require('../data');

const listarlivro = (req, res) => {
res.status(200).send(livros);
};

module.exports = listarlivro
