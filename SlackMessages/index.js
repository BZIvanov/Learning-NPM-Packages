require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const globalError = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/incoming-webhooks', routes);
app.use(globalError);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
