const express = require("express");
const router = express.Router();
const stories = require("../controllers/stories");

router.get("/", stories.getStory);

//create story & index
// router.post("/", createStory);
// router.post("/", index);

//newposting form
// router.get("/new", renderNewForm);

//id
// router.get("/:id", showStory);
// router.put("/:id", updateStory);
// router.delete("/:id", deleteStory);

//edit form render
// router.get("/:id/edit");

module.exports = router;
