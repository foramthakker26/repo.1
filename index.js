const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Simple GET API
app.get("/api/message", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello from Backend API 🚀",
    users: ["Foram"]
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
