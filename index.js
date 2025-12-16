const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test GET route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// POST route (Day 2 requirement)
app.post("/add-user", (req, res) => {
  const { name, email } = req.body;

  console.log("POST request received:", req.body);

  res.status(200).json({
    success: true,
    message: "User added successfully",
    data: { name, email },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
