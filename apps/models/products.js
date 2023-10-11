const mongoose = require('mongoose');

//The schema for the product collection
const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    published: Boolean,
    category: String
});


module.exports = mongoose.model('Product', ProductSchema,'products');
//indicate the collection name here as the third argument to the model function
