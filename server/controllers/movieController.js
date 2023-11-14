const Movie = require('../models/Movie');


exports.getPopularMovies = async (req, res) => {
    try {
        const data = await Movie.findAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


