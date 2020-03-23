// ESMs are "singletons", that at first import is created, and other imports then receive the same instance.

// To use multiple-instantiation you need to mix ESM and classic modules.

// there's no wrapping function to define a module. The wrapping context is a file.
// in publication.js
function printDetails(title, author, pubDate) {
  console.log(`
      Title: ${ title }
      By: ${ author }
      ${ pubDate }
    `);
}

export function create(title, author, pubDate) { // you use the export keyword to add a variable or method to its public API definition.
  var publicAPI = {
    print() {
      printDetails(title, author, pubDate);
    }
  };

  return publicAPI;
}

// in blogpost.js
import { create as createPub } from "publication.js"; // you don't instantiate an ES module, you just import it to use its single instance.

function printDetails(pub, URL) {
  pub.print();
  console.log(URL);
}

export function create(title, author, pubDate, URL) {
  var pub = createPub(title, author, pubDate);

  var publicAPI = {
    print() {
      printDetails(pub, URL);
    }
  };

  return publicAPI;
}

// in main.js
import { create as newBlogPost } from blogpost.js; // to use the module, we import it into another ES module
// the as newBlogPost is optional, if omitted, a function named create() would be imported

var forAgainstLet = newBlogPost(
  "For and against let",
  "Kyle Simpson",
  "October 27, 2014",
  "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();
// Title: For and against let
// By: Kyle Simpson
// October 27, 2014
// https://davidwalsh.name/for-and-against-let
