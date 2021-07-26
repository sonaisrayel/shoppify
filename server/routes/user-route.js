const express = require('express');
const router = express.Router();

const users = require("../../server/models/users.json");

//USERS ROUTES
//GET USERS
router.get('/', (req, res) => {
    res.status(200).send(users)
});

//get one user localhost:3000/users/1
router.get("/:userId", (req, res) => {
    const { userId } = req.params;
    const user = users.find(user => user.id === userId);
    res.send(user)
});

module.exports = router;