const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const authMiddleware = require("../models/middlewares/auth.middleware");



const router = Router();

router.get('/',  usersController.getAllUsers);
router.post('/signUp', usersController.registerUser);
router.post('/signIn', usersController.login);

module.exports = router;