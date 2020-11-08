const express = require('express');

const router = express.Router();


const issueCtrl = require('../controllers/issue')




router.post('/', issueCtrl.createIssue);

router.put('/:issue',express.json(), issueCtrl.updateIssue);

router.delete('/:issue',issueCtrl.deleteIssue);

router.get('/:issue', issueCtrl.findOneIssue)


router.get('/', issueCtrl.getAllIssues);


module.exports = router;