var express = require('express');
var router = express.Router();

var books = [];

/* GET all books. */
router.get('/', function(req, res, next) {
  if (books.length == 0){
    var alert = "The library is empty"
  }
  res.render('books/index', {alert,  books: books });
});

module.exports = router;