const user = require("../models/user");

module.exports.createUser = (req, res) => {
  res.json({
    usersList: ["user 1", "user 2"],
  });
  //    const user = req.body;
  //    const newUser = new User(user);
  //    await newUser.save();
};
