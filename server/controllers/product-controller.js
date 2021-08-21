const { NotFoundError, NotModifiedError } = require('../errors');
const { ProductModel } = require("../models");
const ResponceHandler = require('../handlers/ResponceHandler')
const JWT = require('jsonwebtoken');

//GET ONE PRODUCT
async function getProduct(req, res) {

    const { productId } = req.params;
    const { authorization } = req.headers
    
    const tockenUserID = await JWT.verify(authorization , 'shop')
    const product = await ProductModel.findOne({ _id: productId , userID: tockenUserID._id })
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
    const {authorization} = req.headers
    const tockenUserID = await JWT.verify(authorization, 'shop');
    let products = await ProductModel.find({userID: tockenUserID._id});
  try {

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
        const { authorization } = req.headers;
        const tockenUserID = await JWT.verify(authorization, 'shop')
        const product = await ProductModel.findOneAndDelete({userID:tockenUserID. _id, _id:productId });
        if(!product){
            throw new NotModifiedError("Unable to delete the product")
        }
        ResponceHandler.handleDelete(res, product)
    } catch (error) {
        res.send(error.message)
    }

}

//UPDATE ONE PRODUCT
async function updateProduct(req, res) {
    try {
        const {authorization } = req.headers
        const tockenUserID = await JWT.verify(authorization, 'shop')
        const { productId } = req.params;
        const { name } = req.body

        const product = await ProductModel.findByIdAndUpdate({_id: productId, userID: tockenUserID._id},{name}, { new: true})
        if(!product){
            throw new NotModifiedError("Product can not be dupdated")
        }
        ResponceHandler.handleUpdate(res, product)
    }
    catch (error) {
        res.send(error.message)
    }
}

//Create One Order
async function createProduct(req, res) {
    try {
        const {authorization} = req.headers;
        const tockenUserID = await JWT.verify(authorization, 'shop')
        const { name, description, owner, category } = req.body;
        const product = await ProductModel.create({ name, description, owner, category , userID: tockenUserID._id });
        if (product) {
            ResponceHandler.handleCreate(res, product)
        }
    } catch (error) {
        res.send(error.message);
    }
}


module.exports = {
    getProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    createProduct
}