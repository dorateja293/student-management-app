import React from 'react';
const StudentTable = ({ students, onDelete }) => (
  <div className="table-container">
    <table className="student-table">
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student.studentId}>
            <td>{index + 1}</td>
            <td>{`${student.firstName} ${student.lastName}`}</td>
            <td>{student.email}</td>
            <td>{student.course}</td>
            <td><span className={`status-badge status-${student.status.toLowerCase()}`}>{student.status}</span></td>
            <td><button className="delete-button" onClick={() => onDelete(student.studentId)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default StudentTable;