const { FavoritModel } = require('../models')
const NotFoundError = require('../errors/not-found-error')


async function createFavorite(req, res) {
    try {
        const { title, description } = req.body;
        const Favorite = await FavoriteModel.create({
            title,
            description
        })

        res.status(201).send(Favorite)
    } catch (err) {
        res.send({ error: err.message });
    }
}

module.exports = {
   createFavorite
}
