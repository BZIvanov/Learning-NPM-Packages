const axios = require('axios');
const Credentials = require('../models/jira');

module.exports.initialRun = async (req, res) => {
  try {
    const { code, state } = req.query;

    if (!code || !state) {
      return res
        .status(400)
        .json({ message: 'Jira code and state are required' });
    }

    // remove credentials if any, because we will add them in next lines. Alternatively refactor the logic to update the data instead recreate
    await Credentials.findOneAndRemove({ state }).exec();

    const jiraRequestUrl = 'https://auth.atlassian.com/oauth/token';
    const jiraRequestData = {
      grant_type: 'authorization_code',
      client_id: process.env.JIRA_APP_CLIENT_ID,
      client_secret: process.env.JIRA_APP_CLIENT_SECRET,
      code,
      redirect_uri: 'http://localhost:3000', // the callbackURL you specified in your App
    };
    const { data } = await axios.post(jiraRequestUrl, jiraRequestData);

    const credentials = await new Credentials({
      code,
      state,
      refreshToken: data.refresh_token,
      accessToken: data.access_token,
    }).save();

    res.json(credentials);
  } catch (error) {
    console.log('Error with the credentials', error);
    res.json({ error });
  }
};

module.exports.getNewAccessToken = async (req, res) => {
  try {
    const credentials = await Credentials.findOne({
      state: 'some-secret-string',
    }).exec();

    const jiraRequestUrl = 'https://auth.atlassian.com/oauth/token';
    const jiraRequestData = {
      grant_type: 'refresh_token',
      client_id: process.env.JIRA_APP_CLIENT_ID,
      client_secret: process.env.JIRA_APP_CLIENT_SECRET,
      refresh_token: credentials.refreshToken,
    };
    const { data } = await axios.post(jiraRequestUrl, jiraRequestData);

    const updatedCredentials = await Credentials.findOneAndUpdate(
      { state: 'some-secret-string' },
      { refreshToken: data.refresh_token, accessToken: data.access_token },
      { new: true }
    );

    res.json(updatedCredentials);
  } catch (error) {
    console.log('Error with the updating credentials', error);
    res.json({ error });
  }
};

module.exports.accessResourcesId = async (req, res) => {
  try {
    const credentials = await Credentials.findOne({
      state: 'some-secret-string',
    }).exec();

    const { data } = await axios.get(
      'https://api.atlassian.com/oauth/token/accessible-resources',
      {
        headers: { Authorization: `Bearer ${credentials.accessToken}` },
      }
    );

    const updatedCredentials = await Credentials.findOneAndUpdate(
      { state: 'some-secret-string' },
      { siteId: data[0].id }, // define search criteria for your case
      { new: true }
    );

    res.json(updatedCredentials);
  } catch (error) {
    console.log('Error with getting resource id', error);
    res.json({ error });
  }
};
