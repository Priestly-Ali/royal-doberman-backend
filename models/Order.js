const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  puppy: { type: mongoose.Schema.Types.ObjectId, ref: "Puppy" },
  deposit: Number,
  balance: Number,
  status: { type: String, default: "Pending" },
  stripeSessionId: String
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);