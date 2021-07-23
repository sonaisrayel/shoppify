const express = require('express');
const messages = require("./errors/message");
const app = express();
const PORT = '3000';
let users = require('./storage/users.json');
let products = require("./storage/product.json");
let category = require("./storage/category.json")



 app.get("/message",(req,res)=>{
 res.status(messages.status).send(messages.message);
});

app.get('/users', (req, res) => {
    res.status(200).send(users)
})
app.get('/categories', (req, res)=>{
    res.status(200).send(category)
})

app.get("/products", (req, res) => { //localhost:300/users
    res.status(200).send(products);
});

app.listen(PORT, console.log(`Server listen to port ${PORT}`))

