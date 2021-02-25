const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {
  listarTarefaId,
  listarTarefas,
  cadastrarTarefa,
  atualizarTarefa,
  removerTarefa,
  concluirTarefa
} = require("./controllers/gerenciador-tarefas.js");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/gerenciador-tarefas", listarTarefas);

app.get("/gerenciador-tarefas/:id", listarTarefaId);

app.post("/gerenciador-tarefas", cadastrarTarefa);

app.put("/gerenciador-tarefas/:id", atualizarTarefa);

app.delete("/gerenciador-tarefas/:id", removerTarefa);

app.put("/gerenciador-tarefas/:id/concluir", concluirTarefa);

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));
