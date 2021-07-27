require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripeRoutes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(stripeRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
