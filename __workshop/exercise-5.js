// Exercise 5
//
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function itemIsPresent(array, item) {
  const index = array.indexOf(item);
  if (index >= 0) {
    return true;
  } else {
    return false;
  }
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// 1 liner
// return array.includes(item);

// Test case
const myArray = [
  "bacon",
  "purple",
  "door",
  "window",
  "exist",
  "code",
  "program",
  "funky",
];

// Call the function to test your code.
console.log(itemIsPresent(myArray, "funky")); // true
console.log(itemIsPresent(myArray, "elephant")); // false

console.log(itemIsPresent(myArray, "appropriate")); // false
console.log(itemIsPresent(myArray, "code")); // true
console.log(itemIsPresent(myArray, "programming")); // false
// Create more test cases

// This is needed for automated testing (more on that later)
module.exports = itemIsPresent;
