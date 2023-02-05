const express = require("express");
const router = express.Router();
const sliderController = require("../controllers/slider.controller");

router.get("/", sliderController.getSliders);

module.exports = router;
