const express = require("express");
const usersRoute = express.Router();
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken")
usersRoute.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      throw new Error("User Exist");
    }
    const userCreated = await User.create({ name, email, password });
    res.status(200);
    res.json({
      _id: userCreated._id,
      name: userCreated.name,
      email: userCreated.email,
      password: userCreated.password,
      token : generateToken(userCreated._id)
    });
  })
);

usersRoute.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user && (await user.isPasswordMatch(password))) {
      res.status(200);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        token : generateToken(user._id)
      });
    }
    res.status(401);
    throw new Error("User Does Not Exist");
  })
);

module.exports = usersRoute;
