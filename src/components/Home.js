import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-content">
      <h1>Bienvenido a To-Do App</h1>
      <p>Esta es una app simple pero funcional, ¡vamos a probarla!</p>
      <button onClick={() => navigate("/todos")} className="navigate-button">
        Ir a listas
      </button>
    </div>
  );
}

export default Home;