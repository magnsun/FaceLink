const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    posts: Array
});

module.exports = mongoose.model('Book', BookSchema);