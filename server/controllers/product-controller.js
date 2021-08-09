const { NotFoundError } = require('../errors');
const { ProductModel } = require("../models");


//GET ONE PRODUCT
async function getProduct(req, res) {
    try {
        const { productId } = req.params;
        const product = await ProductModel.find({ _id: productId })

        if (!product) {
            throw new NotFoundError("Product not found")
        }

        res.status(200).send(product)
    }
    catch (error) {
        res.status(404).send(error.message)
    }
}



async function getProducts(req, res) {
    try {
        const products = await ProductModel.find();
        if (!products) {
            throw new NotFoundError('Products not found')
        }
        res.send(products)
    } catch (error) {
        res.send(error.message)
    }
}


//DELETE ONE PRODUCT
async function deleteProduct(req, res) {
    try {
        const { productId } = req.params;
        const product = await ProductModel.findOneAndDelete({ _id: productId })
        res.status(200).send(product)
    }
    catch (error) {
        res.status(404).send(error.message)
    }

}

//UPDATE ONE PRODUCT
async function updateProduct(req, res) {
    try {
        const { productId } = req.params;
        const { name } = req.body

        const product = await ProductModel.findByIdAndUpdate(productId, { name }, { new: true })

        res.status(201).send(product)
    }
    catch (error) {
        res.status(404).send(error.message)
    }
}

async function createProduct(req, res) {
    try {
        const { name, description, owner, category } = req.body;
        const product = await ProductModel.create({ name, description, owner, category });
        if (product) {
            res.status(201).send(product)
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
}


module.exports = {
    getProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    createProduct
}