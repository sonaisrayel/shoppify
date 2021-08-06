const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({

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

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel