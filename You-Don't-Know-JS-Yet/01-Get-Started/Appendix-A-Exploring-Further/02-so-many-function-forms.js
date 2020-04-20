// This function expression is referred to as an anonymous function expression
var awesomeFunction = function(coolThings) { // It has no name specified between the function keyword and the arguments
  // ..
  return amazingStuff;
}

awesomeFunction.name; // JS performs a name inference on an anonymous function
// "awesomeFunction"

// name inference only occur when there is an assignment =
// even if the name is inferred, its still an anonymous function
// an anonymous function doesn't have an identifier to to use to refer itself from inside itself.

// let awesomrFunction = ..
// cont awesomeFunction = ..
var awesomeFunction = function someName(coolThings) { // This is a named function expression
  // ..
  return amazingStuff;
}

awesomeFunction.name; // The identifier someName takes precedence when assigning the name property
// "someName"

// More declaration forms

// generator function declaration
function *two() { .. }

// async function declaration
async function three() { .. }

// async generator function declaration
async function *four() { .. }

// named function export declaration (ES6 modules)
export function five() { .. }

// More function expression forms

// IIFE
(function(){ .. })();
(function namedIIFE(){ .. })();

// asynchronous IIFE
(async function(){ .. })();
(async function namedAIIFE(){ .. })();

// arrow function expressions
var f;
f = () => 42;
f = x => x * 2;
f = (x) => x * 2;
f = (x, y) => x * y;
f = x => ({ x: x * 2 });
f = x => { return x * 2; };
f = async x => {
  var y = await doSomethingAsync(x);
  return y * 2;
};
someOperation( x => x * 2 );
// ..

// Arroy function expressions are syntactically annonymous
// The purpose of arroy functions is handling the this keyword lexically

// In class definitions and object literals, fgunctions are referred to as "methods"
class SomethingKindaGreat {
  // class methods
  coolMethod() { .. } // no commas!
  boringMethod() { .. }
}

var EntirelyDifferent = {
  // object methods
  coolMethod() { .. }, // commas!
  boringMethod() { .. },

  // (anonymous) function expression property
  oldSchool: function() { .. }
}
