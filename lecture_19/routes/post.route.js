const { Router } = require("express");
const postModel = require("../models/post.model");
const postRouter = Router()

postRouter.get("/", async (req, res) => {
    const posts = await postModel.find()
    res.json({message: 'posts', data: posts})
})

module.exports = postRouter