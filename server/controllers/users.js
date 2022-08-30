const User = require("../models/user");

module.exports.createUser = async (req, res) => {
  const { email, username, password } = req.body;
  const user = new User({ email, username });
  const registeredUser = await User.register(user, password, function (err) {
    if (err) {
      res.json({
        success: false,
        message: "Your account could not be saved. Error: ",
        err,
      });
    } else {
      res.json({ success: true, message: "Your account has been saved" });
    }
  });
  console.log(registeredUser);
};

module.exports.loginUser = async (req, res) => {
  res.json({ status: "success" });
};
