var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Book = require('../models/book')

/* GET all books. */
router.get('/', function(req, res, next) {

  Book.find(function(err, books) {
           
    if (err) { throw err; }
     if (books.length == 0){
    var alert = "The library is empty"
  }

    res.render('books/index', { alert, books : books});
  });
});

module.exports = router;