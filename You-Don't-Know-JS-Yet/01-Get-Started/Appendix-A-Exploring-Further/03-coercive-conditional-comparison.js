// Conditional expressions needing to perform coercion-oriented comparisons to make their decisions
var x = 1;

if (x) {
  // will run!
}

while (x) {
  // will run, once!
  x = false;
}

if (x == true) {
  // will run!
}

// Consider a second case
var x = "hello";

if (x) {
  // will run!
}

if (x == true) {
  // won't run :(
}

// Mental model of the preceding conditionals
var x = "hello";

if (Boolean(x) == true) { // A coercion to a boolean value occurs before the comparison
  // will run
}

// which is the same as:

if (Boolean(x) === true) {
  // will run
}
