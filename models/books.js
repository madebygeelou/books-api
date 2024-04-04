const mongoose = require('mongoose')
const cors = require('cors')
const { Schema } =  mongoose

const bookSchema = new Schema ({
    name: { type: String, required: true},
    greeting: String, 
    pangram: String,
    filler: String
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book