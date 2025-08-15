const express = require('express');
const cors = require('cors');
const dataService = require('./dataService');

const app = express();
const PORT = process.env.PORT || 3001;

n
const corsOptions = {
  origin: 'https://student-management-ap.netlify.app', // Your deployed frontend URL
};
app.use(cors(corsOptions));
// -----------------------------

app.use(express.json());

// --- API Endpoints ---

// GET dashboard statistics
app.get('/dashboard/stats', (req, res) => {
  const stats = dataService.getDashboardStats();
  res.json(stats);
});

// GET all students
app.get('/students', (req, res) => {
  const students = dataService.getStudents();
  res.json(students);
});

// GET a single student by their ID
app.get('/students/:id', (req, res) => {
  const studentId = req.params.id;
  const student = dataService.getStudentById(studentId);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: `Student with ID ${studentId} not found` });
  }
});

// POST (add) a new student
app.post('/students', (req, res) => {
  const studentData = req.body;

  if (!studentData.firstName || !studentData.lastName || !studentData.email || !studentData.course) {
    return res.status(400).json({ error: 'Missing required fields: firstName, lastName, email, course' });
  }

  const newStudent = dataService.addStudent(studentData);
  res.status(201).json(newStudent);
});

// DELETE a student by their ID
app.delete('/students/:id', (req, res) => {
  const studentId = req.params.id;
  const wasDeleted = dataService.deleteStudentById(studentId);
  if (wasDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: `Student with ID ${studentId} not found` });
  }
});

// Root route for basic testing
app.get('/', (req, res) => {
  res.send('Welcome to the Quorium Student Management API!');
});

// Start the server
const startServer = async () => {
  await dataService.initializeData();
  app.listen(PORT, () => {
    console.log(`Server is running successfully on http://localhost:${PORT}`);
  });
};

startServer();