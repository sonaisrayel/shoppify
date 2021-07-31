const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel