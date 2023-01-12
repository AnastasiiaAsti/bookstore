const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Book', bookSchema)

// const books = [
//     {id: 111111, name: 'Book 1', author: 'Author 1'},
//     {id: 111112, name: 'Book 2', author: 'Author 2'},
//     {id: 111113, name: 'Book 3', author: 'Author 3'}
// ];