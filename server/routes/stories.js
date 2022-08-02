const express = require("express");
const router = express.Router();
const { getStory } = require("../controllers/stories");

router.get("/", getStory);

//undone
router.post("/", createStory);

module.exports = router;
