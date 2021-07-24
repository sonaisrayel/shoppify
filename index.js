const express = require('express');
const app = express();
const config = require('config');
const products = require("./storage/product.json");
const orders = require('./storage/orders.json');
const category = require("./storage/category.json");
const users = require('./storage/users.json').users
const PORT =  config.get('PORT');

app.get('/categories', (req, res) => {
    res.status(200).send(category)
})

app.get('/orders', (req, res) => {
    res.send(orders)
})

//localhost:3000/products
app.get("/products", (req, res) => {
    res.status(200).send(products);
});

//get one user localhost:3000/users/1
app.get("/users/:userId", (req, res) => {
    const { userId } = req.params;
    const user = users.find(user => user.id === userId);
    res.send(user)
})

app.listen(PORT, console.log(`Server listen to port ${PORT}`))
