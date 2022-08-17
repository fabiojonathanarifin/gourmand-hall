const Story = require("../models/story");

//error catch has to be fixed, moved to middleware
module.exports.createStory = async (req, res) => {
  try {
    const story = new Story(req.body);
    await story.save();
    res.send(story);
  } catch (error) {
    console.log(error);
  }
};

//currently displaying index 0 of the stories (the first data of the stories)
module.exports.getIndex = async (req, res) => {
  const stories = await Story.find({});
  console.log(stories);
  res.json(stories);
};

module.exports.getStory = async (req, res) => {
  res.json({
    usersList: ["user 1", "user 2"],
  });
  // try {
  //   const postMessage = "Baboon";
  //   const postMessages = await PostMessage.find();
  //   console.log(postMessage);
  //   res.status(200).json(postMessages);
  // } catch (error) {
  //   res.status(404).json({ message: error.message });
  // }
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
