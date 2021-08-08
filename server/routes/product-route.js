/*const express = require('express');
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

module.exports = router;*/

const express = require('express');
const router = express.Router();
const { getproduct, getgetproduct, updategetproduct, deletegetproduct, creategetproduct } = require('../controllers/getproduct-controller')
router.get('/', getproduct );
router.get('/:Idproduct',getproduct)
router.patch("/:productId",updateproduct)
router.delete("/:productId", deleteproduct)
router.post("/", createproduct)
module.exports = router;