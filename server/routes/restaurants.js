const express = require("express");
const router = express.Router();
const restaurants = require("../controllers/restaurants");

//create Restaurant
router.post("/", createRestaurant);
//get Restaurant
