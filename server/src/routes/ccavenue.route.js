const express = require("express");
const router = express.Router();
const ccavenueController = require("../controllers/ccavenue.controller");

router.get("/", ccavenueController.create);
router.post("/", ccavenueController.verify);

module.exports = router;
