const { UserModel } = require('../models')
const NotFoundError = require('../errors/not-found-error')
const ResponceHandler = require('../handlers/ResponceHandler')
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');



async function login(req, res) {
    try {
        const { username, password } = req.body;
        const user = await UserModel.findOne({ username })

        if (!user) {
            throw new NotFoundError("User not found")
        }
        
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            throw new NotFoundError("User is not in our list")
        }

        const token = await JWT.sign({ username }, 'shop');

        const verify = await JWT.verify(token, 'shop');

        res.send({ user, token })
    }
    catch (error) {
        console.log(error);
    }
}

async function register(req, res) {
    try {

        const { firstname,
            lastname,
            username,
            password,
            email,
            salary,
            age } = req.body

        const passwordHash = await bcrypt.hash(password, 2);

        const user = await UserModel.create({
            firstname,
            lastname,
            username,
            password: passwordHash,
            email,
            salary,
            age
        })

        ResponceHandler.handleCreate(res, user)
    } catch (err) {
        res.send({ error: err.message });
    }
}

module.exports = {
    login,
    register
}
