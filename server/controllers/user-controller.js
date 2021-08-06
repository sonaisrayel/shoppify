const { UserModel} = require('../models')
const NotFoundError = require('../errors/not-found-error')

async function getUser(req, res) {
    try {
        const { userId } = req.params;
        const user = await UserModel.findOne({ _id: userId })
        if (user) {
            res.status(200).send(user)
        } else {
            res.status(404).send({ error: "The user not found" })
        }

    } catch (err) {
        console.log({ error: err.message });

    }
}
module.exports = {
    getUser
}