require('dotenv').config();
const express = require('express');
require('./db');
const cors = require('cors');
const movies = require('./routes/movies');

const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(cors());

app.use('/movies', movies);

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
