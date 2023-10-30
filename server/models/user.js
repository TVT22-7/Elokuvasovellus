const pgp = require('pg-promise')();
const config = require('../config');
const db = pgp(config.databaseURL);

const User = {
  findAll: async () => {
    return await db.any('SELECT * FROM users');
  }
};

module.exports = User;
