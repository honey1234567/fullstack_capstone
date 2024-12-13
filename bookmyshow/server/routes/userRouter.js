const express = require("express");
const {
  register,
  login,
  getCurrentUser
} = require("../controllers/userController");

const userRouter = express.Router();

// POST
userRouter.post("/register", register);
// POST
userRouter.post("/login", login);
// GET
userRouter.get("/curruser/:id", getCurrentUser);
module.exports = userRouter;