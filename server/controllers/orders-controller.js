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

}


//DELETE ONE ORDER
async function deleteOrder(req, res) {

}

//UPDATE ONE ORDER
async function updateOrder(req, res) {

}

module.exports = {
    getOrders
}



