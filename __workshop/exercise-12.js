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
function getLetterGrade(grades) {
  //avg
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  let average = sum / grades.length;
  //avg

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] <= 100 && grades[i] > 89) {
      grades.splice(i, 1, "A");
    } else if (grades[i] < 90 && grades[i] > 79) {
      grades.splice(i, 1, "B");
    } else if (grades[i] < 80 && grades[i] > 69) {
      grades.splice(i, 1, "C");
    } else if (grades[i] < 70 && grades[i] > 59) {
      grades.splice(i, 1, "D");
    } else if (grades[i] < 60) {
      grades.splice(i, 1, "F");
    }
  }

  return grades;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(getLetterGrade([48, 95, 65, 48, 59, 78, 72, 65]));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = getLetterGrade;
