const { UserModel } = require('../models')
const NotFoundError = require('../errors/not-found-error')
const ResponceHandler = require('../handlers/ResponceHandler')
const { encript, compare } = require('../libraries/Bcript')
const JWT = require('jsonwebtoken');



async function login(req, res) {
    try {
        const { username, password } = req.body;
        const user = await UserModel.findOne({ username })

        const { _id, email } = user

        if (!user) {
            throw new NotFoundError("User not found")
        }

        try {
            const match = await compare(password, user.password);

            if (!match) {
                throw new NotFoundError("User is not in our list")
            }

            const token = await JWT.sign({ _id, email }, 'shop');

            const verify = await JWT.verify(token, 'shop');

            res.send({ user, token })
        } catch (error) {
            res.send(error)
        }
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

        const passwordHash = await encript(password);

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
