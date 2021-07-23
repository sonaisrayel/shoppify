const express = require('express');
const messages = require("./errors/message");
const app = express();
const PORT = '3000';
let users = require('./storage/users.json');
let products = require("./storage/product.json");
let category = require("./storage/category.json");
let orders = require("./storage/orders.json");

app.get("/message", (req, res) => {
    res.status(messages.status).send(messages.message);

});

app.get('/user', (req, res) => {
    res.status(200).send(users.users[0])   

    // res.send("yes")
})
app.get('/users', (req, res) => {
    res.status(200).send(users)
    
})

app.get("/products", (req, res) => {
    res.status(200).send(products);

});
app.get("/product", (req, res) => {
    res.status(200).send(products.products[0]);
});

app.get("/categorys", (req, res) => {
    res.status(200).send(category);
});
app.get("/category", (req, res) => {
    res.status(200).send(category.categories[0]);
});
  
app.get("/orders", (req, res) => {
    res.status(200).send(orders);
});
app.get("/order", (req, res) => {
    res.status(200).send(orders.categories[0]);
  });


app.listen(PORT, console.log(`Server listen to port ${PORT}`))