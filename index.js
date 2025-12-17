const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample data
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" }
];

// GET API – Fetch data
app.get("/users", (req, res) => {
  res.json(users);
});

// POST API – Add new data
app.post("/add-user", (req, res) => {
  const { name } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({ message: "Name is required" });
  }

  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);
  res.status(201).json({
    message: "User added successfully",
    user: newUser
  });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
