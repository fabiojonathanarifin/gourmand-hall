const User = require("../models/user");
const Comment = require("../models/comment");

module.exports.createComment = async (req, res) => {
  const UserInSessionID = req.user.id;
  const comment = new Comment(req.body);
  //User has to be imported from the model
  const user = await User.findByIdAndUpdate(UserInSessionID, comment);
  await comment.save();
  console.log(comment);
};

// author, comments, likes, date, hidden
