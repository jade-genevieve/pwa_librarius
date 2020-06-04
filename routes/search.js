var express = require('express');
var router = express.Router();
var Book = require('../models/book')

const { callGoogle } = require('../utils/callGoogle/index.js')

var searchResult;

/* GET book details. */
router.get('/', function (req, res, next) {
    console.log('bkjvla', searchResult.title)

    res.render('search/index', { result: [searchResult] });
});

/* GET search form. */
router.get('/new', function (req, res, next) {
    res.render('search/new', {});
});

/* POST search result. */
router.post('/result', async function (req, res, next) {
    var isbn = req.body.isbn;

    /*
    isbns for testing
    9781617294051
    1118008189
    9781491904152
    */

    searchResult = await callGoogle(isbn, function (err, data) {
        if (err) {
            res.json(err);
            console.log('fffffff', err)
        }
        console.log("book received")
        res.json({})
    });

    console.log('rrrrr', searchResult)

    if (searchResult !== undefined) {
        res.status(201).redirect('/search');
    } else {
        const errorMsg = "Couldn't find a book with ISBN " + isbn
        res.render('search/new', { error: errorMsg});
    }

});

module.exports = router;
