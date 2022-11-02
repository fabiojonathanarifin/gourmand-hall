const User = require("../models/user");
const passport = require("passport");

module.exports.createUser = async (req, res) => {
  const { password } = req.body;
  const Users = new User(req.body);
  const registeredUser = await User.register(Users, password);
  req.logIn(registeredUser, (err) => {
    if (err) return next(err);
    res.json({ success: true, message: "Welcome to Gourmand Hall!" });
  });
  console.log(req.user);
};

module.exports.addInfo = async (req, res) => {
  const UserInSessionID = req.user.id;
  console.log(req.body);
  const user = await User.findByIdAndUpdate(UserInSessionID, req.body);
};

module.exports.loginUser = async (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) throw err;
    if (!user) res.json({ success: false, message: "No User Exist" });
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.json({ success: true, message: "Succesfully Authenticated" });
        console.log(req.user);
      });
    }
  })(req, res, next);
};

module.exports.logoutUser = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.json({
      success: true,
      message: "Goodbye!",
      redirectDestination: "/login",
    });
  });
};

module.exports.getUser = (req, res) => {
  res.json({ success: true, userData: req.user }); // the req.user(passporJS) store the entire user that has been authenticated(logged in) inside of it.
  console.log(req.user);
};
