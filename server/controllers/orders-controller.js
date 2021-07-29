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

}

//UPDATE ONE ORDER
async function updateOrder(req, res) {

}

module.exports = {
    getOrders, getOrder
}




