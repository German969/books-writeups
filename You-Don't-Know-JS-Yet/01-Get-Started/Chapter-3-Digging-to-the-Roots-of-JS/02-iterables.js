// An iterable is a value that can be iterated over
// This includes strings, arrays, maps, sets and others

// An array is an iterable
var arr = [ 10, 20, 30 ];

for (let val of arr) {
  console.log(`Array value: ${ val }`);
}
// Array value: 10
// Array value: 20
// Array value: 30

// We can shallow copy an array using the ... spread operator
var arrCopy = [ ...arr ];

// We can iterate the characters in a string
var greeting = "Hello world!";
var chars = [ ...greeting ];

chars;
// [ "H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]

// Iteration over maps returns entries (2-element array) including a key and a value

// given two DOM elements btn1 and btn2

var buttonNames = new Map();
buttonNames.set(btn1, "Button 1");
buttonNames.set(btn2, "Button 2");

for (let [btn,btnName] of buttonNames) { // [btn,btnName] is called array destructuring to break down the consumed tuple
  btn.addEventListener("click", function onClick() {
    console.log(`Clicked ${ btnName }`);
  });
}

// If we want to consume only the values, we can call values() to get a values-only iterator
for (let btnName of buttonNames.values()) {
  console.log(btnName);
}
// Button 1
// Button 2

// If we want index and value in an array iteration, we can call entries() method
var arr = [ 10, 20, 30 ];

for (let [idx,val] of arr.entries()) {
  console.log(`[${idx}]: ${ val }`);
}

// We also can get a keys-only iteratos by using the keys() method
