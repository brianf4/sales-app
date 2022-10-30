const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  nameOfItem: {
    type: String,
    required: true,
  },
  costOfItem: {
    type: Number,
    require: true,
  },
  numOfItems: {
    type: Number,
    require: true,
  },
  // caption: {
  //   type: String,
  //   required: true,
  // },
  // likes: {
  //   type: Number,
  //   required: true,
  // },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema, 'posts');
