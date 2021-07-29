const express = require('express');
const router = express.Router();

const categories = require("../models/category.json");

router.get('/', (req, res) => {
    res.status(200).send(categories)
});

router.get('/:catId', (req, res) => {
    const { catId } = req.params;
    const category = categories.find(category => category.id == catId);
    res.status(200).send(category)
}) 

router.delete("/:catId", (req, res) => {
    const { catId } = req.params;
    //const category = categories.find(category => category.id == catId);
     categories.splice(catId - 1, 1);
    res.status(200).send(categories);
});

router.patch('/:catId', (req,res)=> {
    const{ catId } = req.params;
    categories.find(category => JSON.stringify(category.id) === catId).name = "new name";
    res.status(200).send(categories);
})

module.exports = router;