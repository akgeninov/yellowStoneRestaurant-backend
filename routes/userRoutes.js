const express = require('express');
const usersRouter = require('../controller/userController');

const router = express.Router();

// router.get('/tes-user',(req, res) => {
//     res.send('Hello world');
// });
router.post('/signup', usersRouter.register);
router.get('/users', usersRouter.getUsers);

module.exports = router;