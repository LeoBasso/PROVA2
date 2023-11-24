const StatusCodes = require('http-status-codes');
require('express-async-errors');
const Livros = require('../Model/Livros');

class LivrosController {
  async getAllLivros(req, res) {
    const livros = await Livros.find();
    res.status(StatusCodes.OK).json(livros);
  }

  async createLivros(req, res) {
    const livrosData = req.body;
    console.log(livrosData);
    const newLivro = await Livros.create(livrosData);
    res.status(StatusCodes.CREATED).json(newLivro);
  }

  async updateLivros(req, res) {
    const livrosData = req.body;
    const id = req.params.id;
    const updatedLivro = await Livros.findByIdAndUpdate(id, livrosData, {
      new: true,
      runValidators: true,
    });
    res.status(StatusCodes.OK).json(updatedLivro);
  }

  async deleteLivros(req, res) {
    const id = req.params.id;
    await Livros.findByIdAndDelete(id);
    res.sendStatus(StatusCodes.NO_CONTENT);
  }

  async getLivroById(req, res) {
    const id = req.params.id;

    try {
      const livro = await Livros.findById(id);
      if (!livro) {
        return res.status(StatusCodes.NOT_FOUND).json({ mensagem: 'Livro não encontrado' });
      }

      res.status(StatusCodes.OK).json(livro);
    } catch (error) {
      console.error("Erro ao buscar detalhes do livro:", error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mensagem: 'Erro interno do servidor' });
    }
  }
}

module.exports = new LivrosController();
