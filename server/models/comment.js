const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  comment: { type: String },
  likes: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  hidden: Boolean,
});

module.exports = mongoose.model("Comment", CommentSchema);
