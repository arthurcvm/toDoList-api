const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

function naoImplementado(req, res) {
    res.status(501).json({erro: "Não implementado."});
}

app.get('/gerenciador-tarefas', naoImplementado);

app.get('/gerenciador-tarefas/:id', naoImplementado);

app.post('/gerenciador-tarefas', naoImplementado);

app.put('/gerenciador-tarefas/:id', naoImplementado);

app.delete('/gerenciador-tarefas/:id', naoImplementado);

app.put('/gerenciador-tarefas/:id/concluir', naoImplementado);

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));
