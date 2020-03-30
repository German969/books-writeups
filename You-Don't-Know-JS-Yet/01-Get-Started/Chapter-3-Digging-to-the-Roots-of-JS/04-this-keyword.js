// The this keyword references the execution context of the function where it's called
// execution context is determine at the time the function is executed
function classroom(teacher) {
  return function study() {
    console.log(
      `${ teacher } says to study ${ this.topic }`
    ); // the this reference makes the inner function a this-aware function, is dependant on its execution context.
  };
}
var assignment = classroom("Kyle");

assignment();
// Kyle says to study undefined
// we don't provide any execution context so the default context is the global object (window in browser)

// With specific execution context
var homework = {
  topic: "JS",
  assignment: assignment // this for this copy of assignment is the homework object
};

homework.assignment();
// Kyle says to study JS

var otherHomework = {
  topic: "Math"
};

assignment.call(otherHomework); // call method takes an object to use it as the this reference
// Kyle says to study Math
