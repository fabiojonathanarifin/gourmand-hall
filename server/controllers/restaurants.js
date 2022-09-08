const Restaurant = require("../models/restaurant");
const story = require("../models/story");

//error catch has to be fixed, moved to middleware
module.exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    req.json({ success: true, message: "Successfully Register a Restaurant" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getRestaurant = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (error) {
    console.log(error);
  }
};
