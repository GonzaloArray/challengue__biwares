# Descripción del Proyecto

Este proyecto consiste en crear una API y una aplicación web en React para manejar un sistema de puntuación de películas. La aplicación permitirá a los usuarios puntuar películas, y visualizar un dashboard con análisis de datos relacionados con las películas y las puntuaciones.

## Contenidos del Proyecto

- **API para acceso a datos**
- **Aplicación Web en React**
  - Página de Login
  - Sidebar con opciones de navegación
  - Página de Puntuación de Películas
  - Página de Análisis de Puntuaciones

### Aplicación Web en React

La aplicación web en React permitirá a los usuarios autenticarse, puntuar películas y ver análisis de datos.

#### Componentes

1. **LoginPage**
   - Formulario de login con ID de usuario y nombre como contraseña.

2. **Sidebar**
   - Opciones de navegación (Puntuar y Dashboard).
   - Opción para ocultar/mostrar el sidebar.

3. **Puntuar Película**
   - Filtros por fecha de lanzamiento, géneros y puntaje.
   - Tabla de resultados con ID, Nombre, Fecha de Lanzamiento, Géneros, Puntuación del Usuario, Puntuación General (Promedio), Acciones (Puntuar/Borrar Puntaje).

4. **Dashboard**
   - Selección de género para ver evolución histórica del puntaje promedio.
   - Histograma de puntuaciones por género con opción de filtrar por rango etario.

## Guía de Instalación

### Requisitos Previos

- Node.js
- npm (Node Package Manager)

### Frontend

1. Navegar al directorio frontend
   ```bash
   cd ../frontend
   ```

2. Instalar dependencias
   ```bash
   npm install
   ```

3. Iniciar la aplicación
   ```bash
   npm start
   ```

4. La aplicación estará disponible en `http://localhost:3000`

## Uso de la Aplicación

1. **Login**
   - Acceder a la página de login en `http://localhost:3000/login`.
   - Ingresar el ID de usuario y el nombre como contraseña.

2. **Sidebar**
   - Utilizar el sidebar para navegar entre las páginas de Puntuar y Dashboard.

3. **Puntuar Película**
   - Filtrar películas por fecha de lanzamiento, géneros y puntaje.
   - Puntuar películas o borrar puntuaciones existentes.

4. **Dashboard**
   - Seleccionar un género para ver la evolución histórica del puntaje promedio.
   - Visualizar histograma de puntuaciones por género y filtrar por rango etario.

## Enlace al Prototipo en Figma

Puedes ver el diseño del prototipo en Figma [aquí](https://www.figma.com/proto/9V3eIbStnTNuDY7I3GsdvH/Movie-page?page-id=2%3A985&node-[…]3pUbtDoNYg-1&scaling=scale-down&starting-point-node-id=3%3A577).

## Contribuciones

Para contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.
