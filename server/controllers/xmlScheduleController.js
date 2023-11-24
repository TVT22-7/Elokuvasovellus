const movieModel = require('../model/movieModel');

async function getMovieSchedulesController(req, res) {
    try {
        const responseData = await response.json;
        const schedules = await movieModel.getMovieSchedules(); 
        res.json(schedules);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { getMovieSchedulesController };