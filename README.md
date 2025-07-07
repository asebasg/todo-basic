# Todo Basic React App

Este proyecto es una aplicación simple de gestión de tareas (To-Do) desarrollada con React y JSON Server. Permite a los usuarios crear, visualizar, actualizar y eliminar tareas de manera sencilla.

---

## Estructura del Proyecto

- **db.json**  
  Archivo que contiene los datos iniciales de las tareas (todos) para JSON Server.  
  Ejemplo de estructura:
  ```json
  {
    "todos": [
      {
        "id": 1,
        "title": "Aprender React",
        "completed": false
      },
      {
        "id": 2,
        "title": "Hacer ejercicio",
        "completed": true
      }
    ]
  }
  ```

- **package.json**  
  Contiene las dependencias y scripts del proyecto.  
  El script `"server"` inicia JSON Server en el puerto 3001 para simular una API REST.  
  El script `"start"` inicia la aplicación React (requiere que las dependencias estén instaladas).

- **public/**  
  Archivos estáticos y configuración base para la aplicación React.

- **src/**  
  Código fuente de la aplicación React.

  - **App.js**  
    Componente principal que configura las rutas usando React Router.  
    Rutas principales:
    - `/` → Componente `Home`
    - `/todos` → Componente `TodoList`
    - `/add` → Componente `AddTodo`

  - **components/**  
    Carpeta que contiene los componentes React:

    - **Home.js**  
      Componente de bienvenida con un mensaje simple.

    - **TodoList.js**  
      Componente que muestra la lista de tareas obtenidas desde JSON Server.  
      Permite:
      - Visualizar todas las tareas.
      - Marcar tareas como completadas o no completadas.
      - Eliminar tareas.

    - **AddTodo.js**  
      Componente con un formulario para agregar nuevas tareas.  
      Envía la nueva tarea a JSON Server mediante una petición POST.

---

## Cómo ejecutar el proyecto

1. Clonar el repositorio y navegar a la carpeta del proyecto.

2. Instalar las dependencias de Node.js:
   ```
   npm install
   ```

3. Iniciar JSON Server para simular la API REST:
   ```
   npm run server
   ```
   Esto levantará el servidor en `http://localhost:3001`.

4. En otra terminal, iniciar la aplicación React:
   ```
   npm start
   ```
   Esto abrirá la aplicación en `http://localhost:3000`.

---

## Notas importantes

- El proyecto requiere que las dependencias estén correctamente instaladas para que `react-scripts` funcione y la app React se ejecute sin problemas.

- JSON Server simula un backend RESTful para facilitar el desarrollo y pruebas sin necesidad de un servidor real.

- La aplicación permite gestionar tareas básicas: crear, listar, actualizar estado y eliminar.

---

## Posibles mejoras

- Manejo avanzado de errores y validaciones en el frontend.

- Añadir edición de tareas.

- Mejorar la interfaz de usuario con estilos y animaciones.

- Implementar autenticación y persistencia real con un backend.

---

Este README resume la estructura y funcionalidad del proyecto para facilitar su comprensión y uso.
