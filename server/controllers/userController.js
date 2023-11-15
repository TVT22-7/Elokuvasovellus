const User = require('../models/user'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll(); 
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single user by ID
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update user information
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.update(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    await User.delete(req.params.id); 
    res.send({ message: "User removed" }); 
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handle user signup
exports.signupUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findByUsername(username); // Updated method name
    if (userExists) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert the new user into the database
    const newUser = await User.create(username, hashedPassword); // Updated to pass parameters individually

    // Create a token
    const token = jwt.sign({ id: newUser.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ userId: newUser.user_id, username, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during signup' });
  }
};

// Handle user login
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findByUsername(username);
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Create a token
    const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ userId: user.user_id, username, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
};
