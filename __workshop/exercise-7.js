// Exercise 7
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that returns a new list with all the elements
// that have a length greater than 5.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function keepLong(list) {
  let longer = list.filter((word) => word.length > 5);
  return longer;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(
  keepLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
);

console.log(
  keepLong([
    "Alpaka",
    "Smol",
    "Beatport",
    "Fragments",
    "Collision",
    "Juice",
    "Box",
  ])
);

console.log(
  keepLong([
    "Juice",
    "Boxes",
    "Full",
    "Impacting",
    "Liquorish",
    "Apartment",
    "Settlement",
  ])
);

// This is needed for automated testing (more on that later)
module.exports = keepLong;
