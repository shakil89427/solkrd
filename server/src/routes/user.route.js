const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.getUser);
router.post("/userslinks", userController.updateUsersLinks);

module.exports = router;
