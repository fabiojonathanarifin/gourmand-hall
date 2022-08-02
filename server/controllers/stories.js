const Story = require("../models/post");

<module className="exports getStory"></module> = async (req, res) => {
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
