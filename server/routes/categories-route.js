const express = require('express');
const router = express.Router();

const { getCategories, getCategory, deleteCategory, updateCategory, createCategory} = require('../controllers/category-controller')

router.get('/',getCategories);

router.get('/:catId', getCategory) 

router.delete("/:catId", deleteCategory);

router.patch('/:catId', updateCategory );

router.post('/', createCategory)

module.exports = router;