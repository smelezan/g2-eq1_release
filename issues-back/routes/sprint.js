const express = require('express');

const router = express.Router();

const sprintCtrl = require('../controllers/sprint');
const middleware = require('../middlewares/sprint');

router.put('/reassign', sprintCtrl.reassign);
router.post('/', sprintCtrl.createSprint);
router.put('/addIssue/:sprint', middleware.isSprintExists, sprintCtrl.addIssue);
router.put(
  '/removeIssue/:sprint',
  middleware.isSprintExists,
  sprintCtrl.removeIssue
);

router.get('/:sprint', middleware.isSprintExists, sprintCtrl.getOneSprint);

router.delete(
  '/:sprint',
  middleware.isSprintExists,
  sprintCtrl.deleteOneSprint
);

router.get('/', sprintCtrl.getAllSprints);

module.exports = router;
