const express = require('express');
const router = express.Router();


const { getUsers, getUser, updateUser, deleteuser, createUser } = require('../controllers/user-controller')



const { getUsers, getUser, updateUser, deleteUser, createUser} = require('../controllers/user-controller')

router.get('/', getUsers)
router.get('/:userId', getUser)
router.get('/:userId', updateUser)
router.patch('/:userId', updateUser)
router.delete('/:userId', deleteUser)
router.post('/', createUser)


module.exports = router;