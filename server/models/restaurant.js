const mongoose = require("mongoose");
const { Schema } = mongoose;

const RestaurantSchema = new Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  google: { type: String },
  website: { type: String },
  socialMedia: { type: String },
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
