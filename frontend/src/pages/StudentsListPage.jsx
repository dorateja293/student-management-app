import React, { useState, useEffect } from 'react';
import apiClient from '../api/axiosConfig';
import StudentTable from '../components/StudentTable';
const StudentsListPage = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => { apiClient.get('/students').then(res => setStudents(res.data))}, []);
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      await apiClient.delete(`/students/${id}`);
      setStudents(students.filter(s => s.studentId !== id));
    }
  };
  const filteredStudents = students.filter(s => `${s.firstName} ${s.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div>
      <h1>Students List</h1>
      <div className="toolbar">
        <input type="text" placeholder="Search by name..." className="search-input" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      </div>
      <StudentTable students={filteredStudents} onDelete={handleDelete} />
    </div>
  );
};
export default StudentsListPage;