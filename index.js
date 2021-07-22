const express = require('express');
const app = express();
const PORT = '3000';


let  users = require('./user.json');


app.get('/users', (req, res) => {
    res.status(200).send(users)
})


app.listen(PORT, console.log(`Server listen to port ${PORT}`))