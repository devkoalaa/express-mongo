import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectDB();

connection.on("error", (error) => {
  console.error("Erro de conexão:\n", error);
});

connection.once("open", () => {
  console.log("Conexão com o banco feita com sucesso!");
});

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
  const index = livros.findIndex((livro) => {
    return livro.id === Number(req.params.id);
  });

  livros.splice(index, 1);

  res.status(200).send("Livro apagado com sucesso!");
});

export default app;
