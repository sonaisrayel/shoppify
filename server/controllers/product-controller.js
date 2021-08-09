const { NotFoundError } = require('../errors/index');
const { productModel } = require("../models");
//GET ONE PRODUCT
async function getproduct(req, res) {
    const { productId } = req.params;
    const product = await productModel.find({ _id: productId })
    try {
        if (!product) {
            throw new NotFoundError("product not found")
        }
        res.status(200).send(product)
    }
    catch (error) {
        res.status(404).send(error.message)
    }
}
async function getproducts(req, res) {
    try {
        const products = await productModel.find()
        if (!products) {
            throw new NotFoundError('products not found')
        }
        res.send(products)
    } catch (error) {
        res.send(error.message)
    }
}
//DELETE ONE PRODUCT
async function deleteproduct(req, res) {
    try {
        const { productId } = req.params;
        const product = await productModel.findOneAndDelete({ productId })
        res.status(200).send(product)
    }
    catch (error) {
        res.status(404).send(error.message)
    }

}

//UPDATE ONE PRODUCT
async function updateproduct(req, res) {
    try {
        const { productId } = req.params;
        const { name } = req.body
        const product = await productModel.findByIdAndUpdate(productId, { title }, { new: true })

        res.status(201).send(product)
    }
    catch (error) {
        res.status(404).send(error.message)
    }
}

async function createproduct(req, res) {
    try {
        const { title, description } = req.body;
        const product = await productModel.create({ title, description });
        if (product) {
            res.status(201).send(product)
        }
    } catch (error) {
        res.send(error);
    }
}
module.exports = {
    getproduct,
    getproducts,
    deleteproduct,
    updateproduct,
    createproduct
}