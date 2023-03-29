/* * Create an interface for a Student */

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

  /* Create two Students object */

  const studentA: Student = {
    firstName: 'Richard',
    lastName: 'Lenny',
    age: 23,
    location: 'Nyari',
  }

  const studentB: Student = {
    firstName: 'Sydney',
    lastName: 'Lawie',
    age: 25,
    location: 'Kistusuru',
  }

  /* Create an array of Students */
  
  const studentList = [studentA, studentB];

  const table = document.createElement('table');
  const tbody = document.createElement('tblbody');

  studentList.forEach((obj) => {
    const row = document.createElement('tr'); // create a row
    const cellName = document.createElement('td');  // create a cell for the name
    const cellLocation = document.createElement('td'); // create a cell for the location

    // set the text content of the cell to the first name
    cellName.textContent = obj.firstName;
  
    // set the text content of the cell to the location
    cellLocation.textContent = obj.location;
    row.appendChild(cellName); // append the cell to the row
    row.appendChild(cellLocation); // append the cell to the row
    tbody.appendChild(row); // append the row to the tbody
  });
  table.appendChild(tbody); // append the tbody to the table
  document.body.appendChild(table); // append the table to the body

