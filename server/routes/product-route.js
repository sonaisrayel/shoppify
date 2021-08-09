const express = require('express');
const router = express.Router();


const { getProduct, getProducts, deleteProduct, updateProduct, createProduct } = require('../controllers/product-controller');


router.get('/', getProducts);
router.get('/:productId', getProduct)
router.patch("/:productId", updateProduct)
router.delete("/:productId", deleteProduct)
router.post("/", createProduct)

module.exports = router;