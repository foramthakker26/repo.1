// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

let User;
try {
  // Resolve the models/User.js relative to this file reliably
  User = require(path.join(__dirname, '..', 'models', 'User'));
} catch (err) {
  console.error('Failed to load User model from ../models/User. Make sure file exists and exports the model.');
  console.error('Error details:', err.message);
  // Re-throw so server start fails fast and you can see the real error
  throw err;
}

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "Email already registered" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({
      message: "Registration successful",
      user: { id: user._id, name: user.name, email: user.email },
      token
    });

  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email },
      token
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;
