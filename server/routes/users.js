const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const passport = require("passport");
const { createUser, login } = require("../controllers/users");
const { get } = require("mongoose");

router.post("/register", catchAsync(createUser));

//registration
// router.get("/register", user.renderRegister);
// router.post("/register", user.register);

//login
// router.get("/login", user.renderLogin);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  catchAsync(login)
);

//logout
// router.get("logout", users.logout);

module.exports = router;
