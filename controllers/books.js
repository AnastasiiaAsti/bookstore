const Book = require('../models/book')

module.exports = {
    index,
    show, 
    new: newBook
}

function index(req, res) {
    res.render('books/index', {
        title: 'this is INDEX page to show all books' 
    });
}

function show(req,res) {
    res.render('books/show', {
        title: 'this is a SHOW page to view the details of any book'
    })
}

function newBook(req, res) {
    res.render('books/new', {
        title: 'Renders a page where you can view a form for submitting a book'
    })
}