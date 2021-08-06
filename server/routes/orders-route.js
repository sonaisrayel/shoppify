const express = require('express');
const router = express.Router();

const { getOrders, getOrder, updateOrder, deleteOrder, createOrder } = require('../controllers/orders-controller')


router.get('/', getOrders );
router.get('/:Idorder',getOrder)
router.patch("/:orderId",updateOrder)
router.delete("/:orderId", deleteOrder)
router.post("/", createOrder)


module.exports = router;