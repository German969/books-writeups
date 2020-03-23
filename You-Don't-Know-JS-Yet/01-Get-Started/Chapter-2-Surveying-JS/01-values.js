// Literals
console.log("My name is German");
// "My name is German" is a string literal.

// Back-tick behavior
var firstName = "German";

console.log("My name is ${ firstName }."):
// My name is ${ firstName }.

console.log('My name is ${ firstName }.');
// My name is ${ firstName }.

// Interpolated expression
console.log(`My name is ${ firstName }.`);
// My name is German.

// Symbol value
var symbolExample[Symbol("this is hidden")] = "meaning of life";
// Special purpose value that behaves as a hidden unguessable value

// Other primitives values
var numberValue = 3.14;
var booleanValue = false;
var emptinessValue1 = null:
var emptinessValue2 = undefined; // it's safest andd best to use only undefined as the single empty value.
