const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const { createStory, getIndex, showStory } = require("../controllers/stories");

// create story & index
router.post("/story", catchAsync(createStory));
router.get("/index", catchAsync(getIndex));

// newposting form
// router.get("/new", renderNewForm);

// id
router.get("/story/:id", catchAsync(showStory));
// router.put("/:id", updateStory);
// router.delete("/:id", deleteStory);

// edit form render
router.get("/:id/edit");

module.exports = router;
