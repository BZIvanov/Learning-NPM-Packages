const axios = require('axios');
const Credentials = require('../models/jira');

module.exports.getAllProjects = async (req, res) => {
  try {
    const { name } = req.query;
    const creds = await Credentials.findOne({ name }).exec();

    const { data: projects } = await axios.get(
      `https://api.atlassian.com/ex/jira/${creds.cloudID}/rest/api/2/project`,
      {
        headers: { Authorization: `Bearer ${creds.accessToken}` },
      }
    );

    res.json(projects);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

module.exports.createProject = async (req, res) => {
  try {
    const { name: projectName, key, accountId } = req.body;
    if (!projectName || !key || !accountId) {
      return res.status(400).json({
        message: 'Name, Key and Account id are required in the body.',
      });
    }

    const { name } = req.query;
    const creds = await Credentials.findOne({ name }).exec();

    const { data: project } = await axios.post(
      `https://api.atlassian.com/ex/jira/${creds.cloudID}/rest/api/2/project`,
      {
        name: projectName,
        key,
        leadAccountId: accountId,
        projectTypeKey: 'software',
        projectTemplateKey:
          'com.pyxis.greenhopper.jira:gh-simplified-agility-scrum',
      },
      {
        headers: { Authorization: `Bearer ${creds.accessToken}` },
      }
    );

    res.json(project);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
