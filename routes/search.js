
var express = require('express');
var router = express.Router();

var posts;

/* GET book details. */
router.get('/', function(req, res, next) {
  res.render('search/index', { posts: [ posts] });
});

/* GET search form. */
router.get('/new', function(req, res, next) {
  res.render('search/new', {});
});

/* POST search result. */
router.post('/result', function(req, res, next) {
    var post = { message: req.body.message };
    posts = post;
  res.status(201).redirect('/search');
});

module.exports = router;
