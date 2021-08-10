const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({

    firstname: String,
    lastname: String,
    username: {
        type: String,
        unique: true,
        index:true
    },
    password: String,
    email: String,
    salary: String,
    age: String

});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel