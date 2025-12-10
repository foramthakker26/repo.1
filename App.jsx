import { useState } from "react";
import "./App.css";

function App() {
  const [liked, setLiked] = useState(false);
  const [done, setDone] = useState(false);
  const [show, setShow] = useState(false);
  const [qty, setQty] = useState(1);
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <h1 className="title">Interactive Buttons</h1>

      <div className="card">
        <h2></h2>

        {/* Like Button */}
        <button
          className={liked ? "btn like active" : "btn like"}
          onClick={() => setLiked(!liked)}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>

        {/* Mark As Done */}
        <button
          className={done ? "btn done active" : "btn done"}
          onClick={() => setDone(!done)}
        >
          {done ? "✔ Completed" : "Mark as Done"}
        </button>

        {/* Expand Collapse */}
        <button className="btn info" onClick={() => setShow(!show)}>
          {show ? "Hide Details" : "Show Details"}
        </button>

        {show && <p className="details">This is additional information 📄</p>}

        {/* Quantity */}
        <div className="qty-box">
          <button
            className="qty-btn"
            onClick={() => setQty(qty - 1)}
            disabled={qty === 1}
          >
            -
          </button>

          <span className="qty-number">{qty}</span>

          <button className="qty-btn" onClick={() => setQty(qty + 1)}>
            +
          </button>
        </div>

        {/* Theme Toggle */}
        <button className="btn theme" onClick={() => setDark(!dark)}>
          Toggle Theme 🌗
        </button>
      </div>
    </div>
  );
}

export default App;