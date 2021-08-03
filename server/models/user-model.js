const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema ({
    title :{
        type: String,
        required: true
    },
    description: String
});
const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel