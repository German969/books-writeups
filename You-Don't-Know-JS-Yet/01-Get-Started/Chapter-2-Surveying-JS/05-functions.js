// Function declaration
function awesomeFunction(coolThings) {
  // ..
  return amazingStuff;
}

// The association between the identifier awesomeFunction and the function value happens during the compile phase.

// Function expression
// let awesomeFunction = ..
// const awesomeFunction = ..
var awesomeFunction = function(coolThings) {
  return amazingStuff;
};

// A function expression is not associated with its identifier until that statement during runtime.

// Functions are values that can be assigned and passed around.
// Function are a special type of object values.

// JS functions can receive parameter input
function greeting(myName) {
  console.log(`Hello, ${ myName }!`);
}

greeting("German"); // Hello, German!

// myName is called a parameter, wich acts as a local variable inside the function.
// Functions can be defined to receive any number of parameters.
// Each parameter is assigned the argument value that you pass in that position.

// Function can return values using the return keyword
function greeting(myName) {
  return `Hello, ${ myName }!`;
}

var msg = greeting("German");

console.log(msg); // Hello, German!

// If you have more values to return, you can wrap them into a single object/array.

// Functions can be assigned as properties on objects
var whtToSay = {
  greeting() {
    console.log("Hello!");
  }
  question() {
    console.log("What's your name?");
  }
  answer() {
    console.log("My name is German.");
  }
}

whatToSay.greeting(); // Hello!
