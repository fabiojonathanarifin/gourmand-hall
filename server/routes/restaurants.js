const express = require("express");
const router = express.Router();
const {
  createRestaurant,
  getRestaurants,
} = require("../controllers/restaurants");

//create Restaurant
router.post("/localfavorites", createRestaurant);
//get Restaurant
router.get("/restaurant", getRestaurants);

module.exports = router;
