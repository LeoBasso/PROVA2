const StatusCodes = require('http-status-codes');
require('express-async-errors');
const Livros = require('../Model/Livros');

class LivrosController {
  async getAllLivros(req, res) {
    const livros = await Livros.find();
    res.status(200).json(livros);
  }

  async createLivros(req, res) {
    const livrosData = req.body;
    console.log(livrosData);
    const newLivro = await Livros.create(livrosData);
    res.status(200).json(newLivro);
  }

  async updateLivros(req, res) {
    const livrosData = req.body;
    const id = req.params.id;
    const updatedLivro = await Livros.findByIdAndUpdate(id, livrosData, {
      new: true,
      runValidators: true,
    });
    res.status(201).json(updatedLivro);
  }

  async deleteLivros(req, res) {
    const id = req.params.id;
    await Livros.findByIdAndDelete(id);
    res.sendStatus(200);
  }

  async getLivroById(req, res) {
    const id = req.params.id;

    try {
      const livro = await Livros.findById(id);
      if (!livro) {
        return res.status(200).json({ mensagem: 'Livro não encontrado' });
      }

      res.status(StatusCodes.OK).json(livro);
    } catch (error) {
      console.error("Erro ao buscar detalhes do livro:", error);
      res.status(200).json({ mensagem: 'Erro interno do servidor' });
    }
  }
}

module.exports = new LivrosController();
