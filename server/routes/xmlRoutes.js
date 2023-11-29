const express = require('express');
const xmlNewsController = require('../controllers/xmlNewsController');
const router = express.Router();

// Route to get all movie news
router.get('/movies/news', xmlNewsController);

module.exports = router;