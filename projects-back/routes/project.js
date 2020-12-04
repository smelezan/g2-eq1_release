const express = require('express');
const projectCtrl = require('../controllers/project');

const router = express.Router();

router.get('/issues/:project', projectCtrl.getIssuesByProjectId);
router.put('/:project', projectCtrl.updateProject);
router.post('/', projectCtrl.createProject);

router.get('/sprints/:project');
router.get('/deleases/:project');
router.get('/documentations/:project');
router.get('/tests/:project');
router.get('/', projectCtrl.getAllProjects);
module.exports = router;
