// Exercise 8
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that adds "Hello " to every element of an array of names
// For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------

function greet(list) {
  return list.map(function (name) {
    return `Hello ${name}`;
  });
}

/*
// -----------------------------------------------------------------

unassisted

function greet(list) {
  let newList = list.map((x) => "Hello " + x);
  return newList;
}

// Edit only the code between the lines (above)
*/
console.log(greet(["David", "Billy", "Lisa", "Jennifer"]));
console.log(
  greet(["Robert", "Kristina", "Mallory", "Jenn", "Maggie", "Felicia"])
);
console.log(
  greet(["Jeffrey", "Emma", "Heather", "Tracey", "Danielle", "Jessica"])
);

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = greet;
