const express = require("express");
const usersRoute = require('./routes/usersRoute')
const app = express();
app.use(express.json());
app.use('/api/users', usersRoute)
const mongoose = require("mongoose");
const User = require("./models/User");

const dbConnect = require("./config/dbConnect");
dbConnect();

app.get("/api/users", (req, res) => {
  res.send("fetch users");
});



app.post("/api/users/login", (req, res) => {
  
});

app.put("/api/users/update", (req, res) => {
  res.send("update route");
});

app.delete("/api/users/:id", (req, res) => {
  res.send("delete route");
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`ye5dem 3al port ${PORT} `);
});

