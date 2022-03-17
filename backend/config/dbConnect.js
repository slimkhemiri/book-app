const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose
  .connect("mongodb+srv://slimkhemiri:123456slim@cluster0.skozt.mongodb.net/book-app", {
    // useFindAndModify: true,
    useUnifiedTopology: true,
    // useCreeateIndex: true,
    useNewUrlParser: true,
  })
  .then(console.log("DB connected"))
  .catch((err) => console.log(err));
};

module.exports = dbConnect ;