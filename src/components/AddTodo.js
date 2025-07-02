import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTodo() {
  // Estado del formulario
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [navigate] = useState();

  // Manejar envio del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validacion basica

    if (!title.trim()) {
      alert("Por favor escribe un titulo");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          completed: false,
        }),
      });

      if (response.ok) {
        navigate("/todos");
      } else {
        alert("Error al crear el todo");
      }
    } catch (error) {
      alert("Error de conexion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Agregar Nuevo Todo</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Titulo:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Escribe tu tarea..."
            disabled={loading}
          />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Guardando Todo..." : "Agregar Todo"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/todos")}
            disabled={loading}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
