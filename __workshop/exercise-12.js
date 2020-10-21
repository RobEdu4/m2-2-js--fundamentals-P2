// Exercise 12
//
// Write a function that accepts an array of grades (numerical values), calculates the average
// and returns the appropriate letter grade. (see below)
//
// Here is how I calculate the grades
// less than 60 is an F
// less than 70 is an D
// less than 80 is an C
// less than 90 is an B
// less than or equal to 100 is an A
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function getLetterGrade(average) {
  //avg
  const sum = average.reduce((a, b) => a + b, 0);
  //  let avg = sum / average.length;
  let avg = sum / average.length;
  let letterGrade = "";

  if (avg <= 100 && avg > 89) {
    letterGrade = "A";
  }
  if (avg < 90 && avg > 79) {
    letterGrade = "B";
  }
  if (avg < 80 && avg > 69) {
    letterGrade = "C";
  }
  if (avg < 70 && avg > 59) {
    letterGrade = "D";
  }
  if (avg < 60) {
    letterGrade = "F";
  }

  return letterGrade;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(getLetterGrade([48, 95, 65, 48, 59, 78, 72, 65, 90, 90, 95, 200]));
console.log(getLetterGrade([48, 95, 65, 48, 59, 78, 72, 65]));
console.log(getLetterGrade([90, 80, 40, 50, 60, 100]));
// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = getLetterGrade;
