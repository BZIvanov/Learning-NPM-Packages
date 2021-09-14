const axios = require('axios');
const Credentials = require('../models/jira');

module.exports.getAllUsers = async (req, res) => {
  try {
    const credentials = await Credentials.findOne({
      state: 'some-secret-string',
    }).exec();

    const { data: users } = await axios.get(
      `https://api.atlassian.com/ex/jira/${credentials.siteId}/rest/api/2/users/search`,
      {
        headers: { Authorization: `Bearer ${credentials.accessToken}` },
      }
    );

    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
