const { Alugueis } = require('../data')

const deletarAluguel = (req,res) => {
    const { id } = req.params
    const index = aluguel.findIndex((a) => a.id == id)

    if(index === -1){
        return res.status(404).send('Aluguel não encontrado')
    }

    const aluguelDeletado = aluguel.splice(index, 1) [0]

    res.status(200).send({
        message: 'Aluguel deletado com sucesso!',
        aluguel: aluguelDeletado
    })
}

module.exports = deletarAluguel
