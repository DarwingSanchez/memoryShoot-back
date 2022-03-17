const express = require("express");
const router = express.Router();
const userController = require("../controllers/UsersController");

router.get("/get-users", userController.getUsers);
router.get("/get-one-user/:userId", userController.getOneUser);
router.post("/create-user", userController.createUsers);
router.delete("/delete-user/:userId", userController.deleteUser);
router.post(
  "/upload-profile-picture/:userId",
  userController.uploadProfilePicture,
  userController.updateProfilePictureInBD
);
router.post(
  "/save-images/:userId",
  userController.uploadImages,
  userController.updateImages
);
router.post("/login", userController.login);
router.post("/crear-orden/:id", userController.crearOrden);

module.exports = router;
