const express = require("express");
const usersRoute = express.Router()
const User = require("../models/User");
usersRoute.post("/register", async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = usersRoute.create({ name: name, email: email, password: password });
      console.log(user);
      res.send(user);
    } catch (err) {
      console.log(err);
    }
  });



  module.exports = usersRoute;