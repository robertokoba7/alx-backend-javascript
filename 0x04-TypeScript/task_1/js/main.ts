// Create an interface for a Teacher.
// Teacher interface

interface Teacher {
  readonly firstName: string; // readonly means that the value can only be set when the teacher object is initialized and cannot be modified afterwards.
  readonly lastName: string; // the value cannot be modified.
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Create an interface for a Directors that extends the Teacher interface
// Directors interface

interface Directors extends Teacher {
  numberOfReports: number;
}

// Function to print the teacher's name in this format: 'firstName[0]' and  'lastName'.
// interface for the function named printTeacherFunction

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher('Robert', 'Okoba')); // Prints the teacher's name

// Class description interface

interface classInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

//  Description interface for the constructor.
interface classConstructor {
  new (firstName: string, lastName: string): classInterface;
}

/* Creating a Class and Constructor through interfaces */

// Description interface for a class  Student.
class StudentClass implements classInterface {
  firstName: string;
  lastName: string;

// // Constructor accepts two arguments
  constructor(firstName: string, lastName: string) { 
    this.firstName = firstName;
    this.lastName = lastName;
  }
 
  //class has a method named workOnHomework that return the string Currently working
  workOnHomework(): string {
    return 'Currently working';
  }

  //class has a method named `displayName` and It returns the firstName of the student
  displayName(): string {
    return this.firstName;
  }
}

/* Creating instance of StudentClass that returns the student's name and says if he is working on homework */
const studentClass: StudentClass = new StudentClass('Perpetual', 'Wairimu');
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());

