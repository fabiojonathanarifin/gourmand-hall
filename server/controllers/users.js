const User = require("../models/user");

module.exports.createUser = async (req, res) => {
  const { email, username, password } = req.body;
  const user = new User({ email, username });
  const registeredUser = await User.register(user, password);
  console.log(registeredUser);
};

module.exports.login = async (req, res) => {
  console.log("login route accessed");
};
