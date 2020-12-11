const express = require('express');

const router = express.Router();

const issueCtrl = require('../controllers/issue');
const middleware = require('../middlewares/issue');

router.put('/manageDifficulty', issueCtrl.manageDifficulty);
router.put('/managePriority', issueCtrl.managePriority);
router.put('/addTask/:issue', issueCtrl.addTaskToIssue);
router.put('/removeTask/:issue', issueCtrl.removeTaskToIssue);

router.put(
  '/difficulty/:issue',
  middleware.isIssueExists,
  issueCtrl.updateDifficulty
);
router.put(
  '/priority/:issue',
  middleware.isIssueExists,
  issueCtrl.updatePriority
);
router.post('/tasks', issueCtrl.assignedTasks);
router.post('/', issueCtrl.createIssue);

router.put('/:issue', middleware.isIssueExists, issueCtrl.updateIssue);

router.delete('/:issue', middleware.isIssueExists, issueCtrl.deleteIssue);

router.get('/:issue', middleware.isIssueExists, issueCtrl.findOneIssue);

router.get('/', issueCtrl.getAllIssues);

module.exports = router;
