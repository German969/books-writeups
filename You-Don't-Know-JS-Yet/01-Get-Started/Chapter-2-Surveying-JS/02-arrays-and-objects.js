// Arrays are a special type of objects that's compressed of an ordered and numerically indexed list of data
var names = ["Frank", "Kyle", "Peter", "Susan"];

names.length;
// 4

names[0];
// Frank

names[1];
// Kyle

// Objects can hold any value type, either primitive or object.

// Objects are an unordered, keyed collection of any various values
var me = {
  first: "German",
  last: "Monzon",
  age: 24,
  specialities: ["JS", "Table Tennis"]
};

console.log(`My name is ${ me.first }.`);
// me is an oobject and first is the location of information iun that object

// another option is is access by property name
console.log(`My name is ${ me["first"] }.`);
