const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required: true, unique: true },
    authors: {type: Array, reuired: true },
    synopsis: {},
    image: { type: {} },
    link: { type: String },
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;