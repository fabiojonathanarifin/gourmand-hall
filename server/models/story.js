const mongoose = require("mongoose");
const { Schema } = mongoose;

const storySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  author: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  likeCount: {
    type: Number,
    default: 0,
  },
  //tags is an array of string
  tags: [String],
  images: String,
  views: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
  hidden: Boolean,
});

module.exports = mongoose.model("Story", storySchema);
