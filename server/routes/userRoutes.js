const express = require('express');
const { getUsers, getUser, updateUser, deleteUser, signupUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

router.post('/signup', signupUser);

router.post('/login', loginUser);

module.exports = router;
