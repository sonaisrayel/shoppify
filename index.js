const express = require('express');
const messages = require("./errors/message");
const app = express();
const PORT = '3000';
 let users = require('./storage/users.json');

let products = require("./storage/product.json");



 app.get("/message",(req,res)=>{
 res.status(messages.status).send(messages.message);
});

app.get('/users', (req, res) => {
    res.status(200).send(users)
})

app.get("/products", (req, res) => {
    res.status(200).send(products);
});

app.listen(PORT, console.log(`Server listen to port ${PORT}`))