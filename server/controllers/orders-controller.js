const { OrderModel } = require('../models')
const NotFoundError = require('../errors/not-found-error')


async function getOrders(req, res) {
    try {
        const orders = await OrderModel.find();
        res.send(orders)
    } catch (error) {
        res.send({ error: error.message })

    }
}

//GET ONE ORDER
async function getOrder(req, res) {
    try {
        const { orderId } = req.params;
        const order = await OrderModel.findOne({ _id: orderId })
        if (order) {
            res.status(200).send(order)
        } else {
            res.status(404).send({ error: "The order not found" })
        }

    } catch (err) {
        console.log({ error: err.message });

    }
}

//DELETE ONE ORDER
async function deleteOrder(req, res) {
    try {
        const { orderId } = req.params;
        const order = await OrderModel.findByIdAndRemove(orderId);
        res.status(200).send(order)
    } catch (err) {
        res.send({ error: err.message })
    }
}


//UPDATE ONE ORDER
async function updateOrder(req, res) {
    try {
        const { orderId } = req.params;
        const { title } = req.body;
        const order = await OrderModel.findByIdAndUpdate(orderId, { title }, { new: true })
        res.status(200).send(order)
    }
    catch (err) {
        res.send({ err: err.message })
    }
}


async function createOrder(req, res) {
    try {
        const { title, description } = req.body;
        const order = await OrderModel.create({
            title,
            description
        })

        res.status(201).send(order)
    } catch (err) {
        res.send({ error: err.message });
    }
}


// async function createOrders(){

// }

module.exports = {
    getOrders, getOrder, updateOrder, deleteOrder, createOrder
}




