![Alt Text](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTgyNTk5NzE1OGI2ZTBiZjMzMGU5ZDgwMmJlOTU5YWNkZDM4YzUxZSZjdD1n/qOd6hyjg9rRCBJ1XpZ/giphy.gif)

## Technologies
* Tested using the Jest Testing Framework and the command npm run test
* Analyzed using the linter ESLint along with specific rules that we’ll provide.

## Learning Objectives
* How to use map, filter and reduce on arrays
* Typed arrays
* The Set, Map, and Weak link data structures

## Concept tested & Approach
**1. Task 0: 0-get_list_students.js**
Concept being tested:
* Creating functions in JavaScript
* Working with arrays and objects in JavaScript

Approach to be taken:
* Define a function named `getListStudents` that takes no parameters
* Inside the function, create an array of objects with the required attributes for each student
* Return the array
 
 **Task 1: 1-get_list_student_ids.js**
 Concept being tested:
* Creating functions in JavaScript
* Working with arrays and objects in JavaScript
* Using the map method on arrays

Approach to be taken:
* Define a function named `getListStudentIds` that takes one parameter
* Check if the parameter is an array using the `Array.isArray()` method. If it is not an array, return an empty array
* If the parameter is an array, use the `map` method on the array to create a new array containing only the id attribute of each object
* Return the new array

**2. Task 2: 2-get_students_by_loc.js**
Concept being tested:
* Creating functions in JavaScript
* Working with arrays and objects in JavaScript
* Using the filter method on arrays

Approach to be taken:
* Define a function named `getStudentsByLocation` that takes two parameters: `students` and `city`
* Use the `filter` method on the students array to create a new array containing only the objects whose location attribute matches the city parameter
* Return the new array

**3. Task 3: 3-get_ids_sum.js**
Concept being tested:
* Creating functions in JavaScript
* Working with arrays and objects in JavaScript
* Using the reduce method on arrays

Approach to be taken:
* Define a function named `getStudentIdsSum` that takes one parameter: `students`
* Use the `reduce` method on the students array to iterate over each object and accumulate the value of their id attribute into a running sum
* Return the running sum

**4. Task 4: 4-update_grade_by_city.js**
Concept being tested:
* Creating functions in JavaScript
* Working with arrays and objects in JavaScript
* Using the filter and map methods on arrays

Approach to be taken:
* Define a function named `updateStudentGradeByCity` that takes three parameters: `students`, `city`, and `newGrades`
* Use the `filter` method on the students array to create a new array containing only the objects whose location attribute matches the city parameter
* Use the `map` method on the new array to create a new array of objects with updated grade attribute based on `newGrades` parameter. If a student doesn't have grade in `newGrades`, set their grade to "N/A".
* Return the new array

**5. Task 5: 5-typed_arrays.js**
Concept being tested:
* Creating functions in JavaScript
* Working with typed arrays in JavaScript

Approach to be taken:
* Define a function named `createInt8TypedArray` that takes three parameters: `length`, `position`, and `value`.
* Check if the position parameter is within the range of the length parameter
* If position is within range, create a new `Int8Array` typed array with length parameter as its size
* Set the value of the element at position index to the value parameter
* Return the `ArrayBuffer` of the typed array

**6. Task 6: 6-set.js**
Concept being tested:
* Creating functions in JavaScript
* Working with Sets and arrays in JavaScript

Approach to be taken:
* Define a function named `setFromArray` that takes one parameter: arr
* Create a new `Set object` using the `Set constructor` and passing the arr parameter as an argument
* Return the newly created Set object

**7. Task 7: 7-has_array_values.js**
Concept being tested:
* Creating functions in JavaScript
* Working with Sets and arrays in JavaScript
* Using Array.every() method

Approach to be taken:
* Define a function named `hasValuesFromArray` that takes two parameters: `set` and `arr`
* Use the `every` method on the arr to check if each element in the array is included in the set using `set.has()` method.
* Return true if all elements exist in the set, otherwise return false.

**8. Task 8: 8-clean_set.js**
Concept being tested:
* Using the Set object in JavaScript to store unique values in a collection.
Approach to be taken:
* Define a function named cleanSet that takes two arguments: set and startString.
* Create an empty array named `matchedValues` to store the matched values.
* Iterate over the set using the `forEach` method and check if each value starts with startString.
* If a value starts with `startString`, extract the part of the string after `startString` and add it to the `matchedValues` array.
* Convert the `matchedValues` array into a string using the join method, with `'-'` as the separator.
* Return the resulting string.






