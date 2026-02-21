const mongoose = require("mongoose");

const PuppySchema = new mongoose.Schema({
  name: String,
  price: Number,
  status: { type: String, default: "Available" },
  images: [String]
}, { timestamps: true });

module.exports = mongoose.model("Puppy", PuppySchema);