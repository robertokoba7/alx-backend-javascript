/// <reference path="crud.d.ts" />

// import interface from ./interface.ts
// import CRUD from ./crud.js
import { rowTypes } from "./interface";
import * as CRUD from "./crud";

const row: rowTypes.RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}

// Insert row into table and return row ID (number) 
// (insertRow function from ./crud.js)

const newRowID: rowTypes.RowId = CRUD.insertRow(row);

// Update row with new data (updateRow function from ./crud.js)

const updatedRow: rowTypes.RowElement = { ...row, age: 23 };

// update row with new data
CRUD.updateRow(newRowID, updatedRow);

// delete row with ID = newRowID
CRUD.deleteRow(newRowID); 
