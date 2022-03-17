const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
