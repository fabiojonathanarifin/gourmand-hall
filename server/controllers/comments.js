const User = require("../models/user");
const Comment = require("../models/comment");
const Story = require("../models/story");

module.exports.createComment = async (req, res) => {
  const UserInSessionID = req.user._id;
  console.log(UserInSessionID);
  const comment = new Comment({
    comment: req.body.comment,
    author: UserInSessionID,
    story: req.body.story,
  });
  await comment.save(
    await User.findByIdAndUpdate(req.user.id, {
      $push: { comments: comment._id },
    })
      .populate("comments")
      .exec((err, User) => {
        if (!err) return console.log(User);
      }),
    await Story.findByIdAndUpdate(req.body.story, {
      $push: { comments: comment._id },
    })
      .populate("comments")
      .exec((err, Story) => {
        if (!err) return console.log(Story);
      })
  );
  res.json({
    success: true,
    message: "Comment Submitted!",
    comment: req.body.comment,
  });
};

// author, comments, likes, date, hidden
