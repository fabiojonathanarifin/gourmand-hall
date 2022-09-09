const express = require("express");
const router = express.Router();
const { createRestaurant } = require("../controllers/restaurants");

//create Restaurant
router.post("/localfavorites", createRestaurant);
//get Restaurant

module.exports = router;
