// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: String,
  //username and password will be replaced by passportJS
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: [true, "Your e-mail already existed"],
    require: true,
  },
  profilePicture: {
    data: Buffer,
    type: String,
  },
  bio: {
    type: String,
  },
  socialMedia: {
    twitter: String,
    linkedIn: String,
    facebook: String,
    instagram: String,
  },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

//add passportJS here for username and password

module.exports = mongoose.model("User", userSchema);
