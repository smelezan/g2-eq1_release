const express = require('express');
const router = express.Router();

const sprintCtrl = require('../controllers/sprint')

router.post('/', sprintCtrl.createSprint);

router.get('/:sprint',sprintCtrl.getOneSprint);

router.post('/:sprint', sprintCtrl.deleteOneSprint);



router.get('/',sprintCtrl.getAllSprints );


module.exports = router;