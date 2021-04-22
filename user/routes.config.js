const express = require("express")
const router = express.Router();

const userController = require("./controllers/user.controller");

router.post("/", userController.createUser);

// add authrntication

router.patch("/", userController.UpdateUser);

module.exports = router;