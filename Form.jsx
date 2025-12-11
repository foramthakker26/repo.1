import { useState, useEffect } from "react";

export default function Form({ addItem, editMode, itemToEdit }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (editMode && itemToEdit) {
      setTitle(itemToEdit.title);
      setCategory(itemToEdit.category);
      setDesc(itemToEdit.desc);
    }
  }, [editMode, itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category || !desc) {
      alert("Please fill all fields!");
      return;
    }

    addItem({ title, category, desc });

    // Clear form after update
    setTitle("");
    setCategory("");
    setDesc("");
  };

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "25px",
        borderRadius: "20px",
        width: "450px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        marginBottom: "30px",
      }}
    >
      <h2>{editMode ? "Edit Item" : "Add Item"}</h2>

      <form onSubmit={handleSubmit}>
        <input style={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input style={styles.input} value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
        <input style={styles.input} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description / Amount / Note" />

        <button type="submit" style={styles.button}>
          {editMode ? "Update Item" : "Submit"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};