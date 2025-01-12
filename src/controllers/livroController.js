import livro from "../models/livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

  static async listarLivros (req, res) {
    try {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    } catch (erro) {
        res.status(500).json({message: `${erro.message} - Falha na requisição`});
    }
  };

  static async listarLivroPorId (req, res) {
    try {
      const id = req.params.id;
      const livroPorId = await livro.findById(id);
      res.status(200).json(livroPorId);
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha ao buscar o livro`});
    }
  }

  static async cadastrarLivro (req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}};
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({message: "Criado com seucesso!", livro: livroCriado});
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha ao cadastrar livro`});
    }
  }

  static async atualizarLivro (req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Livro atualizado"});
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha na atualização`});
    }
  }

  static async excluirLivro (req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({message: "Livro excluido"});
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha na exclusão`});
    }
  }

  static async listaLivrosPorEditora (req, res) {
    const editora = req.query.editora;
    try {
      const listaLivrosPorEditora = await livro.find({editora: editora});
      res.status(200).json(listaLivrosPorEditora);
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha na busca`});
    }
  }

};

export default LivroController;

