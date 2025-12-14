import { useState } from "react";

function ItemCard({ recipe, deleteRecipe }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img src={recipe.img} className="card-img-top" height="200" />
        <div className="card-body">
          <h5>{recipe.name}</h5>
          <p>{recipe.desc}</p>

          <button
            className="btn btn-outline-primary"
            onClick={() => setLiked(!liked)}
          >
            {liked ? "❤️ Liked" : "🤍 Like"}
          </button>

          <button
            className="btn btn-outline-danger ms-2"
            onClick={() => deleteRecipe(recipe.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
