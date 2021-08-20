const axios = require('axios');
const asyncMiddleware = require('../middlewares/async');

module.exports.sendMessageToChannel = asyncMiddleware(async (req, res) => {
  const { name = 'Iva' } = req.body;

  await axios.post(process.env.WEBHOOK_URL, {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `Hello, ${name}!`,
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'Here is the *image* you searched for.\n\n *Enjoy!*',
        },
        accessory: {
          type: 'image',
          image_url:
            'https://s3-media3.fl.yelpcdn.com/bphoto/c7ed05m9lC2EmA3Aruue7A/o.jpg',
          alt_text: 'alt text for image',
        },
      },
    ],
  });

  res.send({ message: 'Works' });
});
