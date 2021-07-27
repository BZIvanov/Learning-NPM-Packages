require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripeRoutes = require('./routes');

const app = express();

app.use(
  express.json({
    verify: (req, res, buffer, encoding) => {
      // here we will attach the rawBody to the request which is needed for stripe webhooks
      req['rawBody'] = buffer;
    },
  })
);
app.use(cors());

app.use(stripeRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
