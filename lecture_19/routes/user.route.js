const { Router } = require("express");
const { isValidObjectId } = require("mongoose");
const userModel = require("../models/user.model");
const userRouter = Router();

userRouter.get("/", async (req, res) => {
  const users = await userModel.find().populate("posts");
  res.status(200).json(users);
});

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(404).json("invalid id");
  }

  const foundUser = await userModel.findById(id);
  res.status(200).json({ message: "found user", data: foundUser });
});

userRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(404).json("invalid id");
  }

  const deletedUser = await userModel.findByIdAndDelete(id);
  res.status(200).json({ message: "found user", data: deletedUser });
});

userRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { fullname, email } = req.body;
  if (!isValidObjectId(id)) {
    return res.status(404).json("invalid id");
  }

  const updatedUser = await userModel.findByIdAndUpdate(id, {fullname, email}, {new: true})
  res.status(200).json({ message: "found user", data: updatedUser });
});



module.exports = userRouter