let students = [];
let nextId; // This will be our unique ID counter

/**
 * Fetches user data from an external API and transforms it into our student format.
 */
const initializeData = async () => {
  try {
    console.log('Initializing student data...');
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();

    students = data.users.map(user => ({
      studentId: `QU-${user.id}`,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      image: user.image,
      course: "Computer Science",
      status: Math.random() < 0.8 ? "Active" : "Inactive",
    }));
    
    // **IMPROVEMENT**: Find the highest existing ID and set our counter
    const maxId = students.reduce((max, s) => {
      const idNum = parseInt(s.studentId.split('-')[1]);
      return idNum > max ? idNum : max;
    }, 0);
    nextId = maxId + 1; // Start the counter after the last existing ID
    
    console.log(`Successfully initialized ${students.length} students. Next ID is ${nextId}.`);

  } catch (error) {
    console.error('Error initializing data:', error);
  }
};

/**
 * Creates a new student object and adds it to the in-memory array.
 */
const addStudent = (studentData) => {
  // **IMPROVEMENT**: Use the counter for a guaranteed unique ID
  const newStudent = {
    studentId: `QU-${nextId++}`, // Assign unique ID and then increment the counter
    ...studentData,
    status: studentData.status || "Active", // Default status to "Active" if not provided
  };

  students.push(newStudent);
  return newStudent;
};

// --- No changes to the functions below ---

const getStudents = () => students;

const getStudentById = (studentId) => {
  return students.find(student => student.studentId === studentId);
};

const deleteStudentById = (studentId) => {
  const initialLength = students.length;
  students = students.filter(student => student.studentId !== studentId);
  return students.length < initialLength;
};

const getDashboardStats = () => {
  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === "Active").length;
  const inactiveStudents = students.filter(s => s.status === "Inactive").length;
  return { totalStudents, activeStudents, inactiveStudents };
};

module.exports = {
  initializeData,
  getStudents,
  addStudent,
  getStudentById,
  deleteStudentById,
  getDashboardStats,
};