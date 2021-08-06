const categories = require("../../server/models/category.json");
const { NotFoundError } = require('../errors/index')


async function getCategory(req, res) {
    const catId = req.params;
    const category = categories.find(category => category.id == catId);

    try {
        if (!category) {
            throw new NotFoundError('Category not found')
        }
        res.status(200).send(category)

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
        res.status(200).send(categories)

    } catch (error) {
        res.send(error.message)

    }
}


async function updateCategory(req, res) {
    const { catId } = req.params;
    const { name } = req.body;
    const category = categories.find(category => category.id == catId)
    try {
        if (!category) {
            throw new NotFoundError("Can not update Category")
        }
        category.name = name
        res.status(200).send(category)
    }
    catch (error) {
        res.status(404).send(error.message)
    }
}

async function deleteCategory(req, res) {
    const { catId } = req.params;
    const category = categories.find(category => category.id == catId)
    try {
        if (!category.catId) {
            throw new NotFoundError("Can not delete Category")
        }
        categories.splice(catId - 1, 1);
    }
    catch (error) {
        res.status(404).send(error.message)
    }

    res.status(200).send(categories)
}


async function createCategory(req, res) {

    try {
        const { name } = req.body;

        const category = await CategoryModel.create({ name });
        if (!category) {
            throw new Error("Resource not created")
        }
        res.status(201).send(category)
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