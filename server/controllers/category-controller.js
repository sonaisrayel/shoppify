const { NotFoundError, NotModifiedError } = require('../errors/index');
const { CategoryModel } = require("../models");


async function getCategory(req, res) {
    try {
        const { catid } = req.params;
        const category = await CategoryModel.findById(catid);

        if (!category) {
            throw new NotFoundError("category not found");
        }
        ResponceHandler.handleGet(res, category);
    } catch (error) {
        res.send(error.message)
    }
}


async function getCategories(req, res) {
    try {
        const categories = await CategoryModel.find();
        if (!categories) {
            throw new NotFoundError('Categories are not found')
        }
        ResponceHandler.handleGet(res, categories);

    } catch (error) {
        res.send(error.message)

    }
}


async function updateCategory(req, res) {
    try {
        const { catid } = req.params;
        const { title } = req.body;
        const category = await CategoryModel.findByIdAndUpdate(catid, { title }, { new: true })
        if (!category) {
            throw new NotModifiedError("Category data not updated")
        }
        ResponceHandler.handleGet(res, category);
    }
    catch (err) {
        res.send({ err: err.message })
    }
}

async function deleteCategory(req, res) {
    try {
        const { catid } = req.params;
        const category = await CategoryModel.findByIdAndRemove(catid);
        if (!category) {
            throw new NotModifiedError("Can not Delete Category");
        }
        ResponceHandler.handleGet(res, category);
    } catch (err) {
        res.send({ error: err.message })
    }
}


async function createCategory(req, res) {

    try {
        const { name } = req.body;

        const category = await CategoryModel.create({ name });
        if (!category) {
            throw new NotModifiedError("Category not created")
        }
        ResponceHandler.handleGet(res, category);
    }
    catch (error) {
        res.send({ error: error.message })
    }

}



module.exports = {
    getCategories,
    getCategory,
    deleteCategory,
    updateCategory,
    createCategory
}