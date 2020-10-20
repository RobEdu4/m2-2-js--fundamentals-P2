// Exercise 10
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that returns true if every element of list is of length at least 5.
// Otherwise, it returns false.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function allLong(list) {
  return list.every(function (name) {
    return name.length > 4;
  });
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(
  allLong(["Robert", "Robert", "Robert", "Robert", "Robert", "Robert"])
);
console.log(
  allLong(["Robert", "Robert", "Robert", "Robert", "Robert", "Jeffr"])
);
// This is needed for automated testing (more on that later
module.exports = allLong;
