const express = require('express');
const config = require('config');
const bodyParser = require('body-parser')


//GETTING JSON FILES

const PORT = config.get("PORT");
const app = express();

// const userRoute = require('../server/routes/user-route');
// const productROute = require('../server/routes/product-route')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())

const { UserRouter, ProductRouter ,OrderRouter,CategoryRouter} = require('../server/routes');

app.use('/users', UserRouter);
app.use('/products', ProductRouter);
app.use('/orders', OrderRouter);
app.use('/categories',CategoryRouter)


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

app.patch("/categories/:catId", (req, res) => {
    const { catId } = req.params;
    categories.find(category => JSON.stringify(category.id) === catId).name = "new name";
    res.status(200).send(categories);
});


app.listen(PORT, console.log(`Server listen to port ${PORT}`))
