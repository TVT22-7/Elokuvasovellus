const express = require('express');
const { getUsers, getUser, updateUser, deleteUser, signupUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.patch('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

router.post('/signup', signupUser);

router.post('/login', loginUser);

module.exports = router;
