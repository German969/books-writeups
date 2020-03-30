// Closure is when a function remembers and continues to access variables from
// outside its scope.

// Closure is part of the nature of a function.

function greeting(msg) {
  return function who(name) { // The function 'who' closes over the variable 'msg' (creates a closure over msg)
    console.log(`${ msg }, ${ name }!`);
  }
}

var hello = greeting("Hello");
var howdy = greeting("Howdy");

hello("Kyle"); // msg variable remains after execution of greeting because inner instance is still alive with its closure
// Hello, Kyle!

hello("Sarah");
// Hello, Sarah!

howdy("Grant");
// Howdy, Grant!

// Closures are a direct link and preservation of the variables itself
// Closures can observe or make updates to the closed variables

function counter(step = 1) {
  var count = 0;
  return function increaseCount(){ // each instance of the inner function is closed over count and step variables
    count = count + step; // count is updated on each invocation of the inner function
    return count;
  }
}

var incBy1 = counter(1);
var incBy3 = counter(3);

incBy1(); // 1
incBy1(); // 2

// The updates are preserved
incBy3(); // 3
incBy3(); // 6
incBy3(); // 9

// Closure in asynchronous code: callbacks
function getSomeData(url) {
  ajax(url, function onResponse(resp){ // inner function onResponse is closed over url so it preserves it until the ajax call is completed
    console.log(
      `Response (from ${ url }): ${ resp }`
    );
  });
}

getSomeData("https://some.url/wherever");
// Response (from https://some.url/wherever): ...

// Is not necessary that the outer scope be a Function
for (let [idx,btn] of buttons.entries()) { // let declaration get new block-scoped idx and btn each iteration
  btnaddEventListener("click", function onClick() { // inner function onClick closes over idx variable
    console.log(`Clicked on button (${ idx })!`);
  });
}
