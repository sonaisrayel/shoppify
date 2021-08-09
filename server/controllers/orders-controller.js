const { NotFoundError } = require('../errors/index');
const { OrderModel } = require("../models");
const ResponceHandler = require('../handlers/ResponceHandler')


//GET ONE ORDER
async function getOrder(req, res) {
    const { orderId } = req.params;

    const order = await OrderModel.findOne({ _id: orderId })
    try {
        if (!order) {
            throw new NotFoundError("Order is not found")
        }
        ResponceHandler.handleGet(res, order);
    }
    catch (error) {
        res.status(404).send(error.message)
    }

}


async function getOrders(req, res) {
    try {
        const orders = await OrderModel.find()
        if (!orders) {
            throw new NotFoundError('Orders not found')
        }
        ResponceHandler.handleList(res, orders)
    } catch (error) {
        res.send(error.message)

    }
}

//DELETE ONE ORDER
async function deleteOrder(req, res) {
    try {
        const { orderId } = req.params;
        const order = await OrderModel.findOneAndDelete({ orderId })
        res.status(200).send(order)
    }
    catch (error) {
        res.status(404).send(error.message)
    }

}


//UPDATE ONE ORDER
async function updateOrder(req, res) {
    try {
        const { orderId } = req.params;
        const { name } = req.body
        const order = await OrderModel.findByIdAndUpdate(orderId, { title }, { new: true })

        res.status(201).send(order)
    }
    catch (error) {
        res.status(404).send(error.message)
    }
}


async function createOrder(req, res) {
    try {
        const { title, description } = req.body;
        const order = await OrderModel.create({ title, description });
        if (order) {
            res.status(201).send(order)
        }
    } catch (error) {
        res.send(error);
    }
}


module.exports = {
    getOrders, getOrder, updateOrder, deleteOrder, createOrder
}