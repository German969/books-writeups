3 === 3.0;            // true
"yes" === "yes";      // true
null === null;        // true
false === false;      // true

42 === "42";          // false
"hello" === "Hello";  // false
true === 1;           // false
0 === null;           // false
"" === null;          // false
null === undefined;   // false

// ==='s equality does not allow coercion

// The === operator is designed to lie in two cases
NaN === NaN;   // false
0 === -0;      // true

// For NaN comparisons, use the Number.isNaN(..) utility.
// For -0 comparison, use the Object.is(..) utility, that can also can be used for NaN comparisons.

// Objects comparison
[ 1, 2, 3 ] === [ 1, 2, 3];   // false
{ a: 42 } === { a: 42 };      // false
(x => x * 2) === (x => x * 2) // false

// JS does not define === as structural equality for object values. Instead, uses identity equality for object values.

var x = [ 1, 2, 3];

// assignment is by reference-copy. y references the same array as x.
var y = x;

y === x;            // true
y === [ 1, 2, 3 ]   // false
x === [ 1, 2, 3 ]   // false

// JS does not provide a mechanism for structural equality comparison of object values.

// Implementing structural equality comparison is difficult.
// How to determine if two function references are "structurally equivalent"? How to take in account things like closure?
