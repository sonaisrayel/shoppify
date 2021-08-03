const { FavoritModel } = require('../models')
const NotFoundError = require('../errors/not-found-error')


async function createFavorit(req, res) {
    try {
        const { title, description } = req.body;
        const Favorit = await FavoritModel.create({
            title,
            description
        })

        res.status(201).send(Favorit)
    } catch (err) {
        res.send({ error: err.message });
    }
}

module.exports = {
   createFavorit
}
