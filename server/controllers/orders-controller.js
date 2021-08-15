const { NotFoundError,NotModifiedError } = require('../errors/index');
const { OrderModel } = require("../models");
const ResponceHandler = require('../handlers/ResponceHandler')
const JWT = require('jsonwebtoken');



//GET ONE ORDER
async function getOrder(req, res) {
    const { orderId, userID } = req.params;
    const { authorization } = req.headers

    const tockenUserID = await JWT.verify(authorization, 'shop');

    const order = await OrderModel.findOne({ _id: orderId, userID: tockenUserID._id })
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
    const { authorization } = req.headers
    const tockenUserID = await JWT.verify(authorization, 'shop');
    let orders = await  OrderModel.find({userID: tockenUserID._id});
 try {
        
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
        const {orderId} = req.params;
        const { authorization } = req.headers
        const tockenUserID = await JWT.verify(authorization, 'shop');
        
        const order = await OrderModel.findOneAndRemove({userID:tockenUserID._id,_id:orderId});
        if (!order) {
            throw new NotModifiedError("Can not Delete Order");
        }
        ResponceHandler.handleGet(res, order);
    } catch (err) {
        res.send({ error: err.message })
    }
}


//UPDATE ONE ORDER
async function updateOrder(req, res) {
    try {
        const { authorization } = req.headers
        const tockenUserID = await JWT.verify(authorization, 'shop');
        const { orderId } = req.params;
        const { title } = req.body;
        
        const order = await OrderModel.findOneAndUpdate({_id:orderId,userID:tockenUserID._id}, { title }, { new: true })
        if (!order) {
            throw new NotModifiedError("Order data not updated")
        }
        ResponceHandler.handleGet(res, order);
    }
    catch (err) {
        res.send({ err: err.message })
    }
}

// CREATE ONE ORDER
async function createOrder(req, res) {
    try {
        const { authorization } = req.headers

        const tockenUserID = await JWT.verify(authorization, 'shop');

        const { title, description } = req.body;
        const order = await OrderModel.create({ title, description, userID: tockenUserID._id });
        if (order) {
            ResponceHandler.handleList(res, order)
        }
    } catch (error) {
        res.send(error);
    }
}


module.exports = {
    getOrders, getOrder, updateOrder, deleteOrder, createOrder
}