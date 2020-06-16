// Add Meaningful Context

// You need to place names in context for your reader by enclosing them in well-named classes, functions or namespaces.

// Bad example
function printGuessStatistics(candidate, count) {
  let number;
  let verb;
  let pluralModifier;
  if (count == 0) {
    number = "no";
    verb = "are";
    pluralModifier = "s";
  } else if (count == 1) {
    number = "1";
    verb = "is";
    pluralModifier = "";
  } else {
    number = count.toString();
    verb = "are";
    pluralModifier = "s";
  }
  const guessMessage = `There ${verb} ${number} ${candidate}${pluralModifier}`;
  console.log(guessMessage);
}

// Here we need to create a GuessStatisticsMessage class to provide a clear context for the variables

// Good example
class GuessStatisticsMessage {
  number;
  verb;
  pluralModifier;

  make(candidate, count) {
    this.createPluralDependentMessageParts(count);
    return `There ${this.verb} ${this.number} ${this.candidate}${this.pluralModifier}`;
  }

  createPluralDependentMessageParts(count) {
    if (count == 0) {
      this.thereAreNoLetters();
    } else if (count == 1) {
      this.thereIsOneLetter();
    } else {
      this.thereAreManyLetters(count);
    }
  }

  thereAreManyLetters(int count) {
    this.number = count.toString();
    this.verb = "are";
    this.pluralModifier = "s";
  }

  thereIsOneLetter() {
    this.number = "1";
    this.verb = "are";
    this.pluralModifier = "";
  }

  thereAreNoLetters() {
    this.number = "no";
    this.verb = "are";
    this.pluralModifier = "s";
  }
}


// Don't Add Gratuitous Context

// Shorter names are generally better than longer ones, so long as they are clear.
// Add no more context to a name than is necessary.
