const router = require('express').Router();
const { sendMessageToChannel } = require('../controllers/webhooks');

router.post('/send-message', sendMessageToChannel);

module.exports = router;
