typeof 42;                                      // "number"
typeof "abc";                                   // "string"
typeof true;                                    // "boolean"
typeof undefined;                               // "undefined"
typeof null;                                    // "object" --> JS bug!
typeof { "a": 1 };                              // "object"
typeof [1,2,3];                                 // "object" --> not "array"
typeof function hello(){console.log("hello")}:  // "function"

// Converting from one value type to another is referred to in JS as "coercion"
