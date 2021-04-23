const express = require("express")
const router = express.Router();

const userController = require("./controllers/user.controller");

router
    .route("/")
    .get(userController.getAllusers)
    .post(userController.createUser)
/*
router.post("/", userController.createUser);

router.get("/", userController.getAllusers);
*/

// add authrntication

router
    .route("/:userId")
    .patch(userController.UpdateUser)
module.exports = router;