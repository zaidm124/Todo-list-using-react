const express = require("express");
const router = express.Router();
require("../DB/conn");
const Todo = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello from server auth.js");
});

router.post("/register", async (req, res) => {
  console.log(req.body.title);
  console.log(req.body.desc);
  //   res.json({ message: req.body });
  const title = req.body.title;
  const desc = req.body.desc;
  const todo = new Todo({ title, desc });
  todo.save().then(() => {
    res.status(201).json({ message: "Todo added successfully" });
  });
  // .catch((err) => res.status(500).json({ message: "Failed to add" }));
});

module.exports = router;
