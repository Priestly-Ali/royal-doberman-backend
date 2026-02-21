require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("Royal Doberman Empire Backend Running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Import routes
const puppyRoutes = require("./routes/puppyRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Use routes
app.use("/api/puppies", puppyRoutes);
app.use("/api/orders", orderRoutes);