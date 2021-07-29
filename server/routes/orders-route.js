const express = require('express');
const router = express.Router();

const { getOrders, getOrder, updateOrder, deleteOrder } = require('../controllers/orders-controller')


router.get('/', getOrders );
router.get('/:orderId',getOrder)

router.patch("/:orderId",updateOrder)

router.delete("/:orderId", deleteOrder)

module.exports = router;