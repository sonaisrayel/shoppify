const express = require('express');
const config = require('config');

//GETTING JSON FILES

const PORT = config.get("PORT");
const app = express();
const { UserRouter, ProductRouter ,OrderRouter,CategoryRouter} = require('../server/routes');

app.use('/users', UserRouter);
app.use('/products', ProductRouter);
app.use('/orders', OrderRouter);
app.use('/categories',CategoryRouter)
app.listen(PORT, console.log(`Server listen to port ${PORT}`))
