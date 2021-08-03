const express = require('express');
const router = express.Router();

const { getUsers, getUser, uptadeUser, deleteUser, createUser } = require('../controllers/user-controller')

//USERS ROUTES
//GET USERS
router.get('/', getUsers);
router.get('/:userId', getUser)
router.patch("/:userId", uptadeUser)
router.delete("/:userId", deleteUser)
router.post("/", createUser)

module.exports = router;