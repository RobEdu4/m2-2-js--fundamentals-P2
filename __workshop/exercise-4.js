// Exercise 4
//
// Write a function that accepts 5 grades (positive numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(num1, num2, num3, num4, num5) {
  return Math.round((num1 + num2 + num3 + num4 + num5) / 5);
}

// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
// Call the function to test your code.
console.log(calculateAverage(3, 1, 1, 1, 1));
console.log(calculateAverage(1, 4, 6, 7, 8));
console.log(calculateAverage(9, 12, 51, 63, 83));
console.log(calculateAverage(1231239, 152342, 8785451, 432163, 74283));
console.log(calculateAverage(0.3, 0.6, 0.5, 0.8, 0.7));
// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
