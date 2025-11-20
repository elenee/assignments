const { Router } = require("express");
const postModel = require("../models/post.model");
const userModel = require("../models/user.model");
const { isValidObjectId } = require("mongoose");
const postRouter = Router()

postRouter.get("/", async (req, res) => {
    const posts = await postModel.find().populate("user")
    res.json({message: 'posts', data: posts})
})

postRouter.post("/", async (req, res) => {
    const {title, desc} = req.body;
    if(!title || !desc) {
        return res.status(400).json({ message: 'all fields are required', data: null})
    }

    const newPost = await postModel.create({title, desc, user: req.userId})
    
    await userModel.findByIdAndUpdate(req.userId, {$push:{posts:newPost._id}})
    res.status(200).json({ message: "post created successfully", data: newPost})
})

postRouter.delete("/:id", async (req, res) => {
    const {id} = req.params;
    if(!isValidObjectId(id)) {
        return res.status(400).json({ message: 'invalid id'})
    }
    const deleted = await postModel.findByIdAndDelete(id)

    res.status(200).json({ message: "post deleted", data: deleted})
})

module.exports = postRouter