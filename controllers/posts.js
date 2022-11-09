//const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const User = require("../models/User")
module.exports = {
  getProfile: async (req, res) => {
    try {
      const userId = req.params.id;
      const posts = await Post.find({user: userId}) //user.id == posts.user (users posts)
      const profile = await User.findById(userId);
      res.render("profile.ejs", { profile: profile, user: req.user, posts: posts}); 
      
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("post.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      //const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      const userId = req.params.id;
      const posts = await Post.find({user: userId}) //user.id == posts.user (users posts)
      const profile = await User.findById(userId);
      res.render("feed.ejs", { profile: profile, user: req.user, posts: posts});
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      //const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        nameOfItem: req.body.nameOfItem,
        costOfItem: req.body.costOfItem,
        numOfItems: req.body.numOfItems,
        user: req.user.id,
        createdAt: req.body.createdAt,
      });
      console.log("Post has been added!");
      res.redirect(`/profile/${req.user._id}`);
    } catch (err) {
      console.log(err);
    }
  },
  increment: async (req, res) => {
      try {
        await Post.findOneAndUpdate(
          { _id: req.params.id },
          {
            $inc: { numOfItems: 1 },
          }
        );
        console.log("qty +1");
        res.redirect(`/profile/${req.user._id}`);
      } catch (err) {
        console.log(err);
      }
  },
  decrement: async (req, res) => {
      try {
        await Post.findOneAndUpdate(
          { _id: req.params.id },
          {
            $inc: { numOfItems: -1 },
          }
        );
        console.log("qty -1");
        res.redirect(`/profile/${req.user._id}`);
      } catch (err) {
        console.log(err);
      }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      //let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      //await cloudinary.uploader.destroy(post.cloudinaryId);
      
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      res.redirect(`/profile/${req.user._id}`);

    } catch (err) {
      res.redirect(`/profile/${req.params.id}`);
    }
  },
  deleteInventory: async (req, res) => {
    try {
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      res.redirect(`/feed/${req.user._id}`);

    } catch (err) {
      res.redirect(`/feed/${req.params.id}`);
    }
  },
};
