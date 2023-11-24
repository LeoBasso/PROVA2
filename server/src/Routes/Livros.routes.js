const express = require('express');
const livrosController = require('../Controllers/LivrosController');

const router = express.Router();

router.get('/livros', livrosController.getAllLivros);

router.get('/livros/:id', livrosController.getLivroById);

router.post('/livros', livrosController.createLivros);

router.put('/livros/:id', livrosController.updateLivros);

router.delete('/livros/:id', livrosController.deleteLivros);

module.exports = router;
