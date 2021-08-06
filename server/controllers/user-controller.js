const {UserModel} = require('../models')
const NotFoundError = require('../errors/not-found-error')

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
    updateUser
}