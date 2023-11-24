const express = require('express');
const {xmlScheduleController} = require('../controller/xmlScheduleController'); // Adjust the path based on your project structure
const router = express.Router();

// Route to get all movie schedules
router.get('/movies/schedules', xmlScheduleController);

module.exports = router;