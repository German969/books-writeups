// given an iterator of some data source:
var it = [1, 2, 3];

// loop over its results one at a time
for (let val of it) {
  console.log(`Iterator value: ${ val }`);
}
// Iterator value: 1
// Iterator value: 2
// Iterator value: 3

// Another mechanism to consume iterators is the ... (spread) operator
// But you need to have something to spread into (an array or an argument list)

// Array spread
// with each iterated value occupying an array element position
var vals = [ ...it ];

// Function call spread
// call with each iterated value occupying an argument position
doSomethingUseful( ...it );

// ES6 iteration protocol also includes a manual approach by calling next() method whose returns an object called iterator result
// The object has value and done properties, where done is false until the iteration is complete
