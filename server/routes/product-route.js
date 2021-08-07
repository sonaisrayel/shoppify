const express = require('express');
const router = express.Router();

const products = require("../../server/models/product.json");


//PRODUCTS ROUTES
router.get("/:productId", (req, res) => {

    const { productId } = req.params;
    const product = products.find(product => product.id == productId);
    res.status(200).send(product);
});

router.delete("/:productId", (req, res) => {
    const { productId } = req.params;
    console.log(products.splice(productId - 1, 1));
    products.splice(productId - 1, 1);
    res.status(200).send(products);
});

module.exports = router;