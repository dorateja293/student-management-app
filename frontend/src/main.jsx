import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import DashboardPage from './pages/DashboardPage';
import StudentsListPage from './pages/StudentsListPage';
import AddStudentPage from './pages/AddStudentPage';
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    { path: '/', element: <DashboardPage /> },
    { path: '/students', element: <StudentsListPage /> },
    { path: '/add-student', element: <AddStudentPage /> },
  ],
}]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><RouterProvider router={router} /></React.StrictMode>
);