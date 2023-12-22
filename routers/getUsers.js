const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
