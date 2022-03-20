const jwt = require("jsonwebtoken");
const generateToken = (userId) => {
  jwt.sign({ id: userId }, "nodejs", {
    expiresIn: "30d",
  });
};
module.exports = generateToken;
