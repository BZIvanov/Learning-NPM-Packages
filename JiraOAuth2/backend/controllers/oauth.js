const axios = require('axios');
const Credentials = require('../models/jira');

module.exports.getOAuth = async (req, res) => {
  try {
    const { code, state } = req.query;

    if (!code) {
      return res.status(400).json({ message: 'Jira code is required' });
    }

    // remove credentials if any, because we will add them in next lines. Alternatively refactor the logic to update the data instead recreate
    await Credentials.findOneAndRemove({ name: state }).exec();

    const jiraRequestUrl = 'https://auth.atlassian.com/oauth/token';
    const jiraRequestData = {
      grant_type: 'authorization_code',
      client_id: process.env.JIRA_APP_CLIENT_ID,
      client_secret: process.env.JIRA_APP_CLIENT_SECRET,
      code,
      redirect_uri: 'http://localhost:3000', // the callbackURL you specified in your App
    };
    const { data: oauthData } = await axios.post(
      jiraRequestUrl,
      jiraRequestData
    );

    const { data: resourcesData } = await axios.get(
      'https://api.atlassian.com/oauth/token/accessible-resources',
      {
        headers: { Authorization: `Bearer ${oauthData.access_token}` },
      }
    );

    const targetContainer = resourcesData.find(
      (container) => container.name === state
    );

    if (!targetContainer || !state) {
      return res
        .status(400)
        .json({ message: 'Your state (jira username) is incorrect' });
    }

    const appWithContainerCredentials = await new Credentials({
      accessToken: oauthData.access_token,
      scope: oauthData.scope,
      expiresIn: oauthData.expires_in,
      cloudID: targetContainer.id,
      name: targetContainer.name,
      avatarUrl: targetContainer.avatarUrl,
    }).save();

    res.json(appWithContainerCredentials);
  } catch (error) {
    console.log('Error with the credentials', error);
    res.json({ error });
  }
};
