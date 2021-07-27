const express = require('express');
const router = express.Router();

const products = require("../../server/models/category.json");


router.get('/', (req, res) => {
    res.status(200).send(categories)
});

router.get('/:catId', (req, res) => {
    const { catId } = req.params;
    const category = categories.find(category => category.id == catId);
    res.status(200).send(category)
})
module.exports = router;