const { UserModel } = require('../models')
const NotFoundError = require('../errors/not-found-error')

async function createUser(req, res) {
    try {
        const { title, salary, age } = req.body;
        const user = await UserModel.create({
            title,
            salary,
            age
        })

        res.status(201).send(user)
    } catch (err) {
        res.send({ error: err.message });
    }
}


module.exports = {
    getUsers, getUser, updateUser, deleteUser, createUser
}