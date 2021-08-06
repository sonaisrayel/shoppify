const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }

});

const UserModel = mongoose.model('Order', userSchema);

module.exports = UserModel