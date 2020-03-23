// A class in a prgram is a definition of a "type" of custom data structure that includes both data and behaviors that operate on that data
class Page {
  constructor(text) {
    this.text = text; // data
  }

  print() { // behavior
    console.log(this.text);
  }
}

class Notebook {
  constructor() {
    this.pages = []; // data
  }

  addPage(text) { // behavior
    var page = new Page(text); // create instance of Page
    this.pages.push(page);
  }

  print() { // behavior
    for (let page of this.pages) {
      page.print(); // behavior can only be called on instances.
    }
  }
}

var mathNotes = new Notebook(); // creates an instance of Notebook
mathNotes.addPage("Arithmetic: + - * / ..."); // behavior can only be called on instances.
mathNotes.addPage("Trigonometric: sin cos tan ...");

mathNotes.print();
// ...
