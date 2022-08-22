const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const { createUser } = require("../controllers/users");

router.post("/register", catchAsync(createUser));

//registration
// router.get("/register", user.renderRegister);
// router.post("/register", user.register);

//login
// router.get("/login", user.renderLogin);
// router.post("/login", user.login);

//logout
// router.get("logout", users.logout);

module.exports = router;
