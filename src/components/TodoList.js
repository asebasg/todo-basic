import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    // Cargar todos al montar el componente
    useEffect(() => {
        loadTodos();
    }, []);
}