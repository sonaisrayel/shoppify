const express = require('express');
const app = express();
const PORT = '3000';
let  users = require('./storage/users.json');
let products = require("./storage/product.json");

app.get('/users', (req, res) => {
    res.status(200).send(users)
})
app.get("/products",(req,res)=>{
res.status(200).send(products);
});

app.listen(PORT, console.log(`Server listen to port ${PORT}`))