require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const reviweRoutes = require('./routes/reviewRoutes');
const movieRoutes = require('./routes/movieRoutes');
const { get } = require('mongoose');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api/reviews', reviweRoutes);
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);

app.get('/', (req, res) => {
    res.send('Server is running!');
  });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  }).on('error', (err) => {
    console.error('Server cannot start:', err);
  });