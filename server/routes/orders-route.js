const express = require('express');
const router = express.Router();

const { getOrders, getOrder, updateOrder, deleteOrder, createOrder } = require('../controllers/orders-controller')

router.get('/:orderId',getOrder)
router.get('/', getOrders );
router.patch("/:orderId",updateOrder)
router.delete("/:orderId", deleteOrder)
router.post("/", createOrder)


module.exports = router;