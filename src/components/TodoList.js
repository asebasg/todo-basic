import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      const response = await fetch('http://localhost:3001/todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      alert('Error al cargar los todos');
    } finally {
      setLoading(false);
    }
  };

  // PATCH - Cambiar estado completado
  const toggleComplete = async (id, completed) => {
    try {
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
      alert('Error al actualizar');
    }
  };

  // DELETE - Eliminar todo
  const deleteTodo = async (id) => {
    if (!window.confirm('¿Eliminar este todo?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remover del estado local
        setTodos(todos.filter(todo => todo.id !== id));
      }
    } catch (error) {
      alert('Error al eliminar');
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Mis Todos</h2>

      <Link to="/add">+ Agregar Nuevo Todo</Link>

      {todos.length === 0 ? (
        <p>No hay todos. <Link to="/add">Crear el primero</Link></p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id, todo.completed)}
              />

              <span style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}>
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