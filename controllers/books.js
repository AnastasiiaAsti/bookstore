const Book = require('../models/book')

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render('books/index', {
        title: 'this is INDEX page to show all books' 
    });
}

function show(req,res) {
    res.render('books/show', {
        title: 'this is a SHOW page to show a specific book'
    })
}