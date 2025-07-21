import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditTodo() {
  // Estado del formulario
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Cargar datos actuales del to-do al montar el componente
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        console.log("Fetching to-do with ID:", id);
        const response = await fetch(`http://localhost:3001/todos/${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log("To-do data received:", data);
          setTitle(data.title);
        } else {
          alert("No se pudo cargar el to-do");
          navigate("/todos");
        }
      } catch (error) {
        console.error("Error fetching to-do:", error);
        alert("Error de conexión");
        navigate("/todos");
      }
    };
    fetchTodo();
  }, [id, navigate]);

  // Edición del formulario
  const editTodo = async (e) => {
    e.preventDefault();

    // Validación en caso de no existir título
    if (!title.trim()) {
      alert("Por favor, escribe un título");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
        }),
      });

      if (response.ok) {
        alert("El to-do fue editado con éxito");
        navigate("/todos");
      } else {
        alert("Error al actualizar el to-do");
      }
    } catch (error) {
      alert("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-todo">
      <h2>Editar To-Do</h2>
      <form onSubmit={editTodo}>
        <div>
          <label>ID del to-do</label>
          <input
            className="todo-id"
            type="number"
            value={id}
            readOnly
            disabled={loading}
          />
        </div>
        <div>
          <label>Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={loading}
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Guardando..." : "Guardar Cambios"}
          </button>
          <button
            className="cancel-button"
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

export default EditTodo;
