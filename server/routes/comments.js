const express = require("express");
const router = express.Router();
const { createComment, getComments } = require("../controllers/comments");

//create Comment
router.post("/:storyId", createComment);

router.get("/:storyId/comments", getComments);
//delete Comment
// router.delete("/:commentId", deleteReview);
// router.put("/:commentId", updateComment);

module.exports = router;
