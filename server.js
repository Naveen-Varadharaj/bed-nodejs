// 1️⃣ Load environment variables
require("dotenv").config();

// 2️⃣ Connect to MongoDB
const connectDB = require("./config/db");
connectDB();

// 3️⃣ Import other modules
const express = require("express");
const app = express();

// 4️⃣ Middleware
app.use(express.json());

// 5️⃣ Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// 6️⃣ Default route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// 7️⃣ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
