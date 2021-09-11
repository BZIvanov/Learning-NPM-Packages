const axios = require('axios');
const Credentials = require('../models/jira');

module.exports.getAllUsers = async (req, res) => {
  try {
    const { name } = req.query;

    const creds = await Credentials.findOne({ name }).exec();

    const { data: users } = await axios.get(
      `https://api.atlassian.com/ex/jira/${creds.cloudID}/rest/api/2/users/search`,
      {
        headers: { Authorization: `Bearer ${creds.accessToken}` },
      }
    );

    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
