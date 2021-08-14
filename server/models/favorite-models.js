const mongoose = require('mongoose');
const { Schema } = mongoose;

const FavoriteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    prodid:{
        type:Number,
        required:true
    },
    userid:{
        type:Number,
        required:true
    }
})


const FavoriteModel = mongoose.model('Favorite', FavoriteSchema);

module.exports = FavoriteModel
