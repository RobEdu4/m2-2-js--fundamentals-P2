// Exercise 16
//
// Write a JavaScript program that returns an array of ALL the numbers
// between two provided values, num1 and num2, that meet the following criteria.
//
// The sum of the cube of the digits of a number is equal to the number.
//
// e.g.
// 371 --> 3^3 + 7^3 + 1^3 = 371.

// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function findNumbers(num1, num2) {
  let arrayNums = [];

  for (var i = num1; i <= num2; i++) {
    let digits = i.toString().split("");
    let sum = 0;
    for (var j = 0; j < digits.length; j++) {
      sum += Math.pow(digits[j], 3);
    }
    if (sum === i) arrayNums.push(i);
  }

  return arrayNums;
}

// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(findNumbers(0, 1000));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = findNumbers;
