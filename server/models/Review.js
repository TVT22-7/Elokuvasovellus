const db = require('../db');

const Review = {
  // Fetch all reviews from the database
  findAll: async () => {
    return await db.query('SELECT * FROM reviews');
  },
  
  // Find a single review by its ID
  findById: async (id) => {
    return await db.oneOrNone('SELECT * FROM reviews WHERE review_id = $1', [id]);
  },

  // Add a review into the database
  add: async (movieId, userId, rating, reviewText) => {
    return await db.one(
      'INSERT INTO reviews (movie_id, user_id, rating, review_text) VALUES ($1, $2, $3, $4) RETURNING *',
      [movieId, userId, rating, reviewText]
    );
  }
};

module.exports = Review;
