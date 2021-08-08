const config = require("config");
const mongoose = require('mongoose');

const conn = config.get('mongoDB.connection');

function connect() {
    mongoose.connect(conn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })

    mongoose.connection.on('error', (error) => {
        console.log(error);

    })

    mongoose.connection.on('connected', () => {
        console.log('Connection is open');

    })
}

module.exports = {
    connect
}




