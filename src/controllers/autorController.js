import { autor } from "../models/Autor.js";

class AutorController {

  static async listarAutores (req, res) {
    try {
        const listarAutores = await autor.find({});
        res.status(200).json(listarAutores);
    } catch (erro) {
        res.status(500).json({message: `${erro.message} - Falha na requisição`});
    }
  };

  static async listarAutorPorId (req, res) {
    try {
      const id = req.params.id;
      const autorPorId = await autor.findById(id);
      res.status(200).json(autorPorId);
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha ao buscar o autor`});
    }
  }

  static async cadastrarAutor (req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({message: "Criado com seucesso!", autor: novoAutor});
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha ao cadastrar autor`});
    }
  }

  static async atualizarAutor (req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Autor atualizado"});
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha na atualização`});
    }
  }

  static async excluirAutor (req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({message: "Autor excluido"});
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha na exclusão`});
    }
  }

};

export default AutorController;

