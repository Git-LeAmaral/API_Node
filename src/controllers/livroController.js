import livro from "../models/livro.js";

class LivroController {

  static async listarLivros (req, res) {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
  };

  static async cadastrarLivro (req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json({message: "Criado com seucesso!", livro: novoLivro});
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha ao cadastrar livro`});
    }
  }

};

export default LivroController;

