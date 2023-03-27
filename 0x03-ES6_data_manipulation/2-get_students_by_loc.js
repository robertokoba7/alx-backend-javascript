const getStudentsByLocation = (array, city) => array.filter(i => i.location === city);

export default getStudentsByLocation;
