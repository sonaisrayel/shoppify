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
//GET ONE FAVORIT
async function getFavorit(req, res) {
    try {
        const { favoritId } = req.params;
        const favorit = await FavoritModel.findOne({ _id: favoritId })
        if (favorit) {
            res.status(200).send(favorit)
        } else {
            res.status(404).send({ error: "The favorit not found" })
        }

    } catch (err) {
        console.log({ error: err.message });

    }
}

//DELETE ONE FAVORIT
async function deleteFavorit(req, res) {
    try {
        const { favoritId } = req.params;
        const favorit = await FavoritModel.findByIdAndRemove(favoritId);
        res.status(200).send(favorit)
    } catch (err) {
        res.send({ error: err.message })
    }
}
//UPDATE ONE FAVORIT
async function updateFavorit(req, res) {
    try {
        const { favoritId } = req.params;
        const { title } = req.body;
        const favorit = await FavoritModel.findByIdAndUpdate(favoritId, { title }, { new: true })
        res.status(200).send(favorit)
    }
    catch (err) {
        res.send({ err: err.message })
    }
}

module.exports = {
    getFavorits, getFavorit,deleteFavorit,uptadeFavorit
}
