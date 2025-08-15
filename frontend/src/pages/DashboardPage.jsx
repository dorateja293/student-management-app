import React, { useState, useEffect } from 'react';
import apiClient from '../api/axiosConfig';
const DashboardPage = () => {
  const [stats, setStats] = useState(null);
  useEffect(() => { apiClient.get('/dashboard/stats').then(res => setStats(res.data))}, []);
  if (!stats) return <p>Loading...</p>;
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <div className="stats-container">
        <div className="stat-card"><h2>Total Students</h2><p>{stats.totalStudents}</p></div>
        <div className="stat-card"><h2>Active Students</h2><p>{stats.activeStudents}</p></div>
        <div className="stat-card"><h2>Inactive Students</h2><p>{stats.inactiveStudents}</p></div>
      </div>
    </div>
  );
};
export default DashboardPage;