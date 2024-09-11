const { livros } = require('../data');

const atualizarlivro = (req, res) => {
    const { id } = req.params;
    const novoTitulo = req.body.titulo;

    const livro = livros.find((b) => b.id == id);

    if (!livro) {
        return res.status(404).send({ message: 'Livro não encontrado' });
    }

    livro.titulo = novoTitulo;
    res.status(200).send({
        message: 'Livro atualizado com sucesso!',
        Livro: livro
    });
}

module.exports = atualizarlivro