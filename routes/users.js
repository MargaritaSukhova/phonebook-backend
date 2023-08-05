const express = require("express");

const userRouter = express.Router();

const {
  signupController,
  loginController,
  logOutController,
  currentUserController,
} = require("../controllers/userControllers");

const { signupSchema, loginSchema, validateUser } = require("../middlewares/validateUser");

const authenticate = require("../middlewares/authenticate");

userRouter.post("/signup", validateUser(signupSchema), signupController);

userRouter.post("/login", validateUser(loginSchema), loginController);

userRouter.post("/logout", authenticate, logOutController);

userRouter.get("/current", authenticate, currentUserController);

module.exports = userRouter;
