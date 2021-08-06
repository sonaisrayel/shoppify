const {UserModel} = require('../models')
const NotFoundError = require('../errors/not-found-error')

async function deleteUser(req, res) {
    try {
        const { userId } = req.params;
        const user = await UserModel.findByIdAndRemove(userId);
        res.status(200).send(user)
    } catch (err) {
        res.send({ error: err.message })
    }
}
module.exports = {
    getUsers, getUser, updateUser, deleteUser, createUser
}