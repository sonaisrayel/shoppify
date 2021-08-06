const { FavoritModel } = require('../models')


//GET ONE FAVORIT
async function getFavorite(req, res) {
    try {
        const { favoritId } = req.params;
        const favorit = await FavoritModel.findOne({ _id: favoritId })
        if (favorit) {
            res.status(200).send(favorit)
        } else {
            res.status(404).send({ error: "The favorit not found" })
        }
    } catch (error) {
        res.send(error)
    }
}


async function getFavorites(req, res) {
    try {
        const favorits = await FavoritModel.find();
        res.send(Favorits)
    } catch (error) {
        res.send({ error: error.message })

    }
}


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


//DELETE ONE FAVORIT
async function deleteFavorite(req, res) {
    try {
        const { favoritId } = req.params;
        const favorit = await FavoritModel.findByIdAndRemove(favoritId);
        res.status(200).send(favorit)
    } catch (err) {
        res.send({ error: err.message })
    }
}


//UPDATE ONE FAVORIT
async function updateFavorite(req, res) {
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
    getFavorites,
    getFavorite,
    deleteFavorite,
    updateFavorite,
    createFavorite
}