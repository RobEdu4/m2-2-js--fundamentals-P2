// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
  bCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") bCount++;
  }
  return bCount;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(countBs("bBBbbbbbbbbbBBbbBBBBbdFbvDFbfdbDFbdBFBdFBfdBBfdbfdbB"));

// This is needed for automated testing (more on that later)
module.exports = countBs;
