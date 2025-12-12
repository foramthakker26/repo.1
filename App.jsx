import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemCard from "./components/ItemCard";

function App() {
  // page switching state
  const [page, setPage] = useState("home");

  // recipe states (used in Project page)
  const [recipeName, setRecipeName] = useState("");
  const [recipes, setRecipes] = useState([
    // example initial item (optional)
    {
      id: Date.now(),
      title: "paneer butter masala",
      liked: true,
    },
  ]);

  // add new recipe (used in Project page)
  const addRecipe = (e) => {
    e.preventDefault();
    if (!recipeName.trim()) return;

    const newRecipe = {
      id: Date.now(),
      title: recipeName.trim(),
      liked: false,
    };

    setRecipes((prev) => [...prev, newRecipe]);
    setRecipeName("");
  };

  // toggle like
  const toggleLike = (id) => {
    setRecipes((prev) =>
      prev.map((item) => (item.id === id ? { ...item, liked: !item.liked } : item))
    );
  };

  // delete a recipe
  const deleteRecipe = (id) => {
    setRecipes((prev) => prev.filter((item) => item.id !== id));
  };

  // clear all recipes
  const clearAll = () => setRecipes([]);

  return (
    <>
      <Navbar setPage={setPage} />

      <div className="container pageContainer pt-4">
        {/* =========================
            HOME - welcome hero
            ========================= */}
        {page === "home" && (
          <div className="text-center mt-5">
            {/* Optional hero image in public/hero.jpg */}
            <div className="hero-box mx-auto mb-4">
              <img
                src="/hero.jpg"
                alt="Hero"
                style={{
                  maxWidth: 220,
                  width: "100%",
                  height: "auto",
                  borderRadius: 16,
                  display: "block",
                  margin: "0 auto",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                }}
                onError={(e) => {
                  // hide broken image if not present
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <h1 className="fw-bold" style={{ fontSize: 36 }}>
              👋 Welcome
            </h1>
            <p className="lead" style={{ color: "#444", maxWidth: 700, margin: "10px auto 30px" }}>
              Welcome to <strong>Recipe Finder</strong> — your simple and friendly place to save,
              browse and manage delicious recipes. Click <em>Project</em> to add and manage recipes.
            </p>

            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-primary" onClick={() => setPage("project")}>
                Go to Project
              </button>
              <button className="btn btn-outline-secondary" onClick={() => setPage("about")}>
                Learn more
              </button>
            </div>
          </div>
        )}

        {/* =========================
            ABOUT
            ========================= */}
        {page === "about" && (
          <div className="text-center mt-5">
            <h2>About Recipe Finder</h2>
            <p className="mt-3" style={{ color: "#444", maxWidth: 700, margin: "0 auto" }}>
              Recipe Finder is a simple and user-friendly app that helps you create, store, and manage
              your favorite recipes in one place. Add a recipe in the Project page and manage it easily.
            </p>
          </div>
        )}

        {/* =========================
            PROJECT - interactive UI (form + list)
            ========================= */}
        {page === "project" && (
          <>
            <h2 className="text-center fw-bold mb-4">🍽️ Project - Manage Recipes</h2>

            {/* Add Recipe Form */}
            <form
              onSubmit={addRecipe}
              className="d-flex justify-content-start gap-3 mb-4 align-items-center"
              style={{ maxWidth: 760 }}
            >
              <input
                className="form-control recipe-input"
                placeholder="Enter recipe name..."
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                style={{ maxWidth: 420 }}
              />
              <button type="submit" className="btn btn-primary px-4">
                Add
              </button>
            </form>

            {/* Clear All button */}
            {recipes.length > 0 && (
              <div className="mb-3">
                <button onClick={clearAll} className="btn btn-danger">
                  Clear All
                </button>
              </div>
            )}

            {/* Recipe cards list */}
            <div className="row">
              {recipes.length === 0 ? (
                <div className="col-12 text-muted">No recipes yet — add one to get started.</div>
              ) : (
                recipes.map((item) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    toggleLike={toggleLike}
                    deleteRecipe={deleteRecipe}
                  />
                ))
              )}
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
