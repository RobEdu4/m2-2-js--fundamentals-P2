// Exercise 1.3
//
// Write a function that accepts a string of words
// and returns the character-count of that string. (include spaces)
//
// Example:
// characterCount("ba c def") should return 6
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function characterCount(string) {
  let charCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      charCount++;
    }
  }
  return charCount;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(characterCount("wubba lubba dub dub"));

// Create more test examples.

// This is needed for automated testing (more on that later)
module.exports = characterCount;
