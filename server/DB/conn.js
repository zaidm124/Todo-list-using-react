const mongoose = require("mongoose");

const DB =
  "mongodb+srv://zaidm124:zaidm124@cluster0.ogcx1av.mongodb.net/";

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

const middleware = (req, res, next) => {
  console.log("hello my middleware");
  next();
};
