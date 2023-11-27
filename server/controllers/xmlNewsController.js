const movieModel = require('../models/Movie');

async function xmlNewsController(req, res) {
    try {
        // Use the movieModel as needed
        const News = await movieModel.getNews(); 
        res.json(schedules);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = xmlNewsController;