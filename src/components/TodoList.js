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
}
