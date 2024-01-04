import express from "express";
import connectDB from "./config/dbConnect.js";

const connection = await connectDB();

connection.on("error", (error) => {
  console.error("Erro de conexão:\n", error);
});

connection.once("open", () => {
  console.log("Conexão com o banco feita com sucesso!");
});

const app = express();

app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "Livro 1",
  },
  {
    id: 2,
    titulo: "Livro 2",
  },
  {
    id: 3,
    titulo: "Livro 3",
  },
  {
    id: 4,
    titulo: "Livro 4",
  },
  {
    id: 5,
    titulo: "Livro 5",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const result = livros.findIndex((livro) => {
    return livro.id === Number(req.params.id);
  });

  res.status(200).json(livros[result]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);

  res.status(201).send("Livro criado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  const result = livros.findIndex((livro) => {
    return livro.id === Number(req.params.id);
  });

  livros[result].titulo = req.body.titulo;

  res.status(200).json(livros[result]);
});

app.delete("/livros/:id", (req, res) => {
  const index = livros.findIndex((livro) => {
    return livro.id === Number(req.params.id);
  });

  livros.splice(index, 1);

  res.status(200).send("Livro apagado com sucesso!");
});

export default app;
