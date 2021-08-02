const { CategoryModel } = require("../models")


async function getCategories(req, res) {
    try {
        const categories = await CategoryModel.find();
        if (!categories) {
            res.status(404).send({ error: "Category not found" })
        }
        res.status(200).send(categories)

    } catch (error) {
        console.log(error.message)
    }
}

async function getCategory(req, res) {
    try {
        const { catId } = req.params;
        const category = await CategoryModel.findOne({ _id: catId });
        if (!category) {
            res.status(404).send({ error: 'Category not found' })
        }
        res.status(200).send(category)

    } catch (error) {
        res.send({ error: error.message })
    }
}


async function updateCategory(req, res) {
    const { catId } = req.params;
    const { name } = req.body;
    const category = categories.find(category => category.id == catId)
    if (category) {
        category.name = name
        res.status(200).send(category)
    } else {
        res.status(404).send({
            error: "Category can not update"
        })
    }
}

async function deleteCategory(req, res) {
    const { catId } = req.params;

    if (category.catId) {
        categories.splice(catId - 1, 1);

    } else {
        res.status(404).send({
            error: 'Category can not delete'
        })
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