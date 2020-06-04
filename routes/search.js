var express = require('express');
var router = express.Router();

var searchResult;

/* GET book details. */
router.get('/', function(req, res, next) {
  res.render('search/index', { result: [ searchResult] });
});

/* GET search form. */
router.get('/new', function(req, res, next) {
  res.render('search/new', {});
});

/* POST search result. */
router.post('/result', function(req, res, next) {
    var book = { isbn: req.body.isbn };
    console.log(req.body);
    searchResult = book;
  res.status(201).redirect('/search');
});

module.exports = router;
 