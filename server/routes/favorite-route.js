const express = require('express');
const router = express.Router();

const { getFavorits, getFavorit, updateFavorit, deleteFavorit, createFavorit } = require('../controllers/Favorit-controller')


router.get('/', getFavorits );
router.get('/:FavoritId',getFavorit)

router.patch("/:FavoritId",updateFavorit)

router.delete("/:orderId", deleteFavorit)
router.post("/", createFavorit)


module.exports = router;