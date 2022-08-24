// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
  author: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  likes: Boolean,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
});

module.exports = mongoose.model("Comment", CommentSchema);
