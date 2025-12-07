import express from "express";
const router = express.Router();

// POST /api/auth/register
router.post("/register", async (req, res) => {
  // your registration logic here
  res.send("User registered");
});

export default router;