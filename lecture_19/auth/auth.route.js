const { Router } = require("express");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const authRouter = Router();

authRouter.post("/sign-up", async (req, res) => {
  const { fullname, email, password } = req.body;
  if (!fullname || !email || !password) {
    return res.status(400).json({ message: "all fields are required" });
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "user exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({
    fullname,
    email,
    password: hashedPassword,
  });

  res.status(200).json({ message: "user crated successfully", user: newUser });

  console.log("password:", password);
  console.log("hashedPassword:", hashedPassword);
});

authRouter.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "all fields are required" });
  }
  const existingUser = await userModel.findOne({ email });
  if (!existingUser) {
    return res.status(400).json({ message: "invalid credentials" });
  }

  const isEqualPassord = await bcrypt.compare(password, existingUser.password);
  if (!isEqualPassord) {
    return res.status(400).json({ message: "invalid credentials" });
  }

  const payload = {
    userId: existingUser._id,
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn: "1h"})
  res.json({ message: 'token generated successfully', data: token})
});

module.exports = authRouter;


