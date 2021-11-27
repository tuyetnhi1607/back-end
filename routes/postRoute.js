const express = require("express");
const { verifyToken } = require("../middleware/verifyToken");

const {
  getAllPosts,
  createOnePost,
  updateOnePost,
  deleteOnePost,
} = require("../controllers/postController");

const Router = express.Router();

Router.route("/").get(verifyToken, getAllPosts);
Router.route("/").post(verifyToken, createOnePost);
Router.route("/:postId").delete(verifyToken, deleteOnePost);
Router.route("/:postId").put(verifyToken, updateOnePost);

module.exports = Router;
