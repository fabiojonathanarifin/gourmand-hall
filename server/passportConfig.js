const User = require("./models/user");
const LocalStrategy = require("passport-local");

module.exports = function (passport) {
  //docs for passport and Local Strategy:
  // https://www.passportjs.org/howtos/password/
  //docs for User.authenticate():
  //www.npmjs.com/package/passport-local-mongoose
  passport.use(new LocalStrategy(User.authenticate()));

  //store user activity in the session: passport-local-mongoose
  passport.serializeUser(User.serializeUser());
  //unstore user activity in the session: passport-local-mongoose
  passport.deserializeUser(User.deserializeUser());
};

// module.exports.isLoggedIn = (req, res, next) => {
//   if (!req.isAuthenticated()) {
//     return res.redirect("/login");
//   }
//   next();
// };
