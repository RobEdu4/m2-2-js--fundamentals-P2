// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {
  const sum = grades.reduce((a, b) => a + b, 0);
  return Math.round(sum / grades.length);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(calculateAverage([85, 89, 90, 57, 75, 87, 81, 95]));

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
