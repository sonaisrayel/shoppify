const { NotFoundError } = require('../errors');
const { ProductModel } = require("../models");
const ResponceHandler = require('../handlers/ResponceHandler')

//GET ONE PRODUCT
async function getProduct(req, res) {

    const { productId } = req.params;

    const product = await ProductModel.find({ _id: productId })
    try {
       
        if (!product) {
            throw new NotFoundError("Product not found")
        }
        ResponceHandler.handleGet(res, product);
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
        ResponceHandler.handleList(res, products)
    } catch (error) {
        res.send(error.message)
    }
}


//DELETE ONE PRODUCT
async function deleteProduct(req, res) {
    try {
        const { productId } = req.params;
        const product = await ProductModel.findOneAndDelete({ _id: productId })
        ResponceHandler.handleDelete(res, product)
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

        ResponceHandler.handleUpdate(res, product)
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
            ResponceHandler.handleCreate(res, product)
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