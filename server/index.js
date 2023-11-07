const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
