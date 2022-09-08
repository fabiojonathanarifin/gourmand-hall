const mongoose = require("mongoose");
const { Schema } = mongoose;

const RestaurantSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  google: { type: String },
  website: { type: String },
  socialMedia: { type: String },
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
