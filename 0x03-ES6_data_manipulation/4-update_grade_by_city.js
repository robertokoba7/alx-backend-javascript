// Function to update the grades of students by city
function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) { // Check if the parameters are arrays
    return [];
  }

  const studentByCity = students // Get the students by city
    .filter((student) => student.location === city) // Filter the students by city
    .map((student) => { // Map the students to update the grades
    // Get the grades of the student
      const grades = newGrades.filter((note) => student.id === note.studentId);
      let grade = 'N/A';

      if (grades[0]) { // Check if the grades exist for the student and set the grade
        grade = grades[0].grade; // Get the grade
      }

      return { ...student, grade }; // Return the student with the grade
    });

  return studentByCity; // Return the students with the grades updated by city
}

export default updateStudentGradeByCity;
