const axios = require('axios');
const xml2js = require('xml2js');

async function getSchedules() {
    try {
        const result = await axios.get('https://www.finnkino.fi/xml/Schedule/');
        const jsResult = await xml2js.parseStringPromise(result.data);

        // Extract and return relevant data
        return jsResult.Schedule.Shows.map(show => ({
            title: show.Title[0],
            start: show.Start[0]
        }));
    } catch (error) {
        throw error; // Handle or log the error appropriately
    }
}

module.exports = { getSchedules };