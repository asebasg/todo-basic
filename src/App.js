import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navegacion simple */}
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/todos">Mis to-do</Link>
          <Link to="/add">Agregar to-do</Link>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/todos/edit/:id" element={<EditTodo />} />
        </Routes>
      </div>
      <footer>
        <p>© 2025 - Desarrollado por <strong>Sebastian Ospina Guzman</strong></p>
      </footer>
    </Router>
  );
}

export default App;
