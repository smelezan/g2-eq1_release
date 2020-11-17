const express = require('express');

const router = express.Router();

const testCtrl = require('../controllers/test');


router.post('/',testCtrl.createTask);
router.put('/:test',testCtrl.updateTask);
router.delete('/:test',testCtrl.deleteTask);
router.get('/:test',testCtrl.findOneTask);
router.get('/',testCtrl.getAllTasks);

module.exports = router;