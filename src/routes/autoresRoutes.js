import express from "express";
import AutorController from "../controllers/autorController.js";

const autoresRoutes = express.Router();

autoresRoutes.get("/autores", AutorController.listarAutores);
autoresRoutes.get("/autores/:id", AutorController.buscarAutorById);
autoresRoutes.post("/autores", AutorController.cadastrarAutor);
autoresRoutes.put("/autores/:id", AutorController.atualizarAutorById);
autoresRoutes.delete("/autores/:id", AutorController.deletarAutorById);

export default autoresRoutes;
