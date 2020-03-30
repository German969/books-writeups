// A prototype is a characteristic of an object, and speciffically resolution of a property access
// Prototype is a linkage that occurs when an object is created and linked to another one that already exists

var homework = {
  topic: "JS"
}; // It's default prototype connects to the Object.prototype

homework.toString(); // [object Object]
// homework doesn't have a toString() method, the delegation invokes Object.prototype.toString()

// Object Linkage
var homework = {
  topic: "JS"
};

var otherHomework = Object.create(homework); // the argument specifies an object to link the newly created one

otherHomework.topic; // "JS"

// If you assign to a property of an object, that will apply directly to the object
homework.topic;
// "JS"

otherHomework.topic;
// "JS"

otherHomework.topic = "Math"; // the assignment to topic creates a property directly on otherHomework
otherHomework.topic; // the property on ontherhomework is shadowing the property on the homework object
// "Math"

homework.topic; // There's no effect pm the topic propery on homework
// "JS"  -- not match

// this with prototype chain
var homework = {
  study() {
    console.log(`Please study ${ this.topic }`);
  }
};

var jsHomework = Object.create(homework);
jsHomework.topic = "JS";
jsHomework.study(); // delegates to homework.study() but 'this' resolves to jsHomework because of how the function is called
// Please study JS

var mathHomework = Object.create(homework); // both objects link to homework which has the study() function
mathHomework.topic = "Math"; // each one is given their own topic porperty
mathHomework.study(); // If this was resolved to homework this code will be useless
// Please study Math
