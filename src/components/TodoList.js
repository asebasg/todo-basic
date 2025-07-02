import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar todos al montar el componente
  useEffect(() => {
    loadTodos();
  }, []);

  // GET - Obtener todos los todos
  const loadTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3001/todos");
      const data = await response.json();

      setTodos(data);
    } catch (error) {
      alert("Error al cargar los todos");
    } finally {
      setLoading(false);
    }
  };

  // PATCH - Cambiar estado completado
  const toggleCompleted = async (id, completed) => {
    try {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !completed,
        }),
      });

      if (response.ok) {
        // Actualizar estado local
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !completed } : todo
          )
        );
      }
    } catch (error) {
      alert("Error al actualizar");
    }
  };
}
