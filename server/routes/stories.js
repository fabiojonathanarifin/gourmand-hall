const express = require("express");
const router = express.Router();
const { getStory } = require("../controllers/stories");

router.get("/", getStory);
// router.post("/", createPost);

module.exports = router;
