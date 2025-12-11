import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [items, setItems] = useState([]);

  // Add item
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !desc) return alert("Please fill all fields!");

    const newItem = {
      id: Date.now(),
      title,
      category,
      desc,
    };

    setItems([...items, newItem]);

    // Clear input fields
    setTitle("");
    setCategory("");
    setDesc("");
  };

  // Delete one item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Clear all items
  const clearAll = () => {
    setItems([]);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Day 4 — Lists & Forms</h1>

      <h2>Add Item</h2>
      <form onSubmit={handleSubmit} style={{ width: "300px" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Description / Amount / Note"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          style={inputStyle}
        />

        <button type="submit" style={btnStyle}>Submit</button>
      </form>

      <hr />

      <h2>Items List</h2>

      {items.length === 0 ? (
        <p>No items yet...</p>
      ) : (
        <>
          <button onClick={clearAll} style={clearBtnStyle}>Clear All</button>

          <div style={{ marginTop: "20px" }}>
            {items.map((item) => (
              <div key={item.id} style={cardStyle}>
                <h3>{item.title}</h3>
                <p><strong>Category:</strong> {item.category}</p>
                <p>{item.desc}</p>

                <button onClick={() => deleteItem(item.id)} style={deleteBtnStyle}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ---------- Styles ----------
const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  borderRadius: "8px",
  border: "1px solid #888",
};

const btnStyle = {
  padding: "10px 20px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px",
};

const clearBtnStyle = {
  padding: "10px 15px",
  background: "darkred",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const cardStyle = {
  background: "#f5f5f5",
  padding: "20px",
  marginBottom: "15px",
  borderRadius: "12px",
  boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
};

const deleteBtnStyle = {
  padding: "8px 12px",
  background: "red",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default App;