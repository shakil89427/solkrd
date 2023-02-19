const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.getUser);
router.patch("/userslinks", userController.updateUsersLinks);
router.post("/userscontacts", userController.addUsersContacts);

module.exports = router;
