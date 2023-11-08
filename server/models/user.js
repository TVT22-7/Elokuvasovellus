const db = require('../db');

const User = {
  findAll: async () => {
    return await db.any('SELECT * FROM users');
  },
  
  findById: async (id) => {
    return await db.oneOrNone('SELECT * FROM users WHERE user_id = $1', id);
  },

  create: async (username, password) => {
    // Make sure the column names match those in your database's users table
    return await db.one('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password]);
  },
  
  update: async (id, userData) => {
    // Ensure that you are updating the correct fields and that they exist in your database's users table
    return await db.oneOrNone('UPDATE users SET username = $1, password = $2 WHERE user_id = $3 RETURNING *', [userData.username, userData.password, id]);
  },

  delete: async (id) => {
    return await db.oneOrNone('DELETE FROM users WHERE user_id = $1', id);
  },
  findByUsername: async (username) => {
    return await db.oneOrNone('SELECT * FROM users WHERE username = $1', [username]);
  },  
};

module.exports = User;
