const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const hostname = "http://127.0.0.1";
const path=require("path")
app.use(express.json());

const Todo = require("./model/userSchema");

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
require("./DB/conn");

// Todo.deleteOne({ title: "a" }, function (err) {
//   if (err) return handleError(err);
// });

app.use(require("./router/auth"));

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at ${hostname}:${PORT}`);
});
