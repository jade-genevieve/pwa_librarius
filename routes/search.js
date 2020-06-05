var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Book = require('../models/book')

const { callGoogle } = require('../utils/callGoogle/index.js')

var searchResult;

/* GET book details. */
router.get('/', function (req, res, next) {
    console.log('Book details...', searchResult.title)

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
            console.log('Calling Google failed ', err)
        }
        console.log('Calling Google succeeded')
        res.json({})
    });

    console.log('Google replied ', searchResult)

    if (searchResult !== undefined) {
        res.status(201).redirect('/search');
    } else {
        const errorMsg = "Couldn't find a book with ISBN " + isbn
        res.render('search/new', { alert: errorMsg });
    }

    router.get('/add', function (req, res, next) {

        const bookSchema = {
            title: searchResult.title,
            authors: searchResult.authors,
            description: searchResult.description,
            published_date: searchResult.publishedDate,
            publisher: searchResult.publisher,
            pages: searchResult.pageCount,
            isbn: searchResult.industryIdentifiers,
            image_links: searchResult.imageLinks.smallThumbnail
        };

        Book.findOneAndUpdate({ title: searchResult.title }, { $inc: { quantity: 1 } }, { new: true }, function (err, result) {
            if (!err) {
                if (!result) {
                    result = new Book(bookSchema);
                }
                result.save(function (err) {
                    if (err) {
                        console.log(err);
                        return
                    };
                    const savedMsg = 'Book added to library. Add another?'
                    res.render('search/new', { alert: savedMsg });
                });
            };

        });
    });

});

module.exports = router;
