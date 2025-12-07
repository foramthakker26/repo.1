import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
