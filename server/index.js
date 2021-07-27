const express = require('express');
const config = require('config');

//GETTING JSON FILES
const orders = require("../server/models/orders.json");
const categories = require("../server/models/category.json");

const PORT = config.get("PORT");
const app = express();

// const userRoute = require('../server/routes/user-route');
// const productROute = require('../server/routes/product-route')


const { UserRouter, ProductRouter } = require('../server/routes');

app.use('/users', UserRouter);
app.use('/products', ProductRouter);


//Endpoints
//ORDERS ROUTES
app.get('/orders', (req, res) => {
    res.send(orders)
});

app.get("/orders/:orderId", (req, res) => {
    const { orderId } = req.params;
    const order = orders.find(order => order.id == orderId);
    res.status(200).send(order);
});

//will be changed
app.patch("/orders/:orderId", (req, res) => {
    const { orderId } = req.params;
    orders.find(order => JSON.stringify(order.id) === orderId).name = "new name";
    res.status(200).send(orders);
});

//CATEGORY ROUTES
app.get("/categories", (req, res) => {
    res.status(200).send(categories)
});

app.get("/categories/:catId", (req, res) => {
    const { catId } = req.params;
    const category = categories.find(category => category.id == catId);
    res.status(200).send(category)
})

app.patch("/categories/:orderId", (req, res) => {
    const { catId } = req.params;
    categories.find(category => JSON.stringify(category.id) === catId).name = "new name";
    res.status(200).send(categories);
});

app.listen(PORT, console.log(`Server listen to port ${PORT}`))