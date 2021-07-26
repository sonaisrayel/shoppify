const express = require('express');
const router = express.Router();

const orders = require("../../server/models/orders.json");


router.get('/', (req, res) => {
    res.send(orders)
});

// router.patch("/:orderId", (req, res) => {
    // const { orderId } = req.params;
    // orders.find(order => JSON.stringify(order.id) === orderId).name = "new name";
    // res.status(200).send(orders);
// });

router.delete("/:orderId", (req, res) => {
    const { orderId } = req.params;
    orders.find(order => JSON.stringify(order.id) === orderId)
    orders.splice(orderId - 1, 1);
    res.status(200).send(orders);
});

module.exports = router;