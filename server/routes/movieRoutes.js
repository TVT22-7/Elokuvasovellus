const express = require('express');
const { getPopularMovies } = require('../controllers/movieController');
const router = express.Router();



router.get('/popular', getPopularMovies);


module.exports = router;
