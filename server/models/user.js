// import mongoose from "mongoose";
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: String,
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
  followers: {
    type: Number,
  },
  postsAmt: {
    type: Number,
  },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  birthday: {
    type: String,
  },
  location: {
    type: String,
  },
  website: {
    type: String,
  },
});

//add passportJS here for username and password
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
