const pgp = require('pg-promise')();
const config = require('../config');
const db = pgp(config.databaseURL);

const User = {
  findAll: async () => {
    return await db.any('SELECT * FROM users');
  },
  
  findById: async (id) => {
    return await db.oneOrNone('SELECT * FROM users WHERE user_id = $1', id);
  }
};

module.exports = User;
