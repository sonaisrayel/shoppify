const express = require('express');
const config = require('config');
const bodyParser = require('body-parser')


const PORT = config.get("PORT");
const app = express();

const mongoDb = require('../db/mongo')
mongoDb.connect();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//routers
const { UserRouter, ProductRouter, OrderRouter, CategoryRouter, AuthRouter} = require('../server/routes');


app.use('/users', UserRouter);
app.use('/products', ProductRouter);
app.use('/orders', OrderRouter);
app.use('/category', CategoryRouter);
app.use('/auth', AuthRouter)


app.get("*", (req, res) => {
    res.status(404).send("Route not found");
});

app.listen(PORT, console.log(`Server listen to port ${PORT}`))
