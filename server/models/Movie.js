const fetch = require('node-fetch');

const Movie = {
    async findAll() {
        try {
            const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${process.env.MOVIEDB_API_KEY}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
};

module.exports = Movie;
