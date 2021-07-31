
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const { getCategorys, getCategory, deleteCategory, updateCategory } = require('../controllers/category-controller')

router.get('/',getCategorys);

router.get('/:catId', getCategory) 

router.delete("/:catId", deleteCategory);

router.patch('/:catId', updateCategory )

module.exports = router;