import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar los to-do al montar el componente
  useEffect(() => {
    loadTodos();
  }, []);

  // GET - Obtener todos los to-do
  const loadTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3001/todos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      alert("Error al mostrar los to-do");
    } finally {
      setLoading(false);
    }
  };

  // PATCH - Cambiar estado completado
  const toggleComplete = async(id, completed) => {
    try {
        setLoading(true)
        const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed: !completed
        }),
      });
        if (response.ok) {
            // Actualizar estado local
            setTodos(todos.map(todo =>
          todo.id === id
            ? { ...todo, completed: !completed }
            : todo
        ));
        }
    } catch (error) {
        alert('No se pudo actualizar el to-do')
    }
  }

  // DELETE - Eliminar un to-do
  const deleteTodo = async (id) => {
    if (!window.confirm(`¿Deseas eliminar este to-do con la id ${id}?`)) {
        return;
  }
  try {
    const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: 'DELETE',
    })

    if(response.ok) {
        // Remover del estado local
        setTodos(todos.filter(todo => todo.id !== id));
    }
  } catch (error) {
      alert('Error al eliminar el to-do')
    }
  }
  
    if(loading) {
      return <div>Cargando...</div>
    }

  return (
    <div>
        <h2>Mis to-do</h2>
        <Link to="/add">+ Agregar un nuevo to-do</Link>

        {todos.length === 0 ? (
            <p>No hay to-do disponibles</p>
        ) : (
            <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id, todo.completed)}
              />

              <span style={{textDecoration : todo.completed ? 'line-through' : 'none'}}>
                {todo.title}
              </span>
<button onClick={() => deleteTodo(todo.id)}>
                Eliminar
              </button>
                    </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
