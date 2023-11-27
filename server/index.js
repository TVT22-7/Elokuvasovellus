require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const groupRoutes = require('./routes/groupRoutes');
const xmlRoutes = require('./routes/xmlRoutes'); // Updated import for xmlRoutes
const movieRoutes = require('./routes/movieRoutes');
const PORT = process.env.PORT || 4000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/', groupRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/', groupRoutes); // Updated use for groupRoutes
app.use('/api/xml', xmlRoutes);
app.use('/api/movies', movieRoutes); // Updated use for movieRoutes
// Additional route for the home page


app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error('Server cannot start:', err);
});