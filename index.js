const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Dummy data (users)
let users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Anita" },
  { id: 3, name: "virat" },
  { id: 4, name: "prachi" }
];

// GET users
app.get("/users", (req, res) => {
  res.json(users);
});

// PUT - Update user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = name;
  res.json({ message: "User updated successfully", user });
});

// DELETE - Delete user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((u) => u.id !== id);

  res.json({ message: "User deleted successfully" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
