// src/App.jsx
import React from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const cards = [
    {
      title: "React Basics",
      description: "Learn components, props, and JSX.",
      category: "Programming",
      color: "#7F7FD5"
    },
    {
      title: "Travel Guide",
      description: "Best places to visit in 2025.",
      category: "Travel",
      color: "#FFB199"
    },
    {
      title: "Food Recipe",
      description: "How to cook delicious pasta.",
      category: "Cooking",
      color: "#74ebd5"
    },
    {
      title: "Fitness Tips",
      description: "Improve stamina with daily habits.",
      category: "Health",
      color: "#F6D365"
    }
  ];

  return (
    <main className="page">
      <h1 className="page-title">Day 2 — Components & Props</h1>

      <section className="cards-container">
        {cards.map((c, i) => (
          <Card
            key={i}
            title={c.title}
            description={c.description}
            category={c.category}
            color={c.color}
          />
        ))}
      </section>
    </main>
  );
}

export default App;