import express from "express";
import LivroController from "../controllers/livroController.js";

const livrosRoutes = express.Router();

livrosRoutes.get("/livros", LivroController.listarLivros);
livrosRoutes.get("/livros/busca", LivroController.listarLivrosByEditora);
livrosRoutes.get("/livros/:id", LivroController.buscarLivroById);
livrosRoutes.post("/livros", LivroController.cadastrarLivro);
livrosRoutes.put("/livros/:id", LivroController.atualizarLivroById);
livrosRoutes.delete("/livros/:id", LivroController.deletarLivroById);
livrosRoutes.delete("/livros/:id", LivroController.deletarLivroById);

export default livrosRoutes;
