const express = require('express');
const router = express.Router();

const { getUsers, getUser, updateUser, deleteUser, createUser } = require('../controllers/user-controller')


router.get('/', getUsers);
router.get('/:orderId', getUser)

router.patch("/:orderId", updateUser)

router.delete("/:orderId", deleteUser)
router.post("/", createUser)

module.exports = router;