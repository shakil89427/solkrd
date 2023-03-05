const express = require("express");
const router = express.Router();
const ccavenueController = require("../controllers/ccavenue.controller");

router.post("/success", ccavenueController.success);
router.post("/cancel", ccavenueController.cancel);

module.exports = router;
