import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).send(listaAutores);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao buscar autores!` });
    }
  }

  static async buscarAutorById(req, res) {
    try {
      const autorBuscado = await autor.findById(req.params.id);
      res.status(200).json(autorBuscado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao buscar autor!` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({
        message: "Criado com sucesso!",
        autor: novoAutor,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar autor!` });
    }
  }

  static async atualizarAutorById(req, res) {
    try {
      await autor.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send({ message: "Autor atualizado!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao atualizar autor!` });
    }
  }

  static async deletarAutorById(req, res) {
    try {
      await autor.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Autor deletado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao deletar autor!` });
    }
  }
}

export default AutorController;
