export default function ItemCard({ item, onDelete, onEdit }) {
  return (
    <div
      style={{
        background: "#f8f9ff",
        padding: "20px",
        borderRadius: "15px",
        marginBottom: "15px",
        width: "450px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <h3>{item.title}</h3>
      <p><b>Category:</b> {item.category}</p>
      <p><b>Description:</b> {item.desc}</p>

      <button
        onClick={onEdit}
        style={{
          marginRight: "10px",
          padding: "10px 16px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Edit
      </button>

      <button
        onClick={onDelete}
        style={{
          padding: "10px 16px",
          background: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}