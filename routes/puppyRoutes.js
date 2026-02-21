const express = require("express");
const router = express.Router();
const Puppy = require("../models/Puppy");

// Get all puppies
router.get("/", async (req, res) => {
  try {
    const puppies = await Puppy.find();
    res.json(puppies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new puppy
router.post("/", async (req, res) => {
  const { name, price, images } = req.body;
  const puppy = new Puppy({ name, price, images });
  try {
    const newPuppy = await puppy.save();
    res.status(201).json(newPuppy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;