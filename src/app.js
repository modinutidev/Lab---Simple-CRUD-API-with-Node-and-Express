import express from "express";

const app = express();

// Para trabalhar com o json no express devemos realizar está declaração
app.use(express.json());

const livros = [
  { id: 1, titulo: "Senhor dos anéis" },
  { id: 2, titulo: "O Hobbit" },
];

// Métodos
app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const index = findBook(req.params.id);
  res.json(livros[index]);
});

app.post("/livros", (req, res) => {
  // O que vier no corpo da requisição precisa ser adicionado na constante livros
  // Utilizar o método push para adicionar nova informação no array
  // O que colocar no array? Adicionar o que vier no corpo da requisição
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  const index = findBook(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = findBook(req.params.id);
  livros.splice(index, 1);
  res.json(livros);
});

function findBook(id) {
  return livros.findIndex((livro) => livro.id == id);
}

// Deve exportar para outro arquivo fazer o uso
export default app;
