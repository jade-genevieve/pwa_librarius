const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  isbn: {
    type: Array,
    required: true,
  },
  authors: {
    type: Array,
    required: true
  },
  description: {
    type: String
  },
  published_date: {
    type: Date
  },
  publisher: {
    type: String
  },
  pages: {
      type: Number
  },
  quantity: {
    type: Number,
    default: 1
  }
});

module.exports = Book = mongoose.model('book', BookSchema);