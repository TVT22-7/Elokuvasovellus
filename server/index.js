require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const groupRoutes = require('./routes/groupRoutes');


const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/api', reviewRoutes);
app.use('/api/users', userRoutes);
app.use('/api/groups', groupRoutes);


app.get('/', (req, res) => {
    res.send('Server is running!');
  });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  }).on('error', (err) => {
    console.error('Server cannot start:', err);
  });