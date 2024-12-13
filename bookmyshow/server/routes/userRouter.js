const express = require("express");
const {
  register,
  login,
  getCurrentUser
} = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware")
const userRouter = express.Router();

// POST
userRouter.post("/register", register);
// POST
userRouter.post("/login", login);
// GET
userRouter.get("/curruser", auth,getCurrentUser);
module.exports = userRouter;