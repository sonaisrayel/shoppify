const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
})


const CategoryModel = mongoose.model('Categories',categorySchema);

module.exports = CategoryModel
