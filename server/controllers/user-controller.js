const { UserModel } = require('../models')
const NotFoundError = require('../errors/not-found-error')
const ResponceHandler = require('../handlers/ResponceHandler')

async function getUser(req, res) {
    const { userId } = req.params;

    const user = await UserModel.findOne({ _id: userId })
    try {
        if (!user) {
            throw new NotFoundError("User is not found")
        }
        ResponceHandler.handleGet(res, user);

    } catch (error) {
        res.status(404).send(error.message)
    }

}


async function getUsers(req, res) {
    try {
        const users = await UserModel.find();
        if (!users) {
            throw new NotFoundError('Users not found')
        }
        ResponceHandler.handleList(res, users)
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

        ResponceHandler.handleCreate(res, user)
    } catch (err) {
        res.send({ error: err.message });
    }
}

async function deleteUser(req, res) {
    try {
        const { userId } = req.params;
        const user = await UserModel.findByIdAndRemove(userId);
        ResponceHandler.handleDelete(res, user)
    } catch (err) {
        res.send({ error: err.message })
    }
}

async function updateUser(req, res) {
    try {
        const { userId } = req.params;
        const { title } = req.body;
        const user = await UserModel.findByIdAndUpdate(userId, { title }, { new: true })
        ResponceHandler.handleUpdate(res, user)
    }
    catch (err) {
        res.send({ err: err.message })
    }
}




module.exports = {
    getUsers, getUser, updateUser, deleteUser, createUser
}
