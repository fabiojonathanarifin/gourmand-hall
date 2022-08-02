// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// import postRoutes from "./routes/posts.js";
const postRoutes = require("./routes/stories");
// const createUser = require("./routes/user");
const getStory = require("./routes/stories");
const app = express();
const cors = require("cors");

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/gourmand-hall";
mongoose.connect(dbUrl).catch((error) => console.log(error.message));

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/userlist", getStory);

app.get("/", (req, res) => {
  res.send("HELLO FROM GOURMAND HALL!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
