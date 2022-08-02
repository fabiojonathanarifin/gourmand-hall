const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
//sample
const { createUser } = require("../controllers/users");
router.get("/", createUser);

//registration
router.get("/register", user.renderRegister);
router.post("/register", user.register);

//login
router.get("/login", user.renderLogin);
router.post("/login", user.login);

//logout
router.get("logout", users.logout);

module.exports = router;
