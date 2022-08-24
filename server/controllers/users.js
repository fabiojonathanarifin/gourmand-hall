const User = require("../models/user");

module.exports.createUser = async (req, res) => {
  const { email, username, password } = req.body;
  const user = new User({ email, username });
  const registeredUser = await User.register(user, password);
  console.log(registeredUser);
  // const user = new User(req.body);
  // await user.save();
  // res.send(user);
};
