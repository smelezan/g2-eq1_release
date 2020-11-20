const express = require('express');

const router = express.Router();

const taskCtrl = require('../controllers/task');


router.get('/issues/:issue', taskCtrl.findByIssues);
router.post('/',taskCtrl.createTask);
router.put('/:task',taskCtrl.updateTask);
router.delete('/:task',taskCtrl.deleteTask);
router.get('/:task',taskCtrl.findOneTask);
router.get('/',taskCtrl.getAllTasks);

module.exports = router;