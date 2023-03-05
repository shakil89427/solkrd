const express = require("express");
const router = express.Router();
const checkAuth = require("../helpers/checkAuth");
const ccavenueController = require("../controllers/ccavenue.controller");

router.post("/create", checkAuth, ccavenueController.create);
router.post("/success", ccavenueController.success);
router.post("/cancel", ccavenueController.cancel);

module.exports = router;
