const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const passport = require("passport");
const { isLoggedIn } = require("../middleware");
const {
  createUser,
  loginUser,
  getUser,
  logoutUser,
} = require("../controllers/users");

router.post("/register", catchAsync(createUser));

//registration
// router.get("/register", user.renderRegister);
// router.post("/register", user.register);

router.post("/login", loginUser);

router.get("/user", isLoggedIn, getUser);

//logout
router.get("/logout", logoutUser);

module.exports = router;
