const axios = require('axios');
const Credentials = require('../models/jira');

module.exports.getAllProjects = async (req, res) => {
  try {
    const credentials = await Credentials.findOne({
      state: 'some-secret-string',
    }).exec();

    const { data: projects } = await axios.get(
      `https://api.atlassian.com/ex/jira/${credentials.siteId}/rest/api/2/project`,
      {
        headers: { Authorization: `Bearer ${credentials.accessToken}` },
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

    const credentials = await Credentials.findOne({
      state: 'some-secret-string',
    }).exec();

    const { data: project } = await axios.post(
      `https://api.atlassian.com/ex/jira/${credentials.siteId}/rest/api/2/project`,
      {
        name: projectName,
        key,
        leadAccountId: accountId,
        projectTypeKey: 'software',
        projectTemplateKey:
          'com.pyxis.greenhopper.jira:gh-simplified-agility-scrum',
      },
      {
        headers: { Authorization: `Bearer ${credentials.accessToken}` },
      }
    );

    res.json(project);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
