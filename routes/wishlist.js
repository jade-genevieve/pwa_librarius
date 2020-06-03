var express = require('express');
var router = express.Router();

var books = [];

/* GET books listing. */
router.get('/', function(req, res, next) {
  res.render('wishlist/index', { books: books });
});

/* POST add book. */
router.post('/', function(req, res, next) {
  var post = { book: req.body.message };
  books.push(post);
  res.status(201).redirect('/wishlist');
});

module.exports = router;