const router = require('express').Router();
const {
  initialRun,
  getNewAccessToken,
  accessResourcesId,
} = require('../controllers/oauth');
const { getAllUsers } = require('../controllers/users');
const {
  getAllProjects,
  getProject,
  createProject,
} = require('../controllers/projects');
const { getIssue, createIssue } = require('../controllers/issues');

// OAUTH2
// https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/
router.get('/initial-run', initialRun);
router.get('/renew-tokens', getNewAccessToken);
router.get('/resources-site', accessResourcesId);

// USERS
// https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-users/#api-group-users
router.get('/get-all-users', getAllUsers);

// PROJECTS
// https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-projects/#api-group-projects
router.get('/get-all-projects', getAllProjects);
router.get('/get-project', getProject);
router.post('/create-project', createProject);

// ISSUES
// https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-issues/#api-group-issues
router.get('/get-issue', getIssue);
router.post('/create-issue', createIssue);

module.exports = router;
