/* * Create an interface for a Student */
/* Create two Students object */
let studentA = {
    firstName: 'Richard',
    lastName: 'Lenny',
    age: 23,
    location: 'Nyari',
};
let studentB = {
    firstName: 'Sydney',
    lastName: 'Lawie',
    age: 25,
    location: 'Kistusuru',
};
/* Create an array of Students */
let studentList = [studentA, studentB];
let table = document.createElement('table');
let tbody = document.createElement('tblbody');
studentList.forEach(function (obj) {
    let row = document.createElement('tr'); // create a row
    let cellName = document.createElement('td'); // create a cell for the name
    let cellLocation = document.createElement('td'); // create a cell for the location
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
