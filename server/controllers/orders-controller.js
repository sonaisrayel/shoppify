const orders = require("../../server/models/orders.json");
const {NotFoundError} = require('../errors/index')


async function getOrders(req, res) {
    try {

        if (!orders) {
            throw new NotFoundError('Order not found')
        }
        res.send(orders)

    } catch (error) {
        res.send(error.message)

    }
}

//GET ONE ORDER
async function getOrder(req, res) {
    const { orderId } = req.params;
    const order = orders.find(order => order.id == orderId)
    try{
        if(!order){
            throw new NotFoundError("Orders not found")
        }
        res.status(200).send(order)
    }
   catch(error){
    res.status(404).send(error.message)
   }
        
    
}

//DELETE ONE ORDER
async function deleteOrder(req, res) {
    const { orderId } = req.params;
    const order = orders.find(order => order.id == orderId)
    try{
        if(!order){
            throw new NotFoundError("Order not found")
        }
        orders.splice(orderId-1,1)
        res.status(200).send(orders)
    }
    catch(error){
        res.status(404).send(error.message)
    }
    
}


//UPDATE ONE ORDER
async function updateOrder(req, res) {
    const { orderId } = req.params;
    const { name } = req.body
    const order = orders.find(order => order.id == orderId)
    try{
        if (!order) {
        throw new NotFoundError("Order Not Found")
        } 
        order.name = name
        res.status(201).send(order)
    }
    catch(error){
        res.status(404).send(error.message)
    }
}

module.exports = {
    getOrders, getOrder, updateOrder, deleteOrder
}




