const User = require("../models/user");
const passport = require("passport");

//work on confirmed password
module.exports.createUser = async (req, res) => {
  const { email, username, password } = req.body;
  const Users = new User({ email, username });
  const registeredUser = await User.register(
    Users,
    password,
    function (err, user) {
      if (err) {
        res.json({
          success: false,
          message:
            "Your username is already available, please choose another username.",
          err,
        });
      } else {
        res.json({ success: true, message: "Your account has been saved" });
      }
    }
  );
};

// module.exports.loginUser = async (req, res) => {
//   try {
//     res.json({ success: true, message: "login successful" });
//   } catch (error) {
//     res.json({ success: false, message: "login failed, try again" });
//   }
// };

module.exports.loginUser = async (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) throw err;
    if (!user) res.json({ success: false, message: "No User Exist" });
    else {
      res.json({
        success: true,
        message: "Successfully Authenticated, User Logged In",
      });
    }
  })(req, res, next);
};
