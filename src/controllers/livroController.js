import livro from "../models/livro.js";

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

  static async buscarLivroById(req, res) {
    try {
      const id = req.params.id;
      const livroBuscado = await livro.findById(id);
      res.status(200).json(livroBuscado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao buscar livro!` });
    }
  }

  static async cadastrarLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json({
        message: "Criado com sucesso!",
        livro: novoLivro,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro!` });
    }
  }

  static async atualizarLivroById(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).send({ message: "Livro atualizado!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao atualizar livro!` });
    }
  }

  static async deletarLivroById(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro deletado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao deletar livro!` });
    }
  }
}

export default LivroController;
