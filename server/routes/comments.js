const express = require("express");
const router = express.Router();
const comments = require("../controllers/comments");

//create Comment
router.post("/", createComment);

//delete Comment
router.delete("/:commentId", deleteReview);
router.put("/:commentId", updateComment);

module.exports = router;
