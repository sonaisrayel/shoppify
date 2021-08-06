const categories = require("../../server/models/category.json");
const NotFoundError = require('../errors/not-found-error')

async function getCategorys(req, res) {
    try {
        if (!categories) {
            throw new NotFoundError('Categorys not found')
        }
        res.send(categories)

    } catch (error) {
        res.send({
            error: error.message
        })

    }
}

async function getCategory(req, res) {
    const {
        catId
    } = req.params;
    const category = categories.find(category => category.id == catId);

    if (category) {
        res.status(200).send(category)
    } else {
        res.status(404).send({
            error: 'Category not found'
        })
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




module.exports = {
    getCategorys,
    getCategory,
    deleteCategory,
    updateCategory
}