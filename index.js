const express = require('express');
const config = require('config');

//getting json files
const products = require("./storage/product.json");
const orders = require("./storage/orders.json");
const categories = require("./storage/category.json");
const users = require('./storage/users.json');


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
    const user = users.find(user => user.id === userId);
    res.send(user)
});

//PRODUCTS ROUTES
app.get("/products/:productId", (req, res) => {
    const { productId } = req.params;
    const product = products.find(product => product.id === productId);
    res.status(200).send(products);
});

app.delete("/products/:productId", (req, res) => {
    const { id } = req.params;
    let product = products.find(product => product.id == productId);
    products.splice(id-1,1);
    res.status(200).send(product);
});

//ORDERS ROUTES

app.get('/orders', (req, res) => {
    res.send(orders)
});

app.get("/orders/1", (req, res) => {
    res.status(200).send(orders[0]);
});

app.patch("/orders/:id", (req, res) => {
    const { id } = req.params;
    orders.find(order => order.id == id).name = "new name";
    res.status(200).send(orders);
});

//CATEGORY ROUTES
app.get('/categories', (req, res) => {
    res.status(200).send(categories)
})

app.get('/categories/:catId', (req, res) => {
    const { catid } = req.params;
    const category = categories.find(category => category.id == catId);
    res.status(200).send(category)
});


app.listen(PORT, console.log(`Server listen to port ${PORT}`))

