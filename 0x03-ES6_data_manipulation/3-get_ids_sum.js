function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0
  }

  const sumIds = students.reduce((sum, student) => sum + student.id, 0);
  return sumIds;
};

export default getStudentIdsSum;
