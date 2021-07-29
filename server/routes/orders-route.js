const express = require('express');
const router = express.Router();

const { getOrders, getOrder, updateOrder } = require('../controllers/orders-controller')


router.get('/', getOrders );
router.get('/:orderId',getOrder)

router.patch("/:orderId",updateOrder)

router.delete("/:orderId", (req, res) => {
    const { orderId } = req.params;
    orders.splice(orderId - 1, 1);
    res.status(200).send(orders);
});

module.exports = router;