const { Estudantes } = require('../data')

const deletarEstudante = (req, res) => {
const { id } = req.params;
const index = Estudantes.findIndex((b) => b.id == id);

if (index === -1) {
return res.status(404).send('Estudante não encontrado!');
}
const estudanteDeletado = Estudantes.splice(index, 1)[0];
Estudantes.forEach(Estudantes, index => {
if (Estudantes.Idestudante == id) 
    {Estudantes.splice(index, 1);
}
});
res.status(200).send({ message: 'O estudante foi deletado com sucesso!', estudante: estudanteDeletado })
}

module.exports = deletarEstudante;
