const User = require("../models/user");
const Comment = require("../models/comment");

module.exports.createComment = async (req, res) => {
  const UserInSessionID = req.user._id;
  console.log(UserInSessionID);
  const comment = new Comment({
    comment: req.body.comment,
    author: UserInSessionID,
  });
  //User has to be imported from the model
  // const user = await User.findByIdAndUpdate(UserInSessionID, comment);
  await comment.save(
    await User.findByIdAndUpdate(req.user.id, {
      $push: { comments: comment._id },
    })
      .populate("comments")
      .exec((err, User) => {
        if (!err) return console.log(User);
      })
  );
  console.log(comment);
};

// author, comments, likes, date, hidden
