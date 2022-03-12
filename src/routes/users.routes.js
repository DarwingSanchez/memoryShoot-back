const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

const userController = require("../controllers/UsersController");

router.get("/get-users", userController.getUsers);
router.get("/get-one-user/:userId", userController.getOneUser);
router.post("/create-user", userController.createUsers);
router.delete("/delete-user/:userId", userController.deleteUser);
router.post("/login", userController.login);
module.exports = router;
