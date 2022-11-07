const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./models/comment");
const User = require("./models/user");

const session = require("express-session");
const passport = require("passport");

const storyRoutes = require("./routes/stories");
const userRoutes = require("./routes/users");
const restaurantRoutes = require("./routes/restaurants");
const commentRoutes = require("./routes/comments");

const app = express();
const cors = require("cors");
//--------------------------------------- END OF IMPORTS -----------------------------------------//

// const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/gourmand-hall";
mongoose
  .connect("mongodb://localhost:27017/gourmand-hall")
  .then(() => console.log("Database Connected!"))
  .catch((error) => console.log(error.message));

//Middleware
//bodyParser allow the usage of req.body
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//Session
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

app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

//--------------------------------------- END OF MIDDLEWARE -----------------------------------------//

app.use("/", userRoutes);
app.use("/stories", storyRoutes);
app.use("/", restaurantRoutes);
app.use("/story/", commentRoutes);

app.get("/", function (req, res) {
  res.send({ status: "success" });
});

app.get("/", (req, res) => {
  res.send("HELLO FROM GOURMAND HALL!");
});

//--------------------------------------- END OF ROUTES -----------------------------------------//

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
