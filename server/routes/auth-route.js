const express = require('express');
const router = express.Router();

const { login, register } = require('../controllers/auth-controller')

router.post('/registration', register)

router.post('/login', login);

module.exports = router;