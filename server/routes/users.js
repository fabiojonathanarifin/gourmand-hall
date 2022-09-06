const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const passport = require("passport");
const { isLoggedIn } = require("../middleware");
const { createUser, loginUser, getUser } = require("../controllers/users");

router.post("/register", catchAsync(createUser));

//registration
// router.get("/register", user.renderRegister);
// router.post("/register", user.register);

//login
// router.post(
//   "/login",
//   passport.authenticate("local", {
//     failureRedirect: "/login",
//   }),
//   loginUser
// );
router.post("/login", loginUser);

router.get("/user", isLoggedIn, catchAsync(getUser));

//logout
// router.get("logout", users.logout);

module.exports = router;
