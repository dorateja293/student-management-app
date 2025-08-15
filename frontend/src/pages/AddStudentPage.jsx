import React, { useState } from 'react';
import apiClient from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
const AddStudentPage = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', course: '' });
  const navigate = useNavigate();
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await apiClient.post('/students', formData);
    navigate('/students');
  };
  return (
    <div className="form-container">
      <h1>Add New Student</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group"><label>First Name</label><input name="firstName" onChange={handleChange} required /></div>
        <div className="form-group"><label>Last Name</label><input name="lastName" onChange={handleChange} required /></div>
        <div className="form-group"><label>Email</label><input type="email" name="email" onChange={handleChange} required /></div>
        <div className="form-group"><label>Course</label><input name="course" onChange={handleChange} required /></div>
        <button type="submit" className="submit-button">Add Student</button>
      </form>
    </div>
  );
};
export default AddStudentPage;