const express = require('express');

const router = express.Router();
const releaseCtrl = require('../controllers/release');

router.get('/getLastReleaseInfos', releaseCtrl.getLastReleaseInfos);
router.get('/', releaseCtrl.getAllReleases);
router.delete('/:release', releaseCtrl.deleteRelease);
router.post('/', releaseCtrl.createRelease);
module.exports = router;
