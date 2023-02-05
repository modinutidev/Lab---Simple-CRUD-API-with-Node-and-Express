const http = require("http");
const port = 3000;

const rotas = {
  "/": "Curso de Node!",
  "/livros": "Voce esta em Livros!",
  "/autores": "Voce esta em Autores!",
};

// CRIA O SERVIDOR
const server = http.createServer((req, res) => {
  // CONFIGURA CABEÇALHO
  res.writeHead(200, { "Content-Type": "text/plain" });

  // MÉTODO DE SAÍDA
  res.end(rotas[req.url]);
});

// ESCUTA PORTA
server.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
