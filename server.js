import express from "express";
import authRoute from "./routes/authRoute.js"; // your import is correct

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Register the route
app.use("/api/auth", authRoute);

app.listen(3000, () => console.log("Server running on port 3000"));