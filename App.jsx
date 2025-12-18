import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [message, setMessage] = useState("");

  const API = "http://localhost:5000/users";

  // Fetch users
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => setMessage("Backend not running"));
  }, []);

  // Add user
  const addUser = () => {
    if (!newName.trim()) return;

    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    }).then(() => {
      setMessage("User added successfully");
      setNewName("");
      fetch(API)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    });
  };

  // Update user
  const updateUser = (id) => {
    fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: editName }),
    }).then(() => {
      setMessage("User updated successfully");
      setEditId(null);
      fetch(API)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    });
  };

  // Delete user
  const deleteUser = (id) => {
    fetch(`${API}/${id}`, { method: "DELETE" }).then(() => {
      setMessage("User deleted successfully");
      fetch(API)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>User Management</h2>
        <p style={styles.subtitle}></p>

        {message && <div style={styles.message}>{message}</div>}

        <div style={styles.addBox}>
          <input
            style={styles.input}
            placeholder="Enter name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button style={styles.addBtn} onClick={addUser}>
            Add
          </button>
        </div>

        {users.map((user) => (
          <div key={user.id} style={styles.row}>
            {editId === user.id ? (
              <>
                <input
                  style={styles.input}
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button
                  style={styles.saveBtn}
                  onClick={() => updateUser(user.id)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span style={styles.name}>{user.name}</span>
                <button
                  style={styles.editBtn}
                  onClick={() => {
                    setEditId(user.id);
                    setEditName(user.name);
                  }}
                >
                  Edit
                </button>
              </>
            )}

            <button
              style={styles.deleteBtn}
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 🌸 SIMPLE, SAFE, CENTERED STYLES */
const styles = {
  page: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
  },

  card: {
    width: "420px",
    maxWidth: "90%",
    background: "#ffffff",
    padding: "28px",
    borderRadius: "16px",
    boxShadow: "0 18px 40px rgba(0,0,0,0.15)",
  },

  title: {
    textAlign: "center",
    marginBottom: "4px",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "13px",
    color: "#64748b",
    marginBottom: "12px",
  },

  message: {
    textAlign: "center",
    background: "#ecfeff",
    color: "#065f46",
    padding: "8px",
    borderRadius: "8px",
    marginBottom: "12px",
    fontSize: "13px",
  },

  addBox: {
    display: "flex",
    gap: "8px",
    marginBottom: "12px",
  },

  row: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px",
    marginBottom: "8px",
    borderRadius: "10px",
    background: "#f8fafc",
  },

  name: {
    flex: 1,
    fontWeight: "600",
  },

  input: {
    flex: 1,
    padding: "6px",
    borderRadius: "6px",
    border: "1px solid #cbd5e1",
  },

  addBtn: {
    background: "#22c55e",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  editBtn: {
    background: "#6366f1",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  saveBtn: {
    background: "#10b981",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  deleteBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default App;
