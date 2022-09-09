const Restaurant = require("../models/restaurant");

//error catch has to be fixed, moved to middleware
module.exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.json({ success: true, message: "Successfully Register a Restaurant" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.json({ success: true, restaurantData: restaurants });
  } catch (error) {
    console.log(error);
  }
};
