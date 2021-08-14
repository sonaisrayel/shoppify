const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    userID: { type: Schema.Types.ObjectId, ref: 'User' }

});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel