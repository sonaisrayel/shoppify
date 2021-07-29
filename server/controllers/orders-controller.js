const orders = require("../../server/models/orders.json");
const NotFoundError = require('../errors/not-found-error')


async function getOrders(req, res) {
    try {

        if (!orders) {
            throw new NotFoundError('Product not found')
        }
        res.send(orders)

    } catch (error) {
        res.send({ error: error.message })

    }
}

//GET ONE ORDER
async function getOrder(req, res) {
    const { orderId } = req.params;
    const order = orders.find(order => order.id == orderId)
    if (order) {
        res.status(200).send(order)
    } else {
        res.status(404).send({ error: " The order not found" })
    }
}

//DELETE ONE ORDER
async function deleteOrder(req, res) {
    const { orderId } = req.params;
    const order = orders.filter(order => order.id != orderId)
    res.status(200).send(order)
}


//UPDATE ONE ORDER
async function updateOrder(req, res) {
    const { orderId } = req.params;
    const { name } = req.body
    const order = orders.find(order => order.id == orderId)
    if (order) {
        order.name = name
        res.status(201).send(order)
    } else {
        res.status(404).send({ error: "Order not found" })
    }
}

module.exports = {
    getOrders, getOrder, updateOrder, deleteOrder
}




