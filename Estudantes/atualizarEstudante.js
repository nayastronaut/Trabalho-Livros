const { Estudantes } = require('../data');

const atualizarEstudante = (req, res) => {
    const { id } = req.params;
    const novoTitulo = req.body.titulo;

    const estudante = Estudantes.find((b) => b.id == id);

    if (!estudante) {
        return res.status(404).send({ message: 'Estudante não encontrado' });
    }

    estudante.titulo = novoTitulo;
    res.status(200).send({
        message: 'Estudante atualizado com sucesso!',
        Estudantes: estudante
    });
}

module.exports = atualizarEstudante;