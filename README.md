# Student Management System - Quorium Consulting

This project is a full-stack Student Management System built for the Technical Developer Intern assignment. It features a Node.js/Express backend API that serves data and a responsive React.js frontend for the user interface.

---

## Features Implemented

* **Backend API:** A complete REST API with endpoints for all CRUD (Create, Read, Delete) operations and dashboard statistics.
* **Dynamic Frontend:** A responsive single-page application (SPA) built with React.
* **Dashboard:** Displays real-time statistics fetched from the backend.
* **Students List:** Shows all students in a clean table with a serial number.
* **Live Search:** Includes a client-side search bar to filter students by name instantly.
* **Add & Delete:** Allows users to add new students via a form and delete existing students with a confirmation prompt.

---

## Technology Stack

* **Backend:** Node.js, Express.js
* **Frontend:** React.js (using Vite), React Router, Axios
* **Development:** Nodemon for backend auto-reload.

---

## Project Setup and Running

**Prerequisites:**
* Node.js (v18 or newer)
* An npm-compatible package manager

**Instructions:**

1.  **Unzip the Project:** Extract the contents of the zip file.

2.  **Set Up the Backend:**
    Open a terminal and navigate to the `backend` directory.
    ```bash
    cd backend
    npm install
    npm start
    ```
    The backend server will start on `http://localhost:3001`.

3.  **Set Up the Frontend:**
    Open a **second terminal** and navigate to the `frontend` directory.
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
    The frontend development server will start on `http://localhost:5173`.

4.  **View the Application:** Open your web browser and go to **`http://localhost:5173`**.

---

## API Endpoints & Testing Examples

| Method | Endpoint              | Description                    | Example `curl` Command                                                                                                |
|--------|-----------------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| GET    | `/dashboard/stats`    | Get dashboard statistics       | `curl http://localhost:3001/dashboard/stats`                                                                          |
| GET    | `/students`           | Get all students               | `curl http://localhost:3001/students`                                                                                 |
| GET    | `/students/:id`       | Get a single student by ID     | `curl http://localhost:3001/students/QU-1`                                                                            |
| POST   | `/students`           | Add a new student              | `curl -X POST -H "Content-Type: application/json" -d "{\"firstName\":\"Test\",\"lastName\":\"User\",\"email\":\"test@a.com\",\"course\":\"Testing\"}" http://localhost:3001/students` |
| DELETE | `/students/:id`       | Delete a student by ID         | `curl -X DELETE http://localhost:3001/students/QU-5`                                                                  |

---

## Implementation Summary

* I chose to build both the backend and frontend to demonstrate full-stack capabilities. The backend uses a service pattern to separate business logic from the API routes. The frontend is built with modern React, using hooks for state management and effects, and React Router for seamless client-side navigation...*

