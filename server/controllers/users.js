const story = require("../models/story");
const User = require("../models/user");

module.exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
  }
  //    const user = req.body;
  //    const newUser = new User(user);
  //    await newUser.save();
};
