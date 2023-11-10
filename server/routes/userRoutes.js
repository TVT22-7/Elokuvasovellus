const express = require('express');
const { getUsers, getUser, updateUser, deleteUser, signupUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.route("/users")
    .get(getUsers);

router.route("/users/:id")
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);

router.route("/signup")
    .post(signupUser);

router.route("/login")
    .post(loginUser);

module.exports = router;
