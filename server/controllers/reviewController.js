const Review = require('../models/Review'); 

const reviewController = {
  // Handler for getting all reviews
  getReviews: async (req, res) => {
    try {
      const reviews = await Review.findAll();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  },

  // Handler for getting a single review by ID
  getReview: async (req, res) => {
    try {
      const review = await Review.findById(req.params.id);
      if (review) {
        res.json(review);
      } else {
        res.status(404).json({ error: 'Review not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  },

  // Handler for adding a new review
  addReview: async (req, res) => {
    try {
      const { movieId, userId, rating, reviewText } = req.body;
      const newReview = await Review.add(movieId, userId, rating, reviewText);
      res.status(201).json(newReview);
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  },
};

module.exports = reviewController;
