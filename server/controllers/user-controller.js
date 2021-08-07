const { UserModel } = require('../models')
const NotFoundError = require('../errors/not-found-error')


async function getUser(req,res){
    try {
        const { userId } = req.params;
        const user = await UserModel.findOne({ _id: userId })
        if (user) {
            res.status(200).send(user)
        } else {
            res.status(404).send({ error: "The user not found" })
        }
    } catch (error) {
        res.send(error)
    }

}


async function getUsers(req, res) {
    try {
        const users = await UserModel.find();
        res.send(users)
    } catch (error) {
        res.send({ error: error.message })
    }
}

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

async function updateUser(req,res){
    try {
        const { userId } = req.params;
        const { title } = req.body;
        const user = await UserModel.findByIdAndUpdate(userId, { title }, { new: true })
        res.status(200).send(user)
    }
    catch (err) {
        res.send({ err: err.message })
    }
}




module.exports = {
    getUsers, getUser, updateUser, deleteUser, createUser
}
