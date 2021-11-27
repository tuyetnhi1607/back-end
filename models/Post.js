const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      strim: true,
      required: [true, "Content must be required"],
    },
    image: {
      type: String,
      strim: true,
      required: [true, "Image must be required"],
    },
    description: {
      type: String,
      strim: true,
      required: [true, "Description must be required"],
    },
    price: {
      type: String,
      strim: true,
      required: [true, "Price must be required"],
    },
    sale: {
      type: String,
      strim: true,
      required: [true, "Sale must be required"],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
