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
  //User has to be imported from the model
  // const user = await User.findByIdAndUpdate(UserInSessionID, comment);
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
  console.log(comment);
};

// author, comments, likes, date, hidden
