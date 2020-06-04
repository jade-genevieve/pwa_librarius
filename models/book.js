const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
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
  isbn: {
    type: Array,
    required: true,
  },
  image_links: {
      type: String
  },
  quantity: {
    type: Number,
    default: 1
  }
});

module.exports = Book = mongoose.model('book', BookSchema);