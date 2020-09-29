// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {
  let sum = 0;

  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return Math.floor(sum / grades.length);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(calculateAverage([85, 89, 90, 57, 75, 87, 81, 95]));

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
