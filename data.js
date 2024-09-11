livros = [
    {   id: 1, 
        Titulo: "Pequeno Principe",
        Autor:"Antoine Saint-Exupery",
        Ano:"1943",
        Genêro:"Ficção"
    },
    {   id: 2,
        Titulo:"O Segredo",
        Autor:"Rhonda Byrne",
        Ano:"2006",
        Genêro:"Autoajuda"
    },
]

let Alugueis = [
    {   id: 1,
        idLivro: 2,
        idEstudante: 1,
        dataAluguel: '14/08/2024',
        dataDevolucao: '03/09/2024'
    }
]

let Estudantes = [
    {   id: 1, 
        nome: 'Nayla', 
        matricula: 14879, 
        curso:'Administração', 
        ano: 2021
    },
    {   id: 2, 
        nome:'Rafaela', 
        matricula: 15863, 
        curso:'ADS', 
        Ano: 2024
    },
    
]


module.exports = { livros, Alugueis, Estudantes }