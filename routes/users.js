const express = require("express");

const userRouter = express.Router();

const {
	signupController,
	loginController,
} = require("../controllers/userControllers");

const {
	signupSchema,
	loginSchema,
	validateUser,
} = require("../middlewares/validateUser");

userRouter.post("/signup", validateUser(signupSchema), signupController);

userRouter.post("/login", validateUser(loginSchema), loginController);

userRouter.post("/logout");

userRouter.get("/current");

module.exports = userRouter;
