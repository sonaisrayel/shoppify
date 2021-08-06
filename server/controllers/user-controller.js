const {UserModel} = require('../models')
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

async function deleteUser(req, res) {
    try {
        const { userId } = req.params;
        const user = await UserModel.findByIdAndRemove(userId);
        res.status(200).send(user)
    } catch (err) {
        res.send({ error: err.message })
    }
}

async function updateUser(req, res) {
    try {
        const { userId } = req.params;
        const { title, age, salary } = req.body;
        const user = await UserModel.findByIdAndUpdate(userId, { title , salary, age }, { new: true })
        res.status(200).send(user)
    }
    catch (err) {
        res.send({ err: err.message })
    }
}

module.exports = {
    getUsers, getUser, updateUser, deleteUser, createUser,updateUser

}