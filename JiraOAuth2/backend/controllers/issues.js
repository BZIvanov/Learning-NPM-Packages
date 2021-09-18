const axios = require('axios');
const Credentials = require('../models/jira');

module.exports.getIssue = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({
        message: 'Issue id or key is required query param.',
      });
    }

    const credentials = await Credentials.findOne({
      state: 'some-secret-string',
    }).exec();

    const { data: issue } = await axios.get(
      `https://api.atlassian.com/ex/jira/${credentials.siteId}/rest/api/2/issue/${id}`,
      {
        headers: { Authorization: `Bearer ${credentials.accessToken}` },
      }
    );

    res.json(issue);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

module.exports.createIssue = async (req, res) => {
  try {
    const { projectId, accountId: assignee } = req.body;

    if (!projectId || !assignee) {
      return res.status(400).json({
        message: 'Project Id and Assignee are required fields.',
      });
    }

    const credentials = await Credentials.findOne({
      state: 'some-secret-string',
    }).exec();

    const issueData = {
      fields: {
        project: {
          id: projectId,
        },
        summary: 'Some dummy text for the issue',
        description: 'Some dummy description text.',
        issuetype: {
          name: 'Task', // 'Task', 'Story' etc..
        },
        assignee: {
          id: assignee,
        },
        reporter: {
          id: assignee,
        },
      },
    };

    const { data: issue } = await axios.post(
      `https://api.atlassian.com/ex/jira/${credentials.siteId}/rest/api/2/issue`,
      issueData,
      {
        headers: { Authorization: `Bearer ${credentials.accessToken}` },
      }
    );

    res.json(issue);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
