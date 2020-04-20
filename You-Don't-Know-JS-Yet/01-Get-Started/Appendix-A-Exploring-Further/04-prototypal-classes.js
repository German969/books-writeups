// Prototypal classes (ES6 class system predecessor)
var Classroom = {
  welcome() {
    console.log("Welcome, students!");
  }
};

var mathClass = Object.create(Classroom); // mathClass is linked via its prototype to a Classroom object

mathClass.welcome();
// Welcome, students!

// Alternatively
function Classroom() {
  // ..
}

Classroom.prototype.welcome = function hello() { // All functions by default reference an empty object at a property named prototype
  console.log("Welcome, students!");
};

var mathClass = new Classroom();

mathClass.welcome(); // Thus mathClass does not have a welcome() property, it delegates to the Classroom.prototype.welcome()
// Welcome, students!

// ES6 class mechanism (strongly encouraged over prototypal classes)
class Classroom {
  constructor() {
    // ..
  }

  welcome() {
    console.log("Welcome, students!");
  }
}

var mathClass = new Classroom();

mathClass.welcome();
// Welcome, students!

// Same prototype linkage is wired up, but this sintax fits the class-oriented design pattern much more cleanly
