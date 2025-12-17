import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Fetch data when app loads
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // Submit new data
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (name.trim() === "") {
      setMessage("Name cannot be empty");
      return;
    }

    const response = await fetch("http://localhost:5000/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage(data.message);
      return;
    }

    // Update UI without refresh
    setUsers([...users, data.user]);
    setName("");
    setMessage("User added successfully");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>

      {message && <p>{message}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
