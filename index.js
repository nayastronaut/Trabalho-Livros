const express = require("express");
const app = express();
const port = 3000
app.use(express.json());
const { livros, Alugueis, Estudantes } = require('./data.js')

const criarlivro= require('./livros/criarlivro');
const listarlivro = require('./livros/listarlivro');
const atualizarlivro = require('./livros/atualizarlivro');
const deletarlivro = require('./livros/deletarlivro');
const criarAluguel = require('./Alugueis/criarAluguel');
const listarAlugueis = require('./Alugueis/listarAlugueis');
const atualizarAluguel = require('./Alugueis/atualizarAluguel');
const deletarAluguel = require('./Alugueis/deletarAluguel');
const buscarIdLivro = require('./Alugueis/buscarIdLivro');
const buscarIdEstudante = require('./Alugueis/buscarIdEstudante');
const criarEstudante = require ('./Estudantes/criarEstudante');
const listarEstudante = require ('./Estudantes/listarEstudante');
const atualizarEstudante = require ('./Estudantes/atualizarEstudante');
const deletarEstudante = require ('./Estudantes/deletarEstudante');

app.post('/livros', criarlivro);
app.get('/livros', listarlivro);
app.put('/livros/:id', atualizarlivro);
app.delete('/livros/:id', deletarlivro);
app.post('/Alugueis', criarAluguel);
app.get('/Alugueis', listarAlugueis);
app.put('/Alugueis/:id', atualizarAluguel);
app.delete('/Alugueis/:id', deletarAluguel);
app.get('/Alugueis/IdLivro', buscarIdLivro);
app.get('/Alugueis/idEstudante', buscarIdEstudante);
app.post('/Estudantes', criarEstudante);
app.get('/Estudantes', listarEstudante);
app.put('/Estudantes', atualizarEstudante);
app.delete('/Estudantes', deletarEstudante);

app.get ('/', (req, res) => {
    res.send('Servidor Express está funcionando!');
});

app.listen(port, () => {
    console.log(` Servidor rodando em http://localhost:${port} `);
});

