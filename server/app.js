const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./models/comment");
const User = require("./models/user");

const session = require("express-session");
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

app.use(cors());

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

//PassportJS
app.use(passport.initialize());
app.use(passport.session());
//docs for passport and Local Strategy:
// https://www.passportjs.org/howtos/password/
//docs for User.authenticate():
//www.npmjs.com/package/passport-local-mongoose
passport.use(new LocalStrategy(User.authenticate()));

//store user activity in the session: passport-local-mongoose
passport.serializeUser(User.serializeUser());
//unstore user activity in the session: passport-local-mongoose
passport.deserializeUser(User.deserializeUser());

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
