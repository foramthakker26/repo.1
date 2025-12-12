function ItemCard({ item, toggleLike, deleteRecipe }) {
  return (
    <div className="col-md-4 mb-3 d-flex justify-content-center">
      <div className="card shadow-lg p-3 rounded custom-card">

        <h5 className="text-center fw-semibold">{item.title}</h5>

        <div className="d-flex justify-content-between mt-3">
          <button
            className={`btn ${item.liked ? "btn-success" : "btn-outline-success"}`}
            onClick={() => toggleLike(item.id)}
          >
            {item.liked ? "Liked ❤️" : "Like 🤍"}
          </button>

          <button
            className="btn btn-outline-danger"
            onClick={() => deleteRecipe(item.id)}
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default ItemCard;
