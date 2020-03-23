// Different syntax forms to declare variables (identifiers)

// The var keyword declares a variable to be used in that part of the program
var myName = "German";
var age;

// The let keyword allows a more limited access, this is called "block scopign"
let myName = "German";
let age;

// var example
var adult = true;

if (adult) {
  var myName = "German";
  let age = 24;
  console.log("Shhh, this is a secret!");
}

console.log(myName);
// German

console.log(age);
// Error! age is block scoped to the if, whereas myName was not

// const is like let but has an additional limitation that it must be given a value at the moment it's declared, and cannot be re-assigned later
const myBirthday = true;
let age = 24;

if (myBirthday) {
  age = age + 1; // OK!
  myBirthday = false; // Error! myBirthday constant is not allowed to be re-assigned
}

// object values can still be changed even though the variable can't be re-assigned;
// It's ill-advised to use const with objects
const actors = [
  "Morgan Freeman", "Jennifer Aniston"
];

actors[2] = "Tom Cruise"; // OK! This is called mutation (allowed for const)
actors = []; // Error! re-assignment is not allowed

// function parameter identifier
function hello(myName) {
  console.log(`Hello, ${ myName }`);
}

hello("German");

// The identifier hello is created in the outer scope, and it's also associated so that it references the function.
// The named parameter myName is created only inside the function, and thus is only accessible inside that's function scope.

// catch clause identifier
try {
  someError();
}
catch (err) {
  console.log(err);
}

// The err is a block-scoped variable the exists only inside the catch clause.
