const express = require("express");
const router = express.Router();
const { createComment } = require("../controllers/comments");

//create Comment
router.post("/comment", createComment);

//delete Comment
// router.delete("/:commentId", deleteReview);
// router.put("/:commentId", updateComment);

module.exports = router;
