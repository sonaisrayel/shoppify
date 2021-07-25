const express = require('express');
const config = require('config');

//getting json files
const products = require("./storage/product.json");
const orders = require("./storage/orders.json");
const categories = require("./storage/category.json");
const users = require('./storage/users.json').users;

const PORT = config.get('PORT');
const app = express();


//USERS ROUTES
//GET USERS
app.get('/users', (req, res) => {
    res.status(200).send(users)
});

//get one user localhost:3000/users/1
app.get("/users/:userId", (req, res) => {
    const { userId } = req.params;
    const user = users.users.find(user => user.id === userId);
    res.send(user)
})


//PRODUCTS ROUTES
app.get("/products", (req, res) => {
    res.status(200).send(products);
});

//ORDERS ROUTES

app.get('/orders', (req, res) => {
    res.send(orders)
});

app.get("/orders/1", (req, res) => {
    res.status(200).send(orders[0]);
});

//CATEGORY ROUTES
app.get('/categories', (req, res) => {
    res.status(200).send(categories)
})

app.get('/categories/:catid', (req, res) => {
    const { catid } = req.params;
    const category = categories.categories.find(category => category.id == catid);
    res.status(200).send(category)
});


app.get("/message", (req, res) => {
    res.status(messages.status).send(messages.message);
});

app.listen(PORT, console.log(`Server listen to port ${PORT}`))
