const express = require('express');
const router = express.Router();

const { getFavorites, getFavorite, updateFavorite, deleteFavorite, createFavorite } = require('../controllers/favorit-controller')


router.get('/', getFavorites );
router.get('/:favoritId',getFavorite)
router.patch("/:favoritId",updateFavorite)
router.delete("/:favoritId", deleteFavorite)
router.post("/", createFavorite)


module.exports = router;