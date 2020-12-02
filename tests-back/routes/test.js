const express = require("express");

const router = express.Router();

const testCtrl = require("../controllers/test");

router.post("/", testCtrl.createTest);
router.put("/:test", testCtrl.updateTest);
router.delete("/:test", testCtrl.deleteTest);
router.get("/:test", testCtrl.findOneTest);
router.post("/verifyTest", testCtrl.verifyTest);
router.post("/saveAllTests", testCtrl.saveTest);
router.get("/", testCtrl.getAllTests);

module.exports = router;
