
const express = require('express');
const router = express.Router();

const { getCategories, getCategory, deleteCategory, updateCategory,createCategory } = require('../controllers/category-controller')

router.get('/categories',getCategories);

router.get("/category/:catId", getCategory); 

router.delete("/category/:catId", deleteCategory);

router.patch('category/:catId', updateCategory );

router.post('/category', createCategory)

module.exports = router;