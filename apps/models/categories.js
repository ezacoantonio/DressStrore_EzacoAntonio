const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    categories: String

});

module.exports = mongoose.model('Category', CategorySchema, 'categories'); //indicate the collection name here as the third argument