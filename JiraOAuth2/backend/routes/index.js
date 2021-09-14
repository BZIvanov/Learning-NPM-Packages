const router = require('express').Router();
const {
  initialRun,
  getNewAccessToken,
  accessResourcesId,
} = require('../controllers/oauth');
const { getAllUsers } = require('../controllers/users');
const { getAllProjects, createProject } = require('../controllers/projects');

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
router.post('/create-project', createProject);

module.exports = router;
