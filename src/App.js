import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import TodoList from "./components/TodoList";
import AddTodo from ".componente/AddTodo";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navegacion simple */}
        <nav>
          <Link to="./">Inicio</Link>
          <Link to="/todos">Mis todos</Link>
          <Link to="/add">Add Todo</Link>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/add" element={<AddTodo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
