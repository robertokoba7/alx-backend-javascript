# ES6 Promises

Project done during **Full Stack Software Engineering studies** at **ALX SE programme and Holberton School**. It aims to learn about **ES6** and its new features. By the end of the project, am expected to be proficient in:
* Promise
* JavaScript Promise: An introduction
* Await
* Async
* Throw / Try

## Technologies
* Tested using the `Jest Testing Framework` and the command `npm run test`
* Analyzed using the linter ESLint along with specific rules that we’ll provide.

## Learning Objectives
At the end of this project, am expected to be able to explain to anyone, without the help of Google:
* Promises (how, why, and what)
* How to use the `then`, `resolve`, `catch` methods
* How to use every method of the Promise object
* Throw / Try
* The await operator
* How to use an `async` function

## Files
**FIles**  |**Description**
--------------------|-------------------
`0-promise.js`  | Return a Promise using this prototype `function getResponseFromAPI()`
`1-promise.js` | Using the prototype given, return a `promise`. The parameter is a `boolean`
`2-then.js` | Using the function prototype `function handleResponseFromAPI(promise)` Append three handlers to the function.
`3-all.js` | Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console.
`4-user-promise.js` | Using the following prototype `function signUpUser(firstName, lastName) {}` returns a resolved promise with the given object.
`5-photo-reject.js` | Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string).The function should return a Promise rejecting with an Error and the string `$fileName cannot be processed`
`6-final-user.js` | Import `signUpUse` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`.Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array with the following givn structure.
`7-load_balancer.js` | function named loadBalancer. It should accept two arguments chinaDownload (Promise) and USDownload (Promise).
`8-try.js` | function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number).When the `denominator` argument is equal to 0, the function should throw a new error with the `message cannot divide by 0`. Otherwise it should return the numerator divided by the denominator.
`9-try.js` | function named `guardrail` that will accept one argument `mathFunction` (Function). The function should create and return an array named `queue`. When the `mathFunction` function is executed, the value returned by the function should be appended to the `queue`. If this function throws an error, the error message should be appended to the queue. In every case, the message `Guardrail was processed` should be added to the queue.
`100-await.js` |  function named asyncUploadUser that will call these two functions and return an object with the format given.
