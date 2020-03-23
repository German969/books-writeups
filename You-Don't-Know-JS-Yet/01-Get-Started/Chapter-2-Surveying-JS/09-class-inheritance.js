// Publication defines a set of common behavior that any publication might need.
class Publication {
  constructor(title, author, pubDate) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }

  print() {
    console.log(`
        Title: ${ this.title }
        By: ${ this.author }
        ${ this.pubDate }
      `);
  }
}

// More specific types of publications
class Book extends Publication { // extends the general definition of Publication to include additional behavior
  constructor(bookDetails) {
    super( // delegates to the parent class's definition constructor for its initialization
      bookDetails.title,
      bookDetails.author,
      bookDetails.publishedOn
    );
    this.publisher = bookDetails.publisher; // specific things according to their respective sub-class
    this.ISBN = bookDetails.ISBN;
  }

  print() {
    super.print();
    console.log(`
        Publisher: ${ this.publisher }
        ISBN: ${ this.ISBN }
      `)
  }
}

class BlogPost extends Publication {
  constructor(title, author, pubDate, URL) {
    super(title, author, pubDate);
    this.URL = URL;
  }

  print() { // override of the inherited print() from the parent
    super.print(); // invoke inherited version of the print() method
    console.log(this.URL);
  }
}

var YDKY = new Book({
  title: "You Don't Know JS",
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

var forAgainstLet = new BlogPost(
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

// The fact that both the inherited and overriden methods can have the same name and co-exist is called polymorphism.
