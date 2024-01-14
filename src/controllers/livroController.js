import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).send(listaLivros);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao buscar livros!` });
    }
  }

  static async listarLivrosByEditora(req, res) {
    const editora = req.query.editora;

    try {
      const livrosPorEditora = await livro.find({ editora: editora });

      res.status(200).json(livrosPorEditora);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na busca!` });
    }
  }

  static async buscarLivroById(req, res) {
    try {
      const livroBuscado = await livro.findById(req.params.id);
      res.status(200).json(livroBuscado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao buscar livro!` });
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;

    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);

      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };

      const livroCriado = await livro.create(livroCompleto);

      res.status(201).json({
        message: "Criado com sucesso!",
        livro: livroCriado,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro!` });
    }
  }

  static async atualizarLivroById(req, res) {
    try {
      await livro.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send({ message: "Livro atualizado!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao atualizar livro!` });
    }
  }

  static async deletarLivroById(req, res) {
    try {
      await livro.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Livro deletado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao deletar livro!` });
    }
  }
}

export default LivroController;
