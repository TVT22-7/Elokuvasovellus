const express = require('express');
const reviewController = require('../controllers/reviewController');
const router = express.Router();

// Route to get all reviews
router.get('/', reviewController.getReviews);

// Route to get a single review by ID
router.get('/:id', reviewController.getReview);

// Route to add a new review
router.post('/', reviewController.addReview);

module.exports = router;
