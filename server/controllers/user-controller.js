const { UserModel } = require('../models')
const NotFoundError = require('../errors/not-found-error')

async function getUsers(req, res) {
    try {
        const users = await UserModel.find();
        res.send(users)
    } catch (error) {
        res.send({ error: error.message })
    }
}
module.exports = {
    getUsers,
}