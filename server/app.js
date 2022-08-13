// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const createUser = require("./routes/user");
const createUser = require("./routes/users");

const getStory = require("./routes/stories");
const createStory = require("./routes/stories");
const app = express();
const cors = require("cors");
const getIndex = require("./routes/stories");

// const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/gourmand-hall";
mongoose
  .connect("mongodb://localhost:27017/gourmand-hall")
  .then(() => console.log("Database Connected!"))
  .catch((error) => console.log(error.message));

app.use(cors());
//bodyParser allow the usage of req.body
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/register", createUser);
app.use("/userlist", getStory);
app.use("/story", createStory);
app.use("/index", getIndex);

app.get("/", (req, res) => {
  res.send("HELLO FROM GOURMAND HALL!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
