const mongoose = require('mongoose');

const { Schema } = mongoose;

const LivrosSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Por favor coloque o título'],
    maxlength: 30,
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Por favor coloque a descrição'],
  },
  pageCount: {
    type: Number,
    trim: true,
    required: [true, 'Por favor coloque a quantidade de páginas'],
  },
  publishDate: {
    type: String,
    trim: true,
    required: [true, 'Por favor coloque a data de publicação'],
  },
});

module.exports = mongoose.model('Livros', LivrosSchema);
