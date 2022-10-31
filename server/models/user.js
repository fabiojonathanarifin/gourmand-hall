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
  followers: Number,
  postsAmt: Number,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  // comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  birthday: String,
  website: String,
  state: String,
  city: String,
  favCuisine: String,
  favFood: String,
});

//add passportJS here for username and password
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
