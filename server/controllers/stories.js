const Story = require("../models/story");

//error catch has to be fixed, moved to middleware
module.exports.createStory = async (req, res) => {
  try {
    const story = new Story(req.body);
    await story.save();
    req.json({ success: true, message: "Successfully Created a Story" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getIndex = async (req, res) => {
  const stories = await Story.find({});
  console.log(stories);
  res.json(stories);
};

module.exports.showStory = async (req, res) => {
  if (req.isAuthenticated()) {
    const story = await await Story.findById(req.params.id)
      .populate({
        path: "comments",
        populate: {
          path: "author",
        },
      })
      .populate("author");
    res.json(story);
    console.log("Authenticated");
  } else {
    console.log("not Authenticated");
  }
};
// module.exports.createPost = async (req, res) => {
//   const post = req.body;
//   const newPost = new PostMessage(post);
//   try {
//     await newPost.save();
//     res.status(201).json(newPost);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };
