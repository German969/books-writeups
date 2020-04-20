// If you assign/pass a value itself, the value is copied. For example:
var myName = "Kyle";

var yourName = myName;

myName = "Frank";

console.log(myName);
// Frank

console.log(yourName) // each variable has its own copy of the value
// "Kyle"

// Only object values are treated as references
var myAddress = {
  street: "123 JS Blvd",
  city: "Austin",
  state: "TX"
};

var yourAddress = myAddress;

// I've got to move to a new house!
myAddress.street = "456 TS Ave"

console.log(yourAddress.street); // yourAddress is a copy of the reference to myAddress
// 456 TS Ave

// The updated value in myAddress.street is reflected when you access to yourAddress.street.
