const Post = require('../models/Post')

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({}).populate('author')
        console.log("haha", posts)
        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: {posts}
        })
    } catch (error) {
        res.status(400).json({
            status: 'false',
        })
    }
}

exports.createOnePost = async (req, res, next) => {
    try {
        const {userId} = req.user;
        console.log("hihi", req.body)
        console.log("post=", {...req.body, author: userId})
        const post = await Post.create({...req.body, author: userId});
        const posts = await Post.find({}).populate('author')
        res.status(200).json({
            status: 'success',
            item: {post},
            data: {posts}
        })
    } catch (error) {
        console.log("error", error);
        res.status(400).json({
            status: 'create rrrp',
        })
    }
}

exports.updateOnePost = async (req, res, next) => {
    try {
        const {postId} = req.params
        console.log("hihi", req.body)
        const post = await Post.findByIdAndUpdate(postId, {...req.body}, {new: true, runValidator: true})
        const posts = await Post.find({}).populate('author')
        res.status(200).json({
            status: 'success',
            item: {post},
            data: {posts}
        })
    } catch (error) {
        res.status(400).json({
            status: 'false',
        })
        
    }
}

exports.deleteOnePost = async (req, res, next) => {
    try {
        const {postId} = req.params
        console.log("delete", req.params)
       await Post.findByIdAndDelete(postId)
       const posts = await Post.find({}).populate('author')
        res.status(200).json({
            status: 'success',
            messenger: 'delete successfully',
            data: {posts}
        })
    } catch (error) {
        res.status(400).json({
            status: 'false',
        })
        
    }
}