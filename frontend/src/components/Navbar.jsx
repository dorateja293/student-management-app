import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-brand">Student Management System for Quorium Consulting</Link>
    <ul className="nav-links">
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/students">Students</Link></li>
      <li><Link to="/add-student">Add Student</Link></li>
    </ul>
  </nav>
);
export default Navbar;