require('dotenv').config();

require('./config/database');

const Book = require('./models/book')

const data = require('./data')

const p1 = Book.deleteMany({})
Promise.all([p1])
.then(function(result) {
    console.log(result)
    return Promise.all([
        Book.create(data.books)
    ])
})
.then(process.exit)