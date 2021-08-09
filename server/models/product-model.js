const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        required: true
    }
})


const ProductModel = mongoose.model('Products', productSchema);

module.exports = ProductModel