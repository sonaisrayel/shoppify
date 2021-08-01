const { FavoritModel } = require('../models')
const NotFoundError = require('../errors/not-found-error')


async function getFavorits(req, res) {
    try {
        const favorits = await FavoritModel.find();
        res.send(Favorits)
    } catch (error) {
        res.send({ error: error.message })

    }
}
module.exports = {
    getFavorits
}
