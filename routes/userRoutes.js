const express = require('express');
const usersRouter = require('../controller/userController');

const router = express.Router();

router.get('/tes-user',(req, res) => {
    res.send('Hello world');
});

module.exports = router;