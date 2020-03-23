// Classic Modules
function Publication(title, author, pubDate) { // outer function which returns an "instance" of the module
  var publicAPI = {
    print() { // functions exposed that can operate on the module's instance internal data
      console.log(`
          Title: ${ title }
          By: ${ author }
          ${ pubDate }
        `);
    }
  };

  return publicAPI;
}

function Book(bookDetails) {
    var pub = Publication(
      bookDetails.title,
      bookDetails.author,
      bookDetails.publishedOn
    );

    var publicAPI = {
      print() {
        pub.print();
        console.log(`
            Publisher: ${ bookDetails.publisher }
            ISBN: ${ bookDetails.ISBN }
          `); // no this identifier needed
      }
    };

    return publicAPI; // explicitly create a return object with publicly methods
}

function BlogPost(title, author, pubDate, URL) {
  var pub = Publication(title, author,  pubDate); // unreferenced methods and data remain private in factory function

  var publicAPI = {
    print() {
      pub.print();
      console.log(URL);
    }
  };

  return publicAPI;
}

// There are different sintaxes: AMD (Asynchronous Module Definition), UMD (Universal Module Definition) and CommonJS (classic Node.js-style modules)

var YDKJS = Book({ // no need to use the "new" keyword
  title: "you Don't Know JS",
  author: "Kyle Simpson",
  publishedOn: "June 2014",
  publisher: "O'Reilly",
  ISBN: "123456-789"
});

YDKJS.print();
// Title: You Don't Know JS
// By: Kyle Simpson
// June 2014
// Publisher: O'Reilly
// ISBN: 123456-789

var forAgainstLet = BlogPost(
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
