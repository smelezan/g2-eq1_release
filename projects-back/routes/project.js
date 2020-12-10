const express = require('express');
const projectCtrl = require('../controllers/project');

const router = express.Router();

router.get('/:project', projectCtrl.findOneProject);
router.get('/issues/:project', projectCtrl.getIssuesByProjectId);
router.get('/sprints/:project', projectCtrl.getSprintsByProjectId);
router.put('/:project', projectCtrl.updateProject);
router.get('/tests/:project', projectCtrl.getTestsByProjectId);
router.post('/', projectCtrl.createProject);

router.get('/releases/:project');
router.get('/documentations/:project');
router.get('/', projectCtrl.getAllProjects);

module.exports = router;
