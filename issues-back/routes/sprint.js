const express = require('express');

const router = express.Router();

const sprintCtrl = require('../controllers/sprint');

router.put('/reatribute', sprintCtrl.reatribute);
router.post('/', sprintCtrl.createSprint);

router.get('/:sprint', sprintCtrl.getOneSprint);

router.delete('/:sprint', sprintCtrl.deleteOneSprint);

router.get('/', sprintCtrl.getAllSprints);

module.exports = router;
