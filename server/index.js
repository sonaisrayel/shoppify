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


app.listen(PORT, console.log(`Server listen to port ${PORT}`))
