const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const { getUsers, getUser, updateUser, deleteuser, createUser } = require('../controllers/user-controller')


router.get('/', getUsers );
router.get('/:userId', getUser)

router.patch("/:userId",updateUser)

router.delete("/:userId", deleteUser)
router.post("/", createUser)

=======
const { getUsers, getUser, updateUser, deleteUser, createUser} = require('../controllers/user-controller')

router.get('/', getUsers)
router.get('/:userId', getUser)
router.get('/:userId', updateUser)
router.patch('/:userId', updateUser)
router.delete('/:userId', deleteUser)
router.post('/', createUser)
>>>>>>> origin/API-44

module.exports = router;