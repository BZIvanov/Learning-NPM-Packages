require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./database');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json({ limit: '2mb' }));

app.use('/', routes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
