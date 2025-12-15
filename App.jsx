import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch(() => {
        setError("Failed to fetch data");
      });
  }, []);

  return (
    <div className="container">
      <h1>Frontend Backend Integration</h1>

      {error && <p className="error">{error}</p>}

      {data ? (
        <div className="card">
          <p><strong>Message:</strong> {data.message}</p>

          <h3>Users:</h3>
          <ul>
            {data.users.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading data from backend...</p>
      )}
    </div>
  );
}

export default App;
