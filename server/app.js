const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./models/comment");

const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const storyRoutes = require("./routes/stories");

const userRoutes = require("./routes/users");
const app = express();
const cors = require("cors");

// const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/gourmand-hall";
mongoose
  .connect("mongodb://localhost:27017/gourmand-hall")
  .then(() => console.log("Database Connected!"))
  .catch((error) => console.log(error.message));
//bodyParser allow the usage of req.body
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//cookie

//session
const sessionConfig = {
  secret: "badsecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expries: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));
app.use(flash());

//PassportJS

app.use(cors());

app.get("/greet", (req, res) => {
  res.send("Hi Fellas");
});

app.use("/", userRoutes);
app.use("/", storyRoutes);

app.get("/", (req, res) => {
  res.send("HELLO FROM GOURMAND HALL!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
