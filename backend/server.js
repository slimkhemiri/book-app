const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dbConnect = require('./config/dbConnect')
dbConnect();
//routes
//user routes
app.get("/api/users", (req, res) => {
  res.send("fetch users");
});
app.post("/api/users/register", (req, res) => {
  res.send("register route");
});
app.post("/api/users/login", (req, res) => {
  res.send("login route");
});
app.put("/api/users/update", (req, res) => {
  res.send("update route");
});
app.delete("/api/users/:id", (req, res) => {
  res.send("delete route");
});
//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`ye5dem 3al port ${PORT} `);
});

// slimkhemiri;
// rLBuOH5UsiYGQTny;
// mongodb+srv://slimkhemiri:<password>@cluster0.skozt.mongodb.net/test